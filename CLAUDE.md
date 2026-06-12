# CLAUDE.md - KET绘本项目指南

> 本文档为 Claude Code 提供项目开发指导，记录架构设计、开发规范和注意事项。

---

## 📋 项目简介

**KET绘本** 是一个 AI 驱动的英语学习平台，面向 8-12 岁学习 KET 词汇的儿童。

### 核心功能
- 基于选定 KET 词汇自动生成英文儿童故事
- AI 配图（4张插图）
- 四种故事风格：冒险/童话/科幻/日常
- 用户账号系统 & 学习进度追踪
- 历史故事库

### 目标用户
- 主要：8-12 岁 KET 英语学习者
- 次要：家长和老师

---

## 🛠️ 技术栈

| 分类 | 技术选型 |
|------|----------|
| 框架 | Next.js 16 (App Router) |
| 语言 | TypeScript |
| UI | Tailwind CSS + React 18 |
| 数据库 | PostgreSQL + Prisma ORM |
| AI 服务 | VolcEngine (Doubao) - LLM + 图片生成 |
| 文件存储 | Cloudflare R2 (S3 兼容) |
| 邮件 | Resend + React Email |
| 部署 | Vercel (待定确认) |

---

## 📁 核心目录结构

```
src/
├── app/
│   ├── api/
│   │   ├── auth/           # 认证接口
│   │   ├── story/          # 故事生成接口
│   │   │   ├── generate/route.ts   # 创建生成任务
│   │   │   └── status/route.ts      # 查询任务状态
│   │   ├── words/          # 词汇接口
│   │   └── cron/           # 定时任务
│   ├── login/              # 登录页
│   ├── register/           # 注册页
│   ├── layout.tsx
│   └── page.tsx            # 首页
├── components/
│   ├── Auth/               # 认证组件
│   ├── WordInput.tsx       # 词汇选择 & 风格选择
│   ├── StoryViewer.tsx     # 故事展示、幻灯片、导出
│   ├── StoryLibrary.tsx    # 历史故事库
│   ├── GenerationProgress.tsx  # 进度显示
│   └── ProgressStats.tsx   # 学习统计
├── lib/
│   ├── providers/
│   │   ├── aiProvider.ts   # AI Provider 接口定义
│   │   └── volcEngineProvider.ts  # 火山引擎实现
│   ├── services/
│   │   ├── aiService.ts    # AI 业务逻辑（构建提示词）
│   │   ├── taskService.ts  # 异步任务编排（核心）
│   │   └── authService.ts  # 认证服务
│   ├── hooks/
│   │   └── useAuth.ts
│   ├── db.ts               # Prisma 客户端（带降级处理）
│   ├── kv.ts               # 内存 KV（数据库降级方案）
│   ├── r2.ts               # R2 上传
│   ├── email.ts            # 邮件发送
│   ├── ai.ts               # 前端 AI 入口（含轮询）
│   ├── errors.ts           # 错误类定义
│   └── logger.ts           # AI 调用日志
├── data/
│   └── ketWords.ts         # KET 词汇数据
├── emails/                 # React Email 模板
├── generated/prisma/       # Prisma Client 输出目录
└── types/index.ts          # 类型定义

prisma/
├── schema.prisma           # 数据模型
├── seed.ts                 # 初始化脚本
└── migrations/             # 数据库迁移

scripts/                    # 工具脚本
```

---

## 🏗️ 核心架构与流程

### 故事生成主流程

```
1. WordInput 组件：用户选择 5-30 个单词 + 风格
2. 点击生成 → 调用 src/lib/ai.ts 的 generateStoryBook()
3. generateStoryBook() 首先尝试【异步模式】：
   ├─ POST /api/story/generate → 返回 taskId
   ├─ 轮询 GET /api/story/status?taskId= (每2秒，动态退避)
   └─ 若 404/失败 → 自动降级到【同步模式】
4. 后台 taskService.ts 执行：
   ├─ 进度 10%：生成故事（LLM）
   ├─ 进度 30%：切分句子为 4 个提示词
   ├─ 进度 30-80%：**并行生成4张图片**（性能优化）
   ├─ 下载图片 → 上传 R2 → 获取永久链接
   └─ 进度 100%：完成
5. StoryViewer 展示结果
```

### 关键文件速查表

