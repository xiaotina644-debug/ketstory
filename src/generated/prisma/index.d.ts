
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Word
 * 
 */
export type Word = $Result.DefaultSelection<Prisma.$WordPayload>
/**
 * Model Story
 * 
 */
export type Story = $Result.DefaultSelection<Prisma.$StoryPayload>
/**
 * Model UserLearning
 * 
 */
export type UserLearning = $Result.DefaultSelection<Prisma.$UserLearningPayload>
/**
 * Model DailyRecord
 * 
 */
export type DailyRecord = $Result.DefaultSelection<Prisma.$DailyRecordPayload>
/**
 * Model LearningSettings
 * 
 */
export type LearningSettings = $Result.DefaultSelection<Prisma.$LearningSettingsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.word`: Exposes CRUD operations for the **Word** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Words
    * const words = await prisma.word.findMany()
    * ```
    */
  get word(): Prisma.WordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.story`: Exposes CRUD operations for the **Story** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stories
    * const stories = await prisma.story.findMany()
    * ```
    */
  get story(): Prisma.StoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userLearning`: Exposes CRUD operations for the **UserLearning** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserLearnings
    * const userLearnings = await prisma.userLearning.findMany()
    * ```
    */
  get userLearning(): Prisma.UserLearningDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dailyRecord`: Exposes CRUD operations for the **DailyRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DailyRecords
    * const dailyRecords = await prisma.dailyRecord.findMany()
    * ```
    */
  get dailyRecord(): Prisma.DailyRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.learningSettings`: Exposes CRUD operations for the **LearningSettings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LearningSettings
    * const learningSettings = await prisma.learningSettings.findMany()
    * ```
    */
  get learningSettings(): Prisma.LearningSettingsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Word: 'Word',
    Story: 'Story',
    UserLearning: 'UserLearning',
    DailyRecord: 'DailyRecord',
    LearningSettings: 'LearningSettings'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "word" | "story" | "userLearning" | "dailyRecord" | "learningSettings"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Word: {
        payload: Prisma.$WordPayload<ExtArgs>
        fields: Prisma.WordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload>
          }
          findFirst: {
            args: Prisma.WordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload>
          }
          findMany: {
            args: Prisma.WordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload>[]
          }
          create: {
            args: Prisma.WordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload>
          }
          createMany: {
            args: Prisma.WordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload>[]
          }
          delete: {
            args: Prisma.WordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload>
          }
          update: {
            args: Prisma.WordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload>
          }
          deleteMany: {
            args: Prisma.WordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload>[]
          }
          upsert: {
            args: Prisma.WordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload>
          }
          aggregate: {
            args: Prisma.WordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWord>
          }
          groupBy: {
            args: Prisma.WordGroupByArgs<ExtArgs>
            result: $Utils.Optional<WordGroupByOutputType>[]
          }
          count: {
            args: Prisma.WordCountArgs<ExtArgs>
            result: $Utils.Optional<WordCountAggregateOutputType> | number
          }
        }
      }
      Story: {
        payload: Prisma.$StoryPayload<ExtArgs>
        fields: Prisma.StoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPayload>
          }
          findFirst: {
            args: Prisma.StoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPayload>
          }
          findMany: {
            args: Prisma.StoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPayload>[]
          }
          create: {
            args: Prisma.StoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPayload>
          }
          createMany: {
            args: Prisma.StoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPayload>[]
          }
          delete: {
            args: Prisma.StoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPayload>
          }
          update: {
            args: Prisma.StoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPayload>
          }
          deleteMany: {
            args: Prisma.StoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPayload>[]
          }
          upsert: {
            args: Prisma.StoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPayload>
          }
          aggregate: {
            args: Prisma.StoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStory>
          }
          groupBy: {
            args: Prisma.StoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<StoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.StoryCountArgs<ExtArgs>
            result: $Utils.Optional<StoryCountAggregateOutputType> | number
          }
        }
      }
      UserLearning: {
        payload: Prisma.$UserLearningPayload<ExtArgs>
        fields: Prisma.UserLearningFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserLearningFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLearningPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserLearningFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLearningPayload>
          }
          findFirst: {
            args: Prisma.UserLearningFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLearningPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserLearningFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLearningPayload>
          }
          findMany: {
            args: Prisma.UserLearningFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLearningPayload>[]
          }
          create: {
            args: Prisma.UserLearningCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLearningPayload>
          }
          createMany: {
            args: Prisma.UserLearningCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserLearningCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLearningPayload>[]
          }
          delete: {
            args: Prisma.UserLearningDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLearningPayload>
          }
          update: {
            args: Prisma.UserLearningUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLearningPayload>
          }
          deleteMany: {
            args: Prisma.UserLearningDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserLearningUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserLearningUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLearningPayload>[]
          }
          upsert: {
            args: Prisma.UserLearningUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLearningPayload>
          }
          aggregate: {
            args: Prisma.UserLearningAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserLearning>
          }
          groupBy: {
            args: Prisma.UserLearningGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserLearningGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserLearningCountArgs<ExtArgs>
            result: $Utils.Optional<UserLearningCountAggregateOutputType> | number
          }
        }
      }
      DailyRecord: {
        payload: Prisma.$DailyRecordPayload<ExtArgs>
        fields: Prisma.DailyRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DailyRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DailyRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyRecordPayload>
          }
          findFirst: {
            args: Prisma.DailyRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DailyRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyRecordPayload>
          }
          findMany: {
            args: Prisma.DailyRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyRecordPayload>[]
          }
          create: {
            args: Prisma.DailyRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyRecordPayload>
          }
          createMany: {
            args: Prisma.DailyRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DailyRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyRecordPayload>[]
          }
          delete: {
            args: Prisma.DailyRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyRecordPayload>
          }
          update: {
            args: Prisma.DailyRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyRecordPayload>
          }
          deleteMany: {
            args: Prisma.DailyRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DailyRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DailyRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyRecordPayload>[]
          }
          upsert: {
            args: Prisma.DailyRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyRecordPayload>
          }
          aggregate: {
            args: Prisma.DailyRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDailyRecord>
          }
          groupBy: {
            args: Prisma.DailyRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<DailyRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.DailyRecordCountArgs<ExtArgs>
            result: $Utils.Optional<DailyRecordCountAggregateOutputType> | number
          }
        }
      }
      LearningSettings: {
        payload: Prisma.$LearningSettingsPayload<ExtArgs>
        fields: Prisma.LearningSettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LearningSettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningSettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LearningSettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningSettingsPayload>
          }
          findFirst: {
            args: Prisma.LearningSettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningSettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LearningSettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningSettingsPayload>
          }
          findMany: {
            args: Prisma.LearningSettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningSettingsPayload>[]
          }
          create: {
            args: Prisma.LearningSettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningSettingsPayload>
          }
          createMany: {
            args: Prisma.LearningSettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LearningSettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningSettingsPayload>[]
          }
          delete: {
            args: Prisma.LearningSettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningSettingsPayload>
          }
          update: {
            args: Prisma.LearningSettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningSettingsPayload>
          }
          deleteMany: {
            args: Prisma.LearningSettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LearningSettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LearningSettingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningSettingsPayload>[]
          }
          upsert: {
            args: Prisma.LearningSettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningSettingsPayload>
          }
          aggregate: {
            args: Prisma.LearningSettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLearningSettings>
          }
          groupBy: {
            args: Prisma.LearningSettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<LearningSettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.LearningSettingsCountArgs<ExtArgs>
            result: $Utils.Optional<LearningSettingsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    word?: WordOmit
    story?: StoryOmit
    userLearning?: UserLearningOmit
    dailyRecord?: DailyRecordOmit
    learningSettings?: LearningSettingsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    stories: number
    userLearning: number
    dailyRecords: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stories?: boolean | UserCountOutputTypeCountStoriesArgs
    userLearning?: boolean | UserCountOutputTypeCountUserLearningArgs
    dailyRecords?: boolean | UserCountOutputTypeCountDailyRecordsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserLearningArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserLearningWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDailyRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyRecordWhereInput
  }


  /**
   * Count Type WordCountOutputType
   */

  export type WordCountOutputType = {
    userLearning: number
  }

  export type WordCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userLearning?: boolean | WordCountOutputTypeCountUserLearningArgs
  }

  // Custom InputTypes
  /**
   * WordCountOutputType without action
   */
  export type WordCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordCountOutputType
     */
    select?: WordCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WordCountOutputType without action
   */
  export type WordCountOutputTypeCountUserLearningArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserLearningWhereInput
  }


  /**
   * Count Type StoryCountOutputType
   */

  export type StoryCountOutputType = {
    userLearning: number
  }

  export type StoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userLearning?: boolean | StoryCountOutputTypeCountUserLearningArgs
  }

  // Custom InputTypes
  /**
   * StoryCountOutputType without action
   */
  export type StoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryCountOutputType
     */
    select?: StoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StoryCountOutputType without action
   */
  export type StoryCountOutputTypeCountUserLearningArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserLearningWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    level: number | null
    totalScore: number | null
  }

  export type UserSumAggregateOutputType = {
    level: number | null
    totalScore: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    password: string | null
    avatar: string | null
    level: number | null
    totalScore: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    password: string | null
    avatar: string | null
    level: number | null
    totalScore: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    avatar: number
    level: number
    totalScore: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    level?: true
    totalScore?: true
  }

  export type UserSumAggregateInputType = {
    level?: true
    totalScore?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    avatar?: true
    level?: true
    totalScore?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    avatar?: true
    level?: true
    totalScore?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    avatar?: true
    level?: true
    totalScore?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    email: string
    password: string
    avatar: string | null
    level: number
    totalScore: number
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    level?: boolean
    totalScore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    stories?: boolean | User$storiesArgs<ExtArgs>
    userLearning?: boolean | User$userLearningArgs<ExtArgs>
    dailyRecords?: boolean | User$dailyRecordsArgs<ExtArgs>
    learningSettings?: boolean | User$learningSettingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    level?: boolean
    totalScore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    level?: boolean
    totalScore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    level?: boolean
    totalScore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password" | "avatar" | "level" | "totalScore" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stories?: boolean | User$storiesArgs<ExtArgs>
    userLearning?: boolean | User$userLearningArgs<ExtArgs>
    dailyRecords?: boolean | User$dailyRecordsArgs<ExtArgs>
    learningSettings?: boolean | User$learningSettingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      stories: Prisma.$StoryPayload<ExtArgs>[]
      userLearning: Prisma.$UserLearningPayload<ExtArgs>[]
      dailyRecords: Prisma.$DailyRecordPayload<ExtArgs>[]
      learningSettings: Prisma.$LearningSettingsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      email: string
      password: string
      avatar: string | null
      level: number
      totalScore: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    stories<T extends User$storiesArgs<ExtArgs> = {}>(args?: Subset<T, User$storiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userLearning<T extends User$userLearningArgs<ExtArgs> = {}>(args?: Subset<T, User$userLearningArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLearningPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dailyRecords<T extends User$dailyRecordsArgs<ExtArgs> = {}>(args?: Subset<T, User$dailyRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    learningSettings<T extends User$learningSettingsArgs<ExtArgs> = {}>(args?: Subset<T, User$learningSettingsArgs<ExtArgs>>): Prisma__LearningSettingsClient<$Result.GetResult<Prisma.$LearningSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly level: FieldRef<"User", 'Int'>
    readonly totalScore: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.stories
   */
  export type User$storiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Story
     */
    omit?: StoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryInclude<ExtArgs> | null
    where?: StoryWhereInput
    orderBy?: StoryOrderByWithRelationInput | StoryOrderByWithRelationInput[]
    cursor?: StoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StoryScalarFieldEnum | StoryScalarFieldEnum[]
  }

  /**
   * User.userLearning
   */
  export type User$userLearningArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLearning
     */
    select?: UserLearningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLearning
     */
    omit?: UserLearningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLearningInclude<ExtArgs> | null
    where?: UserLearningWhereInput
    orderBy?: UserLearningOrderByWithRelationInput | UserLearningOrderByWithRelationInput[]
    cursor?: UserLearningWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserLearningScalarFieldEnum | UserLearningScalarFieldEnum[]
  }

  /**
   * User.dailyRecords
   */
  export type User$dailyRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRecord
     */
    select?: DailyRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyRecord
     */
    omit?: DailyRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyRecordInclude<ExtArgs> | null
    where?: DailyRecordWhereInput
    orderBy?: DailyRecordOrderByWithRelationInput | DailyRecordOrderByWithRelationInput[]
    cursor?: DailyRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DailyRecordScalarFieldEnum | DailyRecordScalarFieldEnum[]
  }

  /**
   * User.learningSettings
   */
  export type User$learningSettingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningSettings
     */
    select?: LearningSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningSettings
     */
    omit?: LearningSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningSettingsInclude<ExtArgs> | null
    where?: LearningSettingsWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Word
   */

  export type AggregateWord = {
    _count: WordCountAggregateOutputType | null
    _avg: WordAvgAggregateOutputType | null
    _sum: WordSumAggregateOutputType | null
    _min: WordMinAggregateOutputType | null
    _max: WordMaxAggregateOutputType | null
  }

  export type WordAvgAggregateOutputType = {
    level: number | null
    frequency: number | null
  }

  export type WordSumAggregateOutputType = {
    level: number | null
    frequency: number | null
  }

  export type WordMinAggregateOutputType = {
    id: string | null
    word: string | null
    phonetic: string | null
    meaning: string | null
    partOfSpeech: string | null
    example: string | null
    level: number | null
    category: string | null
    frequency: number | null
    createdAt: Date | null
  }

  export type WordMaxAggregateOutputType = {
    id: string | null
    word: string | null
    phonetic: string | null
    meaning: string | null
    partOfSpeech: string | null
    example: string | null
    level: number | null
    category: string | null
    frequency: number | null
    createdAt: Date | null
  }

  export type WordCountAggregateOutputType = {
    id: number
    word: number
    phonetic: number
    meaning: number
    partOfSpeech: number
    example: number
    level: number
    category: number
    frequency: number
    createdAt: number
    _all: number
  }


  export type WordAvgAggregateInputType = {
    level?: true
    frequency?: true
  }

  export type WordSumAggregateInputType = {
    level?: true
    frequency?: true
  }

  export type WordMinAggregateInputType = {
    id?: true
    word?: true
    phonetic?: true
    meaning?: true
    partOfSpeech?: true
    example?: true
    level?: true
    category?: true
    frequency?: true
    createdAt?: true
  }

  export type WordMaxAggregateInputType = {
    id?: true
    word?: true
    phonetic?: true
    meaning?: true
    partOfSpeech?: true
    example?: true
    level?: true
    category?: true
    frequency?: true
    createdAt?: true
  }

  export type WordCountAggregateInputType = {
    id?: true
    word?: true
    phonetic?: true
    meaning?: true
    partOfSpeech?: true
    example?: true
    level?: true
    category?: true
    frequency?: true
    createdAt?: true
    _all?: true
  }

  export type WordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Word to aggregate.
     */
    where?: WordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Words to fetch.
     */
    orderBy?: WordOrderByWithRelationInput | WordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Words from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Words.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Words
    **/
    _count?: true | WordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WordMaxAggregateInputType
  }

  export type GetWordAggregateType<T extends WordAggregateArgs> = {
        [P in keyof T & keyof AggregateWord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWord[P]>
      : GetScalarType<T[P], AggregateWord[P]>
  }




  export type WordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WordWhereInput
    orderBy?: WordOrderByWithAggregationInput | WordOrderByWithAggregationInput[]
    by: WordScalarFieldEnum[] | WordScalarFieldEnum
    having?: WordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WordCountAggregateInputType | true
    _avg?: WordAvgAggregateInputType
    _sum?: WordSumAggregateInputType
    _min?: WordMinAggregateInputType
    _max?: WordMaxAggregateInputType
  }

  export type WordGroupByOutputType = {
    id: string
    word: string
    phonetic: string | null
    meaning: string
    partOfSpeech: string
    example: string | null
    level: number
    category: string | null
    frequency: number
    createdAt: Date
    _count: WordCountAggregateOutputType | null
    _avg: WordAvgAggregateOutputType | null
    _sum: WordSumAggregateOutputType | null
    _min: WordMinAggregateOutputType | null
    _max: WordMaxAggregateOutputType | null
  }

  type GetWordGroupByPayload<T extends WordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WordGroupByOutputType[P]>
            : GetScalarType<T[P], WordGroupByOutputType[P]>
        }
      >
    >


  export type WordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    word?: boolean
    phonetic?: boolean
    meaning?: boolean
    partOfSpeech?: boolean
    example?: boolean
    level?: boolean
    category?: boolean
    frequency?: boolean
    createdAt?: boolean
    userLearning?: boolean | Word$userLearningArgs<ExtArgs>
    _count?: boolean | WordCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["word"]>

  export type WordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    word?: boolean
    phonetic?: boolean
    meaning?: boolean
    partOfSpeech?: boolean
    example?: boolean
    level?: boolean
    category?: boolean
    frequency?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["word"]>

  export type WordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    word?: boolean
    phonetic?: boolean
    meaning?: boolean
    partOfSpeech?: boolean
    example?: boolean
    level?: boolean
    category?: boolean
    frequency?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["word"]>

  export type WordSelectScalar = {
    id?: boolean
    word?: boolean
    phonetic?: boolean
    meaning?: boolean
    partOfSpeech?: boolean
    example?: boolean
    level?: boolean
    category?: boolean
    frequency?: boolean
    createdAt?: boolean
  }

  export type WordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "word" | "phonetic" | "meaning" | "partOfSpeech" | "example" | "level" | "category" | "frequency" | "createdAt", ExtArgs["result"]["word"]>
  export type WordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userLearning?: boolean | Word$userLearningArgs<ExtArgs>
    _count?: boolean | WordCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type WordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Word"
    objects: {
      userLearning: Prisma.$UserLearningPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      word: string
      phonetic: string | null
      meaning: string
      partOfSpeech: string
      example: string | null
      level: number
      category: string | null
      frequency: number
      createdAt: Date
    }, ExtArgs["result"]["word"]>
    composites: {}
  }

  type WordGetPayload<S extends boolean | null | undefined | WordDefaultArgs> = $Result.GetResult<Prisma.$WordPayload, S>

  type WordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WordCountAggregateInputType | true
    }

  export interface WordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Word'], meta: { name: 'Word' } }
    /**
     * Find zero or one Word that matches the filter.
     * @param {WordFindUniqueArgs} args - Arguments to find a Word
     * @example
     * // Get one Word
     * const word = await prisma.word.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WordFindUniqueArgs>(args: SelectSubset<T, WordFindUniqueArgs<ExtArgs>>): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Word that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WordFindUniqueOrThrowArgs} args - Arguments to find a Word
     * @example
     * // Get one Word
     * const word = await prisma.word.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WordFindUniqueOrThrowArgs>(args: SelectSubset<T, WordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Word that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordFindFirstArgs} args - Arguments to find a Word
     * @example
     * // Get one Word
     * const word = await prisma.word.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WordFindFirstArgs>(args?: SelectSubset<T, WordFindFirstArgs<ExtArgs>>): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Word that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordFindFirstOrThrowArgs} args - Arguments to find a Word
     * @example
     * // Get one Word
     * const word = await prisma.word.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WordFindFirstOrThrowArgs>(args?: SelectSubset<T, WordFindFirstOrThrowArgs<ExtArgs>>): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Words that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Words
     * const words = await prisma.word.findMany()
     * 
     * // Get first 10 Words
     * const words = await prisma.word.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wordWithIdOnly = await prisma.word.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WordFindManyArgs>(args?: SelectSubset<T, WordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Word.
     * @param {WordCreateArgs} args - Arguments to create a Word.
     * @example
     * // Create one Word
     * const Word = await prisma.word.create({
     *   data: {
     *     // ... data to create a Word
     *   }
     * })
     * 
     */
    create<T extends WordCreateArgs>(args: SelectSubset<T, WordCreateArgs<ExtArgs>>): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Words.
     * @param {WordCreateManyArgs} args - Arguments to create many Words.
     * @example
     * // Create many Words
     * const word = await prisma.word.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WordCreateManyArgs>(args?: SelectSubset<T, WordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Words and returns the data saved in the database.
     * @param {WordCreateManyAndReturnArgs} args - Arguments to create many Words.
     * @example
     * // Create many Words
     * const word = await prisma.word.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Words and only return the `id`
     * const wordWithIdOnly = await prisma.word.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WordCreateManyAndReturnArgs>(args?: SelectSubset<T, WordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Word.
     * @param {WordDeleteArgs} args - Arguments to delete one Word.
     * @example
     * // Delete one Word
     * const Word = await prisma.word.delete({
     *   where: {
     *     // ... filter to delete one Word
     *   }
     * })
     * 
     */
    delete<T extends WordDeleteArgs>(args: SelectSubset<T, WordDeleteArgs<ExtArgs>>): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Word.
     * @param {WordUpdateArgs} args - Arguments to update one Word.
     * @example
     * // Update one Word
     * const word = await prisma.word.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WordUpdateArgs>(args: SelectSubset<T, WordUpdateArgs<ExtArgs>>): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Words.
     * @param {WordDeleteManyArgs} args - Arguments to filter Words to delete.
     * @example
     * // Delete a few Words
     * const { count } = await prisma.word.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WordDeleteManyArgs>(args?: SelectSubset<T, WordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Words.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Words
     * const word = await prisma.word.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WordUpdateManyArgs>(args: SelectSubset<T, WordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Words and returns the data updated in the database.
     * @param {WordUpdateManyAndReturnArgs} args - Arguments to update many Words.
     * @example
     * // Update many Words
     * const word = await prisma.word.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Words and only return the `id`
     * const wordWithIdOnly = await prisma.word.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WordUpdateManyAndReturnArgs>(args: SelectSubset<T, WordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Word.
     * @param {WordUpsertArgs} args - Arguments to update or create a Word.
     * @example
     * // Update or create a Word
     * const word = await prisma.word.upsert({
     *   create: {
     *     // ... data to create a Word
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Word we want to update
     *   }
     * })
     */
    upsert<T extends WordUpsertArgs>(args: SelectSubset<T, WordUpsertArgs<ExtArgs>>): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Words.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordCountArgs} args - Arguments to filter Words to count.
     * @example
     * // Count the number of Words
     * const count = await prisma.word.count({
     *   where: {
     *     // ... the filter for the Words we want to count
     *   }
     * })
    **/
    count<T extends WordCountArgs>(
      args?: Subset<T, WordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Word.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WordAggregateArgs>(args: Subset<T, WordAggregateArgs>): Prisma.PrismaPromise<GetWordAggregateType<T>>

    /**
     * Group by Word.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WordGroupByArgs['orderBy'] }
        : { orderBy?: WordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Word model
   */
  readonly fields: WordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Word.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userLearning<T extends Word$userLearningArgs<ExtArgs> = {}>(args?: Subset<T, Word$userLearningArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLearningPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Word model
   */
  interface WordFieldRefs {
    readonly id: FieldRef<"Word", 'String'>
    readonly word: FieldRef<"Word", 'String'>
    readonly phonetic: FieldRef<"Word", 'String'>
    readonly meaning: FieldRef<"Word", 'String'>
    readonly partOfSpeech: FieldRef<"Word", 'String'>
    readonly example: FieldRef<"Word", 'String'>
    readonly level: FieldRef<"Word", 'Int'>
    readonly category: FieldRef<"Word", 'String'>
    readonly frequency: FieldRef<"Word", 'Int'>
    readonly createdAt: FieldRef<"Word", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Word findUnique
   */
  export type WordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * Filter, which Word to fetch.
     */
    where: WordWhereUniqueInput
  }

  /**
   * Word findUniqueOrThrow
   */
  export type WordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * Filter, which Word to fetch.
     */
    where: WordWhereUniqueInput
  }

  /**
   * Word findFirst
   */
  export type WordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * Filter, which Word to fetch.
     */
    where?: WordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Words to fetch.
     */
    orderBy?: WordOrderByWithRelationInput | WordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Words.
     */
    cursor?: WordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Words from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Words.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Words.
     */
    distinct?: WordScalarFieldEnum | WordScalarFieldEnum[]
  }

  /**
   * Word findFirstOrThrow
   */
  export type WordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * Filter, which Word to fetch.
     */
    where?: WordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Words to fetch.
     */
    orderBy?: WordOrderByWithRelationInput | WordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Words.
     */
    cursor?: WordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Words from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Words.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Words.
     */
    distinct?: WordScalarFieldEnum | WordScalarFieldEnum[]
  }

  /**
   * Word findMany
   */
  export type WordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * Filter, which Words to fetch.
     */
    where?: WordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Words to fetch.
     */
    orderBy?: WordOrderByWithRelationInput | WordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Words.
     */
    cursor?: WordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Words from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Words.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Words.
     */
    distinct?: WordScalarFieldEnum | WordScalarFieldEnum[]
  }

  /**
   * Word create
   */
  export type WordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * The data needed to create a Word.
     */
    data: XOR<WordCreateInput, WordUncheckedCreateInput>
  }

  /**
   * Word createMany
   */
  export type WordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Words.
     */
    data: WordCreateManyInput | WordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Word createManyAndReturn
   */
  export type WordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * The data used to create many Words.
     */
    data: WordCreateManyInput | WordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Word update
   */
  export type WordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * The data needed to update a Word.
     */
    data: XOR<WordUpdateInput, WordUncheckedUpdateInput>
    /**
     * Choose, which Word to update.
     */
    where: WordWhereUniqueInput
  }

  /**
   * Word updateMany
   */
  export type WordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Words.
     */
    data: XOR<WordUpdateManyMutationInput, WordUncheckedUpdateManyInput>
    /**
     * Filter which Words to update
     */
    where?: WordWhereInput
    /**
     * Limit how many Words to update.
     */
    limit?: number
  }

  /**
   * Word updateManyAndReturn
   */
  export type WordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * The data used to update Words.
     */
    data: XOR<WordUpdateManyMutationInput, WordUncheckedUpdateManyInput>
    /**
     * Filter which Words to update
     */
    where?: WordWhereInput
    /**
     * Limit how many Words to update.
     */
    limit?: number
  }

  /**
   * Word upsert
   */
  export type WordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * The filter to search for the Word to update in case it exists.
     */
    where: WordWhereUniqueInput
    /**
     * In case the Word found by the `where` argument doesn't exist, create a new Word with this data.
     */
    create: XOR<WordCreateInput, WordUncheckedCreateInput>
    /**
     * In case the Word was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WordUpdateInput, WordUncheckedUpdateInput>
  }

  /**
   * Word delete
   */
  export type WordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * Filter which Word to delete.
     */
    where: WordWhereUniqueInput
  }

  /**
   * Word deleteMany
   */
  export type WordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Words to delete
     */
    where?: WordWhereInput
    /**
     * Limit how many Words to delete.
     */
    limit?: number
  }

  /**
   * Word.userLearning
   */
  export type Word$userLearningArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLearning
     */
    select?: UserLearningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLearning
     */
    omit?: UserLearningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLearningInclude<ExtArgs> | null
    where?: UserLearningWhereInput
    orderBy?: UserLearningOrderByWithRelationInput | UserLearningOrderByWithRelationInput[]
    cursor?: UserLearningWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserLearningScalarFieldEnum | UserLearningScalarFieldEnum[]
  }

  /**
   * Word without action
   */
  export type WordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
  }


  /**
   * Model Story
   */

  export type AggregateStory = {
    _count: StoryCountAggregateOutputType | null
    _avg: StoryAvgAggregateOutputType | null
    _sum: StorySumAggregateOutputType | null
    _min: StoryMinAggregateOutputType | null
    _max: StoryMaxAggregateOutputType | null
  }

  export type StoryAvgAggregateOutputType = {
    wordCount: number | null
  }

  export type StorySumAggregateOutputType = {
    wordCount: number | null
  }

  export type StoryMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    content: string | null
    words: string | null
    style: string | null
    wordCount: number | null
    imageUrls: string | null
    status: string | null
    createdAt: Date | null
  }

  export type StoryMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    content: string | null
    words: string | null
    style: string | null
    wordCount: number | null
    imageUrls: string | null
    status: string | null
    createdAt: Date | null
  }

  export type StoryCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    content: number
    words: number
    style: number
    wordCount: number
    imageUrls: number
    status: number
    createdAt: number
    _all: number
  }


  export type StoryAvgAggregateInputType = {
    wordCount?: true
  }

  export type StorySumAggregateInputType = {
    wordCount?: true
  }

  export type StoryMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    content?: true
    words?: true
    style?: true
    wordCount?: true
    imageUrls?: true
    status?: true
    createdAt?: true
  }

  export type StoryMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    content?: true
    words?: true
    style?: true
    wordCount?: true
    imageUrls?: true
    status?: true
    createdAt?: true
  }

  export type StoryCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    content?: true
    words?: true
    style?: true
    wordCount?: true
    imageUrls?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type StoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Story to aggregate.
     */
    where?: StoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stories to fetch.
     */
    orderBy?: StoryOrderByWithRelationInput | StoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stories
    **/
    _count?: true | StoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoryMaxAggregateInputType
  }

  export type GetStoryAggregateType<T extends StoryAggregateArgs> = {
        [P in keyof T & keyof AggregateStory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStory[P]>
      : GetScalarType<T[P], AggregateStory[P]>
  }




  export type StoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoryWhereInput
    orderBy?: StoryOrderByWithAggregationInput | StoryOrderByWithAggregationInput[]
    by: StoryScalarFieldEnum[] | StoryScalarFieldEnum
    having?: StoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoryCountAggregateInputType | true
    _avg?: StoryAvgAggregateInputType
    _sum?: StorySumAggregateInputType
    _min?: StoryMinAggregateInputType
    _max?: StoryMaxAggregateInputType
  }

  export type StoryGroupByOutputType = {
    id: string
    userId: string
    title: string
    content: string
    words: string
    style: string
    wordCount: number
    imageUrls: string
    status: string
    createdAt: Date
    _count: StoryCountAggregateOutputType | null
    _avg: StoryAvgAggregateOutputType | null
    _sum: StorySumAggregateOutputType | null
    _min: StoryMinAggregateOutputType | null
    _max: StoryMaxAggregateOutputType | null
  }

  type GetStoryGroupByPayload<T extends StoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoryGroupByOutputType[P]>
            : GetScalarType<T[P], StoryGroupByOutputType[P]>
        }
      >
    >


  export type StorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    content?: boolean
    words?: boolean
    style?: boolean
    wordCount?: boolean
    imageUrls?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    userLearning?: boolean | Story$userLearningArgs<ExtArgs>
    _count?: boolean | StoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["story"]>

  export type StorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    content?: boolean
    words?: boolean
    style?: boolean
    wordCount?: boolean
    imageUrls?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["story"]>

  export type StorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    content?: boolean
    words?: boolean
    style?: boolean
    wordCount?: boolean
    imageUrls?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["story"]>

  export type StorySelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    content?: boolean
    words?: boolean
    style?: boolean
    wordCount?: boolean
    imageUrls?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type StoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "content" | "words" | "style" | "wordCount" | "imageUrls" | "status" | "createdAt", ExtArgs["result"]["story"]>
  export type StoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    userLearning?: boolean | Story$userLearningArgs<ExtArgs>
    _count?: boolean | StoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Story"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      userLearning: Prisma.$UserLearningPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string
      content: string
      words: string
      style: string
      wordCount: number
      imageUrls: string
      status: string
      createdAt: Date
    }, ExtArgs["result"]["story"]>
    composites: {}
  }

  type StoryGetPayload<S extends boolean | null | undefined | StoryDefaultArgs> = $Result.GetResult<Prisma.$StoryPayload, S>

  type StoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StoryCountAggregateInputType | true
    }

  export interface StoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Story'], meta: { name: 'Story' } }
    /**
     * Find zero or one Story that matches the filter.
     * @param {StoryFindUniqueArgs} args - Arguments to find a Story
     * @example
     * // Get one Story
     * const story = await prisma.story.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StoryFindUniqueArgs>(args: SelectSubset<T, StoryFindUniqueArgs<ExtArgs>>): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Story that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StoryFindUniqueOrThrowArgs} args - Arguments to find a Story
     * @example
     * // Get one Story
     * const story = await prisma.story.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StoryFindUniqueOrThrowArgs>(args: SelectSubset<T, StoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Story that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryFindFirstArgs} args - Arguments to find a Story
     * @example
     * // Get one Story
     * const story = await prisma.story.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StoryFindFirstArgs>(args?: SelectSubset<T, StoryFindFirstArgs<ExtArgs>>): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Story that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryFindFirstOrThrowArgs} args - Arguments to find a Story
     * @example
     * // Get one Story
     * const story = await prisma.story.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StoryFindFirstOrThrowArgs>(args?: SelectSubset<T, StoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stories
     * const stories = await prisma.story.findMany()
     * 
     * // Get first 10 Stories
     * const stories = await prisma.story.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storyWithIdOnly = await prisma.story.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StoryFindManyArgs>(args?: SelectSubset<T, StoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Story.
     * @param {StoryCreateArgs} args - Arguments to create a Story.
     * @example
     * // Create one Story
     * const Story = await prisma.story.create({
     *   data: {
     *     // ... data to create a Story
     *   }
     * })
     * 
     */
    create<T extends StoryCreateArgs>(args: SelectSubset<T, StoryCreateArgs<ExtArgs>>): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stories.
     * @param {StoryCreateManyArgs} args - Arguments to create many Stories.
     * @example
     * // Create many Stories
     * const story = await prisma.story.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StoryCreateManyArgs>(args?: SelectSubset<T, StoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stories and returns the data saved in the database.
     * @param {StoryCreateManyAndReturnArgs} args - Arguments to create many Stories.
     * @example
     * // Create many Stories
     * const story = await prisma.story.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stories and only return the `id`
     * const storyWithIdOnly = await prisma.story.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StoryCreateManyAndReturnArgs>(args?: SelectSubset<T, StoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Story.
     * @param {StoryDeleteArgs} args - Arguments to delete one Story.
     * @example
     * // Delete one Story
     * const Story = await prisma.story.delete({
     *   where: {
     *     // ... filter to delete one Story
     *   }
     * })
     * 
     */
    delete<T extends StoryDeleteArgs>(args: SelectSubset<T, StoryDeleteArgs<ExtArgs>>): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Story.
     * @param {StoryUpdateArgs} args - Arguments to update one Story.
     * @example
     * // Update one Story
     * const story = await prisma.story.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StoryUpdateArgs>(args: SelectSubset<T, StoryUpdateArgs<ExtArgs>>): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stories.
     * @param {StoryDeleteManyArgs} args - Arguments to filter Stories to delete.
     * @example
     * // Delete a few Stories
     * const { count } = await prisma.story.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StoryDeleteManyArgs>(args?: SelectSubset<T, StoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stories
     * const story = await prisma.story.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StoryUpdateManyArgs>(args: SelectSubset<T, StoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stories and returns the data updated in the database.
     * @param {StoryUpdateManyAndReturnArgs} args - Arguments to update many Stories.
     * @example
     * // Update many Stories
     * const story = await prisma.story.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stories and only return the `id`
     * const storyWithIdOnly = await prisma.story.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StoryUpdateManyAndReturnArgs>(args: SelectSubset<T, StoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Story.
     * @param {StoryUpsertArgs} args - Arguments to update or create a Story.
     * @example
     * // Update or create a Story
     * const story = await prisma.story.upsert({
     *   create: {
     *     // ... data to create a Story
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Story we want to update
     *   }
     * })
     */
    upsert<T extends StoryUpsertArgs>(args: SelectSubset<T, StoryUpsertArgs<ExtArgs>>): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryCountArgs} args - Arguments to filter Stories to count.
     * @example
     * // Count the number of Stories
     * const count = await prisma.story.count({
     *   where: {
     *     // ... the filter for the Stories we want to count
     *   }
     * })
    **/
    count<T extends StoryCountArgs>(
      args?: Subset<T, StoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Story.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StoryAggregateArgs>(args: Subset<T, StoryAggregateArgs>): Prisma.PrismaPromise<GetStoryAggregateType<T>>

    /**
     * Group by Story.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StoryGroupByArgs['orderBy'] }
        : { orderBy?: StoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Story model
   */
  readonly fields: StoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Story.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    userLearning<T extends Story$userLearningArgs<ExtArgs> = {}>(args?: Subset<T, Story$userLearningArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLearningPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Story model
   */
  interface StoryFieldRefs {
    readonly id: FieldRef<"Story", 'String'>
    readonly userId: FieldRef<"Story", 'String'>
    readonly title: FieldRef<"Story", 'String'>
    readonly content: FieldRef<"Story", 'String'>
    readonly words: FieldRef<"Story", 'String'>
    readonly style: FieldRef<"Story", 'String'>
    readonly wordCount: FieldRef<"Story", 'Int'>
    readonly imageUrls: FieldRef<"Story", 'String'>
    readonly status: FieldRef<"Story", 'String'>
    readonly createdAt: FieldRef<"Story", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Story findUnique
   */
  export type StoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Story
     */
    omit?: StoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryInclude<ExtArgs> | null
    /**
     * Filter, which Story to fetch.
     */
    where: StoryWhereUniqueInput
  }

  /**
   * Story findUniqueOrThrow
   */
  export type StoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Story
     */
    omit?: StoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryInclude<ExtArgs> | null
    /**
     * Filter, which Story to fetch.
     */
    where: StoryWhereUniqueInput
  }

  /**
   * Story findFirst
   */
  export type StoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Story
     */
    omit?: StoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryInclude<ExtArgs> | null
    /**
     * Filter, which Story to fetch.
     */
    where?: StoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stories to fetch.
     */
    orderBy?: StoryOrderByWithRelationInput | StoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stories.
     */
    cursor?: StoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stories.
     */
    distinct?: StoryScalarFieldEnum | StoryScalarFieldEnum[]
  }

  /**
   * Story findFirstOrThrow
   */
  export type StoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Story
     */
    omit?: StoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryInclude<ExtArgs> | null
    /**
     * Filter, which Story to fetch.
     */
    where?: StoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stories to fetch.
     */
    orderBy?: StoryOrderByWithRelationInput | StoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stories.
     */
    cursor?: StoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stories.
     */
    distinct?: StoryScalarFieldEnum | StoryScalarFieldEnum[]
  }

  /**
   * Story findMany
   */
  export type StoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Story
     */
    omit?: StoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryInclude<ExtArgs> | null
    /**
     * Filter, which Stories to fetch.
     */
    where?: StoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stories to fetch.
     */
    orderBy?: StoryOrderByWithRelationInput | StoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stories.
     */
    cursor?: StoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stories.
     */
    distinct?: StoryScalarFieldEnum | StoryScalarFieldEnum[]
  }

  /**
   * Story create
   */
  export type StoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Story
     */
    omit?: StoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Story.
     */
    data: XOR<StoryCreateInput, StoryUncheckedCreateInput>
  }

  /**
   * Story createMany
   */
  export type StoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stories.
     */
    data: StoryCreateManyInput | StoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Story createManyAndReturn
   */
  export type StoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Story
     */
    omit?: StoryOmit<ExtArgs> | null
    /**
     * The data used to create many Stories.
     */
    data: StoryCreateManyInput | StoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Story update
   */
  export type StoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Story
     */
    omit?: StoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Story.
     */
    data: XOR<StoryUpdateInput, StoryUncheckedUpdateInput>
    /**
     * Choose, which Story to update.
     */
    where: StoryWhereUniqueInput
  }

  /**
   * Story updateMany
   */
  export type StoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stories.
     */
    data: XOR<StoryUpdateManyMutationInput, StoryUncheckedUpdateManyInput>
    /**
     * Filter which Stories to update
     */
    where?: StoryWhereInput
    /**
     * Limit how many Stories to update.
     */
    limit?: number
  }

  /**
   * Story updateManyAndReturn
   */
  export type StoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Story
     */
    omit?: StoryOmit<ExtArgs> | null
    /**
     * The data used to update Stories.
     */
    data: XOR<StoryUpdateManyMutationInput, StoryUncheckedUpdateManyInput>
    /**
     * Filter which Stories to update
     */
    where?: StoryWhereInput
    /**
     * Limit how many Stories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Story upsert
   */
  export type StoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Story
     */
    omit?: StoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Story to update in case it exists.
     */
    where: StoryWhereUniqueInput
    /**
     * In case the Story found by the `where` argument doesn't exist, create a new Story with this data.
     */
    create: XOR<StoryCreateInput, StoryUncheckedCreateInput>
    /**
     * In case the Story was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StoryUpdateInput, StoryUncheckedUpdateInput>
  }

  /**
   * Story delete
   */
  export type StoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Story
     */
    omit?: StoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryInclude<ExtArgs> | null
    /**
     * Filter which Story to delete.
     */
    where: StoryWhereUniqueInput
  }

  /**
   * Story deleteMany
   */
  export type StoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stories to delete
     */
    where?: StoryWhereInput
    /**
     * Limit how many Stories to delete.
     */
    limit?: number
  }

  /**
   * Story.userLearning
   */
  export type Story$userLearningArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLearning
     */
    select?: UserLearningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLearning
     */
    omit?: UserLearningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLearningInclude<ExtArgs> | null
    where?: UserLearningWhereInput
    orderBy?: UserLearningOrderByWithRelationInput | UserLearningOrderByWithRelationInput[]
    cursor?: UserLearningWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserLearningScalarFieldEnum | UserLearningScalarFieldEnum[]
  }

  /**
   * Story without action
   */
  export type StoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Story
     */
    omit?: StoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryInclude<ExtArgs> | null
  }


  /**
   * Model UserLearning
   */

  export type AggregateUserLearning = {
    _count: UserLearningCountAggregateOutputType | null
    _avg: UserLearningAvgAggregateOutputType | null
    _sum: UserLearningSumAggregateOutputType | null
    _min: UserLearningMinAggregateOutputType | null
    _max: UserLearningMaxAggregateOutputType | null
  }

  export type UserLearningAvgAggregateOutputType = {
    correctCount: number | null
    wrongCount: number | null
  }

  export type UserLearningSumAggregateOutputType = {
    correctCount: number | null
    wrongCount: number | null
  }

  export type UserLearningMinAggregateOutputType = {
    id: string | null
    userId: string | null
    wordId: string | null
    storyId: string | null
    status: string | null
    correctCount: number | null
    wrongCount: number | null
    lastStudiedAt: Date | null
    createdAt: Date | null
  }

  export type UserLearningMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    wordId: string | null
    storyId: string | null
    status: string | null
    correctCount: number | null
    wrongCount: number | null
    lastStudiedAt: Date | null
    createdAt: Date | null
  }

  export type UserLearningCountAggregateOutputType = {
    id: number
    userId: number
    wordId: number
    storyId: number
    status: number
    correctCount: number
    wrongCount: number
    lastStudiedAt: number
    createdAt: number
    _all: number
  }


  export type UserLearningAvgAggregateInputType = {
    correctCount?: true
    wrongCount?: true
  }

  export type UserLearningSumAggregateInputType = {
    correctCount?: true
    wrongCount?: true
  }

  export type UserLearningMinAggregateInputType = {
    id?: true
    userId?: true
    wordId?: true
    storyId?: true
    status?: true
    correctCount?: true
    wrongCount?: true
    lastStudiedAt?: true
    createdAt?: true
  }

  export type UserLearningMaxAggregateInputType = {
    id?: true
    userId?: true
    wordId?: true
    storyId?: true
    status?: true
    correctCount?: true
    wrongCount?: true
    lastStudiedAt?: true
    createdAt?: true
  }

  export type UserLearningCountAggregateInputType = {
    id?: true
    userId?: true
    wordId?: true
    storyId?: true
    status?: true
    correctCount?: true
    wrongCount?: true
    lastStudiedAt?: true
    createdAt?: true
    _all?: true
  }

  export type UserLearningAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserLearning to aggregate.
     */
    where?: UserLearningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLearnings to fetch.
     */
    orderBy?: UserLearningOrderByWithRelationInput | UserLearningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserLearningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLearnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLearnings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserLearnings
    **/
    _count?: true | UserLearningCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserLearningAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserLearningSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserLearningMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserLearningMaxAggregateInputType
  }

  export type GetUserLearningAggregateType<T extends UserLearningAggregateArgs> = {
        [P in keyof T & keyof AggregateUserLearning]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserLearning[P]>
      : GetScalarType<T[P], AggregateUserLearning[P]>
  }




  export type UserLearningGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserLearningWhereInput
    orderBy?: UserLearningOrderByWithAggregationInput | UserLearningOrderByWithAggregationInput[]
    by: UserLearningScalarFieldEnum[] | UserLearningScalarFieldEnum
    having?: UserLearningScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserLearningCountAggregateInputType | true
    _avg?: UserLearningAvgAggregateInputType
    _sum?: UserLearningSumAggregateInputType
    _min?: UserLearningMinAggregateInputType
    _max?: UserLearningMaxAggregateInputType
  }

  export type UserLearningGroupByOutputType = {
    id: string
    userId: string
    wordId: string
    storyId: string | null
    status: string
    correctCount: number
    wrongCount: number
    lastStudiedAt: Date | null
    createdAt: Date
    _count: UserLearningCountAggregateOutputType | null
    _avg: UserLearningAvgAggregateOutputType | null
    _sum: UserLearningSumAggregateOutputType | null
    _min: UserLearningMinAggregateOutputType | null
    _max: UserLearningMaxAggregateOutputType | null
  }

  type GetUserLearningGroupByPayload<T extends UserLearningGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserLearningGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserLearningGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserLearningGroupByOutputType[P]>
            : GetScalarType<T[P], UserLearningGroupByOutputType[P]>
        }
      >
    >


  export type UserLearningSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    wordId?: boolean
    storyId?: boolean
    status?: boolean
    correctCount?: boolean
    wrongCount?: boolean
    lastStudiedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    word?: boolean | WordDefaultArgs<ExtArgs>
    story?: boolean | UserLearning$storyArgs<ExtArgs>
  }, ExtArgs["result"]["userLearning"]>

  export type UserLearningSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    wordId?: boolean
    storyId?: boolean
    status?: boolean
    correctCount?: boolean
    wrongCount?: boolean
    lastStudiedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    word?: boolean | WordDefaultArgs<ExtArgs>
    story?: boolean | UserLearning$storyArgs<ExtArgs>
  }, ExtArgs["result"]["userLearning"]>

  export type UserLearningSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    wordId?: boolean
    storyId?: boolean
    status?: boolean
    correctCount?: boolean
    wrongCount?: boolean
    lastStudiedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    word?: boolean | WordDefaultArgs<ExtArgs>
    story?: boolean | UserLearning$storyArgs<ExtArgs>
  }, ExtArgs["result"]["userLearning"]>

  export type UserLearningSelectScalar = {
    id?: boolean
    userId?: boolean
    wordId?: boolean
    storyId?: boolean
    status?: boolean
    correctCount?: boolean
    wrongCount?: boolean
    lastStudiedAt?: boolean
    createdAt?: boolean
  }

  export type UserLearningOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "wordId" | "storyId" | "status" | "correctCount" | "wrongCount" | "lastStudiedAt" | "createdAt", ExtArgs["result"]["userLearning"]>
  export type UserLearningInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    word?: boolean | WordDefaultArgs<ExtArgs>
    story?: boolean | UserLearning$storyArgs<ExtArgs>
  }
  export type UserLearningIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    word?: boolean | WordDefaultArgs<ExtArgs>
    story?: boolean | UserLearning$storyArgs<ExtArgs>
  }
  export type UserLearningIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    word?: boolean | WordDefaultArgs<ExtArgs>
    story?: boolean | UserLearning$storyArgs<ExtArgs>
  }

  export type $UserLearningPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserLearning"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      word: Prisma.$WordPayload<ExtArgs>
      story: Prisma.$StoryPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      wordId: string
      storyId: string | null
      status: string
      correctCount: number
      wrongCount: number
      lastStudiedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["userLearning"]>
    composites: {}
  }

  type UserLearningGetPayload<S extends boolean | null | undefined | UserLearningDefaultArgs> = $Result.GetResult<Prisma.$UserLearningPayload, S>

  type UserLearningCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserLearningFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserLearningCountAggregateInputType | true
    }

  export interface UserLearningDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserLearning'], meta: { name: 'UserLearning' } }
    /**
     * Find zero or one UserLearning that matches the filter.
     * @param {UserLearningFindUniqueArgs} args - Arguments to find a UserLearning
     * @example
     * // Get one UserLearning
     * const userLearning = await prisma.userLearning.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserLearningFindUniqueArgs>(args: SelectSubset<T, UserLearningFindUniqueArgs<ExtArgs>>): Prisma__UserLearningClient<$Result.GetResult<Prisma.$UserLearningPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserLearning that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserLearningFindUniqueOrThrowArgs} args - Arguments to find a UserLearning
     * @example
     * // Get one UserLearning
     * const userLearning = await prisma.userLearning.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserLearningFindUniqueOrThrowArgs>(args: SelectSubset<T, UserLearningFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserLearningClient<$Result.GetResult<Prisma.$UserLearningPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserLearning that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLearningFindFirstArgs} args - Arguments to find a UserLearning
     * @example
     * // Get one UserLearning
     * const userLearning = await prisma.userLearning.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserLearningFindFirstArgs>(args?: SelectSubset<T, UserLearningFindFirstArgs<ExtArgs>>): Prisma__UserLearningClient<$Result.GetResult<Prisma.$UserLearningPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserLearning that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLearningFindFirstOrThrowArgs} args - Arguments to find a UserLearning
     * @example
     * // Get one UserLearning
     * const userLearning = await prisma.userLearning.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserLearningFindFirstOrThrowArgs>(args?: SelectSubset<T, UserLearningFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserLearningClient<$Result.GetResult<Prisma.$UserLearningPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserLearnings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLearningFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserLearnings
     * const userLearnings = await prisma.userLearning.findMany()
     * 
     * // Get first 10 UserLearnings
     * const userLearnings = await prisma.userLearning.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userLearningWithIdOnly = await prisma.userLearning.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserLearningFindManyArgs>(args?: SelectSubset<T, UserLearningFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLearningPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserLearning.
     * @param {UserLearningCreateArgs} args - Arguments to create a UserLearning.
     * @example
     * // Create one UserLearning
     * const UserLearning = await prisma.userLearning.create({
     *   data: {
     *     // ... data to create a UserLearning
     *   }
     * })
     * 
     */
    create<T extends UserLearningCreateArgs>(args: SelectSubset<T, UserLearningCreateArgs<ExtArgs>>): Prisma__UserLearningClient<$Result.GetResult<Prisma.$UserLearningPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserLearnings.
     * @param {UserLearningCreateManyArgs} args - Arguments to create many UserLearnings.
     * @example
     * // Create many UserLearnings
     * const userLearning = await prisma.userLearning.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserLearningCreateManyArgs>(args?: SelectSubset<T, UserLearningCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserLearnings and returns the data saved in the database.
     * @param {UserLearningCreateManyAndReturnArgs} args - Arguments to create many UserLearnings.
     * @example
     * // Create many UserLearnings
     * const userLearning = await prisma.userLearning.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserLearnings and only return the `id`
     * const userLearningWithIdOnly = await prisma.userLearning.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserLearningCreateManyAndReturnArgs>(args?: SelectSubset<T, UserLearningCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLearningPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserLearning.
     * @param {UserLearningDeleteArgs} args - Arguments to delete one UserLearning.
     * @example
     * // Delete one UserLearning
     * const UserLearning = await prisma.userLearning.delete({
     *   where: {
     *     // ... filter to delete one UserLearning
     *   }
     * })
     * 
     */
    delete<T extends UserLearningDeleteArgs>(args: SelectSubset<T, UserLearningDeleteArgs<ExtArgs>>): Prisma__UserLearningClient<$Result.GetResult<Prisma.$UserLearningPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserLearning.
     * @param {UserLearningUpdateArgs} args - Arguments to update one UserLearning.
     * @example
     * // Update one UserLearning
     * const userLearning = await prisma.userLearning.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserLearningUpdateArgs>(args: SelectSubset<T, UserLearningUpdateArgs<ExtArgs>>): Prisma__UserLearningClient<$Result.GetResult<Prisma.$UserLearningPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserLearnings.
     * @param {UserLearningDeleteManyArgs} args - Arguments to filter UserLearnings to delete.
     * @example
     * // Delete a few UserLearnings
     * const { count } = await prisma.userLearning.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserLearningDeleteManyArgs>(args?: SelectSubset<T, UserLearningDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserLearnings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLearningUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserLearnings
     * const userLearning = await prisma.userLearning.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserLearningUpdateManyArgs>(args: SelectSubset<T, UserLearningUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserLearnings and returns the data updated in the database.
     * @param {UserLearningUpdateManyAndReturnArgs} args - Arguments to update many UserLearnings.
     * @example
     * // Update many UserLearnings
     * const userLearning = await prisma.userLearning.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserLearnings and only return the `id`
     * const userLearningWithIdOnly = await prisma.userLearning.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserLearningUpdateManyAndReturnArgs>(args: SelectSubset<T, UserLearningUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLearningPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserLearning.
     * @param {UserLearningUpsertArgs} args - Arguments to update or create a UserLearning.
     * @example
     * // Update or create a UserLearning
     * const userLearning = await prisma.userLearning.upsert({
     *   create: {
     *     // ... data to create a UserLearning
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserLearning we want to update
     *   }
     * })
     */
    upsert<T extends UserLearningUpsertArgs>(args: SelectSubset<T, UserLearningUpsertArgs<ExtArgs>>): Prisma__UserLearningClient<$Result.GetResult<Prisma.$UserLearningPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserLearnings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLearningCountArgs} args - Arguments to filter UserLearnings to count.
     * @example
     * // Count the number of UserLearnings
     * const count = await prisma.userLearning.count({
     *   where: {
     *     // ... the filter for the UserLearnings we want to count
     *   }
     * })
    **/
    count<T extends UserLearningCountArgs>(
      args?: Subset<T, UserLearningCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserLearningCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserLearning.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLearningAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserLearningAggregateArgs>(args: Subset<T, UserLearningAggregateArgs>): Prisma.PrismaPromise<GetUserLearningAggregateType<T>>

    /**
     * Group by UserLearning.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLearningGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserLearningGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserLearningGroupByArgs['orderBy'] }
        : { orderBy?: UserLearningGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserLearningGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserLearningGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserLearning model
   */
  readonly fields: UserLearningFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserLearning.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserLearningClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    word<T extends WordDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WordDefaultArgs<ExtArgs>>): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    story<T extends UserLearning$storyArgs<ExtArgs> = {}>(args?: Subset<T, UserLearning$storyArgs<ExtArgs>>): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserLearning model
   */
  interface UserLearningFieldRefs {
    readonly id: FieldRef<"UserLearning", 'String'>
    readonly userId: FieldRef<"UserLearning", 'String'>
    readonly wordId: FieldRef<"UserLearning", 'String'>
    readonly storyId: FieldRef<"UserLearning", 'String'>
    readonly status: FieldRef<"UserLearning", 'String'>
    readonly correctCount: FieldRef<"UserLearning", 'Int'>
    readonly wrongCount: FieldRef<"UserLearning", 'Int'>
    readonly lastStudiedAt: FieldRef<"UserLearning", 'DateTime'>
    readonly createdAt: FieldRef<"UserLearning", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserLearning findUnique
   */
  export type UserLearningFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLearning
     */
    select?: UserLearningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLearning
     */
    omit?: UserLearningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLearningInclude<ExtArgs> | null
    /**
     * Filter, which UserLearning to fetch.
     */
    where: UserLearningWhereUniqueInput
  }

  /**
   * UserLearning findUniqueOrThrow
   */
  export type UserLearningFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLearning
     */
    select?: UserLearningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLearning
     */
    omit?: UserLearningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLearningInclude<ExtArgs> | null
    /**
     * Filter, which UserLearning to fetch.
     */
    where: UserLearningWhereUniqueInput
  }

  /**
   * UserLearning findFirst
   */
  export type UserLearningFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLearning
     */
    select?: UserLearningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLearning
     */
    omit?: UserLearningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLearningInclude<ExtArgs> | null
    /**
     * Filter, which UserLearning to fetch.
     */
    where?: UserLearningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLearnings to fetch.
     */
    orderBy?: UserLearningOrderByWithRelationInput | UserLearningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserLearnings.
     */
    cursor?: UserLearningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLearnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLearnings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserLearnings.
     */
    distinct?: UserLearningScalarFieldEnum | UserLearningScalarFieldEnum[]
  }

  /**
   * UserLearning findFirstOrThrow
   */
  export type UserLearningFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLearning
     */
    select?: UserLearningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLearning
     */
    omit?: UserLearningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLearningInclude<ExtArgs> | null
    /**
     * Filter, which UserLearning to fetch.
     */
    where?: UserLearningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLearnings to fetch.
     */
    orderBy?: UserLearningOrderByWithRelationInput | UserLearningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserLearnings.
     */
    cursor?: UserLearningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLearnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLearnings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserLearnings.
     */
    distinct?: UserLearningScalarFieldEnum | UserLearningScalarFieldEnum[]
  }

  /**
   * UserLearning findMany
   */
  export type UserLearningFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLearning
     */
    select?: UserLearningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLearning
     */
    omit?: UserLearningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLearningInclude<ExtArgs> | null
    /**
     * Filter, which UserLearnings to fetch.
     */
    where?: UserLearningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLearnings to fetch.
     */
    orderBy?: UserLearningOrderByWithRelationInput | UserLearningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserLearnings.
     */
    cursor?: UserLearningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLearnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLearnings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserLearnings.
     */
    distinct?: UserLearningScalarFieldEnum | UserLearningScalarFieldEnum[]
  }

  /**
   * UserLearning create
   */
  export type UserLearningCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLearning
     */
    select?: UserLearningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLearning
     */
    omit?: UserLearningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLearningInclude<ExtArgs> | null
    /**
     * The data needed to create a UserLearning.
     */
    data: XOR<UserLearningCreateInput, UserLearningUncheckedCreateInput>
  }

  /**
   * UserLearning createMany
   */
  export type UserLearningCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserLearnings.
     */
    data: UserLearningCreateManyInput | UserLearningCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserLearning createManyAndReturn
   */
  export type UserLearningCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLearning
     */
    select?: UserLearningSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserLearning
     */
    omit?: UserLearningOmit<ExtArgs> | null
    /**
     * The data used to create many UserLearnings.
     */
    data: UserLearningCreateManyInput | UserLearningCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLearningIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserLearning update
   */
  export type UserLearningUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLearning
     */
    select?: UserLearningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLearning
     */
    omit?: UserLearningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLearningInclude<ExtArgs> | null
    /**
     * The data needed to update a UserLearning.
     */
    data: XOR<UserLearningUpdateInput, UserLearningUncheckedUpdateInput>
    /**
     * Choose, which UserLearning to update.
     */
    where: UserLearningWhereUniqueInput
  }

  /**
   * UserLearning updateMany
   */
  export type UserLearningUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserLearnings.
     */
    data: XOR<UserLearningUpdateManyMutationInput, UserLearningUncheckedUpdateManyInput>
    /**
     * Filter which UserLearnings to update
     */
    where?: UserLearningWhereInput
    /**
     * Limit how many UserLearnings to update.
     */
    limit?: number
  }

  /**
   * UserLearning updateManyAndReturn
   */
  export type UserLearningUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLearning
     */
    select?: UserLearningSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserLearning
     */
    omit?: UserLearningOmit<ExtArgs> | null
    /**
     * The data used to update UserLearnings.
     */
    data: XOR<UserLearningUpdateManyMutationInput, UserLearningUncheckedUpdateManyInput>
    /**
     * Filter which UserLearnings to update
     */
    where?: UserLearningWhereInput
    /**
     * Limit how many UserLearnings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLearningIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserLearning upsert
   */
  export type UserLearningUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLearning
     */
    select?: UserLearningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLearning
     */
    omit?: UserLearningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLearningInclude<ExtArgs> | null
    /**
     * The filter to search for the UserLearning to update in case it exists.
     */
    where: UserLearningWhereUniqueInput
    /**
     * In case the UserLearning found by the `where` argument doesn't exist, create a new UserLearning with this data.
     */
    create: XOR<UserLearningCreateInput, UserLearningUncheckedCreateInput>
    /**
     * In case the UserLearning was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserLearningUpdateInput, UserLearningUncheckedUpdateInput>
  }

  /**
   * UserLearning delete
   */
  export type UserLearningDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLearning
     */
    select?: UserLearningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLearning
     */
    omit?: UserLearningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLearningInclude<ExtArgs> | null
    /**
     * Filter which UserLearning to delete.
     */
    where: UserLearningWhereUniqueInput
  }

  /**
   * UserLearning deleteMany
   */
  export type UserLearningDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserLearnings to delete
     */
    where?: UserLearningWhereInput
    /**
     * Limit how many UserLearnings to delete.
     */
    limit?: number
  }

  /**
   * UserLearning.story
   */
  export type UserLearning$storyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Story
     */
    omit?: StoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryInclude<ExtArgs> | null
    where?: StoryWhereInput
  }

  /**
   * UserLearning without action
   */
  export type UserLearningDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLearning
     */
    select?: UserLearningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLearning
     */
    omit?: UserLearningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLearningInclude<ExtArgs> | null
  }


  /**
   * Model DailyRecord
   */

  export type AggregateDailyRecord = {
    _count: DailyRecordCountAggregateOutputType | null
    _avg: DailyRecordAvgAggregateOutputType | null
    _sum: DailyRecordSumAggregateOutputType | null
    _min: DailyRecordMinAggregateOutputType | null
    _max: DailyRecordMaxAggregateOutputType | null
  }

  export type DailyRecordAvgAggregateOutputType = {
    wordsLearned: number | null
    storiesGenerated: number | null
    studyDuration: number | null
    scoreEarned: number | null
  }

  export type DailyRecordSumAggregateOutputType = {
    wordsLearned: number | null
    storiesGenerated: number | null
    studyDuration: number | null
    scoreEarned: number | null
  }

  export type DailyRecordMinAggregateOutputType = {
    id: string | null
    userId: string | null
    studyDate: Date | null
    wordsLearned: number | null
    storiesGenerated: number | null
    studyDuration: number | null
    scoreEarned: number | null
    createdAt: Date | null
  }

  export type DailyRecordMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    studyDate: Date | null
    wordsLearned: number | null
    storiesGenerated: number | null
    studyDuration: number | null
    scoreEarned: number | null
    createdAt: Date | null
  }

  export type DailyRecordCountAggregateOutputType = {
    id: number
    userId: number
    studyDate: number
    wordsLearned: number
    storiesGenerated: number
    studyDuration: number
    scoreEarned: number
    createdAt: number
    _all: number
  }


  export type DailyRecordAvgAggregateInputType = {
    wordsLearned?: true
    storiesGenerated?: true
    studyDuration?: true
    scoreEarned?: true
  }

  export type DailyRecordSumAggregateInputType = {
    wordsLearned?: true
    storiesGenerated?: true
    studyDuration?: true
    scoreEarned?: true
  }

  export type DailyRecordMinAggregateInputType = {
    id?: true
    userId?: true
    studyDate?: true
    wordsLearned?: true
    storiesGenerated?: true
    studyDuration?: true
    scoreEarned?: true
    createdAt?: true
  }

  export type DailyRecordMaxAggregateInputType = {
    id?: true
    userId?: true
    studyDate?: true
    wordsLearned?: true
    storiesGenerated?: true
    studyDuration?: true
    scoreEarned?: true
    createdAt?: true
  }

  export type DailyRecordCountAggregateInputType = {
    id?: true
    userId?: true
    studyDate?: true
    wordsLearned?: true
    storiesGenerated?: true
    studyDuration?: true
    scoreEarned?: true
    createdAt?: true
    _all?: true
  }

  export type DailyRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyRecord to aggregate.
     */
    where?: DailyRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyRecords to fetch.
     */
    orderBy?: DailyRecordOrderByWithRelationInput | DailyRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DailyRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DailyRecords
    **/
    _count?: true | DailyRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DailyRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DailyRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailyRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailyRecordMaxAggregateInputType
  }

  export type GetDailyRecordAggregateType<T extends DailyRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateDailyRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailyRecord[P]>
      : GetScalarType<T[P], AggregateDailyRecord[P]>
  }




  export type DailyRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyRecordWhereInput
    orderBy?: DailyRecordOrderByWithAggregationInput | DailyRecordOrderByWithAggregationInput[]
    by: DailyRecordScalarFieldEnum[] | DailyRecordScalarFieldEnum
    having?: DailyRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailyRecordCountAggregateInputType | true
    _avg?: DailyRecordAvgAggregateInputType
    _sum?: DailyRecordSumAggregateInputType
    _min?: DailyRecordMinAggregateInputType
    _max?: DailyRecordMaxAggregateInputType
  }

  export type DailyRecordGroupByOutputType = {
    id: string
    userId: string
    studyDate: Date
    wordsLearned: number
    storiesGenerated: number
    studyDuration: number
    scoreEarned: number
    createdAt: Date
    _count: DailyRecordCountAggregateOutputType | null
    _avg: DailyRecordAvgAggregateOutputType | null
    _sum: DailyRecordSumAggregateOutputType | null
    _min: DailyRecordMinAggregateOutputType | null
    _max: DailyRecordMaxAggregateOutputType | null
  }

  type GetDailyRecordGroupByPayload<T extends DailyRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailyRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailyRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailyRecordGroupByOutputType[P]>
            : GetScalarType<T[P], DailyRecordGroupByOutputType[P]>
        }
      >
    >


  export type DailyRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    studyDate?: boolean
    wordsLearned?: boolean
    storiesGenerated?: boolean
    studyDuration?: boolean
    scoreEarned?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyRecord"]>

  export type DailyRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    studyDate?: boolean
    wordsLearned?: boolean
    storiesGenerated?: boolean
    studyDuration?: boolean
    scoreEarned?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyRecord"]>

  export type DailyRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    studyDate?: boolean
    wordsLearned?: boolean
    storiesGenerated?: boolean
    studyDuration?: boolean
    scoreEarned?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyRecord"]>

  export type DailyRecordSelectScalar = {
    id?: boolean
    userId?: boolean
    studyDate?: boolean
    wordsLearned?: boolean
    storiesGenerated?: boolean
    studyDuration?: boolean
    scoreEarned?: boolean
    createdAt?: boolean
  }

  export type DailyRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "studyDate" | "wordsLearned" | "storiesGenerated" | "studyDuration" | "scoreEarned" | "createdAt", ExtArgs["result"]["dailyRecord"]>
  export type DailyRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DailyRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DailyRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DailyRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DailyRecord"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      studyDate: Date
      wordsLearned: number
      storiesGenerated: number
      studyDuration: number
      scoreEarned: number
      createdAt: Date
    }, ExtArgs["result"]["dailyRecord"]>
    composites: {}
  }

  type DailyRecordGetPayload<S extends boolean | null | undefined | DailyRecordDefaultArgs> = $Result.GetResult<Prisma.$DailyRecordPayload, S>

  type DailyRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DailyRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DailyRecordCountAggregateInputType | true
    }

  export interface DailyRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DailyRecord'], meta: { name: 'DailyRecord' } }
    /**
     * Find zero or one DailyRecord that matches the filter.
     * @param {DailyRecordFindUniqueArgs} args - Arguments to find a DailyRecord
     * @example
     * // Get one DailyRecord
     * const dailyRecord = await prisma.dailyRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DailyRecordFindUniqueArgs>(args: SelectSubset<T, DailyRecordFindUniqueArgs<ExtArgs>>): Prisma__DailyRecordClient<$Result.GetResult<Prisma.$DailyRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DailyRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DailyRecordFindUniqueOrThrowArgs} args - Arguments to find a DailyRecord
     * @example
     * // Get one DailyRecord
     * const dailyRecord = await prisma.dailyRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DailyRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, DailyRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DailyRecordClient<$Result.GetResult<Prisma.$DailyRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyRecordFindFirstArgs} args - Arguments to find a DailyRecord
     * @example
     * // Get one DailyRecord
     * const dailyRecord = await prisma.dailyRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DailyRecordFindFirstArgs>(args?: SelectSubset<T, DailyRecordFindFirstArgs<ExtArgs>>): Prisma__DailyRecordClient<$Result.GetResult<Prisma.$DailyRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyRecordFindFirstOrThrowArgs} args - Arguments to find a DailyRecord
     * @example
     * // Get one DailyRecord
     * const dailyRecord = await prisma.dailyRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DailyRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, DailyRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__DailyRecordClient<$Result.GetResult<Prisma.$DailyRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DailyRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailyRecords
     * const dailyRecords = await prisma.dailyRecord.findMany()
     * 
     * // Get first 10 DailyRecords
     * const dailyRecords = await prisma.dailyRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dailyRecordWithIdOnly = await prisma.dailyRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DailyRecordFindManyArgs>(args?: SelectSubset<T, DailyRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DailyRecord.
     * @param {DailyRecordCreateArgs} args - Arguments to create a DailyRecord.
     * @example
     * // Create one DailyRecord
     * const DailyRecord = await prisma.dailyRecord.create({
     *   data: {
     *     // ... data to create a DailyRecord
     *   }
     * })
     * 
     */
    create<T extends DailyRecordCreateArgs>(args: SelectSubset<T, DailyRecordCreateArgs<ExtArgs>>): Prisma__DailyRecordClient<$Result.GetResult<Prisma.$DailyRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DailyRecords.
     * @param {DailyRecordCreateManyArgs} args - Arguments to create many DailyRecords.
     * @example
     * // Create many DailyRecords
     * const dailyRecord = await prisma.dailyRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DailyRecordCreateManyArgs>(args?: SelectSubset<T, DailyRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DailyRecords and returns the data saved in the database.
     * @param {DailyRecordCreateManyAndReturnArgs} args - Arguments to create many DailyRecords.
     * @example
     * // Create many DailyRecords
     * const dailyRecord = await prisma.dailyRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DailyRecords and only return the `id`
     * const dailyRecordWithIdOnly = await prisma.dailyRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DailyRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, DailyRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DailyRecord.
     * @param {DailyRecordDeleteArgs} args - Arguments to delete one DailyRecord.
     * @example
     * // Delete one DailyRecord
     * const DailyRecord = await prisma.dailyRecord.delete({
     *   where: {
     *     // ... filter to delete one DailyRecord
     *   }
     * })
     * 
     */
    delete<T extends DailyRecordDeleteArgs>(args: SelectSubset<T, DailyRecordDeleteArgs<ExtArgs>>): Prisma__DailyRecordClient<$Result.GetResult<Prisma.$DailyRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DailyRecord.
     * @param {DailyRecordUpdateArgs} args - Arguments to update one DailyRecord.
     * @example
     * // Update one DailyRecord
     * const dailyRecord = await prisma.dailyRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DailyRecordUpdateArgs>(args: SelectSubset<T, DailyRecordUpdateArgs<ExtArgs>>): Prisma__DailyRecordClient<$Result.GetResult<Prisma.$DailyRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DailyRecords.
     * @param {DailyRecordDeleteManyArgs} args - Arguments to filter DailyRecords to delete.
     * @example
     * // Delete a few DailyRecords
     * const { count } = await prisma.dailyRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DailyRecordDeleteManyArgs>(args?: SelectSubset<T, DailyRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailyRecords
     * const dailyRecord = await prisma.dailyRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DailyRecordUpdateManyArgs>(args: SelectSubset<T, DailyRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyRecords and returns the data updated in the database.
     * @param {DailyRecordUpdateManyAndReturnArgs} args - Arguments to update many DailyRecords.
     * @example
     * // Update many DailyRecords
     * const dailyRecord = await prisma.dailyRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DailyRecords and only return the `id`
     * const dailyRecordWithIdOnly = await prisma.dailyRecord.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DailyRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, DailyRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DailyRecord.
     * @param {DailyRecordUpsertArgs} args - Arguments to update or create a DailyRecord.
     * @example
     * // Update or create a DailyRecord
     * const dailyRecord = await prisma.dailyRecord.upsert({
     *   create: {
     *     // ... data to create a DailyRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailyRecord we want to update
     *   }
     * })
     */
    upsert<T extends DailyRecordUpsertArgs>(args: SelectSubset<T, DailyRecordUpsertArgs<ExtArgs>>): Prisma__DailyRecordClient<$Result.GetResult<Prisma.$DailyRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DailyRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyRecordCountArgs} args - Arguments to filter DailyRecords to count.
     * @example
     * // Count the number of DailyRecords
     * const count = await prisma.dailyRecord.count({
     *   where: {
     *     // ... the filter for the DailyRecords we want to count
     *   }
     * })
    **/
    count<T extends DailyRecordCountArgs>(
      args?: Subset<T, DailyRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailyRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DailyRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DailyRecordAggregateArgs>(args: Subset<T, DailyRecordAggregateArgs>): Prisma.PrismaPromise<GetDailyRecordAggregateType<T>>

    /**
     * Group by DailyRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DailyRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailyRecordGroupByArgs['orderBy'] }
        : { orderBy?: DailyRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DailyRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailyRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DailyRecord model
   */
  readonly fields: DailyRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DailyRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailyRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DailyRecord model
   */
  interface DailyRecordFieldRefs {
    readonly id: FieldRef<"DailyRecord", 'String'>
    readonly userId: FieldRef<"DailyRecord", 'String'>
    readonly studyDate: FieldRef<"DailyRecord", 'DateTime'>
    readonly wordsLearned: FieldRef<"DailyRecord", 'Int'>
    readonly storiesGenerated: FieldRef<"DailyRecord", 'Int'>
    readonly studyDuration: FieldRef<"DailyRecord", 'Int'>
    readonly scoreEarned: FieldRef<"DailyRecord", 'Int'>
    readonly createdAt: FieldRef<"DailyRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DailyRecord findUnique
   */
  export type DailyRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRecord
     */
    select?: DailyRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyRecord
     */
    omit?: DailyRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyRecordInclude<ExtArgs> | null
    /**
     * Filter, which DailyRecord to fetch.
     */
    where: DailyRecordWhereUniqueInput
  }

  /**
   * DailyRecord findUniqueOrThrow
   */
  export type DailyRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRecord
     */
    select?: DailyRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyRecord
     */
    omit?: DailyRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyRecordInclude<ExtArgs> | null
    /**
     * Filter, which DailyRecord to fetch.
     */
    where: DailyRecordWhereUniqueInput
  }

  /**
   * DailyRecord findFirst
   */
  export type DailyRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRecord
     */
    select?: DailyRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyRecord
     */
    omit?: DailyRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyRecordInclude<ExtArgs> | null
    /**
     * Filter, which DailyRecord to fetch.
     */
    where?: DailyRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyRecords to fetch.
     */
    orderBy?: DailyRecordOrderByWithRelationInput | DailyRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyRecords.
     */
    cursor?: DailyRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyRecords.
     */
    distinct?: DailyRecordScalarFieldEnum | DailyRecordScalarFieldEnum[]
  }

  /**
   * DailyRecord findFirstOrThrow
   */
  export type DailyRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRecord
     */
    select?: DailyRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyRecord
     */
    omit?: DailyRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyRecordInclude<ExtArgs> | null
    /**
     * Filter, which DailyRecord to fetch.
     */
    where?: DailyRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyRecords to fetch.
     */
    orderBy?: DailyRecordOrderByWithRelationInput | DailyRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyRecords.
     */
    cursor?: DailyRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyRecords.
     */
    distinct?: DailyRecordScalarFieldEnum | DailyRecordScalarFieldEnum[]
  }

  /**
   * DailyRecord findMany
   */
  export type DailyRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRecord
     */
    select?: DailyRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyRecord
     */
    omit?: DailyRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyRecordInclude<ExtArgs> | null
    /**
     * Filter, which DailyRecords to fetch.
     */
    where?: DailyRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyRecords to fetch.
     */
    orderBy?: DailyRecordOrderByWithRelationInput | DailyRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DailyRecords.
     */
    cursor?: DailyRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyRecords.
     */
    distinct?: DailyRecordScalarFieldEnum | DailyRecordScalarFieldEnum[]
  }

  /**
   * DailyRecord create
   */
  export type DailyRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRecord
     */
    select?: DailyRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyRecord
     */
    omit?: DailyRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a DailyRecord.
     */
    data: XOR<DailyRecordCreateInput, DailyRecordUncheckedCreateInput>
  }

  /**
   * DailyRecord createMany
   */
  export type DailyRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailyRecords.
     */
    data: DailyRecordCreateManyInput | DailyRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DailyRecord createManyAndReturn
   */
  export type DailyRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRecord
     */
    select?: DailyRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyRecord
     */
    omit?: DailyRecordOmit<ExtArgs> | null
    /**
     * The data used to create many DailyRecords.
     */
    data: DailyRecordCreateManyInput | DailyRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailyRecord update
   */
  export type DailyRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRecord
     */
    select?: DailyRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyRecord
     */
    omit?: DailyRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a DailyRecord.
     */
    data: XOR<DailyRecordUpdateInput, DailyRecordUncheckedUpdateInput>
    /**
     * Choose, which DailyRecord to update.
     */
    where: DailyRecordWhereUniqueInput
  }

  /**
   * DailyRecord updateMany
   */
  export type DailyRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DailyRecords.
     */
    data: XOR<DailyRecordUpdateManyMutationInput, DailyRecordUncheckedUpdateManyInput>
    /**
     * Filter which DailyRecords to update
     */
    where?: DailyRecordWhereInput
    /**
     * Limit how many DailyRecords to update.
     */
    limit?: number
  }

  /**
   * DailyRecord updateManyAndReturn
   */
  export type DailyRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRecord
     */
    select?: DailyRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyRecord
     */
    omit?: DailyRecordOmit<ExtArgs> | null
    /**
     * The data used to update DailyRecords.
     */
    data: XOR<DailyRecordUpdateManyMutationInput, DailyRecordUncheckedUpdateManyInput>
    /**
     * Filter which DailyRecords to update
     */
    where?: DailyRecordWhereInput
    /**
     * Limit how many DailyRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailyRecord upsert
   */
  export type DailyRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRecord
     */
    select?: DailyRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyRecord
     */
    omit?: DailyRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the DailyRecord to update in case it exists.
     */
    where: DailyRecordWhereUniqueInput
    /**
     * In case the DailyRecord found by the `where` argument doesn't exist, create a new DailyRecord with this data.
     */
    create: XOR<DailyRecordCreateInput, DailyRecordUncheckedCreateInput>
    /**
     * In case the DailyRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DailyRecordUpdateInput, DailyRecordUncheckedUpdateInput>
  }

  /**
   * DailyRecord delete
   */
  export type DailyRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRecord
     */
    select?: DailyRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyRecord
     */
    omit?: DailyRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyRecordInclude<ExtArgs> | null
    /**
     * Filter which DailyRecord to delete.
     */
    where: DailyRecordWhereUniqueInput
  }

  /**
   * DailyRecord deleteMany
   */
  export type DailyRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyRecords to delete
     */
    where?: DailyRecordWhereInput
    /**
     * Limit how many DailyRecords to delete.
     */
    limit?: number
  }

  /**
   * DailyRecord without action
   */
  export type DailyRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRecord
     */
    select?: DailyRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyRecord
     */
    omit?: DailyRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyRecordInclude<ExtArgs> | null
  }


  /**
   * Model LearningSettings
   */

  export type AggregateLearningSettings = {
    _count: LearningSettingsCountAggregateOutputType | null
    _avg: LearningSettingsAvgAggregateOutputType | null
    _sum: LearningSettingsSumAggregateOutputType | null
    _min: LearningSettingsMinAggregateOutputType | null
    _max: LearningSettingsMaxAggregateOutputType | null
  }

  export type LearningSettingsAvgAggregateOutputType = {
    dailyWordTarget: number | null
  }

  export type LearningSettingsSumAggregateOutputType = {
    dailyWordTarget: number | null
  }

  export type LearningSettingsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    dailyWordTarget: number | null
    preferredStyle: string | null
    autoGenerate: boolean | null
    reminderTime: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LearningSettingsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    dailyWordTarget: number | null
    preferredStyle: string | null
    autoGenerate: boolean | null
    reminderTime: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LearningSettingsCountAggregateOutputType = {
    id: number
    userId: number
    dailyWordTarget: number
    preferredStyle: number
    autoGenerate: number
    reminderTime: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LearningSettingsAvgAggregateInputType = {
    dailyWordTarget?: true
  }

  export type LearningSettingsSumAggregateInputType = {
    dailyWordTarget?: true
  }

  export type LearningSettingsMinAggregateInputType = {
    id?: true
    userId?: true
    dailyWordTarget?: true
    preferredStyle?: true
    autoGenerate?: true
    reminderTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LearningSettingsMaxAggregateInputType = {
    id?: true
    userId?: true
    dailyWordTarget?: true
    preferredStyle?: true
    autoGenerate?: true
    reminderTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LearningSettingsCountAggregateInputType = {
    id?: true
    userId?: true
    dailyWordTarget?: true
    preferredStyle?: true
    autoGenerate?: true
    reminderTime?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LearningSettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LearningSettings to aggregate.
     */
    where?: LearningSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningSettings to fetch.
     */
    orderBy?: LearningSettingsOrderByWithRelationInput | LearningSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LearningSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LearningSettings
    **/
    _count?: true | LearningSettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LearningSettingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LearningSettingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LearningSettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LearningSettingsMaxAggregateInputType
  }

  export type GetLearningSettingsAggregateType<T extends LearningSettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateLearningSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLearningSettings[P]>
      : GetScalarType<T[P], AggregateLearningSettings[P]>
  }




  export type LearningSettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LearningSettingsWhereInput
    orderBy?: LearningSettingsOrderByWithAggregationInput | LearningSettingsOrderByWithAggregationInput[]
    by: LearningSettingsScalarFieldEnum[] | LearningSettingsScalarFieldEnum
    having?: LearningSettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LearningSettingsCountAggregateInputType | true
    _avg?: LearningSettingsAvgAggregateInputType
    _sum?: LearningSettingsSumAggregateInputType
    _min?: LearningSettingsMinAggregateInputType
    _max?: LearningSettingsMaxAggregateInputType
  }

  export type LearningSettingsGroupByOutputType = {
    id: string
    userId: string
    dailyWordTarget: number
    preferredStyle: string
    autoGenerate: boolean
    reminderTime: string | null
    createdAt: Date
    updatedAt: Date
    _count: LearningSettingsCountAggregateOutputType | null
    _avg: LearningSettingsAvgAggregateOutputType | null
    _sum: LearningSettingsSumAggregateOutputType | null
    _min: LearningSettingsMinAggregateOutputType | null
    _max: LearningSettingsMaxAggregateOutputType | null
  }

  type GetLearningSettingsGroupByPayload<T extends LearningSettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LearningSettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LearningSettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LearningSettingsGroupByOutputType[P]>
            : GetScalarType<T[P], LearningSettingsGroupByOutputType[P]>
        }
      >
    >


  export type LearningSettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    dailyWordTarget?: boolean
    preferredStyle?: boolean
    autoGenerate?: boolean
    reminderTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["learningSettings"]>

  export type LearningSettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    dailyWordTarget?: boolean
    preferredStyle?: boolean
    autoGenerate?: boolean
    reminderTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["learningSettings"]>

  export type LearningSettingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    dailyWordTarget?: boolean
    preferredStyle?: boolean
    autoGenerate?: boolean
    reminderTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["learningSettings"]>

  export type LearningSettingsSelectScalar = {
    id?: boolean
    userId?: boolean
    dailyWordTarget?: boolean
    preferredStyle?: boolean
    autoGenerate?: boolean
    reminderTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LearningSettingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "dailyWordTarget" | "preferredStyle" | "autoGenerate" | "reminderTime" | "createdAt" | "updatedAt", ExtArgs["result"]["learningSettings"]>
  export type LearningSettingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LearningSettingsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LearningSettingsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LearningSettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LearningSettings"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      dailyWordTarget: number
      preferredStyle: string
      autoGenerate: boolean
      reminderTime: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["learningSettings"]>
    composites: {}
  }

  type LearningSettingsGetPayload<S extends boolean | null | undefined | LearningSettingsDefaultArgs> = $Result.GetResult<Prisma.$LearningSettingsPayload, S>

  type LearningSettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LearningSettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LearningSettingsCountAggregateInputType | true
    }

  export interface LearningSettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LearningSettings'], meta: { name: 'LearningSettings' } }
    /**
     * Find zero or one LearningSettings that matches the filter.
     * @param {LearningSettingsFindUniqueArgs} args - Arguments to find a LearningSettings
     * @example
     * // Get one LearningSettings
     * const learningSettings = await prisma.learningSettings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LearningSettingsFindUniqueArgs>(args: SelectSubset<T, LearningSettingsFindUniqueArgs<ExtArgs>>): Prisma__LearningSettingsClient<$Result.GetResult<Prisma.$LearningSettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LearningSettings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LearningSettingsFindUniqueOrThrowArgs} args - Arguments to find a LearningSettings
     * @example
     * // Get one LearningSettings
     * const learningSettings = await prisma.learningSettings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LearningSettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, LearningSettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LearningSettingsClient<$Result.GetResult<Prisma.$LearningSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LearningSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningSettingsFindFirstArgs} args - Arguments to find a LearningSettings
     * @example
     * // Get one LearningSettings
     * const learningSettings = await prisma.learningSettings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LearningSettingsFindFirstArgs>(args?: SelectSubset<T, LearningSettingsFindFirstArgs<ExtArgs>>): Prisma__LearningSettingsClient<$Result.GetResult<Prisma.$LearningSettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LearningSettings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningSettingsFindFirstOrThrowArgs} args - Arguments to find a LearningSettings
     * @example
     * // Get one LearningSettings
     * const learningSettings = await prisma.learningSettings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LearningSettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, LearningSettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__LearningSettingsClient<$Result.GetResult<Prisma.$LearningSettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LearningSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningSettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LearningSettings
     * const learningSettings = await prisma.learningSettings.findMany()
     * 
     * // Get first 10 LearningSettings
     * const learningSettings = await prisma.learningSettings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const learningSettingsWithIdOnly = await prisma.learningSettings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LearningSettingsFindManyArgs>(args?: SelectSubset<T, LearningSettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LearningSettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LearningSettings.
     * @param {LearningSettingsCreateArgs} args - Arguments to create a LearningSettings.
     * @example
     * // Create one LearningSettings
     * const LearningSettings = await prisma.learningSettings.create({
     *   data: {
     *     // ... data to create a LearningSettings
     *   }
     * })
     * 
     */
    create<T extends LearningSettingsCreateArgs>(args: SelectSubset<T, LearningSettingsCreateArgs<ExtArgs>>): Prisma__LearningSettingsClient<$Result.GetResult<Prisma.$LearningSettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LearningSettings.
     * @param {LearningSettingsCreateManyArgs} args - Arguments to create many LearningSettings.
     * @example
     * // Create many LearningSettings
     * const learningSettings = await prisma.learningSettings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LearningSettingsCreateManyArgs>(args?: SelectSubset<T, LearningSettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LearningSettings and returns the data saved in the database.
     * @param {LearningSettingsCreateManyAndReturnArgs} args - Arguments to create many LearningSettings.
     * @example
     * // Create many LearningSettings
     * const learningSettings = await prisma.learningSettings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LearningSettings and only return the `id`
     * const learningSettingsWithIdOnly = await prisma.learningSettings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LearningSettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, LearningSettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LearningSettingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LearningSettings.
     * @param {LearningSettingsDeleteArgs} args - Arguments to delete one LearningSettings.
     * @example
     * // Delete one LearningSettings
     * const LearningSettings = await prisma.learningSettings.delete({
     *   where: {
     *     // ... filter to delete one LearningSettings
     *   }
     * })
     * 
     */
    delete<T extends LearningSettingsDeleteArgs>(args: SelectSubset<T, LearningSettingsDeleteArgs<ExtArgs>>): Prisma__LearningSettingsClient<$Result.GetResult<Prisma.$LearningSettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LearningSettings.
     * @param {LearningSettingsUpdateArgs} args - Arguments to update one LearningSettings.
     * @example
     * // Update one LearningSettings
     * const learningSettings = await prisma.learningSettings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LearningSettingsUpdateArgs>(args: SelectSubset<T, LearningSettingsUpdateArgs<ExtArgs>>): Prisma__LearningSettingsClient<$Result.GetResult<Prisma.$LearningSettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LearningSettings.
     * @param {LearningSettingsDeleteManyArgs} args - Arguments to filter LearningSettings to delete.
     * @example
     * // Delete a few LearningSettings
     * const { count } = await prisma.learningSettings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LearningSettingsDeleteManyArgs>(args?: SelectSubset<T, LearningSettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LearningSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningSettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LearningSettings
     * const learningSettings = await prisma.learningSettings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LearningSettingsUpdateManyArgs>(args: SelectSubset<T, LearningSettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LearningSettings and returns the data updated in the database.
     * @param {LearningSettingsUpdateManyAndReturnArgs} args - Arguments to update many LearningSettings.
     * @example
     * // Update many LearningSettings
     * const learningSettings = await prisma.learningSettings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LearningSettings and only return the `id`
     * const learningSettingsWithIdOnly = await prisma.learningSettings.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LearningSettingsUpdateManyAndReturnArgs>(args: SelectSubset<T, LearningSettingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LearningSettingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LearningSettings.
     * @param {LearningSettingsUpsertArgs} args - Arguments to update or create a LearningSettings.
     * @example
     * // Update or create a LearningSettings
     * const learningSettings = await prisma.learningSettings.upsert({
     *   create: {
     *     // ... data to create a LearningSettings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LearningSettings we want to update
     *   }
     * })
     */
    upsert<T extends LearningSettingsUpsertArgs>(args: SelectSubset<T, LearningSettingsUpsertArgs<ExtArgs>>): Prisma__LearningSettingsClient<$Result.GetResult<Prisma.$LearningSettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LearningSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningSettingsCountArgs} args - Arguments to filter LearningSettings to count.
     * @example
     * // Count the number of LearningSettings
     * const count = await prisma.learningSettings.count({
     *   where: {
     *     // ... the filter for the LearningSettings we want to count
     *   }
     * })
    **/
    count<T extends LearningSettingsCountArgs>(
      args?: Subset<T, LearningSettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LearningSettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LearningSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningSettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LearningSettingsAggregateArgs>(args: Subset<T, LearningSettingsAggregateArgs>): Prisma.PrismaPromise<GetLearningSettingsAggregateType<T>>

    /**
     * Group by LearningSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningSettingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LearningSettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LearningSettingsGroupByArgs['orderBy'] }
        : { orderBy?: LearningSettingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LearningSettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLearningSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LearningSettings model
   */
  readonly fields: LearningSettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LearningSettings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LearningSettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LearningSettings model
   */
  interface LearningSettingsFieldRefs {
    readonly id: FieldRef<"LearningSettings", 'String'>
    readonly userId: FieldRef<"LearningSettings", 'String'>
    readonly dailyWordTarget: FieldRef<"LearningSettings", 'Int'>
    readonly preferredStyle: FieldRef<"LearningSettings", 'String'>
    readonly autoGenerate: FieldRef<"LearningSettings", 'Boolean'>
    readonly reminderTime: FieldRef<"LearningSettings", 'String'>
    readonly createdAt: FieldRef<"LearningSettings", 'DateTime'>
    readonly updatedAt: FieldRef<"LearningSettings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LearningSettings findUnique
   */
  export type LearningSettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningSettings
     */
    select?: LearningSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningSettings
     */
    omit?: LearningSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningSettingsInclude<ExtArgs> | null
    /**
     * Filter, which LearningSettings to fetch.
     */
    where: LearningSettingsWhereUniqueInput
  }

  /**
   * LearningSettings findUniqueOrThrow
   */
  export type LearningSettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningSettings
     */
    select?: LearningSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningSettings
     */
    omit?: LearningSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningSettingsInclude<ExtArgs> | null
    /**
     * Filter, which LearningSettings to fetch.
     */
    where: LearningSettingsWhereUniqueInput
  }

  /**
   * LearningSettings findFirst
   */
  export type LearningSettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningSettings
     */
    select?: LearningSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningSettings
     */
    omit?: LearningSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningSettingsInclude<ExtArgs> | null
    /**
     * Filter, which LearningSettings to fetch.
     */
    where?: LearningSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningSettings to fetch.
     */
    orderBy?: LearningSettingsOrderByWithRelationInput | LearningSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LearningSettings.
     */
    cursor?: LearningSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LearningSettings.
     */
    distinct?: LearningSettingsScalarFieldEnum | LearningSettingsScalarFieldEnum[]
  }

  /**
   * LearningSettings findFirstOrThrow
   */
  export type LearningSettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningSettings
     */
    select?: LearningSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningSettings
     */
    omit?: LearningSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningSettingsInclude<ExtArgs> | null
    /**
     * Filter, which LearningSettings to fetch.
     */
    where?: LearningSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningSettings to fetch.
     */
    orderBy?: LearningSettingsOrderByWithRelationInput | LearningSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LearningSettings.
     */
    cursor?: LearningSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LearningSettings.
     */
    distinct?: LearningSettingsScalarFieldEnum | LearningSettingsScalarFieldEnum[]
  }

  /**
   * LearningSettings findMany
   */
  export type LearningSettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningSettings
     */
    select?: LearningSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningSettings
     */
    omit?: LearningSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningSettingsInclude<ExtArgs> | null
    /**
     * Filter, which LearningSettings to fetch.
     */
    where?: LearningSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningSettings to fetch.
     */
    orderBy?: LearningSettingsOrderByWithRelationInput | LearningSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LearningSettings.
     */
    cursor?: LearningSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LearningSettings.
     */
    distinct?: LearningSettingsScalarFieldEnum | LearningSettingsScalarFieldEnum[]
  }

  /**
   * LearningSettings create
   */
  export type LearningSettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningSettings
     */
    select?: LearningSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningSettings
     */
    omit?: LearningSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningSettingsInclude<ExtArgs> | null
    /**
     * The data needed to create a LearningSettings.
     */
    data: XOR<LearningSettingsCreateInput, LearningSettingsUncheckedCreateInput>
  }

  /**
   * LearningSettings createMany
   */
  export type LearningSettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LearningSettings.
     */
    data: LearningSettingsCreateManyInput | LearningSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LearningSettings createManyAndReturn
   */
  export type LearningSettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningSettings
     */
    select?: LearningSettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LearningSettings
     */
    omit?: LearningSettingsOmit<ExtArgs> | null
    /**
     * The data used to create many LearningSettings.
     */
    data: LearningSettingsCreateManyInput | LearningSettingsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningSettingsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LearningSettings update
   */
  export type LearningSettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningSettings
     */
    select?: LearningSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningSettings
     */
    omit?: LearningSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningSettingsInclude<ExtArgs> | null
    /**
     * The data needed to update a LearningSettings.
     */
    data: XOR<LearningSettingsUpdateInput, LearningSettingsUncheckedUpdateInput>
    /**
     * Choose, which LearningSettings to update.
     */
    where: LearningSettingsWhereUniqueInput
  }

  /**
   * LearningSettings updateMany
   */
  export type LearningSettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LearningSettings.
     */
    data: XOR<LearningSettingsUpdateManyMutationInput, LearningSettingsUncheckedUpdateManyInput>
    /**
     * Filter which LearningSettings to update
     */
    where?: LearningSettingsWhereInput
    /**
     * Limit how many LearningSettings to update.
     */
    limit?: number
  }

  /**
   * LearningSettings updateManyAndReturn
   */
  export type LearningSettingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningSettings
     */
    select?: LearningSettingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LearningSettings
     */
    omit?: LearningSettingsOmit<ExtArgs> | null
    /**
     * The data used to update LearningSettings.
     */
    data: XOR<LearningSettingsUpdateManyMutationInput, LearningSettingsUncheckedUpdateManyInput>
    /**
     * Filter which LearningSettings to update
     */
    where?: LearningSettingsWhereInput
    /**
     * Limit how many LearningSettings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningSettingsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LearningSettings upsert
   */
  export type LearningSettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningSettings
     */
    select?: LearningSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningSettings
     */
    omit?: LearningSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningSettingsInclude<ExtArgs> | null
    /**
     * The filter to search for the LearningSettings to update in case it exists.
     */
    where: LearningSettingsWhereUniqueInput
    /**
     * In case the LearningSettings found by the `where` argument doesn't exist, create a new LearningSettings with this data.
     */
    create: XOR<LearningSettingsCreateInput, LearningSettingsUncheckedCreateInput>
    /**
     * In case the LearningSettings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LearningSettingsUpdateInput, LearningSettingsUncheckedUpdateInput>
  }

  /**
   * LearningSettings delete
   */
  export type LearningSettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningSettings
     */
    select?: LearningSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningSettings
     */
    omit?: LearningSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningSettingsInclude<ExtArgs> | null
    /**
     * Filter which LearningSettings to delete.
     */
    where: LearningSettingsWhereUniqueInput
  }

  /**
   * LearningSettings deleteMany
   */
  export type LearningSettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LearningSettings to delete
     */
    where?: LearningSettingsWhereInput
    /**
     * Limit how many LearningSettings to delete.
     */
    limit?: number
  }

  /**
   * LearningSettings without action
   */
  export type LearningSettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningSettings
     */
    select?: LearningSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningSettings
     */
    omit?: LearningSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningSettingsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password',
    avatar: 'avatar',
    level: 'level',
    totalScore: 'totalScore',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const WordScalarFieldEnum: {
    id: 'id',
    word: 'word',
    phonetic: 'phonetic',
    meaning: 'meaning',
    partOfSpeech: 'partOfSpeech',
    example: 'example',
    level: 'level',
    category: 'category',
    frequency: 'frequency',
    createdAt: 'createdAt'
  };

  export type WordScalarFieldEnum = (typeof WordScalarFieldEnum)[keyof typeof WordScalarFieldEnum]


  export const StoryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    content: 'content',
    words: 'words',
    style: 'style',
    wordCount: 'wordCount',
    imageUrls: 'imageUrls',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type StoryScalarFieldEnum = (typeof StoryScalarFieldEnum)[keyof typeof StoryScalarFieldEnum]


  export const UserLearningScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    wordId: 'wordId',
    storyId: 'storyId',
    status: 'status',
    correctCount: 'correctCount',
    wrongCount: 'wrongCount',
    lastStudiedAt: 'lastStudiedAt',
    createdAt: 'createdAt'
  };

  export type UserLearningScalarFieldEnum = (typeof UserLearningScalarFieldEnum)[keyof typeof UserLearningScalarFieldEnum]


  export const DailyRecordScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    studyDate: 'studyDate',
    wordsLearned: 'wordsLearned',
    storiesGenerated: 'storiesGenerated',
    studyDuration: 'studyDuration',
    scoreEarned: 'scoreEarned',
    createdAt: 'createdAt'
  };

  export type DailyRecordScalarFieldEnum = (typeof DailyRecordScalarFieldEnum)[keyof typeof DailyRecordScalarFieldEnum]


  export const LearningSettingsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    dailyWordTarget: 'dailyWordTarget',
    preferredStyle: 'preferredStyle',
    autoGenerate: 'autoGenerate',
    reminderTime: 'reminderTime',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LearningSettingsScalarFieldEnum = (typeof LearningSettingsScalarFieldEnum)[keyof typeof LearningSettingsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    level?: IntFilter<"User"> | number
    totalScore?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    stories?: StoryListRelationFilter
    userLearning?: UserLearningListRelationFilter
    dailyRecords?: DailyRecordListRelationFilter
    learningSettings?: XOR<LearningSettingsNullableScalarRelationFilter, LearningSettingsWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrderInput | SortOrder
    level?: SortOrder
    totalScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    stories?: StoryOrderByRelationAggregateInput
    userLearning?: UserLearningOrderByRelationAggregateInput
    dailyRecords?: DailyRecordOrderByRelationAggregateInput
    learningSettings?: LearningSettingsOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    level?: IntFilter<"User"> | number
    totalScore?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    stories?: StoryListRelationFilter
    userLearning?: UserLearningListRelationFilter
    dailyRecords?: DailyRecordListRelationFilter
    learningSettings?: XOR<LearningSettingsNullableScalarRelationFilter, LearningSettingsWhereInput> | null
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrderInput | SortOrder
    level?: SortOrder
    totalScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    level?: IntWithAggregatesFilter<"User"> | number
    totalScore?: IntWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type WordWhereInput = {
    AND?: WordWhereInput | WordWhereInput[]
    OR?: WordWhereInput[]
    NOT?: WordWhereInput | WordWhereInput[]
    id?: StringFilter<"Word"> | string
    word?: StringFilter<"Word"> | string
    phonetic?: StringNullableFilter<"Word"> | string | null
    meaning?: StringFilter<"Word"> | string
    partOfSpeech?: StringFilter<"Word"> | string
    example?: StringNullableFilter<"Word"> | string | null
    level?: IntFilter<"Word"> | number
    category?: StringNullableFilter<"Word"> | string | null
    frequency?: IntFilter<"Word"> | number
    createdAt?: DateTimeFilter<"Word"> | Date | string
    userLearning?: UserLearningListRelationFilter
  }

  export type WordOrderByWithRelationInput = {
    id?: SortOrder
    word?: SortOrder
    phonetic?: SortOrderInput | SortOrder
    meaning?: SortOrder
    partOfSpeech?: SortOrder
    example?: SortOrderInput | SortOrder
    level?: SortOrder
    category?: SortOrderInput | SortOrder
    frequency?: SortOrder
    createdAt?: SortOrder
    userLearning?: UserLearningOrderByRelationAggregateInput
  }

  export type WordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    word?: string
    AND?: WordWhereInput | WordWhereInput[]
    OR?: WordWhereInput[]
    NOT?: WordWhereInput | WordWhereInput[]
    phonetic?: StringNullableFilter<"Word"> | string | null
    meaning?: StringFilter<"Word"> | string
    partOfSpeech?: StringFilter<"Word"> | string
    example?: StringNullableFilter<"Word"> | string | null
    level?: IntFilter<"Word"> | number
    category?: StringNullableFilter<"Word"> | string | null
    frequency?: IntFilter<"Word"> | number
    createdAt?: DateTimeFilter<"Word"> | Date | string
    userLearning?: UserLearningListRelationFilter
  }, "id" | "word">

  export type WordOrderByWithAggregationInput = {
    id?: SortOrder
    word?: SortOrder
    phonetic?: SortOrderInput | SortOrder
    meaning?: SortOrder
    partOfSpeech?: SortOrder
    example?: SortOrderInput | SortOrder
    level?: SortOrder
    category?: SortOrderInput | SortOrder
    frequency?: SortOrder
    createdAt?: SortOrder
    _count?: WordCountOrderByAggregateInput
    _avg?: WordAvgOrderByAggregateInput
    _max?: WordMaxOrderByAggregateInput
    _min?: WordMinOrderByAggregateInput
    _sum?: WordSumOrderByAggregateInput
  }

  export type WordScalarWhereWithAggregatesInput = {
    AND?: WordScalarWhereWithAggregatesInput | WordScalarWhereWithAggregatesInput[]
    OR?: WordScalarWhereWithAggregatesInput[]
    NOT?: WordScalarWhereWithAggregatesInput | WordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Word"> | string
    word?: StringWithAggregatesFilter<"Word"> | string
    phonetic?: StringNullableWithAggregatesFilter<"Word"> | string | null
    meaning?: StringWithAggregatesFilter<"Word"> | string
    partOfSpeech?: StringWithAggregatesFilter<"Word"> | string
    example?: StringNullableWithAggregatesFilter<"Word"> | string | null
    level?: IntWithAggregatesFilter<"Word"> | number
    category?: StringNullableWithAggregatesFilter<"Word"> | string | null
    frequency?: IntWithAggregatesFilter<"Word"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Word"> | Date | string
  }

  export type StoryWhereInput = {
    AND?: StoryWhereInput | StoryWhereInput[]
    OR?: StoryWhereInput[]
    NOT?: StoryWhereInput | StoryWhereInput[]
    id?: StringFilter<"Story"> | string
    userId?: StringFilter<"Story"> | string
    title?: StringFilter<"Story"> | string
    content?: StringFilter<"Story"> | string
    words?: StringFilter<"Story"> | string
    style?: StringFilter<"Story"> | string
    wordCount?: IntFilter<"Story"> | number
    imageUrls?: StringFilter<"Story"> | string
    status?: StringFilter<"Story"> | string
    createdAt?: DateTimeFilter<"Story"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    userLearning?: UserLearningListRelationFilter
  }

  export type StoryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    words?: SortOrder
    style?: SortOrder
    wordCount?: SortOrder
    imageUrls?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    userLearning?: UserLearningOrderByRelationAggregateInput
  }

  export type StoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StoryWhereInput | StoryWhereInput[]
    OR?: StoryWhereInput[]
    NOT?: StoryWhereInput | StoryWhereInput[]
    userId?: StringFilter<"Story"> | string
    title?: StringFilter<"Story"> | string
    content?: StringFilter<"Story"> | string
    words?: StringFilter<"Story"> | string
    style?: StringFilter<"Story"> | string
    wordCount?: IntFilter<"Story"> | number
    imageUrls?: StringFilter<"Story"> | string
    status?: StringFilter<"Story"> | string
    createdAt?: DateTimeFilter<"Story"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    userLearning?: UserLearningListRelationFilter
  }, "id">

  export type StoryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    words?: SortOrder
    style?: SortOrder
    wordCount?: SortOrder
    imageUrls?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: StoryCountOrderByAggregateInput
    _avg?: StoryAvgOrderByAggregateInput
    _max?: StoryMaxOrderByAggregateInput
    _min?: StoryMinOrderByAggregateInput
    _sum?: StorySumOrderByAggregateInput
  }

  export type StoryScalarWhereWithAggregatesInput = {
    AND?: StoryScalarWhereWithAggregatesInput | StoryScalarWhereWithAggregatesInput[]
    OR?: StoryScalarWhereWithAggregatesInput[]
    NOT?: StoryScalarWhereWithAggregatesInput | StoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Story"> | string
    userId?: StringWithAggregatesFilter<"Story"> | string
    title?: StringWithAggregatesFilter<"Story"> | string
    content?: StringWithAggregatesFilter<"Story"> | string
    words?: StringWithAggregatesFilter<"Story"> | string
    style?: StringWithAggregatesFilter<"Story"> | string
    wordCount?: IntWithAggregatesFilter<"Story"> | number
    imageUrls?: StringWithAggregatesFilter<"Story"> | string
    status?: StringWithAggregatesFilter<"Story"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Story"> | Date | string
  }

  export type UserLearningWhereInput = {
    AND?: UserLearningWhereInput | UserLearningWhereInput[]
    OR?: UserLearningWhereInput[]
    NOT?: UserLearningWhereInput | UserLearningWhereInput[]
    id?: StringFilter<"UserLearning"> | string
    userId?: StringFilter<"UserLearning"> | string
    wordId?: StringFilter<"UserLearning"> | string
    storyId?: StringNullableFilter<"UserLearning"> | string | null
    status?: StringFilter<"UserLearning"> | string
    correctCount?: IntFilter<"UserLearning"> | number
    wrongCount?: IntFilter<"UserLearning"> | number
    lastStudiedAt?: DateTimeNullableFilter<"UserLearning"> | Date | string | null
    createdAt?: DateTimeFilter<"UserLearning"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    word?: XOR<WordScalarRelationFilter, WordWhereInput>
    story?: XOR<StoryNullableScalarRelationFilter, StoryWhereInput> | null
  }

  export type UserLearningOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    wordId?: SortOrder
    storyId?: SortOrderInput | SortOrder
    status?: SortOrder
    correctCount?: SortOrder
    wrongCount?: SortOrder
    lastStudiedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    word?: WordOrderByWithRelationInput
    story?: StoryOrderByWithRelationInput
  }

  export type UserLearningWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_wordId?: UserLearningUserIdWordIdCompoundUniqueInput
    AND?: UserLearningWhereInput | UserLearningWhereInput[]
    OR?: UserLearningWhereInput[]
    NOT?: UserLearningWhereInput | UserLearningWhereInput[]
    userId?: StringFilter<"UserLearning"> | string
    wordId?: StringFilter<"UserLearning"> | string
    storyId?: StringNullableFilter<"UserLearning"> | string | null
    status?: StringFilter<"UserLearning"> | string
    correctCount?: IntFilter<"UserLearning"> | number
    wrongCount?: IntFilter<"UserLearning"> | number
    lastStudiedAt?: DateTimeNullableFilter<"UserLearning"> | Date | string | null
    createdAt?: DateTimeFilter<"UserLearning"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    word?: XOR<WordScalarRelationFilter, WordWhereInput>
    story?: XOR<StoryNullableScalarRelationFilter, StoryWhereInput> | null
  }, "id" | "userId_wordId">

  export type UserLearningOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    wordId?: SortOrder
    storyId?: SortOrderInput | SortOrder
    status?: SortOrder
    correctCount?: SortOrder
    wrongCount?: SortOrder
    lastStudiedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UserLearningCountOrderByAggregateInput
    _avg?: UserLearningAvgOrderByAggregateInput
    _max?: UserLearningMaxOrderByAggregateInput
    _min?: UserLearningMinOrderByAggregateInput
    _sum?: UserLearningSumOrderByAggregateInput
  }

  export type UserLearningScalarWhereWithAggregatesInput = {
    AND?: UserLearningScalarWhereWithAggregatesInput | UserLearningScalarWhereWithAggregatesInput[]
    OR?: UserLearningScalarWhereWithAggregatesInput[]
    NOT?: UserLearningScalarWhereWithAggregatesInput | UserLearningScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserLearning"> | string
    userId?: StringWithAggregatesFilter<"UserLearning"> | string
    wordId?: StringWithAggregatesFilter<"UserLearning"> | string
    storyId?: StringNullableWithAggregatesFilter<"UserLearning"> | string | null
    status?: StringWithAggregatesFilter<"UserLearning"> | string
    correctCount?: IntWithAggregatesFilter<"UserLearning"> | number
    wrongCount?: IntWithAggregatesFilter<"UserLearning"> | number
    lastStudiedAt?: DateTimeNullableWithAggregatesFilter<"UserLearning"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UserLearning"> | Date | string
  }

  export type DailyRecordWhereInput = {
    AND?: DailyRecordWhereInput | DailyRecordWhereInput[]
    OR?: DailyRecordWhereInput[]
    NOT?: DailyRecordWhereInput | DailyRecordWhereInput[]
    id?: StringFilter<"DailyRecord"> | string
    userId?: StringFilter<"DailyRecord"> | string
    studyDate?: DateTimeFilter<"DailyRecord"> | Date | string
    wordsLearned?: IntFilter<"DailyRecord"> | number
    storiesGenerated?: IntFilter<"DailyRecord"> | number
    studyDuration?: IntFilter<"DailyRecord"> | number
    scoreEarned?: IntFilter<"DailyRecord"> | number
    createdAt?: DateTimeFilter<"DailyRecord"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type DailyRecordOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    studyDate?: SortOrder
    wordsLearned?: SortOrder
    storiesGenerated?: SortOrder
    studyDuration?: SortOrder
    scoreEarned?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type DailyRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_studyDate?: DailyRecordUserIdStudyDateCompoundUniqueInput
    AND?: DailyRecordWhereInput | DailyRecordWhereInput[]
    OR?: DailyRecordWhereInput[]
    NOT?: DailyRecordWhereInput | DailyRecordWhereInput[]
    userId?: StringFilter<"DailyRecord"> | string
    studyDate?: DateTimeFilter<"DailyRecord"> | Date | string
    wordsLearned?: IntFilter<"DailyRecord"> | number
    storiesGenerated?: IntFilter<"DailyRecord"> | number
    studyDuration?: IntFilter<"DailyRecord"> | number
    scoreEarned?: IntFilter<"DailyRecord"> | number
    createdAt?: DateTimeFilter<"DailyRecord"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_studyDate">

  export type DailyRecordOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    studyDate?: SortOrder
    wordsLearned?: SortOrder
    storiesGenerated?: SortOrder
    studyDuration?: SortOrder
    scoreEarned?: SortOrder
    createdAt?: SortOrder
    _count?: DailyRecordCountOrderByAggregateInput
    _avg?: DailyRecordAvgOrderByAggregateInput
    _max?: DailyRecordMaxOrderByAggregateInput
    _min?: DailyRecordMinOrderByAggregateInput
    _sum?: DailyRecordSumOrderByAggregateInput
  }

  export type DailyRecordScalarWhereWithAggregatesInput = {
    AND?: DailyRecordScalarWhereWithAggregatesInput | DailyRecordScalarWhereWithAggregatesInput[]
    OR?: DailyRecordScalarWhereWithAggregatesInput[]
    NOT?: DailyRecordScalarWhereWithAggregatesInput | DailyRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DailyRecord"> | string
    userId?: StringWithAggregatesFilter<"DailyRecord"> | string
    studyDate?: DateTimeWithAggregatesFilter<"DailyRecord"> | Date | string
    wordsLearned?: IntWithAggregatesFilter<"DailyRecord"> | number
    storiesGenerated?: IntWithAggregatesFilter<"DailyRecord"> | number
    studyDuration?: IntWithAggregatesFilter<"DailyRecord"> | number
    scoreEarned?: IntWithAggregatesFilter<"DailyRecord"> | number
    createdAt?: DateTimeWithAggregatesFilter<"DailyRecord"> | Date | string
  }

  export type LearningSettingsWhereInput = {
    AND?: LearningSettingsWhereInput | LearningSettingsWhereInput[]
    OR?: LearningSettingsWhereInput[]
    NOT?: LearningSettingsWhereInput | LearningSettingsWhereInput[]
    id?: StringFilter<"LearningSettings"> | string
    userId?: StringFilter<"LearningSettings"> | string
    dailyWordTarget?: IntFilter<"LearningSettings"> | number
    preferredStyle?: StringFilter<"LearningSettings"> | string
    autoGenerate?: BoolFilter<"LearningSettings"> | boolean
    reminderTime?: StringNullableFilter<"LearningSettings"> | string | null
    createdAt?: DateTimeFilter<"LearningSettings"> | Date | string
    updatedAt?: DateTimeFilter<"LearningSettings"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type LearningSettingsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    dailyWordTarget?: SortOrder
    preferredStyle?: SortOrder
    autoGenerate?: SortOrder
    reminderTime?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type LearningSettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: LearningSettingsWhereInput | LearningSettingsWhereInput[]
    OR?: LearningSettingsWhereInput[]
    NOT?: LearningSettingsWhereInput | LearningSettingsWhereInput[]
    dailyWordTarget?: IntFilter<"LearningSettings"> | number
    preferredStyle?: StringFilter<"LearningSettings"> | string
    autoGenerate?: BoolFilter<"LearningSettings"> | boolean
    reminderTime?: StringNullableFilter<"LearningSettings"> | string | null
    createdAt?: DateTimeFilter<"LearningSettings"> | Date | string
    updatedAt?: DateTimeFilter<"LearningSettings"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type LearningSettingsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    dailyWordTarget?: SortOrder
    preferredStyle?: SortOrder
    autoGenerate?: SortOrder
    reminderTime?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LearningSettingsCountOrderByAggregateInput
    _avg?: LearningSettingsAvgOrderByAggregateInput
    _max?: LearningSettingsMaxOrderByAggregateInput
    _min?: LearningSettingsMinOrderByAggregateInput
    _sum?: LearningSettingsSumOrderByAggregateInput
  }

  export type LearningSettingsScalarWhereWithAggregatesInput = {
    AND?: LearningSettingsScalarWhereWithAggregatesInput | LearningSettingsScalarWhereWithAggregatesInput[]
    OR?: LearningSettingsScalarWhereWithAggregatesInput[]
    NOT?: LearningSettingsScalarWhereWithAggregatesInput | LearningSettingsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LearningSettings"> | string
    userId?: StringWithAggregatesFilter<"LearningSettings"> | string
    dailyWordTarget?: IntWithAggregatesFilter<"LearningSettings"> | number
    preferredStyle?: StringWithAggregatesFilter<"LearningSettings"> | string
    autoGenerate?: BoolWithAggregatesFilter<"LearningSettings"> | boolean
    reminderTime?: StringNullableWithAggregatesFilter<"LearningSettings"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"LearningSettings"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LearningSettings"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    email: string
    password: string
    avatar?: string | null
    level?: number
    totalScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    stories?: StoryCreateNestedManyWithoutUserInput
    userLearning?: UserLearningCreateNestedManyWithoutUserInput
    dailyRecords?: DailyRecordCreateNestedManyWithoutUserInput
    learningSettings?: LearningSettingsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    email: string
    password: string
    avatar?: string | null
    level?: number
    totalScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    stories?: StoryUncheckedCreateNestedManyWithoutUserInput
    userLearning?: UserLearningUncheckedCreateNestedManyWithoutUserInput
    dailyRecords?: DailyRecordUncheckedCreateNestedManyWithoutUserInput
    learningSettings?: LearningSettingsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    totalScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stories?: StoryUpdateManyWithoutUserNestedInput
    userLearning?: UserLearningUpdateManyWithoutUserNestedInput
    dailyRecords?: DailyRecordUpdateManyWithoutUserNestedInput
    learningSettings?: LearningSettingsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    totalScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stories?: StoryUncheckedUpdateManyWithoutUserNestedInput
    userLearning?: UserLearningUncheckedUpdateManyWithoutUserNestedInput
    dailyRecords?: DailyRecordUncheckedUpdateManyWithoutUserNestedInput
    learningSettings?: LearningSettingsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    email: string
    password: string
    avatar?: string | null
    level?: number
    totalScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    totalScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    totalScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WordCreateInput = {
    id?: string
    word: string
    phonetic?: string | null
    meaning: string
    partOfSpeech: string
    example?: string | null
    level?: number
    category?: string | null
    frequency?: number
    createdAt?: Date | string
    userLearning?: UserLearningCreateNestedManyWithoutWordInput
  }

  export type WordUncheckedCreateInput = {
    id?: string
    word: string
    phonetic?: string | null
    meaning: string
    partOfSpeech: string
    example?: string | null
    level?: number
    category?: string | null
    frequency?: number
    createdAt?: Date | string
    userLearning?: UserLearningUncheckedCreateNestedManyWithoutWordInput
  }

  export type WordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    phonetic?: NullableStringFieldUpdateOperationsInput | string | null
    meaning?: StringFieldUpdateOperationsInput | string
    partOfSpeech?: StringFieldUpdateOperationsInput | string
    example?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userLearning?: UserLearningUpdateManyWithoutWordNestedInput
  }

  export type WordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    phonetic?: NullableStringFieldUpdateOperationsInput | string | null
    meaning?: StringFieldUpdateOperationsInput | string
    partOfSpeech?: StringFieldUpdateOperationsInput | string
    example?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userLearning?: UserLearningUncheckedUpdateManyWithoutWordNestedInput
  }

  export type WordCreateManyInput = {
    id?: string
    word: string
    phonetic?: string | null
    meaning: string
    partOfSpeech: string
    example?: string | null
    level?: number
    category?: string | null
    frequency?: number
    createdAt?: Date | string
  }

  export type WordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    phonetic?: NullableStringFieldUpdateOperationsInput | string | null
    meaning?: StringFieldUpdateOperationsInput | string
    partOfSpeech?: StringFieldUpdateOperationsInput | string
    example?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    phonetic?: NullableStringFieldUpdateOperationsInput | string | null
    meaning?: StringFieldUpdateOperationsInput | string
    partOfSpeech?: StringFieldUpdateOperationsInput | string
    example?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoryCreateInput = {
    id?: string
    title: string
    content: string
    words: string
    style: string
    wordCount: number
    imageUrls: string
    status?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutStoriesInput
    userLearning?: UserLearningCreateNestedManyWithoutStoryInput
  }

  export type StoryUncheckedCreateInput = {
    id?: string
    userId: string
    title: string
    content: string
    words: string
    style: string
    wordCount: number
    imageUrls: string
    status?: string
    createdAt?: Date | string
    userLearning?: UserLearningUncheckedCreateNestedManyWithoutStoryInput
  }

  export type StoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    words?: StringFieldUpdateOperationsInput | string
    style?: StringFieldUpdateOperationsInput | string
    wordCount?: IntFieldUpdateOperationsInput | number
    imageUrls?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStoriesNestedInput
    userLearning?: UserLearningUpdateManyWithoutStoryNestedInput
  }

  export type StoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    words?: StringFieldUpdateOperationsInput | string
    style?: StringFieldUpdateOperationsInput | string
    wordCount?: IntFieldUpdateOperationsInput | number
    imageUrls?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userLearning?: UserLearningUncheckedUpdateManyWithoutStoryNestedInput
  }

  export type StoryCreateManyInput = {
    id?: string
    userId: string
    title: string
    content: string
    words: string
    style: string
    wordCount: number
    imageUrls: string
    status?: string
    createdAt?: Date | string
  }

  export type StoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    words?: StringFieldUpdateOperationsInput | string
    style?: StringFieldUpdateOperationsInput | string
    wordCount?: IntFieldUpdateOperationsInput | number
    imageUrls?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    words?: StringFieldUpdateOperationsInput | string
    style?: StringFieldUpdateOperationsInput | string
    wordCount?: IntFieldUpdateOperationsInput | number
    imageUrls?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLearningCreateInput = {
    id?: string
    status?: string
    correctCount?: number
    wrongCount?: number
    lastStudiedAt?: Date | string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutUserLearningInput
    word: WordCreateNestedOneWithoutUserLearningInput
    story?: StoryCreateNestedOneWithoutUserLearningInput
  }

  export type UserLearningUncheckedCreateInput = {
    id?: string
    userId: string
    wordId: string
    storyId?: string | null
    status?: string
    correctCount?: number
    wrongCount?: number
    lastStudiedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type UserLearningUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    correctCount?: IntFieldUpdateOperationsInput | number
    wrongCount?: IntFieldUpdateOperationsInput | number
    lastStudiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserLearningNestedInput
    word?: WordUpdateOneRequiredWithoutUserLearningNestedInput
    story?: StoryUpdateOneWithoutUserLearningNestedInput
  }

  export type UserLearningUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    wordId?: StringFieldUpdateOperationsInput | string
    storyId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    correctCount?: IntFieldUpdateOperationsInput | number
    wrongCount?: IntFieldUpdateOperationsInput | number
    lastStudiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLearningCreateManyInput = {
    id?: string
    userId: string
    wordId: string
    storyId?: string | null
    status?: string
    correctCount?: number
    wrongCount?: number
    lastStudiedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type UserLearningUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    correctCount?: IntFieldUpdateOperationsInput | number
    wrongCount?: IntFieldUpdateOperationsInput | number
    lastStudiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLearningUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    wordId?: StringFieldUpdateOperationsInput | string
    storyId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    correctCount?: IntFieldUpdateOperationsInput | number
    wrongCount?: IntFieldUpdateOperationsInput | number
    lastStudiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyRecordCreateInput = {
    id?: string
    studyDate: Date | string
    wordsLearned?: number
    storiesGenerated?: number
    studyDuration?: number
    scoreEarned?: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutDailyRecordsInput
  }

  export type DailyRecordUncheckedCreateInput = {
    id?: string
    userId: string
    studyDate: Date | string
    wordsLearned?: number
    storiesGenerated?: number
    studyDuration?: number
    scoreEarned?: number
    createdAt?: Date | string
  }

  export type DailyRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studyDate?: DateTimeFieldUpdateOperationsInput | Date | string
    wordsLearned?: IntFieldUpdateOperationsInput | number
    storiesGenerated?: IntFieldUpdateOperationsInput | number
    studyDuration?: IntFieldUpdateOperationsInput | number
    scoreEarned?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDailyRecordsNestedInput
  }

  export type DailyRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    studyDate?: DateTimeFieldUpdateOperationsInput | Date | string
    wordsLearned?: IntFieldUpdateOperationsInput | number
    storiesGenerated?: IntFieldUpdateOperationsInput | number
    studyDuration?: IntFieldUpdateOperationsInput | number
    scoreEarned?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyRecordCreateManyInput = {
    id?: string
    userId: string
    studyDate: Date | string
    wordsLearned?: number
    storiesGenerated?: number
    studyDuration?: number
    scoreEarned?: number
    createdAt?: Date | string
  }

  export type DailyRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    studyDate?: DateTimeFieldUpdateOperationsInput | Date | string
    wordsLearned?: IntFieldUpdateOperationsInput | number
    storiesGenerated?: IntFieldUpdateOperationsInput | number
    studyDuration?: IntFieldUpdateOperationsInput | number
    scoreEarned?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    studyDate?: DateTimeFieldUpdateOperationsInput | Date | string
    wordsLearned?: IntFieldUpdateOperationsInput | number
    storiesGenerated?: IntFieldUpdateOperationsInput | number
    studyDuration?: IntFieldUpdateOperationsInput | number
    scoreEarned?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningSettingsCreateInput = {
    id?: string
    dailyWordTarget?: number
    preferredStyle?: string
    autoGenerate?: boolean
    reminderTime?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutLearningSettingsInput
  }

  export type LearningSettingsUncheckedCreateInput = {
    id?: string
    userId: string
    dailyWordTarget?: number
    preferredStyle?: string
    autoGenerate?: boolean
    reminderTime?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LearningSettingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dailyWordTarget?: IntFieldUpdateOperationsInput | number
    preferredStyle?: StringFieldUpdateOperationsInput | string
    autoGenerate?: BoolFieldUpdateOperationsInput | boolean
    reminderTime?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLearningSettingsNestedInput
  }

  export type LearningSettingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    dailyWordTarget?: IntFieldUpdateOperationsInput | number
    preferredStyle?: StringFieldUpdateOperationsInput | string
    autoGenerate?: BoolFieldUpdateOperationsInput | boolean
    reminderTime?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningSettingsCreateManyInput = {
    id?: string
    userId: string
    dailyWordTarget?: number
    preferredStyle?: string
    autoGenerate?: boolean
    reminderTime?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LearningSettingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dailyWordTarget?: IntFieldUpdateOperationsInput | number
    preferredStyle?: StringFieldUpdateOperationsInput | string
    autoGenerate?: BoolFieldUpdateOperationsInput | boolean
    reminderTime?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningSettingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    dailyWordTarget?: IntFieldUpdateOperationsInput | number
    preferredStyle?: StringFieldUpdateOperationsInput | string
    autoGenerate?: BoolFieldUpdateOperationsInput | boolean
    reminderTime?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StoryListRelationFilter = {
    every?: StoryWhereInput
    some?: StoryWhereInput
    none?: StoryWhereInput
  }

  export type UserLearningListRelationFilter = {
    every?: UserLearningWhereInput
    some?: UserLearningWhereInput
    none?: UserLearningWhereInput
  }

  export type DailyRecordListRelationFilter = {
    every?: DailyRecordWhereInput
    some?: DailyRecordWhereInput
    none?: DailyRecordWhereInput
  }

  export type LearningSettingsNullableScalarRelationFilter = {
    is?: LearningSettingsWhereInput | null
    isNot?: LearningSettingsWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type StoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserLearningOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DailyRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    level?: SortOrder
    totalScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    level?: SortOrder
    totalScore?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    level?: SortOrder
    totalScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    level?: SortOrder
    totalScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    level?: SortOrder
    totalScore?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type WordCountOrderByAggregateInput = {
    id?: SortOrder
    word?: SortOrder
    phonetic?: SortOrder
    meaning?: SortOrder
    partOfSpeech?: SortOrder
    example?: SortOrder
    level?: SortOrder
    category?: SortOrder
    frequency?: SortOrder
    createdAt?: SortOrder
  }

  export type WordAvgOrderByAggregateInput = {
    level?: SortOrder
    frequency?: SortOrder
  }

  export type WordMaxOrderByAggregateInput = {
    id?: SortOrder
    word?: SortOrder
    phonetic?: SortOrder
    meaning?: SortOrder
    partOfSpeech?: SortOrder
    example?: SortOrder
    level?: SortOrder
    category?: SortOrder
    frequency?: SortOrder
    createdAt?: SortOrder
  }

  export type WordMinOrderByAggregateInput = {
    id?: SortOrder
    word?: SortOrder
    phonetic?: SortOrder
    meaning?: SortOrder
    partOfSpeech?: SortOrder
    example?: SortOrder
    level?: SortOrder
    category?: SortOrder
    frequency?: SortOrder
    createdAt?: SortOrder
  }

  export type WordSumOrderByAggregateInput = {
    level?: SortOrder
    frequency?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type StoryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    words?: SortOrder
    style?: SortOrder
    wordCount?: SortOrder
    imageUrls?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type StoryAvgOrderByAggregateInput = {
    wordCount?: SortOrder
  }

  export type StoryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    words?: SortOrder
    style?: SortOrder
    wordCount?: SortOrder
    imageUrls?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type StoryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    words?: SortOrder
    style?: SortOrder
    wordCount?: SortOrder
    imageUrls?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type StorySumOrderByAggregateInput = {
    wordCount?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type WordScalarRelationFilter = {
    is?: WordWhereInput
    isNot?: WordWhereInput
  }

  export type StoryNullableScalarRelationFilter = {
    is?: StoryWhereInput | null
    isNot?: StoryWhereInput | null
  }

  export type UserLearningUserIdWordIdCompoundUniqueInput = {
    userId: string
    wordId: string
  }

  export type UserLearningCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    wordId?: SortOrder
    storyId?: SortOrder
    status?: SortOrder
    correctCount?: SortOrder
    wrongCount?: SortOrder
    lastStudiedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type UserLearningAvgOrderByAggregateInput = {
    correctCount?: SortOrder
    wrongCount?: SortOrder
  }

  export type UserLearningMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    wordId?: SortOrder
    storyId?: SortOrder
    status?: SortOrder
    correctCount?: SortOrder
    wrongCount?: SortOrder
    lastStudiedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type UserLearningMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    wordId?: SortOrder
    storyId?: SortOrder
    status?: SortOrder
    correctCount?: SortOrder
    wrongCount?: SortOrder
    lastStudiedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type UserLearningSumOrderByAggregateInput = {
    correctCount?: SortOrder
    wrongCount?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DailyRecordUserIdStudyDateCompoundUniqueInput = {
    userId: string
    studyDate: Date | string
  }

  export type DailyRecordCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    studyDate?: SortOrder
    wordsLearned?: SortOrder
    storiesGenerated?: SortOrder
    studyDuration?: SortOrder
    scoreEarned?: SortOrder
    createdAt?: SortOrder
  }

  export type DailyRecordAvgOrderByAggregateInput = {
    wordsLearned?: SortOrder
    storiesGenerated?: SortOrder
    studyDuration?: SortOrder
    scoreEarned?: SortOrder
  }

  export type DailyRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    studyDate?: SortOrder
    wordsLearned?: SortOrder
    storiesGenerated?: SortOrder
    studyDuration?: SortOrder
    scoreEarned?: SortOrder
    createdAt?: SortOrder
  }

  export type DailyRecordMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    studyDate?: SortOrder
    wordsLearned?: SortOrder
    storiesGenerated?: SortOrder
    studyDuration?: SortOrder
    scoreEarned?: SortOrder
    createdAt?: SortOrder
  }

  export type DailyRecordSumOrderByAggregateInput = {
    wordsLearned?: SortOrder
    storiesGenerated?: SortOrder
    studyDuration?: SortOrder
    scoreEarned?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type LearningSettingsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    dailyWordTarget?: SortOrder
    preferredStyle?: SortOrder
    autoGenerate?: SortOrder
    reminderTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LearningSettingsAvgOrderByAggregateInput = {
    dailyWordTarget?: SortOrder
  }

  export type LearningSettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    dailyWordTarget?: SortOrder
    preferredStyle?: SortOrder
    autoGenerate?: SortOrder
    reminderTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LearningSettingsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    dailyWordTarget?: SortOrder
    preferredStyle?: SortOrder
    autoGenerate?: SortOrder
    reminderTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LearningSettingsSumOrderByAggregateInput = {
    dailyWordTarget?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StoryCreateNestedManyWithoutUserInput = {
    create?: XOR<StoryCreateWithoutUserInput, StoryUncheckedCreateWithoutUserInput> | StoryCreateWithoutUserInput[] | StoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StoryCreateOrConnectWithoutUserInput | StoryCreateOrConnectWithoutUserInput[]
    createMany?: StoryCreateManyUserInputEnvelope
    connect?: StoryWhereUniqueInput | StoryWhereUniqueInput[]
  }

  export type UserLearningCreateNestedManyWithoutUserInput = {
    create?: XOR<UserLearningCreateWithoutUserInput, UserLearningUncheckedCreateWithoutUserInput> | UserLearningCreateWithoutUserInput[] | UserLearningUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLearningCreateOrConnectWithoutUserInput | UserLearningCreateOrConnectWithoutUserInput[]
    createMany?: UserLearningCreateManyUserInputEnvelope
    connect?: UserLearningWhereUniqueInput | UserLearningWhereUniqueInput[]
  }

  export type DailyRecordCreateNestedManyWithoutUserInput = {
    create?: XOR<DailyRecordCreateWithoutUserInput, DailyRecordUncheckedCreateWithoutUserInput> | DailyRecordCreateWithoutUserInput[] | DailyRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyRecordCreateOrConnectWithoutUserInput | DailyRecordCreateOrConnectWithoutUserInput[]
    createMany?: DailyRecordCreateManyUserInputEnvelope
    connect?: DailyRecordWhereUniqueInput | DailyRecordWhereUniqueInput[]
  }

  export type LearningSettingsCreateNestedOneWithoutUserInput = {
    create?: XOR<LearningSettingsCreateWithoutUserInput, LearningSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: LearningSettingsCreateOrConnectWithoutUserInput
    connect?: LearningSettingsWhereUniqueInput
  }

  export type StoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<StoryCreateWithoutUserInput, StoryUncheckedCreateWithoutUserInput> | StoryCreateWithoutUserInput[] | StoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StoryCreateOrConnectWithoutUserInput | StoryCreateOrConnectWithoutUserInput[]
    createMany?: StoryCreateManyUserInputEnvelope
    connect?: StoryWhereUniqueInput | StoryWhereUniqueInput[]
  }

  export type UserLearningUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserLearningCreateWithoutUserInput, UserLearningUncheckedCreateWithoutUserInput> | UserLearningCreateWithoutUserInput[] | UserLearningUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLearningCreateOrConnectWithoutUserInput | UserLearningCreateOrConnectWithoutUserInput[]
    createMany?: UserLearningCreateManyUserInputEnvelope
    connect?: UserLearningWhereUniqueInput | UserLearningWhereUniqueInput[]
  }

  export type DailyRecordUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DailyRecordCreateWithoutUserInput, DailyRecordUncheckedCreateWithoutUserInput> | DailyRecordCreateWithoutUserInput[] | DailyRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyRecordCreateOrConnectWithoutUserInput | DailyRecordCreateOrConnectWithoutUserInput[]
    createMany?: DailyRecordCreateManyUserInputEnvelope
    connect?: DailyRecordWhereUniqueInput | DailyRecordWhereUniqueInput[]
  }

  export type LearningSettingsUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<LearningSettingsCreateWithoutUserInput, LearningSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: LearningSettingsCreateOrConnectWithoutUserInput
    connect?: LearningSettingsWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<StoryCreateWithoutUserInput, StoryUncheckedCreateWithoutUserInput> | StoryCreateWithoutUserInput[] | StoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StoryCreateOrConnectWithoutUserInput | StoryCreateOrConnectWithoutUserInput[]
    upsert?: StoryUpsertWithWhereUniqueWithoutUserInput | StoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StoryCreateManyUserInputEnvelope
    set?: StoryWhereUniqueInput | StoryWhereUniqueInput[]
    disconnect?: StoryWhereUniqueInput | StoryWhereUniqueInput[]
    delete?: StoryWhereUniqueInput | StoryWhereUniqueInput[]
    connect?: StoryWhereUniqueInput | StoryWhereUniqueInput[]
    update?: StoryUpdateWithWhereUniqueWithoutUserInput | StoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StoryUpdateManyWithWhereWithoutUserInput | StoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StoryScalarWhereInput | StoryScalarWhereInput[]
  }

  export type UserLearningUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserLearningCreateWithoutUserInput, UserLearningUncheckedCreateWithoutUserInput> | UserLearningCreateWithoutUserInput[] | UserLearningUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLearningCreateOrConnectWithoutUserInput | UserLearningCreateOrConnectWithoutUserInput[]
    upsert?: UserLearningUpsertWithWhereUniqueWithoutUserInput | UserLearningUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserLearningCreateManyUserInputEnvelope
    set?: UserLearningWhereUniqueInput | UserLearningWhereUniqueInput[]
    disconnect?: UserLearningWhereUniqueInput | UserLearningWhereUniqueInput[]
    delete?: UserLearningWhereUniqueInput | UserLearningWhereUniqueInput[]
    connect?: UserLearningWhereUniqueInput | UserLearningWhereUniqueInput[]
    update?: UserLearningUpdateWithWhereUniqueWithoutUserInput | UserLearningUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserLearningUpdateManyWithWhereWithoutUserInput | UserLearningUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserLearningScalarWhereInput | UserLearningScalarWhereInput[]
  }

  export type DailyRecordUpdateManyWithoutUserNestedInput = {
    create?: XOR<DailyRecordCreateWithoutUserInput, DailyRecordUncheckedCreateWithoutUserInput> | DailyRecordCreateWithoutUserInput[] | DailyRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyRecordCreateOrConnectWithoutUserInput | DailyRecordCreateOrConnectWithoutUserInput[]
    upsert?: DailyRecordUpsertWithWhereUniqueWithoutUserInput | DailyRecordUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DailyRecordCreateManyUserInputEnvelope
    set?: DailyRecordWhereUniqueInput | DailyRecordWhereUniqueInput[]
    disconnect?: DailyRecordWhereUniqueInput | DailyRecordWhereUniqueInput[]
    delete?: DailyRecordWhereUniqueInput | DailyRecordWhereUniqueInput[]
    connect?: DailyRecordWhereUniqueInput | DailyRecordWhereUniqueInput[]
    update?: DailyRecordUpdateWithWhereUniqueWithoutUserInput | DailyRecordUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DailyRecordUpdateManyWithWhereWithoutUserInput | DailyRecordUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DailyRecordScalarWhereInput | DailyRecordScalarWhereInput[]
  }

  export type LearningSettingsUpdateOneWithoutUserNestedInput = {
    create?: XOR<LearningSettingsCreateWithoutUserInput, LearningSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: LearningSettingsCreateOrConnectWithoutUserInput
    upsert?: LearningSettingsUpsertWithoutUserInput
    disconnect?: LearningSettingsWhereInput | boolean
    delete?: LearningSettingsWhereInput | boolean
    connect?: LearningSettingsWhereUniqueInput
    update?: XOR<XOR<LearningSettingsUpdateToOneWithWhereWithoutUserInput, LearningSettingsUpdateWithoutUserInput>, LearningSettingsUncheckedUpdateWithoutUserInput>
  }

  export type StoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<StoryCreateWithoutUserInput, StoryUncheckedCreateWithoutUserInput> | StoryCreateWithoutUserInput[] | StoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StoryCreateOrConnectWithoutUserInput | StoryCreateOrConnectWithoutUserInput[]
    upsert?: StoryUpsertWithWhereUniqueWithoutUserInput | StoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StoryCreateManyUserInputEnvelope
    set?: StoryWhereUniqueInput | StoryWhereUniqueInput[]
    disconnect?: StoryWhereUniqueInput | StoryWhereUniqueInput[]
    delete?: StoryWhereUniqueInput | StoryWhereUniqueInput[]
    connect?: StoryWhereUniqueInput | StoryWhereUniqueInput[]
    update?: StoryUpdateWithWhereUniqueWithoutUserInput | StoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StoryUpdateManyWithWhereWithoutUserInput | StoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StoryScalarWhereInput | StoryScalarWhereInput[]
  }

  export type UserLearningUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserLearningCreateWithoutUserInput, UserLearningUncheckedCreateWithoutUserInput> | UserLearningCreateWithoutUserInput[] | UserLearningUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLearningCreateOrConnectWithoutUserInput | UserLearningCreateOrConnectWithoutUserInput[]
    upsert?: UserLearningUpsertWithWhereUniqueWithoutUserInput | UserLearningUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserLearningCreateManyUserInputEnvelope
    set?: UserLearningWhereUniqueInput | UserLearningWhereUniqueInput[]
    disconnect?: UserLearningWhereUniqueInput | UserLearningWhereUniqueInput[]
    delete?: UserLearningWhereUniqueInput | UserLearningWhereUniqueInput[]
    connect?: UserLearningWhereUniqueInput | UserLearningWhereUniqueInput[]
    update?: UserLearningUpdateWithWhereUniqueWithoutUserInput | UserLearningUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserLearningUpdateManyWithWhereWithoutUserInput | UserLearningUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserLearningScalarWhereInput | UserLearningScalarWhereInput[]
  }

  export type DailyRecordUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DailyRecordCreateWithoutUserInput, DailyRecordUncheckedCreateWithoutUserInput> | DailyRecordCreateWithoutUserInput[] | DailyRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyRecordCreateOrConnectWithoutUserInput | DailyRecordCreateOrConnectWithoutUserInput[]
    upsert?: DailyRecordUpsertWithWhereUniqueWithoutUserInput | DailyRecordUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DailyRecordCreateManyUserInputEnvelope
    set?: DailyRecordWhereUniqueInput | DailyRecordWhereUniqueInput[]
    disconnect?: DailyRecordWhereUniqueInput | DailyRecordWhereUniqueInput[]
    delete?: DailyRecordWhereUniqueInput | DailyRecordWhereUniqueInput[]
    connect?: DailyRecordWhereUniqueInput | DailyRecordWhereUniqueInput[]
    update?: DailyRecordUpdateWithWhereUniqueWithoutUserInput | DailyRecordUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DailyRecordUpdateManyWithWhereWithoutUserInput | DailyRecordUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DailyRecordScalarWhereInput | DailyRecordScalarWhereInput[]
  }

  export type LearningSettingsUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<LearningSettingsCreateWithoutUserInput, LearningSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: LearningSettingsCreateOrConnectWithoutUserInput
    upsert?: LearningSettingsUpsertWithoutUserInput
    disconnect?: LearningSettingsWhereInput | boolean
    delete?: LearningSettingsWhereInput | boolean
    connect?: LearningSettingsWhereUniqueInput
    update?: XOR<XOR<LearningSettingsUpdateToOneWithWhereWithoutUserInput, LearningSettingsUpdateWithoutUserInput>, LearningSettingsUncheckedUpdateWithoutUserInput>
  }

  export type UserLearningCreateNestedManyWithoutWordInput = {
    create?: XOR<UserLearningCreateWithoutWordInput, UserLearningUncheckedCreateWithoutWordInput> | UserLearningCreateWithoutWordInput[] | UserLearningUncheckedCreateWithoutWordInput[]
    connectOrCreate?: UserLearningCreateOrConnectWithoutWordInput | UserLearningCreateOrConnectWithoutWordInput[]
    createMany?: UserLearningCreateManyWordInputEnvelope
    connect?: UserLearningWhereUniqueInput | UserLearningWhereUniqueInput[]
  }

  export type UserLearningUncheckedCreateNestedManyWithoutWordInput = {
    create?: XOR<UserLearningCreateWithoutWordInput, UserLearningUncheckedCreateWithoutWordInput> | UserLearningCreateWithoutWordInput[] | UserLearningUncheckedCreateWithoutWordInput[]
    connectOrCreate?: UserLearningCreateOrConnectWithoutWordInput | UserLearningCreateOrConnectWithoutWordInput[]
    createMany?: UserLearningCreateManyWordInputEnvelope
    connect?: UserLearningWhereUniqueInput | UserLearningWhereUniqueInput[]
  }

  export type UserLearningUpdateManyWithoutWordNestedInput = {
    create?: XOR<UserLearningCreateWithoutWordInput, UserLearningUncheckedCreateWithoutWordInput> | UserLearningCreateWithoutWordInput[] | UserLearningUncheckedCreateWithoutWordInput[]
    connectOrCreate?: UserLearningCreateOrConnectWithoutWordInput | UserLearningCreateOrConnectWithoutWordInput[]
    upsert?: UserLearningUpsertWithWhereUniqueWithoutWordInput | UserLearningUpsertWithWhereUniqueWithoutWordInput[]
    createMany?: UserLearningCreateManyWordInputEnvelope
    set?: UserLearningWhereUniqueInput | UserLearningWhereUniqueInput[]
    disconnect?: UserLearningWhereUniqueInput | UserLearningWhereUniqueInput[]
    delete?: UserLearningWhereUniqueInput | UserLearningWhereUniqueInput[]
    connect?: UserLearningWhereUniqueInput | UserLearningWhereUniqueInput[]
    update?: UserLearningUpdateWithWhereUniqueWithoutWordInput | UserLearningUpdateWithWhereUniqueWithoutWordInput[]
    updateMany?: UserLearningUpdateManyWithWhereWithoutWordInput | UserLearningUpdateManyWithWhereWithoutWordInput[]
    deleteMany?: UserLearningScalarWhereInput | UserLearningScalarWhereInput[]
  }

  export type UserLearningUncheckedUpdateManyWithoutWordNestedInput = {
    create?: XOR<UserLearningCreateWithoutWordInput, UserLearningUncheckedCreateWithoutWordInput> | UserLearningCreateWithoutWordInput[] | UserLearningUncheckedCreateWithoutWordInput[]
    connectOrCreate?: UserLearningCreateOrConnectWithoutWordInput | UserLearningCreateOrConnectWithoutWordInput[]
    upsert?: UserLearningUpsertWithWhereUniqueWithoutWordInput | UserLearningUpsertWithWhereUniqueWithoutWordInput[]
    createMany?: UserLearningCreateManyWordInputEnvelope
    set?: UserLearningWhereUniqueInput | UserLearningWhereUniqueInput[]
    disconnect?: UserLearningWhereUniqueInput | UserLearningWhereUniqueInput[]
    delete?: UserLearningWhereUniqueInput | UserLearningWhereUniqueInput[]
    connect?: UserLearningWhereUniqueInput | UserLearningWhereUniqueInput[]
    update?: UserLearningUpdateWithWhereUniqueWithoutWordInput | UserLearningUpdateWithWhereUniqueWithoutWordInput[]
    updateMany?: UserLearningUpdateManyWithWhereWithoutWordInput | UserLearningUpdateManyWithWhereWithoutWordInput[]
    deleteMany?: UserLearningScalarWhereInput | UserLearningScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutStoriesInput = {
    create?: XOR<UserCreateWithoutStoriesInput, UserUncheckedCreateWithoutStoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutStoriesInput
    connect?: UserWhereUniqueInput
  }

  export type UserLearningCreateNestedManyWithoutStoryInput = {
    create?: XOR<UserLearningCreateWithoutStoryInput, UserLearningUncheckedCreateWithoutStoryInput> | UserLearningCreateWithoutStoryInput[] | UserLearningUncheckedCreateWithoutStoryInput[]
    connectOrCreate?: UserLearningCreateOrConnectWithoutStoryInput | UserLearningCreateOrConnectWithoutStoryInput[]
    createMany?: UserLearningCreateManyStoryInputEnvelope
    connect?: UserLearningWhereUniqueInput | UserLearningWhereUniqueInput[]
  }

  export type UserLearningUncheckedCreateNestedManyWithoutStoryInput = {
    create?: XOR<UserLearningCreateWithoutStoryInput, UserLearningUncheckedCreateWithoutStoryInput> | UserLearningCreateWithoutStoryInput[] | UserLearningUncheckedCreateWithoutStoryInput[]
    connectOrCreate?: UserLearningCreateOrConnectWithoutStoryInput | UserLearningCreateOrConnectWithoutStoryInput[]
    createMany?: UserLearningCreateManyStoryInputEnvelope
    connect?: UserLearningWhereUniqueInput | UserLearningWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutStoriesNestedInput = {
    create?: XOR<UserCreateWithoutStoriesInput, UserUncheckedCreateWithoutStoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutStoriesInput
    upsert?: UserUpsertWithoutStoriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStoriesInput, UserUpdateWithoutStoriesInput>, UserUncheckedUpdateWithoutStoriesInput>
  }

  export type UserLearningUpdateManyWithoutStoryNestedInput = {
    create?: XOR<UserLearningCreateWithoutStoryInput, UserLearningUncheckedCreateWithoutStoryInput> | UserLearningCreateWithoutStoryInput[] | UserLearningUncheckedCreateWithoutStoryInput[]
    connectOrCreate?: UserLearningCreateOrConnectWithoutStoryInput | UserLearningCreateOrConnectWithoutStoryInput[]
    upsert?: UserLearningUpsertWithWhereUniqueWithoutStoryInput | UserLearningUpsertWithWhereUniqueWithoutStoryInput[]
    createMany?: UserLearningCreateManyStoryInputEnvelope
    set?: UserLearningWhereUniqueInput | UserLearningWhereUniqueInput[]
    disconnect?: UserLearningWhereUniqueInput | UserLearningWhereUniqueInput[]
    delete?: UserLearningWhereUniqueInput | UserLearningWhereUniqueInput[]
    connect?: UserLearningWhereUniqueInput | UserLearningWhereUniqueInput[]
    update?: UserLearningUpdateWithWhereUniqueWithoutStoryInput | UserLearningUpdateWithWhereUniqueWithoutStoryInput[]
    updateMany?: UserLearningUpdateManyWithWhereWithoutStoryInput | UserLearningUpdateManyWithWhereWithoutStoryInput[]
    deleteMany?: UserLearningScalarWhereInput | UserLearningScalarWhereInput[]
  }

  export type UserLearningUncheckedUpdateManyWithoutStoryNestedInput = {
    create?: XOR<UserLearningCreateWithoutStoryInput, UserLearningUncheckedCreateWithoutStoryInput> | UserLearningCreateWithoutStoryInput[] | UserLearningUncheckedCreateWithoutStoryInput[]
    connectOrCreate?: UserLearningCreateOrConnectWithoutStoryInput | UserLearningCreateOrConnectWithoutStoryInput[]
    upsert?: UserLearningUpsertWithWhereUniqueWithoutStoryInput | UserLearningUpsertWithWhereUniqueWithoutStoryInput[]
    createMany?: UserLearningCreateManyStoryInputEnvelope
    set?: UserLearningWhereUniqueInput | UserLearningWhereUniqueInput[]
    disconnect?: UserLearningWhereUniqueInput | UserLearningWhereUniqueInput[]
    delete?: UserLearningWhereUniqueInput | UserLearningWhereUniqueInput[]
    connect?: UserLearningWhereUniqueInput | UserLearningWhereUniqueInput[]
    update?: UserLearningUpdateWithWhereUniqueWithoutStoryInput | UserLearningUpdateWithWhereUniqueWithoutStoryInput[]
    updateMany?: UserLearningUpdateManyWithWhereWithoutStoryInput | UserLearningUpdateManyWithWhereWithoutStoryInput[]
    deleteMany?: UserLearningScalarWhereInput | UserLearningScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserLearningInput = {
    create?: XOR<UserCreateWithoutUserLearningInput, UserUncheckedCreateWithoutUserLearningInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserLearningInput
    connect?: UserWhereUniqueInput
  }

  export type WordCreateNestedOneWithoutUserLearningInput = {
    create?: XOR<WordCreateWithoutUserLearningInput, WordUncheckedCreateWithoutUserLearningInput>
    connectOrCreate?: WordCreateOrConnectWithoutUserLearningInput
    connect?: WordWhereUniqueInput
  }

  export type StoryCreateNestedOneWithoutUserLearningInput = {
    create?: XOR<StoryCreateWithoutUserLearningInput, StoryUncheckedCreateWithoutUserLearningInput>
    connectOrCreate?: StoryCreateOrConnectWithoutUserLearningInput
    connect?: StoryWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutUserLearningNestedInput = {
    create?: XOR<UserCreateWithoutUserLearningInput, UserUncheckedCreateWithoutUserLearningInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserLearningInput
    upsert?: UserUpsertWithoutUserLearningInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserLearningInput, UserUpdateWithoutUserLearningInput>, UserUncheckedUpdateWithoutUserLearningInput>
  }

  export type WordUpdateOneRequiredWithoutUserLearningNestedInput = {
    create?: XOR<WordCreateWithoutUserLearningInput, WordUncheckedCreateWithoutUserLearningInput>
    connectOrCreate?: WordCreateOrConnectWithoutUserLearningInput
    upsert?: WordUpsertWithoutUserLearningInput
    connect?: WordWhereUniqueInput
    update?: XOR<XOR<WordUpdateToOneWithWhereWithoutUserLearningInput, WordUpdateWithoutUserLearningInput>, WordUncheckedUpdateWithoutUserLearningInput>
  }

  export type StoryUpdateOneWithoutUserLearningNestedInput = {
    create?: XOR<StoryCreateWithoutUserLearningInput, StoryUncheckedCreateWithoutUserLearningInput>
    connectOrCreate?: StoryCreateOrConnectWithoutUserLearningInput
    upsert?: StoryUpsertWithoutUserLearningInput
    disconnect?: StoryWhereInput | boolean
    delete?: StoryWhereInput | boolean
    connect?: StoryWhereUniqueInput
    update?: XOR<XOR<StoryUpdateToOneWithWhereWithoutUserLearningInput, StoryUpdateWithoutUserLearningInput>, StoryUncheckedUpdateWithoutUserLearningInput>
  }

  export type UserCreateNestedOneWithoutDailyRecordsInput = {
    create?: XOR<UserCreateWithoutDailyRecordsInput, UserUncheckedCreateWithoutDailyRecordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDailyRecordsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutDailyRecordsNestedInput = {
    create?: XOR<UserCreateWithoutDailyRecordsInput, UserUncheckedCreateWithoutDailyRecordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDailyRecordsInput
    upsert?: UserUpsertWithoutDailyRecordsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDailyRecordsInput, UserUpdateWithoutDailyRecordsInput>, UserUncheckedUpdateWithoutDailyRecordsInput>
  }

  export type UserCreateNestedOneWithoutLearningSettingsInput = {
    create?: XOR<UserCreateWithoutLearningSettingsInput, UserUncheckedCreateWithoutLearningSettingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLearningSettingsInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutLearningSettingsNestedInput = {
    create?: XOR<UserCreateWithoutLearningSettingsInput, UserUncheckedCreateWithoutLearningSettingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLearningSettingsInput
    upsert?: UserUpsertWithoutLearningSettingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLearningSettingsInput, UserUpdateWithoutLearningSettingsInput>, UserUncheckedUpdateWithoutLearningSettingsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StoryCreateWithoutUserInput = {
    id?: string
    title: string
    content: string
    words: string
    style: string
    wordCount: number
    imageUrls: string
    status?: string
    createdAt?: Date | string
    userLearning?: UserLearningCreateNestedManyWithoutStoryInput
  }

  export type StoryUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    content: string
    words: string
    style: string
    wordCount: number
    imageUrls: string
    status?: string
    createdAt?: Date | string
    userLearning?: UserLearningUncheckedCreateNestedManyWithoutStoryInput
  }

  export type StoryCreateOrConnectWithoutUserInput = {
    where: StoryWhereUniqueInput
    create: XOR<StoryCreateWithoutUserInput, StoryUncheckedCreateWithoutUserInput>
  }

  export type StoryCreateManyUserInputEnvelope = {
    data: StoryCreateManyUserInput | StoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserLearningCreateWithoutUserInput = {
    id?: string
    status?: string
    correctCount?: number
    wrongCount?: number
    lastStudiedAt?: Date | string | null
    createdAt?: Date | string
    word: WordCreateNestedOneWithoutUserLearningInput
    story?: StoryCreateNestedOneWithoutUserLearningInput
  }

  export type UserLearningUncheckedCreateWithoutUserInput = {
    id?: string
    wordId: string
    storyId?: string | null
    status?: string
    correctCount?: number
    wrongCount?: number
    lastStudiedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type UserLearningCreateOrConnectWithoutUserInput = {
    where: UserLearningWhereUniqueInput
    create: XOR<UserLearningCreateWithoutUserInput, UserLearningUncheckedCreateWithoutUserInput>
  }

  export type UserLearningCreateManyUserInputEnvelope = {
    data: UserLearningCreateManyUserInput | UserLearningCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DailyRecordCreateWithoutUserInput = {
    id?: string
    studyDate: Date | string
    wordsLearned?: number
    storiesGenerated?: number
    studyDuration?: number
    scoreEarned?: number
    createdAt?: Date | string
  }

  export type DailyRecordUncheckedCreateWithoutUserInput = {
    id?: string
    studyDate: Date | string
    wordsLearned?: number
    storiesGenerated?: number
    studyDuration?: number
    scoreEarned?: number
    createdAt?: Date | string
  }

  export type DailyRecordCreateOrConnectWithoutUserInput = {
    where: DailyRecordWhereUniqueInput
    create: XOR<DailyRecordCreateWithoutUserInput, DailyRecordUncheckedCreateWithoutUserInput>
  }

  export type DailyRecordCreateManyUserInputEnvelope = {
    data: DailyRecordCreateManyUserInput | DailyRecordCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LearningSettingsCreateWithoutUserInput = {
    id?: string
    dailyWordTarget?: number
    preferredStyle?: string
    autoGenerate?: boolean
    reminderTime?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LearningSettingsUncheckedCreateWithoutUserInput = {
    id?: string
    dailyWordTarget?: number
    preferredStyle?: string
    autoGenerate?: boolean
    reminderTime?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LearningSettingsCreateOrConnectWithoutUserInput = {
    where: LearningSettingsWhereUniqueInput
    create: XOR<LearningSettingsCreateWithoutUserInput, LearningSettingsUncheckedCreateWithoutUserInput>
  }

  export type StoryUpsertWithWhereUniqueWithoutUserInput = {
    where: StoryWhereUniqueInput
    update: XOR<StoryUpdateWithoutUserInput, StoryUncheckedUpdateWithoutUserInput>
    create: XOR<StoryCreateWithoutUserInput, StoryUncheckedCreateWithoutUserInput>
  }

  export type StoryUpdateWithWhereUniqueWithoutUserInput = {
    where: StoryWhereUniqueInput
    data: XOR<StoryUpdateWithoutUserInput, StoryUncheckedUpdateWithoutUserInput>
  }

  export type StoryUpdateManyWithWhereWithoutUserInput = {
    where: StoryScalarWhereInput
    data: XOR<StoryUpdateManyMutationInput, StoryUncheckedUpdateManyWithoutUserInput>
  }

  export type StoryScalarWhereInput = {
    AND?: StoryScalarWhereInput | StoryScalarWhereInput[]
    OR?: StoryScalarWhereInput[]
    NOT?: StoryScalarWhereInput | StoryScalarWhereInput[]
    id?: StringFilter<"Story"> | string
    userId?: StringFilter<"Story"> | string
    title?: StringFilter<"Story"> | string
    content?: StringFilter<"Story"> | string
    words?: StringFilter<"Story"> | string
    style?: StringFilter<"Story"> | string
    wordCount?: IntFilter<"Story"> | number
    imageUrls?: StringFilter<"Story"> | string
    status?: StringFilter<"Story"> | string
    createdAt?: DateTimeFilter<"Story"> | Date | string
  }

  export type UserLearningUpsertWithWhereUniqueWithoutUserInput = {
    where: UserLearningWhereUniqueInput
    update: XOR<UserLearningUpdateWithoutUserInput, UserLearningUncheckedUpdateWithoutUserInput>
    create: XOR<UserLearningCreateWithoutUserInput, UserLearningUncheckedCreateWithoutUserInput>
  }

  export type UserLearningUpdateWithWhereUniqueWithoutUserInput = {
    where: UserLearningWhereUniqueInput
    data: XOR<UserLearningUpdateWithoutUserInput, UserLearningUncheckedUpdateWithoutUserInput>
  }

  export type UserLearningUpdateManyWithWhereWithoutUserInput = {
    where: UserLearningScalarWhereInput
    data: XOR<UserLearningUpdateManyMutationInput, UserLearningUncheckedUpdateManyWithoutUserInput>
  }

  export type UserLearningScalarWhereInput = {
    AND?: UserLearningScalarWhereInput | UserLearningScalarWhereInput[]
    OR?: UserLearningScalarWhereInput[]
    NOT?: UserLearningScalarWhereInput | UserLearningScalarWhereInput[]
    id?: StringFilter<"UserLearning"> | string
    userId?: StringFilter<"UserLearning"> | string
    wordId?: StringFilter<"UserLearning"> | string
    storyId?: StringNullableFilter<"UserLearning"> | string | null
    status?: StringFilter<"UserLearning"> | string
    correctCount?: IntFilter<"UserLearning"> | number
    wrongCount?: IntFilter<"UserLearning"> | number
    lastStudiedAt?: DateTimeNullableFilter<"UserLearning"> | Date | string | null
    createdAt?: DateTimeFilter<"UserLearning"> | Date | string
  }

  export type DailyRecordUpsertWithWhereUniqueWithoutUserInput = {
    where: DailyRecordWhereUniqueInput
    update: XOR<DailyRecordUpdateWithoutUserInput, DailyRecordUncheckedUpdateWithoutUserInput>
    create: XOR<DailyRecordCreateWithoutUserInput, DailyRecordUncheckedCreateWithoutUserInput>
  }

  export type DailyRecordUpdateWithWhereUniqueWithoutUserInput = {
    where: DailyRecordWhereUniqueInput
    data: XOR<DailyRecordUpdateWithoutUserInput, DailyRecordUncheckedUpdateWithoutUserInput>
  }

  export type DailyRecordUpdateManyWithWhereWithoutUserInput = {
    where: DailyRecordScalarWhereInput
    data: XOR<DailyRecordUpdateManyMutationInput, DailyRecordUncheckedUpdateManyWithoutUserInput>
  }

  export type DailyRecordScalarWhereInput = {
    AND?: DailyRecordScalarWhereInput | DailyRecordScalarWhereInput[]
    OR?: DailyRecordScalarWhereInput[]
    NOT?: DailyRecordScalarWhereInput | DailyRecordScalarWhereInput[]
    id?: StringFilter<"DailyRecord"> | string
    userId?: StringFilter<"DailyRecord"> | string
    studyDate?: DateTimeFilter<"DailyRecord"> | Date | string
    wordsLearned?: IntFilter<"DailyRecord"> | number
    storiesGenerated?: IntFilter<"DailyRecord"> | number
    studyDuration?: IntFilter<"DailyRecord"> | number
    scoreEarned?: IntFilter<"DailyRecord"> | number
    createdAt?: DateTimeFilter<"DailyRecord"> | Date | string
  }

  export type LearningSettingsUpsertWithoutUserInput = {
    update: XOR<LearningSettingsUpdateWithoutUserInput, LearningSettingsUncheckedUpdateWithoutUserInput>
    create: XOR<LearningSettingsCreateWithoutUserInput, LearningSettingsUncheckedCreateWithoutUserInput>
    where?: LearningSettingsWhereInput
  }

  export type LearningSettingsUpdateToOneWithWhereWithoutUserInput = {
    where?: LearningSettingsWhereInput
    data: XOR<LearningSettingsUpdateWithoutUserInput, LearningSettingsUncheckedUpdateWithoutUserInput>
  }

  export type LearningSettingsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    dailyWordTarget?: IntFieldUpdateOperationsInput | number
    preferredStyle?: StringFieldUpdateOperationsInput | string
    autoGenerate?: BoolFieldUpdateOperationsInput | boolean
    reminderTime?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningSettingsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    dailyWordTarget?: IntFieldUpdateOperationsInput | number
    preferredStyle?: StringFieldUpdateOperationsInput | string
    autoGenerate?: BoolFieldUpdateOperationsInput | boolean
    reminderTime?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLearningCreateWithoutWordInput = {
    id?: string
    status?: string
    correctCount?: number
    wrongCount?: number
    lastStudiedAt?: Date | string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutUserLearningInput
    story?: StoryCreateNestedOneWithoutUserLearningInput
  }

  export type UserLearningUncheckedCreateWithoutWordInput = {
    id?: string
    userId: string
    storyId?: string | null
    status?: string
    correctCount?: number
    wrongCount?: number
    lastStudiedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type UserLearningCreateOrConnectWithoutWordInput = {
    where: UserLearningWhereUniqueInput
    create: XOR<UserLearningCreateWithoutWordInput, UserLearningUncheckedCreateWithoutWordInput>
  }

  export type UserLearningCreateManyWordInputEnvelope = {
    data: UserLearningCreateManyWordInput | UserLearningCreateManyWordInput[]
    skipDuplicates?: boolean
  }

  export type UserLearningUpsertWithWhereUniqueWithoutWordInput = {
    where: UserLearningWhereUniqueInput
    update: XOR<UserLearningUpdateWithoutWordInput, UserLearningUncheckedUpdateWithoutWordInput>
    create: XOR<UserLearningCreateWithoutWordInput, UserLearningUncheckedCreateWithoutWordInput>
  }

  export type UserLearningUpdateWithWhereUniqueWithoutWordInput = {
    where: UserLearningWhereUniqueInput
    data: XOR<UserLearningUpdateWithoutWordInput, UserLearningUncheckedUpdateWithoutWordInput>
  }

  export type UserLearningUpdateManyWithWhereWithoutWordInput = {
    where: UserLearningScalarWhereInput
    data: XOR<UserLearningUpdateManyMutationInput, UserLearningUncheckedUpdateManyWithoutWordInput>
  }

  export type UserCreateWithoutStoriesInput = {
    id?: string
    username: string
    email: string
    password: string
    avatar?: string | null
    level?: number
    totalScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userLearning?: UserLearningCreateNestedManyWithoutUserInput
    dailyRecords?: DailyRecordCreateNestedManyWithoutUserInput
    learningSettings?: LearningSettingsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStoriesInput = {
    id?: string
    username: string
    email: string
    password: string
    avatar?: string | null
    level?: number
    totalScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userLearning?: UserLearningUncheckedCreateNestedManyWithoutUserInput
    dailyRecords?: DailyRecordUncheckedCreateNestedManyWithoutUserInput
    learningSettings?: LearningSettingsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStoriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStoriesInput, UserUncheckedCreateWithoutStoriesInput>
  }

  export type UserLearningCreateWithoutStoryInput = {
    id?: string
    status?: string
    correctCount?: number
    wrongCount?: number
    lastStudiedAt?: Date | string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutUserLearningInput
    word: WordCreateNestedOneWithoutUserLearningInput
  }

  export type UserLearningUncheckedCreateWithoutStoryInput = {
    id?: string
    userId: string
    wordId: string
    status?: string
    correctCount?: number
    wrongCount?: number
    lastStudiedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type UserLearningCreateOrConnectWithoutStoryInput = {
    where: UserLearningWhereUniqueInput
    create: XOR<UserLearningCreateWithoutStoryInput, UserLearningUncheckedCreateWithoutStoryInput>
  }

  export type UserLearningCreateManyStoryInputEnvelope = {
    data: UserLearningCreateManyStoryInput | UserLearningCreateManyStoryInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutStoriesInput = {
    update: XOR<UserUpdateWithoutStoriesInput, UserUncheckedUpdateWithoutStoriesInput>
    create: XOR<UserCreateWithoutStoriesInput, UserUncheckedCreateWithoutStoriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStoriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStoriesInput, UserUncheckedUpdateWithoutStoriesInput>
  }

  export type UserUpdateWithoutStoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    totalScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userLearning?: UserLearningUpdateManyWithoutUserNestedInput
    dailyRecords?: DailyRecordUpdateManyWithoutUserNestedInput
    learningSettings?: LearningSettingsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    totalScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userLearning?: UserLearningUncheckedUpdateManyWithoutUserNestedInput
    dailyRecords?: DailyRecordUncheckedUpdateManyWithoutUserNestedInput
    learningSettings?: LearningSettingsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserLearningUpsertWithWhereUniqueWithoutStoryInput = {
    where: UserLearningWhereUniqueInput
    update: XOR<UserLearningUpdateWithoutStoryInput, UserLearningUncheckedUpdateWithoutStoryInput>
    create: XOR<UserLearningCreateWithoutStoryInput, UserLearningUncheckedCreateWithoutStoryInput>
  }

  export type UserLearningUpdateWithWhereUniqueWithoutStoryInput = {
    where: UserLearningWhereUniqueInput
    data: XOR<UserLearningUpdateWithoutStoryInput, UserLearningUncheckedUpdateWithoutStoryInput>
  }

  export type UserLearningUpdateManyWithWhereWithoutStoryInput = {
    where: UserLearningScalarWhereInput
    data: XOR<UserLearningUpdateManyMutationInput, UserLearningUncheckedUpdateManyWithoutStoryInput>
  }

  export type UserCreateWithoutUserLearningInput = {
    id?: string
    username: string
    email: string
    password: string
    avatar?: string | null
    level?: number
    totalScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    stories?: StoryCreateNestedManyWithoutUserInput
    dailyRecords?: DailyRecordCreateNestedManyWithoutUserInput
    learningSettings?: LearningSettingsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserLearningInput = {
    id?: string
    username: string
    email: string
    password: string
    avatar?: string | null
    level?: number
    totalScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    stories?: StoryUncheckedCreateNestedManyWithoutUserInput
    dailyRecords?: DailyRecordUncheckedCreateNestedManyWithoutUserInput
    learningSettings?: LearningSettingsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserLearningInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserLearningInput, UserUncheckedCreateWithoutUserLearningInput>
  }

  export type WordCreateWithoutUserLearningInput = {
    id?: string
    word: string
    phonetic?: string | null
    meaning: string
    partOfSpeech: string
    example?: string | null
    level?: number
    category?: string | null
    frequency?: number
    createdAt?: Date | string
  }

  export type WordUncheckedCreateWithoutUserLearningInput = {
    id?: string
    word: string
    phonetic?: string | null
    meaning: string
    partOfSpeech: string
    example?: string | null
    level?: number
    category?: string | null
    frequency?: number
    createdAt?: Date | string
  }

  export type WordCreateOrConnectWithoutUserLearningInput = {
    where: WordWhereUniqueInput
    create: XOR<WordCreateWithoutUserLearningInput, WordUncheckedCreateWithoutUserLearningInput>
  }

  export type StoryCreateWithoutUserLearningInput = {
    id?: string
    title: string
    content: string
    words: string
    style: string
    wordCount: number
    imageUrls: string
    status?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutStoriesInput
  }

  export type StoryUncheckedCreateWithoutUserLearningInput = {
    id?: string
    userId: string
    title: string
    content: string
    words: string
    style: string
    wordCount: number
    imageUrls: string
    status?: string
    createdAt?: Date | string
  }

  export type StoryCreateOrConnectWithoutUserLearningInput = {
    where: StoryWhereUniqueInput
    create: XOR<StoryCreateWithoutUserLearningInput, StoryUncheckedCreateWithoutUserLearningInput>
  }

  export type UserUpsertWithoutUserLearningInput = {
    update: XOR<UserUpdateWithoutUserLearningInput, UserUncheckedUpdateWithoutUserLearningInput>
    create: XOR<UserCreateWithoutUserLearningInput, UserUncheckedCreateWithoutUserLearningInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserLearningInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserLearningInput, UserUncheckedUpdateWithoutUserLearningInput>
  }

  export type UserUpdateWithoutUserLearningInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    totalScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stories?: StoryUpdateManyWithoutUserNestedInput
    dailyRecords?: DailyRecordUpdateManyWithoutUserNestedInput
    learningSettings?: LearningSettingsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserLearningInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    totalScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stories?: StoryUncheckedUpdateManyWithoutUserNestedInput
    dailyRecords?: DailyRecordUncheckedUpdateManyWithoutUserNestedInput
    learningSettings?: LearningSettingsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type WordUpsertWithoutUserLearningInput = {
    update: XOR<WordUpdateWithoutUserLearningInput, WordUncheckedUpdateWithoutUserLearningInput>
    create: XOR<WordCreateWithoutUserLearningInput, WordUncheckedCreateWithoutUserLearningInput>
    where?: WordWhereInput
  }

  export type WordUpdateToOneWithWhereWithoutUserLearningInput = {
    where?: WordWhereInput
    data: XOR<WordUpdateWithoutUserLearningInput, WordUncheckedUpdateWithoutUserLearningInput>
  }

  export type WordUpdateWithoutUserLearningInput = {
    id?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    phonetic?: NullableStringFieldUpdateOperationsInput | string | null
    meaning?: StringFieldUpdateOperationsInput | string
    partOfSpeech?: StringFieldUpdateOperationsInput | string
    example?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WordUncheckedUpdateWithoutUserLearningInput = {
    id?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    phonetic?: NullableStringFieldUpdateOperationsInput | string | null
    meaning?: StringFieldUpdateOperationsInput | string
    partOfSpeech?: StringFieldUpdateOperationsInput | string
    example?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoryUpsertWithoutUserLearningInput = {
    update: XOR<StoryUpdateWithoutUserLearningInput, StoryUncheckedUpdateWithoutUserLearningInput>
    create: XOR<StoryCreateWithoutUserLearningInput, StoryUncheckedCreateWithoutUserLearningInput>
    where?: StoryWhereInput
  }

  export type StoryUpdateToOneWithWhereWithoutUserLearningInput = {
    where?: StoryWhereInput
    data: XOR<StoryUpdateWithoutUserLearningInput, StoryUncheckedUpdateWithoutUserLearningInput>
  }

  export type StoryUpdateWithoutUserLearningInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    words?: StringFieldUpdateOperationsInput | string
    style?: StringFieldUpdateOperationsInput | string
    wordCount?: IntFieldUpdateOperationsInput | number
    imageUrls?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStoriesNestedInput
  }

  export type StoryUncheckedUpdateWithoutUserLearningInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    words?: StringFieldUpdateOperationsInput | string
    style?: StringFieldUpdateOperationsInput | string
    wordCount?: IntFieldUpdateOperationsInput | number
    imageUrls?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutDailyRecordsInput = {
    id?: string
    username: string
    email: string
    password: string
    avatar?: string | null
    level?: number
    totalScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    stories?: StoryCreateNestedManyWithoutUserInput
    userLearning?: UserLearningCreateNestedManyWithoutUserInput
    learningSettings?: LearningSettingsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDailyRecordsInput = {
    id?: string
    username: string
    email: string
    password: string
    avatar?: string | null
    level?: number
    totalScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    stories?: StoryUncheckedCreateNestedManyWithoutUserInput
    userLearning?: UserLearningUncheckedCreateNestedManyWithoutUserInput
    learningSettings?: LearningSettingsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDailyRecordsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDailyRecordsInput, UserUncheckedCreateWithoutDailyRecordsInput>
  }

  export type UserUpsertWithoutDailyRecordsInput = {
    update: XOR<UserUpdateWithoutDailyRecordsInput, UserUncheckedUpdateWithoutDailyRecordsInput>
    create: XOR<UserCreateWithoutDailyRecordsInput, UserUncheckedCreateWithoutDailyRecordsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDailyRecordsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDailyRecordsInput, UserUncheckedUpdateWithoutDailyRecordsInput>
  }

  export type UserUpdateWithoutDailyRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    totalScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stories?: StoryUpdateManyWithoutUserNestedInput
    userLearning?: UserLearningUpdateManyWithoutUserNestedInput
    learningSettings?: LearningSettingsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDailyRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    totalScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stories?: StoryUncheckedUpdateManyWithoutUserNestedInput
    userLearning?: UserLearningUncheckedUpdateManyWithoutUserNestedInput
    learningSettings?: LearningSettingsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutLearningSettingsInput = {
    id?: string
    username: string
    email: string
    password: string
    avatar?: string | null
    level?: number
    totalScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    stories?: StoryCreateNestedManyWithoutUserInput
    userLearning?: UserLearningCreateNestedManyWithoutUserInput
    dailyRecords?: DailyRecordCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLearningSettingsInput = {
    id?: string
    username: string
    email: string
    password: string
    avatar?: string | null
    level?: number
    totalScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    stories?: StoryUncheckedCreateNestedManyWithoutUserInput
    userLearning?: UserLearningUncheckedCreateNestedManyWithoutUserInput
    dailyRecords?: DailyRecordUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLearningSettingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLearningSettingsInput, UserUncheckedCreateWithoutLearningSettingsInput>
  }

  export type UserUpsertWithoutLearningSettingsInput = {
    update: XOR<UserUpdateWithoutLearningSettingsInput, UserUncheckedUpdateWithoutLearningSettingsInput>
    create: XOR<UserCreateWithoutLearningSettingsInput, UserUncheckedCreateWithoutLearningSettingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLearningSettingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLearningSettingsInput, UserUncheckedUpdateWithoutLearningSettingsInput>
  }

  export type UserUpdateWithoutLearningSettingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    totalScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stories?: StoryUpdateManyWithoutUserNestedInput
    userLearning?: UserLearningUpdateManyWithoutUserNestedInput
    dailyRecords?: DailyRecordUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLearningSettingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    totalScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stories?: StoryUncheckedUpdateManyWithoutUserNestedInput
    userLearning?: UserLearningUncheckedUpdateManyWithoutUserNestedInput
    dailyRecords?: DailyRecordUncheckedUpdateManyWithoutUserNestedInput
  }

  export type StoryCreateManyUserInput = {
    id?: string
    title: string
    content: string
    words: string
    style: string
    wordCount: number
    imageUrls: string
    status?: string
    createdAt?: Date | string
  }

  export type UserLearningCreateManyUserInput = {
    id?: string
    wordId: string
    storyId?: string | null
    status?: string
    correctCount?: number
    wrongCount?: number
    lastStudiedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type DailyRecordCreateManyUserInput = {
    id?: string
    studyDate: Date | string
    wordsLearned?: number
    storiesGenerated?: number
    studyDuration?: number
    scoreEarned?: number
    createdAt?: Date | string
  }

  export type StoryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    words?: StringFieldUpdateOperationsInput | string
    style?: StringFieldUpdateOperationsInput | string
    wordCount?: IntFieldUpdateOperationsInput | number
    imageUrls?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userLearning?: UserLearningUpdateManyWithoutStoryNestedInput
  }

  export type StoryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    words?: StringFieldUpdateOperationsInput | string
    style?: StringFieldUpdateOperationsInput | string
    wordCount?: IntFieldUpdateOperationsInput | number
    imageUrls?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userLearning?: UserLearningUncheckedUpdateManyWithoutStoryNestedInput
  }

  export type StoryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    words?: StringFieldUpdateOperationsInput | string
    style?: StringFieldUpdateOperationsInput | string
    wordCount?: IntFieldUpdateOperationsInput | number
    imageUrls?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLearningUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    correctCount?: IntFieldUpdateOperationsInput | number
    wrongCount?: IntFieldUpdateOperationsInput | number
    lastStudiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    word?: WordUpdateOneRequiredWithoutUserLearningNestedInput
    story?: StoryUpdateOneWithoutUserLearningNestedInput
  }

  export type UserLearningUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    wordId?: StringFieldUpdateOperationsInput | string
    storyId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    correctCount?: IntFieldUpdateOperationsInput | number
    wrongCount?: IntFieldUpdateOperationsInput | number
    lastStudiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLearningUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    wordId?: StringFieldUpdateOperationsInput | string
    storyId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    correctCount?: IntFieldUpdateOperationsInput | number
    wrongCount?: IntFieldUpdateOperationsInput | number
    lastStudiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyRecordUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    studyDate?: DateTimeFieldUpdateOperationsInput | Date | string
    wordsLearned?: IntFieldUpdateOperationsInput | number
    storiesGenerated?: IntFieldUpdateOperationsInput | number
    studyDuration?: IntFieldUpdateOperationsInput | number
    scoreEarned?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyRecordUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    studyDate?: DateTimeFieldUpdateOperationsInput | Date | string
    wordsLearned?: IntFieldUpdateOperationsInput | number
    storiesGenerated?: IntFieldUpdateOperationsInput | number
    studyDuration?: IntFieldUpdateOperationsInput | number
    scoreEarned?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyRecordUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    studyDate?: DateTimeFieldUpdateOperationsInput | Date | string
    wordsLearned?: IntFieldUpdateOperationsInput | number
    storiesGenerated?: IntFieldUpdateOperationsInput | number
    studyDuration?: IntFieldUpdateOperationsInput | number
    scoreEarned?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLearningCreateManyWordInput = {
    id?: string
    userId: string
    storyId?: string | null
    status?: string
    correctCount?: number
    wrongCount?: number
    lastStudiedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type UserLearningUpdateWithoutWordInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    correctCount?: IntFieldUpdateOperationsInput | number
    wrongCount?: IntFieldUpdateOperationsInput | number
    lastStudiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserLearningNestedInput
    story?: StoryUpdateOneWithoutUserLearningNestedInput
  }

  export type UserLearningUncheckedUpdateWithoutWordInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    storyId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    correctCount?: IntFieldUpdateOperationsInput | number
    wrongCount?: IntFieldUpdateOperationsInput | number
    lastStudiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLearningUncheckedUpdateManyWithoutWordInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    storyId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    correctCount?: IntFieldUpdateOperationsInput | number
    wrongCount?: IntFieldUpdateOperationsInput | number
    lastStudiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLearningCreateManyStoryInput = {
    id?: string
    userId: string
    wordId: string
    status?: string
    correctCount?: number
    wrongCount?: number
    lastStudiedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type UserLearningUpdateWithoutStoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    correctCount?: IntFieldUpdateOperationsInput | number
    wrongCount?: IntFieldUpdateOperationsInput | number
    lastStudiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserLearningNestedInput
    word?: WordUpdateOneRequiredWithoutUserLearningNestedInput
  }

  export type UserLearningUncheckedUpdateWithoutStoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    wordId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    correctCount?: IntFieldUpdateOperationsInput | number
    wrongCount?: IntFieldUpdateOperationsInput | number
    lastStudiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLearningUncheckedUpdateManyWithoutStoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    wordId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    correctCount?: IntFieldUpdateOperationsInput | number
    wrongCount?: IntFieldUpdateOperationsInput | number
    lastStudiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}