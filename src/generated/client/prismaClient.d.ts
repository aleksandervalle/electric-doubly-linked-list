
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Doubly_linked_nodes
 * 
 */
export type Doubly_linked_nodes = {
  /**
   * @zod.string.uuid()
   */
  uuid: string
  /**
   * @zod.string.uuid()
   */
  next_node: string | null
  /**
   * @zod.string.uuid()
   */
  prev_node: string | null
}

/**
 * Model Items
 * 
 */
export type Items = {
  value: string
}

/**
 * Model Singly_linked_nodes
 * 
 */
export type Singly_linked_nodes = {
  /**
   * @zod.string.uuid()
   */
  uuid: string
  /**
   * @zod.string.uuid()
   */
  next_node: string | null
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Doubly_linked_nodes
 * const doubly_linked_nodes = await prisma.doubly_linked_nodes.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Doubly_linked_nodes
   * const doubly_linked_nodes = await prisma.doubly_linked_nodes.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>;

  $transaction<R>(fn: (prisma: Prisma.TransactionClient) => Promise<R>, options?: {maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel}): Promise<R>;

      /**
   * `prisma.doubly_linked_nodes`: Exposes CRUD operations for the **Doubly_linked_nodes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Doubly_linked_nodes
    * const doubly_linked_nodes = await prisma.doubly_linked_nodes.findMany()
    * ```
    */
  get doubly_linked_nodes(): Prisma.Doubly_linked_nodesDelegate<GlobalReject>;

  /**
   * `prisma.items`: Exposes CRUD operations for the **Items** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Items
    * const items = await prisma.items.findMany()
    * ```
    */
  get items(): Prisma.ItemsDelegate<GlobalReject>;

  /**
   * `prisma.singly_linked_nodes`: Exposes CRUD operations for the **Singly_linked_nodes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Singly_linked_nodes
    * const singly_linked_nodes = await prisma.singly_linked_nodes.findMany()
    * ```
    */
  get singly_linked_nodes(): Prisma.Singly_linked_nodesDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

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
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.8.1
   * Query Engine version: d6e67a83f971b175a593ccc12e15c4a757f93ffe
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
export type InputJsonValue = null | string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    Doubly_linked_nodes: 'Doubly_linked_nodes',
    Items: 'Items',
    Singly_linked_nodes: 'Singly_linked_nodes'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type Doubly_linked_nodesCountOutputType
   */


  export type Doubly_linked_nodesCountOutputType = {
    other_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodes: number
    other_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodes: number
  }

  export type Doubly_linked_nodesCountOutputTypeSelect = {
    other_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodes?: boolean
    other_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodes?: boolean
  }

  export type Doubly_linked_nodesCountOutputTypeGetPayload<S extends boolean | null | undefined | Doubly_linked_nodesCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Doubly_linked_nodesCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (Doubly_linked_nodesCountOutputTypeArgs)
    ? Doubly_linked_nodesCountOutputType 
    : S extends { select: any } & (Doubly_linked_nodesCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Doubly_linked_nodesCountOutputType ? Doubly_linked_nodesCountOutputType[P] : never
  } 
      : Doubly_linked_nodesCountOutputType




  // Custom InputTypes

  /**
   * Doubly_linked_nodesCountOutputType without action
   */
  export type Doubly_linked_nodesCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the Doubly_linked_nodesCountOutputType
     * 
    **/
    select?: Doubly_linked_nodesCountOutputTypeSelect | null
  }



  /**
   * Count Type Singly_linked_nodesCountOutputType
   */


  export type Singly_linked_nodesCountOutputType = {
    other_singly_linked_nodes: number
  }

  export type Singly_linked_nodesCountOutputTypeSelect = {
    other_singly_linked_nodes?: boolean
  }

  export type Singly_linked_nodesCountOutputTypeGetPayload<S extends boolean | null | undefined | Singly_linked_nodesCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Singly_linked_nodesCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (Singly_linked_nodesCountOutputTypeArgs)
    ? Singly_linked_nodesCountOutputType 
    : S extends { select: any } & (Singly_linked_nodesCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Singly_linked_nodesCountOutputType ? Singly_linked_nodesCountOutputType[P] : never
  } 
      : Singly_linked_nodesCountOutputType




  // Custom InputTypes

  /**
   * Singly_linked_nodesCountOutputType without action
   */
  export type Singly_linked_nodesCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the Singly_linked_nodesCountOutputType
     * 
    **/
    select?: Singly_linked_nodesCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Doubly_linked_nodes
   */


  export type AggregateDoubly_linked_nodes = {
    _count: Doubly_linked_nodesCountAggregateOutputType | null
    _min: Doubly_linked_nodesMinAggregateOutputType | null
    _max: Doubly_linked_nodesMaxAggregateOutputType | null
  }

  export type Doubly_linked_nodesMinAggregateOutputType = {
    uuid: string | null
    next_node: string | null
    prev_node: string | null
  }

  export type Doubly_linked_nodesMaxAggregateOutputType = {
    uuid: string | null
    next_node: string | null
    prev_node: string | null
  }

  export type Doubly_linked_nodesCountAggregateOutputType = {
    uuid: number
    next_node: number
    prev_node: number
    _all: number
  }


  export type Doubly_linked_nodesMinAggregateInputType = {
    uuid?: true
    next_node?: true
    prev_node?: true
  }

  export type Doubly_linked_nodesMaxAggregateInputType = {
    uuid?: true
    next_node?: true
    prev_node?: true
  }

  export type Doubly_linked_nodesCountAggregateInputType = {
    uuid?: true
    next_node?: true
    prev_node?: true
    _all?: true
  }

  export type Doubly_linked_nodesAggregateArgs = {
    /**
     * Filter which Doubly_linked_nodes to aggregate.
     * 
    **/
    where?: Doubly_linked_nodesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doubly_linked_nodes to fetch.
     * 
    **/
    orderBy?: Enumerable<Doubly_linked_nodesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: Doubly_linked_nodesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doubly_linked_nodes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doubly_linked_nodes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Doubly_linked_nodes
    **/
    _count?: true | Doubly_linked_nodesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Doubly_linked_nodesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Doubly_linked_nodesMaxAggregateInputType
  }

  export type GetDoubly_linked_nodesAggregateType<T extends Doubly_linked_nodesAggregateArgs> = {
        [P in keyof T & keyof AggregateDoubly_linked_nodes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoubly_linked_nodes[P]>
      : GetScalarType<T[P], AggregateDoubly_linked_nodes[P]>
  }




  export type Doubly_linked_nodesGroupByArgs = {
    where?: Doubly_linked_nodesWhereInput
    orderBy?: Enumerable<Doubly_linked_nodesOrderByWithAggregationInput>
    by: Array<Doubly_linked_nodesScalarFieldEnum>
    having?: Doubly_linked_nodesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Doubly_linked_nodesCountAggregateInputType | true
    _min?: Doubly_linked_nodesMinAggregateInputType
    _max?: Doubly_linked_nodesMaxAggregateInputType
  }


  export type Doubly_linked_nodesGroupByOutputType = {
    uuid: string
    next_node: string | null
    prev_node: string | null
    _count: Doubly_linked_nodesCountAggregateOutputType | null
    _min: Doubly_linked_nodesMinAggregateOutputType | null
    _max: Doubly_linked_nodesMaxAggregateOutputType | null
  }

  type GetDoubly_linked_nodesGroupByPayload<T extends Doubly_linked_nodesGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Doubly_linked_nodesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Doubly_linked_nodesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Doubly_linked_nodesGroupByOutputType[P]>
            : GetScalarType<T[P], Doubly_linked_nodesGroupByOutputType[P]>
        }
      >
    >


  export type Doubly_linked_nodesSelect = {
    uuid?: boolean
    next_node?: boolean
    prev_node?: boolean
    doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodes?: boolean | Doubly_linked_nodesArgs
    other_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodes?: boolean | Doubly_linked_nodes$other_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesArgs
    doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodes?: boolean | Doubly_linked_nodesArgs
    other_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodes?: boolean | Doubly_linked_nodes$other_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesArgs
    _count?: boolean | Doubly_linked_nodesCountOutputTypeArgs
  }


  export type Doubly_linked_nodesInclude = {
    doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodes?: boolean | Doubly_linked_nodesArgs
    other_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodes?: boolean | Doubly_linked_nodes$other_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesArgs
    doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodes?: boolean | Doubly_linked_nodesArgs
    other_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodes?: boolean | Doubly_linked_nodes$other_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesArgs
    _count?: boolean | Doubly_linked_nodesCountOutputTypeArgs
  } 

  export type Doubly_linked_nodesGetPayload<S extends boolean | null | undefined | Doubly_linked_nodesArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Doubly_linked_nodes :
    S extends undefined ? never :
    S extends { include: any } & (Doubly_linked_nodesArgs | Doubly_linked_nodesFindManyArgs)
    ? Doubly_linked_nodes  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodes' ? Doubly_linked_nodesGetPayload<S['include'][P]> | null :
        P extends 'other_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodes' ? Array < Doubly_linked_nodesGetPayload<S['include'][P]>>  :
        P extends 'doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodes' ? Doubly_linked_nodesGetPayload<S['include'][P]> | null :
        P extends 'other_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodes' ? Array < Doubly_linked_nodesGetPayload<S['include'][P]>>  :
        P extends '_count' ? Doubly_linked_nodesCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (Doubly_linked_nodesArgs | Doubly_linked_nodesFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodes' ? Doubly_linked_nodesGetPayload<S['select'][P]> | null :
        P extends 'other_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodes' ? Array < Doubly_linked_nodesGetPayload<S['select'][P]>>  :
        P extends 'doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodes' ? Doubly_linked_nodesGetPayload<S['select'][P]> | null :
        P extends 'other_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodes' ? Array < Doubly_linked_nodesGetPayload<S['select'][P]>>  :
        P extends '_count' ? Doubly_linked_nodesCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Doubly_linked_nodes ? Doubly_linked_nodes[P] : never
  } 
      : Doubly_linked_nodes


  type Doubly_linked_nodesCountArgs = Merge<
    Omit<Doubly_linked_nodesFindManyArgs, 'select' | 'include'> & {
      select?: Doubly_linked_nodesCountAggregateInputType | true
    }
  >

  export interface Doubly_linked_nodesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Doubly_linked_nodes that matches the filter.
     * @param {Doubly_linked_nodesFindUniqueArgs} args - Arguments to find a Doubly_linked_nodes
     * @example
     * // Get one Doubly_linked_nodes
     * const doubly_linked_nodes = await prisma.doubly_linked_nodes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Doubly_linked_nodesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, Doubly_linked_nodesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Doubly_linked_nodes'> extends True ? Prisma__Doubly_linked_nodesClient<Doubly_linked_nodesGetPayload<T>> : Prisma__Doubly_linked_nodesClient<Doubly_linked_nodesGetPayload<T> | null, null>

    /**
     * Find one Doubly_linked_nodes that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Doubly_linked_nodesFindUniqueOrThrowArgs} args - Arguments to find a Doubly_linked_nodes
     * @example
     * // Get one Doubly_linked_nodes
     * const doubly_linked_nodes = await prisma.doubly_linked_nodes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Doubly_linked_nodesFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, Doubly_linked_nodesFindUniqueOrThrowArgs>
    ): Prisma__Doubly_linked_nodesClient<Doubly_linked_nodesGetPayload<T>>

    /**
     * Find the first Doubly_linked_nodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Doubly_linked_nodesFindFirstArgs} args - Arguments to find a Doubly_linked_nodes
     * @example
     * // Get one Doubly_linked_nodes
     * const doubly_linked_nodes = await prisma.doubly_linked_nodes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Doubly_linked_nodesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, Doubly_linked_nodesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Doubly_linked_nodes'> extends True ? Prisma__Doubly_linked_nodesClient<Doubly_linked_nodesGetPayload<T>> : Prisma__Doubly_linked_nodesClient<Doubly_linked_nodesGetPayload<T> | null, null>

    /**
     * Find the first Doubly_linked_nodes that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Doubly_linked_nodesFindFirstOrThrowArgs} args - Arguments to find a Doubly_linked_nodes
     * @example
     * // Get one Doubly_linked_nodes
     * const doubly_linked_nodes = await prisma.doubly_linked_nodes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Doubly_linked_nodesFindFirstOrThrowArgs>(
      args?: SelectSubset<T, Doubly_linked_nodesFindFirstOrThrowArgs>
    ): Prisma__Doubly_linked_nodesClient<Doubly_linked_nodesGetPayload<T>>

    /**
     * Find zero or more Doubly_linked_nodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Doubly_linked_nodesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Doubly_linked_nodes
     * const doubly_linked_nodes = await prisma.doubly_linked_nodes.findMany()
     * 
     * // Get first 10 Doubly_linked_nodes
     * const doubly_linked_nodes = await prisma.doubly_linked_nodes.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const doubly_linked_nodesWithUuidOnly = await prisma.doubly_linked_nodes.findMany({ select: { uuid: true } })
     * 
    **/
    findMany<T extends Doubly_linked_nodesFindManyArgs>(
      args?: SelectSubset<T, Doubly_linked_nodesFindManyArgs>
    ): PrismaPromise<Array<Doubly_linked_nodesGetPayload<T>>>

    /**
     * Create a Doubly_linked_nodes.
     * @param {Doubly_linked_nodesCreateArgs} args - Arguments to create a Doubly_linked_nodes.
     * @example
     * // Create one Doubly_linked_nodes
     * const Doubly_linked_nodes = await prisma.doubly_linked_nodes.create({
     *   data: {
     *     // ... data to create a Doubly_linked_nodes
     *   }
     * })
     * 
    **/
    create<T extends Doubly_linked_nodesCreateArgs>(
      args: SelectSubset<T, Doubly_linked_nodesCreateArgs>
    ): Prisma__Doubly_linked_nodesClient<Doubly_linked_nodesGetPayload<T>>

    /**
     * Create many Doubly_linked_nodes.
     *     @param {Doubly_linked_nodesCreateManyArgs} args - Arguments to create many Doubly_linked_nodes.
     *     @example
     *     // Create many Doubly_linked_nodes
     *     const doubly_linked_nodes = await prisma.doubly_linked_nodes.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Doubly_linked_nodesCreateManyArgs>(
      args?: SelectSubset<T, Doubly_linked_nodesCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Doubly_linked_nodes.
     * @param {Doubly_linked_nodesDeleteArgs} args - Arguments to delete one Doubly_linked_nodes.
     * @example
     * // Delete one Doubly_linked_nodes
     * const Doubly_linked_nodes = await prisma.doubly_linked_nodes.delete({
     *   where: {
     *     // ... filter to delete one Doubly_linked_nodes
     *   }
     * })
     * 
    **/
    delete<T extends Doubly_linked_nodesDeleteArgs>(
      args: SelectSubset<T, Doubly_linked_nodesDeleteArgs>
    ): Prisma__Doubly_linked_nodesClient<Doubly_linked_nodesGetPayload<T>>

    /**
     * Update one Doubly_linked_nodes.
     * @param {Doubly_linked_nodesUpdateArgs} args - Arguments to update one Doubly_linked_nodes.
     * @example
     * // Update one Doubly_linked_nodes
     * const doubly_linked_nodes = await prisma.doubly_linked_nodes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Doubly_linked_nodesUpdateArgs>(
      args: SelectSubset<T, Doubly_linked_nodesUpdateArgs>
    ): Prisma__Doubly_linked_nodesClient<Doubly_linked_nodesGetPayload<T>>

    /**
     * Delete zero or more Doubly_linked_nodes.
     * @param {Doubly_linked_nodesDeleteManyArgs} args - Arguments to filter Doubly_linked_nodes to delete.
     * @example
     * // Delete a few Doubly_linked_nodes
     * const { count } = await prisma.doubly_linked_nodes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Doubly_linked_nodesDeleteManyArgs>(
      args?: SelectSubset<T, Doubly_linked_nodesDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doubly_linked_nodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Doubly_linked_nodesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Doubly_linked_nodes
     * const doubly_linked_nodes = await prisma.doubly_linked_nodes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Doubly_linked_nodesUpdateManyArgs>(
      args: SelectSubset<T, Doubly_linked_nodesUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Doubly_linked_nodes.
     * @param {Doubly_linked_nodesUpsertArgs} args - Arguments to update or create a Doubly_linked_nodes.
     * @example
     * // Update or create a Doubly_linked_nodes
     * const doubly_linked_nodes = await prisma.doubly_linked_nodes.upsert({
     *   create: {
     *     // ... data to create a Doubly_linked_nodes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Doubly_linked_nodes we want to update
     *   }
     * })
    **/
    upsert<T extends Doubly_linked_nodesUpsertArgs>(
      args: SelectSubset<T, Doubly_linked_nodesUpsertArgs>
    ): Prisma__Doubly_linked_nodesClient<Doubly_linked_nodesGetPayload<T>>

    /**
     * Count the number of Doubly_linked_nodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Doubly_linked_nodesCountArgs} args - Arguments to filter Doubly_linked_nodes to count.
     * @example
     * // Count the number of Doubly_linked_nodes
     * const count = await prisma.doubly_linked_nodes.count({
     *   where: {
     *     // ... the filter for the Doubly_linked_nodes we want to count
     *   }
     * })
    **/
    count<T extends Doubly_linked_nodesCountArgs>(
      args?: Subset<T, Doubly_linked_nodesCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Doubly_linked_nodesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Doubly_linked_nodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Doubly_linked_nodesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Doubly_linked_nodesAggregateArgs>(args: Subset<T, Doubly_linked_nodesAggregateArgs>): PrismaPromise<GetDoubly_linked_nodesAggregateType<T>>

    /**
     * Group by Doubly_linked_nodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Doubly_linked_nodesGroupByArgs} args - Group by arguments.
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
      T extends Doubly_linked_nodesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Doubly_linked_nodesGroupByArgs['orderBy'] }
        : { orderBy?: Doubly_linked_nodesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Doubly_linked_nodesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoubly_linked_nodesGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Doubly_linked_nodes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__Doubly_linked_nodesClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodes<T extends Doubly_linked_nodesArgs= {}>(args?: Subset<T, Doubly_linked_nodesArgs>): Prisma__Doubly_linked_nodesClient<Doubly_linked_nodesGetPayload<T> | Null>;

    other_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodes<T extends Doubly_linked_nodes$other_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesArgs= {}>(args?: Subset<T, Doubly_linked_nodes$other_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesArgs>): PrismaPromise<Array<Doubly_linked_nodesGetPayload<T>>| Null>;

    doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodes<T extends Doubly_linked_nodesArgs= {}>(args?: Subset<T, Doubly_linked_nodesArgs>): Prisma__Doubly_linked_nodesClient<Doubly_linked_nodesGetPayload<T> | Null>;

    other_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodes<T extends Doubly_linked_nodes$other_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesArgs= {}>(args?: Subset<T, Doubly_linked_nodes$other_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesArgs>): PrismaPromise<Array<Doubly_linked_nodesGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Doubly_linked_nodes base type for findUnique actions
   */
  export type Doubly_linked_nodesFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Doubly_linked_nodes
     * 
    **/
    select?: Doubly_linked_nodesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Doubly_linked_nodesInclude | null
    /**
     * Filter, which Doubly_linked_nodes to fetch.
     * 
    **/
    where: Doubly_linked_nodesWhereUniqueInput
  }

  /**
   * Doubly_linked_nodes findUnique
   */
  export interface Doubly_linked_nodesFindUniqueArgs extends Doubly_linked_nodesFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Doubly_linked_nodes findUniqueOrThrow
   */
  export type Doubly_linked_nodesFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Doubly_linked_nodes
     * 
    **/
    select?: Doubly_linked_nodesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Doubly_linked_nodesInclude | null
    /**
     * Filter, which Doubly_linked_nodes to fetch.
     * 
    **/
    where: Doubly_linked_nodesWhereUniqueInput
  }


  /**
   * Doubly_linked_nodes base type for findFirst actions
   */
  export type Doubly_linked_nodesFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Doubly_linked_nodes
     * 
    **/
    select?: Doubly_linked_nodesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Doubly_linked_nodesInclude | null
    /**
     * Filter, which Doubly_linked_nodes to fetch.
     * 
    **/
    where?: Doubly_linked_nodesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doubly_linked_nodes to fetch.
     * 
    **/
    orderBy?: Enumerable<Doubly_linked_nodesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doubly_linked_nodes.
     * 
    **/
    cursor?: Doubly_linked_nodesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doubly_linked_nodes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doubly_linked_nodes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doubly_linked_nodes.
     * 
    **/
    distinct?: Enumerable<Doubly_linked_nodesScalarFieldEnum>
  }

  /**
   * Doubly_linked_nodes findFirst
   */
  export interface Doubly_linked_nodesFindFirstArgs extends Doubly_linked_nodesFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Doubly_linked_nodes findFirstOrThrow
   */
  export type Doubly_linked_nodesFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Doubly_linked_nodes
     * 
    **/
    select?: Doubly_linked_nodesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Doubly_linked_nodesInclude | null
    /**
     * Filter, which Doubly_linked_nodes to fetch.
     * 
    **/
    where?: Doubly_linked_nodesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doubly_linked_nodes to fetch.
     * 
    **/
    orderBy?: Enumerable<Doubly_linked_nodesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doubly_linked_nodes.
     * 
    **/
    cursor?: Doubly_linked_nodesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doubly_linked_nodes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doubly_linked_nodes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doubly_linked_nodes.
     * 
    **/
    distinct?: Enumerable<Doubly_linked_nodesScalarFieldEnum>
  }


  /**
   * Doubly_linked_nodes findMany
   */
  export type Doubly_linked_nodesFindManyArgs = {
    /**
     * Select specific fields to fetch from the Doubly_linked_nodes
     * 
    **/
    select?: Doubly_linked_nodesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Doubly_linked_nodesInclude | null
    /**
     * Filter, which Doubly_linked_nodes to fetch.
     * 
    **/
    where?: Doubly_linked_nodesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doubly_linked_nodes to fetch.
     * 
    **/
    orderBy?: Enumerable<Doubly_linked_nodesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Doubly_linked_nodes.
     * 
    **/
    cursor?: Doubly_linked_nodesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doubly_linked_nodes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doubly_linked_nodes.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Doubly_linked_nodesScalarFieldEnum>
  }


  /**
   * Doubly_linked_nodes create
   */
  export type Doubly_linked_nodesCreateArgs = {
    /**
     * Select specific fields to fetch from the Doubly_linked_nodes
     * 
    **/
    select?: Doubly_linked_nodesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Doubly_linked_nodesInclude | null
    /**
     * The data needed to create a Doubly_linked_nodes.
     * 
    **/
    data: XOR<Doubly_linked_nodesCreateInput, Doubly_linked_nodesUncheckedCreateInput>
  }


  /**
   * Doubly_linked_nodes createMany
   */
  export type Doubly_linked_nodesCreateManyArgs = {
    /**
     * The data used to create many Doubly_linked_nodes.
     * 
    **/
    data: Enumerable<Doubly_linked_nodesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Doubly_linked_nodes update
   */
  export type Doubly_linked_nodesUpdateArgs = {
    /**
     * Select specific fields to fetch from the Doubly_linked_nodes
     * 
    **/
    select?: Doubly_linked_nodesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Doubly_linked_nodesInclude | null
    /**
     * The data needed to update a Doubly_linked_nodes.
     * 
    **/
    data: XOR<Doubly_linked_nodesUpdateInput, Doubly_linked_nodesUncheckedUpdateInput>
    /**
     * Choose, which Doubly_linked_nodes to update.
     * 
    **/
    where: Doubly_linked_nodesWhereUniqueInput
  }


  /**
   * Doubly_linked_nodes updateMany
   */
  export type Doubly_linked_nodesUpdateManyArgs = {
    /**
     * The data used to update Doubly_linked_nodes.
     * 
    **/
    data: XOR<Doubly_linked_nodesUpdateManyMutationInput, Doubly_linked_nodesUncheckedUpdateManyInput>
    /**
     * Filter which Doubly_linked_nodes to update
     * 
    **/
    where?: Doubly_linked_nodesWhereInput
  }


  /**
   * Doubly_linked_nodes upsert
   */
  export type Doubly_linked_nodesUpsertArgs = {
    /**
     * Select specific fields to fetch from the Doubly_linked_nodes
     * 
    **/
    select?: Doubly_linked_nodesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Doubly_linked_nodesInclude | null
    /**
     * The filter to search for the Doubly_linked_nodes to update in case it exists.
     * 
    **/
    where: Doubly_linked_nodesWhereUniqueInput
    /**
     * In case the Doubly_linked_nodes found by the `where` argument doesn't exist, create a new Doubly_linked_nodes with this data.
     * 
    **/
    create: XOR<Doubly_linked_nodesCreateInput, Doubly_linked_nodesUncheckedCreateInput>
    /**
     * In case the Doubly_linked_nodes was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<Doubly_linked_nodesUpdateInput, Doubly_linked_nodesUncheckedUpdateInput>
  }


  /**
   * Doubly_linked_nodes delete
   */
  export type Doubly_linked_nodesDeleteArgs = {
    /**
     * Select specific fields to fetch from the Doubly_linked_nodes
     * 
    **/
    select?: Doubly_linked_nodesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Doubly_linked_nodesInclude | null
    /**
     * Filter which Doubly_linked_nodes to delete.
     * 
    **/
    where: Doubly_linked_nodesWhereUniqueInput
  }


  /**
   * Doubly_linked_nodes deleteMany
   */
  export type Doubly_linked_nodesDeleteManyArgs = {
    /**
     * Filter which Doubly_linked_nodes to delete
     * 
    **/
    where?: Doubly_linked_nodesWhereInput
  }


  /**
   * Doubly_linked_nodes.other_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodes
   */
  export type Doubly_linked_nodes$other_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesArgs = {
    /**
     * Select specific fields to fetch from the Doubly_linked_nodes
     * 
    **/
    select?: Doubly_linked_nodesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Doubly_linked_nodesInclude | null
    where?: Doubly_linked_nodesWhereInput
    orderBy?: Enumerable<Doubly_linked_nodesOrderByWithRelationInput>
    cursor?: Doubly_linked_nodesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Doubly_linked_nodesScalarFieldEnum>
  }


  /**
   * Doubly_linked_nodes.other_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodes
   */
  export type Doubly_linked_nodes$other_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesArgs = {
    /**
     * Select specific fields to fetch from the Doubly_linked_nodes
     * 
    **/
    select?: Doubly_linked_nodesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Doubly_linked_nodesInclude | null
    where?: Doubly_linked_nodesWhereInput
    orderBy?: Enumerable<Doubly_linked_nodesOrderByWithRelationInput>
    cursor?: Doubly_linked_nodesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Doubly_linked_nodesScalarFieldEnum>
  }


  /**
   * Doubly_linked_nodes without action
   */
  export type Doubly_linked_nodesArgs = {
    /**
     * Select specific fields to fetch from the Doubly_linked_nodes
     * 
    **/
    select?: Doubly_linked_nodesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Doubly_linked_nodesInclude | null
  }



  /**
   * Model Items
   */


  export type AggregateItems = {
    _count: ItemsCountAggregateOutputType | null
    _min: ItemsMinAggregateOutputType | null
    _max: ItemsMaxAggregateOutputType | null
  }

  export type ItemsMinAggregateOutputType = {
    value: string | null
  }

  export type ItemsMaxAggregateOutputType = {
    value: string | null
  }

  export type ItemsCountAggregateOutputType = {
    value: number
    _all: number
  }


  export type ItemsMinAggregateInputType = {
    value?: true
  }

  export type ItemsMaxAggregateInputType = {
    value?: true
  }

  export type ItemsCountAggregateInputType = {
    value?: true
    _all?: true
  }

  export type ItemsAggregateArgs = {
    /**
     * Filter which Items to aggregate.
     * 
    **/
    where?: ItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     * 
    **/
    orderBy?: Enumerable<ItemsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Items
    **/
    _count?: true | ItemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemsMaxAggregateInputType
  }

  export type GetItemsAggregateType<T extends ItemsAggregateArgs> = {
        [P in keyof T & keyof AggregateItems]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItems[P]>
      : GetScalarType<T[P], AggregateItems[P]>
  }




  export type ItemsGroupByArgs = {
    where?: ItemsWhereInput
    orderBy?: Enumerable<ItemsOrderByWithAggregationInput>
    by: Array<ItemsScalarFieldEnum>
    having?: ItemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemsCountAggregateInputType | true
    _min?: ItemsMinAggregateInputType
    _max?: ItemsMaxAggregateInputType
  }


  export type ItemsGroupByOutputType = {
    value: string
    _count: ItemsCountAggregateOutputType | null
    _min: ItemsMinAggregateOutputType | null
    _max: ItemsMaxAggregateOutputType | null
  }

  type GetItemsGroupByPayload<T extends ItemsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ItemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemsGroupByOutputType[P]>
            : GetScalarType<T[P], ItemsGroupByOutputType[P]>
        }
      >
    >


  export type ItemsSelect = {
    value?: boolean
  }


  export type ItemsGetPayload<S extends boolean | null | undefined | ItemsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Items :
    S extends undefined ? never :
    S extends { include: any } & (ItemsArgs | ItemsFindManyArgs)
    ? Items 
    : S extends { select: any } & (ItemsArgs | ItemsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Items ? Items[P] : never
  } 
      : Items


  type ItemsCountArgs = Merge<
    Omit<ItemsFindManyArgs, 'select' | 'include'> & {
      select?: ItemsCountAggregateInputType | true
    }
  >

  export interface ItemsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Items that matches the filter.
     * @param {ItemsFindUniqueArgs} args - Arguments to find a Items
     * @example
     * // Get one Items
     * const items = await prisma.items.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ItemsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ItemsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Items'> extends True ? Prisma__ItemsClient<ItemsGetPayload<T>> : Prisma__ItemsClient<ItemsGetPayload<T> | null, null>

    /**
     * Find one Items that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ItemsFindUniqueOrThrowArgs} args - Arguments to find a Items
     * @example
     * // Get one Items
     * const items = await prisma.items.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ItemsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ItemsFindUniqueOrThrowArgs>
    ): Prisma__ItemsClient<ItemsGetPayload<T>>

    /**
     * Find the first Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsFindFirstArgs} args - Arguments to find a Items
     * @example
     * // Get one Items
     * const items = await prisma.items.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ItemsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ItemsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Items'> extends True ? Prisma__ItemsClient<ItemsGetPayload<T>> : Prisma__ItemsClient<ItemsGetPayload<T> | null, null>

    /**
     * Find the first Items that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsFindFirstOrThrowArgs} args - Arguments to find a Items
     * @example
     * // Get one Items
     * const items = await prisma.items.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ItemsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ItemsFindFirstOrThrowArgs>
    ): Prisma__ItemsClient<ItemsGetPayload<T>>

    /**
     * Find zero or more Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Items
     * const items = await prisma.items.findMany()
     * 
     * // Get first 10 Items
     * const items = await prisma.items.findMany({ take: 10 })
     * 
     * // Only select the `value`
     * const itemsWithValueOnly = await prisma.items.findMany({ select: { value: true } })
     * 
    **/
    findMany<T extends ItemsFindManyArgs>(
      args?: SelectSubset<T, ItemsFindManyArgs>
    ): PrismaPromise<Array<ItemsGetPayload<T>>>

    /**
     * Create a Items.
     * @param {ItemsCreateArgs} args - Arguments to create a Items.
     * @example
     * // Create one Items
     * const Items = await prisma.items.create({
     *   data: {
     *     // ... data to create a Items
     *   }
     * })
     * 
    **/
    create<T extends ItemsCreateArgs>(
      args: SelectSubset<T, ItemsCreateArgs>
    ): Prisma__ItemsClient<ItemsGetPayload<T>>

    /**
     * Create many Items.
     *     @param {ItemsCreateManyArgs} args - Arguments to create many Items.
     *     @example
     *     // Create many Items
     *     const items = await prisma.items.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ItemsCreateManyArgs>(
      args?: SelectSubset<T, ItemsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Items.
     * @param {ItemsDeleteArgs} args - Arguments to delete one Items.
     * @example
     * // Delete one Items
     * const Items = await prisma.items.delete({
     *   where: {
     *     // ... filter to delete one Items
     *   }
     * })
     * 
    **/
    delete<T extends ItemsDeleteArgs>(
      args: SelectSubset<T, ItemsDeleteArgs>
    ): Prisma__ItemsClient<ItemsGetPayload<T>>

    /**
     * Update one Items.
     * @param {ItemsUpdateArgs} args - Arguments to update one Items.
     * @example
     * // Update one Items
     * const items = await prisma.items.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ItemsUpdateArgs>(
      args: SelectSubset<T, ItemsUpdateArgs>
    ): Prisma__ItemsClient<ItemsGetPayload<T>>

    /**
     * Delete zero or more Items.
     * @param {ItemsDeleteManyArgs} args - Arguments to filter Items to delete.
     * @example
     * // Delete a few Items
     * const { count } = await prisma.items.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ItemsDeleteManyArgs>(
      args?: SelectSubset<T, ItemsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Items
     * const items = await prisma.items.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ItemsUpdateManyArgs>(
      args: SelectSubset<T, ItemsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Items.
     * @param {ItemsUpsertArgs} args - Arguments to update or create a Items.
     * @example
     * // Update or create a Items
     * const items = await prisma.items.upsert({
     *   create: {
     *     // ... data to create a Items
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Items we want to update
     *   }
     * })
    **/
    upsert<T extends ItemsUpsertArgs>(
      args: SelectSubset<T, ItemsUpsertArgs>
    ): Prisma__ItemsClient<ItemsGetPayload<T>>

    /**
     * Count the number of Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsCountArgs} args - Arguments to filter Items to count.
     * @example
     * // Count the number of Items
     * const count = await prisma.items.count({
     *   where: {
     *     // ... the filter for the Items we want to count
     *   }
     * })
    **/
    count<T extends ItemsCountArgs>(
      args?: Subset<T, ItemsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ItemsAggregateArgs>(args: Subset<T, ItemsAggregateArgs>): PrismaPromise<GetItemsAggregateType<T>>

    /**
     * Group by Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsGroupByArgs} args - Group by arguments.
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
      T extends ItemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemsGroupByArgs['orderBy'] }
        : { orderBy?: ItemsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ItemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemsGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Items.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ItemsClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Items base type for findUnique actions
   */
  export type ItemsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Items
     * 
    **/
    select?: ItemsSelect | null
    /**
     * Filter, which Items to fetch.
     * 
    **/
    where: ItemsWhereUniqueInput
  }

  /**
   * Items findUnique
   */
  export interface ItemsFindUniqueArgs extends ItemsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Items findUniqueOrThrow
   */
  export type ItemsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Items
     * 
    **/
    select?: ItemsSelect | null
    /**
     * Filter, which Items to fetch.
     * 
    **/
    where: ItemsWhereUniqueInput
  }


  /**
   * Items base type for findFirst actions
   */
  export type ItemsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Items
     * 
    **/
    select?: ItemsSelect | null
    /**
     * Filter, which Items to fetch.
     * 
    **/
    where?: ItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     * 
    **/
    orderBy?: Enumerable<ItemsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     * 
    **/
    cursor?: ItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     * 
    **/
    distinct?: Enumerable<ItemsScalarFieldEnum>
  }

  /**
   * Items findFirst
   */
  export interface ItemsFindFirstArgs extends ItemsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Items findFirstOrThrow
   */
  export type ItemsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Items
     * 
    **/
    select?: ItemsSelect | null
    /**
     * Filter, which Items to fetch.
     * 
    **/
    where?: ItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     * 
    **/
    orderBy?: Enumerable<ItemsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     * 
    **/
    cursor?: ItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     * 
    **/
    distinct?: Enumerable<ItemsScalarFieldEnum>
  }


  /**
   * Items findMany
   */
  export type ItemsFindManyArgs = {
    /**
     * Select specific fields to fetch from the Items
     * 
    **/
    select?: ItemsSelect | null
    /**
     * Filter, which Items to fetch.
     * 
    **/
    where?: ItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     * 
    **/
    orderBy?: Enumerable<ItemsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Items.
     * 
    **/
    cursor?: ItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ItemsScalarFieldEnum>
  }


  /**
   * Items create
   */
  export type ItemsCreateArgs = {
    /**
     * Select specific fields to fetch from the Items
     * 
    **/
    select?: ItemsSelect | null
    /**
     * The data needed to create a Items.
     * 
    **/
    data: XOR<ItemsCreateInput, ItemsUncheckedCreateInput>
  }


  /**
   * Items createMany
   */
  export type ItemsCreateManyArgs = {
    /**
     * The data used to create many Items.
     * 
    **/
    data: Enumerable<ItemsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Items update
   */
  export type ItemsUpdateArgs = {
    /**
     * Select specific fields to fetch from the Items
     * 
    **/
    select?: ItemsSelect | null
    /**
     * The data needed to update a Items.
     * 
    **/
    data: XOR<ItemsUpdateInput, ItemsUncheckedUpdateInput>
    /**
     * Choose, which Items to update.
     * 
    **/
    where: ItemsWhereUniqueInput
  }


  /**
   * Items updateMany
   */
  export type ItemsUpdateManyArgs = {
    /**
     * The data used to update Items.
     * 
    **/
    data: XOR<ItemsUpdateManyMutationInput, ItemsUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     * 
    **/
    where?: ItemsWhereInput
  }


  /**
   * Items upsert
   */
  export type ItemsUpsertArgs = {
    /**
     * Select specific fields to fetch from the Items
     * 
    **/
    select?: ItemsSelect | null
    /**
     * The filter to search for the Items to update in case it exists.
     * 
    **/
    where: ItemsWhereUniqueInput
    /**
     * In case the Items found by the `where` argument doesn't exist, create a new Items with this data.
     * 
    **/
    create: XOR<ItemsCreateInput, ItemsUncheckedCreateInput>
    /**
     * In case the Items was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ItemsUpdateInput, ItemsUncheckedUpdateInput>
  }


  /**
   * Items delete
   */
  export type ItemsDeleteArgs = {
    /**
     * Select specific fields to fetch from the Items
     * 
    **/
    select?: ItemsSelect | null
    /**
     * Filter which Items to delete.
     * 
    **/
    where: ItemsWhereUniqueInput
  }


  /**
   * Items deleteMany
   */
  export type ItemsDeleteManyArgs = {
    /**
     * Filter which Items to delete
     * 
    **/
    where?: ItemsWhereInput
  }


  /**
   * Items without action
   */
  export type ItemsArgs = {
    /**
     * Select specific fields to fetch from the Items
     * 
    **/
    select?: ItemsSelect | null
  }



  /**
   * Model Singly_linked_nodes
   */


  export type AggregateSingly_linked_nodes = {
    _count: Singly_linked_nodesCountAggregateOutputType | null
    _min: Singly_linked_nodesMinAggregateOutputType | null
    _max: Singly_linked_nodesMaxAggregateOutputType | null
  }

  export type Singly_linked_nodesMinAggregateOutputType = {
    uuid: string | null
    next_node: string | null
  }

  export type Singly_linked_nodesMaxAggregateOutputType = {
    uuid: string | null
    next_node: string | null
  }

  export type Singly_linked_nodesCountAggregateOutputType = {
    uuid: number
    next_node: number
    _all: number
  }


  export type Singly_linked_nodesMinAggregateInputType = {
    uuid?: true
    next_node?: true
  }

  export type Singly_linked_nodesMaxAggregateInputType = {
    uuid?: true
    next_node?: true
  }

  export type Singly_linked_nodesCountAggregateInputType = {
    uuid?: true
    next_node?: true
    _all?: true
  }

  export type Singly_linked_nodesAggregateArgs = {
    /**
     * Filter which Singly_linked_nodes to aggregate.
     * 
    **/
    where?: Singly_linked_nodesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Singly_linked_nodes to fetch.
     * 
    **/
    orderBy?: Enumerable<Singly_linked_nodesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: Singly_linked_nodesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Singly_linked_nodes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Singly_linked_nodes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Singly_linked_nodes
    **/
    _count?: true | Singly_linked_nodesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Singly_linked_nodesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Singly_linked_nodesMaxAggregateInputType
  }

  export type GetSingly_linked_nodesAggregateType<T extends Singly_linked_nodesAggregateArgs> = {
        [P in keyof T & keyof AggregateSingly_linked_nodes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSingly_linked_nodes[P]>
      : GetScalarType<T[P], AggregateSingly_linked_nodes[P]>
  }




  export type Singly_linked_nodesGroupByArgs = {
    where?: Singly_linked_nodesWhereInput
    orderBy?: Enumerable<Singly_linked_nodesOrderByWithAggregationInput>
    by: Array<Singly_linked_nodesScalarFieldEnum>
    having?: Singly_linked_nodesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Singly_linked_nodesCountAggregateInputType | true
    _min?: Singly_linked_nodesMinAggregateInputType
    _max?: Singly_linked_nodesMaxAggregateInputType
  }


  export type Singly_linked_nodesGroupByOutputType = {
    uuid: string
    next_node: string | null
    _count: Singly_linked_nodesCountAggregateOutputType | null
    _min: Singly_linked_nodesMinAggregateOutputType | null
    _max: Singly_linked_nodesMaxAggregateOutputType | null
  }

  type GetSingly_linked_nodesGroupByPayload<T extends Singly_linked_nodesGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Singly_linked_nodesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Singly_linked_nodesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Singly_linked_nodesGroupByOutputType[P]>
            : GetScalarType<T[P], Singly_linked_nodesGroupByOutputType[P]>
        }
      >
    >


  export type Singly_linked_nodesSelect = {
    uuid?: boolean
    next_node?: boolean
    singly_linked_nodes?: boolean | Singly_linked_nodesArgs
    other_singly_linked_nodes?: boolean | Singly_linked_nodes$other_singly_linked_nodesArgs
    _count?: boolean | Singly_linked_nodesCountOutputTypeArgs
  }


  export type Singly_linked_nodesInclude = {
    singly_linked_nodes?: boolean | Singly_linked_nodesArgs
    other_singly_linked_nodes?: boolean | Singly_linked_nodes$other_singly_linked_nodesArgs
    _count?: boolean | Singly_linked_nodesCountOutputTypeArgs
  } 

  export type Singly_linked_nodesGetPayload<S extends boolean | null | undefined | Singly_linked_nodesArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Singly_linked_nodes :
    S extends undefined ? never :
    S extends { include: any } & (Singly_linked_nodesArgs | Singly_linked_nodesFindManyArgs)
    ? Singly_linked_nodes  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'singly_linked_nodes' ? Singly_linked_nodesGetPayload<S['include'][P]> | null :
        P extends 'other_singly_linked_nodes' ? Array < Singly_linked_nodesGetPayload<S['include'][P]>>  :
        P extends '_count' ? Singly_linked_nodesCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (Singly_linked_nodesArgs | Singly_linked_nodesFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'singly_linked_nodes' ? Singly_linked_nodesGetPayload<S['select'][P]> | null :
        P extends 'other_singly_linked_nodes' ? Array < Singly_linked_nodesGetPayload<S['select'][P]>>  :
        P extends '_count' ? Singly_linked_nodesCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Singly_linked_nodes ? Singly_linked_nodes[P] : never
  } 
      : Singly_linked_nodes


  type Singly_linked_nodesCountArgs = Merge<
    Omit<Singly_linked_nodesFindManyArgs, 'select' | 'include'> & {
      select?: Singly_linked_nodesCountAggregateInputType | true
    }
  >

  export interface Singly_linked_nodesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Singly_linked_nodes that matches the filter.
     * @param {Singly_linked_nodesFindUniqueArgs} args - Arguments to find a Singly_linked_nodes
     * @example
     * // Get one Singly_linked_nodes
     * const singly_linked_nodes = await prisma.singly_linked_nodes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Singly_linked_nodesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, Singly_linked_nodesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Singly_linked_nodes'> extends True ? Prisma__Singly_linked_nodesClient<Singly_linked_nodesGetPayload<T>> : Prisma__Singly_linked_nodesClient<Singly_linked_nodesGetPayload<T> | null, null>

    /**
     * Find one Singly_linked_nodes that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Singly_linked_nodesFindUniqueOrThrowArgs} args - Arguments to find a Singly_linked_nodes
     * @example
     * // Get one Singly_linked_nodes
     * const singly_linked_nodes = await prisma.singly_linked_nodes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Singly_linked_nodesFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, Singly_linked_nodesFindUniqueOrThrowArgs>
    ): Prisma__Singly_linked_nodesClient<Singly_linked_nodesGetPayload<T>>

    /**
     * Find the first Singly_linked_nodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Singly_linked_nodesFindFirstArgs} args - Arguments to find a Singly_linked_nodes
     * @example
     * // Get one Singly_linked_nodes
     * const singly_linked_nodes = await prisma.singly_linked_nodes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Singly_linked_nodesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, Singly_linked_nodesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Singly_linked_nodes'> extends True ? Prisma__Singly_linked_nodesClient<Singly_linked_nodesGetPayload<T>> : Prisma__Singly_linked_nodesClient<Singly_linked_nodesGetPayload<T> | null, null>

    /**
     * Find the first Singly_linked_nodes that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Singly_linked_nodesFindFirstOrThrowArgs} args - Arguments to find a Singly_linked_nodes
     * @example
     * // Get one Singly_linked_nodes
     * const singly_linked_nodes = await prisma.singly_linked_nodes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Singly_linked_nodesFindFirstOrThrowArgs>(
      args?: SelectSubset<T, Singly_linked_nodesFindFirstOrThrowArgs>
    ): Prisma__Singly_linked_nodesClient<Singly_linked_nodesGetPayload<T>>

    /**
     * Find zero or more Singly_linked_nodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Singly_linked_nodesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Singly_linked_nodes
     * const singly_linked_nodes = await prisma.singly_linked_nodes.findMany()
     * 
     * // Get first 10 Singly_linked_nodes
     * const singly_linked_nodes = await prisma.singly_linked_nodes.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const singly_linked_nodesWithUuidOnly = await prisma.singly_linked_nodes.findMany({ select: { uuid: true } })
     * 
    **/
    findMany<T extends Singly_linked_nodesFindManyArgs>(
      args?: SelectSubset<T, Singly_linked_nodesFindManyArgs>
    ): PrismaPromise<Array<Singly_linked_nodesGetPayload<T>>>

    /**
     * Create a Singly_linked_nodes.
     * @param {Singly_linked_nodesCreateArgs} args - Arguments to create a Singly_linked_nodes.
     * @example
     * // Create one Singly_linked_nodes
     * const Singly_linked_nodes = await prisma.singly_linked_nodes.create({
     *   data: {
     *     // ... data to create a Singly_linked_nodes
     *   }
     * })
     * 
    **/
    create<T extends Singly_linked_nodesCreateArgs>(
      args: SelectSubset<T, Singly_linked_nodesCreateArgs>
    ): Prisma__Singly_linked_nodesClient<Singly_linked_nodesGetPayload<T>>

    /**
     * Create many Singly_linked_nodes.
     *     @param {Singly_linked_nodesCreateManyArgs} args - Arguments to create many Singly_linked_nodes.
     *     @example
     *     // Create many Singly_linked_nodes
     *     const singly_linked_nodes = await prisma.singly_linked_nodes.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Singly_linked_nodesCreateManyArgs>(
      args?: SelectSubset<T, Singly_linked_nodesCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Singly_linked_nodes.
     * @param {Singly_linked_nodesDeleteArgs} args - Arguments to delete one Singly_linked_nodes.
     * @example
     * // Delete one Singly_linked_nodes
     * const Singly_linked_nodes = await prisma.singly_linked_nodes.delete({
     *   where: {
     *     // ... filter to delete one Singly_linked_nodes
     *   }
     * })
     * 
    **/
    delete<T extends Singly_linked_nodesDeleteArgs>(
      args: SelectSubset<T, Singly_linked_nodesDeleteArgs>
    ): Prisma__Singly_linked_nodesClient<Singly_linked_nodesGetPayload<T>>

    /**
     * Update one Singly_linked_nodes.
     * @param {Singly_linked_nodesUpdateArgs} args - Arguments to update one Singly_linked_nodes.
     * @example
     * // Update one Singly_linked_nodes
     * const singly_linked_nodes = await prisma.singly_linked_nodes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Singly_linked_nodesUpdateArgs>(
      args: SelectSubset<T, Singly_linked_nodesUpdateArgs>
    ): Prisma__Singly_linked_nodesClient<Singly_linked_nodesGetPayload<T>>

    /**
     * Delete zero or more Singly_linked_nodes.
     * @param {Singly_linked_nodesDeleteManyArgs} args - Arguments to filter Singly_linked_nodes to delete.
     * @example
     * // Delete a few Singly_linked_nodes
     * const { count } = await prisma.singly_linked_nodes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Singly_linked_nodesDeleteManyArgs>(
      args?: SelectSubset<T, Singly_linked_nodesDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Singly_linked_nodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Singly_linked_nodesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Singly_linked_nodes
     * const singly_linked_nodes = await prisma.singly_linked_nodes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Singly_linked_nodesUpdateManyArgs>(
      args: SelectSubset<T, Singly_linked_nodesUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Singly_linked_nodes.
     * @param {Singly_linked_nodesUpsertArgs} args - Arguments to update or create a Singly_linked_nodes.
     * @example
     * // Update or create a Singly_linked_nodes
     * const singly_linked_nodes = await prisma.singly_linked_nodes.upsert({
     *   create: {
     *     // ... data to create a Singly_linked_nodes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Singly_linked_nodes we want to update
     *   }
     * })
    **/
    upsert<T extends Singly_linked_nodesUpsertArgs>(
      args: SelectSubset<T, Singly_linked_nodesUpsertArgs>
    ): Prisma__Singly_linked_nodesClient<Singly_linked_nodesGetPayload<T>>

    /**
     * Count the number of Singly_linked_nodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Singly_linked_nodesCountArgs} args - Arguments to filter Singly_linked_nodes to count.
     * @example
     * // Count the number of Singly_linked_nodes
     * const count = await prisma.singly_linked_nodes.count({
     *   where: {
     *     // ... the filter for the Singly_linked_nodes we want to count
     *   }
     * })
    **/
    count<T extends Singly_linked_nodesCountArgs>(
      args?: Subset<T, Singly_linked_nodesCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Singly_linked_nodesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Singly_linked_nodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Singly_linked_nodesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Singly_linked_nodesAggregateArgs>(args: Subset<T, Singly_linked_nodesAggregateArgs>): PrismaPromise<GetSingly_linked_nodesAggregateType<T>>

    /**
     * Group by Singly_linked_nodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Singly_linked_nodesGroupByArgs} args - Group by arguments.
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
      T extends Singly_linked_nodesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Singly_linked_nodesGroupByArgs['orderBy'] }
        : { orderBy?: Singly_linked_nodesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Singly_linked_nodesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSingly_linked_nodesGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Singly_linked_nodes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__Singly_linked_nodesClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    singly_linked_nodes<T extends Singly_linked_nodesArgs= {}>(args?: Subset<T, Singly_linked_nodesArgs>): Prisma__Singly_linked_nodesClient<Singly_linked_nodesGetPayload<T> | Null>;

    other_singly_linked_nodes<T extends Singly_linked_nodes$other_singly_linked_nodesArgs= {}>(args?: Subset<T, Singly_linked_nodes$other_singly_linked_nodesArgs>): PrismaPromise<Array<Singly_linked_nodesGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Singly_linked_nodes base type for findUnique actions
   */
  export type Singly_linked_nodesFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Singly_linked_nodes
     * 
    **/
    select?: Singly_linked_nodesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Singly_linked_nodesInclude | null
    /**
     * Filter, which Singly_linked_nodes to fetch.
     * 
    **/
    where: Singly_linked_nodesWhereUniqueInput
  }

  /**
   * Singly_linked_nodes findUnique
   */
  export interface Singly_linked_nodesFindUniqueArgs extends Singly_linked_nodesFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Singly_linked_nodes findUniqueOrThrow
   */
  export type Singly_linked_nodesFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Singly_linked_nodes
     * 
    **/
    select?: Singly_linked_nodesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Singly_linked_nodesInclude | null
    /**
     * Filter, which Singly_linked_nodes to fetch.
     * 
    **/
    where: Singly_linked_nodesWhereUniqueInput
  }


  /**
   * Singly_linked_nodes base type for findFirst actions
   */
  export type Singly_linked_nodesFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Singly_linked_nodes
     * 
    **/
    select?: Singly_linked_nodesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Singly_linked_nodesInclude | null
    /**
     * Filter, which Singly_linked_nodes to fetch.
     * 
    **/
    where?: Singly_linked_nodesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Singly_linked_nodes to fetch.
     * 
    **/
    orderBy?: Enumerable<Singly_linked_nodesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Singly_linked_nodes.
     * 
    **/
    cursor?: Singly_linked_nodesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Singly_linked_nodes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Singly_linked_nodes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Singly_linked_nodes.
     * 
    **/
    distinct?: Enumerable<Singly_linked_nodesScalarFieldEnum>
  }

  /**
   * Singly_linked_nodes findFirst
   */
  export interface Singly_linked_nodesFindFirstArgs extends Singly_linked_nodesFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Singly_linked_nodes findFirstOrThrow
   */
  export type Singly_linked_nodesFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Singly_linked_nodes
     * 
    **/
    select?: Singly_linked_nodesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Singly_linked_nodesInclude | null
    /**
     * Filter, which Singly_linked_nodes to fetch.
     * 
    **/
    where?: Singly_linked_nodesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Singly_linked_nodes to fetch.
     * 
    **/
    orderBy?: Enumerable<Singly_linked_nodesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Singly_linked_nodes.
     * 
    **/
    cursor?: Singly_linked_nodesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Singly_linked_nodes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Singly_linked_nodes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Singly_linked_nodes.
     * 
    **/
    distinct?: Enumerable<Singly_linked_nodesScalarFieldEnum>
  }


  /**
   * Singly_linked_nodes findMany
   */
  export type Singly_linked_nodesFindManyArgs = {
    /**
     * Select specific fields to fetch from the Singly_linked_nodes
     * 
    **/
    select?: Singly_linked_nodesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Singly_linked_nodesInclude | null
    /**
     * Filter, which Singly_linked_nodes to fetch.
     * 
    **/
    where?: Singly_linked_nodesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Singly_linked_nodes to fetch.
     * 
    **/
    orderBy?: Enumerable<Singly_linked_nodesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Singly_linked_nodes.
     * 
    **/
    cursor?: Singly_linked_nodesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Singly_linked_nodes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Singly_linked_nodes.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Singly_linked_nodesScalarFieldEnum>
  }


  /**
   * Singly_linked_nodes create
   */
  export type Singly_linked_nodesCreateArgs = {
    /**
     * Select specific fields to fetch from the Singly_linked_nodes
     * 
    **/
    select?: Singly_linked_nodesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Singly_linked_nodesInclude | null
    /**
     * The data needed to create a Singly_linked_nodes.
     * 
    **/
    data: XOR<Singly_linked_nodesCreateInput, Singly_linked_nodesUncheckedCreateInput>
  }


  /**
   * Singly_linked_nodes createMany
   */
  export type Singly_linked_nodesCreateManyArgs = {
    /**
     * The data used to create many Singly_linked_nodes.
     * 
    **/
    data: Enumerable<Singly_linked_nodesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Singly_linked_nodes update
   */
  export type Singly_linked_nodesUpdateArgs = {
    /**
     * Select specific fields to fetch from the Singly_linked_nodes
     * 
    **/
    select?: Singly_linked_nodesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Singly_linked_nodesInclude | null
    /**
     * The data needed to update a Singly_linked_nodes.
     * 
    **/
    data: XOR<Singly_linked_nodesUpdateInput, Singly_linked_nodesUncheckedUpdateInput>
    /**
     * Choose, which Singly_linked_nodes to update.
     * 
    **/
    where: Singly_linked_nodesWhereUniqueInput
  }


  /**
   * Singly_linked_nodes updateMany
   */
  export type Singly_linked_nodesUpdateManyArgs = {
    /**
     * The data used to update Singly_linked_nodes.
     * 
    **/
    data: XOR<Singly_linked_nodesUpdateManyMutationInput, Singly_linked_nodesUncheckedUpdateManyInput>
    /**
     * Filter which Singly_linked_nodes to update
     * 
    **/
    where?: Singly_linked_nodesWhereInput
  }


  /**
   * Singly_linked_nodes upsert
   */
  export type Singly_linked_nodesUpsertArgs = {
    /**
     * Select specific fields to fetch from the Singly_linked_nodes
     * 
    **/
    select?: Singly_linked_nodesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Singly_linked_nodesInclude | null
    /**
     * The filter to search for the Singly_linked_nodes to update in case it exists.
     * 
    **/
    where: Singly_linked_nodesWhereUniqueInput
    /**
     * In case the Singly_linked_nodes found by the `where` argument doesn't exist, create a new Singly_linked_nodes with this data.
     * 
    **/
    create: XOR<Singly_linked_nodesCreateInput, Singly_linked_nodesUncheckedCreateInput>
    /**
     * In case the Singly_linked_nodes was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<Singly_linked_nodesUpdateInput, Singly_linked_nodesUncheckedUpdateInput>
  }


  /**
   * Singly_linked_nodes delete
   */
  export type Singly_linked_nodesDeleteArgs = {
    /**
     * Select specific fields to fetch from the Singly_linked_nodes
     * 
    **/
    select?: Singly_linked_nodesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Singly_linked_nodesInclude | null
    /**
     * Filter which Singly_linked_nodes to delete.
     * 
    **/
    where: Singly_linked_nodesWhereUniqueInput
  }


  /**
   * Singly_linked_nodes deleteMany
   */
  export type Singly_linked_nodesDeleteManyArgs = {
    /**
     * Filter which Singly_linked_nodes to delete
     * 
    **/
    where?: Singly_linked_nodesWhereInput
  }


  /**
   * Singly_linked_nodes.other_singly_linked_nodes
   */
  export type Singly_linked_nodes$other_singly_linked_nodesArgs = {
    /**
     * Select specific fields to fetch from the Singly_linked_nodes
     * 
    **/
    select?: Singly_linked_nodesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Singly_linked_nodesInclude | null
    where?: Singly_linked_nodesWhereInput
    orderBy?: Enumerable<Singly_linked_nodesOrderByWithRelationInput>
    cursor?: Singly_linked_nodesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Singly_linked_nodesScalarFieldEnum>
  }


  /**
   * Singly_linked_nodes without action
   */
  export type Singly_linked_nodesArgs = {
    /**
     * Select specific fields to fetch from the Singly_linked_nodes
     * 
    **/
    select?: Singly_linked_nodesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Singly_linked_nodesInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const Doubly_linked_nodesScalarFieldEnum: {
    uuid: 'uuid',
    next_node: 'next_node',
    prev_node: 'prev_node'
  };

  export type Doubly_linked_nodesScalarFieldEnum = (typeof Doubly_linked_nodesScalarFieldEnum)[keyof typeof Doubly_linked_nodesScalarFieldEnum]


  export const ItemsScalarFieldEnum: {
    value: 'value'
  };

  export type ItemsScalarFieldEnum = (typeof ItemsScalarFieldEnum)[keyof typeof ItemsScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const Singly_linked_nodesScalarFieldEnum: {
    uuid: 'uuid',
    next_node: 'next_node'
  };

  export type Singly_linked_nodesScalarFieldEnum = (typeof Singly_linked_nodesScalarFieldEnum)[keyof typeof Singly_linked_nodesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  /**
   * Deep Input Types
   */


  export type Doubly_linked_nodesWhereInput = {
    AND?: Enumerable<Doubly_linked_nodesWhereInput>
    OR?: Enumerable<Doubly_linked_nodesWhereInput>
    NOT?: Enumerable<Doubly_linked_nodesWhereInput>
    uuid?: UuidFilter | string
    next_node?: UuidNullableFilter | string | null
    prev_node?: UuidNullableFilter | string | null
    doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodes?: XOR<Doubly_linked_nodesRelationFilter, Doubly_linked_nodesWhereInput> | null
    other_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodes?: Doubly_linked_nodesListRelationFilter
    doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodes?: XOR<Doubly_linked_nodesRelationFilter, Doubly_linked_nodesWhereInput> | null
    other_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodes?: Doubly_linked_nodesListRelationFilter
  }

  export type Doubly_linked_nodesOrderByWithRelationInput = {
    uuid?: SortOrder
    next_node?: SortOrder
    prev_node?: SortOrder
    doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodes?: Doubly_linked_nodesOrderByWithRelationInput
    other_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodes?: Doubly_linked_nodesOrderByRelationAggregateInput
    doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodes?: Doubly_linked_nodesOrderByWithRelationInput
    other_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodes?: Doubly_linked_nodesOrderByRelationAggregateInput
  }

  export type Doubly_linked_nodesWhereUniqueInput = {
    uuid?: string
  }

  export type Doubly_linked_nodesOrderByWithAggregationInput = {
    uuid?: SortOrder
    next_node?: SortOrder
    prev_node?: SortOrder
    _count?: Doubly_linked_nodesCountOrderByAggregateInput
    _max?: Doubly_linked_nodesMaxOrderByAggregateInput
    _min?: Doubly_linked_nodesMinOrderByAggregateInput
  }

  export type Doubly_linked_nodesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<Doubly_linked_nodesScalarWhereWithAggregatesInput>
    OR?: Enumerable<Doubly_linked_nodesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<Doubly_linked_nodesScalarWhereWithAggregatesInput>
    uuid?: UuidWithAggregatesFilter | string
    next_node?: UuidNullableWithAggregatesFilter | string | null
    prev_node?: UuidNullableWithAggregatesFilter | string | null
  }

  export type ItemsWhereInput = {
    AND?: Enumerable<ItemsWhereInput>
    OR?: Enumerable<ItemsWhereInput>
    NOT?: Enumerable<ItemsWhereInput>
    value?: StringFilter | string
  }

  export type ItemsOrderByWithRelationInput = {
    value?: SortOrder
  }

  export type ItemsWhereUniqueInput = {
    value?: string
  }

  export type ItemsOrderByWithAggregationInput = {
    value?: SortOrder
    _count?: ItemsCountOrderByAggregateInput
    _max?: ItemsMaxOrderByAggregateInput
    _min?: ItemsMinOrderByAggregateInput
  }

  export type ItemsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ItemsScalarWhereWithAggregatesInput>
    OR?: Enumerable<ItemsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ItemsScalarWhereWithAggregatesInput>
    value?: StringWithAggregatesFilter | string
  }

  export type Singly_linked_nodesWhereInput = {
    AND?: Enumerable<Singly_linked_nodesWhereInput>
    OR?: Enumerable<Singly_linked_nodesWhereInput>
    NOT?: Enumerable<Singly_linked_nodesWhereInput>
    uuid?: UuidFilter | string
    next_node?: UuidNullableFilter | string | null
    singly_linked_nodes?: XOR<Singly_linked_nodesRelationFilter, Singly_linked_nodesWhereInput> | null
    other_singly_linked_nodes?: Singly_linked_nodesListRelationFilter
  }

  export type Singly_linked_nodesOrderByWithRelationInput = {
    uuid?: SortOrder
    next_node?: SortOrder
    singly_linked_nodes?: Singly_linked_nodesOrderByWithRelationInput
    other_singly_linked_nodes?: Singly_linked_nodesOrderByRelationAggregateInput
  }

  export type Singly_linked_nodesWhereUniqueInput = {
    uuid?: string
  }

  export type Singly_linked_nodesOrderByWithAggregationInput = {
    uuid?: SortOrder
    next_node?: SortOrder
    _count?: Singly_linked_nodesCountOrderByAggregateInput
    _max?: Singly_linked_nodesMaxOrderByAggregateInput
    _min?: Singly_linked_nodesMinOrderByAggregateInput
  }

  export type Singly_linked_nodesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<Singly_linked_nodesScalarWhereWithAggregatesInput>
    OR?: Enumerable<Singly_linked_nodesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<Singly_linked_nodesScalarWhereWithAggregatesInput>
    uuid?: UuidWithAggregatesFilter | string
    next_node?: UuidNullableWithAggregatesFilter | string | null
  }

  export type Doubly_linked_nodesCreateInput = {
    uuid: string
    doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodes?: Doubly_linked_nodesCreateNestedOneWithoutOther_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput
    other_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodes?: Doubly_linked_nodesCreateNestedManyWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput
    doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodes?: Doubly_linked_nodesCreateNestedOneWithoutOther_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput
    other_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodes?: Doubly_linked_nodesCreateNestedManyWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput
  }

  export type Doubly_linked_nodesUncheckedCreateInput = {
    uuid: string
    next_node?: string | null
    prev_node?: string | null
    other_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodes?: Doubly_linked_nodesUncheckedCreateNestedManyWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput
    other_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodes?: Doubly_linked_nodesUncheckedCreateNestedManyWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput
  }

  export type Doubly_linked_nodesUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodes?: Doubly_linked_nodesUpdateOneWithoutOther_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesNestedInput
    other_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodes?: Doubly_linked_nodesUpdateManyWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesNestedInput
    doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodes?: Doubly_linked_nodesUpdateOneWithoutOther_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesNestedInput
    other_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodes?: Doubly_linked_nodesUpdateManyWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesNestedInput
  }

  export type Doubly_linked_nodesUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    next_node?: NullableStringFieldUpdateOperationsInput | string | null
    prev_node?: NullableStringFieldUpdateOperationsInput | string | null
    other_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodes?: Doubly_linked_nodesUncheckedUpdateManyWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesNestedInput
    other_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodes?: Doubly_linked_nodesUncheckedUpdateManyWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesNestedInput
  }

  export type Doubly_linked_nodesCreateManyInput = {
    uuid: string
    next_node?: string | null
    prev_node?: string | null
  }

  export type Doubly_linked_nodesUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
  }

  export type Doubly_linked_nodesUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    next_node?: NullableStringFieldUpdateOperationsInput | string | null
    prev_node?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ItemsCreateInput = {
    value: string
  }

  export type ItemsUncheckedCreateInput = {
    value: string
  }

  export type ItemsUpdateInput = {
    value?: StringFieldUpdateOperationsInput | string
  }

  export type ItemsUncheckedUpdateInput = {
    value?: StringFieldUpdateOperationsInput | string
  }

  export type ItemsCreateManyInput = {
    value: string
  }

  export type ItemsUpdateManyMutationInput = {
    value?: StringFieldUpdateOperationsInput | string
  }

  export type ItemsUncheckedUpdateManyInput = {
    value?: StringFieldUpdateOperationsInput | string
  }

  export type Singly_linked_nodesCreateInput = {
    uuid: string
    singly_linked_nodes?: Singly_linked_nodesCreateNestedOneWithoutOther_singly_linked_nodesInput
    other_singly_linked_nodes?: Singly_linked_nodesCreateNestedManyWithoutSingly_linked_nodesInput
  }

  export type Singly_linked_nodesUncheckedCreateInput = {
    uuid: string
    next_node?: string | null
    other_singly_linked_nodes?: Singly_linked_nodesUncheckedCreateNestedManyWithoutSingly_linked_nodesInput
  }

  export type Singly_linked_nodesUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    singly_linked_nodes?: Singly_linked_nodesUpdateOneWithoutOther_singly_linked_nodesNestedInput
    other_singly_linked_nodes?: Singly_linked_nodesUpdateManyWithoutSingly_linked_nodesNestedInput
  }

  export type Singly_linked_nodesUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    next_node?: NullableStringFieldUpdateOperationsInput | string | null
    other_singly_linked_nodes?: Singly_linked_nodesUncheckedUpdateManyWithoutSingly_linked_nodesNestedInput
  }

  export type Singly_linked_nodesCreateManyInput = {
    uuid: string
    next_node?: string | null
  }

  export type Singly_linked_nodesUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
  }

  export type Singly_linked_nodesUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    next_node?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UuidFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    mode?: QueryMode
    not?: NestedUuidFilter | string
  }

  export type UuidNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    mode?: QueryMode
    not?: NestedUuidNullableFilter | string | null
  }

  export type Doubly_linked_nodesRelationFilter = {
    is?: Doubly_linked_nodesWhereInput | null
    isNot?: Doubly_linked_nodesWhereInput | null
  }

  export type Doubly_linked_nodesListRelationFilter = {
    every?: Doubly_linked_nodesWhereInput
    some?: Doubly_linked_nodesWhereInput
    none?: Doubly_linked_nodesWhereInput
  }

  export type Doubly_linked_nodesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Doubly_linked_nodesCountOrderByAggregateInput = {
    uuid?: SortOrder
    next_node?: SortOrder
    prev_node?: SortOrder
  }

  export type Doubly_linked_nodesMaxOrderByAggregateInput = {
    uuid?: SortOrder
    next_node?: SortOrder
    prev_node?: SortOrder
  }

  export type Doubly_linked_nodesMinOrderByAggregateInput = {
    uuid?: SortOrder
    next_node?: SortOrder
    prev_node?: SortOrder
  }

  export type UuidWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type UuidNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type ItemsCountOrderByAggregateInput = {
    value?: SortOrder
  }

  export type ItemsMaxOrderByAggregateInput = {
    value?: SortOrder
  }

  export type ItemsMinOrderByAggregateInput = {
    value?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type Singly_linked_nodesRelationFilter = {
    is?: Singly_linked_nodesWhereInput | null
    isNot?: Singly_linked_nodesWhereInput | null
  }

  export type Singly_linked_nodesListRelationFilter = {
    every?: Singly_linked_nodesWhereInput
    some?: Singly_linked_nodesWhereInput
    none?: Singly_linked_nodesWhereInput
  }

  export type Singly_linked_nodesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Singly_linked_nodesCountOrderByAggregateInput = {
    uuid?: SortOrder
    next_node?: SortOrder
  }

  export type Singly_linked_nodesMaxOrderByAggregateInput = {
    uuid?: SortOrder
    next_node?: SortOrder
  }

  export type Singly_linked_nodesMinOrderByAggregateInput = {
    uuid?: SortOrder
    next_node?: SortOrder
  }

  export type Doubly_linked_nodesCreateNestedOneWithoutOther_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput = {
    create?: XOR<Doubly_linked_nodesCreateWithoutOther_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput, Doubly_linked_nodesUncheckedCreateWithoutOther_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput>
    connectOrCreate?: Doubly_linked_nodesCreateOrConnectWithoutOther_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput
    connect?: Doubly_linked_nodesWhereUniqueInput
  }

  export type Doubly_linked_nodesCreateNestedManyWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput = {
    create?: XOR<Enumerable<Doubly_linked_nodesCreateWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput>, Enumerable<Doubly_linked_nodesUncheckedCreateWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput>>
    connectOrCreate?: Enumerable<Doubly_linked_nodesCreateOrConnectWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput>
    createMany?: Doubly_linked_nodesCreateManyDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputEnvelope
    connect?: Enumerable<Doubly_linked_nodesWhereUniqueInput>
  }

  export type Doubly_linked_nodesCreateNestedOneWithoutOther_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput = {
    create?: XOR<Doubly_linked_nodesCreateWithoutOther_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput, Doubly_linked_nodesUncheckedCreateWithoutOther_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput>
    connectOrCreate?: Doubly_linked_nodesCreateOrConnectWithoutOther_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput
    connect?: Doubly_linked_nodesWhereUniqueInput
  }

  export type Doubly_linked_nodesCreateNestedManyWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput = {
    create?: XOR<Enumerable<Doubly_linked_nodesCreateWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput>, Enumerable<Doubly_linked_nodesUncheckedCreateWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput>>
    connectOrCreate?: Enumerable<Doubly_linked_nodesCreateOrConnectWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput>
    createMany?: Doubly_linked_nodesCreateManyDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputEnvelope
    connect?: Enumerable<Doubly_linked_nodesWhereUniqueInput>
  }

  export type Doubly_linked_nodesUncheckedCreateNestedManyWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput = {
    create?: XOR<Enumerable<Doubly_linked_nodesCreateWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput>, Enumerable<Doubly_linked_nodesUncheckedCreateWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput>>
    connectOrCreate?: Enumerable<Doubly_linked_nodesCreateOrConnectWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput>
    createMany?: Doubly_linked_nodesCreateManyDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputEnvelope
    connect?: Enumerable<Doubly_linked_nodesWhereUniqueInput>
  }

  export type Doubly_linked_nodesUncheckedCreateNestedManyWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput = {
    create?: XOR<Enumerable<Doubly_linked_nodesCreateWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput>, Enumerable<Doubly_linked_nodesUncheckedCreateWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput>>
    connectOrCreate?: Enumerable<Doubly_linked_nodesCreateOrConnectWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput>
    createMany?: Doubly_linked_nodesCreateManyDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputEnvelope
    connect?: Enumerable<Doubly_linked_nodesWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type Doubly_linked_nodesUpdateOneWithoutOther_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesNestedInput = {
    create?: XOR<Doubly_linked_nodesCreateWithoutOther_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput, Doubly_linked_nodesUncheckedCreateWithoutOther_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput>
    connectOrCreate?: Doubly_linked_nodesCreateOrConnectWithoutOther_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput
    upsert?: Doubly_linked_nodesUpsertWithoutOther_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput
    disconnect?: boolean
    delete?: boolean
    connect?: Doubly_linked_nodesWhereUniqueInput
    update?: XOR<Doubly_linked_nodesUpdateWithoutOther_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput, Doubly_linked_nodesUncheckedUpdateWithoutOther_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput>
  }

  export type Doubly_linked_nodesUpdateManyWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesNestedInput = {
    create?: XOR<Enumerable<Doubly_linked_nodesCreateWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput>, Enumerable<Doubly_linked_nodesUncheckedCreateWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput>>
    connectOrCreate?: Enumerable<Doubly_linked_nodesCreateOrConnectWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput>
    upsert?: Enumerable<Doubly_linked_nodesUpsertWithWhereUniqueWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput>
    createMany?: Doubly_linked_nodesCreateManyDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputEnvelope
    set?: Enumerable<Doubly_linked_nodesWhereUniqueInput>
    disconnect?: Enumerable<Doubly_linked_nodesWhereUniqueInput>
    delete?: Enumerable<Doubly_linked_nodesWhereUniqueInput>
    connect?: Enumerable<Doubly_linked_nodesWhereUniqueInput>
    update?: Enumerable<Doubly_linked_nodesUpdateWithWhereUniqueWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput>
    updateMany?: Enumerable<Doubly_linked_nodesUpdateManyWithWhereWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput>
    deleteMany?: Enumerable<Doubly_linked_nodesScalarWhereInput>
  }

  export type Doubly_linked_nodesUpdateOneWithoutOther_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesNestedInput = {
    create?: XOR<Doubly_linked_nodesCreateWithoutOther_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput, Doubly_linked_nodesUncheckedCreateWithoutOther_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput>
    connectOrCreate?: Doubly_linked_nodesCreateOrConnectWithoutOther_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput
    upsert?: Doubly_linked_nodesUpsertWithoutOther_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput
    disconnect?: boolean
    delete?: boolean
    connect?: Doubly_linked_nodesWhereUniqueInput
    update?: XOR<Doubly_linked_nodesUpdateWithoutOther_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput, Doubly_linked_nodesUncheckedUpdateWithoutOther_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput>
  }

  export type Doubly_linked_nodesUpdateManyWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesNestedInput = {
    create?: XOR<Enumerable<Doubly_linked_nodesCreateWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput>, Enumerable<Doubly_linked_nodesUncheckedCreateWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput>>
    connectOrCreate?: Enumerable<Doubly_linked_nodesCreateOrConnectWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput>
    upsert?: Enumerable<Doubly_linked_nodesUpsertWithWhereUniqueWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput>
    createMany?: Doubly_linked_nodesCreateManyDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputEnvelope
    set?: Enumerable<Doubly_linked_nodesWhereUniqueInput>
    disconnect?: Enumerable<Doubly_linked_nodesWhereUniqueInput>
    delete?: Enumerable<Doubly_linked_nodesWhereUniqueInput>
    connect?: Enumerable<Doubly_linked_nodesWhereUniqueInput>
    update?: Enumerable<Doubly_linked_nodesUpdateWithWhereUniqueWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput>
    updateMany?: Enumerable<Doubly_linked_nodesUpdateManyWithWhereWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput>
    deleteMany?: Enumerable<Doubly_linked_nodesScalarWhereInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type Doubly_linked_nodesUncheckedUpdateManyWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesNestedInput = {
    create?: XOR<Enumerable<Doubly_linked_nodesCreateWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput>, Enumerable<Doubly_linked_nodesUncheckedCreateWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput>>
    connectOrCreate?: Enumerable<Doubly_linked_nodesCreateOrConnectWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput>
    upsert?: Enumerable<Doubly_linked_nodesUpsertWithWhereUniqueWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput>
    createMany?: Doubly_linked_nodesCreateManyDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputEnvelope
    set?: Enumerable<Doubly_linked_nodesWhereUniqueInput>
    disconnect?: Enumerable<Doubly_linked_nodesWhereUniqueInput>
    delete?: Enumerable<Doubly_linked_nodesWhereUniqueInput>
    connect?: Enumerable<Doubly_linked_nodesWhereUniqueInput>
    update?: Enumerable<Doubly_linked_nodesUpdateWithWhereUniqueWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput>
    updateMany?: Enumerable<Doubly_linked_nodesUpdateManyWithWhereWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput>
    deleteMany?: Enumerable<Doubly_linked_nodesScalarWhereInput>
  }

  export type Doubly_linked_nodesUncheckedUpdateManyWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesNestedInput = {
    create?: XOR<Enumerable<Doubly_linked_nodesCreateWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput>, Enumerable<Doubly_linked_nodesUncheckedCreateWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput>>
    connectOrCreate?: Enumerable<Doubly_linked_nodesCreateOrConnectWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput>
    upsert?: Enumerable<Doubly_linked_nodesUpsertWithWhereUniqueWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput>
    createMany?: Doubly_linked_nodesCreateManyDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputEnvelope
    set?: Enumerable<Doubly_linked_nodesWhereUniqueInput>
    disconnect?: Enumerable<Doubly_linked_nodesWhereUniqueInput>
    delete?: Enumerable<Doubly_linked_nodesWhereUniqueInput>
    connect?: Enumerable<Doubly_linked_nodesWhereUniqueInput>
    update?: Enumerable<Doubly_linked_nodesUpdateWithWhereUniqueWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput>
    updateMany?: Enumerable<Doubly_linked_nodesUpdateManyWithWhereWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput>
    deleteMany?: Enumerable<Doubly_linked_nodesScalarWhereInput>
  }

  export type Singly_linked_nodesCreateNestedOneWithoutOther_singly_linked_nodesInput = {
    create?: XOR<Singly_linked_nodesCreateWithoutOther_singly_linked_nodesInput, Singly_linked_nodesUncheckedCreateWithoutOther_singly_linked_nodesInput>
    connectOrCreate?: Singly_linked_nodesCreateOrConnectWithoutOther_singly_linked_nodesInput
    connect?: Singly_linked_nodesWhereUniqueInput
  }

  export type Singly_linked_nodesCreateNestedManyWithoutSingly_linked_nodesInput = {
    create?: XOR<Enumerable<Singly_linked_nodesCreateWithoutSingly_linked_nodesInput>, Enumerable<Singly_linked_nodesUncheckedCreateWithoutSingly_linked_nodesInput>>
    connectOrCreate?: Enumerable<Singly_linked_nodesCreateOrConnectWithoutSingly_linked_nodesInput>
    createMany?: Singly_linked_nodesCreateManySingly_linked_nodesInputEnvelope
    connect?: Enumerable<Singly_linked_nodesWhereUniqueInput>
  }

  export type Singly_linked_nodesUncheckedCreateNestedManyWithoutSingly_linked_nodesInput = {
    create?: XOR<Enumerable<Singly_linked_nodesCreateWithoutSingly_linked_nodesInput>, Enumerable<Singly_linked_nodesUncheckedCreateWithoutSingly_linked_nodesInput>>
    connectOrCreate?: Enumerable<Singly_linked_nodesCreateOrConnectWithoutSingly_linked_nodesInput>
    createMany?: Singly_linked_nodesCreateManySingly_linked_nodesInputEnvelope
    connect?: Enumerable<Singly_linked_nodesWhereUniqueInput>
  }

  export type Singly_linked_nodesUpdateOneWithoutOther_singly_linked_nodesNestedInput = {
    create?: XOR<Singly_linked_nodesCreateWithoutOther_singly_linked_nodesInput, Singly_linked_nodesUncheckedCreateWithoutOther_singly_linked_nodesInput>
    connectOrCreate?: Singly_linked_nodesCreateOrConnectWithoutOther_singly_linked_nodesInput
    upsert?: Singly_linked_nodesUpsertWithoutOther_singly_linked_nodesInput
    disconnect?: boolean
    delete?: boolean
    connect?: Singly_linked_nodesWhereUniqueInput
    update?: XOR<Singly_linked_nodesUpdateWithoutOther_singly_linked_nodesInput, Singly_linked_nodesUncheckedUpdateWithoutOther_singly_linked_nodesInput>
  }

  export type Singly_linked_nodesUpdateManyWithoutSingly_linked_nodesNestedInput = {
    create?: XOR<Enumerable<Singly_linked_nodesCreateWithoutSingly_linked_nodesInput>, Enumerable<Singly_linked_nodesUncheckedCreateWithoutSingly_linked_nodesInput>>
    connectOrCreate?: Enumerable<Singly_linked_nodesCreateOrConnectWithoutSingly_linked_nodesInput>
    upsert?: Enumerable<Singly_linked_nodesUpsertWithWhereUniqueWithoutSingly_linked_nodesInput>
    createMany?: Singly_linked_nodesCreateManySingly_linked_nodesInputEnvelope
    set?: Enumerable<Singly_linked_nodesWhereUniqueInput>
    disconnect?: Enumerable<Singly_linked_nodesWhereUniqueInput>
    delete?: Enumerable<Singly_linked_nodesWhereUniqueInput>
    connect?: Enumerable<Singly_linked_nodesWhereUniqueInput>
    update?: Enumerable<Singly_linked_nodesUpdateWithWhereUniqueWithoutSingly_linked_nodesInput>
    updateMany?: Enumerable<Singly_linked_nodesUpdateManyWithWhereWithoutSingly_linked_nodesInput>
    deleteMany?: Enumerable<Singly_linked_nodesScalarWhereInput>
  }

  export type Singly_linked_nodesUncheckedUpdateManyWithoutSingly_linked_nodesNestedInput = {
    create?: XOR<Enumerable<Singly_linked_nodesCreateWithoutSingly_linked_nodesInput>, Enumerable<Singly_linked_nodesUncheckedCreateWithoutSingly_linked_nodesInput>>
    connectOrCreate?: Enumerable<Singly_linked_nodesCreateOrConnectWithoutSingly_linked_nodesInput>
    upsert?: Enumerable<Singly_linked_nodesUpsertWithWhereUniqueWithoutSingly_linked_nodesInput>
    createMany?: Singly_linked_nodesCreateManySingly_linked_nodesInputEnvelope
    set?: Enumerable<Singly_linked_nodesWhereUniqueInput>
    disconnect?: Enumerable<Singly_linked_nodesWhereUniqueInput>
    delete?: Enumerable<Singly_linked_nodesWhereUniqueInput>
    connect?: Enumerable<Singly_linked_nodesWhereUniqueInput>
    update?: Enumerable<Singly_linked_nodesUpdateWithWhereUniqueWithoutSingly_linked_nodesInput>
    updateMany?: Enumerable<Singly_linked_nodesUpdateManyWithWhereWithoutSingly_linked_nodesInput>
    deleteMany?: Enumerable<Singly_linked_nodesScalarWhereInput>
  }

  export type NestedUuidFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    not?: NestedUuidFilter | string
  }

  export type NestedUuidNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    not?: NestedUuidNullableFilter | string | null
  }

  export type NestedUuidWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    not?: NestedUuidWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedUuidNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    not?: NestedUuidNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type Doubly_linked_nodesCreateWithoutOther_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput = {
    uuid: string
    doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodes?: Doubly_linked_nodesCreateNestedOneWithoutOther_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput
    doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodes?: Doubly_linked_nodesCreateNestedOneWithoutOther_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput
    other_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodes?: Doubly_linked_nodesCreateNestedManyWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput
  }

  export type Doubly_linked_nodesUncheckedCreateWithoutOther_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput = {
    uuid: string
    next_node?: string | null
    prev_node?: string | null
    other_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodes?: Doubly_linked_nodesUncheckedCreateNestedManyWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput
  }

  export type Doubly_linked_nodesCreateOrConnectWithoutOther_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput = {
    where: Doubly_linked_nodesWhereUniqueInput
    create: XOR<Doubly_linked_nodesCreateWithoutOther_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput, Doubly_linked_nodesUncheckedCreateWithoutOther_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput>
  }

  export type Doubly_linked_nodesCreateWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput = {
    uuid: string
    other_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodes?: Doubly_linked_nodesCreateNestedManyWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput
    doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodes?: Doubly_linked_nodesCreateNestedOneWithoutOther_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput
    other_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodes?: Doubly_linked_nodesCreateNestedManyWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput
  }

  export type Doubly_linked_nodesUncheckedCreateWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput = {
    uuid: string
    prev_node?: string | null
    other_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodes?: Doubly_linked_nodesUncheckedCreateNestedManyWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput
    other_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodes?: Doubly_linked_nodesUncheckedCreateNestedManyWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput
  }

  export type Doubly_linked_nodesCreateOrConnectWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput = {
    where: Doubly_linked_nodesWhereUniqueInput
    create: XOR<Doubly_linked_nodesCreateWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput, Doubly_linked_nodesUncheckedCreateWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput>
  }

  export type Doubly_linked_nodesCreateManyDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputEnvelope = {
    data: Enumerable<Doubly_linked_nodesCreateManyDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput>
    skipDuplicates?: boolean
  }

  export type Doubly_linked_nodesCreateWithoutOther_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput = {
    uuid: string
    doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodes?: Doubly_linked_nodesCreateNestedOneWithoutOther_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput
    other_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodes?: Doubly_linked_nodesCreateNestedManyWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput
    doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodes?: Doubly_linked_nodesCreateNestedOneWithoutOther_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput
  }

  export type Doubly_linked_nodesUncheckedCreateWithoutOther_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput = {
    uuid: string
    next_node?: string | null
    prev_node?: string | null
    other_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodes?: Doubly_linked_nodesUncheckedCreateNestedManyWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput
  }

  export type Doubly_linked_nodesCreateOrConnectWithoutOther_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput = {
    where: Doubly_linked_nodesWhereUniqueInput
    create: XOR<Doubly_linked_nodesCreateWithoutOther_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput, Doubly_linked_nodesUncheckedCreateWithoutOther_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput>
  }

  export type Doubly_linked_nodesCreateWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput = {
    uuid: string
    doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodes?: Doubly_linked_nodesCreateNestedOneWithoutOther_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput
    other_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodes?: Doubly_linked_nodesCreateNestedManyWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput
    other_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodes?: Doubly_linked_nodesCreateNestedManyWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput
  }

  export type Doubly_linked_nodesUncheckedCreateWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput = {
    uuid: string
    next_node?: string | null
    other_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodes?: Doubly_linked_nodesUncheckedCreateNestedManyWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput
    other_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodes?: Doubly_linked_nodesUncheckedCreateNestedManyWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput
  }

  export type Doubly_linked_nodesCreateOrConnectWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput = {
    where: Doubly_linked_nodesWhereUniqueInput
    create: XOR<Doubly_linked_nodesCreateWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput, Doubly_linked_nodesUncheckedCreateWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput>
  }

  export type Doubly_linked_nodesCreateManyDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputEnvelope = {
    data: Enumerable<Doubly_linked_nodesCreateManyDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput>
    skipDuplicates?: boolean
  }

  export type Doubly_linked_nodesUpsertWithoutOther_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput = {
    update: XOR<Doubly_linked_nodesUpdateWithoutOther_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput, Doubly_linked_nodesUncheckedUpdateWithoutOther_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput>
    create: XOR<Doubly_linked_nodesCreateWithoutOther_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput, Doubly_linked_nodesUncheckedCreateWithoutOther_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput>
  }

  export type Doubly_linked_nodesUpdateWithoutOther_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodes?: Doubly_linked_nodesUpdateOneWithoutOther_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesNestedInput
    doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodes?: Doubly_linked_nodesUpdateOneWithoutOther_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesNestedInput
    other_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodes?: Doubly_linked_nodesUpdateManyWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesNestedInput
  }

  export type Doubly_linked_nodesUncheckedUpdateWithoutOther_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    next_node?: NullableStringFieldUpdateOperationsInput | string | null
    prev_node?: NullableStringFieldUpdateOperationsInput | string | null
    other_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodes?: Doubly_linked_nodesUncheckedUpdateManyWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesNestedInput
  }

  export type Doubly_linked_nodesUpsertWithWhereUniqueWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput = {
    where: Doubly_linked_nodesWhereUniqueInput
    update: XOR<Doubly_linked_nodesUpdateWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput, Doubly_linked_nodesUncheckedUpdateWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput>
    create: XOR<Doubly_linked_nodesCreateWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput, Doubly_linked_nodesUncheckedCreateWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput>
  }

  export type Doubly_linked_nodesUpdateWithWhereUniqueWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput = {
    where: Doubly_linked_nodesWhereUniqueInput
    data: XOR<Doubly_linked_nodesUpdateWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput, Doubly_linked_nodesUncheckedUpdateWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput>
  }

  export type Doubly_linked_nodesUpdateManyWithWhereWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput = {
    where: Doubly_linked_nodesScalarWhereInput
    data: XOR<Doubly_linked_nodesUpdateManyMutationInput, Doubly_linked_nodesUncheckedUpdateManyWithoutOther_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput>
  }

  export type Doubly_linked_nodesScalarWhereInput = {
    AND?: Enumerable<Doubly_linked_nodesScalarWhereInput>
    OR?: Enumerable<Doubly_linked_nodesScalarWhereInput>
    NOT?: Enumerable<Doubly_linked_nodesScalarWhereInput>
    uuid?: UuidFilter | string
    next_node?: UuidNullableFilter | string | null
    prev_node?: UuidNullableFilter | string | null
  }

  export type Doubly_linked_nodesUpsertWithoutOther_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput = {
    update: XOR<Doubly_linked_nodesUpdateWithoutOther_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput, Doubly_linked_nodesUncheckedUpdateWithoutOther_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput>
    create: XOR<Doubly_linked_nodesCreateWithoutOther_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput, Doubly_linked_nodesUncheckedCreateWithoutOther_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput>
  }

  export type Doubly_linked_nodesUpdateWithoutOther_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodes?: Doubly_linked_nodesUpdateOneWithoutOther_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesNestedInput
    other_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodes?: Doubly_linked_nodesUpdateManyWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesNestedInput
    doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodes?: Doubly_linked_nodesUpdateOneWithoutOther_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesNestedInput
  }

  export type Doubly_linked_nodesUncheckedUpdateWithoutOther_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    next_node?: NullableStringFieldUpdateOperationsInput | string | null
    prev_node?: NullableStringFieldUpdateOperationsInput | string | null
    other_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodes?: Doubly_linked_nodesUncheckedUpdateManyWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesNestedInput
  }

  export type Doubly_linked_nodesUpsertWithWhereUniqueWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput = {
    where: Doubly_linked_nodesWhereUniqueInput
    update: XOR<Doubly_linked_nodesUpdateWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput, Doubly_linked_nodesUncheckedUpdateWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput>
    create: XOR<Doubly_linked_nodesCreateWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput, Doubly_linked_nodesUncheckedCreateWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput>
  }

  export type Doubly_linked_nodesUpdateWithWhereUniqueWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput = {
    where: Doubly_linked_nodesWhereUniqueInput
    data: XOR<Doubly_linked_nodesUpdateWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput, Doubly_linked_nodesUncheckedUpdateWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput>
  }

  export type Doubly_linked_nodesUpdateManyWithWhereWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput = {
    where: Doubly_linked_nodesScalarWhereInput
    data: XOR<Doubly_linked_nodesUpdateManyMutationInput, Doubly_linked_nodesUncheckedUpdateManyWithoutOther_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput>
  }

  export type Singly_linked_nodesCreateWithoutOther_singly_linked_nodesInput = {
    uuid: string
    singly_linked_nodes?: Singly_linked_nodesCreateNestedOneWithoutOther_singly_linked_nodesInput
  }

  export type Singly_linked_nodesUncheckedCreateWithoutOther_singly_linked_nodesInput = {
    uuid: string
    next_node?: string | null
  }

  export type Singly_linked_nodesCreateOrConnectWithoutOther_singly_linked_nodesInput = {
    where: Singly_linked_nodesWhereUniqueInput
    create: XOR<Singly_linked_nodesCreateWithoutOther_singly_linked_nodesInput, Singly_linked_nodesUncheckedCreateWithoutOther_singly_linked_nodesInput>
  }

  export type Singly_linked_nodesCreateWithoutSingly_linked_nodesInput = {
    uuid: string
    other_singly_linked_nodes?: Singly_linked_nodesCreateNestedManyWithoutSingly_linked_nodesInput
  }

  export type Singly_linked_nodesUncheckedCreateWithoutSingly_linked_nodesInput = {
    uuid: string
    other_singly_linked_nodes?: Singly_linked_nodesUncheckedCreateNestedManyWithoutSingly_linked_nodesInput
  }

  export type Singly_linked_nodesCreateOrConnectWithoutSingly_linked_nodesInput = {
    where: Singly_linked_nodesWhereUniqueInput
    create: XOR<Singly_linked_nodesCreateWithoutSingly_linked_nodesInput, Singly_linked_nodesUncheckedCreateWithoutSingly_linked_nodesInput>
  }

  export type Singly_linked_nodesCreateManySingly_linked_nodesInputEnvelope = {
    data: Enumerable<Singly_linked_nodesCreateManySingly_linked_nodesInput>
    skipDuplicates?: boolean
  }

  export type Singly_linked_nodesUpsertWithoutOther_singly_linked_nodesInput = {
    update: XOR<Singly_linked_nodesUpdateWithoutOther_singly_linked_nodesInput, Singly_linked_nodesUncheckedUpdateWithoutOther_singly_linked_nodesInput>
    create: XOR<Singly_linked_nodesCreateWithoutOther_singly_linked_nodesInput, Singly_linked_nodesUncheckedCreateWithoutOther_singly_linked_nodesInput>
  }

  export type Singly_linked_nodesUpdateWithoutOther_singly_linked_nodesInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    singly_linked_nodes?: Singly_linked_nodesUpdateOneWithoutOther_singly_linked_nodesNestedInput
  }

  export type Singly_linked_nodesUncheckedUpdateWithoutOther_singly_linked_nodesInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    next_node?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Singly_linked_nodesUpsertWithWhereUniqueWithoutSingly_linked_nodesInput = {
    where: Singly_linked_nodesWhereUniqueInput
    update: XOR<Singly_linked_nodesUpdateWithoutSingly_linked_nodesInput, Singly_linked_nodesUncheckedUpdateWithoutSingly_linked_nodesInput>
    create: XOR<Singly_linked_nodesCreateWithoutSingly_linked_nodesInput, Singly_linked_nodesUncheckedCreateWithoutSingly_linked_nodesInput>
  }

  export type Singly_linked_nodesUpdateWithWhereUniqueWithoutSingly_linked_nodesInput = {
    where: Singly_linked_nodesWhereUniqueInput
    data: XOR<Singly_linked_nodesUpdateWithoutSingly_linked_nodesInput, Singly_linked_nodesUncheckedUpdateWithoutSingly_linked_nodesInput>
  }

  export type Singly_linked_nodesUpdateManyWithWhereWithoutSingly_linked_nodesInput = {
    where: Singly_linked_nodesScalarWhereInput
    data: XOR<Singly_linked_nodesUpdateManyMutationInput, Singly_linked_nodesUncheckedUpdateManyWithoutOther_singly_linked_nodesInput>
  }

  export type Singly_linked_nodesScalarWhereInput = {
    AND?: Enumerable<Singly_linked_nodesScalarWhereInput>
    OR?: Enumerable<Singly_linked_nodesScalarWhereInput>
    NOT?: Enumerable<Singly_linked_nodesScalarWhereInput>
    uuid?: UuidFilter | string
    next_node?: UuidNullableFilter | string | null
  }

  export type Doubly_linked_nodesCreateManyDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput = {
    uuid: string
    prev_node?: string | null
  }

  export type Doubly_linked_nodesCreateManyDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput = {
    uuid: string
    next_node?: string | null
  }

  export type Doubly_linked_nodesUpdateWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    other_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodes?: Doubly_linked_nodesUpdateManyWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesNestedInput
    doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodes?: Doubly_linked_nodesUpdateOneWithoutOther_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesNestedInput
    other_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodes?: Doubly_linked_nodesUpdateManyWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesNestedInput
  }

  export type Doubly_linked_nodesUncheckedUpdateWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    prev_node?: NullableStringFieldUpdateOperationsInput | string | null
    other_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodes?: Doubly_linked_nodesUncheckedUpdateManyWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesNestedInput
    other_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodes?: Doubly_linked_nodesUncheckedUpdateManyWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesNestedInput
  }

  export type Doubly_linked_nodesUncheckedUpdateManyWithoutOther_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    prev_node?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Doubly_linked_nodesUpdateWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodes?: Doubly_linked_nodesUpdateOneWithoutOther_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesNestedInput
    other_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodes?: Doubly_linked_nodesUpdateManyWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesNestedInput
    other_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodes?: Doubly_linked_nodesUpdateManyWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesNestedInput
  }

  export type Doubly_linked_nodesUncheckedUpdateWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    next_node?: NullableStringFieldUpdateOperationsInput | string | null
    other_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodes?: Doubly_linked_nodesUncheckedUpdateManyWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesNestedInput
    other_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodes?: Doubly_linked_nodesUncheckedUpdateManyWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesNestedInput
  }

  export type Doubly_linked_nodesUncheckedUpdateManyWithoutOther_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    next_node?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Singly_linked_nodesCreateManySingly_linked_nodesInput = {
    uuid: string
  }

  export type Singly_linked_nodesUpdateWithoutSingly_linked_nodesInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    other_singly_linked_nodes?: Singly_linked_nodesUpdateManyWithoutSingly_linked_nodesNestedInput
  }

  export type Singly_linked_nodesUncheckedUpdateWithoutSingly_linked_nodesInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    other_singly_linked_nodes?: Singly_linked_nodesUncheckedUpdateManyWithoutSingly_linked_nodesNestedInput
  }

  export type Singly_linked_nodesUncheckedUpdateManyWithoutOther_singly_linked_nodesInput = {
    uuid?: StringFieldUpdateOperationsInput | string
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

type Buffer = Omit<Uint8Array, 'set'>