| 文件 | 职责 | 关键函数 |
|------|------|----------|
| `src/lib/providers/volcEngineProvider.ts` | 火山引擎 API 封装 | `generateStory()` (60s超时), `generateImage()` (120s超时), **重试机制** (3次, 指数退避) |
| `src/lib/services/aiService.ts` | 业务逻辑层 | 构建中文提示词、KET词汇限制 (120-150词)、4种风格映射 |
| `src/lib/services/taskService.ts` | 任务编排（核心） | `createStoryTask()` (异步), `executeStoryTaskDirectly()` (同步), **数据库/内存双存储降级** |
| `src/lib/kv.ts` | 内存任务存储 | 开发环境或 DB 不可用时的降级方案 |
| `src/lib/db.ts` | Prisma 客户端 | 带连接池、优雅降级处理 |
| `src/lib/r2.ts` | 图片上传 | 使用 AWS S3 SDK 上传到 Cloudflare R2 |
| `src/lib/ai.ts` | 前端 AI 入口 | `generateStoryBook()` (主入口, 自动降级), 轮询逻辑 |
| `src/components/StoryViewer.tsx` | 故事展示 | 幻灯片、单词卡片、导出 Word |

### 数据模型 (Prisma)

- **User** - 用户账号
- **Word** - KET 词汇表
- **Story** - 生成的故事
- **UserLearning** - 学习进度
- **DailyRecord** - 每日学习记录
- **LearningSettings** - 用户偏好设置
- **Task** - 异步生成任务

---

## 🚀 常用开发命令

```bash
# 依赖安装
npm install
# → 自动执行 postinstall: prisma generate

# 开发服务器 (端口 3000)
npm run dev

# 生产构建
npm run build

# 启动生产服务器
npm start

# 代码检查
npm run lint

# Prisma 相关 (如需)
npx prisma generate
npx prisma db push
npx prisma studio
```

---

## 📝 开发规范

### 1. 修改代码注意事项

> **⚠️ 高风险区域 - 修改请谨慎**
> - `src/lib/services/taskService.ts` - 任务编排逻辑，涉及异步/同步双模式、数据库降级
> - `src/lib/ai.ts` - 前端轮询逻辑，与 Vercel 无服务器环境兼容性敏感
> - `src/lib/providers/volcEngineProvider.ts` - API 超时与重试策略

> **📖 先读原则**
> - 改 prompt → 先读 `aiService.ts`
> - 改生成流程 → 先读 `taskService.ts`
> - 改 API 路由 → 先读对应 `route.ts` + `db.ts` (数据库降级机制)

### 2. 代码风格约定

- 使用 TypeScript，尽量避免 `any`
- 函数功能单一化
- 错误处理：优先使用 `AIError` 类，或返回明确的错误信息
- 日志：关键路径使用 `console.log`/`console.warn`，AI 调用使用 `AILogger`

### 3. Git 提交规范

> 本项目暂无强制规范，建议清晰描述改动内容。

---

## 🔧 环境变量

必需配置（.env.local）：

```bash
# 数据库
DATABASE_URL="postgresql://..."

# 火山引擎 AI
VOLC_API_BASE_URL="https://ark.cn-beijing.volces.com"
VOLC_ACCESS_TOKEN_CHAT="..."
VOLC_ACCESS_TOKEN_IMAGE="..."
VOLC_MODEL_CHAT="doubao-seed-2-0-code-preview-260215"
VOLC_MODEL_IMAGE="doubao-seedream-4-5-251128"

# Cloudflare R2
R2_ENDPOINT="https://<accountid>.r2.cloudflarestorage.com"
R2_ACCESS_KEY_ID="..."
R2_SECRET_ACCESS_KEY="..."
R2_BUCKET_NAME="ket-picture-book"
R2_PUBLIC_URL="https://..."

# Resend 邮件
RESEND_API_KEY="..."
```

---

## 💡 输出风格要求

> Claude 在本项目的回答与代码修改应遵循：
> 1. **务实** - 不做过度设计，只解决当前问题
> 2. **稳健** - 保持现有降级机制（DB → 内存、异步 → 同步）
> 3. **清晰** - 代码注释说明"为什么"而非"是什么"
> 4. **测试意识** - 修改关键路径时考虑异常情况

---

## 📌 待确认事项

- [ ] 部署目标环境是否为 Vercel
- [ ] 是否有 CI/CD 流程
- [ ] 生产环境数据库供应商
- [ ] R2 图片生命周期策略

---

**文档版本**：v2.0
**最后更新**：2026-06-12
