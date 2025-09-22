
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Notes
 * 
 */
export type Notes = $Result.DefaultSelection<Prisma.$NotesPayload>
/**
 * Model ApprovedReview
 * 
 */
export type ApprovedReview = $Result.DefaultSelection<Prisma.$ApprovedReviewPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model Listing
 * 
 */
export type Listing = $Result.DefaultSelection<Prisma.$ListingPayload>
/**
 * Model PropertyRules
 * 
 */
export type PropertyRules = $Result.DefaultSelection<Prisma.$PropertyRulesPayload>
/**
 * Model PropertyPolicies
 * 
 */
export type PropertyPolicies = $Result.DefaultSelection<Prisma.$PropertyPoliciesPayload>
/**
 * Model PropertyAmenities
 * 
 */
export type PropertyAmenities = $Result.DefaultSelection<Prisma.$PropertyAmenitiesPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model ReviewCategoryScore
 * 
 */
export type ReviewCategoryScore = $Result.DefaultSelection<Prisma.$ReviewCategoryScorePayload>
/**
 * Model ReviewRawIngest
 * 
 */
export type ReviewRawIngest = $Result.DefaultSelection<Prisma.$ReviewRawIngestPayload>
/**
 * Model FollowUps
 * 
 */
export type FollowUps = $Result.DefaultSelection<Prisma.$FollowUpsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Color: {
  RED: 'RED',
  BLUE: 'BLUE',
  GREEN: 'GREEN',
  YELLOW: 'YELLOW',
  PURPLE: 'PURPLE',
  ORANGE: 'ORANGE',
  PINK: 'PINK',
  BROWN: 'BROWN',
  BLACK: 'BLACK',
  WHITE: 'WHITE'
};

export type Color = (typeof Color)[keyof typeof Color]


export const ReviewType: {
  guest_to_host: 'guest_to_host',
  host_to_guest: 'host_to_guest'
};

export type ReviewType = (typeof ReviewType)[keyof typeof ReviewType]


export const ReviewStatus: {
  PUBLISHED: 'PUBLISHED',
  HIDDEN: 'HIDDEN'
};

export type ReviewStatus = (typeof ReviewStatus)[keyof typeof ReviewStatus]


export const Channel: {
  airbnb: 'airbnb',
  vrbo: 'vrbo',
  booking: 'booking',
  direct: 'direct',
  google: 'google',
  hostaway: 'hostaway',
  expedia: 'expedia'
};

export type Channel = (typeof Channel)[keyof typeof Channel]

}

export type Color = $Enums.Color

export const Color: typeof $Enums.Color

export type ReviewType = $Enums.ReviewType

export const ReviewType: typeof $Enums.ReviewType

export type ReviewStatus = $Enums.ReviewStatus

export const ReviewStatus: typeof $Enums.ReviewStatus

export type Channel = $Enums.Channel

export const Channel: typeof $Enums.Channel

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Notes
 * const notes = await prisma.notes.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * const prisma = new PrismaClient()
   * // Fetch zero or more Notes
   * const notes = await prisma.notes.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.notes`: Exposes CRUD operations for the **Notes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notes
    * const notes = await prisma.notes.findMany()
    * ```
    */
  get notes(): Prisma.NotesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.approvedReview`: Exposes CRUD operations for the **ApprovedReview** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApprovedReviews
    * const approvedReviews = await prisma.approvedReview.findMany()
    * ```
    */
  get approvedReview(): Prisma.ApprovedReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.listing`: Exposes CRUD operations for the **Listing** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Listings
    * const listings = await prisma.listing.findMany()
    * ```
    */
  get listing(): Prisma.ListingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.propertyRules`: Exposes CRUD operations for the **PropertyRules** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PropertyRules
    * const propertyRules = await prisma.propertyRules.findMany()
    * ```
    */
  get propertyRules(): Prisma.PropertyRulesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.propertyPolicies`: Exposes CRUD operations for the **PropertyPolicies** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PropertyPolicies
    * const propertyPolicies = await prisma.propertyPolicies.findMany()
    * ```
    */
  get propertyPolicies(): Prisma.PropertyPoliciesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.propertyAmenities`: Exposes CRUD operations for the **PropertyAmenities** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PropertyAmenities
    * const propertyAmenities = await prisma.propertyAmenities.findMany()
    * ```
    */
  get propertyAmenities(): Prisma.PropertyAmenitiesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reviewCategoryScore`: Exposes CRUD operations for the **ReviewCategoryScore** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReviewCategoryScores
    * const reviewCategoryScores = await prisma.reviewCategoryScore.findMany()
    * ```
    */
  get reviewCategoryScore(): Prisma.ReviewCategoryScoreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reviewRawIngest`: Exposes CRUD operations for the **ReviewRawIngest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReviewRawIngests
    * const reviewRawIngests = await prisma.reviewRawIngest.findMany()
    * ```
    */
  get reviewRawIngest(): Prisma.ReviewRawIngestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.followUps`: Exposes CRUD operations for the **FollowUps** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FollowUps
    * const followUps = await prisma.followUps.findMany()
    * ```
    */
  get followUps(): Prisma.FollowUpsDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.15.0
   * Query Engine version: 85179d7826409ee107a6ba334b5e305ae3fba9fb
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Notes: 'Notes',
    ApprovedReview: 'ApprovedReview',
    Review: 'Review',
    Listing: 'Listing',
    PropertyRules: 'PropertyRules',
    PropertyPolicies: 'PropertyPolicies',
    PropertyAmenities: 'PropertyAmenities',
    Category: 'Category',
    ReviewCategoryScore: 'ReviewCategoryScore',
    ReviewRawIngest: 'ReviewRawIngest',
    FollowUps: 'FollowUps'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "notes" | "approvedReview" | "review" | "listing" | "propertyRules" | "propertyPolicies" | "propertyAmenities" | "category" | "reviewCategoryScore" | "reviewRawIngest" | "followUps"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Notes: {
        payload: Prisma.$NotesPayload<ExtArgs>
        fields: Prisma.NotesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotesPayload>
          }
          findFirst: {
            args: Prisma.NotesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotesPayload>
          }
          findMany: {
            args: Prisma.NotesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotesPayload>[]
          }
          create: {
            args: Prisma.NotesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotesPayload>
          }
          createMany: {
            args: Prisma.NotesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NotesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotesPayload>
          }
          update: {
            args: Prisma.NotesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotesPayload>
          }
          deleteMany: {
            args: Prisma.NotesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NotesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotesPayload>
          }
          aggregate: {
            args: Prisma.NotesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotes>
          }
          groupBy: {
            args: Prisma.NotesGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotesGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotesCountArgs<ExtArgs>
            result: $Utils.Optional<NotesCountAggregateOutputType> | number
          }
        }
      }
      ApprovedReview: {
        payload: Prisma.$ApprovedReviewPayload<ExtArgs>
        fields: Prisma.ApprovedReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApprovedReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovedReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApprovedReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovedReviewPayload>
          }
          findFirst: {
            args: Prisma.ApprovedReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovedReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApprovedReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovedReviewPayload>
          }
          findMany: {
            args: Prisma.ApprovedReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovedReviewPayload>[]
          }
          create: {
            args: Prisma.ApprovedReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovedReviewPayload>
          }
          createMany: {
            args: Prisma.ApprovedReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ApprovedReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovedReviewPayload>
          }
          update: {
            args: Prisma.ApprovedReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovedReviewPayload>
          }
          deleteMany: {
            args: Prisma.ApprovedReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApprovedReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ApprovedReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovedReviewPayload>
          }
          aggregate: {
            args: Prisma.ApprovedReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApprovedReview>
          }
          groupBy: {
            args: Prisma.ApprovedReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApprovedReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApprovedReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ApprovedReviewCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      Listing: {
        payload: Prisma.$ListingPayload<ExtArgs>
        fields: Prisma.ListingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ListingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ListingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>
          }
          findFirst: {
            args: Prisma.ListingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ListingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>
          }
          findMany: {
            args: Prisma.ListingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>[]
          }
          create: {
            args: Prisma.ListingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>
          }
          createMany: {
            args: Prisma.ListingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ListingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>
          }
          update: {
            args: Prisma.ListingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>
          }
          deleteMany: {
            args: Prisma.ListingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ListingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ListingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>
          }
          aggregate: {
            args: Prisma.ListingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateListing>
          }
          groupBy: {
            args: Prisma.ListingGroupByArgs<ExtArgs>
            result: $Utils.Optional<ListingGroupByOutputType>[]
          }
          count: {
            args: Prisma.ListingCountArgs<ExtArgs>
            result: $Utils.Optional<ListingCountAggregateOutputType> | number
          }
        }
      }
      PropertyRules: {
        payload: Prisma.$PropertyRulesPayload<ExtArgs>
        fields: Prisma.PropertyRulesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropertyRulesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyRulesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropertyRulesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyRulesPayload>
          }
          findFirst: {
            args: Prisma.PropertyRulesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyRulesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropertyRulesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyRulesPayload>
          }
          findMany: {
            args: Prisma.PropertyRulesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyRulesPayload>[]
          }
          create: {
            args: Prisma.PropertyRulesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyRulesPayload>
          }
          createMany: {
            args: Prisma.PropertyRulesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PropertyRulesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyRulesPayload>
          }
          update: {
            args: Prisma.PropertyRulesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyRulesPayload>
          }
          deleteMany: {
            args: Prisma.PropertyRulesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropertyRulesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PropertyRulesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyRulesPayload>
          }
          aggregate: {
            args: Prisma.PropertyRulesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePropertyRules>
          }
          groupBy: {
            args: Prisma.PropertyRulesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropertyRulesGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropertyRulesCountArgs<ExtArgs>
            result: $Utils.Optional<PropertyRulesCountAggregateOutputType> | number
          }
        }
      }
      PropertyPolicies: {
        payload: Prisma.$PropertyPoliciesPayload<ExtArgs>
        fields: Prisma.PropertyPoliciesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropertyPoliciesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPoliciesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropertyPoliciesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPoliciesPayload>
          }
          findFirst: {
            args: Prisma.PropertyPoliciesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPoliciesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropertyPoliciesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPoliciesPayload>
          }
          findMany: {
            args: Prisma.PropertyPoliciesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPoliciesPayload>[]
          }
          create: {
            args: Prisma.PropertyPoliciesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPoliciesPayload>
          }
          createMany: {
            args: Prisma.PropertyPoliciesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PropertyPoliciesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPoliciesPayload>
          }
          update: {
            args: Prisma.PropertyPoliciesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPoliciesPayload>
          }
          deleteMany: {
            args: Prisma.PropertyPoliciesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropertyPoliciesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PropertyPoliciesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPoliciesPayload>
          }
          aggregate: {
            args: Prisma.PropertyPoliciesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePropertyPolicies>
          }
          groupBy: {
            args: Prisma.PropertyPoliciesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropertyPoliciesGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropertyPoliciesCountArgs<ExtArgs>
            result: $Utils.Optional<PropertyPoliciesCountAggregateOutputType> | number
          }
        }
      }
      PropertyAmenities: {
        payload: Prisma.$PropertyAmenitiesPayload<ExtArgs>
        fields: Prisma.PropertyAmenitiesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropertyAmenitiesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyAmenitiesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropertyAmenitiesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyAmenitiesPayload>
          }
          findFirst: {
            args: Prisma.PropertyAmenitiesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyAmenitiesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropertyAmenitiesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyAmenitiesPayload>
          }
          findMany: {
            args: Prisma.PropertyAmenitiesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyAmenitiesPayload>[]
          }
          create: {
            args: Prisma.PropertyAmenitiesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyAmenitiesPayload>
          }
          createMany: {
            args: Prisma.PropertyAmenitiesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PropertyAmenitiesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyAmenitiesPayload>
          }
          update: {
            args: Prisma.PropertyAmenitiesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyAmenitiesPayload>
          }
          deleteMany: {
            args: Prisma.PropertyAmenitiesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropertyAmenitiesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PropertyAmenitiesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyAmenitiesPayload>
          }
          aggregate: {
            args: Prisma.PropertyAmenitiesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePropertyAmenities>
          }
          groupBy: {
            args: Prisma.PropertyAmenitiesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropertyAmenitiesGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropertyAmenitiesCountArgs<ExtArgs>
            result: $Utils.Optional<PropertyAmenitiesCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      ReviewCategoryScore: {
        payload: Prisma.$ReviewCategoryScorePayload<ExtArgs>
        fields: Prisma.ReviewCategoryScoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewCategoryScoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewCategoryScorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewCategoryScoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewCategoryScorePayload>
          }
          findFirst: {
            args: Prisma.ReviewCategoryScoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewCategoryScorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewCategoryScoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewCategoryScorePayload>
          }
          findMany: {
            args: Prisma.ReviewCategoryScoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewCategoryScorePayload>[]
          }
          create: {
            args: Prisma.ReviewCategoryScoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewCategoryScorePayload>
          }
          createMany: {
            args: Prisma.ReviewCategoryScoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReviewCategoryScoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewCategoryScorePayload>
          }
          update: {
            args: Prisma.ReviewCategoryScoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewCategoryScorePayload>
          }
          deleteMany: {
            args: Prisma.ReviewCategoryScoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewCategoryScoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReviewCategoryScoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewCategoryScorePayload>
          }
          aggregate: {
            args: Prisma.ReviewCategoryScoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReviewCategoryScore>
          }
          groupBy: {
            args: Prisma.ReviewCategoryScoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewCategoryScoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCategoryScoreCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCategoryScoreCountAggregateOutputType> | number
          }
        }
      }
      ReviewRawIngest: {
        payload: Prisma.$ReviewRawIngestPayload<ExtArgs>
        fields: Prisma.ReviewRawIngestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewRawIngestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewRawIngestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewRawIngestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewRawIngestPayload>
          }
          findFirst: {
            args: Prisma.ReviewRawIngestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewRawIngestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewRawIngestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewRawIngestPayload>
          }
          findMany: {
            args: Prisma.ReviewRawIngestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewRawIngestPayload>[]
          }
          create: {
            args: Prisma.ReviewRawIngestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewRawIngestPayload>
          }
          createMany: {
            args: Prisma.ReviewRawIngestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReviewRawIngestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewRawIngestPayload>
          }
          update: {
            args: Prisma.ReviewRawIngestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewRawIngestPayload>
          }
          deleteMany: {
            args: Prisma.ReviewRawIngestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewRawIngestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReviewRawIngestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewRawIngestPayload>
          }
          aggregate: {
            args: Prisma.ReviewRawIngestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReviewRawIngest>
          }
          groupBy: {
            args: Prisma.ReviewRawIngestGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewRawIngestGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewRawIngestCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewRawIngestCountAggregateOutputType> | number
          }
        }
      }
      FollowUps: {
        payload: Prisma.$FollowUpsPayload<ExtArgs>
        fields: Prisma.FollowUpsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FollowUpsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowUpsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FollowUpsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowUpsPayload>
          }
          findFirst: {
            args: Prisma.FollowUpsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowUpsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FollowUpsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowUpsPayload>
          }
          findMany: {
            args: Prisma.FollowUpsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowUpsPayload>[]
          }
          create: {
            args: Prisma.FollowUpsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowUpsPayload>
          }
          createMany: {
            args: Prisma.FollowUpsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FollowUpsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowUpsPayload>
          }
          update: {
            args: Prisma.FollowUpsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowUpsPayload>
          }
          deleteMany: {
            args: Prisma.FollowUpsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FollowUpsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FollowUpsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowUpsPayload>
          }
          aggregate: {
            args: Prisma.FollowUpsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFollowUps>
          }
          groupBy: {
            args: Prisma.FollowUpsGroupByArgs<ExtArgs>
            result: $Utils.Optional<FollowUpsGroupByOutputType>[]
          }
          count: {
            args: Prisma.FollowUpsCountArgs<ExtArgs>
            result: $Utils.Optional<FollowUpsCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    notes?: NotesOmit
    approvedReview?: ApprovedReviewOmit
    review?: ReviewOmit
    listing?: ListingOmit
    propertyRules?: PropertyRulesOmit
    propertyPolicies?: PropertyPoliciesOmit
    propertyAmenities?: PropertyAmenitiesOmit
    category?: CategoryOmit
    reviewCategoryScore?: ReviewCategoryScoreOmit
    reviewRawIngest?: ReviewRawIngestOmit
    followUps?: FollowUpsOmit
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
   * Count Type ReviewCountOutputType
   */

  export type ReviewCountOutputType = {
    ReviewCategoryScore: number
    FollowUps: number
  }

  export type ReviewCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ReviewCategoryScore?: boolean | ReviewCountOutputTypeCountReviewCategoryScoreArgs
    FollowUps?: boolean | ReviewCountOutputTypeCountFollowUpsArgs
  }

  // Custom InputTypes
  /**
   * ReviewCountOutputType without action
   */
  export type ReviewCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewCountOutputType
     */
    select?: ReviewCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReviewCountOutputType without action
   */
  export type ReviewCountOutputTypeCountReviewCategoryScoreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewCategoryScoreWhereInput
  }

  /**
   * ReviewCountOutputType without action
   */
  export type ReviewCountOutputTypeCountFollowUpsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowUpsWhereInput
  }


  /**
   * Count Type ListingCountOutputType
   */

  export type ListingCountOutputType = {
    reviews: number
    rules: number
    policies: number
    amenities: number
  }

  export type ListingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | ListingCountOutputTypeCountReviewsArgs
    rules?: boolean | ListingCountOutputTypeCountRulesArgs
    policies?: boolean | ListingCountOutputTypeCountPoliciesArgs
    amenities?: boolean | ListingCountOutputTypeCountAmenitiesArgs
  }

  // Custom InputTypes
  /**
   * ListingCountOutputType without action
   */
  export type ListingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingCountOutputType
     */
    select?: ListingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ListingCountOutputType without action
   */
  export type ListingCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * ListingCountOutputType without action
   */
  export type ListingCountOutputTypeCountRulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyRulesWhereInput
  }

  /**
   * ListingCountOutputType without action
   */
  export type ListingCountOutputTypeCountPoliciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyPoliciesWhereInput
  }

  /**
   * ListingCountOutputType without action
   */
  export type ListingCountOutputTypeCountAmenitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyAmenitiesWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    scores: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scores?: boolean | CategoryCountOutputTypeCountScoresArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountScoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewCategoryScoreWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Notes
   */

  export type AggregateNotes = {
    _count: NotesCountAggregateOutputType | null
    _avg: NotesAvgAggregateOutputType | null
    _sum: NotesSumAggregateOutputType | null
    _min: NotesMinAggregateOutputType | null
    _max: NotesMaxAggregateOutputType | null
  }

  export type NotesAvgAggregateOutputType = {
    id: number | null
  }

  export type NotesSumAggregateOutputType = {
    id: number | null
  }

  export type NotesMinAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    color: $Enums.Color | null
    createdAt: Date | null
    updatedAt: Date | null
    completed: boolean | null
  }

  export type NotesMaxAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    color: $Enums.Color | null
    createdAt: Date | null
    updatedAt: Date | null
    completed: boolean | null
  }

  export type NotesCountAggregateOutputType = {
    id: number
    title: number
    content: number
    color: number
    createdAt: number
    updatedAt: number
    completed: number
    _all: number
  }


  export type NotesAvgAggregateInputType = {
    id?: true
  }

  export type NotesSumAggregateInputType = {
    id?: true
  }

  export type NotesMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    color?: true
    createdAt?: true
    updatedAt?: true
    completed?: true
  }

  export type NotesMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    color?: true
    createdAt?: true
    updatedAt?: true
    completed?: true
  }

  export type NotesCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    color?: true
    createdAt?: true
    updatedAt?: true
    completed?: true
    _all?: true
  }

  export type NotesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notes to aggregate.
     */
    where?: NotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NotesOrderByWithRelationInput | NotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notes
    **/
    _count?: true | NotesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotesMaxAggregateInputType
  }

  export type GetNotesAggregateType<T extends NotesAggregateArgs> = {
        [P in keyof T & keyof AggregateNotes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotes[P]>
      : GetScalarType<T[P], AggregateNotes[P]>
  }




  export type NotesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotesWhereInput
    orderBy?: NotesOrderByWithAggregationInput | NotesOrderByWithAggregationInput[]
    by: NotesScalarFieldEnum[] | NotesScalarFieldEnum
    having?: NotesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotesCountAggregateInputType | true
    _avg?: NotesAvgAggregateInputType
    _sum?: NotesSumAggregateInputType
    _min?: NotesMinAggregateInputType
    _max?: NotesMaxAggregateInputType
  }

  export type NotesGroupByOutputType = {
    id: number
    title: string
    content: string
    color: $Enums.Color
    createdAt: Date
    updatedAt: Date
    completed: boolean
    _count: NotesCountAggregateOutputType | null
    _avg: NotesAvgAggregateOutputType | null
    _sum: NotesSumAggregateOutputType | null
    _min: NotesMinAggregateOutputType | null
    _max: NotesMaxAggregateOutputType | null
  }

  type GetNotesGroupByPayload<T extends NotesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotesGroupByOutputType[P]>
            : GetScalarType<T[P], NotesGroupByOutputType[P]>
        }
      >
    >


  export type NotesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    color?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    completed?: boolean
  }, ExtArgs["result"]["notes"]>



  export type NotesSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    color?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    completed?: boolean
  }

  export type NotesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "color" | "createdAt" | "updatedAt" | "completed", ExtArgs["result"]["notes"]>

  export type $NotesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notes"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      content: string
      color: $Enums.Color
      createdAt: Date
      updatedAt: Date
      completed: boolean
    }, ExtArgs["result"]["notes"]>
    composites: {}
  }

  type NotesGetPayload<S extends boolean | null | undefined | NotesDefaultArgs> = $Result.GetResult<Prisma.$NotesPayload, S>

  type NotesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotesCountAggregateInputType | true
    }

  export interface NotesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notes'], meta: { name: 'Notes' } }
    /**
     * Find zero or one Notes that matches the filter.
     * @param {NotesFindUniqueArgs} args - Arguments to find a Notes
     * @example
     * // Get one Notes
     * const notes = await prisma.notes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotesFindUniqueArgs>(args: SelectSubset<T, NotesFindUniqueArgs<ExtArgs>>): Prisma__NotesClient<$Result.GetResult<Prisma.$NotesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotesFindUniqueOrThrowArgs} args - Arguments to find a Notes
     * @example
     * // Get one Notes
     * const notes = await prisma.notes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotesFindUniqueOrThrowArgs>(args: SelectSubset<T, NotesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotesClient<$Result.GetResult<Prisma.$NotesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotesFindFirstArgs} args - Arguments to find a Notes
     * @example
     * // Get one Notes
     * const notes = await prisma.notes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotesFindFirstArgs>(args?: SelectSubset<T, NotesFindFirstArgs<ExtArgs>>): Prisma__NotesClient<$Result.GetResult<Prisma.$NotesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotesFindFirstOrThrowArgs} args - Arguments to find a Notes
     * @example
     * // Get one Notes
     * const notes = await prisma.notes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotesFindFirstOrThrowArgs>(args?: SelectSubset<T, NotesFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotesClient<$Result.GetResult<Prisma.$NotesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notes
     * const notes = await prisma.notes.findMany()
     * 
     * // Get first 10 Notes
     * const notes = await prisma.notes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notesWithIdOnly = await prisma.notes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotesFindManyArgs>(args?: SelectSubset<T, NotesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notes.
     * @param {NotesCreateArgs} args - Arguments to create a Notes.
     * @example
     * // Create one Notes
     * const Notes = await prisma.notes.create({
     *   data: {
     *     // ... data to create a Notes
     *   }
     * })
     * 
     */
    create<T extends NotesCreateArgs>(args: SelectSubset<T, NotesCreateArgs<ExtArgs>>): Prisma__NotesClient<$Result.GetResult<Prisma.$NotesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notes.
     * @param {NotesCreateManyArgs} args - Arguments to create many Notes.
     * @example
     * // Create many Notes
     * const notes = await prisma.notes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotesCreateManyArgs>(args?: SelectSubset<T, NotesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Notes.
     * @param {NotesDeleteArgs} args - Arguments to delete one Notes.
     * @example
     * // Delete one Notes
     * const Notes = await prisma.notes.delete({
     *   where: {
     *     // ... filter to delete one Notes
     *   }
     * })
     * 
     */
    delete<T extends NotesDeleteArgs>(args: SelectSubset<T, NotesDeleteArgs<ExtArgs>>): Prisma__NotesClient<$Result.GetResult<Prisma.$NotesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notes.
     * @param {NotesUpdateArgs} args - Arguments to update one Notes.
     * @example
     * // Update one Notes
     * const notes = await prisma.notes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotesUpdateArgs>(args: SelectSubset<T, NotesUpdateArgs<ExtArgs>>): Prisma__NotesClient<$Result.GetResult<Prisma.$NotesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notes.
     * @param {NotesDeleteManyArgs} args - Arguments to filter Notes to delete.
     * @example
     * // Delete a few Notes
     * const { count } = await prisma.notes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotesDeleteManyArgs>(args?: SelectSubset<T, NotesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notes
     * const notes = await prisma.notes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotesUpdateManyArgs>(args: SelectSubset<T, NotesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notes.
     * @param {NotesUpsertArgs} args - Arguments to update or create a Notes.
     * @example
     * // Update or create a Notes
     * const notes = await prisma.notes.upsert({
     *   create: {
     *     // ... data to create a Notes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notes we want to update
     *   }
     * })
     */
    upsert<T extends NotesUpsertArgs>(args: SelectSubset<T, NotesUpsertArgs<ExtArgs>>): Prisma__NotesClient<$Result.GetResult<Prisma.$NotesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotesCountArgs} args - Arguments to filter Notes to count.
     * @example
     * // Count the number of Notes
     * const count = await prisma.notes.count({
     *   where: {
     *     // ... the filter for the Notes we want to count
     *   }
     * })
    **/
    count<T extends NotesCountArgs>(
      args?: Subset<T, NotesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotesAggregateArgs>(args: Subset<T, NotesAggregateArgs>): Prisma.PrismaPromise<GetNotesAggregateType<T>>

    /**
     * Group by Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotesGroupByArgs} args - Group by arguments.
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
      T extends NotesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotesGroupByArgs['orderBy'] }
        : { orderBy?: NotesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notes model
   */
  readonly fields: NotesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Notes model
   */
  interface NotesFieldRefs {
    readonly id: FieldRef<"Notes", 'Int'>
    readonly title: FieldRef<"Notes", 'String'>
    readonly content: FieldRef<"Notes", 'String'>
    readonly color: FieldRef<"Notes", 'Color'>
    readonly createdAt: FieldRef<"Notes", 'DateTime'>
    readonly updatedAt: FieldRef<"Notes", 'DateTime'>
    readonly completed: FieldRef<"Notes", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Notes findUnique
   */
  export type NotesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notes
     */
    omit?: NotesOmit<ExtArgs> | null
    /**
     * Filter, which Notes to fetch.
     */
    where: NotesWhereUniqueInput
  }

  /**
   * Notes findUniqueOrThrow
   */
  export type NotesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notes
     */
    omit?: NotesOmit<ExtArgs> | null
    /**
     * Filter, which Notes to fetch.
     */
    where: NotesWhereUniqueInput
  }

  /**
   * Notes findFirst
   */
  export type NotesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notes
     */
    omit?: NotesOmit<ExtArgs> | null
    /**
     * Filter, which Notes to fetch.
     */
    where?: NotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NotesOrderByWithRelationInput | NotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notes.
     */
    cursor?: NotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notes.
     */
    distinct?: NotesScalarFieldEnum | NotesScalarFieldEnum[]
  }

  /**
   * Notes findFirstOrThrow
   */
  export type NotesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notes
     */
    omit?: NotesOmit<ExtArgs> | null
    /**
     * Filter, which Notes to fetch.
     */
    where?: NotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NotesOrderByWithRelationInput | NotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notes.
     */
    cursor?: NotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notes.
     */
    distinct?: NotesScalarFieldEnum | NotesScalarFieldEnum[]
  }

  /**
   * Notes findMany
   */
  export type NotesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notes
     */
    omit?: NotesOmit<ExtArgs> | null
    /**
     * Filter, which Notes to fetch.
     */
    where?: NotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NotesOrderByWithRelationInput | NotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notes.
     */
    cursor?: NotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    distinct?: NotesScalarFieldEnum | NotesScalarFieldEnum[]
  }

  /**
   * Notes create
   */
  export type NotesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notes
     */
    omit?: NotesOmit<ExtArgs> | null
    /**
     * The data needed to create a Notes.
     */
    data: XOR<NotesCreateInput, NotesUncheckedCreateInput>
  }

  /**
   * Notes createMany
   */
  export type NotesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notes.
     */
    data: NotesCreateManyInput | NotesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notes update
   */
  export type NotesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notes
     */
    omit?: NotesOmit<ExtArgs> | null
    /**
     * The data needed to update a Notes.
     */
    data: XOR<NotesUpdateInput, NotesUncheckedUpdateInput>
    /**
     * Choose, which Notes to update.
     */
    where: NotesWhereUniqueInput
  }

  /**
   * Notes updateMany
   */
  export type NotesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notes.
     */
    data: XOR<NotesUpdateManyMutationInput, NotesUncheckedUpdateManyInput>
    /**
     * Filter which Notes to update
     */
    where?: NotesWhereInput
    /**
     * Limit how many Notes to update.
     */
    limit?: number
  }

  /**
   * Notes upsert
   */
  export type NotesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notes
     */
    omit?: NotesOmit<ExtArgs> | null
    /**
     * The filter to search for the Notes to update in case it exists.
     */
    where: NotesWhereUniqueInput
    /**
     * In case the Notes found by the `where` argument doesn't exist, create a new Notes with this data.
     */
    create: XOR<NotesCreateInput, NotesUncheckedCreateInput>
    /**
     * In case the Notes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotesUpdateInput, NotesUncheckedUpdateInput>
  }

  /**
   * Notes delete
   */
  export type NotesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notes
     */
    omit?: NotesOmit<ExtArgs> | null
    /**
     * Filter which Notes to delete.
     */
    where: NotesWhereUniqueInput
  }

  /**
   * Notes deleteMany
   */
  export type NotesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notes to delete
     */
    where?: NotesWhereInput
    /**
     * Limit how many Notes to delete.
     */
    limit?: number
  }

  /**
   * Notes without action
   */
  export type NotesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notes
     */
    omit?: NotesOmit<ExtArgs> | null
  }


  /**
   * Model ApprovedReview
   */

  export type AggregateApprovedReview = {
    _count: ApprovedReviewCountAggregateOutputType | null
    _avg: ApprovedReviewAvgAggregateOutputType | null
    _sum: ApprovedReviewSumAggregateOutputType | null
    _min: ApprovedReviewMinAggregateOutputType | null
    _max: ApprovedReviewMaxAggregateOutputType | null
  }

  export type ApprovedReviewAvgAggregateOutputType = {
    reviewId: number | null
  }

  export type ApprovedReviewSumAggregateOutputType = {
    reviewId: number | null
  }

  export type ApprovedReviewMinAggregateOutputType = {
    name: string | null
    status: $Enums.ReviewStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    reviewId: number | null
    approvalNotes: string | null
    approvedBy: string | null
    approvedAt: Date | null
    approved: boolean | null
  }

  export type ApprovedReviewMaxAggregateOutputType = {
    name: string | null
    status: $Enums.ReviewStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    reviewId: number | null
    approvalNotes: string | null
    approvedBy: string | null
    approvedAt: Date | null
    approved: boolean | null
  }

  export type ApprovedReviewCountAggregateOutputType = {
    name: number
    status: number
    createdAt: number
    updatedAt: number
    reviewId: number
    approvalNotes: number
    approvedBy: number
    approvedAt: number
    approved: number
    _all: number
  }


  export type ApprovedReviewAvgAggregateInputType = {
    reviewId?: true
  }

  export type ApprovedReviewSumAggregateInputType = {
    reviewId?: true
  }

  export type ApprovedReviewMinAggregateInputType = {
    name?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    reviewId?: true
    approvalNotes?: true
    approvedBy?: true
    approvedAt?: true
    approved?: true
  }

  export type ApprovedReviewMaxAggregateInputType = {
    name?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    reviewId?: true
    approvalNotes?: true
    approvedBy?: true
    approvedAt?: true
    approved?: true
  }

  export type ApprovedReviewCountAggregateInputType = {
    name?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    reviewId?: true
    approvalNotes?: true
    approvedBy?: true
    approvedAt?: true
    approved?: true
    _all?: true
  }

  export type ApprovedReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApprovedReview to aggregate.
     */
    where?: ApprovedReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApprovedReviews to fetch.
     */
    orderBy?: ApprovedReviewOrderByWithRelationInput | ApprovedReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApprovedReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApprovedReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApprovedReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApprovedReviews
    **/
    _count?: true | ApprovedReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApprovedReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApprovedReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApprovedReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApprovedReviewMaxAggregateInputType
  }

  export type GetApprovedReviewAggregateType<T extends ApprovedReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateApprovedReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApprovedReview[P]>
      : GetScalarType<T[P], AggregateApprovedReview[P]>
  }




  export type ApprovedReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApprovedReviewWhereInput
    orderBy?: ApprovedReviewOrderByWithAggregationInput | ApprovedReviewOrderByWithAggregationInput[]
    by: ApprovedReviewScalarFieldEnum[] | ApprovedReviewScalarFieldEnum
    having?: ApprovedReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApprovedReviewCountAggregateInputType | true
    _avg?: ApprovedReviewAvgAggregateInputType
    _sum?: ApprovedReviewSumAggregateInputType
    _min?: ApprovedReviewMinAggregateInputType
    _max?: ApprovedReviewMaxAggregateInputType
  }

  export type ApprovedReviewGroupByOutputType = {
    name: string
    status: $Enums.ReviewStatus
    createdAt: Date
    updatedAt: Date
    reviewId: number
    approvalNotes: string | null
    approvedBy: string | null
    approvedAt: Date | null
    approved: boolean
    _count: ApprovedReviewCountAggregateOutputType | null
    _avg: ApprovedReviewAvgAggregateOutputType | null
    _sum: ApprovedReviewSumAggregateOutputType | null
    _min: ApprovedReviewMinAggregateOutputType | null
    _max: ApprovedReviewMaxAggregateOutputType | null
  }

  type GetApprovedReviewGroupByPayload<T extends ApprovedReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApprovedReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApprovedReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApprovedReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ApprovedReviewGroupByOutputType[P]>
        }
      >
    >


  export type ApprovedReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reviewId?: boolean
    approvalNotes?: boolean
    approvedBy?: boolean
    approvedAt?: boolean
    approved?: boolean
    reviews?: boolean | ReviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["approvedReview"]>



  export type ApprovedReviewSelectScalar = {
    name?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reviewId?: boolean
    approvalNotes?: boolean
    approvedBy?: boolean
    approvedAt?: boolean
    approved?: boolean
  }

  export type ApprovedReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"name" | "status" | "createdAt" | "updatedAt" | "reviewId" | "approvalNotes" | "approvedBy" | "approvedAt" | "approved", ExtArgs["result"]["approvedReview"]>
  export type ApprovedReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | ReviewDefaultArgs<ExtArgs>
  }

  export type $ApprovedReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApprovedReview"
    objects: {
      reviews: Prisma.$ReviewPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      name: string
      status: $Enums.ReviewStatus
      createdAt: Date
      updatedAt: Date
      reviewId: number
      approvalNotes: string | null
      approvedBy: string | null
      approvedAt: Date | null
      approved: boolean
    }, ExtArgs["result"]["approvedReview"]>
    composites: {}
  }

  type ApprovedReviewGetPayload<S extends boolean | null | undefined | ApprovedReviewDefaultArgs> = $Result.GetResult<Prisma.$ApprovedReviewPayload, S>

  type ApprovedReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApprovedReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApprovedReviewCountAggregateInputType | true
    }

  export interface ApprovedReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApprovedReview'], meta: { name: 'ApprovedReview' } }
    /**
     * Find zero or one ApprovedReview that matches the filter.
     * @param {ApprovedReviewFindUniqueArgs} args - Arguments to find a ApprovedReview
     * @example
     * // Get one ApprovedReview
     * const approvedReview = await prisma.approvedReview.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApprovedReviewFindUniqueArgs>(args: SelectSubset<T, ApprovedReviewFindUniqueArgs<ExtArgs>>): Prisma__ApprovedReviewClient<$Result.GetResult<Prisma.$ApprovedReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApprovedReview that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApprovedReviewFindUniqueOrThrowArgs} args - Arguments to find a ApprovedReview
     * @example
     * // Get one ApprovedReview
     * const approvedReview = await prisma.approvedReview.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApprovedReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ApprovedReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApprovedReviewClient<$Result.GetResult<Prisma.$ApprovedReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApprovedReview that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovedReviewFindFirstArgs} args - Arguments to find a ApprovedReview
     * @example
     * // Get one ApprovedReview
     * const approvedReview = await prisma.approvedReview.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApprovedReviewFindFirstArgs>(args?: SelectSubset<T, ApprovedReviewFindFirstArgs<ExtArgs>>): Prisma__ApprovedReviewClient<$Result.GetResult<Prisma.$ApprovedReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApprovedReview that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovedReviewFindFirstOrThrowArgs} args - Arguments to find a ApprovedReview
     * @example
     * // Get one ApprovedReview
     * const approvedReview = await prisma.approvedReview.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApprovedReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ApprovedReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApprovedReviewClient<$Result.GetResult<Prisma.$ApprovedReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApprovedReviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovedReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApprovedReviews
     * const approvedReviews = await prisma.approvedReview.findMany()
     * 
     * // Get first 10 ApprovedReviews
     * const approvedReviews = await prisma.approvedReview.findMany({ take: 10 })
     * 
     * // Only select the `name`
     * const approvedReviewWithNameOnly = await prisma.approvedReview.findMany({ select: { name: true } })
     * 
     */
    findMany<T extends ApprovedReviewFindManyArgs>(args?: SelectSubset<T, ApprovedReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApprovedReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApprovedReview.
     * @param {ApprovedReviewCreateArgs} args - Arguments to create a ApprovedReview.
     * @example
     * // Create one ApprovedReview
     * const ApprovedReview = await prisma.approvedReview.create({
     *   data: {
     *     // ... data to create a ApprovedReview
     *   }
     * })
     * 
     */
    create<T extends ApprovedReviewCreateArgs>(args: SelectSubset<T, ApprovedReviewCreateArgs<ExtArgs>>): Prisma__ApprovedReviewClient<$Result.GetResult<Prisma.$ApprovedReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApprovedReviews.
     * @param {ApprovedReviewCreateManyArgs} args - Arguments to create many ApprovedReviews.
     * @example
     * // Create many ApprovedReviews
     * const approvedReview = await prisma.approvedReview.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApprovedReviewCreateManyArgs>(args?: SelectSubset<T, ApprovedReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ApprovedReview.
     * @param {ApprovedReviewDeleteArgs} args - Arguments to delete one ApprovedReview.
     * @example
     * // Delete one ApprovedReview
     * const ApprovedReview = await prisma.approvedReview.delete({
     *   where: {
     *     // ... filter to delete one ApprovedReview
     *   }
     * })
     * 
     */
    delete<T extends ApprovedReviewDeleteArgs>(args: SelectSubset<T, ApprovedReviewDeleteArgs<ExtArgs>>): Prisma__ApprovedReviewClient<$Result.GetResult<Prisma.$ApprovedReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApprovedReview.
     * @param {ApprovedReviewUpdateArgs} args - Arguments to update one ApprovedReview.
     * @example
     * // Update one ApprovedReview
     * const approvedReview = await prisma.approvedReview.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApprovedReviewUpdateArgs>(args: SelectSubset<T, ApprovedReviewUpdateArgs<ExtArgs>>): Prisma__ApprovedReviewClient<$Result.GetResult<Prisma.$ApprovedReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApprovedReviews.
     * @param {ApprovedReviewDeleteManyArgs} args - Arguments to filter ApprovedReviews to delete.
     * @example
     * // Delete a few ApprovedReviews
     * const { count } = await prisma.approvedReview.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApprovedReviewDeleteManyArgs>(args?: SelectSubset<T, ApprovedReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApprovedReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovedReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApprovedReviews
     * const approvedReview = await prisma.approvedReview.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApprovedReviewUpdateManyArgs>(args: SelectSubset<T, ApprovedReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ApprovedReview.
     * @param {ApprovedReviewUpsertArgs} args - Arguments to update or create a ApprovedReview.
     * @example
     * // Update or create a ApprovedReview
     * const approvedReview = await prisma.approvedReview.upsert({
     *   create: {
     *     // ... data to create a ApprovedReview
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApprovedReview we want to update
     *   }
     * })
     */
    upsert<T extends ApprovedReviewUpsertArgs>(args: SelectSubset<T, ApprovedReviewUpsertArgs<ExtArgs>>): Prisma__ApprovedReviewClient<$Result.GetResult<Prisma.$ApprovedReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApprovedReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovedReviewCountArgs} args - Arguments to filter ApprovedReviews to count.
     * @example
     * // Count the number of ApprovedReviews
     * const count = await prisma.approvedReview.count({
     *   where: {
     *     // ... the filter for the ApprovedReviews we want to count
     *   }
     * })
    **/
    count<T extends ApprovedReviewCountArgs>(
      args?: Subset<T, ApprovedReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApprovedReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApprovedReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovedReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApprovedReviewAggregateArgs>(args: Subset<T, ApprovedReviewAggregateArgs>): Prisma.PrismaPromise<GetApprovedReviewAggregateType<T>>

    /**
     * Group by ApprovedReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovedReviewGroupByArgs} args - Group by arguments.
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
      T extends ApprovedReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApprovedReviewGroupByArgs['orderBy'] }
        : { orderBy?: ApprovedReviewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ApprovedReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApprovedReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApprovedReview model
   */
  readonly fields: ApprovedReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApprovedReview.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApprovedReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reviews<T extends ReviewDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReviewDefaultArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ApprovedReview model
   */
  interface ApprovedReviewFieldRefs {
    readonly name: FieldRef<"ApprovedReview", 'String'>
    readonly status: FieldRef<"ApprovedReview", 'ReviewStatus'>
    readonly createdAt: FieldRef<"ApprovedReview", 'DateTime'>
    readonly updatedAt: FieldRef<"ApprovedReview", 'DateTime'>
    readonly reviewId: FieldRef<"ApprovedReview", 'Int'>
    readonly approvalNotes: FieldRef<"ApprovedReview", 'String'>
    readonly approvedBy: FieldRef<"ApprovedReview", 'String'>
    readonly approvedAt: FieldRef<"ApprovedReview", 'DateTime'>
    readonly approved: FieldRef<"ApprovedReview", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ApprovedReview findUnique
   */
  export type ApprovedReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovedReview
     */
    select?: ApprovedReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovedReview
     */
    omit?: ApprovedReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovedReviewInclude<ExtArgs> | null
    /**
     * Filter, which ApprovedReview to fetch.
     */
    where: ApprovedReviewWhereUniqueInput
  }

  /**
   * ApprovedReview findUniqueOrThrow
   */
  export type ApprovedReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovedReview
     */
    select?: ApprovedReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovedReview
     */
    omit?: ApprovedReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovedReviewInclude<ExtArgs> | null
    /**
     * Filter, which ApprovedReview to fetch.
     */
    where: ApprovedReviewWhereUniqueInput
  }

  /**
   * ApprovedReview findFirst
   */
  export type ApprovedReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovedReview
     */
    select?: ApprovedReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovedReview
     */
    omit?: ApprovedReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovedReviewInclude<ExtArgs> | null
    /**
     * Filter, which ApprovedReview to fetch.
     */
    where?: ApprovedReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApprovedReviews to fetch.
     */
    orderBy?: ApprovedReviewOrderByWithRelationInput | ApprovedReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApprovedReviews.
     */
    cursor?: ApprovedReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApprovedReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApprovedReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApprovedReviews.
     */
    distinct?: ApprovedReviewScalarFieldEnum | ApprovedReviewScalarFieldEnum[]
  }

  /**
   * ApprovedReview findFirstOrThrow
   */
  export type ApprovedReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovedReview
     */
    select?: ApprovedReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovedReview
     */
    omit?: ApprovedReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovedReviewInclude<ExtArgs> | null
    /**
     * Filter, which ApprovedReview to fetch.
     */
    where?: ApprovedReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApprovedReviews to fetch.
     */
    orderBy?: ApprovedReviewOrderByWithRelationInput | ApprovedReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApprovedReviews.
     */
    cursor?: ApprovedReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApprovedReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApprovedReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApprovedReviews.
     */
    distinct?: ApprovedReviewScalarFieldEnum | ApprovedReviewScalarFieldEnum[]
  }

  /**
   * ApprovedReview findMany
   */
  export type ApprovedReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovedReview
     */
    select?: ApprovedReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovedReview
     */
    omit?: ApprovedReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovedReviewInclude<ExtArgs> | null
    /**
     * Filter, which ApprovedReviews to fetch.
     */
    where?: ApprovedReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApprovedReviews to fetch.
     */
    orderBy?: ApprovedReviewOrderByWithRelationInput | ApprovedReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApprovedReviews.
     */
    cursor?: ApprovedReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApprovedReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApprovedReviews.
     */
    skip?: number
    distinct?: ApprovedReviewScalarFieldEnum | ApprovedReviewScalarFieldEnum[]
  }

  /**
   * ApprovedReview create
   */
  export type ApprovedReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovedReview
     */
    select?: ApprovedReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovedReview
     */
    omit?: ApprovedReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovedReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a ApprovedReview.
     */
    data: XOR<ApprovedReviewCreateInput, ApprovedReviewUncheckedCreateInput>
  }

  /**
   * ApprovedReview createMany
   */
  export type ApprovedReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApprovedReviews.
     */
    data: ApprovedReviewCreateManyInput | ApprovedReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApprovedReview update
   */
  export type ApprovedReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovedReview
     */
    select?: ApprovedReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovedReview
     */
    omit?: ApprovedReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovedReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a ApprovedReview.
     */
    data: XOR<ApprovedReviewUpdateInput, ApprovedReviewUncheckedUpdateInput>
    /**
     * Choose, which ApprovedReview to update.
     */
    where: ApprovedReviewWhereUniqueInput
  }

  /**
   * ApprovedReview updateMany
   */
  export type ApprovedReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApprovedReviews.
     */
    data: XOR<ApprovedReviewUpdateManyMutationInput, ApprovedReviewUncheckedUpdateManyInput>
    /**
     * Filter which ApprovedReviews to update
     */
    where?: ApprovedReviewWhereInput
    /**
     * Limit how many ApprovedReviews to update.
     */
    limit?: number
  }

  /**
   * ApprovedReview upsert
   */
  export type ApprovedReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovedReview
     */
    select?: ApprovedReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovedReview
     */
    omit?: ApprovedReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovedReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the ApprovedReview to update in case it exists.
     */
    where: ApprovedReviewWhereUniqueInput
    /**
     * In case the ApprovedReview found by the `where` argument doesn't exist, create a new ApprovedReview with this data.
     */
    create: XOR<ApprovedReviewCreateInput, ApprovedReviewUncheckedCreateInput>
    /**
     * In case the ApprovedReview was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApprovedReviewUpdateInput, ApprovedReviewUncheckedUpdateInput>
  }

  /**
   * ApprovedReview delete
   */
  export type ApprovedReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovedReview
     */
    select?: ApprovedReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovedReview
     */
    omit?: ApprovedReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovedReviewInclude<ExtArgs> | null
    /**
     * Filter which ApprovedReview to delete.
     */
    where: ApprovedReviewWhereUniqueInput
  }

  /**
   * ApprovedReview deleteMany
   */
  export type ApprovedReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApprovedReviews to delete
     */
    where?: ApprovedReviewWhereInput
    /**
     * Limit how many ApprovedReviews to delete.
     */
    limit?: number
  }

  /**
   * ApprovedReview without action
   */
  export type ApprovedReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovedReview
     */
    select?: ApprovedReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovedReview
     */
    omit?: ApprovedReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovedReviewInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    id: number | null
    listingId: number | null
    rating10: Decimal | null
    overall5: Decimal | null
  }

  export type ReviewSumAggregateOutputType = {
    id: number | null
    listingId: number | null
    rating10: Decimal | null
    overall5: Decimal | null
  }

  export type ReviewMinAggregateOutputType = {
    id: number | null
    sourceSystem: string | null
    sourceReviewId: string | null
    channel: $Enums.Channel | null
    listingId: number | null
    rating10: Decimal | null
    overall5: Decimal | null
    type: $Enums.ReviewType | null
    publicReview: string | null
    submittedAt: Date | null
    guestName: string | null
    listingName: string | null
    status: $Enums.ReviewStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: number | null
    sourceSystem: string | null
    sourceReviewId: string | null
    channel: $Enums.Channel | null
    listingId: number | null
    rating10: Decimal | null
    overall5: Decimal | null
    type: $Enums.ReviewType | null
    publicReview: string | null
    submittedAt: Date | null
    guestName: string | null
    listingName: string | null
    status: $Enums.ReviewStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    sourceSystem: number
    sourceReviewId: number
    channel: number
    listingId: number
    rating10: number
    overall5: number
    type: number
    publicReview: number
    submittedAt: number
    guestName: number
    listingName: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    id?: true
    listingId?: true
    rating10?: true
    overall5?: true
  }

  export type ReviewSumAggregateInputType = {
    id?: true
    listingId?: true
    rating10?: true
    overall5?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    sourceSystem?: true
    sourceReviewId?: true
    channel?: true
    listingId?: true
    rating10?: true
    overall5?: true
    type?: true
    publicReview?: true
    submittedAt?: true
    guestName?: true
    listingName?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    sourceSystem?: true
    sourceReviewId?: true
    channel?: true
    listingId?: true
    rating10?: true
    overall5?: true
    type?: true
    publicReview?: true
    submittedAt?: true
    guestName?: true
    listingName?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    sourceSystem?: true
    sourceReviewId?: true
    channel?: true
    listingId?: true
    rating10?: true
    overall5?: true
    type?: true
    publicReview?: true
    submittedAt?: true
    guestName?: true
    listingName?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: number
    sourceSystem: string
    sourceReviewId: string
    channel: $Enums.Channel
    listingId: number
    rating10: Decimal | null
    overall5: Decimal
    type: $Enums.ReviewType
    publicReview: string
    submittedAt: Date
    guestName: string
    listingName: string
    status: $Enums.ReviewStatus
    createdAt: Date
    updatedAt: Date
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sourceSystem?: boolean
    sourceReviewId?: boolean
    channel?: boolean
    listingId?: boolean
    rating10?: boolean
    overall5?: boolean
    type?: boolean
    publicReview?: boolean
    submittedAt?: boolean
    guestName?: boolean
    listingName?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Property?: boolean | ListingDefaultArgs<ExtArgs>
    ReviewCategoryScore?: boolean | Review$ReviewCategoryScoreArgs<ExtArgs>
    ApprovedReview?: boolean | Review$ApprovedReviewArgs<ExtArgs>
    raw?: boolean | Review$rawArgs<ExtArgs>
    FollowUps?: boolean | Review$FollowUpsArgs<ExtArgs>
    _count?: boolean | ReviewCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>



  export type ReviewSelectScalar = {
    id?: boolean
    sourceSystem?: boolean
    sourceReviewId?: boolean
    channel?: boolean
    listingId?: boolean
    rating10?: boolean
    overall5?: boolean
    type?: boolean
    publicReview?: boolean
    submittedAt?: boolean
    guestName?: boolean
    listingName?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sourceSystem" | "sourceReviewId" | "channel" | "listingId" | "rating10" | "overall5" | "type" | "publicReview" | "submittedAt" | "guestName" | "listingName" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Property?: boolean | ListingDefaultArgs<ExtArgs>
    ReviewCategoryScore?: boolean | Review$ReviewCategoryScoreArgs<ExtArgs>
    ApprovedReview?: boolean | Review$ApprovedReviewArgs<ExtArgs>
    raw?: boolean | Review$rawArgs<ExtArgs>
    FollowUps?: boolean | Review$FollowUpsArgs<ExtArgs>
    _count?: boolean | ReviewCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      Property: Prisma.$ListingPayload<ExtArgs>
      ReviewCategoryScore: Prisma.$ReviewCategoryScorePayload<ExtArgs>[]
      ApprovedReview: Prisma.$ApprovedReviewPayload<ExtArgs> | null
      raw: Prisma.$ReviewRawIngestPayload<ExtArgs> | null
      FollowUps: Prisma.$FollowUpsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      sourceSystem: string
      sourceReviewId: string
      channel: $Enums.Channel
      listingId: number
      rating10: Prisma.Decimal | null
      overall5: Prisma.Decimal
      type: $Enums.ReviewType
      publicReview: string
      submittedAt: Date
      guestName: string
      listingName: string
      status: $Enums.ReviewStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
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
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Property<T extends ListingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ListingDefaultArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ReviewCategoryScore<T extends Review$ReviewCategoryScoreArgs<ExtArgs> = {}>(args?: Subset<T, Review$ReviewCategoryScoreArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewCategoryScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ApprovedReview<T extends Review$ApprovedReviewArgs<ExtArgs> = {}>(args?: Subset<T, Review$ApprovedReviewArgs<ExtArgs>>): Prisma__ApprovedReviewClient<$Result.GetResult<Prisma.$ApprovedReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    raw<T extends Review$rawArgs<ExtArgs> = {}>(args?: Subset<T, Review$rawArgs<ExtArgs>>): Prisma__ReviewRawIngestClient<$Result.GetResult<Prisma.$ReviewRawIngestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    FollowUps<T extends Review$FollowUpsArgs<ExtArgs> = {}>(args?: Subset<T, Review$FollowUpsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowUpsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'Int'>
    readonly sourceSystem: FieldRef<"Review", 'String'>
    readonly sourceReviewId: FieldRef<"Review", 'String'>
    readonly channel: FieldRef<"Review", 'Channel'>
    readonly listingId: FieldRef<"Review", 'Int'>
    readonly rating10: FieldRef<"Review", 'Decimal'>
    readonly overall5: FieldRef<"Review", 'Decimal'>
    readonly type: FieldRef<"Review", 'ReviewType'>
    readonly publicReview: FieldRef<"Review", 'String'>
    readonly submittedAt: FieldRef<"Review", 'DateTime'>
    readonly guestName: FieldRef<"Review", 'String'>
    readonly listingName: FieldRef<"Review", 'String'>
    readonly status: FieldRef<"Review", 'ReviewStatus'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
    readonly updatedAt: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review.ReviewCategoryScore
   */
  export type Review$ReviewCategoryScoreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewCategoryScore
     */
    select?: ReviewCategoryScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewCategoryScore
     */
    omit?: ReviewCategoryScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewCategoryScoreInclude<ExtArgs> | null
    where?: ReviewCategoryScoreWhereInput
    orderBy?: ReviewCategoryScoreOrderByWithRelationInput | ReviewCategoryScoreOrderByWithRelationInput[]
    cursor?: ReviewCategoryScoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewCategoryScoreScalarFieldEnum | ReviewCategoryScoreScalarFieldEnum[]
  }

  /**
   * Review.ApprovedReview
   */
  export type Review$ApprovedReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovedReview
     */
    select?: ApprovedReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovedReview
     */
    omit?: ApprovedReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovedReviewInclude<ExtArgs> | null
    where?: ApprovedReviewWhereInput
  }

  /**
   * Review.raw
   */
  export type Review$rawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewRawIngest
     */
    select?: ReviewRawIngestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewRawIngest
     */
    omit?: ReviewRawIngestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewRawIngestInclude<ExtArgs> | null
    where?: ReviewRawIngestWhereInput
  }

  /**
   * Review.FollowUps
   */
  export type Review$FollowUpsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowUps
     */
    select?: FollowUpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FollowUps
     */
    omit?: FollowUpsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowUpsInclude<ExtArgs> | null
    where?: FollowUpsWhereInput
    orderBy?: FollowUpsOrderByWithRelationInput | FollowUpsOrderByWithRelationInput[]
    cursor?: FollowUpsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FollowUpsScalarFieldEnum | FollowUpsScalarFieldEnum[]
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model Listing
   */

  export type AggregateListing = {
    _count: ListingCountAggregateOutputType | null
    _avg: ListingAvgAggregateOutputType | null
    _sum: ListingSumAggregateOutputType | null
    _min: ListingMinAggregateOutputType | null
    _max: ListingMaxAggregateOutputType | null
  }

  export type ListingAvgAggregateOutputType = {
    id: number | null
  }

  export type ListingSumAggregateOutputType = {
    id: number | null
  }

  export type ListingMinAggregateOutputType = {
    id: number | null
    slug: string | null
    name: string | null
    address: string | null
    city: string | null
    state: string | null
    zip: string | null
    country: string | null
    propertyDesc: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ListingMaxAggregateOutputType = {
    id: number | null
    slug: string | null
    name: string | null
    address: string | null
    city: string | null
    state: string | null
    zip: string | null
    country: string | null
    propertyDesc: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ListingCountAggregateOutputType = {
    id: number
    slug: number
    name: number
    address: number
    city: number
    state: number
    zip: number
    country: number
    propertyDesc: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ListingAvgAggregateInputType = {
    id?: true
  }

  export type ListingSumAggregateInputType = {
    id?: true
  }

  export type ListingMinAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    address?: true
    city?: true
    state?: true
    zip?: true
    country?: true
    propertyDesc?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ListingMaxAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    address?: true
    city?: true
    state?: true
    zip?: true
    country?: true
    propertyDesc?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ListingCountAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    address?: true
    city?: true
    state?: true
    zip?: true
    country?: true
    propertyDesc?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ListingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Listing to aggregate.
     */
    where?: ListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Listings to fetch.
     */
    orderBy?: ListingOrderByWithRelationInput | ListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Listings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Listings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Listings
    **/
    _count?: true | ListingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ListingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ListingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ListingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ListingMaxAggregateInputType
  }

  export type GetListingAggregateType<T extends ListingAggregateArgs> = {
        [P in keyof T & keyof AggregateListing]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateListing[P]>
      : GetScalarType<T[P], AggregateListing[P]>
  }




  export type ListingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListingWhereInput
    orderBy?: ListingOrderByWithAggregationInput | ListingOrderByWithAggregationInput[]
    by: ListingScalarFieldEnum[] | ListingScalarFieldEnum
    having?: ListingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ListingCountAggregateInputType | true
    _avg?: ListingAvgAggregateInputType
    _sum?: ListingSumAggregateInputType
    _min?: ListingMinAggregateInputType
    _max?: ListingMaxAggregateInputType
  }

  export type ListingGroupByOutputType = {
    id: number
    slug: string
    name: string
    address: string | null
    city: string | null
    state: string | null
    zip: string | null
    country: string | null
    propertyDesc: string | null
    createdAt: Date
    updatedAt: Date
    _count: ListingCountAggregateOutputType | null
    _avg: ListingAvgAggregateOutputType | null
    _sum: ListingSumAggregateOutputType | null
    _min: ListingMinAggregateOutputType | null
    _max: ListingMaxAggregateOutputType | null
  }

  type GetListingGroupByPayload<T extends ListingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ListingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ListingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ListingGroupByOutputType[P]>
            : GetScalarType<T[P], ListingGroupByOutputType[P]>
        }
      >
    >


  export type ListingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    zip?: boolean
    country?: boolean
    propertyDesc?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reviews?: boolean | Listing$reviewsArgs<ExtArgs>
    rules?: boolean | Listing$rulesArgs<ExtArgs>
    policies?: boolean | Listing$policiesArgs<ExtArgs>
    amenities?: boolean | Listing$amenitiesArgs<ExtArgs>
    _count?: boolean | ListingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listing"]>



  export type ListingSelectScalar = {
    id?: boolean
    slug?: boolean
    name?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    zip?: boolean
    country?: boolean
    propertyDesc?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ListingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "name" | "address" | "city" | "state" | "zip" | "country" | "propertyDesc" | "createdAt" | "updatedAt", ExtArgs["result"]["listing"]>
  export type ListingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | Listing$reviewsArgs<ExtArgs>
    rules?: boolean | Listing$rulesArgs<ExtArgs>
    policies?: boolean | Listing$policiesArgs<ExtArgs>
    amenities?: boolean | Listing$amenitiesArgs<ExtArgs>
    _count?: boolean | ListingCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ListingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Listing"
    objects: {
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      rules: Prisma.$PropertyRulesPayload<ExtArgs>[]
      policies: Prisma.$PropertyPoliciesPayload<ExtArgs>[]
      amenities: Prisma.$PropertyAmenitiesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      slug: string
      name: string
      address: string | null
      city: string | null
      state: string | null
      zip: string | null
      country: string | null
      propertyDesc: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["listing"]>
    composites: {}
  }

  type ListingGetPayload<S extends boolean | null | undefined | ListingDefaultArgs> = $Result.GetResult<Prisma.$ListingPayload, S>

  type ListingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ListingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ListingCountAggregateInputType | true
    }

  export interface ListingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Listing'], meta: { name: 'Listing' } }
    /**
     * Find zero or one Listing that matches the filter.
     * @param {ListingFindUniqueArgs} args - Arguments to find a Listing
     * @example
     * // Get one Listing
     * const listing = await prisma.listing.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ListingFindUniqueArgs>(args: SelectSubset<T, ListingFindUniqueArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Listing that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ListingFindUniqueOrThrowArgs} args - Arguments to find a Listing
     * @example
     * // Get one Listing
     * const listing = await prisma.listing.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ListingFindUniqueOrThrowArgs>(args: SelectSubset<T, ListingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Listing that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingFindFirstArgs} args - Arguments to find a Listing
     * @example
     * // Get one Listing
     * const listing = await prisma.listing.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ListingFindFirstArgs>(args?: SelectSubset<T, ListingFindFirstArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Listing that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingFindFirstOrThrowArgs} args - Arguments to find a Listing
     * @example
     * // Get one Listing
     * const listing = await prisma.listing.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ListingFindFirstOrThrowArgs>(args?: SelectSubset<T, ListingFindFirstOrThrowArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Listings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Listings
     * const listings = await prisma.listing.findMany()
     * 
     * // Get first 10 Listings
     * const listings = await prisma.listing.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const listingWithIdOnly = await prisma.listing.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ListingFindManyArgs>(args?: SelectSubset<T, ListingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Listing.
     * @param {ListingCreateArgs} args - Arguments to create a Listing.
     * @example
     * // Create one Listing
     * const Listing = await prisma.listing.create({
     *   data: {
     *     // ... data to create a Listing
     *   }
     * })
     * 
     */
    create<T extends ListingCreateArgs>(args: SelectSubset<T, ListingCreateArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Listings.
     * @param {ListingCreateManyArgs} args - Arguments to create many Listings.
     * @example
     * // Create many Listings
     * const listing = await prisma.listing.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ListingCreateManyArgs>(args?: SelectSubset<T, ListingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Listing.
     * @param {ListingDeleteArgs} args - Arguments to delete one Listing.
     * @example
     * // Delete one Listing
     * const Listing = await prisma.listing.delete({
     *   where: {
     *     // ... filter to delete one Listing
     *   }
     * })
     * 
     */
    delete<T extends ListingDeleteArgs>(args: SelectSubset<T, ListingDeleteArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Listing.
     * @param {ListingUpdateArgs} args - Arguments to update one Listing.
     * @example
     * // Update one Listing
     * const listing = await prisma.listing.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ListingUpdateArgs>(args: SelectSubset<T, ListingUpdateArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Listings.
     * @param {ListingDeleteManyArgs} args - Arguments to filter Listings to delete.
     * @example
     * // Delete a few Listings
     * const { count } = await prisma.listing.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ListingDeleteManyArgs>(args?: SelectSubset<T, ListingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Listings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Listings
     * const listing = await prisma.listing.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ListingUpdateManyArgs>(args: SelectSubset<T, ListingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Listing.
     * @param {ListingUpsertArgs} args - Arguments to update or create a Listing.
     * @example
     * // Update or create a Listing
     * const listing = await prisma.listing.upsert({
     *   create: {
     *     // ... data to create a Listing
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Listing we want to update
     *   }
     * })
     */
    upsert<T extends ListingUpsertArgs>(args: SelectSubset<T, ListingUpsertArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Listings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingCountArgs} args - Arguments to filter Listings to count.
     * @example
     * // Count the number of Listings
     * const count = await prisma.listing.count({
     *   where: {
     *     // ... the filter for the Listings we want to count
     *   }
     * })
    **/
    count<T extends ListingCountArgs>(
      args?: Subset<T, ListingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ListingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Listing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ListingAggregateArgs>(args: Subset<T, ListingAggregateArgs>): Prisma.PrismaPromise<GetListingAggregateType<T>>

    /**
     * Group by Listing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingGroupByArgs} args - Group by arguments.
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
      T extends ListingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ListingGroupByArgs['orderBy'] }
        : { orderBy?: ListingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ListingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetListingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Listing model
   */
  readonly fields: ListingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Listing.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ListingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reviews<T extends Listing$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Listing$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rules<T extends Listing$rulesArgs<ExtArgs> = {}>(args?: Subset<T, Listing$rulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyRulesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    policies<T extends Listing$policiesArgs<ExtArgs> = {}>(args?: Subset<T, Listing$policiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPoliciesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    amenities<T extends Listing$amenitiesArgs<ExtArgs> = {}>(args?: Subset<T, Listing$amenitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyAmenitiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Listing model
   */
  interface ListingFieldRefs {
    readonly id: FieldRef<"Listing", 'Int'>
    readonly slug: FieldRef<"Listing", 'String'>
    readonly name: FieldRef<"Listing", 'String'>
    readonly address: FieldRef<"Listing", 'String'>
    readonly city: FieldRef<"Listing", 'String'>
    readonly state: FieldRef<"Listing", 'String'>
    readonly zip: FieldRef<"Listing", 'String'>
    readonly country: FieldRef<"Listing", 'String'>
    readonly propertyDesc: FieldRef<"Listing", 'String'>
    readonly createdAt: FieldRef<"Listing", 'DateTime'>
    readonly updatedAt: FieldRef<"Listing", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Listing findUnique
   */
  export type ListingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * Filter, which Listing to fetch.
     */
    where: ListingWhereUniqueInput
  }

  /**
   * Listing findUniqueOrThrow
   */
  export type ListingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * Filter, which Listing to fetch.
     */
    where: ListingWhereUniqueInput
  }

  /**
   * Listing findFirst
   */
  export type ListingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * Filter, which Listing to fetch.
     */
    where?: ListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Listings to fetch.
     */
    orderBy?: ListingOrderByWithRelationInput | ListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Listings.
     */
    cursor?: ListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Listings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Listings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Listings.
     */
    distinct?: ListingScalarFieldEnum | ListingScalarFieldEnum[]
  }

  /**
   * Listing findFirstOrThrow
   */
  export type ListingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * Filter, which Listing to fetch.
     */
    where?: ListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Listings to fetch.
     */
    orderBy?: ListingOrderByWithRelationInput | ListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Listings.
     */
    cursor?: ListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Listings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Listings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Listings.
     */
    distinct?: ListingScalarFieldEnum | ListingScalarFieldEnum[]
  }

  /**
   * Listing findMany
   */
  export type ListingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * Filter, which Listings to fetch.
     */
    where?: ListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Listings to fetch.
     */
    orderBy?: ListingOrderByWithRelationInput | ListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Listings.
     */
    cursor?: ListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Listings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Listings.
     */
    skip?: number
    distinct?: ListingScalarFieldEnum | ListingScalarFieldEnum[]
  }

  /**
   * Listing create
   */
  export type ListingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * The data needed to create a Listing.
     */
    data: XOR<ListingCreateInput, ListingUncheckedCreateInput>
  }

  /**
   * Listing createMany
   */
  export type ListingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Listings.
     */
    data: ListingCreateManyInput | ListingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Listing update
   */
  export type ListingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * The data needed to update a Listing.
     */
    data: XOR<ListingUpdateInput, ListingUncheckedUpdateInput>
    /**
     * Choose, which Listing to update.
     */
    where: ListingWhereUniqueInput
  }

  /**
   * Listing updateMany
   */
  export type ListingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Listings.
     */
    data: XOR<ListingUpdateManyMutationInput, ListingUncheckedUpdateManyInput>
    /**
     * Filter which Listings to update
     */
    where?: ListingWhereInput
    /**
     * Limit how many Listings to update.
     */
    limit?: number
  }

  /**
   * Listing upsert
   */
  export type ListingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * The filter to search for the Listing to update in case it exists.
     */
    where: ListingWhereUniqueInput
    /**
     * In case the Listing found by the `where` argument doesn't exist, create a new Listing with this data.
     */
    create: XOR<ListingCreateInput, ListingUncheckedCreateInput>
    /**
     * In case the Listing was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ListingUpdateInput, ListingUncheckedUpdateInput>
  }

  /**
   * Listing delete
   */
  export type ListingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * Filter which Listing to delete.
     */
    where: ListingWhereUniqueInput
  }

  /**
   * Listing deleteMany
   */
  export type ListingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Listings to delete
     */
    where?: ListingWhereInput
    /**
     * Limit how many Listings to delete.
     */
    limit?: number
  }

  /**
   * Listing.reviews
   */
  export type Listing$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Listing.rules
   */
  export type Listing$rulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyRules
     */
    select?: PropertyRulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyRules
     */
    omit?: PropertyRulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyRulesInclude<ExtArgs> | null
    where?: PropertyRulesWhereInput
    orderBy?: PropertyRulesOrderByWithRelationInput | PropertyRulesOrderByWithRelationInput[]
    cursor?: PropertyRulesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertyRulesScalarFieldEnum | PropertyRulesScalarFieldEnum[]
  }

  /**
   * Listing.policies
   */
  export type Listing$policiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyPolicies
     */
    select?: PropertyPoliciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyPolicies
     */
    omit?: PropertyPoliciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyPoliciesInclude<ExtArgs> | null
    where?: PropertyPoliciesWhereInput
    orderBy?: PropertyPoliciesOrderByWithRelationInput | PropertyPoliciesOrderByWithRelationInput[]
    cursor?: PropertyPoliciesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertyPoliciesScalarFieldEnum | PropertyPoliciesScalarFieldEnum[]
  }

  /**
   * Listing.amenities
   */
  export type Listing$amenitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyAmenities
     */
    select?: PropertyAmenitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyAmenities
     */
    omit?: PropertyAmenitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyAmenitiesInclude<ExtArgs> | null
    where?: PropertyAmenitiesWhereInput
    orderBy?: PropertyAmenitiesOrderByWithRelationInput | PropertyAmenitiesOrderByWithRelationInput[]
    cursor?: PropertyAmenitiesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertyAmenitiesScalarFieldEnum | PropertyAmenitiesScalarFieldEnum[]
  }

  /**
   * Listing without action
   */
  export type ListingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
  }


  /**
   * Model PropertyRules
   */

  export type AggregatePropertyRules = {
    _count: PropertyRulesCountAggregateOutputType | null
    _avg: PropertyRulesAvgAggregateOutputType | null
    _sum: PropertyRulesSumAggregateOutputType | null
    _min: PropertyRulesMinAggregateOutputType | null
    _max: PropertyRulesMaxAggregateOutputType | null
  }

  export type PropertyRulesAvgAggregateOutputType = {
    id: number | null
    listingId: number | null
  }

  export type PropertyRulesSumAggregateOutputType = {
    id: number | null
    listingId: number | null
  }

  export type PropertyRulesMinAggregateOutputType = {
    id: number | null
    listingId: number | null
    rule: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PropertyRulesMaxAggregateOutputType = {
    id: number | null
    listingId: number | null
    rule: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PropertyRulesCountAggregateOutputType = {
    id: number
    listingId: number
    rule: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PropertyRulesAvgAggregateInputType = {
    id?: true
    listingId?: true
  }

  export type PropertyRulesSumAggregateInputType = {
    id?: true
    listingId?: true
  }

  export type PropertyRulesMinAggregateInputType = {
    id?: true
    listingId?: true
    rule?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PropertyRulesMaxAggregateInputType = {
    id?: true
    listingId?: true
    rule?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PropertyRulesCountAggregateInputType = {
    id?: true
    listingId?: true
    rule?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PropertyRulesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropertyRules to aggregate.
     */
    where?: PropertyRulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyRules to fetch.
     */
    orderBy?: PropertyRulesOrderByWithRelationInput | PropertyRulesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropertyRulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PropertyRules
    **/
    _count?: true | PropertyRulesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PropertyRulesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PropertyRulesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropertyRulesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropertyRulesMaxAggregateInputType
  }

  export type GetPropertyRulesAggregateType<T extends PropertyRulesAggregateArgs> = {
        [P in keyof T & keyof AggregatePropertyRules]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePropertyRules[P]>
      : GetScalarType<T[P], AggregatePropertyRules[P]>
  }




  export type PropertyRulesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyRulesWhereInput
    orderBy?: PropertyRulesOrderByWithAggregationInput | PropertyRulesOrderByWithAggregationInput[]
    by: PropertyRulesScalarFieldEnum[] | PropertyRulesScalarFieldEnum
    having?: PropertyRulesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropertyRulesCountAggregateInputType | true
    _avg?: PropertyRulesAvgAggregateInputType
    _sum?: PropertyRulesSumAggregateInputType
    _min?: PropertyRulesMinAggregateInputType
    _max?: PropertyRulesMaxAggregateInputType
  }

  export type PropertyRulesGroupByOutputType = {
    id: number
    listingId: number
    rule: string
    createdAt: Date
    updatedAt: Date
    _count: PropertyRulesCountAggregateOutputType | null
    _avg: PropertyRulesAvgAggregateOutputType | null
    _sum: PropertyRulesSumAggregateOutputType | null
    _min: PropertyRulesMinAggregateOutputType | null
    _max: PropertyRulesMaxAggregateOutputType | null
  }

  type GetPropertyRulesGroupByPayload<T extends PropertyRulesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropertyRulesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropertyRulesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropertyRulesGroupByOutputType[P]>
            : GetScalarType<T[P], PropertyRulesGroupByOutputType[P]>
        }
      >
    >


  export type PropertyRulesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    listingId?: boolean
    rule?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    listing?: boolean | ListingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propertyRules"]>



  export type PropertyRulesSelectScalar = {
    id?: boolean
    listingId?: boolean
    rule?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PropertyRulesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "listingId" | "rule" | "createdAt" | "updatedAt", ExtArgs["result"]["propertyRules"]>
  export type PropertyRulesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listing?: boolean | ListingDefaultArgs<ExtArgs>
  }

  export type $PropertyRulesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PropertyRules"
    objects: {
      listing: Prisma.$ListingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      listingId: number
      rule: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["propertyRules"]>
    composites: {}
  }

  type PropertyRulesGetPayload<S extends boolean | null | undefined | PropertyRulesDefaultArgs> = $Result.GetResult<Prisma.$PropertyRulesPayload, S>

  type PropertyRulesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PropertyRulesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PropertyRulesCountAggregateInputType | true
    }

  export interface PropertyRulesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PropertyRules'], meta: { name: 'PropertyRules' } }
    /**
     * Find zero or one PropertyRules that matches the filter.
     * @param {PropertyRulesFindUniqueArgs} args - Arguments to find a PropertyRules
     * @example
     * // Get one PropertyRules
     * const propertyRules = await prisma.propertyRules.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropertyRulesFindUniqueArgs>(args: SelectSubset<T, PropertyRulesFindUniqueArgs<ExtArgs>>): Prisma__PropertyRulesClient<$Result.GetResult<Prisma.$PropertyRulesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PropertyRules that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PropertyRulesFindUniqueOrThrowArgs} args - Arguments to find a PropertyRules
     * @example
     * // Get one PropertyRules
     * const propertyRules = await prisma.propertyRules.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropertyRulesFindUniqueOrThrowArgs>(args: SelectSubset<T, PropertyRulesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropertyRulesClient<$Result.GetResult<Prisma.$PropertyRulesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PropertyRules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyRulesFindFirstArgs} args - Arguments to find a PropertyRules
     * @example
     * // Get one PropertyRules
     * const propertyRules = await prisma.propertyRules.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropertyRulesFindFirstArgs>(args?: SelectSubset<T, PropertyRulesFindFirstArgs<ExtArgs>>): Prisma__PropertyRulesClient<$Result.GetResult<Prisma.$PropertyRulesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PropertyRules that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyRulesFindFirstOrThrowArgs} args - Arguments to find a PropertyRules
     * @example
     * // Get one PropertyRules
     * const propertyRules = await prisma.propertyRules.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropertyRulesFindFirstOrThrowArgs>(args?: SelectSubset<T, PropertyRulesFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropertyRulesClient<$Result.GetResult<Prisma.$PropertyRulesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PropertyRules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyRulesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PropertyRules
     * const propertyRules = await prisma.propertyRules.findMany()
     * 
     * // Get first 10 PropertyRules
     * const propertyRules = await prisma.propertyRules.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propertyRulesWithIdOnly = await prisma.propertyRules.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PropertyRulesFindManyArgs>(args?: SelectSubset<T, PropertyRulesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyRulesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PropertyRules.
     * @param {PropertyRulesCreateArgs} args - Arguments to create a PropertyRules.
     * @example
     * // Create one PropertyRules
     * const PropertyRules = await prisma.propertyRules.create({
     *   data: {
     *     // ... data to create a PropertyRules
     *   }
     * })
     * 
     */
    create<T extends PropertyRulesCreateArgs>(args: SelectSubset<T, PropertyRulesCreateArgs<ExtArgs>>): Prisma__PropertyRulesClient<$Result.GetResult<Prisma.$PropertyRulesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PropertyRules.
     * @param {PropertyRulesCreateManyArgs} args - Arguments to create many PropertyRules.
     * @example
     * // Create many PropertyRules
     * const propertyRules = await prisma.propertyRules.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropertyRulesCreateManyArgs>(args?: SelectSubset<T, PropertyRulesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PropertyRules.
     * @param {PropertyRulesDeleteArgs} args - Arguments to delete one PropertyRules.
     * @example
     * // Delete one PropertyRules
     * const PropertyRules = await prisma.propertyRules.delete({
     *   where: {
     *     // ... filter to delete one PropertyRules
     *   }
     * })
     * 
     */
    delete<T extends PropertyRulesDeleteArgs>(args: SelectSubset<T, PropertyRulesDeleteArgs<ExtArgs>>): Prisma__PropertyRulesClient<$Result.GetResult<Prisma.$PropertyRulesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PropertyRules.
     * @param {PropertyRulesUpdateArgs} args - Arguments to update one PropertyRules.
     * @example
     * // Update one PropertyRules
     * const propertyRules = await prisma.propertyRules.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropertyRulesUpdateArgs>(args: SelectSubset<T, PropertyRulesUpdateArgs<ExtArgs>>): Prisma__PropertyRulesClient<$Result.GetResult<Prisma.$PropertyRulesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PropertyRules.
     * @param {PropertyRulesDeleteManyArgs} args - Arguments to filter PropertyRules to delete.
     * @example
     * // Delete a few PropertyRules
     * const { count } = await prisma.propertyRules.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropertyRulesDeleteManyArgs>(args?: SelectSubset<T, PropertyRulesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PropertyRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyRulesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PropertyRules
     * const propertyRules = await prisma.propertyRules.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropertyRulesUpdateManyArgs>(args: SelectSubset<T, PropertyRulesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PropertyRules.
     * @param {PropertyRulesUpsertArgs} args - Arguments to update or create a PropertyRules.
     * @example
     * // Update or create a PropertyRules
     * const propertyRules = await prisma.propertyRules.upsert({
     *   create: {
     *     // ... data to create a PropertyRules
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PropertyRules we want to update
     *   }
     * })
     */
    upsert<T extends PropertyRulesUpsertArgs>(args: SelectSubset<T, PropertyRulesUpsertArgs<ExtArgs>>): Prisma__PropertyRulesClient<$Result.GetResult<Prisma.$PropertyRulesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PropertyRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyRulesCountArgs} args - Arguments to filter PropertyRules to count.
     * @example
     * // Count the number of PropertyRules
     * const count = await prisma.propertyRules.count({
     *   where: {
     *     // ... the filter for the PropertyRules we want to count
     *   }
     * })
    **/
    count<T extends PropertyRulesCountArgs>(
      args?: Subset<T, PropertyRulesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropertyRulesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PropertyRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyRulesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PropertyRulesAggregateArgs>(args: Subset<T, PropertyRulesAggregateArgs>): Prisma.PrismaPromise<GetPropertyRulesAggregateType<T>>

    /**
     * Group by PropertyRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyRulesGroupByArgs} args - Group by arguments.
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
      T extends PropertyRulesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropertyRulesGroupByArgs['orderBy'] }
        : { orderBy?: PropertyRulesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PropertyRulesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertyRulesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PropertyRules model
   */
  readonly fields: PropertyRulesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PropertyRules.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropertyRulesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    listing<T extends ListingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ListingDefaultArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PropertyRules model
   */
  interface PropertyRulesFieldRefs {
    readonly id: FieldRef<"PropertyRules", 'Int'>
    readonly listingId: FieldRef<"PropertyRules", 'Int'>
    readonly rule: FieldRef<"PropertyRules", 'String'>
    readonly createdAt: FieldRef<"PropertyRules", 'DateTime'>
    readonly updatedAt: FieldRef<"PropertyRules", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PropertyRules findUnique
   */
  export type PropertyRulesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyRules
     */
    select?: PropertyRulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyRules
     */
    omit?: PropertyRulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyRulesInclude<ExtArgs> | null
    /**
     * Filter, which PropertyRules to fetch.
     */
    where: PropertyRulesWhereUniqueInput
  }

  /**
   * PropertyRules findUniqueOrThrow
   */
  export type PropertyRulesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyRules
     */
    select?: PropertyRulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyRules
     */
    omit?: PropertyRulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyRulesInclude<ExtArgs> | null
    /**
     * Filter, which PropertyRules to fetch.
     */
    where: PropertyRulesWhereUniqueInput
  }

  /**
   * PropertyRules findFirst
   */
  export type PropertyRulesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyRules
     */
    select?: PropertyRulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyRules
     */
    omit?: PropertyRulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyRulesInclude<ExtArgs> | null
    /**
     * Filter, which PropertyRules to fetch.
     */
    where?: PropertyRulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyRules to fetch.
     */
    orderBy?: PropertyRulesOrderByWithRelationInput | PropertyRulesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropertyRules.
     */
    cursor?: PropertyRulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropertyRules.
     */
    distinct?: PropertyRulesScalarFieldEnum | PropertyRulesScalarFieldEnum[]
  }

  /**
   * PropertyRules findFirstOrThrow
   */
  export type PropertyRulesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyRules
     */
    select?: PropertyRulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyRules
     */
    omit?: PropertyRulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyRulesInclude<ExtArgs> | null
    /**
     * Filter, which PropertyRules to fetch.
     */
    where?: PropertyRulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyRules to fetch.
     */
    orderBy?: PropertyRulesOrderByWithRelationInput | PropertyRulesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropertyRules.
     */
    cursor?: PropertyRulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropertyRules.
     */
    distinct?: PropertyRulesScalarFieldEnum | PropertyRulesScalarFieldEnum[]
  }

  /**
   * PropertyRules findMany
   */
  export type PropertyRulesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyRules
     */
    select?: PropertyRulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyRules
     */
    omit?: PropertyRulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyRulesInclude<ExtArgs> | null
    /**
     * Filter, which PropertyRules to fetch.
     */
    where?: PropertyRulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyRules to fetch.
     */
    orderBy?: PropertyRulesOrderByWithRelationInput | PropertyRulesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PropertyRules.
     */
    cursor?: PropertyRulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyRules.
     */
    skip?: number
    distinct?: PropertyRulesScalarFieldEnum | PropertyRulesScalarFieldEnum[]
  }

  /**
   * PropertyRules create
   */
  export type PropertyRulesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyRules
     */
    select?: PropertyRulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyRules
     */
    omit?: PropertyRulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyRulesInclude<ExtArgs> | null
    /**
     * The data needed to create a PropertyRules.
     */
    data: XOR<PropertyRulesCreateInput, PropertyRulesUncheckedCreateInput>
  }

  /**
   * PropertyRules createMany
   */
  export type PropertyRulesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PropertyRules.
     */
    data: PropertyRulesCreateManyInput | PropertyRulesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PropertyRules update
   */
  export type PropertyRulesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyRules
     */
    select?: PropertyRulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyRules
     */
    omit?: PropertyRulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyRulesInclude<ExtArgs> | null
    /**
     * The data needed to update a PropertyRules.
     */
    data: XOR<PropertyRulesUpdateInput, PropertyRulesUncheckedUpdateInput>
    /**
     * Choose, which PropertyRules to update.
     */
    where: PropertyRulesWhereUniqueInput
  }

  /**
   * PropertyRules updateMany
   */
  export type PropertyRulesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PropertyRules.
     */
    data: XOR<PropertyRulesUpdateManyMutationInput, PropertyRulesUncheckedUpdateManyInput>
    /**
     * Filter which PropertyRules to update
     */
    where?: PropertyRulesWhereInput
    /**
     * Limit how many PropertyRules to update.
     */
    limit?: number
  }

  /**
   * PropertyRules upsert
   */
  export type PropertyRulesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyRules
     */
    select?: PropertyRulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyRules
     */
    omit?: PropertyRulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyRulesInclude<ExtArgs> | null
    /**
     * The filter to search for the PropertyRules to update in case it exists.
     */
    where: PropertyRulesWhereUniqueInput
    /**
     * In case the PropertyRules found by the `where` argument doesn't exist, create a new PropertyRules with this data.
     */
    create: XOR<PropertyRulesCreateInput, PropertyRulesUncheckedCreateInput>
    /**
     * In case the PropertyRules was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropertyRulesUpdateInput, PropertyRulesUncheckedUpdateInput>
  }

  /**
   * PropertyRules delete
   */
  export type PropertyRulesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyRules
     */
    select?: PropertyRulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyRules
     */
    omit?: PropertyRulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyRulesInclude<ExtArgs> | null
    /**
     * Filter which PropertyRules to delete.
     */
    where: PropertyRulesWhereUniqueInput
  }

  /**
   * PropertyRules deleteMany
   */
  export type PropertyRulesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropertyRules to delete
     */
    where?: PropertyRulesWhereInput
    /**
     * Limit how many PropertyRules to delete.
     */
    limit?: number
  }

  /**
   * PropertyRules without action
   */
  export type PropertyRulesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyRules
     */
    select?: PropertyRulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyRules
     */
    omit?: PropertyRulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyRulesInclude<ExtArgs> | null
  }


  /**
   * Model PropertyPolicies
   */

  export type AggregatePropertyPolicies = {
    _count: PropertyPoliciesCountAggregateOutputType | null
    _avg: PropertyPoliciesAvgAggregateOutputType | null
    _sum: PropertyPoliciesSumAggregateOutputType | null
    _min: PropertyPoliciesMinAggregateOutputType | null
    _max: PropertyPoliciesMaxAggregateOutputType | null
  }

  export type PropertyPoliciesAvgAggregateOutputType = {
    id: number | null
    listingId: number | null
  }

  export type PropertyPoliciesSumAggregateOutputType = {
    id: number | null
    listingId: number | null
  }

  export type PropertyPoliciesMinAggregateOutputType = {
    id: number | null
    listingId: number | null
    policy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PropertyPoliciesMaxAggregateOutputType = {
    id: number | null
    listingId: number | null
    policy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PropertyPoliciesCountAggregateOutputType = {
    id: number
    listingId: number
    policy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PropertyPoliciesAvgAggregateInputType = {
    id?: true
    listingId?: true
  }

  export type PropertyPoliciesSumAggregateInputType = {
    id?: true
    listingId?: true
  }

  export type PropertyPoliciesMinAggregateInputType = {
    id?: true
    listingId?: true
    policy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PropertyPoliciesMaxAggregateInputType = {
    id?: true
    listingId?: true
    policy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PropertyPoliciesCountAggregateInputType = {
    id?: true
    listingId?: true
    policy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PropertyPoliciesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropertyPolicies to aggregate.
     */
    where?: PropertyPoliciesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyPolicies to fetch.
     */
    orderBy?: PropertyPoliciesOrderByWithRelationInput | PropertyPoliciesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropertyPoliciesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyPolicies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyPolicies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PropertyPolicies
    **/
    _count?: true | PropertyPoliciesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PropertyPoliciesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PropertyPoliciesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropertyPoliciesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropertyPoliciesMaxAggregateInputType
  }

  export type GetPropertyPoliciesAggregateType<T extends PropertyPoliciesAggregateArgs> = {
        [P in keyof T & keyof AggregatePropertyPolicies]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePropertyPolicies[P]>
      : GetScalarType<T[P], AggregatePropertyPolicies[P]>
  }




  export type PropertyPoliciesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyPoliciesWhereInput
    orderBy?: PropertyPoliciesOrderByWithAggregationInput | PropertyPoliciesOrderByWithAggregationInput[]
    by: PropertyPoliciesScalarFieldEnum[] | PropertyPoliciesScalarFieldEnum
    having?: PropertyPoliciesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropertyPoliciesCountAggregateInputType | true
    _avg?: PropertyPoliciesAvgAggregateInputType
    _sum?: PropertyPoliciesSumAggregateInputType
    _min?: PropertyPoliciesMinAggregateInputType
    _max?: PropertyPoliciesMaxAggregateInputType
  }

  export type PropertyPoliciesGroupByOutputType = {
    id: number
    listingId: number
    policy: string
    createdAt: Date
    updatedAt: Date
    _count: PropertyPoliciesCountAggregateOutputType | null
    _avg: PropertyPoliciesAvgAggregateOutputType | null
    _sum: PropertyPoliciesSumAggregateOutputType | null
    _min: PropertyPoliciesMinAggregateOutputType | null
    _max: PropertyPoliciesMaxAggregateOutputType | null
  }

  type GetPropertyPoliciesGroupByPayload<T extends PropertyPoliciesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropertyPoliciesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropertyPoliciesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropertyPoliciesGroupByOutputType[P]>
            : GetScalarType<T[P], PropertyPoliciesGroupByOutputType[P]>
        }
      >
    >


  export type PropertyPoliciesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    listingId?: boolean
    policy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    listing?: boolean | ListingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propertyPolicies"]>



  export type PropertyPoliciesSelectScalar = {
    id?: boolean
    listingId?: boolean
    policy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PropertyPoliciesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "listingId" | "policy" | "createdAt" | "updatedAt", ExtArgs["result"]["propertyPolicies"]>
  export type PropertyPoliciesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listing?: boolean | ListingDefaultArgs<ExtArgs>
  }

  export type $PropertyPoliciesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PropertyPolicies"
    objects: {
      listing: Prisma.$ListingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      listingId: number
      policy: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["propertyPolicies"]>
    composites: {}
  }

  type PropertyPoliciesGetPayload<S extends boolean | null | undefined | PropertyPoliciesDefaultArgs> = $Result.GetResult<Prisma.$PropertyPoliciesPayload, S>

  type PropertyPoliciesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PropertyPoliciesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PropertyPoliciesCountAggregateInputType | true
    }

  export interface PropertyPoliciesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PropertyPolicies'], meta: { name: 'PropertyPolicies' } }
    /**
     * Find zero or one PropertyPolicies that matches the filter.
     * @param {PropertyPoliciesFindUniqueArgs} args - Arguments to find a PropertyPolicies
     * @example
     * // Get one PropertyPolicies
     * const propertyPolicies = await prisma.propertyPolicies.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropertyPoliciesFindUniqueArgs>(args: SelectSubset<T, PropertyPoliciesFindUniqueArgs<ExtArgs>>): Prisma__PropertyPoliciesClient<$Result.GetResult<Prisma.$PropertyPoliciesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PropertyPolicies that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PropertyPoliciesFindUniqueOrThrowArgs} args - Arguments to find a PropertyPolicies
     * @example
     * // Get one PropertyPolicies
     * const propertyPolicies = await prisma.propertyPolicies.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropertyPoliciesFindUniqueOrThrowArgs>(args: SelectSubset<T, PropertyPoliciesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropertyPoliciesClient<$Result.GetResult<Prisma.$PropertyPoliciesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PropertyPolicies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyPoliciesFindFirstArgs} args - Arguments to find a PropertyPolicies
     * @example
     * // Get one PropertyPolicies
     * const propertyPolicies = await prisma.propertyPolicies.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropertyPoliciesFindFirstArgs>(args?: SelectSubset<T, PropertyPoliciesFindFirstArgs<ExtArgs>>): Prisma__PropertyPoliciesClient<$Result.GetResult<Prisma.$PropertyPoliciesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PropertyPolicies that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyPoliciesFindFirstOrThrowArgs} args - Arguments to find a PropertyPolicies
     * @example
     * // Get one PropertyPolicies
     * const propertyPolicies = await prisma.propertyPolicies.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropertyPoliciesFindFirstOrThrowArgs>(args?: SelectSubset<T, PropertyPoliciesFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropertyPoliciesClient<$Result.GetResult<Prisma.$PropertyPoliciesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PropertyPolicies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyPoliciesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PropertyPolicies
     * const propertyPolicies = await prisma.propertyPolicies.findMany()
     * 
     * // Get first 10 PropertyPolicies
     * const propertyPolicies = await prisma.propertyPolicies.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propertyPoliciesWithIdOnly = await prisma.propertyPolicies.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PropertyPoliciesFindManyArgs>(args?: SelectSubset<T, PropertyPoliciesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPoliciesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PropertyPolicies.
     * @param {PropertyPoliciesCreateArgs} args - Arguments to create a PropertyPolicies.
     * @example
     * // Create one PropertyPolicies
     * const PropertyPolicies = await prisma.propertyPolicies.create({
     *   data: {
     *     // ... data to create a PropertyPolicies
     *   }
     * })
     * 
     */
    create<T extends PropertyPoliciesCreateArgs>(args: SelectSubset<T, PropertyPoliciesCreateArgs<ExtArgs>>): Prisma__PropertyPoliciesClient<$Result.GetResult<Prisma.$PropertyPoliciesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PropertyPolicies.
     * @param {PropertyPoliciesCreateManyArgs} args - Arguments to create many PropertyPolicies.
     * @example
     * // Create many PropertyPolicies
     * const propertyPolicies = await prisma.propertyPolicies.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropertyPoliciesCreateManyArgs>(args?: SelectSubset<T, PropertyPoliciesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PropertyPolicies.
     * @param {PropertyPoliciesDeleteArgs} args - Arguments to delete one PropertyPolicies.
     * @example
     * // Delete one PropertyPolicies
     * const PropertyPolicies = await prisma.propertyPolicies.delete({
     *   where: {
     *     // ... filter to delete one PropertyPolicies
     *   }
     * })
     * 
     */
    delete<T extends PropertyPoliciesDeleteArgs>(args: SelectSubset<T, PropertyPoliciesDeleteArgs<ExtArgs>>): Prisma__PropertyPoliciesClient<$Result.GetResult<Prisma.$PropertyPoliciesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PropertyPolicies.
     * @param {PropertyPoliciesUpdateArgs} args - Arguments to update one PropertyPolicies.
     * @example
     * // Update one PropertyPolicies
     * const propertyPolicies = await prisma.propertyPolicies.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropertyPoliciesUpdateArgs>(args: SelectSubset<T, PropertyPoliciesUpdateArgs<ExtArgs>>): Prisma__PropertyPoliciesClient<$Result.GetResult<Prisma.$PropertyPoliciesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PropertyPolicies.
     * @param {PropertyPoliciesDeleteManyArgs} args - Arguments to filter PropertyPolicies to delete.
     * @example
     * // Delete a few PropertyPolicies
     * const { count } = await prisma.propertyPolicies.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropertyPoliciesDeleteManyArgs>(args?: SelectSubset<T, PropertyPoliciesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PropertyPolicies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyPoliciesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PropertyPolicies
     * const propertyPolicies = await prisma.propertyPolicies.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropertyPoliciesUpdateManyArgs>(args: SelectSubset<T, PropertyPoliciesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PropertyPolicies.
     * @param {PropertyPoliciesUpsertArgs} args - Arguments to update or create a PropertyPolicies.
     * @example
     * // Update or create a PropertyPolicies
     * const propertyPolicies = await prisma.propertyPolicies.upsert({
     *   create: {
     *     // ... data to create a PropertyPolicies
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PropertyPolicies we want to update
     *   }
     * })
     */
    upsert<T extends PropertyPoliciesUpsertArgs>(args: SelectSubset<T, PropertyPoliciesUpsertArgs<ExtArgs>>): Prisma__PropertyPoliciesClient<$Result.GetResult<Prisma.$PropertyPoliciesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PropertyPolicies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyPoliciesCountArgs} args - Arguments to filter PropertyPolicies to count.
     * @example
     * // Count the number of PropertyPolicies
     * const count = await prisma.propertyPolicies.count({
     *   where: {
     *     // ... the filter for the PropertyPolicies we want to count
     *   }
     * })
    **/
    count<T extends PropertyPoliciesCountArgs>(
      args?: Subset<T, PropertyPoliciesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropertyPoliciesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PropertyPolicies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyPoliciesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PropertyPoliciesAggregateArgs>(args: Subset<T, PropertyPoliciesAggregateArgs>): Prisma.PrismaPromise<GetPropertyPoliciesAggregateType<T>>

    /**
     * Group by PropertyPolicies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyPoliciesGroupByArgs} args - Group by arguments.
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
      T extends PropertyPoliciesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropertyPoliciesGroupByArgs['orderBy'] }
        : { orderBy?: PropertyPoliciesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PropertyPoliciesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertyPoliciesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PropertyPolicies model
   */
  readonly fields: PropertyPoliciesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PropertyPolicies.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropertyPoliciesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    listing<T extends ListingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ListingDefaultArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PropertyPolicies model
   */
  interface PropertyPoliciesFieldRefs {
    readonly id: FieldRef<"PropertyPolicies", 'Int'>
    readonly listingId: FieldRef<"PropertyPolicies", 'Int'>
    readonly policy: FieldRef<"PropertyPolicies", 'String'>
    readonly createdAt: FieldRef<"PropertyPolicies", 'DateTime'>
    readonly updatedAt: FieldRef<"PropertyPolicies", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PropertyPolicies findUnique
   */
  export type PropertyPoliciesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyPolicies
     */
    select?: PropertyPoliciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyPolicies
     */
    omit?: PropertyPoliciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyPoliciesInclude<ExtArgs> | null
    /**
     * Filter, which PropertyPolicies to fetch.
     */
    where: PropertyPoliciesWhereUniqueInput
  }

  /**
   * PropertyPolicies findUniqueOrThrow
   */
  export type PropertyPoliciesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyPolicies
     */
    select?: PropertyPoliciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyPolicies
     */
    omit?: PropertyPoliciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyPoliciesInclude<ExtArgs> | null
    /**
     * Filter, which PropertyPolicies to fetch.
     */
    where: PropertyPoliciesWhereUniqueInput
  }

  /**
   * PropertyPolicies findFirst
   */
  export type PropertyPoliciesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyPolicies
     */
    select?: PropertyPoliciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyPolicies
     */
    omit?: PropertyPoliciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyPoliciesInclude<ExtArgs> | null
    /**
     * Filter, which PropertyPolicies to fetch.
     */
    where?: PropertyPoliciesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyPolicies to fetch.
     */
    orderBy?: PropertyPoliciesOrderByWithRelationInput | PropertyPoliciesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropertyPolicies.
     */
    cursor?: PropertyPoliciesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyPolicies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyPolicies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropertyPolicies.
     */
    distinct?: PropertyPoliciesScalarFieldEnum | PropertyPoliciesScalarFieldEnum[]
  }

  /**
   * PropertyPolicies findFirstOrThrow
   */
  export type PropertyPoliciesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyPolicies
     */
    select?: PropertyPoliciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyPolicies
     */
    omit?: PropertyPoliciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyPoliciesInclude<ExtArgs> | null
    /**
     * Filter, which PropertyPolicies to fetch.
     */
    where?: PropertyPoliciesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyPolicies to fetch.
     */
    orderBy?: PropertyPoliciesOrderByWithRelationInput | PropertyPoliciesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropertyPolicies.
     */
    cursor?: PropertyPoliciesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyPolicies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyPolicies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropertyPolicies.
     */
    distinct?: PropertyPoliciesScalarFieldEnum | PropertyPoliciesScalarFieldEnum[]
  }

  /**
   * PropertyPolicies findMany
   */
  export type PropertyPoliciesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyPolicies
     */
    select?: PropertyPoliciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyPolicies
     */
    omit?: PropertyPoliciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyPoliciesInclude<ExtArgs> | null
    /**
     * Filter, which PropertyPolicies to fetch.
     */
    where?: PropertyPoliciesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyPolicies to fetch.
     */
    orderBy?: PropertyPoliciesOrderByWithRelationInput | PropertyPoliciesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PropertyPolicies.
     */
    cursor?: PropertyPoliciesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyPolicies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyPolicies.
     */
    skip?: number
    distinct?: PropertyPoliciesScalarFieldEnum | PropertyPoliciesScalarFieldEnum[]
  }

  /**
   * PropertyPolicies create
   */
  export type PropertyPoliciesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyPolicies
     */
    select?: PropertyPoliciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyPolicies
     */
    omit?: PropertyPoliciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyPoliciesInclude<ExtArgs> | null
    /**
     * The data needed to create a PropertyPolicies.
     */
    data: XOR<PropertyPoliciesCreateInput, PropertyPoliciesUncheckedCreateInput>
  }

  /**
   * PropertyPolicies createMany
   */
  export type PropertyPoliciesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PropertyPolicies.
     */
    data: PropertyPoliciesCreateManyInput | PropertyPoliciesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PropertyPolicies update
   */
  export type PropertyPoliciesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyPolicies
     */
    select?: PropertyPoliciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyPolicies
     */
    omit?: PropertyPoliciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyPoliciesInclude<ExtArgs> | null
    /**
     * The data needed to update a PropertyPolicies.
     */
    data: XOR<PropertyPoliciesUpdateInput, PropertyPoliciesUncheckedUpdateInput>
    /**
     * Choose, which PropertyPolicies to update.
     */
    where: PropertyPoliciesWhereUniqueInput
  }

  /**
   * PropertyPolicies updateMany
   */
  export type PropertyPoliciesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PropertyPolicies.
     */
    data: XOR<PropertyPoliciesUpdateManyMutationInput, PropertyPoliciesUncheckedUpdateManyInput>
    /**
     * Filter which PropertyPolicies to update
     */
    where?: PropertyPoliciesWhereInput
    /**
     * Limit how many PropertyPolicies to update.
     */
    limit?: number
  }

  /**
   * PropertyPolicies upsert
   */
  export type PropertyPoliciesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyPolicies
     */
    select?: PropertyPoliciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyPolicies
     */
    omit?: PropertyPoliciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyPoliciesInclude<ExtArgs> | null
    /**
     * The filter to search for the PropertyPolicies to update in case it exists.
     */
    where: PropertyPoliciesWhereUniqueInput
    /**
     * In case the PropertyPolicies found by the `where` argument doesn't exist, create a new PropertyPolicies with this data.
     */
    create: XOR<PropertyPoliciesCreateInput, PropertyPoliciesUncheckedCreateInput>
    /**
     * In case the PropertyPolicies was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropertyPoliciesUpdateInput, PropertyPoliciesUncheckedUpdateInput>
  }

  /**
   * PropertyPolicies delete
   */
  export type PropertyPoliciesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyPolicies
     */
    select?: PropertyPoliciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyPolicies
     */
    omit?: PropertyPoliciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyPoliciesInclude<ExtArgs> | null
    /**
     * Filter which PropertyPolicies to delete.
     */
    where: PropertyPoliciesWhereUniqueInput
  }

  /**
   * PropertyPolicies deleteMany
   */
  export type PropertyPoliciesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropertyPolicies to delete
     */
    where?: PropertyPoliciesWhereInput
    /**
     * Limit how many PropertyPolicies to delete.
     */
    limit?: number
  }

  /**
   * PropertyPolicies without action
   */
  export type PropertyPoliciesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyPolicies
     */
    select?: PropertyPoliciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyPolicies
     */
    omit?: PropertyPoliciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyPoliciesInclude<ExtArgs> | null
  }


  /**
   * Model PropertyAmenities
   */

  export type AggregatePropertyAmenities = {
    _count: PropertyAmenitiesCountAggregateOutputType | null
    _avg: PropertyAmenitiesAvgAggregateOutputType | null
    _sum: PropertyAmenitiesSumAggregateOutputType | null
    _min: PropertyAmenitiesMinAggregateOutputType | null
    _max: PropertyAmenitiesMaxAggregateOutputType | null
  }

  export type PropertyAmenitiesAvgAggregateOutputType = {
    id: number | null
    listingId: number | null
  }

  export type PropertyAmenitiesSumAggregateOutputType = {
    id: number | null
    listingId: number | null
  }

  export type PropertyAmenitiesMinAggregateOutputType = {
    id: number | null
    listingId: number | null
    amenity: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PropertyAmenitiesMaxAggregateOutputType = {
    id: number | null
    listingId: number | null
    amenity: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PropertyAmenitiesCountAggregateOutputType = {
    id: number
    listingId: number
    amenity: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PropertyAmenitiesAvgAggregateInputType = {
    id?: true
    listingId?: true
  }

  export type PropertyAmenitiesSumAggregateInputType = {
    id?: true
    listingId?: true
  }

  export type PropertyAmenitiesMinAggregateInputType = {
    id?: true
    listingId?: true
    amenity?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PropertyAmenitiesMaxAggregateInputType = {
    id?: true
    listingId?: true
    amenity?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PropertyAmenitiesCountAggregateInputType = {
    id?: true
    listingId?: true
    amenity?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PropertyAmenitiesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropertyAmenities to aggregate.
     */
    where?: PropertyAmenitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyAmenities to fetch.
     */
    orderBy?: PropertyAmenitiesOrderByWithRelationInput | PropertyAmenitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropertyAmenitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyAmenities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyAmenities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PropertyAmenities
    **/
    _count?: true | PropertyAmenitiesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PropertyAmenitiesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PropertyAmenitiesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropertyAmenitiesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropertyAmenitiesMaxAggregateInputType
  }

  export type GetPropertyAmenitiesAggregateType<T extends PropertyAmenitiesAggregateArgs> = {
        [P in keyof T & keyof AggregatePropertyAmenities]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePropertyAmenities[P]>
      : GetScalarType<T[P], AggregatePropertyAmenities[P]>
  }




  export type PropertyAmenitiesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyAmenitiesWhereInput
    orderBy?: PropertyAmenitiesOrderByWithAggregationInput | PropertyAmenitiesOrderByWithAggregationInput[]
    by: PropertyAmenitiesScalarFieldEnum[] | PropertyAmenitiesScalarFieldEnum
    having?: PropertyAmenitiesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropertyAmenitiesCountAggregateInputType | true
    _avg?: PropertyAmenitiesAvgAggregateInputType
    _sum?: PropertyAmenitiesSumAggregateInputType
    _min?: PropertyAmenitiesMinAggregateInputType
    _max?: PropertyAmenitiesMaxAggregateInputType
  }

  export type PropertyAmenitiesGroupByOutputType = {
    id: number
    listingId: number
    amenity: string
    createdAt: Date
    updatedAt: Date
    _count: PropertyAmenitiesCountAggregateOutputType | null
    _avg: PropertyAmenitiesAvgAggregateOutputType | null
    _sum: PropertyAmenitiesSumAggregateOutputType | null
    _min: PropertyAmenitiesMinAggregateOutputType | null
    _max: PropertyAmenitiesMaxAggregateOutputType | null
  }

  type GetPropertyAmenitiesGroupByPayload<T extends PropertyAmenitiesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropertyAmenitiesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropertyAmenitiesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropertyAmenitiesGroupByOutputType[P]>
            : GetScalarType<T[P], PropertyAmenitiesGroupByOutputType[P]>
        }
      >
    >


  export type PropertyAmenitiesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    listingId?: boolean
    amenity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    listing?: boolean | ListingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propertyAmenities"]>



  export type PropertyAmenitiesSelectScalar = {
    id?: boolean
    listingId?: boolean
    amenity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PropertyAmenitiesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "listingId" | "amenity" | "createdAt" | "updatedAt", ExtArgs["result"]["propertyAmenities"]>
  export type PropertyAmenitiesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listing?: boolean | ListingDefaultArgs<ExtArgs>
  }

  export type $PropertyAmenitiesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PropertyAmenities"
    objects: {
      listing: Prisma.$ListingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      listingId: number
      amenity: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["propertyAmenities"]>
    composites: {}
  }

  type PropertyAmenitiesGetPayload<S extends boolean | null | undefined | PropertyAmenitiesDefaultArgs> = $Result.GetResult<Prisma.$PropertyAmenitiesPayload, S>

  type PropertyAmenitiesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PropertyAmenitiesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PropertyAmenitiesCountAggregateInputType | true
    }

  export interface PropertyAmenitiesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PropertyAmenities'], meta: { name: 'PropertyAmenities' } }
    /**
     * Find zero or one PropertyAmenities that matches the filter.
     * @param {PropertyAmenitiesFindUniqueArgs} args - Arguments to find a PropertyAmenities
     * @example
     * // Get one PropertyAmenities
     * const propertyAmenities = await prisma.propertyAmenities.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropertyAmenitiesFindUniqueArgs>(args: SelectSubset<T, PropertyAmenitiesFindUniqueArgs<ExtArgs>>): Prisma__PropertyAmenitiesClient<$Result.GetResult<Prisma.$PropertyAmenitiesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PropertyAmenities that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PropertyAmenitiesFindUniqueOrThrowArgs} args - Arguments to find a PropertyAmenities
     * @example
     * // Get one PropertyAmenities
     * const propertyAmenities = await prisma.propertyAmenities.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropertyAmenitiesFindUniqueOrThrowArgs>(args: SelectSubset<T, PropertyAmenitiesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropertyAmenitiesClient<$Result.GetResult<Prisma.$PropertyAmenitiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PropertyAmenities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyAmenitiesFindFirstArgs} args - Arguments to find a PropertyAmenities
     * @example
     * // Get one PropertyAmenities
     * const propertyAmenities = await prisma.propertyAmenities.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropertyAmenitiesFindFirstArgs>(args?: SelectSubset<T, PropertyAmenitiesFindFirstArgs<ExtArgs>>): Prisma__PropertyAmenitiesClient<$Result.GetResult<Prisma.$PropertyAmenitiesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PropertyAmenities that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyAmenitiesFindFirstOrThrowArgs} args - Arguments to find a PropertyAmenities
     * @example
     * // Get one PropertyAmenities
     * const propertyAmenities = await prisma.propertyAmenities.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropertyAmenitiesFindFirstOrThrowArgs>(args?: SelectSubset<T, PropertyAmenitiesFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropertyAmenitiesClient<$Result.GetResult<Prisma.$PropertyAmenitiesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PropertyAmenities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyAmenitiesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PropertyAmenities
     * const propertyAmenities = await prisma.propertyAmenities.findMany()
     * 
     * // Get first 10 PropertyAmenities
     * const propertyAmenities = await prisma.propertyAmenities.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propertyAmenitiesWithIdOnly = await prisma.propertyAmenities.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PropertyAmenitiesFindManyArgs>(args?: SelectSubset<T, PropertyAmenitiesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyAmenitiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PropertyAmenities.
     * @param {PropertyAmenitiesCreateArgs} args - Arguments to create a PropertyAmenities.
     * @example
     * // Create one PropertyAmenities
     * const PropertyAmenities = await prisma.propertyAmenities.create({
     *   data: {
     *     // ... data to create a PropertyAmenities
     *   }
     * })
     * 
     */
    create<T extends PropertyAmenitiesCreateArgs>(args: SelectSubset<T, PropertyAmenitiesCreateArgs<ExtArgs>>): Prisma__PropertyAmenitiesClient<$Result.GetResult<Prisma.$PropertyAmenitiesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PropertyAmenities.
     * @param {PropertyAmenitiesCreateManyArgs} args - Arguments to create many PropertyAmenities.
     * @example
     * // Create many PropertyAmenities
     * const propertyAmenities = await prisma.propertyAmenities.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropertyAmenitiesCreateManyArgs>(args?: SelectSubset<T, PropertyAmenitiesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PropertyAmenities.
     * @param {PropertyAmenitiesDeleteArgs} args - Arguments to delete one PropertyAmenities.
     * @example
     * // Delete one PropertyAmenities
     * const PropertyAmenities = await prisma.propertyAmenities.delete({
     *   where: {
     *     // ... filter to delete one PropertyAmenities
     *   }
     * })
     * 
     */
    delete<T extends PropertyAmenitiesDeleteArgs>(args: SelectSubset<T, PropertyAmenitiesDeleteArgs<ExtArgs>>): Prisma__PropertyAmenitiesClient<$Result.GetResult<Prisma.$PropertyAmenitiesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PropertyAmenities.
     * @param {PropertyAmenitiesUpdateArgs} args - Arguments to update one PropertyAmenities.
     * @example
     * // Update one PropertyAmenities
     * const propertyAmenities = await prisma.propertyAmenities.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropertyAmenitiesUpdateArgs>(args: SelectSubset<T, PropertyAmenitiesUpdateArgs<ExtArgs>>): Prisma__PropertyAmenitiesClient<$Result.GetResult<Prisma.$PropertyAmenitiesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PropertyAmenities.
     * @param {PropertyAmenitiesDeleteManyArgs} args - Arguments to filter PropertyAmenities to delete.
     * @example
     * // Delete a few PropertyAmenities
     * const { count } = await prisma.propertyAmenities.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropertyAmenitiesDeleteManyArgs>(args?: SelectSubset<T, PropertyAmenitiesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PropertyAmenities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyAmenitiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PropertyAmenities
     * const propertyAmenities = await prisma.propertyAmenities.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropertyAmenitiesUpdateManyArgs>(args: SelectSubset<T, PropertyAmenitiesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PropertyAmenities.
     * @param {PropertyAmenitiesUpsertArgs} args - Arguments to update or create a PropertyAmenities.
     * @example
     * // Update or create a PropertyAmenities
     * const propertyAmenities = await prisma.propertyAmenities.upsert({
     *   create: {
     *     // ... data to create a PropertyAmenities
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PropertyAmenities we want to update
     *   }
     * })
     */
    upsert<T extends PropertyAmenitiesUpsertArgs>(args: SelectSubset<T, PropertyAmenitiesUpsertArgs<ExtArgs>>): Prisma__PropertyAmenitiesClient<$Result.GetResult<Prisma.$PropertyAmenitiesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PropertyAmenities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyAmenitiesCountArgs} args - Arguments to filter PropertyAmenities to count.
     * @example
     * // Count the number of PropertyAmenities
     * const count = await prisma.propertyAmenities.count({
     *   where: {
     *     // ... the filter for the PropertyAmenities we want to count
     *   }
     * })
    **/
    count<T extends PropertyAmenitiesCountArgs>(
      args?: Subset<T, PropertyAmenitiesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropertyAmenitiesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PropertyAmenities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyAmenitiesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PropertyAmenitiesAggregateArgs>(args: Subset<T, PropertyAmenitiesAggregateArgs>): Prisma.PrismaPromise<GetPropertyAmenitiesAggregateType<T>>

    /**
     * Group by PropertyAmenities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyAmenitiesGroupByArgs} args - Group by arguments.
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
      T extends PropertyAmenitiesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropertyAmenitiesGroupByArgs['orderBy'] }
        : { orderBy?: PropertyAmenitiesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PropertyAmenitiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertyAmenitiesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PropertyAmenities model
   */
  readonly fields: PropertyAmenitiesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PropertyAmenities.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropertyAmenitiesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    listing<T extends ListingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ListingDefaultArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PropertyAmenities model
   */
  interface PropertyAmenitiesFieldRefs {
    readonly id: FieldRef<"PropertyAmenities", 'Int'>
    readonly listingId: FieldRef<"PropertyAmenities", 'Int'>
    readonly amenity: FieldRef<"PropertyAmenities", 'String'>
    readonly createdAt: FieldRef<"PropertyAmenities", 'DateTime'>
    readonly updatedAt: FieldRef<"PropertyAmenities", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PropertyAmenities findUnique
   */
  export type PropertyAmenitiesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyAmenities
     */
    select?: PropertyAmenitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyAmenities
     */
    omit?: PropertyAmenitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyAmenitiesInclude<ExtArgs> | null
    /**
     * Filter, which PropertyAmenities to fetch.
     */
    where: PropertyAmenitiesWhereUniqueInput
  }

  /**
   * PropertyAmenities findUniqueOrThrow
   */
  export type PropertyAmenitiesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyAmenities
     */
    select?: PropertyAmenitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyAmenities
     */
    omit?: PropertyAmenitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyAmenitiesInclude<ExtArgs> | null
    /**
     * Filter, which PropertyAmenities to fetch.
     */
    where: PropertyAmenitiesWhereUniqueInput
  }

  /**
   * PropertyAmenities findFirst
   */
  export type PropertyAmenitiesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyAmenities
     */
    select?: PropertyAmenitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyAmenities
     */
    omit?: PropertyAmenitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyAmenitiesInclude<ExtArgs> | null
    /**
     * Filter, which PropertyAmenities to fetch.
     */
    where?: PropertyAmenitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyAmenities to fetch.
     */
    orderBy?: PropertyAmenitiesOrderByWithRelationInput | PropertyAmenitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropertyAmenities.
     */
    cursor?: PropertyAmenitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyAmenities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyAmenities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropertyAmenities.
     */
    distinct?: PropertyAmenitiesScalarFieldEnum | PropertyAmenitiesScalarFieldEnum[]
  }

  /**
   * PropertyAmenities findFirstOrThrow
   */
  export type PropertyAmenitiesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyAmenities
     */
    select?: PropertyAmenitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyAmenities
     */
    omit?: PropertyAmenitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyAmenitiesInclude<ExtArgs> | null
    /**
     * Filter, which PropertyAmenities to fetch.
     */
    where?: PropertyAmenitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyAmenities to fetch.
     */
    orderBy?: PropertyAmenitiesOrderByWithRelationInput | PropertyAmenitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropertyAmenities.
     */
    cursor?: PropertyAmenitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyAmenities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyAmenities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropertyAmenities.
     */
    distinct?: PropertyAmenitiesScalarFieldEnum | PropertyAmenitiesScalarFieldEnum[]
  }

  /**
   * PropertyAmenities findMany
   */
  export type PropertyAmenitiesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyAmenities
     */
    select?: PropertyAmenitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyAmenities
     */
    omit?: PropertyAmenitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyAmenitiesInclude<ExtArgs> | null
    /**
     * Filter, which PropertyAmenities to fetch.
     */
    where?: PropertyAmenitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyAmenities to fetch.
     */
    orderBy?: PropertyAmenitiesOrderByWithRelationInput | PropertyAmenitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PropertyAmenities.
     */
    cursor?: PropertyAmenitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyAmenities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyAmenities.
     */
    skip?: number
    distinct?: PropertyAmenitiesScalarFieldEnum | PropertyAmenitiesScalarFieldEnum[]
  }

  /**
   * PropertyAmenities create
   */
  export type PropertyAmenitiesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyAmenities
     */
    select?: PropertyAmenitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyAmenities
     */
    omit?: PropertyAmenitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyAmenitiesInclude<ExtArgs> | null
    /**
     * The data needed to create a PropertyAmenities.
     */
    data: XOR<PropertyAmenitiesCreateInput, PropertyAmenitiesUncheckedCreateInput>
  }

  /**
   * PropertyAmenities createMany
   */
  export type PropertyAmenitiesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PropertyAmenities.
     */
    data: PropertyAmenitiesCreateManyInput | PropertyAmenitiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PropertyAmenities update
   */
  export type PropertyAmenitiesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyAmenities
     */
    select?: PropertyAmenitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyAmenities
     */
    omit?: PropertyAmenitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyAmenitiesInclude<ExtArgs> | null
    /**
     * The data needed to update a PropertyAmenities.
     */
    data: XOR<PropertyAmenitiesUpdateInput, PropertyAmenitiesUncheckedUpdateInput>
    /**
     * Choose, which PropertyAmenities to update.
     */
    where: PropertyAmenitiesWhereUniqueInput
  }

  /**
   * PropertyAmenities updateMany
   */
  export type PropertyAmenitiesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PropertyAmenities.
     */
    data: XOR<PropertyAmenitiesUpdateManyMutationInput, PropertyAmenitiesUncheckedUpdateManyInput>
    /**
     * Filter which PropertyAmenities to update
     */
    where?: PropertyAmenitiesWhereInput
    /**
     * Limit how many PropertyAmenities to update.
     */
    limit?: number
  }

  /**
   * PropertyAmenities upsert
   */
  export type PropertyAmenitiesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyAmenities
     */
    select?: PropertyAmenitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyAmenities
     */
    omit?: PropertyAmenitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyAmenitiesInclude<ExtArgs> | null
    /**
     * The filter to search for the PropertyAmenities to update in case it exists.
     */
    where: PropertyAmenitiesWhereUniqueInput
    /**
     * In case the PropertyAmenities found by the `where` argument doesn't exist, create a new PropertyAmenities with this data.
     */
    create: XOR<PropertyAmenitiesCreateInput, PropertyAmenitiesUncheckedCreateInput>
    /**
     * In case the PropertyAmenities was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropertyAmenitiesUpdateInput, PropertyAmenitiesUncheckedUpdateInput>
  }

  /**
   * PropertyAmenities delete
   */
  export type PropertyAmenitiesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyAmenities
     */
    select?: PropertyAmenitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyAmenities
     */
    omit?: PropertyAmenitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyAmenitiesInclude<ExtArgs> | null
    /**
     * Filter which PropertyAmenities to delete.
     */
    where: PropertyAmenitiesWhereUniqueInput
  }

  /**
   * PropertyAmenities deleteMany
   */
  export type PropertyAmenitiesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropertyAmenities to delete
     */
    where?: PropertyAmenitiesWhereInput
    /**
     * Limit how many PropertyAmenities to delete.
     */
    limit?: number
  }

  /**
   * PropertyAmenities without action
   */
  export type PropertyAmenitiesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyAmenities
     */
    select?: PropertyAmenitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyAmenities
     */
    omit?: PropertyAmenitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyAmenitiesInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name: string
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    scores?: boolean | Category$scoresArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>



  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scores?: boolean | Category$scoresArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      scores: Prisma.$ReviewCategoryScorePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    scores<T extends Category$scoresArgs<ExtArgs> = {}>(args?: Subset<T, Category$scoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewCategoryScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly name: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.scores
   */
  export type Category$scoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewCategoryScore
     */
    select?: ReviewCategoryScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewCategoryScore
     */
    omit?: ReviewCategoryScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewCategoryScoreInclude<ExtArgs> | null
    where?: ReviewCategoryScoreWhereInput
    orderBy?: ReviewCategoryScoreOrderByWithRelationInput | ReviewCategoryScoreOrderByWithRelationInput[]
    cursor?: ReviewCategoryScoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewCategoryScoreScalarFieldEnum | ReviewCategoryScoreScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model ReviewCategoryScore
   */

  export type AggregateReviewCategoryScore = {
    _count: ReviewCategoryScoreCountAggregateOutputType | null
    _avg: ReviewCategoryScoreAvgAggregateOutputType | null
    _sum: ReviewCategoryScoreSumAggregateOutputType | null
    _min: ReviewCategoryScoreMinAggregateOutputType | null
    _max: ReviewCategoryScoreMaxAggregateOutputType | null
  }

  export type ReviewCategoryScoreAvgAggregateOutputType = {
    reviewId: number | null
    categoryId: number | null
    score10: Decimal | null
    score5: Decimal | null
  }

  export type ReviewCategoryScoreSumAggregateOutputType = {
    reviewId: number | null
    categoryId: number | null
    score10: Decimal | null
    score5: Decimal | null
  }

  export type ReviewCategoryScoreMinAggregateOutputType = {
    reviewId: number | null
    categoryId: number | null
    score10: Decimal | null
    score5: Decimal | null
  }

  export type ReviewCategoryScoreMaxAggregateOutputType = {
    reviewId: number | null
    categoryId: number | null
    score10: Decimal | null
    score5: Decimal | null
  }

  export type ReviewCategoryScoreCountAggregateOutputType = {
    reviewId: number
    categoryId: number
    score10: number
    score5: number
    _all: number
  }


  export type ReviewCategoryScoreAvgAggregateInputType = {
    reviewId?: true
    categoryId?: true
    score10?: true
    score5?: true
  }

  export type ReviewCategoryScoreSumAggregateInputType = {
    reviewId?: true
    categoryId?: true
    score10?: true
    score5?: true
  }

  export type ReviewCategoryScoreMinAggregateInputType = {
    reviewId?: true
    categoryId?: true
    score10?: true
    score5?: true
  }

  export type ReviewCategoryScoreMaxAggregateInputType = {
    reviewId?: true
    categoryId?: true
    score10?: true
    score5?: true
  }

  export type ReviewCategoryScoreCountAggregateInputType = {
    reviewId?: true
    categoryId?: true
    score10?: true
    score5?: true
    _all?: true
  }

  export type ReviewCategoryScoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReviewCategoryScore to aggregate.
     */
    where?: ReviewCategoryScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewCategoryScores to fetch.
     */
    orderBy?: ReviewCategoryScoreOrderByWithRelationInput | ReviewCategoryScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewCategoryScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewCategoryScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewCategoryScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReviewCategoryScores
    **/
    _count?: true | ReviewCategoryScoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewCategoryScoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewCategoryScoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewCategoryScoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewCategoryScoreMaxAggregateInputType
  }

  export type GetReviewCategoryScoreAggregateType<T extends ReviewCategoryScoreAggregateArgs> = {
        [P in keyof T & keyof AggregateReviewCategoryScore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReviewCategoryScore[P]>
      : GetScalarType<T[P], AggregateReviewCategoryScore[P]>
  }




  export type ReviewCategoryScoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewCategoryScoreWhereInput
    orderBy?: ReviewCategoryScoreOrderByWithAggregationInput | ReviewCategoryScoreOrderByWithAggregationInput[]
    by: ReviewCategoryScoreScalarFieldEnum[] | ReviewCategoryScoreScalarFieldEnum
    having?: ReviewCategoryScoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCategoryScoreCountAggregateInputType | true
    _avg?: ReviewCategoryScoreAvgAggregateInputType
    _sum?: ReviewCategoryScoreSumAggregateInputType
    _min?: ReviewCategoryScoreMinAggregateInputType
    _max?: ReviewCategoryScoreMaxAggregateInputType
  }

  export type ReviewCategoryScoreGroupByOutputType = {
    reviewId: number
    categoryId: number
    score10: Decimal | null
    score5: Decimal | null
    _count: ReviewCategoryScoreCountAggregateOutputType | null
    _avg: ReviewCategoryScoreAvgAggregateOutputType | null
    _sum: ReviewCategoryScoreSumAggregateOutputType | null
    _min: ReviewCategoryScoreMinAggregateOutputType | null
    _max: ReviewCategoryScoreMaxAggregateOutputType | null
  }

  type GetReviewCategoryScoreGroupByPayload<T extends ReviewCategoryScoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewCategoryScoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewCategoryScoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewCategoryScoreGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewCategoryScoreGroupByOutputType[P]>
        }
      >
    >


  export type ReviewCategoryScoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    reviewId?: boolean
    categoryId?: boolean
    score10?: boolean
    score5?: boolean
    review?: boolean | ReviewDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviewCategoryScore"]>



  export type ReviewCategoryScoreSelectScalar = {
    reviewId?: boolean
    categoryId?: boolean
    score10?: boolean
    score5?: boolean
  }

  export type ReviewCategoryScoreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"reviewId" | "categoryId" | "score10" | "score5", ExtArgs["result"]["reviewCategoryScore"]>
  export type ReviewCategoryScoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | ReviewDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $ReviewCategoryScorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReviewCategoryScore"
    objects: {
      review: Prisma.$ReviewPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      reviewId: number
      categoryId: number
      score10: Prisma.Decimal | null
      score5: Prisma.Decimal | null
    }, ExtArgs["result"]["reviewCategoryScore"]>
    composites: {}
  }

  type ReviewCategoryScoreGetPayload<S extends boolean | null | undefined | ReviewCategoryScoreDefaultArgs> = $Result.GetResult<Prisma.$ReviewCategoryScorePayload, S>

  type ReviewCategoryScoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewCategoryScoreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCategoryScoreCountAggregateInputType | true
    }

  export interface ReviewCategoryScoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReviewCategoryScore'], meta: { name: 'ReviewCategoryScore' } }
    /**
     * Find zero or one ReviewCategoryScore that matches the filter.
     * @param {ReviewCategoryScoreFindUniqueArgs} args - Arguments to find a ReviewCategoryScore
     * @example
     * // Get one ReviewCategoryScore
     * const reviewCategoryScore = await prisma.reviewCategoryScore.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewCategoryScoreFindUniqueArgs>(args: SelectSubset<T, ReviewCategoryScoreFindUniqueArgs<ExtArgs>>): Prisma__ReviewCategoryScoreClient<$Result.GetResult<Prisma.$ReviewCategoryScorePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReviewCategoryScore that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewCategoryScoreFindUniqueOrThrowArgs} args - Arguments to find a ReviewCategoryScore
     * @example
     * // Get one ReviewCategoryScore
     * const reviewCategoryScore = await prisma.reviewCategoryScore.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewCategoryScoreFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewCategoryScoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewCategoryScoreClient<$Result.GetResult<Prisma.$ReviewCategoryScorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReviewCategoryScore that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCategoryScoreFindFirstArgs} args - Arguments to find a ReviewCategoryScore
     * @example
     * // Get one ReviewCategoryScore
     * const reviewCategoryScore = await prisma.reviewCategoryScore.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewCategoryScoreFindFirstArgs>(args?: SelectSubset<T, ReviewCategoryScoreFindFirstArgs<ExtArgs>>): Prisma__ReviewCategoryScoreClient<$Result.GetResult<Prisma.$ReviewCategoryScorePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReviewCategoryScore that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCategoryScoreFindFirstOrThrowArgs} args - Arguments to find a ReviewCategoryScore
     * @example
     * // Get one ReviewCategoryScore
     * const reviewCategoryScore = await prisma.reviewCategoryScore.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewCategoryScoreFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewCategoryScoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewCategoryScoreClient<$Result.GetResult<Prisma.$ReviewCategoryScorePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReviewCategoryScores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCategoryScoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReviewCategoryScores
     * const reviewCategoryScores = await prisma.reviewCategoryScore.findMany()
     * 
     * // Get first 10 ReviewCategoryScores
     * const reviewCategoryScores = await prisma.reviewCategoryScore.findMany({ take: 10 })
     * 
     * // Only select the `reviewId`
     * const reviewCategoryScoreWithReviewIdOnly = await prisma.reviewCategoryScore.findMany({ select: { reviewId: true } })
     * 
     */
    findMany<T extends ReviewCategoryScoreFindManyArgs>(args?: SelectSubset<T, ReviewCategoryScoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewCategoryScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReviewCategoryScore.
     * @param {ReviewCategoryScoreCreateArgs} args - Arguments to create a ReviewCategoryScore.
     * @example
     * // Create one ReviewCategoryScore
     * const ReviewCategoryScore = await prisma.reviewCategoryScore.create({
     *   data: {
     *     // ... data to create a ReviewCategoryScore
     *   }
     * })
     * 
     */
    create<T extends ReviewCategoryScoreCreateArgs>(args: SelectSubset<T, ReviewCategoryScoreCreateArgs<ExtArgs>>): Prisma__ReviewCategoryScoreClient<$Result.GetResult<Prisma.$ReviewCategoryScorePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReviewCategoryScores.
     * @param {ReviewCategoryScoreCreateManyArgs} args - Arguments to create many ReviewCategoryScores.
     * @example
     * // Create many ReviewCategoryScores
     * const reviewCategoryScore = await prisma.reviewCategoryScore.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCategoryScoreCreateManyArgs>(args?: SelectSubset<T, ReviewCategoryScoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ReviewCategoryScore.
     * @param {ReviewCategoryScoreDeleteArgs} args - Arguments to delete one ReviewCategoryScore.
     * @example
     * // Delete one ReviewCategoryScore
     * const ReviewCategoryScore = await prisma.reviewCategoryScore.delete({
     *   where: {
     *     // ... filter to delete one ReviewCategoryScore
     *   }
     * })
     * 
     */
    delete<T extends ReviewCategoryScoreDeleteArgs>(args: SelectSubset<T, ReviewCategoryScoreDeleteArgs<ExtArgs>>): Prisma__ReviewCategoryScoreClient<$Result.GetResult<Prisma.$ReviewCategoryScorePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReviewCategoryScore.
     * @param {ReviewCategoryScoreUpdateArgs} args - Arguments to update one ReviewCategoryScore.
     * @example
     * // Update one ReviewCategoryScore
     * const reviewCategoryScore = await prisma.reviewCategoryScore.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewCategoryScoreUpdateArgs>(args: SelectSubset<T, ReviewCategoryScoreUpdateArgs<ExtArgs>>): Prisma__ReviewCategoryScoreClient<$Result.GetResult<Prisma.$ReviewCategoryScorePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReviewCategoryScores.
     * @param {ReviewCategoryScoreDeleteManyArgs} args - Arguments to filter ReviewCategoryScores to delete.
     * @example
     * // Delete a few ReviewCategoryScores
     * const { count } = await prisma.reviewCategoryScore.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewCategoryScoreDeleteManyArgs>(args?: SelectSubset<T, ReviewCategoryScoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReviewCategoryScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCategoryScoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReviewCategoryScores
     * const reviewCategoryScore = await prisma.reviewCategoryScore.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewCategoryScoreUpdateManyArgs>(args: SelectSubset<T, ReviewCategoryScoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ReviewCategoryScore.
     * @param {ReviewCategoryScoreUpsertArgs} args - Arguments to update or create a ReviewCategoryScore.
     * @example
     * // Update or create a ReviewCategoryScore
     * const reviewCategoryScore = await prisma.reviewCategoryScore.upsert({
     *   create: {
     *     // ... data to create a ReviewCategoryScore
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReviewCategoryScore we want to update
     *   }
     * })
     */
    upsert<T extends ReviewCategoryScoreUpsertArgs>(args: SelectSubset<T, ReviewCategoryScoreUpsertArgs<ExtArgs>>): Prisma__ReviewCategoryScoreClient<$Result.GetResult<Prisma.$ReviewCategoryScorePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReviewCategoryScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCategoryScoreCountArgs} args - Arguments to filter ReviewCategoryScores to count.
     * @example
     * // Count the number of ReviewCategoryScores
     * const count = await prisma.reviewCategoryScore.count({
     *   where: {
     *     // ... the filter for the ReviewCategoryScores we want to count
     *   }
     * })
    **/
    count<T extends ReviewCategoryScoreCountArgs>(
      args?: Subset<T, ReviewCategoryScoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCategoryScoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReviewCategoryScore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCategoryScoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewCategoryScoreAggregateArgs>(args: Subset<T, ReviewCategoryScoreAggregateArgs>): Prisma.PrismaPromise<GetReviewCategoryScoreAggregateType<T>>

    /**
     * Group by ReviewCategoryScore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCategoryScoreGroupByArgs} args - Group by arguments.
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
      T extends ReviewCategoryScoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewCategoryScoreGroupByArgs['orderBy'] }
        : { orderBy?: ReviewCategoryScoreGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReviewCategoryScoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewCategoryScoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReviewCategoryScore model
   */
  readonly fields: ReviewCategoryScoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReviewCategoryScore.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewCategoryScoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    review<T extends ReviewDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReviewDefaultArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ReviewCategoryScore model
   */
  interface ReviewCategoryScoreFieldRefs {
    readonly reviewId: FieldRef<"ReviewCategoryScore", 'Int'>
    readonly categoryId: FieldRef<"ReviewCategoryScore", 'Int'>
    readonly score10: FieldRef<"ReviewCategoryScore", 'Decimal'>
    readonly score5: FieldRef<"ReviewCategoryScore", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * ReviewCategoryScore findUnique
   */
  export type ReviewCategoryScoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewCategoryScore
     */
    select?: ReviewCategoryScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewCategoryScore
     */
    omit?: ReviewCategoryScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewCategoryScoreInclude<ExtArgs> | null
    /**
     * Filter, which ReviewCategoryScore to fetch.
     */
    where: ReviewCategoryScoreWhereUniqueInput
  }

  /**
   * ReviewCategoryScore findUniqueOrThrow
   */
  export type ReviewCategoryScoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewCategoryScore
     */
    select?: ReviewCategoryScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewCategoryScore
     */
    omit?: ReviewCategoryScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewCategoryScoreInclude<ExtArgs> | null
    /**
     * Filter, which ReviewCategoryScore to fetch.
     */
    where: ReviewCategoryScoreWhereUniqueInput
  }

  /**
   * ReviewCategoryScore findFirst
   */
  export type ReviewCategoryScoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewCategoryScore
     */
    select?: ReviewCategoryScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewCategoryScore
     */
    omit?: ReviewCategoryScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewCategoryScoreInclude<ExtArgs> | null
    /**
     * Filter, which ReviewCategoryScore to fetch.
     */
    where?: ReviewCategoryScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewCategoryScores to fetch.
     */
    orderBy?: ReviewCategoryScoreOrderByWithRelationInput | ReviewCategoryScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReviewCategoryScores.
     */
    cursor?: ReviewCategoryScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewCategoryScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewCategoryScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReviewCategoryScores.
     */
    distinct?: ReviewCategoryScoreScalarFieldEnum | ReviewCategoryScoreScalarFieldEnum[]
  }

  /**
   * ReviewCategoryScore findFirstOrThrow
   */
  export type ReviewCategoryScoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewCategoryScore
     */
    select?: ReviewCategoryScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewCategoryScore
     */
    omit?: ReviewCategoryScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewCategoryScoreInclude<ExtArgs> | null
    /**
     * Filter, which ReviewCategoryScore to fetch.
     */
    where?: ReviewCategoryScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewCategoryScores to fetch.
     */
    orderBy?: ReviewCategoryScoreOrderByWithRelationInput | ReviewCategoryScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReviewCategoryScores.
     */
    cursor?: ReviewCategoryScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewCategoryScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewCategoryScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReviewCategoryScores.
     */
    distinct?: ReviewCategoryScoreScalarFieldEnum | ReviewCategoryScoreScalarFieldEnum[]
  }

  /**
   * ReviewCategoryScore findMany
   */
  export type ReviewCategoryScoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewCategoryScore
     */
    select?: ReviewCategoryScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewCategoryScore
     */
    omit?: ReviewCategoryScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewCategoryScoreInclude<ExtArgs> | null
    /**
     * Filter, which ReviewCategoryScores to fetch.
     */
    where?: ReviewCategoryScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewCategoryScores to fetch.
     */
    orderBy?: ReviewCategoryScoreOrderByWithRelationInput | ReviewCategoryScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReviewCategoryScores.
     */
    cursor?: ReviewCategoryScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewCategoryScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewCategoryScores.
     */
    skip?: number
    distinct?: ReviewCategoryScoreScalarFieldEnum | ReviewCategoryScoreScalarFieldEnum[]
  }

  /**
   * ReviewCategoryScore create
   */
  export type ReviewCategoryScoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewCategoryScore
     */
    select?: ReviewCategoryScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewCategoryScore
     */
    omit?: ReviewCategoryScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewCategoryScoreInclude<ExtArgs> | null
    /**
     * The data needed to create a ReviewCategoryScore.
     */
    data: XOR<ReviewCategoryScoreCreateInput, ReviewCategoryScoreUncheckedCreateInput>
  }

  /**
   * ReviewCategoryScore createMany
   */
  export type ReviewCategoryScoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReviewCategoryScores.
     */
    data: ReviewCategoryScoreCreateManyInput | ReviewCategoryScoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReviewCategoryScore update
   */
  export type ReviewCategoryScoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewCategoryScore
     */
    select?: ReviewCategoryScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewCategoryScore
     */
    omit?: ReviewCategoryScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewCategoryScoreInclude<ExtArgs> | null
    /**
     * The data needed to update a ReviewCategoryScore.
     */
    data: XOR<ReviewCategoryScoreUpdateInput, ReviewCategoryScoreUncheckedUpdateInput>
    /**
     * Choose, which ReviewCategoryScore to update.
     */
    where: ReviewCategoryScoreWhereUniqueInput
  }

  /**
   * ReviewCategoryScore updateMany
   */
  export type ReviewCategoryScoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReviewCategoryScores.
     */
    data: XOR<ReviewCategoryScoreUpdateManyMutationInput, ReviewCategoryScoreUncheckedUpdateManyInput>
    /**
     * Filter which ReviewCategoryScores to update
     */
    where?: ReviewCategoryScoreWhereInput
    /**
     * Limit how many ReviewCategoryScores to update.
     */
    limit?: number
  }

  /**
   * ReviewCategoryScore upsert
   */
  export type ReviewCategoryScoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewCategoryScore
     */
    select?: ReviewCategoryScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewCategoryScore
     */
    omit?: ReviewCategoryScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewCategoryScoreInclude<ExtArgs> | null
    /**
     * The filter to search for the ReviewCategoryScore to update in case it exists.
     */
    where: ReviewCategoryScoreWhereUniqueInput
    /**
     * In case the ReviewCategoryScore found by the `where` argument doesn't exist, create a new ReviewCategoryScore with this data.
     */
    create: XOR<ReviewCategoryScoreCreateInput, ReviewCategoryScoreUncheckedCreateInput>
    /**
     * In case the ReviewCategoryScore was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewCategoryScoreUpdateInput, ReviewCategoryScoreUncheckedUpdateInput>
  }

  /**
   * ReviewCategoryScore delete
   */
  export type ReviewCategoryScoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewCategoryScore
     */
    select?: ReviewCategoryScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewCategoryScore
     */
    omit?: ReviewCategoryScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewCategoryScoreInclude<ExtArgs> | null
    /**
     * Filter which ReviewCategoryScore to delete.
     */
    where: ReviewCategoryScoreWhereUniqueInput
  }

  /**
   * ReviewCategoryScore deleteMany
   */
  export type ReviewCategoryScoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReviewCategoryScores to delete
     */
    where?: ReviewCategoryScoreWhereInput
    /**
     * Limit how many ReviewCategoryScores to delete.
     */
    limit?: number
  }

  /**
   * ReviewCategoryScore without action
   */
  export type ReviewCategoryScoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewCategoryScore
     */
    select?: ReviewCategoryScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewCategoryScore
     */
    omit?: ReviewCategoryScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewCategoryScoreInclude<ExtArgs> | null
  }


  /**
   * Model ReviewRawIngest
   */

  export type AggregateReviewRawIngest = {
    _count: ReviewRawIngestCountAggregateOutputType | null
    _avg: ReviewRawIngestAvgAggregateOutputType | null
    _sum: ReviewRawIngestSumAggregateOutputType | null
    _min: ReviewRawIngestMinAggregateOutputType | null
    _max: ReviewRawIngestMaxAggregateOutputType | null
  }

  export type ReviewRawIngestAvgAggregateOutputType = {
    reviewId: number | null
  }

  export type ReviewRawIngestSumAggregateOutputType = {
    reviewId: number | null
  }

  export type ReviewRawIngestMinAggregateOutputType = {
    reviewId: number | null
    payloadHash: string | null
  }

  export type ReviewRawIngestMaxAggregateOutputType = {
    reviewId: number | null
    payloadHash: string | null
  }

  export type ReviewRawIngestCountAggregateOutputType = {
    reviewId: number
    payload: number
    payloadHash: number
    _all: number
  }


  export type ReviewRawIngestAvgAggregateInputType = {
    reviewId?: true
  }

  export type ReviewRawIngestSumAggregateInputType = {
    reviewId?: true
  }

  export type ReviewRawIngestMinAggregateInputType = {
    reviewId?: true
    payloadHash?: true
  }

  export type ReviewRawIngestMaxAggregateInputType = {
    reviewId?: true
    payloadHash?: true
  }

  export type ReviewRawIngestCountAggregateInputType = {
    reviewId?: true
    payload?: true
    payloadHash?: true
    _all?: true
  }

  export type ReviewRawIngestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReviewRawIngest to aggregate.
     */
    where?: ReviewRawIngestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewRawIngests to fetch.
     */
    orderBy?: ReviewRawIngestOrderByWithRelationInput | ReviewRawIngestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewRawIngestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewRawIngests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewRawIngests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReviewRawIngests
    **/
    _count?: true | ReviewRawIngestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewRawIngestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewRawIngestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewRawIngestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewRawIngestMaxAggregateInputType
  }

  export type GetReviewRawIngestAggregateType<T extends ReviewRawIngestAggregateArgs> = {
        [P in keyof T & keyof AggregateReviewRawIngest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReviewRawIngest[P]>
      : GetScalarType<T[P], AggregateReviewRawIngest[P]>
  }




  export type ReviewRawIngestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewRawIngestWhereInput
    orderBy?: ReviewRawIngestOrderByWithAggregationInput | ReviewRawIngestOrderByWithAggregationInput[]
    by: ReviewRawIngestScalarFieldEnum[] | ReviewRawIngestScalarFieldEnum
    having?: ReviewRawIngestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewRawIngestCountAggregateInputType | true
    _avg?: ReviewRawIngestAvgAggregateInputType
    _sum?: ReviewRawIngestSumAggregateInputType
    _min?: ReviewRawIngestMinAggregateInputType
    _max?: ReviewRawIngestMaxAggregateInputType
  }

  export type ReviewRawIngestGroupByOutputType = {
    reviewId: number
    payload: JsonValue
    payloadHash: string
    _count: ReviewRawIngestCountAggregateOutputType | null
    _avg: ReviewRawIngestAvgAggregateOutputType | null
    _sum: ReviewRawIngestSumAggregateOutputType | null
    _min: ReviewRawIngestMinAggregateOutputType | null
    _max: ReviewRawIngestMaxAggregateOutputType | null
  }

  type GetReviewRawIngestGroupByPayload<T extends ReviewRawIngestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewRawIngestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewRawIngestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewRawIngestGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewRawIngestGroupByOutputType[P]>
        }
      >
    >


  export type ReviewRawIngestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    reviewId?: boolean
    payload?: boolean
    payloadHash?: boolean
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviewRawIngest"]>



  export type ReviewRawIngestSelectScalar = {
    reviewId?: boolean
    payload?: boolean
    payloadHash?: boolean
  }

  export type ReviewRawIngestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"reviewId" | "payload" | "payloadHash", ExtArgs["result"]["reviewRawIngest"]>
  export type ReviewRawIngestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }

  export type $ReviewRawIngestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReviewRawIngest"
    objects: {
      review: Prisma.$ReviewPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      reviewId: number
      payload: Prisma.JsonValue
      payloadHash: string
    }, ExtArgs["result"]["reviewRawIngest"]>
    composites: {}
  }

  type ReviewRawIngestGetPayload<S extends boolean | null | undefined | ReviewRawIngestDefaultArgs> = $Result.GetResult<Prisma.$ReviewRawIngestPayload, S>

  type ReviewRawIngestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewRawIngestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewRawIngestCountAggregateInputType | true
    }

  export interface ReviewRawIngestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReviewRawIngest'], meta: { name: 'ReviewRawIngest' } }
    /**
     * Find zero or one ReviewRawIngest that matches the filter.
     * @param {ReviewRawIngestFindUniqueArgs} args - Arguments to find a ReviewRawIngest
     * @example
     * // Get one ReviewRawIngest
     * const reviewRawIngest = await prisma.reviewRawIngest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewRawIngestFindUniqueArgs>(args: SelectSubset<T, ReviewRawIngestFindUniqueArgs<ExtArgs>>): Prisma__ReviewRawIngestClient<$Result.GetResult<Prisma.$ReviewRawIngestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReviewRawIngest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewRawIngestFindUniqueOrThrowArgs} args - Arguments to find a ReviewRawIngest
     * @example
     * // Get one ReviewRawIngest
     * const reviewRawIngest = await prisma.reviewRawIngest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewRawIngestFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewRawIngestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewRawIngestClient<$Result.GetResult<Prisma.$ReviewRawIngestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReviewRawIngest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewRawIngestFindFirstArgs} args - Arguments to find a ReviewRawIngest
     * @example
     * // Get one ReviewRawIngest
     * const reviewRawIngest = await prisma.reviewRawIngest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewRawIngestFindFirstArgs>(args?: SelectSubset<T, ReviewRawIngestFindFirstArgs<ExtArgs>>): Prisma__ReviewRawIngestClient<$Result.GetResult<Prisma.$ReviewRawIngestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReviewRawIngest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewRawIngestFindFirstOrThrowArgs} args - Arguments to find a ReviewRawIngest
     * @example
     * // Get one ReviewRawIngest
     * const reviewRawIngest = await prisma.reviewRawIngest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewRawIngestFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewRawIngestFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewRawIngestClient<$Result.GetResult<Prisma.$ReviewRawIngestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReviewRawIngests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewRawIngestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReviewRawIngests
     * const reviewRawIngests = await prisma.reviewRawIngest.findMany()
     * 
     * // Get first 10 ReviewRawIngests
     * const reviewRawIngests = await prisma.reviewRawIngest.findMany({ take: 10 })
     * 
     * // Only select the `reviewId`
     * const reviewRawIngestWithReviewIdOnly = await prisma.reviewRawIngest.findMany({ select: { reviewId: true } })
     * 
     */
    findMany<T extends ReviewRawIngestFindManyArgs>(args?: SelectSubset<T, ReviewRawIngestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewRawIngestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReviewRawIngest.
     * @param {ReviewRawIngestCreateArgs} args - Arguments to create a ReviewRawIngest.
     * @example
     * // Create one ReviewRawIngest
     * const ReviewRawIngest = await prisma.reviewRawIngest.create({
     *   data: {
     *     // ... data to create a ReviewRawIngest
     *   }
     * })
     * 
     */
    create<T extends ReviewRawIngestCreateArgs>(args: SelectSubset<T, ReviewRawIngestCreateArgs<ExtArgs>>): Prisma__ReviewRawIngestClient<$Result.GetResult<Prisma.$ReviewRawIngestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReviewRawIngests.
     * @param {ReviewRawIngestCreateManyArgs} args - Arguments to create many ReviewRawIngests.
     * @example
     * // Create many ReviewRawIngests
     * const reviewRawIngest = await prisma.reviewRawIngest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewRawIngestCreateManyArgs>(args?: SelectSubset<T, ReviewRawIngestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ReviewRawIngest.
     * @param {ReviewRawIngestDeleteArgs} args - Arguments to delete one ReviewRawIngest.
     * @example
     * // Delete one ReviewRawIngest
     * const ReviewRawIngest = await prisma.reviewRawIngest.delete({
     *   where: {
     *     // ... filter to delete one ReviewRawIngest
     *   }
     * })
     * 
     */
    delete<T extends ReviewRawIngestDeleteArgs>(args: SelectSubset<T, ReviewRawIngestDeleteArgs<ExtArgs>>): Prisma__ReviewRawIngestClient<$Result.GetResult<Prisma.$ReviewRawIngestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReviewRawIngest.
     * @param {ReviewRawIngestUpdateArgs} args - Arguments to update one ReviewRawIngest.
     * @example
     * // Update one ReviewRawIngest
     * const reviewRawIngest = await prisma.reviewRawIngest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewRawIngestUpdateArgs>(args: SelectSubset<T, ReviewRawIngestUpdateArgs<ExtArgs>>): Prisma__ReviewRawIngestClient<$Result.GetResult<Prisma.$ReviewRawIngestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReviewRawIngests.
     * @param {ReviewRawIngestDeleteManyArgs} args - Arguments to filter ReviewRawIngests to delete.
     * @example
     * // Delete a few ReviewRawIngests
     * const { count } = await prisma.reviewRawIngest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewRawIngestDeleteManyArgs>(args?: SelectSubset<T, ReviewRawIngestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReviewRawIngests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewRawIngestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReviewRawIngests
     * const reviewRawIngest = await prisma.reviewRawIngest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewRawIngestUpdateManyArgs>(args: SelectSubset<T, ReviewRawIngestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ReviewRawIngest.
     * @param {ReviewRawIngestUpsertArgs} args - Arguments to update or create a ReviewRawIngest.
     * @example
     * // Update or create a ReviewRawIngest
     * const reviewRawIngest = await prisma.reviewRawIngest.upsert({
     *   create: {
     *     // ... data to create a ReviewRawIngest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReviewRawIngest we want to update
     *   }
     * })
     */
    upsert<T extends ReviewRawIngestUpsertArgs>(args: SelectSubset<T, ReviewRawIngestUpsertArgs<ExtArgs>>): Prisma__ReviewRawIngestClient<$Result.GetResult<Prisma.$ReviewRawIngestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReviewRawIngests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewRawIngestCountArgs} args - Arguments to filter ReviewRawIngests to count.
     * @example
     * // Count the number of ReviewRawIngests
     * const count = await prisma.reviewRawIngest.count({
     *   where: {
     *     // ... the filter for the ReviewRawIngests we want to count
     *   }
     * })
    **/
    count<T extends ReviewRawIngestCountArgs>(
      args?: Subset<T, ReviewRawIngestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewRawIngestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReviewRawIngest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewRawIngestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewRawIngestAggregateArgs>(args: Subset<T, ReviewRawIngestAggregateArgs>): Prisma.PrismaPromise<GetReviewRawIngestAggregateType<T>>

    /**
     * Group by ReviewRawIngest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewRawIngestGroupByArgs} args - Group by arguments.
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
      T extends ReviewRawIngestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewRawIngestGroupByArgs['orderBy'] }
        : { orderBy?: ReviewRawIngestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReviewRawIngestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewRawIngestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReviewRawIngest model
   */
  readonly fields: ReviewRawIngestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReviewRawIngest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewRawIngestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    review<T extends ReviewDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReviewDefaultArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ReviewRawIngest model
   */
  interface ReviewRawIngestFieldRefs {
    readonly reviewId: FieldRef<"ReviewRawIngest", 'Int'>
    readonly payload: FieldRef<"ReviewRawIngest", 'Json'>
    readonly payloadHash: FieldRef<"ReviewRawIngest", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ReviewRawIngest findUnique
   */
  export type ReviewRawIngestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewRawIngest
     */
    select?: ReviewRawIngestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewRawIngest
     */
    omit?: ReviewRawIngestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewRawIngestInclude<ExtArgs> | null
    /**
     * Filter, which ReviewRawIngest to fetch.
     */
    where: ReviewRawIngestWhereUniqueInput
  }

  /**
   * ReviewRawIngest findUniqueOrThrow
   */
  export type ReviewRawIngestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewRawIngest
     */
    select?: ReviewRawIngestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewRawIngest
     */
    omit?: ReviewRawIngestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewRawIngestInclude<ExtArgs> | null
    /**
     * Filter, which ReviewRawIngest to fetch.
     */
    where: ReviewRawIngestWhereUniqueInput
  }

  /**
   * ReviewRawIngest findFirst
   */
  export type ReviewRawIngestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewRawIngest
     */
    select?: ReviewRawIngestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewRawIngest
     */
    omit?: ReviewRawIngestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewRawIngestInclude<ExtArgs> | null
    /**
     * Filter, which ReviewRawIngest to fetch.
     */
    where?: ReviewRawIngestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewRawIngests to fetch.
     */
    orderBy?: ReviewRawIngestOrderByWithRelationInput | ReviewRawIngestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReviewRawIngests.
     */
    cursor?: ReviewRawIngestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewRawIngests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewRawIngests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReviewRawIngests.
     */
    distinct?: ReviewRawIngestScalarFieldEnum | ReviewRawIngestScalarFieldEnum[]
  }

  /**
   * ReviewRawIngest findFirstOrThrow
   */
  export type ReviewRawIngestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewRawIngest
     */
    select?: ReviewRawIngestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewRawIngest
     */
    omit?: ReviewRawIngestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewRawIngestInclude<ExtArgs> | null
    /**
     * Filter, which ReviewRawIngest to fetch.
     */
    where?: ReviewRawIngestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewRawIngests to fetch.
     */
    orderBy?: ReviewRawIngestOrderByWithRelationInput | ReviewRawIngestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReviewRawIngests.
     */
    cursor?: ReviewRawIngestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewRawIngests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewRawIngests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReviewRawIngests.
     */
    distinct?: ReviewRawIngestScalarFieldEnum | ReviewRawIngestScalarFieldEnum[]
  }

  /**
   * ReviewRawIngest findMany
   */
  export type ReviewRawIngestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewRawIngest
     */
    select?: ReviewRawIngestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewRawIngest
     */
    omit?: ReviewRawIngestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewRawIngestInclude<ExtArgs> | null
    /**
     * Filter, which ReviewRawIngests to fetch.
     */
    where?: ReviewRawIngestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewRawIngests to fetch.
     */
    orderBy?: ReviewRawIngestOrderByWithRelationInput | ReviewRawIngestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReviewRawIngests.
     */
    cursor?: ReviewRawIngestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewRawIngests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewRawIngests.
     */
    skip?: number
    distinct?: ReviewRawIngestScalarFieldEnum | ReviewRawIngestScalarFieldEnum[]
  }

  /**
   * ReviewRawIngest create
   */
  export type ReviewRawIngestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewRawIngest
     */
    select?: ReviewRawIngestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewRawIngest
     */
    omit?: ReviewRawIngestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewRawIngestInclude<ExtArgs> | null
    /**
     * The data needed to create a ReviewRawIngest.
     */
    data: XOR<ReviewRawIngestCreateInput, ReviewRawIngestUncheckedCreateInput>
  }

  /**
   * ReviewRawIngest createMany
   */
  export type ReviewRawIngestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReviewRawIngests.
     */
    data: ReviewRawIngestCreateManyInput | ReviewRawIngestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReviewRawIngest update
   */
  export type ReviewRawIngestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewRawIngest
     */
    select?: ReviewRawIngestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewRawIngest
     */
    omit?: ReviewRawIngestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewRawIngestInclude<ExtArgs> | null
    /**
     * The data needed to update a ReviewRawIngest.
     */
    data: XOR<ReviewRawIngestUpdateInput, ReviewRawIngestUncheckedUpdateInput>
    /**
     * Choose, which ReviewRawIngest to update.
     */
    where: ReviewRawIngestWhereUniqueInput
  }

  /**
   * ReviewRawIngest updateMany
   */
  export type ReviewRawIngestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReviewRawIngests.
     */
    data: XOR<ReviewRawIngestUpdateManyMutationInput, ReviewRawIngestUncheckedUpdateManyInput>
    /**
     * Filter which ReviewRawIngests to update
     */
    where?: ReviewRawIngestWhereInput
    /**
     * Limit how many ReviewRawIngests to update.
     */
    limit?: number
  }

  /**
   * ReviewRawIngest upsert
   */
  export type ReviewRawIngestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewRawIngest
     */
    select?: ReviewRawIngestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewRawIngest
     */
    omit?: ReviewRawIngestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewRawIngestInclude<ExtArgs> | null
    /**
     * The filter to search for the ReviewRawIngest to update in case it exists.
     */
    where: ReviewRawIngestWhereUniqueInput
    /**
     * In case the ReviewRawIngest found by the `where` argument doesn't exist, create a new ReviewRawIngest with this data.
     */
    create: XOR<ReviewRawIngestCreateInput, ReviewRawIngestUncheckedCreateInput>
    /**
     * In case the ReviewRawIngest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewRawIngestUpdateInput, ReviewRawIngestUncheckedUpdateInput>
  }

  /**
   * ReviewRawIngest delete
   */
  export type ReviewRawIngestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewRawIngest
     */
    select?: ReviewRawIngestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewRawIngest
     */
    omit?: ReviewRawIngestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewRawIngestInclude<ExtArgs> | null
    /**
     * Filter which ReviewRawIngest to delete.
     */
    where: ReviewRawIngestWhereUniqueInput
  }

  /**
   * ReviewRawIngest deleteMany
   */
  export type ReviewRawIngestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReviewRawIngests to delete
     */
    where?: ReviewRawIngestWhereInput
    /**
     * Limit how many ReviewRawIngests to delete.
     */
    limit?: number
  }

  /**
   * ReviewRawIngest without action
   */
  export type ReviewRawIngestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewRawIngest
     */
    select?: ReviewRawIngestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewRawIngest
     */
    omit?: ReviewRawIngestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewRawIngestInclude<ExtArgs> | null
  }


  /**
   * Model FollowUps
   */

  export type AggregateFollowUps = {
    _count: FollowUpsCountAggregateOutputType | null
    _avg: FollowUpsAvgAggregateOutputType | null
    _sum: FollowUpsSumAggregateOutputType | null
    _min: FollowUpsMinAggregateOutputType | null
    _max: FollowUpsMaxAggregateOutputType | null
  }

  export type FollowUpsAvgAggregateOutputType = {
    id: number | null
    reviewId: number | null
  }

  export type FollowUpsSumAggregateOutputType = {
    id: number | null
    reviewId: number | null
  }

  export type FollowUpsMinAggregateOutputType = {
    id: number | null
    reviewId: number | null
    term: string | null
    issueId: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    completed: boolean | null
    closedAt: Date | null
  }

  export type FollowUpsMaxAggregateOutputType = {
    id: number | null
    reviewId: number | null
    term: string | null
    issueId: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    completed: boolean | null
    closedAt: Date | null
  }

  export type FollowUpsCountAggregateOutputType = {
    id: number
    reviewId: number
    term: number
    issueId: number
    content: number
    createdAt: number
    updatedAt: number
    completed: number
    closedAt: number
    _all: number
  }


  export type FollowUpsAvgAggregateInputType = {
    id?: true
    reviewId?: true
  }

  export type FollowUpsSumAggregateInputType = {
    id?: true
    reviewId?: true
  }

  export type FollowUpsMinAggregateInputType = {
    id?: true
    reviewId?: true
    term?: true
    issueId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    completed?: true
    closedAt?: true
  }

  export type FollowUpsMaxAggregateInputType = {
    id?: true
    reviewId?: true
    term?: true
    issueId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    completed?: true
    closedAt?: true
  }

  export type FollowUpsCountAggregateInputType = {
    id?: true
    reviewId?: true
    term?: true
    issueId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    completed?: true
    closedAt?: true
    _all?: true
  }

  export type FollowUpsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FollowUps to aggregate.
     */
    where?: FollowUpsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FollowUps to fetch.
     */
    orderBy?: FollowUpsOrderByWithRelationInput | FollowUpsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FollowUpsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FollowUps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FollowUps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FollowUps
    **/
    _count?: true | FollowUpsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FollowUpsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FollowUpsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FollowUpsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FollowUpsMaxAggregateInputType
  }

  export type GetFollowUpsAggregateType<T extends FollowUpsAggregateArgs> = {
        [P in keyof T & keyof AggregateFollowUps]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFollowUps[P]>
      : GetScalarType<T[P], AggregateFollowUps[P]>
  }




  export type FollowUpsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowUpsWhereInput
    orderBy?: FollowUpsOrderByWithAggregationInput | FollowUpsOrderByWithAggregationInput[]
    by: FollowUpsScalarFieldEnum[] | FollowUpsScalarFieldEnum
    having?: FollowUpsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FollowUpsCountAggregateInputType | true
    _avg?: FollowUpsAvgAggregateInputType
    _sum?: FollowUpsSumAggregateInputType
    _min?: FollowUpsMinAggregateInputType
    _max?: FollowUpsMaxAggregateInputType
  }

  export type FollowUpsGroupByOutputType = {
    id: number
    reviewId: number
    term: string
    issueId: string | null
    content: string
    createdAt: Date
    updatedAt: Date
    completed: boolean
    closedAt: Date | null
    _count: FollowUpsCountAggregateOutputType | null
    _avg: FollowUpsAvgAggregateOutputType | null
    _sum: FollowUpsSumAggregateOutputType | null
    _min: FollowUpsMinAggregateOutputType | null
    _max: FollowUpsMaxAggregateOutputType | null
  }

  type GetFollowUpsGroupByPayload<T extends FollowUpsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FollowUpsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FollowUpsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FollowUpsGroupByOutputType[P]>
            : GetScalarType<T[P], FollowUpsGroupByOutputType[P]>
        }
      >
    >


  export type FollowUpsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reviewId?: boolean
    term?: boolean
    issueId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    completed?: boolean
    closedAt?: boolean
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["followUps"]>



  export type FollowUpsSelectScalar = {
    id?: boolean
    reviewId?: boolean
    term?: boolean
    issueId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    completed?: boolean
    closedAt?: boolean
  }

  export type FollowUpsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reviewId" | "term" | "issueId" | "content" | "createdAt" | "updatedAt" | "completed" | "closedAt", ExtArgs["result"]["followUps"]>
  export type FollowUpsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }

  export type $FollowUpsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FollowUps"
    objects: {
      review: Prisma.$ReviewPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      reviewId: number
      term: string
      issueId: string | null
      content: string
      createdAt: Date
      updatedAt: Date
      completed: boolean
      closedAt: Date | null
    }, ExtArgs["result"]["followUps"]>
    composites: {}
  }

  type FollowUpsGetPayload<S extends boolean | null | undefined | FollowUpsDefaultArgs> = $Result.GetResult<Prisma.$FollowUpsPayload, S>

  type FollowUpsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FollowUpsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FollowUpsCountAggregateInputType | true
    }

  export interface FollowUpsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FollowUps'], meta: { name: 'FollowUps' } }
    /**
     * Find zero or one FollowUps that matches the filter.
     * @param {FollowUpsFindUniqueArgs} args - Arguments to find a FollowUps
     * @example
     * // Get one FollowUps
     * const followUps = await prisma.followUps.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FollowUpsFindUniqueArgs>(args: SelectSubset<T, FollowUpsFindUniqueArgs<ExtArgs>>): Prisma__FollowUpsClient<$Result.GetResult<Prisma.$FollowUpsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FollowUps that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FollowUpsFindUniqueOrThrowArgs} args - Arguments to find a FollowUps
     * @example
     * // Get one FollowUps
     * const followUps = await prisma.followUps.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FollowUpsFindUniqueOrThrowArgs>(args: SelectSubset<T, FollowUpsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FollowUpsClient<$Result.GetResult<Prisma.$FollowUpsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FollowUps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowUpsFindFirstArgs} args - Arguments to find a FollowUps
     * @example
     * // Get one FollowUps
     * const followUps = await prisma.followUps.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FollowUpsFindFirstArgs>(args?: SelectSubset<T, FollowUpsFindFirstArgs<ExtArgs>>): Prisma__FollowUpsClient<$Result.GetResult<Prisma.$FollowUpsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FollowUps that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowUpsFindFirstOrThrowArgs} args - Arguments to find a FollowUps
     * @example
     * // Get one FollowUps
     * const followUps = await prisma.followUps.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FollowUpsFindFirstOrThrowArgs>(args?: SelectSubset<T, FollowUpsFindFirstOrThrowArgs<ExtArgs>>): Prisma__FollowUpsClient<$Result.GetResult<Prisma.$FollowUpsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FollowUps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowUpsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FollowUps
     * const followUps = await prisma.followUps.findMany()
     * 
     * // Get first 10 FollowUps
     * const followUps = await prisma.followUps.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const followUpsWithIdOnly = await prisma.followUps.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FollowUpsFindManyArgs>(args?: SelectSubset<T, FollowUpsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowUpsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FollowUps.
     * @param {FollowUpsCreateArgs} args - Arguments to create a FollowUps.
     * @example
     * // Create one FollowUps
     * const FollowUps = await prisma.followUps.create({
     *   data: {
     *     // ... data to create a FollowUps
     *   }
     * })
     * 
     */
    create<T extends FollowUpsCreateArgs>(args: SelectSubset<T, FollowUpsCreateArgs<ExtArgs>>): Prisma__FollowUpsClient<$Result.GetResult<Prisma.$FollowUpsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FollowUps.
     * @param {FollowUpsCreateManyArgs} args - Arguments to create many FollowUps.
     * @example
     * // Create many FollowUps
     * const followUps = await prisma.followUps.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FollowUpsCreateManyArgs>(args?: SelectSubset<T, FollowUpsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FollowUps.
     * @param {FollowUpsDeleteArgs} args - Arguments to delete one FollowUps.
     * @example
     * // Delete one FollowUps
     * const FollowUps = await prisma.followUps.delete({
     *   where: {
     *     // ... filter to delete one FollowUps
     *   }
     * })
     * 
     */
    delete<T extends FollowUpsDeleteArgs>(args: SelectSubset<T, FollowUpsDeleteArgs<ExtArgs>>): Prisma__FollowUpsClient<$Result.GetResult<Prisma.$FollowUpsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FollowUps.
     * @param {FollowUpsUpdateArgs} args - Arguments to update one FollowUps.
     * @example
     * // Update one FollowUps
     * const followUps = await prisma.followUps.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FollowUpsUpdateArgs>(args: SelectSubset<T, FollowUpsUpdateArgs<ExtArgs>>): Prisma__FollowUpsClient<$Result.GetResult<Prisma.$FollowUpsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FollowUps.
     * @param {FollowUpsDeleteManyArgs} args - Arguments to filter FollowUps to delete.
     * @example
     * // Delete a few FollowUps
     * const { count } = await prisma.followUps.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FollowUpsDeleteManyArgs>(args?: SelectSubset<T, FollowUpsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FollowUps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowUpsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FollowUps
     * const followUps = await prisma.followUps.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FollowUpsUpdateManyArgs>(args: SelectSubset<T, FollowUpsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FollowUps.
     * @param {FollowUpsUpsertArgs} args - Arguments to update or create a FollowUps.
     * @example
     * // Update or create a FollowUps
     * const followUps = await prisma.followUps.upsert({
     *   create: {
     *     // ... data to create a FollowUps
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FollowUps we want to update
     *   }
     * })
     */
    upsert<T extends FollowUpsUpsertArgs>(args: SelectSubset<T, FollowUpsUpsertArgs<ExtArgs>>): Prisma__FollowUpsClient<$Result.GetResult<Prisma.$FollowUpsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FollowUps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowUpsCountArgs} args - Arguments to filter FollowUps to count.
     * @example
     * // Count the number of FollowUps
     * const count = await prisma.followUps.count({
     *   where: {
     *     // ... the filter for the FollowUps we want to count
     *   }
     * })
    **/
    count<T extends FollowUpsCountArgs>(
      args?: Subset<T, FollowUpsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FollowUpsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FollowUps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowUpsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FollowUpsAggregateArgs>(args: Subset<T, FollowUpsAggregateArgs>): Prisma.PrismaPromise<GetFollowUpsAggregateType<T>>

    /**
     * Group by FollowUps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowUpsGroupByArgs} args - Group by arguments.
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
      T extends FollowUpsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FollowUpsGroupByArgs['orderBy'] }
        : { orderBy?: FollowUpsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FollowUpsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFollowUpsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FollowUps model
   */
  readonly fields: FollowUpsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FollowUps.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FollowUpsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    review<T extends ReviewDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReviewDefaultArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FollowUps model
   */
  interface FollowUpsFieldRefs {
    readonly id: FieldRef<"FollowUps", 'Int'>
    readonly reviewId: FieldRef<"FollowUps", 'Int'>
    readonly term: FieldRef<"FollowUps", 'String'>
    readonly issueId: FieldRef<"FollowUps", 'String'>
    readonly content: FieldRef<"FollowUps", 'String'>
    readonly createdAt: FieldRef<"FollowUps", 'DateTime'>
    readonly updatedAt: FieldRef<"FollowUps", 'DateTime'>
    readonly completed: FieldRef<"FollowUps", 'Boolean'>
    readonly closedAt: FieldRef<"FollowUps", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FollowUps findUnique
   */
  export type FollowUpsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowUps
     */
    select?: FollowUpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FollowUps
     */
    omit?: FollowUpsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowUpsInclude<ExtArgs> | null
    /**
     * Filter, which FollowUps to fetch.
     */
    where: FollowUpsWhereUniqueInput
  }

  /**
   * FollowUps findUniqueOrThrow
   */
  export type FollowUpsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowUps
     */
    select?: FollowUpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FollowUps
     */
    omit?: FollowUpsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowUpsInclude<ExtArgs> | null
    /**
     * Filter, which FollowUps to fetch.
     */
    where: FollowUpsWhereUniqueInput
  }

  /**
   * FollowUps findFirst
   */
  export type FollowUpsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowUps
     */
    select?: FollowUpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FollowUps
     */
    omit?: FollowUpsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowUpsInclude<ExtArgs> | null
    /**
     * Filter, which FollowUps to fetch.
     */
    where?: FollowUpsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FollowUps to fetch.
     */
    orderBy?: FollowUpsOrderByWithRelationInput | FollowUpsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FollowUps.
     */
    cursor?: FollowUpsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FollowUps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FollowUps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FollowUps.
     */
    distinct?: FollowUpsScalarFieldEnum | FollowUpsScalarFieldEnum[]
  }

  /**
   * FollowUps findFirstOrThrow
   */
  export type FollowUpsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowUps
     */
    select?: FollowUpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FollowUps
     */
    omit?: FollowUpsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowUpsInclude<ExtArgs> | null
    /**
     * Filter, which FollowUps to fetch.
     */
    where?: FollowUpsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FollowUps to fetch.
     */
    orderBy?: FollowUpsOrderByWithRelationInput | FollowUpsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FollowUps.
     */
    cursor?: FollowUpsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FollowUps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FollowUps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FollowUps.
     */
    distinct?: FollowUpsScalarFieldEnum | FollowUpsScalarFieldEnum[]
  }

  /**
   * FollowUps findMany
   */
  export type FollowUpsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowUps
     */
    select?: FollowUpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FollowUps
     */
    omit?: FollowUpsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowUpsInclude<ExtArgs> | null
    /**
     * Filter, which FollowUps to fetch.
     */
    where?: FollowUpsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FollowUps to fetch.
     */
    orderBy?: FollowUpsOrderByWithRelationInput | FollowUpsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FollowUps.
     */
    cursor?: FollowUpsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FollowUps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FollowUps.
     */
    skip?: number
    distinct?: FollowUpsScalarFieldEnum | FollowUpsScalarFieldEnum[]
  }

  /**
   * FollowUps create
   */
  export type FollowUpsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowUps
     */
    select?: FollowUpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FollowUps
     */
    omit?: FollowUpsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowUpsInclude<ExtArgs> | null
    /**
     * The data needed to create a FollowUps.
     */
    data: XOR<FollowUpsCreateInput, FollowUpsUncheckedCreateInput>
  }

  /**
   * FollowUps createMany
   */
  export type FollowUpsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FollowUps.
     */
    data: FollowUpsCreateManyInput | FollowUpsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FollowUps update
   */
  export type FollowUpsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowUps
     */
    select?: FollowUpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FollowUps
     */
    omit?: FollowUpsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowUpsInclude<ExtArgs> | null
    /**
     * The data needed to update a FollowUps.
     */
    data: XOR<FollowUpsUpdateInput, FollowUpsUncheckedUpdateInput>
    /**
     * Choose, which FollowUps to update.
     */
    where: FollowUpsWhereUniqueInput
  }

  /**
   * FollowUps updateMany
   */
  export type FollowUpsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FollowUps.
     */
    data: XOR<FollowUpsUpdateManyMutationInput, FollowUpsUncheckedUpdateManyInput>
    /**
     * Filter which FollowUps to update
     */
    where?: FollowUpsWhereInput
    /**
     * Limit how many FollowUps to update.
     */
    limit?: number
  }

  /**
   * FollowUps upsert
   */
  export type FollowUpsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowUps
     */
    select?: FollowUpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FollowUps
     */
    omit?: FollowUpsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowUpsInclude<ExtArgs> | null
    /**
     * The filter to search for the FollowUps to update in case it exists.
     */
    where: FollowUpsWhereUniqueInput
    /**
     * In case the FollowUps found by the `where` argument doesn't exist, create a new FollowUps with this data.
     */
    create: XOR<FollowUpsCreateInput, FollowUpsUncheckedCreateInput>
    /**
     * In case the FollowUps was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FollowUpsUpdateInput, FollowUpsUncheckedUpdateInput>
  }

  /**
   * FollowUps delete
   */
  export type FollowUpsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowUps
     */
    select?: FollowUpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FollowUps
     */
    omit?: FollowUpsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowUpsInclude<ExtArgs> | null
    /**
     * Filter which FollowUps to delete.
     */
    where: FollowUpsWhereUniqueInput
  }

  /**
   * FollowUps deleteMany
   */
  export type FollowUpsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FollowUps to delete
     */
    where?: FollowUpsWhereInput
    /**
     * Limit how many FollowUps to delete.
     */
    limit?: number
  }

  /**
   * FollowUps without action
   */
  export type FollowUpsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowUps
     */
    select?: FollowUpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FollowUps
     */
    omit?: FollowUpsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowUpsInclude<ExtArgs> | null
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


  export const NotesScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    color: 'color',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    completed: 'completed'
  };

  export type NotesScalarFieldEnum = (typeof NotesScalarFieldEnum)[keyof typeof NotesScalarFieldEnum]


  export const ApprovedReviewScalarFieldEnum: {
    name: 'name',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    reviewId: 'reviewId',
    approvalNotes: 'approvalNotes',
    approvedBy: 'approvedBy',
    approvedAt: 'approvedAt',
    approved: 'approved'
  };

  export type ApprovedReviewScalarFieldEnum = (typeof ApprovedReviewScalarFieldEnum)[keyof typeof ApprovedReviewScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    sourceSystem: 'sourceSystem',
    sourceReviewId: 'sourceReviewId',
    channel: 'channel',
    listingId: 'listingId',
    rating10: 'rating10',
    overall5: 'overall5',
    type: 'type',
    publicReview: 'publicReview',
    submittedAt: 'submittedAt',
    guestName: 'guestName',
    listingName: 'listingName',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const ListingScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    name: 'name',
    address: 'address',
    city: 'city',
    state: 'state',
    zip: 'zip',
    country: 'country',
    propertyDesc: 'propertyDesc',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ListingScalarFieldEnum = (typeof ListingScalarFieldEnum)[keyof typeof ListingScalarFieldEnum]


  export const PropertyRulesScalarFieldEnum: {
    id: 'id',
    listingId: 'listingId',
    rule: 'rule',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PropertyRulesScalarFieldEnum = (typeof PropertyRulesScalarFieldEnum)[keyof typeof PropertyRulesScalarFieldEnum]


  export const PropertyPoliciesScalarFieldEnum: {
    id: 'id',
    listingId: 'listingId',
    policy: 'policy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PropertyPoliciesScalarFieldEnum = (typeof PropertyPoliciesScalarFieldEnum)[keyof typeof PropertyPoliciesScalarFieldEnum]


  export const PropertyAmenitiesScalarFieldEnum: {
    id: 'id',
    listingId: 'listingId',
    amenity: 'amenity',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PropertyAmenitiesScalarFieldEnum = (typeof PropertyAmenitiesScalarFieldEnum)[keyof typeof PropertyAmenitiesScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const ReviewCategoryScoreScalarFieldEnum: {
    reviewId: 'reviewId',
    categoryId: 'categoryId',
    score10: 'score10',
    score5: 'score5'
  };

  export type ReviewCategoryScoreScalarFieldEnum = (typeof ReviewCategoryScoreScalarFieldEnum)[keyof typeof ReviewCategoryScoreScalarFieldEnum]


  export const ReviewRawIngestScalarFieldEnum: {
    reviewId: 'reviewId',
    payload: 'payload',
    payloadHash: 'payloadHash'
  };

  export type ReviewRawIngestScalarFieldEnum = (typeof ReviewRawIngestScalarFieldEnum)[keyof typeof ReviewRawIngestScalarFieldEnum]


  export const FollowUpsScalarFieldEnum: {
    id: 'id',
    reviewId: 'reviewId',
    term: 'term',
    issueId: 'issueId',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    completed: 'completed',
    closedAt: 'closedAt'
  };

  export type FollowUpsScalarFieldEnum = (typeof FollowUpsScalarFieldEnum)[keyof typeof FollowUpsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NotesOrderByRelevanceFieldEnum: {
    title: 'title',
    content: 'content'
  };

  export type NotesOrderByRelevanceFieldEnum = (typeof NotesOrderByRelevanceFieldEnum)[keyof typeof NotesOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const ApprovedReviewOrderByRelevanceFieldEnum: {
    name: 'name',
    approvalNotes: 'approvalNotes',
    approvedBy: 'approvedBy'
  };

  export type ApprovedReviewOrderByRelevanceFieldEnum = (typeof ApprovedReviewOrderByRelevanceFieldEnum)[keyof typeof ApprovedReviewOrderByRelevanceFieldEnum]


  export const ReviewOrderByRelevanceFieldEnum: {
    sourceSystem: 'sourceSystem',
    sourceReviewId: 'sourceReviewId',
    publicReview: 'publicReview',
    guestName: 'guestName',
    listingName: 'listingName'
  };

  export type ReviewOrderByRelevanceFieldEnum = (typeof ReviewOrderByRelevanceFieldEnum)[keyof typeof ReviewOrderByRelevanceFieldEnum]


  export const ListingOrderByRelevanceFieldEnum: {
    slug: 'slug',
    name: 'name',
    address: 'address',
    city: 'city',
    state: 'state',
    zip: 'zip',
    country: 'country',
    propertyDesc: 'propertyDesc'
  };

  export type ListingOrderByRelevanceFieldEnum = (typeof ListingOrderByRelevanceFieldEnum)[keyof typeof ListingOrderByRelevanceFieldEnum]


  export const PropertyRulesOrderByRelevanceFieldEnum: {
    rule: 'rule'
  };

  export type PropertyRulesOrderByRelevanceFieldEnum = (typeof PropertyRulesOrderByRelevanceFieldEnum)[keyof typeof PropertyRulesOrderByRelevanceFieldEnum]


  export const PropertyPoliciesOrderByRelevanceFieldEnum: {
    policy: 'policy'
  };

  export type PropertyPoliciesOrderByRelevanceFieldEnum = (typeof PropertyPoliciesOrderByRelevanceFieldEnum)[keyof typeof PropertyPoliciesOrderByRelevanceFieldEnum]


  export const PropertyAmenitiesOrderByRelevanceFieldEnum: {
    amenity: 'amenity'
  };

  export type PropertyAmenitiesOrderByRelevanceFieldEnum = (typeof PropertyAmenitiesOrderByRelevanceFieldEnum)[keyof typeof PropertyAmenitiesOrderByRelevanceFieldEnum]


  export const CategoryOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type CategoryOrderByRelevanceFieldEnum = (typeof CategoryOrderByRelevanceFieldEnum)[keyof typeof CategoryOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const ReviewRawIngestOrderByRelevanceFieldEnum: {
    payloadHash: 'payloadHash'
  };

  export type ReviewRawIngestOrderByRelevanceFieldEnum = (typeof ReviewRawIngestOrderByRelevanceFieldEnum)[keyof typeof ReviewRawIngestOrderByRelevanceFieldEnum]


  export const FollowUpsOrderByRelevanceFieldEnum: {
    term: 'term',
    issueId: 'issueId',
    content: 'content'
  };

  export type FollowUpsOrderByRelevanceFieldEnum = (typeof FollowUpsOrderByRelevanceFieldEnum)[keyof typeof FollowUpsOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Color'
   */
  export type EnumColorFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Color'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'ReviewStatus'
   */
  export type EnumReviewStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReviewStatus'>
    


  /**
   * Reference to a field of type 'Channel'
   */
  export type EnumChannelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Channel'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'ReviewType'
   */
  export type EnumReviewTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReviewType'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type NotesWhereInput = {
    AND?: NotesWhereInput | NotesWhereInput[]
    OR?: NotesWhereInput[]
    NOT?: NotesWhereInput | NotesWhereInput[]
    id?: IntFilter<"Notes"> | number
    title?: StringFilter<"Notes"> | string
    content?: StringFilter<"Notes"> | string
    color?: EnumColorFilter<"Notes"> | $Enums.Color
    createdAt?: DateTimeFilter<"Notes"> | Date | string
    updatedAt?: DateTimeFilter<"Notes"> | Date | string
    completed?: BoolFilter<"Notes"> | boolean
  }

  export type NotesOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    completed?: SortOrder
    _relevance?: NotesOrderByRelevanceInput
  }

  export type NotesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NotesWhereInput | NotesWhereInput[]
    OR?: NotesWhereInput[]
    NOT?: NotesWhereInput | NotesWhereInput[]
    title?: StringFilter<"Notes"> | string
    content?: StringFilter<"Notes"> | string
    color?: EnumColorFilter<"Notes"> | $Enums.Color
    createdAt?: DateTimeFilter<"Notes"> | Date | string
    updatedAt?: DateTimeFilter<"Notes"> | Date | string
    completed?: BoolFilter<"Notes"> | boolean
  }, "id">

  export type NotesOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    completed?: SortOrder
    _count?: NotesCountOrderByAggregateInput
    _avg?: NotesAvgOrderByAggregateInput
    _max?: NotesMaxOrderByAggregateInput
    _min?: NotesMinOrderByAggregateInput
    _sum?: NotesSumOrderByAggregateInput
  }

  export type NotesScalarWhereWithAggregatesInput = {
    AND?: NotesScalarWhereWithAggregatesInput | NotesScalarWhereWithAggregatesInput[]
    OR?: NotesScalarWhereWithAggregatesInput[]
    NOT?: NotesScalarWhereWithAggregatesInput | NotesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Notes"> | number
    title?: StringWithAggregatesFilter<"Notes"> | string
    content?: StringWithAggregatesFilter<"Notes"> | string
    color?: EnumColorWithAggregatesFilter<"Notes"> | $Enums.Color
    createdAt?: DateTimeWithAggregatesFilter<"Notes"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Notes"> | Date | string
    completed?: BoolWithAggregatesFilter<"Notes"> | boolean
  }

  export type ApprovedReviewWhereInput = {
    AND?: ApprovedReviewWhereInput | ApprovedReviewWhereInput[]
    OR?: ApprovedReviewWhereInput[]
    NOT?: ApprovedReviewWhereInput | ApprovedReviewWhereInput[]
    name?: StringFilter<"ApprovedReview"> | string
    status?: EnumReviewStatusFilter<"ApprovedReview"> | $Enums.ReviewStatus
    createdAt?: DateTimeFilter<"ApprovedReview"> | Date | string
    updatedAt?: DateTimeFilter<"ApprovedReview"> | Date | string
    reviewId?: IntFilter<"ApprovedReview"> | number
    approvalNotes?: StringNullableFilter<"ApprovedReview"> | string | null
    approvedBy?: StringNullableFilter<"ApprovedReview"> | string | null
    approvedAt?: DateTimeNullableFilter<"ApprovedReview"> | Date | string | null
    approved?: BoolFilter<"ApprovedReview"> | boolean
    reviews?: XOR<ReviewScalarRelationFilter, ReviewWhereInput>
  }

  export type ApprovedReviewOrderByWithRelationInput = {
    name?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reviewId?: SortOrder
    approvalNotes?: SortOrderInput | SortOrder
    approvedBy?: SortOrderInput | SortOrder
    approvedAt?: SortOrderInput | SortOrder
    approved?: SortOrder
    reviews?: ReviewOrderByWithRelationInput
    _relevance?: ApprovedReviewOrderByRelevanceInput
  }

  export type ApprovedReviewWhereUniqueInput = Prisma.AtLeast<{
    reviewId?: number
    AND?: ApprovedReviewWhereInput | ApprovedReviewWhereInput[]
    OR?: ApprovedReviewWhereInput[]
    NOT?: ApprovedReviewWhereInput | ApprovedReviewWhereInput[]
    name?: StringFilter<"ApprovedReview"> | string
    status?: EnumReviewStatusFilter<"ApprovedReview"> | $Enums.ReviewStatus
    createdAt?: DateTimeFilter<"ApprovedReview"> | Date | string
    updatedAt?: DateTimeFilter<"ApprovedReview"> | Date | string
    approvalNotes?: StringNullableFilter<"ApprovedReview"> | string | null
    approvedBy?: StringNullableFilter<"ApprovedReview"> | string | null
    approvedAt?: DateTimeNullableFilter<"ApprovedReview"> | Date | string | null
    approved?: BoolFilter<"ApprovedReview"> | boolean
    reviews?: XOR<ReviewScalarRelationFilter, ReviewWhereInput>
  }, "reviewId">

  export type ApprovedReviewOrderByWithAggregationInput = {
    name?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reviewId?: SortOrder
    approvalNotes?: SortOrderInput | SortOrder
    approvedBy?: SortOrderInput | SortOrder
    approvedAt?: SortOrderInput | SortOrder
    approved?: SortOrder
    _count?: ApprovedReviewCountOrderByAggregateInput
    _avg?: ApprovedReviewAvgOrderByAggregateInput
    _max?: ApprovedReviewMaxOrderByAggregateInput
    _min?: ApprovedReviewMinOrderByAggregateInput
    _sum?: ApprovedReviewSumOrderByAggregateInput
  }

  export type ApprovedReviewScalarWhereWithAggregatesInput = {
    AND?: ApprovedReviewScalarWhereWithAggregatesInput | ApprovedReviewScalarWhereWithAggregatesInput[]
    OR?: ApprovedReviewScalarWhereWithAggregatesInput[]
    NOT?: ApprovedReviewScalarWhereWithAggregatesInput | ApprovedReviewScalarWhereWithAggregatesInput[]
    name?: StringWithAggregatesFilter<"ApprovedReview"> | string
    status?: EnumReviewStatusWithAggregatesFilter<"ApprovedReview"> | $Enums.ReviewStatus
    createdAt?: DateTimeWithAggregatesFilter<"ApprovedReview"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ApprovedReview"> | Date | string
    reviewId?: IntWithAggregatesFilter<"ApprovedReview"> | number
    approvalNotes?: StringNullableWithAggregatesFilter<"ApprovedReview"> | string | null
    approvedBy?: StringNullableWithAggregatesFilter<"ApprovedReview"> | string | null
    approvedAt?: DateTimeNullableWithAggregatesFilter<"ApprovedReview"> | Date | string | null
    approved?: BoolWithAggregatesFilter<"ApprovedReview"> | boolean
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: IntFilter<"Review"> | number
    sourceSystem?: StringFilter<"Review"> | string
    sourceReviewId?: StringFilter<"Review"> | string
    channel?: EnumChannelFilter<"Review"> | $Enums.Channel
    listingId?: IntFilter<"Review"> | number
    rating10?: DecimalNullableFilter<"Review"> | Decimal | DecimalJsLike | number | string | null
    overall5?: DecimalFilter<"Review"> | Decimal | DecimalJsLike | number | string
    type?: EnumReviewTypeFilter<"Review"> | $Enums.ReviewType
    publicReview?: StringFilter<"Review"> | string
    submittedAt?: DateTimeFilter<"Review"> | Date | string
    guestName?: StringFilter<"Review"> | string
    listingName?: StringFilter<"Review"> | string
    status?: EnumReviewStatusFilter<"Review"> | $Enums.ReviewStatus
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    Property?: XOR<ListingScalarRelationFilter, ListingWhereInput>
    ReviewCategoryScore?: ReviewCategoryScoreListRelationFilter
    ApprovedReview?: XOR<ApprovedReviewNullableScalarRelationFilter, ApprovedReviewWhereInput> | null
    raw?: XOR<ReviewRawIngestNullableScalarRelationFilter, ReviewRawIngestWhereInput> | null
    FollowUps?: FollowUpsListRelationFilter
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    sourceSystem?: SortOrder
    sourceReviewId?: SortOrder
    channel?: SortOrder
    listingId?: SortOrder
    rating10?: SortOrderInput | SortOrder
    overall5?: SortOrder
    type?: SortOrder
    publicReview?: SortOrder
    submittedAt?: SortOrder
    guestName?: SortOrder
    listingName?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Property?: ListingOrderByWithRelationInput
    ReviewCategoryScore?: ReviewCategoryScoreOrderByRelationAggregateInput
    ApprovedReview?: ApprovedReviewOrderByWithRelationInput
    raw?: ReviewRawIngestOrderByWithRelationInput
    FollowUps?: FollowUpsOrderByRelationAggregateInput
    _relevance?: ReviewOrderByRelevanceInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    sourceSystem_sourceReviewId_channel?: ReviewSourceSystemSourceReviewIdChannelCompoundUniqueInput
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    sourceSystem?: StringFilter<"Review"> | string
    sourceReviewId?: StringFilter<"Review"> | string
    channel?: EnumChannelFilter<"Review"> | $Enums.Channel
    listingId?: IntFilter<"Review"> | number
    rating10?: DecimalNullableFilter<"Review"> | Decimal | DecimalJsLike | number | string | null
    overall5?: DecimalFilter<"Review"> | Decimal | DecimalJsLike | number | string
    type?: EnumReviewTypeFilter<"Review"> | $Enums.ReviewType
    publicReview?: StringFilter<"Review"> | string
    submittedAt?: DateTimeFilter<"Review"> | Date | string
    guestName?: StringFilter<"Review"> | string
    listingName?: StringFilter<"Review"> | string
    status?: EnumReviewStatusFilter<"Review"> | $Enums.ReviewStatus
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    Property?: XOR<ListingScalarRelationFilter, ListingWhereInput>
    ReviewCategoryScore?: ReviewCategoryScoreListRelationFilter
    ApprovedReview?: XOR<ApprovedReviewNullableScalarRelationFilter, ApprovedReviewWhereInput> | null
    raw?: XOR<ReviewRawIngestNullableScalarRelationFilter, ReviewRawIngestWhereInput> | null
    FollowUps?: FollowUpsListRelationFilter
  }, "id" | "sourceSystem_sourceReviewId_channel">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    sourceSystem?: SortOrder
    sourceReviewId?: SortOrder
    channel?: SortOrder
    listingId?: SortOrder
    rating10?: SortOrderInput | SortOrder
    overall5?: SortOrder
    type?: SortOrder
    publicReview?: SortOrder
    submittedAt?: SortOrder
    guestName?: SortOrder
    listingName?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Review"> | number
    sourceSystem?: StringWithAggregatesFilter<"Review"> | string
    sourceReviewId?: StringWithAggregatesFilter<"Review"> | string
    channel?: EnumChannelWithAggregatesFilter<"Review"> | $Enums.Channel
    listingId?: IntWithAggregatesFilter<"Review"> | number
    rating10?: DecimalNullableWithAggregatesFilter<"Review"> | Decimal | DecimalJsLike | number | string | null
    overall5?: DecimalWithAggregatesFilter<"Review"> | Decimal | DecimalJsLike | number | string
    type?: EnumReviewTypeWithAggregatesFilter<"Review"> | $Enums.ReviewType
    publicReview?: StringWithAggregatesFilter<"Review"> | string
    submittedAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    guestName?: StringWithAggregatesFilter<"Review"> | string
    listingName?: StringWithAggregatesFilter<"Review"> | string
    status?: EnumReviewStatusWithAggregatesFilter<"Review"> | $Enums.ReviewStatus
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
  }

  export type ListingWhereInput = {
    AND?: ListingWhereInput | ListingWhereInput[]
    OR?: ListingWhereInput[]
    NOT?: ListingWhereInput | ListingWhereInput[]
    id?: IntFilter<"Listing"> | number
    slug?: StringFilter<"Listing"> | string
    name?: StringFilter<"Listing"> | string
    address?: StringNullableFilter<"Listing"> | string | null
    city?: StringNullableFilter<"Listing"> | string | null
    state?: StringNullableFilter<"Listing"> | string | null
    zip?: StringNullableFilter<"Listing"> | string | null
    country?: StringNullableFilter<"Listing"> | string | null
    propertyDesc?: StringNullableFilter<"Listing"> | string | null
    createdAt?: DateTimeFilter<"Listing"> | Date | string
    updatedAt?: DateTimeFilter<"Listing"> | Date | string
    reviews?: ReviewListRelationFilter
    rules?: PropertyRulesListRelationFilter
    policies?: PropertyPoliciesListRelationFilter
    amenities?: PropertyAmenitiesListRelationFilter
  }

  export type ListingOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    zip?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    propertyDesc?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reviews?: ReviewOrderByRelationAggregateInput
    rules?: PropertyRulesOrderByRelationAggregateInput
    policies?: PropertyPoliciesOrderByRelationAggregateInput
    amenities?: PropertyAmenitiesOrderByRelationAggregateInput
    _relevance?: ListingOrderByRelevanceInput
  }

  export type ListingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: ListingWhereInput | ListingWhereInput[]
    OR?: ListingWhereInput[]
    NOT?: ListingWhereInput | ListingWhereInput[]
    name?: StringFilter<"Listing"> | string
    address?: StringNullableFilter<"Listing"> | string | null
    city?: StringNullableFilter<"Listing"> | string | null
    state?: StringNullableFilter<"Listing"> | string | null
    zip?: StringNullableFilter<"Listing"> | string | null
    country?: StringNullableFilter<"Listing"> | string | null
    propertyDesc?: StringNullableFilter<"Listing"> | string | null
    createdAt?: DateTimeFilter<"Listing"> | Date | string
    updatedAt?: DateTimeFilter<"Listing"> | Date | string
    reviews?: ReviewListRelationFilter
    rules?: PropertyRulesListRelationFilter
    policies?: PropertyPoliciesListRelationFilter
    amenities?: PropertyAmenitiesListRelationFilter
  }, "id" | "slug">

  export type ListingOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    zip?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    propertyDesc?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ListingCountOrderByAggregateInput
    _avg?: ListingAvgOrderByAggregateInput
    _max?: ListingMaxOrderByAggregateInput
    _min?: ListingMinOrderByAggregateInput
    _sum?: ListingSumOrderByAggregateInput
  }

  export type ListingScalarWhereWithAggregatesInput = {
    AND?: ListingScalarWhereWithAggregatesInput | ListingScalarWhereWithAggregatesInput[]
    OR?: ListingScalarWhereWithAggregatesInput[]
    NOT?: ListingScalarWhereWithAggregatesInput | ListingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Listing"> | number
    slug?: StringWithAggregatesFilter<"Listing"> | string
    name?: StringWithAggregatesFilter<"Listing"> | string
    address?: StringNullableWithAggregatesFilter<"Listing"> | string | null
    city?: StringNullableWithAggregatesFilter<"Listing"> | string | null
    state?: StringNullableWithAggregatesFilter<"Listing"> | string | null
    zip?: StringNullableWithAggregatesFilter<"Listing"> | string | null
    country?: StringNullableWithAggregatesFilter<"Listing"> | string | null
    propertyDesc?: StringNullableWithAggregatesFilter<"Listing"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Listing"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Listing"> | Date | string
  }

  export type PropertyRulesWhereInput = {
    AND?: PropertyRulesWhereInput | PropertyRulesWhereInput[]
    OR?: PropertyRulesWhereInput[]
    NOT?: PropertyRulesWhereInput | PropertyRulesWhereInput[]
    id?: IntFilter<"PropertyRules"> | number
    listingId?: IntFilter<"PropertyRules"> | number
    rule?: StringFilter<"PropertyRules"> | string
    createdAt?: DateTimeFilter<"PropertyRules"> | Date | string
    updatedAt?: DateTimeFilter<"PropertyRules"> | Date | string
    listing?: XOR<ListingScalarRelationFilter, ListingWhereInput>
  }

  export type PropertyRulesOrderByWithRelationInput = {
    id?: SortOrder
    listingId?: SortOrder
    rule?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    listing?: ListingOrderByWithRelationInput
    _relevance?: PropertyRulesOrderByRelevanceInput
  }

  export type PropertyRulesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    listingId_rule?: PropertyRulesListingIdRuleCompoundUniqueInput
    AND?: PropertyRulesWhereInput | PropertyRulesWhereInput[]
    OR?: PropertyRulesWhereInput[]
    NOT?: PropertyRulesWhereInput | PropertyRulesWhereInput[]
    listingId?: IntFilter<"PropertyRules"> | number
    rule?: StringFilter<"PropertyRules"> | string
    createdAt?: DateTimeFilter<"PropertyRules"> | Date | string
    updatedAt?: DateTimeFilter<"PropertyRules"> | Date | string
    listing?: XOR<ListingScalarRelationFilter, ListingWhereInput>
  }, "id" | "listingId_rule">

  export type PropertyRulesOrderByWithAggregationInput = {
    id?: SortOrder
    listingId?: SortOrder
    rule?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PropertyRulesCountOrderByAggregateInput
    _avg?: PropertyRulesAvgOrderByAggregateInput
    _max?: PropertyRulesMaxOrderByAggregateInput
    _min?: PropertyRulesMinOrderByAggregateInput
    _sum?: PropertyRulesSumOrderByAggregateInput
  }

  export type PropertyRulesScalarWhereWithAggregatesInput = {
    AND?: PropertyRulesScalarWhereWithAggregatesInput | PropertyRulesScalarWhereWithAggregatesInput[]
    OR?: PropertyRulesScalarWhereWithAggregatesInput[]
    NOT?: PropertyRulesScalarWhereWithAggregatesInput | PropertyRulesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PropertyRules"> | number
    listingId?: IntWithAggregatesFilter<"PropertyRules"> | number
    rule?: StringWithAggregatesFilter<"PropertyRules"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PropertyRules"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PropertyRules"> | Date | string
  }

  export type PropertyPoliciesWhereInput = {
    AND?: PropertyPoliciesWhereInput | PropertyPoliciesWhereInput[]
    OR?: PropertyPoliciesWhereInput[]
    NOT?: PropertyPoliciesWhereInput | PropertyPoliciesWhereInput[]
    id?: IntFilter<"PropertyPolicies"> | number
    listingId?: IntFilter<"PropertyPolicies"> | number
    policy?: StringFilter<"PropertyPolicies"> | string
    createdAt?: DateTimeFilter<"PropertyPolicies"> | Date | string
    updatedAt?: DateTimeFilter<"PropertyPolicies"> | Date | string
    listing?: XOR<ListingScalarRelationFilter, ListingWhereInput>
  }

  export type PropertyPoliciesOrderByWithRelationInput = {
    id?: SortOrder
    listingId?: SortOrder
    policy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    listing?: ListingOrderByWithRelationInput
    _relevance?: PropertyPoliciesOrderByRelevanceInput
  }

  export type PropertyPoliciesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    listingId_policy?: PropertyPoliciesListingIdPolicyCompoundUniqueInput
    AND?: PropertyPoliciesWhereInput | PropertyPoliciesWhereInput[]
    OR?: PropertyPoliciesWhereInput[]
    NOT?: PropertyPoliciesWhereInput | PropertyPoliciesWhereInput[]
    listingId?: IntFilter<"PropertyPolicies"> | number
    policy?: StringFilter<"PropertyPolicies"> | string
    createdAt?: DateTimeFilter<"PropertyPolicies"> | Date | string
    updatedAt?: DateTimeFilter<"PropertyPolicies"> | Date | string
    listing?: XOR<ListingScalarRelationFilter, ListingWhereInput>
  }, "id" | "listingId_policy">

  export type PropertyPoliciesOrderByWithAggregationInput = {
    id?: SortOrder
    listingId?: SortOrder
    policy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PropertyPoliciesCountOrderByAggregateInput
    _avg?: PropertyPoliciesAvgOrderByAggregateInput
    _max?: PropertyPoliciesMaxOrderByAggregateInput
    _min?: PropertyPoliciesMinOrderByAggregateInput
    _sum?: PropertyPoliciesSumOrderByAggregateInput
  }

  export type PropertyPoliciesScalarWhereWithAggregatesInput = {
    AND?: PropertyPoliciesScalarWhereWithAggregatesInput | PropertyPoliciesScalarWhereWithAggregatesInput[]
    OR?: PropertyPoliciesScalarWhereWithAggregatesInput[]
    NOT?: PropertyPoliciesScalarWhereWithAggregatesInput | PropertyPoliciesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PropertyPolicies"> | number
    listingId?: IntWithAggregatesFilter<"PropertyPolicies"> | number
    policy?: StringWithAggregatesFilter<"PropertyPolicies"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PropertyPolicies"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PropertyPolicies"> | Date | string
  }

  export type PropertyAmenitiesWhereInput = {
    AND?: PropertyAmenitiesWhereInput | PropertyAmenitiesWhereInput[]
    OR?: PropertyAmenitiesWhereInput[]
    NOT?: PropertyAmenitiesWhereInput | PropertyAmenitiesWhereInput[]
    id?: IntFilter<"PropertyAmenities"> | number
    listingId?: IntFilter<"PropertyAmenities"> | number
    amenity?: StringFilter<"PropertyAmenities"> | string
    createdAt?: DateTimeFilter<"PropertyAmenities"> | Date | string
    updatedAt?: DateTimeFilter<"PropertyAmenities"> | Date | string
    listing?: XOR<ListingScalarRelationFilter, ListingWhereInput>
  }

  export type PropertyAmenitiesOrderByWithRelationInput = {
    id?: SortOrder
    listingId?: SortOrder
    amenity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    listing?: ListingOrderByWithRelationInput
    _relevance?: PropertyAmenitiesOrderByRelevanceInput
  }

  export type PropertyAmenitiesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    listingId_amenity?: PropertyAmenitiesListingIdAmenityCompoundUniqueInput
    AND?: PropertyAmenitiesWhereInput | PropertyAmenitiesWhereInput[]
    OR?: PropertyAmenitiesWhereInput[]
    NOT?: PropertyAmenitiesWhereInput | PropertyAmenitiesWhereInput[]
    listingId?: IntFilter<"PropertyAmenities"> | number
    amenity?: StringFilter<"PropertyAmenities"> | string
    createdAt?: DateTimeFilter<"PropertyAmenities"> | Date | string
    updatedAt?: DateTimeFilter<"PropertyAmenities"> | Date | string
    listing?: XOR<ListingScalarRelationFilter, ListingWhereInput>
  }, "id" | "listingId_amenity">

  export type PropertyAmenitiesOrderByWithAggregationInput = {
    id?: SortOrder
    listingId?: SortOrder
    amenity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PropertyAmenitiesCountOrderByAggregateInput
    _avg?: PropertyAmenitiesAvgOrderByAggregateInput
    _max?: PropertyAmenitiesMaxOrderByAggregateInput
    _min?: PropertyAmenitiesMinOrderByAggregateInput
    _sum?: PropertyAmenitiesSumOrderByAggregateInput
  }

  export type PropertyAmenitiesScalarWhereWithAggregatesInput = {
    AND?: PropertyAmenitiesScalarWhereWithAggregatesInput | PropertyAmenitiesScalarWhereWithAggregatesInput[]
    OR?: PropertyAmenitiesScalarWhereWithAggregatesInput[]
    NOT?: PropertyAmenitiesScalarWhereWithAggregatesInput | PropertyAmenitiesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PropertyAmenities"> | number
    listingId?: IntWithAggregatesFilter<"PropertyAmenities"> | number
    amenity?: StringWithAggregatesFilter<"PropertyAmenities"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PropertyAmenities"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PropertyAmenities"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    scores?: ReviewCategoryScoreListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    scores?: ReviewCategoryScoreOrderByRelationAggregateInput
    _relevance?: CategoryOrderByRelevanceInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    scores?: ReviewCategoryScoreListRelationFilter
  }, "id" | "name">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    name?: StringWithAggregatesFilter<"Category"> | string
  }

  export type ReviewCategoryScoreWhereInput = {
    AND?: ReviewCategoryScoreWhereInput | ReviewCategoryScoreWhereInput[]
    OR?: ReviewCategoryScoreWhereInput[]
    NOT?: ReviewCategoryScoreWhereInput | ReviewCategoryScoreWhereInput[]
    reviewId?: IntFilter<"ReviewCategoryScore"> | number
    categoryId?: IntFilter<"ReviewCategoryScore"> | number
    score10?: DecimalNullableFilter<"ReviewCategoryScore"> | Decimal | DecimalJsLike | number | string | null
    score5?: DecimalNullableFilter<"ReviewCategoryScore"> | Decimal | DecimalJsLike | number | string | null
    review?: XOR<ReviewScalarRelationFilter, ReviewWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }

  export type ReviewCategoryScoreOrderByWithRelationInput = {
    reviewId?: SortOrder
    categoryId?: SortOrder
    score10?: SortOrderInput | SortOrder
    score5?: SortOrderInput | SortOrder
    review?: ReviewOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
  }

  export type ReviewCategoryScoreWhereUniqueInput = Prisma.AtLeast<{
    reviewId_categoryId?: ReviewCategoryScoreReviewIdCategoryIdCompoundUniqueInput
    AND?: ReviewCategoryScoreWhereInput | ReviewCategoryScoreWhereInput[]
    OR?: ReviewCategoryScoreWhereInput[]
    NOT?: ReviewCategoryScoreWhereInput | ReviewCategoryScoreWhereInput[]
    reviewId?: IntFilter<"ReviewCategoryScore"> | number
    categoryId?: IntFilter<"ReviewCategoryScore"> | number
    score10?: DecimalNullableFilter<"ReviewCategoryScore"> | Decimal | DecimalJsLike | number | string | null
    score5?: DecimalNullableFilter<"ReviewCategoryScore"> | Decimal | DecimalJsLike | number | string | null
    review?: XOR<ReviewScalarRelationFilter, ReviewWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }, "reviewId_categoryId">

  export type ReviewCategoryScoreOrderByWithAggregationInput = {
    reviewId?: SortOrder
    categoryId?: SortOrder
    score10?: SortOrderInput | SortOrder
    score5?: SortOrderInput | SortOrder
    _count?: ReviewCategoryScoreCountOrderByAggregateInput
    _avg?: ReviewCategoryScoreAvgOrderByAggregateInput
    _max?: ReviewCategoryScoreMaxOrderByAggregateInput
    _min?: ReviewCategoryScoreMinOrderByAggregateInput
    _sum?: ReviewCategoryScoreSumOrderByAggregateInput
  }

  export type ReviewCategoryScoreScalarWhereWithAggregatesInput = {
    AND?: ReviewCategoryScoreScalarWhereWithAggregatesInput | ReviewCategoryScoreScalarWhereWithAggregatesInput[]
    OR?: ReviewCategoryScoreScalarWhereWithAggregatesInput[]
    NOT?: ReviewCategoryScoreScalarWhereWithAggregatesInput | ReviewCategoryScoreScalarWhereWithAggregatesInput[]
    reviewId?: IntWithAggregatesFilter<"ReviewCategoryScore"> | number
    categoryId?: IntWithAggregatesFilter<"ReviewCategoryScore"> | number
    score10?: DecimalNullableWithAggregatesFilter<"ReviewCategoryScore"> | Decimal | DecimalJsLike | number | string | null
    score5?: DecimalNullableWithAggregatesFilter<"ReviewCategoryScore"> | Decimal | DecimalJsLike | number | string | null
  }

  export type ReviewRawIngestWhereInput = {
    AND?: ReviewRawIngestWhereInput | ReviewRawIngestWhereInput[]
    OR?: ReviewRawIngestWhereInput[]
    NOT?: ReviewRawIngestWhereInput | ReviewRawIngestWhereInput[]
    reviewId?: IntFilter<"ReviewRawIngest"> | number
    payload?: JsonFilter<"ReviewRawIngest">
    payloadHash?: StringFilter<"ReviewRawIngest"> | string
    review?: XOR<ReviewScalarRelationFilter, ReviewWhereInput>
  }

  export type ReviewRawIngestOrderByWithRelationInput = {
    reviewId?: SortOrder
    payload?: SortOrder
    payloadHash?: SortOrder
    review?: ReviewOrderByWithRelationInput
    _relevance?: ReviewRawIngestOrderByRelevanceInput
  }

  export type ReviewRawIngestWhereUniqueInput = Prisma.AtLeast<{
    reviewId?: number
    payloadHash?: string
    AND?: ReviewRawIngestWhereInput | ReviewRawIngestWhereInput[]
    OR?: ReviewRawIngestWhereInput[]
    NOT?: ReviewRawIngestWhereInput | ReviewRawIngestWhereInput[]
    payload?: JsonFilter<"ReviewRawIngest">
    review?: XOR<ReviewScalarRelationFilter, ReviewWhereInput>
  }, "reviewId" | "payloadHash">

  export type ReviewRawIngestOrderByWithAggregationInput = {
    reviewId?: SortOrder
    payload?: SortOrder
    payloadHash?: SortOrder
    _count?: ReviewRawIngestCountOrderByAggregateInput
    _avg?: ReviewRawIngestAvgOrderByAggregateInput
    _max?: ReviewRawIngestMaxOrderByAggregateInput
    _min?: ReviewRawIngestMinOrderByAggregateInput
    _sum?: ReviewRawIngestSumOrderByAggregateInput
  }

  export type ReviewRawIngestScalarWhereWithAggregatesInput = {
    AND?: ReviewRawIngestScalarWhereWithAggregatesInput | ReviewRawIngestScalarWhereWithAggregatesInput[]
    OR?: ReviewRawIngestScalarWhereWithAggregatesInput[]
    NOT?: ReviewRawIngestScalarWhereWithAggregatesInput | ReviewRawIngestScalarWhereWithAggregatesInput[]
    reviewId?: IntWithAggregatesFilter<"ReviewRawIngest"> | number
    payload?: JsonWithAggregatesFilter<"ReviewRawIngest">
    payloadHash?: StringWithAggregatesFilter<"ReviewRawIngest"> | string
  }

  export type FollowUpsWhereInput = {
    AND?: FollowUpsWhereInput | FollowUpsWhereInput[]
    OR?: FollowUpsWhereInput[]
    NOT?: FollowUpsWhereInput | FollowUpsWhereInput[]
    id?: IntFilter<"FollowUps"> | number
    reviewId?: IntFilter<"FollowUps"> | number
    term?: StringFilter<"FollowUps"> | string
    issueId?: StringNullableFilter<"FollowUps"> | string | null
    content?: StringFilter<"FollowUps"> | string
    createdAt?: DateTimeFilter<"FollowUps"> | Date | string
    updatedAt?: DateTimeFilter<"FollowUps"> | Date | string
    completed?: BoolFilter<"FollowUps"> | boolean
    closedAt?: DateTimeNullableFilter<"FollowUps"> | Date | string | null
    review?: XOR<ReviewScalarRelationFilter, ReviewWhereInput>
  }

  export type FollowUpsOrderByWithRelationInput = {
    id?: SortOrder
    reviewId?: SortOrder
    term?: SortOrder
    issueId?: SortOrderInput | SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    completed?: SortOrder
    closedAt?: SortOrderInput | SortOrder
    review?: ReviewOrderByWithRelationInput
    _relevance?: FollowUpsOrderByRelevanceInput
  }

  export type FollowUpsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FollowUpsWhereInput | FollowUpsWhereInput[]
    OR?: FollowUpsWhereInput[]
    NOT?: FollowUpsWhereInput | FollowUpsWhereInput[]
    reviewId?: IntFilter<"FollowUps"> | number
    term?: StringFilter<"FollowUps"> | string
    issueId?: StringNullableFilter<"FollowUps"> | string | null
    content?: StringFilter<"FollowUps"> | string
    createdAt?: DateTimeFilter<"FollowUps"> | Date | string
    updatedAt?: DateTimeFilter<"FollowUps"> | Date | string
    completed?: BoolFilter<"FollowUps"> | boolean
    closedAt?: DateTimeNullableFilter<"FollowUps"> | Date | string | null
    review?: XOR<ReviewScalarRelationFilter, ReviewWhereInput>
  }, "id">

  export type FollowUpsOrderByWithAggregationInput = {
    id?: SortOrder
    reviewId?: SortOrder
    term?: SortOrder
    issueId?: SortOrderInput | SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    completed?: SortOrder
    closedAt?: SortOrderInput | SortOrder
    _count?: FollowUpsCountOrderByAggregateInput
    _avg?: FollowUpsAvgOrderByAggregateInput
    _max?: FollowUpsMaxOrderByAggregateInput
    _min?: FollowUpsMinOrderByAggregateInput
    _sum?: FollowUpsSumOrderByAggregateInput
  }

  export type FollowUpsScalarWhereWithAggregatesInput = {
    AND?: FollowUpsScalarWhereWithAggregatesInput | FollowUpsScalarWhereWithAggregatesInput[]
    OR?: FollowUpsScalarWhereWithAggregatesInput[]
    NOT?: FollowUpsScalarWhereWithAggregatesInput | FollowUpsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FollowUps"> | number
    reviewId?: IntWithAggregatesFilter<"FollowUps"> | number
    term?: StringWithAggregatesFilter<"FollowUps"> | string
    issueId?: StringNullableWithAggregatesFilter<"FollowUps"> | string | null
    content?: StringWithAggregatesFilter<"FollowUps"> | string
    createdAt?: DateTimeWithAggregatesFilter<"FollowUps"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FollowUps"> | Date | string
    completed?: BoolWithAggregatesFilter<"FollowUps"> | boolean
    closedAt?: DateTimeNullableWithAggregatesFilter<"FollowUps"> | Date | string | null
  }

  export type NotesCreateInput = {
    title: string
    content: string
    color: $Enums.Color
    createdAt?: Date | string
    updatedAt?: Date | string
    completed?: boolean
  }

  export type NotesUncheckedCreateInput = {
    id?: number
    title: string
    content: string
    color: $Enums.Color
    createdAt?: Date | string
    updatedAt?: Date | string
    completed?: boolean
  }

  export type NotesUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    color?: EnumColorFieldUpdateOperationsInput | $Enums.Color
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    color?: EnumColorFieldUpdateOperationsInput | $Enums.Color
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotesCreateManyInput = {
    id?: number
    title: string
    content: string
    color: $Enums.Color
    createdAt?: Date | string
    updatedAt?: Date | string
    completed?: boolean
  }

  export type NotesUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    color?: EnumColorFieldUpdateOperationsInput | $Enums.Color
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    color?: EnumColorFieldUpdateOperationsInput | $Enums.Color
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ApprovedReviewCreateInput = {
    name: string
    status?: $Enums.ReviewStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    approvalNotes?: string | null
    approvedBy?: string | null
    approvedAt?: Date | string | null
    approved?: boolean
    reviews: ReviewCreateNestedOneWithoutApprovedReviewInput
  }

  export type ApprovedReviewUncheckedCreateInput = {
    name: string
    status?: $Enums.ReviewStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewId: number
    approvalNotes?: string | null
    approvedBy?: string | null
    approvedAt?: Date | string | null
    approved?: boolean
  }

  export type ApprovedReviewUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approved?: BoolFieldUpdateOperationsInput | boolean
    reviews?: ReviewUpdateOneRequiredWithoutApprovedReviewNestedInput
  }

  export type ApprovedReviewUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewId?: IntFieldUpdateOperationsInput | number
    approvalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approved?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ApprovedReviewCreateManyInput = {
    name: string
    status?: $Enums.ReviewStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewId: number
    approvalNotes?: string | null
    approvedBy?: string | null
    approvedAt?: Date | string | null
    approved?: boolean
  }

  export type ApprovedReviewUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approved?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ApprovedReviewUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewId?: IntFieldUpdateOperationsInput | number
    approvalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approved?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ReviewCreateInput = {
    sourceSystem?: string
    sourceReviewId: string
    channel: $Enums.Channel
    rating10?: Decimal | DecimalJsLike | number | string | null
    overall5: Decimal | DecimalJsLike | number | string
    type: $Enums.ReviewType
    publicReview: string
    submittedAt: Date | string
    guestName: string
    listingName: string
    status?: $Enums.ReviewStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    Property: ListingCreateNestedOneWithoutReviewsInput
    ReviewCategoryScore?: ReviewCategoryScoreCreateNestedManyWithoutReviewInput
    ApprovedReview?: ApprovedReviewCreateNestedOneWithoutReviewsInput
    raw?: ReviewRawIngestCreateNestedOneWithoutReviewInput
    FollowUps?: FollowUpsCreateNestedManyWithoutReviewInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: number
    sourceSystem?: string
    sourceReviewId: string
    channel: $Enums.Channel
    listingId: number
    rating10?: Decimal | DecimalJsLike | number | string | null
    overall5: Decimal | DecimalJsLike | number | string
    type: $Enums.ReviewType
    publicReview: string
    submittedAt: Date | string
    guestName: string
    listingName: string
    status?: $Enums.ReviewStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    ReviewCategoryScore?: ReviewCategoryScoreUncheckedCreateNestedManyWithoutReviewInput
    ApprovedReview?: ApprovedReviewUncheckedCreateNestedOneWithoutReviewsInput
    raw?: ReviewRawIngestUncheckedCreateNestedOneWithoutReviewInput
    FollowUps?: FollowUpsUncheckedCreateNestedManyWithoutReviewInput
  }

  export type ReviewUpdateInput = {
    sourceSystem?: StringFieldUpdateOperationsInput | string
    sourceReviewId?: StringFieldUpdateOperationsInput | string
    channel?: EnumChannelFieldUpdateOperationsInput | $Enums.Channel
    rating10?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    overall5?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumReviewTypeFieldUpdateOperationsInput | $Enums.ReviewType
    publicReview?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guestName?: StringFieldUpdateOperationsInput | string
    listingName?: StringFieldUpdateOperationsInput | string
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Property?: ListingUpdateOneRequiredWithoutReviewsNestedInput
    ReviewCategoryScore?: ReviewCategoryScoreUpdateManyWithoutReviewNestedInput
    ApprovedReview?: ApprovedReviewUpdateOneWithoutReviewsNestedInput
    raw?: ReviewRawIngestUpdateOneWithoutReviewNestedInput
    FollowUps?: FollowUpsUpdateManyWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sourceSystem?: StringFieldUpdateOperationsInput | string
    sourceReviewId?: StringFieldUpdateOperationsInput | string
    channel?: EnumChannelFieldUpdateOperationsInput | $Enums.Channel
    listingId?: IntFieldUpdateOperationsInput | number
    rating10?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    overall5?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumReviewTypeFieldUpdateOperationsInput | $Enums.ReviewType
    publicReview?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guestName?: StringFieldUpdateOperationsInput | string
    listingName?: StringFieldUpdateOperationsInput | string
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ReviewCategoryScore?: ReviewCategoryScoreUncheckedUpdateManyWithoutReviewNestedInput
    ApprovedReview?: ApprovedReviewUncheckedUpdateOneWithoutReviewsNestedInput
    raw?: ReviewRawIngestUncheckedUpdateOneWithoutReviewNestedInput
    FollowUps?: FollowUpsUncheckedUpdateManyWithoutReviewNestedInput
  }

  export type ReviewCreateManyInput = {
    id?: number
    sourceSystem?: string
    sourceReviewId: string
    channel: $Enums.Channel
    listingId: number
    rating10?: Decimal | DecimalJsLike | number | string | null
    overall5: Decimal | DecimalJsLike | number | string
    type: $Enums.ReviewType
    publicReview: string
    submittedAt: Date | string
    guestName: string
    listingName: string
    status?: $Enums.ReviewStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateManyMutationInput = {
    sourceSystem?: StringFieldUpdateOperationsInput | string
    sourceReviewId?: StringFieldUpdateOperationsInput | string
    channel?: EnumChannelFieldUpdateOperationsInput | $Enums.Channel
    rating10?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    overall5?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumReviewTypeFieldUpdateOperationsInput | $Enums.ReviewType
    publicReview?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guestName?: StringFieldUpdateOperationsInput | string
    listingName?: StringFieldUpdateOperationsInput | string
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sourceSystem?: StringFieldUpdateOperationsInput | string
    sourceReviewId?: StringFieldUpdateOperationsInput | string
    channel?: EnumChannelFieldUpdateOperationsInput | $Enums.Channel
    listingId?: IntFieldUpdateOperationsInput | number
    rating10?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    overall5?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumReviewTypeFieldUpdateOperationsInput | $Enums.ReviewType
    publicReview?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guestName?: StringFieldUpdateOperationsInput | string
    listingName?: StringFieldUpdateOperationsInput | string
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListingCreateInput = {
    slug: string
    name: string
    address?: string | null
    city?: string | null
    state?: string | null
    zip?: string | null
    country?: string | null
    propertyDesc?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewCreateNestedManyWithoutPropertyInput
    rules?: PropertyRulesCreateNestedManyWithoutListingInput
    policies?: PropertyPoliciesCreateNestedManyWithoutListingInput
    amenities?: PropertyAmenitiesCreateNestedManyWithoutListingInput
  }

  export type ListingUncheckedCreateInput = {
    id?: number
    slug: string
    name: string
    address?: string | null
    city?: string | null
    state?: string | null
    zip?: string | null
    country?: string | null
    propertyDesc?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutPropertyInput
    rules?: PropertyRulesUncheckedCreateNestedManyWithoutListingInput
    policies?: PropertyPoliciesUncheckedCreateNestedManyWithoutListingInput
    amenities?: PropertyAmenitiesUncheckedCreateNestedManyWithoutListingInput
  }

  export type ListingUpdateInput = {
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    propertyDesc?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUpdateManyWithoutPropertyNestedInput
    rules?: PropertyRulesUpdateManyWithoutListingNestedInput
    policies?: PropertyPoliciesUpdateManyWithoutListingNestedInput
    amenities?: PropertyAmenitiesUpdateManyWithoutListingNestedInput
  }

  export type ListingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    propertyDesc?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutPropertyNestedInput
    rules?: PropertyRulesUncheckedUpdateManyWithoutListingNestedInput
    policies?: PropertyPoliciesUncheckedUpdateManyWithoutListingNestedInput
    amenities?: PropertyAmenitiesUncheckedUpdateManyWithoutListingNestedInput
  }

  export type ListingCreateManyInput = {
    id?: number
    slug: string
    name: string
    address?: string | null
    city?: string | null
    state?: string | null
    zip?: string | null
    country?: string | null
    propertyDesc?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ListingUpdateManyMutationInput = {
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    propertyDesc?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    propertyDesc?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyRulesCreateInput = {
    rule: string
    createdAt?: Date | string
    updatedAt?: Date | string
    listing: ListingCreateNestedOneWithoutRulesInput
  }

  export type PropertyRulesUncheckedCreateInput = {
    id?: number
    listingId: number
    rule: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyRulesUpdateInput = {
    rule?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listing?: ListingUpdateOneRequiredWithoutRulesNestedInput
  }

  export type PropertyRulesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    listingId?: IntFieldUpdateOperationsInput | number
    rule?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyRulesCreateManyInput = {
    id?: number
    listingId: number
    rule: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyRulesUpdateManyMutationInput = {
    rule?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyRulesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    listingId?: IntFieldUpdateOperationsInput | number
    rule?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyPoliciesCreateInput = {
    policy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    listing: ListingCreateNestedOneWithoutPoliciesInput
  }

  export type PropertyPoliciesUncheckedCreateInput = {
    id?: number
    listingId: number
    policy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyPoliciesUpdateInput = {
    policy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listing?: ListingUpdateOneRequiredWithoutPoliciesNestedInput
  }

  export type PropertyPoliciesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    listingId?: IntFieldUpdateOperationsInput | number
    policy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyPoliciesCreateManyInput = {
    id?: number
    listingId: number
    policy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyPoliciesUpdateManyMutationInput = {
    policy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyPoliciesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    listingId?: IntFieldUpdateOperationsInput | number
    policy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyAmenitiesCreateInput = {
    amenity: string
    createdAt?: Date | string
    updatedAt?: Date | string
    listing: ListingCreateNestedOneWithoutAmenitiesInput
  }

  export type PropertyAmenitiesUncheckedCreateInput = {
    id?: number
    listingId: number
    amenity: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyAmenitiesUpdateInput = {
    amenity?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listing?: ListingUpdateOneRequiredWithoutAmenitiesNestedInput
  }

  export type PropertyAmenitiesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    listingId?: IntFieldUpdateOperationsInput | number
    amenity?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyAmenitiesCreateManyInput = {
    id?: number
    listingId: number
    amenity: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyAmenitiesUpdateManyMutationInput = {
    amenity?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyAmenitiesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    listingId?: IntFieldUpdateOperationsInput | number
    amenity?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    name: string
    scores?: ReviewCategoryScoreCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    name: string
    scores?: ReviewCategoryScoreUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    scores?: ReviewCategoryScoreUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    scores?: ReviewCategoryScoreUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    name: string
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewCategoryScoreCreateInput = {
    score10?: Decimal | DecimalJsLike | number | string | null
    score5?: Decimal | DecimalJsLike | number | string | null
    review: ReviewCreateNestedOneWithoutReviewCategoryScoreInput
    category: CategoryCreateNestedOneWithoutScoresInput
  }

  export type ReviewCategoryScoreUncheckedCreateInput = {
    reviewId: number
    categoryId: number
    score10?: Decimal | DecimalJsLike | number | string | null
    score5?: Decimal | DecimalJsLike | number | string | null
  }

  export type ReviewCategoryScoreUpdateInput = {
    score10?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    score5?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    review?: ReviewUpdateOneRequiredWithoutReviewCategoryScoreNestedInput
    category?: CategoryUpdateOneRequiredWithoutScoresNestedInput
  }

  export type ReviewCategoryScoreUncheckedUpdateInput = {
    reviewId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    score10?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    score5?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type ReviewCategoryScoreCreateManyInput = {
    reviewId: number
    categoryId: number
    score10?: Decimal | DecimalJsLike | number | string | null
    score5?: Decimal | DecimalJsLike | number | string | null
  }

  export type ReviewCategoryScoreUpdateManyMutationInput = {
    score10?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    score5?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type ReviewCategoryScoreUncheckedUpdateManyInput = {
    reviewId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    score10?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    score5?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type ReviewRawIngestCreateInput = {
    payload: JsonNullValueInput | InputJsonValue
    payloadHash: string
    review: ReviewCreateNestedOneWithoutRawInput
  }

  export type ReviewRawIngestUncheckedCreateInput = {
    reviewId: number
    payload: JsonNullValueInput | InputJsonValue
    payloadHash: string
  }

  export type ReviewRawIngestUpdateInput = {
    payload?: JsonNullValueInput | InputJsonValue
    payloadHash?: StringFieldUpdateOperationsInput | string
    review?: ReviewUpdateOneRequiredWithoutRawNestedInput
  }

  export type ReviewRawIngestUncheckedUpdateInput = {
    reviewId?: IntFieldUpdateOperationsInput | number
    payload?: JsonNullValueInput | InputJsonValue
    payloadHash?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewRawIngestCreateManyInput = {
    reviewId: number
    payload: JsonNullValueInput | InputJsonValue
    payloadHash: string
  }

  export type ReviewRawIngestUpdateManyMutationInput = {
    payload?: JsonNullValueInput | InputJsonValue
    payloadHash?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewRawIngestUncheckedUpdateManyInput = {
    reviewId?: IntFieldUpdateOperationsInput | number
    payload?: JsonNullValueInput | InputJsonValue
    payloadHash?: StringFieldUpdateOperationsInput | string
  }

  export type FollowUpsCreateInput = {
    term: string
    issueId?: string | null
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    completed?: boolean
    closedAt?: Date | string | null
    review: ReviewCreateNestedOneWithoutFollowUpsInput
  }

  export type FollowUpsUncheckedCreateInput = {
    id?: number
    reviewId: number
    term: string
    issueId?: string | null
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    completed?: boolean
    closedAt?: Date | string | null
  }

  export type FollowUpsUpdateInput = {
    term?: StringFieldUpdateOperationsInput | string
    issueId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    review?: ReviewUpdateOneRequiredWithoutFollowUpsNestedInput
  }

  export type FollowUpsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    reviewId?: IntFieldUpdateOperationsInput | number
    term?: StringFieldUpdateOperationsInput | string
    issueId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FollowUpsCreateManyInput = {
    id?: number
    reviewId: number
    term: string
    issueId?: string | null
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    completed?: boolean
    closedAt?: Date | string | null
  }

  export type FollowUpsUpdateManyMutationInput = {
    term?: StringFieldUpdateOperationsInput | string
    issueId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FollowUpsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    reviewId?: IntFieldUpdateOperationsInput | number
    term?: StringFieldUpdateOperationsInput | string
    issueId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumColorFilter<$PrismaModel = never> = {
    equals?: $Enums.Color | EnumColorFieldRefInput<$PrismaModel>
    in?: $Enums.Color[]
    notIn?: $Enums.Color[]
    not?: NestedEnumColorFilter<$PrismaModel> | $Enums.Color
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NotesOrderByRelevanceInput = {
    fields: NotesOrderByRelevanceFieldEnum | NotesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type NotesCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    completed?: SortOrder
  }

  export type NotesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NotesMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    completed?: SortOrder
  }

  export type NotesMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    completed?: SortOrder
  }

  export type NotesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumColorWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Color | EnumColorFieldRefInput<$PrismaModel>
    in?: $Enums.Color[]
    notIn?: $Enums.Color[]
    not?: NestedEnumColorWithAggregatesFilter<$PrismaModel> | $Enums.Color
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumColorFilter<$PrismaModel>
    _max?: NestedEnumColorFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumReviewStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewStatus | EnumReviewStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewStatus[]
    notIn?: $Enums.ReviewStatus[]
    not?: NestedEnumReviewStatusFilter<$PrismaModel> | $Enums.ReviewStatus
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ReviewScalarRelationFilter = {
    is?: ReviewWhereInput
    isNot?: ReviewWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ApprovedReviewOrderByRelevanceInput = {
    fields: ApprovedReviewOrderByRelevanceFieldEnum | ApprovedReviewOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ApprovedReviewCountOrderByAggregateInput = {
    name?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reviewId?: SortOrder
    approvalNotes?: SortOrder
    approvedBy?: SortOrder
    approvedAt?: SortOrder
    approved?: SortOrder
  }

  export type ApprovedReviewAvgOrderByAggregateInput = {
    reviewId?: SortOrder
  }

  export type ApprovedReviewMaxOrderByAggregateInput = {
    name?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reviewId?: SortOrder
    approvalNotes?: SortOrder
    approvedBy?: SortOrder
    approvedAt?: SortOrder
    approved?: SortOrder
  }

  export type ApprovedReviewMinOrderByAggregateInput = {
    name?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reviewId?: SortOrder
    approvalNotes?: SortOrder
    approvedBy?: SortOrder
    approvedAt?: SortOrder
    approved?: SortOrder
  }

  export type ApprovedReviewSumOrderByAggregateInput = {
    reviewId?: SortOrder
  }

  export type EnumReviewStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewStatus | EnumReviewStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewStatus[]
    notIn?: $Enums.ReviewStatus[]
    not?: NestedEnumReviewStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReviewStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReviewStatusFilter<$PrismaModel>
    _max?: NestedEnumReviewStatusFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumChannelFilter<$PrismaModel = never> = {
    equals?: $Enums.Channel | EnumChannelFieldRefInput<$PrismaModel>
    in?: $Enums.Channel[]
    notIn?: $Enums.Channel[]
    not?: NestedEnumChannelFilter<$PrismaModel> | $Enums.Channel
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumReviewTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewType | EnumReviewTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewType[]
    notIn?: $Enums.ReviewType[]
    not?: NestedEnumReviewTypeFilter<$PrismaModel> | $Enums.ReviewType
  }

  export type ListingScalarRelationFilter = {
    is?: ListingWhereInput
    isNot?: ListingWhereInput
  }

  export type ReviewCategoryScoreListRelationFilter = {
    every?: ReviewCategoryScoreWhereInput
    some?: ReviewCategoryScoreWhereInput
    none?: ReviewCategoryScoreWhereInput
  }

  export type ApprovedReviewNullableScalarRelationFilter = {
    is?: ApprovedReviewWhereInput | null
    isNot?: ApprovedReviewWhereInput | null
  }

  export type ReviewRawIngestNullableScalarRelationFilter = {
    is?: ReviewRawIngestWhereInput | null
    isNot?: ReviewRawIngestWhereInput | null
  }

  export type FollowUpsListRelationFilter = {
    every?: FollowUpsWhereInput
    some?: FollowUpsWhereInput
    none?: FollowUpsWhereInput
  }

  export type ReviewCategoryScoreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FollowUpsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelevanceInput = {
    fields: ReviewOrderByRelevanceFieldEnum | ReviewOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ReviewSourceSystemSourceReviewIdChannelCompoundUniqueInput = {
    sourceSystem: string
    sourceReviewId: string
    channel: $Enums.Channel
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    sourceSystem?: SortOrder
    sourceReviewId?: SortOrder
    channel?: SortOrder
    listingId?: SortOrder
    rating10?: SortOrder
    overall5?: SortOrder
    type?: SortOrder
    publicReview?: SortOrder
    submittedAt?: SortOrder
    guestName?: SortOrder
    listingName?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    id?: SortOrder
    listingId?: SortOrder
    rating10?: SortOrder
    overall5?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    sourceSystem?: SortOrder
    sourceReviewId?: SortOrder
    channel?: SortOrder
    listingId?: SortOrder
    rating10?: SortOrder
    overall5?: SortOrder
    type?: SortOrder
    publicReview?: SortOrder
    submittedAt?: SortOrder
    guestName?: SortOrder
    listingName?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    sourceSystem?: SortOrder
    sourceReviewId?: SortOrder
    channel?: SortOrder
    listingId?: SortOrder
    rating10?: SortOrder
    overall5?: SortOrder
    type?: SortOrder
    publicReview?: SortOrder
    submittedAt?: SortOrder
    guestName?: SortOrder
    listingName?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    id?: SortOrder
    listingId?: SortOrder
    rating10?: SortOrder
    overall5?: SortOrder
  }

  export type EnumChannelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Channel | EnumChannelFieldRefInput<$PrismaModel>
    in?: $Enums.Channel[]
    notIn?: $Enums.Channel[]
    not?: NestedEnumChannelWithAggregatesFilter<$PrismaModel> | $Enums.Channel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChannelFilter<$PrismaModel>
    _max?: NestedEnumChannelFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumReviewTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewType | EnumReviewTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewType[]
    notIn?: $Enums.ReviewType[]
    not?: NestedEnumReviewTypeWithAggregatesFilter<$PrismaModel> | $Enums.ReviewType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReviewTypeFilter<$PrismaModel>
    _max?: NestedEnumReviewTypeFilter<$PrismaModel>
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type PropertyRulesListRelationFilter = {
    every?: PropertyRulesWhereInput
    some?: PropertyRulesWhereInput
    none?: PropertyRulesWhereInput
  }

  export type PropertyPoliciesListRelationFilter = {
    every?: PropertyPoliciesWhereInput
    some?: PropertyPoliciesWhereInput
    none?: PropertyPoliciesWhereInput
  }

  export type PropertyAmenitiesListRelationFilter = {
    every?: PropertyAmenitiesWhereInput
    some?: PropertyAmenitiesWhereInput
    none?: PropertyAmenitiesWhereInput
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PropertyRulesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PropertyPoliciesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PropertyAmenitiesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ListingOrderByRelevanceInput = {
    fields: ListingOrderByRelevanceFieldEnum | ListingOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ListingCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip?: SortOrder
    country?: SortOrder
    propertyDesc?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ListingAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ListingMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip?: SortOrder
    country?: SortOrder
    propertyDesc?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ListingMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip?: SortOrder
    country?: SortOrder
    propertyDesc?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ListingSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PropertyRulesOrderByRelevanceInput = {
    fields: PropertyRulesOrderByRelevanceFieldEnum | PropertyRulesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PropertyRulesListingIdRuleCompoundUniqueInput = {
    listingId: number
    rule: string
  }

  export type PropertyRulesCountOrderByAggregateInput = {
    id?: SortOrder
    listingId?: SortOrder
    rule?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertyRulesAvgOrderByAggregateInput = {
    id?: SortOrder
    listingId?: SortOrder
  }

  export type PropertyRulesMaxOrderByAggregateInput = {
    id?: SortOrder
    listingId?: SortOrder
    rule?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertyRulesMinOrderByAggregateInput = {
    id?: SortOrder
    listingId?: SortOrder
    rule?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertyRulesSumOrderByAggregateInput = {
    id?: SortOrder
    listingId?: SortOrder
  }

  export type PropertyPoliciesOrderByRelevanceInput = {
    fields: PropertyPoliciesOrderByRelevanceFieldEnum | PropertyPoliciesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PropertyPoliciesListingIdPolicyCompoundUniqueInput = {
    listingId: number
    policy: string
  }

  export type PropertyPoliciesCountOrderByAggregateInput = {
    id?: SortOrder
    listingId?: SortOrder
    policy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertyPoliciesAvgOrderByAggregateInput = {
    id?: SortOrder
    listingId?: SortOrder
  }

  export type PropertyPoliciesMaxOrderByAggregateInput = {
    id?: SortOrder
    listingId?: SortOrder
    policy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertyPoliciesMinOrderByAggregateInput = {
    id?: SortOrder
    listingId?: SortOrder
    policy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertyPoliciesSumOrderByAggregateInput = {
    id?: SortOrder
    listingId?: SortOrder
  }

  export type PropertyAmenitiesOrderByRelevanceInput = {
    fields: PropertyAmenitiesOrderByRelevanceFieldEnum | PropertyAmenitiesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PropertyAmenitiesListingIdAmenityCompoundUniqueInput = {
    listingId: number
    amenity: string
  }

  export type PropertyAmenitiesCountOrderByAggregateInput = {
    id?: SortOrder
    listingId?: SortOrder
    amenity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertyAmenitiesAvgOrderByAggregateInput = {
    id?: SortOrder
    listingId?: SortOrder
  }

  export type PropertyAmenitiesMaxOrderByAggregateInput = {
    id?: SortOrder
    listingId?: SortOrder
    amenity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertyAmenitiesMinOrderByAggregateInput = {
    id?: SortOrder
    listingId?: SortOrder
    amenity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertyAmenitiesSumOrderByAggregateInput = {
    id?: SortOrder
    listingId?: SortOrder
  }

  export type CategoryOrderByRelevanceInput = {
    fields: CategoryOrderByRelevanceFieldEnum | CategoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type ReviewCategoryScoreReviewIdCategoryIdCompoundUniqueInput = {
    reviewId: number
    categoryId: number
  }

  export type ReviewCategoryScoreCountOrderByAggregateInput = {
    reviewId?: SortOrder
    categoryId?: SortOrder
    score10?: SortOrder
    score5?: SortOrder
  }

  export type ReviewCategoryScoreAvgOrderByAggregateInput = {
    reviewId?: SortOrder
    categoryId?: SortOrder
    score10?: SortOrder
    score5?: SortOrder
  }

  export type ReviewCategoryScoreMaxOrderByAggregateInput = {
    reviewId?: SortOrder
    categoryId?: SortOrder
    score10?: SortOrder
    score5?: SortOrder
  }

  export type ReviewCategoryScoreMinOrderByAggregateInput = {
    reviewId?: SortOrder
    categoryId?: SortOrder
    score10?: SortOrder
    score5?: SortOrder
  }

  export type ReviewCategoryScoreSumOrderByAggregateInput = {
    reviewId?: SortOrder
    categoryId?: SortOrder
    score10?: SortOrder
    score5?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ReviewRawIngestOrderByRelevanceInput = {
    fields: ReviewRawIngestOrderByRelevanceFieldEnum | ReviewRawIngestOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ReviewRawIngestCountOrderByAggregateInput = {
    reviewId?: SortOrder
    payload?: SortOrder
    payloadHash?: SortOrder
  }

  export type ReviewRawIngestAvgOrderByAggregateInput = {
    reviewId?: SortOrder
  }

  export type ReviewRawIngestMaxOrderByAggregateInput = {
    reviewId?: SortOrder
    payloadHash?: SortOrder
  }

  export type ReviewRawIngestMinOrderByAggregateInput = {
    reviewId?: SortOrder
    payloadHash?: SortOrder
  }

  export type ReviewRawIngestSumOrderByAggregateInput = {
    reviewId?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type FollowUpsOrderByRelevanceInput = {
    fields: FollowUpsOrderByRelevanceFieldEnum | FollowUpsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FollowUpsCountOrderByAggregateInput = {
    id?: SortOrder
    reviewId?: SortOrder
    term?: SortOrder
    issueId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    completed?: SortOrder
    closedAt?: SortOrder
  }

  export type FollowUpsAvgOrderByAggregateInput = {
    id?: SortOrder
    reviewId?: SortOrder
  }

  export type FollowUpsMaxOrderByAggregateInput = {
    id?: SortOrder
    reviewId?: SortOrder
    term?: SortOrder
    issueId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    completed?: SortOrder
    closedAt?: SortOrder
  }

  export type FollowUpsMinOrderByAggregateInput = {
    id?: SortOrder
    reviewId?: SortOrder
    term?: SortOrder
    issueId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    completed?: SortOrder
    closedAt?: SortOrder
  }

  export type FollowUpsSumOrderByAggregateInput = {
    id?: SortOrder
    reviewId?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumColorFieldUpdateOperationsInput = {
    set?: $Enums.Color
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ReviewCreateNestedOneWithoutApprovedReviewInput = {
    create?: XOR<ReviewCreateWithoutApprovedReviewInput, ReviewUncheckedCreateWithoutApprovedReviewInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutApprovedReviewInput
    connect?: ReviewWhereUniqueInput
  }

  export type EnumReviewStatusFieldUpdateOperationsInput = {
    set?: $Enums.ReviewStatus
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ReviewUpdateOneRequiredWithoutApprovedReviewNestedInput = {
    create?: XOR<ReviewCreateWithoutApprovedReviewInput, ReviewUncheckedCreateWithoutApprovedReviewInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutApprovedReviewInput
    upsert?: ReviewUpsertWithoutApprovedReviewInput
    connect?: ReviewWhereUniqueInput
    update?: XOR<XOR<ReviewUpdateToOneWithWhereWithoutApprovedReviewInput, ReviewUpdateWithoutApprovedReviewInput>, ReviewUncheckedUpdateWithoutApprovedReviewInput>
  }

  export type ListingCreateNestedOneWithoutReviewsInput = {
    create?: XOR<ListingCreateWithoutReviewsInput, ListingUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ListingCreateOrConnectWithoutReviewsInput
    connect?: ListingWhereUniqueInput
  }

  export type ReviewCategoryScoreCreateNestedManyWithoutReviewInput = {
    create?: XOR<ReviewCategoryScoreCreateWithoutReviewInput, ReviewCategoryScoreUncheckedCreateWithoutReviewInput> | ReviewCategoryScoreCreateWithoutReviewInput[] | ReviewCategoryScoreUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: ReviewCategoryScoreCreateOrConnectWithoutReviewInput | ReviewCategoryScoreCreateOrConnectWithoutReviewInput[]
    createMany?: ReviewCategoryScoreCreateManyReviewInputEnvelope
    connect?: ReviewCategoryScoreWhereUniqueInput | ReviewCategoryScoreWhereUniqueInput[]
  }

  export type ApprovedReviewCreateNestedOneWithoutReviewsInput = {
    create?: XOR<ApprovedReviewCreateWithoutReviewsInput, ApprovedReviewUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ApprovedReviewCreateOrConnectWithoutReviewsInput
    connect?: ApprovedReviewWhereUniqueInput
  }

  export type ReviewRawIngestCreateNestedOneWithoutReviewInput = {
    create?: XOR<ReviewRawIngestCreateWithoutReviewInput, ReviewRawIngestUncheckedCreateWithoutReviewInput>
    connectOrCreate?: ReviewRawIngestCreateOrConnectWithoutReviewInput
    connect?: ReviewRawIngestWhereUniqueInput
  }

  export type FollowUpsCreateNestedManyWithoutReviewInput = {
    create?: XOR<FollowUpsCreateWithoutReviewInput, FollowUpsUncheckedCreateWithoutReviewInput> | FollowUpsCreateWithoutReviewInput[] | FollowUpsUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: FollowUpsCreateOrConnectWithoutReviewInput | FollowUpsCreateOrConnectWithoutReviewInput[]
    createMany?: FollowUpsCreateManyReviewInputEnvelope
    connect?: FollowUpsWhereUniqueInput | FollowUpsWhereUniqueInput[]
  }

  export type ReviewCategoryScoreUncheckedCreateNestedManyWithoutReviewInput = {
    create?: XOR<ReviewCategoryScoreCreateWithoutReviewInput, ReviewCategoryScoreUncheckedCreateWithoutReviewInput> | ReviewCategoryScoreCreateWithoutReviewInput[] | ReviewCategoryScoreUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: ReviewCategoryScoreCreateOrConnectWithoutReviewInput | ReviewCategoryScoreCreateOrConnectWithoutReviewInput[]
    createMany?: ReviewCategoryScoreCreateManyReviewInputEnvelope
    connect?: ReviewCategoryScoreWhereUniqueInput | ReviewCategoryScoreWhereUniqueInput[]
  }

  export type ApprovedReviewUncheckedCreateNestedOneWithoutReviewsInput = {
    create?: XOR<ApprovedReviewCreateWithoutReviewsInput, ApprovedReviewUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ApprovedReviewCreateOrConnectWithoutReviewsInput
    connect?: ApprovedReviewWhereUniqueInput
  }

  export type ReviewRawIngestUncheckedCreateNestedOneWithoutReviewInput = {
    create?: XOR<ReviewRawIngestCreateWithoutReviewInput, ReviewRawIngestUncheckedCreateWithoutReviewInput>
    connectOrCreate?: ReviewRawIngestCreateOrConnectWithoutReviewInput
    connect?: ReviewRawIngestWhereUniqueInput
  }

  export type FollowUpsUncheckedCreateNestedManyWithoutReviewInput = {
    create?: XOR<FollowUpsCreateWithoutReviewInput, FollowUpsUncheckedCreateWithoutReviewInput> | FollowUpsCreateWithoutReviewInput[] | FollowUpsUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: FollowUpsCreateOrConnectWithoutReviewInput | FollowUpsCreateOrConnectWithoutReviewInput[]
    createMany?: FollowUpsCreateManyReviewInputEnvelope
    connect?: FollowUpsWhereUniqueInput | FollowUpsWhereUniqueInput[]
  }

  export type EnumChannelFieldUpdateOperationsInput = {
    set?: $Enums.Channel
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumReviewTypeFieldUpdateOperationsInput = {
    set?: $Enums.ReviewType
  }

  export type ListingUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<ListingCreateWithoutReviewsInput, ListingUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ListingCreateOrConnectWithoutReviewsInput
    upsert?: ListingUpsertWithoutReviewsInput
    connect?: ListingWhereUniqueInput
    update?: XOR<XOR<ListingUpdateToOneWithWhereWithoutReviewsInput, ListingUpdateWithoutReviewsInput>, ListingUncheckedUpdateWithoutReviewsInput>
  }

  export type ReviewCategoryScoreUpdateManyWithoutReviewNestedInput = {
    create?: XOR<ReviewCategoryScoreCreateWithoutReviewInput, ReviewCategoryScoreUncheckedCreateWithoutReviewInput> | ReviewCategoryScoreCreateWithoutReviewInput[] | ReviewCategoryScoreUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: ReviewCategoryScoreCreateOrConnectWithoutReviewInput | ReviewCategoryScoreCreateOrConnectWithoutReviewInput[]
    upsert?: ReviewCategoryScoreUpsertWithWhereUniqueWithoutReviewInput | ReviewCategoryScoreUpsertWithWhereUniqueWithoutReviewInput[]
    createMany?: ReviewCategoryScoreCreateManyReviewInputEnvelope
    set?: ReviewCategoryScoreWhereUniqueInput | ReviewCategoryScoreWhereUniqueInput[]
    disconnect?: ReviewCategoryScoreWhereUniqueInput | ReviewCategoryScoreWhereUniqueInput[]
    delete?: ReviewCategoryScoreWhereUniqueInput | ReviewCategoryScoreWhereUniqueInput[]
    connect?: ReviewCategoryScoreWhereUniqueInput | ReviewCategoryScoreWhereUniqueInput[]
    update?: ReviewCategoryScoreUpdateWithWhereUniqueWithoutReviewInput | ReviewCategoryScoreUpdateWithWhereUniqueWithoutReviewInput[]
    updateMany?: ReviewCategoryScoreUpdateManyWithWhereWithoutReviewInput | ReviewCategoryScoreUpdateManyWithWhereWithoutReviewInput[]
    deleteMany?: ReviewCategoryScoreScalarWhereInput | ReviewCategoryScoreScalarWhereInput[]
  }

  export type ApprovedReviewUpdateOneWithoutReviewsNestedInput = {
    create?: XOR<ApprovedReviewCreateWithoutReviewsInput, ApprovedReviewUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ApprovedReviewCreateOrConnectWithoutReviewsInput
    upsert?: ApprovedReviewUpsertWithoutReviewsInput
    disconnect?: ApprovedReviewWhereInput | boolean
    delete?: ApprovedReviewWhereInput | boolean
    connect?: ApprovedReviewWhereUniqueInput
    update?: XOR<XOR<ApprovedReviewUpdateToOneWithWhereWithoutReviewsInput, ApprovedReviewUpdateWithoutReviewsInput>, ApprovedReviewUncheckedUpdateWithoutReviewsInput>
  }

  export type ReviewRawIngestUpdateOneWithoutReviewNestedInput = {
    create?: XOR<ReviewRawIngestCreateWithoutReviewInput, ReviewRawIngestUncheckedCreateWithoutReviewInput>
    connectOrCreate?: ReviewRawIngestCreateOrConnectWithoutReviewInput
    upsert?: ReviewRawIngestUpsertWithoutReviewInput
    disconnect?: ReviewRawIngestWhereInput | boolean
    delete?: ReviewRawIngestWhereInput | boolean
    connect?: ReviewRawIngestWhereUniqueInput
    update?: XOR<XOR<ReviewRawIngestUpdateToOneWithWhereWithoutReviewInput, ReviewRawIngestUpdateWithoutReviewInput>, ReviewRawIngestUncheckedUpdateWithoutReviewInput>
  }

  export type FollowUpsUpdateManyWithoutReviewNestedInput = {
    create?: XOR<FollowUpsCreateWithoutReviewInput, FollowUpsUncheckedCreateWithoutReviewInput> | FollowUpsCreateWithoutReviewInput[] | FollowUpsUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: FollowUpsCreateOrConnectWithoutReviewInput | FollowUpsCreateOrConnectWithoutReviewInput[]
    upsert?: FollowUpsUpsertWithWhereUniqueWithoutReviewInput | FollowUpsUpsertWithWhereUniqueWithoutReviewInput[]
    createMany?: FollowUpsCreateManyReviewInputEnvelope
    set?: FollowUpsWhereUniqueInput | FollowUpsWhereUniqueInput[]
    disconnect?: FollowUpsWhereUniqueInput | FollowUpsWhereUniqueInput[]
    delete?: FollowUpsWhereUniqueInput | FollowUpsWhereUniqueInput[]
    connect?: FollowUpsWhereUniqueInput | FollowUpsWhereUniqueInput[]
    update?: FollowUpsUpdateWithWhereUniqueWithoutReviewInput | FollowUpsUpdateWithWhereUniqueWithoutReviewInput[]
    updateMany?: FollowUpsUpdateManyWithWhereWithoutReviewInput | FollowUpsUpdateManyWithWhereWithoutReviewInput[]
    deleteMany?: FollowUpsScalarWhereInput | FollowUpsScalarWhereInput[]
  }

  export type ReviewCategoryScoreUncheckedUpdateManyWithoutReviewNestedInput = {
    create?: XOR<ReviewCategoryScoreCreateWithoutReviewInput, ReviewCategoryScoreUncheckedCreateWithoutReviewInput> | ReviewCategoryScoreCreateWithoutReviewInput[] | ReviewCategoryScoreUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: ReviewCategoryScoreCreateOrConnectWithoutReviewInput | ReviewCategoryScoreCreateOrConnectWithoutReviewInput[]
    upsert?: ReviewCategoryScoreUpsertWithWhereUniqueWithoutReviewInput | ReviewCategoryScoreUpsertWithWhereUniqueWithoutReviewInput[]
    createMany?: ReviewCategoryScoreCreateManyReviewInputEnvelope
    set?: ReviewCategoryScoreWhereUniqueInput | ReviewCategoryScoreWhereUniqueInput[]
    disconnect?: ReviewCategoryScoreWhereUniqueInput | ReviewCategoryScoreWhereUniqueInput[]
    delete?: ReviewCategoryScoreWhereUniqueInput | ReviewCategoryScoreWhereUniqueInput[]
    connect?: ReviewCategoryScoreWhereUniqueInput | ReviewCategoryScoreWhereUniqueInput[]
    update?: ReviewCategoryScoreUpdateWithWhereUniqueWithoutReviewInput | ReviewCategoryScoreUpdateWithWhereUniqueWithoutReviewInput[]
    updateMany?: ReviewCategoryScoreUpdateManyWithWhereWithoutReviewInput | ReviewCategoryScoreUpdateManyWithWhereWithoutReviewInput[]
    deleteMany?: ReviewCategoryScoreScalarWhereInput | ReviewCategoryScoreScalarWhereInput[]
  }

  export type ApprovedReviewUncheckedUpdateOneWithoutReviewsNestedInput = {
    create?: XOR<ApprovedReviewCreateWithoutReviewsInput, ApprovedReviewUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ApprovedReviewCreateOrConnectWithoutReviewsInput
    upsert?: ApprovedReviewUpsertWithoutReviewsInput
    disconnect?: ApprovedReviewWhereInput | boolean
    delete?: ApprovedReviewWhereInput | boolean
    connect?: ApprovedReviewWhereUniqueInput
    update?: XOR<XOR<ApprovedReviewUpdateToOneWithWhereWithoutReviewsInput, ApprovedReviewUpdateWithoutReviewsInput>, ApprovedReviewUncheckedUpdateWithoutReviewsInput>
  }

  export type ReviewRawIngestUncheckedUpdateOneWithoutReviewNestedInput = {
    create?: XOR<ReviewRawIngestCreateWithoutReviewInput, ReviewRawIngestUncheckedCreateWithoutReviewInput>
    connectOrCreate?: ReviewRawIngestCreateOrConnectWithoutReviewInput
    upsert?: ReviewRawIngestUpsertWithoutReviewInput
    disconnect?: ReviewRawIngestWhereInput | boolean
    delete?: ReviewRawIngestWhereInput | boolean
    connect?: ReviewRawIngestWhereUniqueInput
    update?: XOR<XOR<ReviewRawIngestUpdateToOneWithWhereWithoutReviewInput, ReviewRawIngestUpdateWithoutReviewInput>, ReviewRawIngestUncheckedUpdateWithoutReviewInput>
  }

  export type FollowUpsUncheckedUpdateManyWithoutReviewNestedInput = {
    create?: XOR<FollowUpsCreateWithoutReviewInput, FollowUpsUncheckedCreateWithoutReviewInput> | FollowUpsCreateWithoutReviewInput[] | FollowUpsUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: FollowUpsCreateOrConnectWithoutReviewInput | FollowUpsCreateOrConnectWithoutReviewInput[]
    upsert?: FollowUpsUpsertWithWhereUniqueWithoutReviewInput | FollowUpsUpsertWithWhereUniqueWithoutReviewInput[]
    createMany?: FollowUpsCreateManyReviewInputEnvelope
    set?: FollowUpsWhereUniqueInput | FollowUpsWhereUniqueInput[]
    disconnect?: FollowUpsWhereUniqueInput | FollowUpsWhereUniqueInput[]
    delete?: FollowUpsWhereUniqueInput | FollowUpsWhereUniqueInput[]
    connect?: FollowUpsWhereUniqueInput | FollowUpsWhereUniqueInput[]
    update?: FollowUpsUpdateWithWhereUniqueWithoutReviewInput | FollowUpsUpdateWithWhereUniqueWithoutReviewInput[]
    updateMany?: FollowUpsUpdateManyWithWhereWithoutReviewInput | FollowUpsUpdateManyWithWhereWithoutReviewInput[]
    deleteMany?: FollowUpsScalarWhereInput | FollowUpsScalarWhereInput[]
  }

  export type ReviewCreateNestedManyWithoutPropertyInput = {
    create?: XOR<ReviewCreateWithoutPropertyInput, ReviewUncheckedCreateWithoutPropertyInput> | ReviewCreateWithoutPropertyInput[] | ReviewUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutPropertyInput | ReviewCreateOrConnectWithoutPropertyInput[]
    createMany?: ReviewCreateManyPropertyInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type PropertyRulesCreateNestedManyWithoutListingInput = {
    create?: XOR<PropertyRulesCreateWithoutListingInput, PropertyRulesUncheckedCreateWithoutListingInput> | PropertyRulesCreateWithoutListingInput[] | PropertyRulesUncheckedCreateWithoutListingInput[]
    connectOrCreate?: PropertyRulesCreateOrConnectWithoutListingInput | PropertyRulesCreateOrConnectWithoutListingInput[]
    createMany?: PropertyRulesCreateManyListingInputEnvelope
    connect?: PropertyRulesWhereUniqueInput | PropertyRulesWhereUniqueInput[]
  }

  export type PropertyPoliciesCreateNestedManyWithoutListingInput = {
    create?: XOR<PropertyPoliciesCreateWithoutListingInput, PropertyPoliciesUncheckedCreateWithoutListingInput> | PropertyPoliciesCreateWithoutListingInput[] | PropertyPoliciesUncheckedCreateWithoutListingInput[]
    connectOrCreate?: PropertyPoliciesCreateOrConnectWithoutListingInput | PropertyPoliciesCreateOrConnectWithoutListingInput[]
    createMany?: PropertyPoliciesCreateManyListingInputEnvelope
    connect?: PropertyPoliciesWhereUniqueInput | PropertyPoliciesWhereUniqueInput[]
  }

  export type PropertyAmenitiesCreateNestedManyWithoutListingInput = {
    create?: XOR<PropertyAmenitiesCreateWithoutListingInput, PropertyAmenitiesUncheckedCreateWithoutListingInput> | PropertyAmenitiesCreateWithoutListingInput[] | PropertyAmenitiesUncheckedCreateWithoutListingInput[]
    connectOrCreate?: PropertyAmenitiesCreateOrConnectWithoutListingInput | PropertyAmenitiesCreateOrConnectWithoutListingInput[]
    createMany?: PropertyAmenitiesCreateManyListingInputEnvelope
    connect?: PropertyAmenitiesWhereUniqueInput | PropertyAmenitiesWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<ReviewCreateWithoutPropertyInput, ReviewUncheckedCreateWithoutPropertyInput> | ReviewCreateWithoutPropertyInput[] | ReviewUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutPropertyInput | ReviewCreateOrConnectWithoutPropertyInput[]
    createMany?: ReviewCreateManyPropertyInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type PropertyRulesUncheckedCreateNestedManyWithoutListingInput = {
    create?: XOR<PropertyRulesCreateWithoutListingInput, PropertyRulesUncheckedCreateWithoutListingInput> | PropertyRulesCreateWithoutListingInput[] | PropertyRulesUncheckedCreateWithoutListingInput[]
    connectOrCreate?: PropertyRulesCreateOrConnectWithoutListingInput | PropertyRulesCreateOrConnectWithoutListingInput[]
    createMany?: PropertyRulesCreateManyListingInputEnvelope
    connect?: PropertyRulesWhereUniqueInput | PropertyRulesWhereUniqueInput[]
  }

  export type PropertyPoliciesUncheckedCreateNestedManyWithoutListingInput = {
    create?: XOR<PropertyPoliciesCreateWithoutListingInput, PropertyPoliciesUncheckedCreateWithoutListingInput> | PropertyPoliciesCreateWithoutListingInput[] | PropertyPoliciesUncheckedCreateWithoutListingInput[]
    connectOrCreate?: PropertyPoliciesCreateOrConnectWithoutListingInput | PropertyPoliciesCreateOrConnectWithoutListingInput[]
    createMany?: PropertyPoliciesCreateManyListingInputEnvelope
    connect?: PropertyPoliciesWhereUniqueInput | PropertyPoliciesWhereUniqueInput[]
  }

  export type PropertyAmenitiesUncheckedCreateNestedManyWithoutListingInput = {
    create?: XOR<PropertyAmenitiesCreateWithoutListingInput, PropertyAmenitiesUncheckedCreateWithoutListingInput> | PropertyAmenitiesCreateWithoutListingInput[] | PropertyAmenitiesUncheckedCreateWithoutListingInput[]
    connectOrCreate?: PropertyAmenitiesCreateOrConnectWithoutListingInput | PropertyAmenitiesCreateOrConnectWithoutListingInput[]
    createMany?: PropertyAmenitiesCreateManyListingInputEnvelope
    connect?: PropertyAmenitiesWhereUniqueInput | PropertyAmenitiesWhereUniqueInput[]
  }

  export type ReviewUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<ReviewCreateWithoutPropertyInput, ReviewUncheckedCreateWithoutPropertyInput> | ReviewCreateWithoutPropertyInput[] | ReviewUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutPropertyInput | ReviewCreateOrConnectWithoutPropertyInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutPropertyInput | ReviewUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: ReviewCreateManyPropertyInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutPropertyInput | ReviewUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutPropertyInput | ReviewUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type PropertyRulesUpdateManyWithoutListingNestedInput = {
    create?: XOR<PropertyRulesCreateWithoutListingInput, PropertyRulesUncheckedCreateWithoutListingInput> | PropertyRulesCreateWithoutListingInput[] | PropertyRulesUncheckedCreateWithoutListingInput[]
    connectOrCreate?: PropertyRulesCreateOrConnectWithoutListingInput | PropertyRulesCreateOrConnectWithoutListingInput[]
    upsert?: PropertyRulesUpsertWithWhereUniqueWithoutListingInput | PropertyRulesUpsertWithWhereUniqueWithoutListingInput[]
    createMany?: PropertyRulesCreateManyListingInputEnvelope
    set?: PropertyRulesWhereUniqueInput | PropertyRulesWhereUniqueInput[]
    disconnect?: PropertyRulesWhereUniqueInput | PropertyRulesWhereUniqueInput[]
    delete?: PropertyRulesWhereUniqueInput | PropertyRulesWhereUniqueInput[]
    connect?: PropertyRulesWhereUniqueInput | PropertyRulesWhereUniqueInput[]
    update?: PropertyRulesUpdateWithWhereUniqueWithoutListingInput | PropertyRulesUpdateWithWhereUniqueWithoutListingInput[]
    updateMany?: PropertyRulesUpdateManyWithWhereWithoutListingInput | PropertyRulesUpdateManyWithWhereWithoutListingInput[]
    deleteMany?: PropertyRulesScalarWhereInput | PropertyRulesScalarWhereInput[]
  }

  export type PropertyPoliciesUpdateManyWithoutListingNestedInput = {
    create?: XOR<PropertyPoliciesCreateWithoutListingInput, PropertyPoliciesUncheckedCreateWithoutListingInput> | PropertyPoliciesCreateWithoutListingInput[] | PropertyPoliciesUncheckedCreateWithoutListingInput[]
    connectOrCreate?: PropertyPoliciesCreateOrConnectWithoutListingInput | PropertyPoliciesCreateOrConnectWithoutListingInput[]
    upsert?: PropertyPoliciesUpsertWithWhereUniqueWithoutListingInput | PropertyPoliciesUpsertWithWhereUniqueWithoutListingInput[]
    createMany?: PropertyPoliciesCreateManyListingInputEnvelope
    set?: PropertyPoliciesWhereUniqueInput | PropertyPoliciesWhereUniqueInput[]
    disconnect?: PropertyPoliciesWhereUniqueInput | PropertyPoliciesWhereUniqueInput[]
    delete?: PropertyPoliciesWhereUniqueInput | PropertyPoliciesWhereUniqueInput[]
    connect?: PropertyPoliciesWhereUniqueInput | PropertyPoliciesWhereUniqueInput[]
    update?: PropertyPoliciesUpdateWithWhereUniqueWithoutListingInput | PropertyPoliciesUpdateWithWhereUniqueWithoutListingInput[]
    updateMany?: PropertyPoliciesUpdateManyWithWhereWithoutListingInput | PropertyPoliciesUpdateManyWithWhereWithoutListingInput[]
    deleteMany?: PropertyPoliciesScalarWhereInput | PropertyPoliciesScalarWhereInput[]
  }

  export type PropertyAmenitiesUpdateManyWithoutListingNestedInput = {
    create?: XOR<PropertyAmenitiesCreateWithoutListingInput, PropertyAmenitiesUncheckedCreateWithoutListingInput> | PropertyAmenitiesCreateWithoutListingInput[] | PropertyAmenitiesUncheckedCreateWithoutListingInput[]
    connectOrCreate?: PropertyAmenitiesCreateOrConnectWithoutListingInput | PropertyAmenitiesCreateOrConnectWithoutListingInput[]
    upsert?: PropertyAmenitiesUpsertWithWhereUniqueWithoutListingInput | PropertyAmenitiesUpsertWithWhereUniqueWithoutListingInput[]
    createMany?: PropertyAmenitiesCreateManyListingInputEnvelope
    set?: PropertyAmenitiesWhereUniqueInput | PropertyAmenitiesWhereUniqueInput[]
    disconnect?: PropertyAmenitiesWhereUniqueInput | PropertyAmenitiesWhereUniqueInput[]
    delete?: PropertyAmenitiesWhereUniqueInput | PropertyAmenitiesWhereUniqueInput[]
    connect?: PropertyAmenitiesWhereUniqueInput | PropertyAmenitiesWhereUniqueInput[]
    update?: PropertyAmenitiesUpdateWithWhereUniqueWithoutListingInput | PropertyAmenitiesUpdateWithWhereUniqueWithoutListingInput[]
    updateMany?: PropertyAmenitiesUpdateManyWithWhereWithoutListingInput | PropertyAmenitiesUpdateManyWithWhereWithoutListingInput[]
    deleteMany?: PropertyAmenitiesScalarWhereInput | PropertyAmenitiesScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<ReviewCreateWithoutPropertyInput, ReviewUncheckedCreateWithoutPropertyInput> | ReviewCreateWithoutPropertyInput[] | ReviewUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutPropertyInput | ReviewCreateOrConnectWithoutPropertyInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutPropertyInput | ReviewUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: ReviewCreateManyPropertyInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutPropertyInput | ReviewUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutPropertyInput | ReviewUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type PropertyRulesUncheckedUpdateManyWithoutListingNestedInput = {
    create?: XOR<PropertyRulesCreateWithoutListingInput, PropertyRulesUncheckedCreateWithoutListingInput> | PropertyRulesCreateWithoutListingInput[] | PropertyRulesUncheckedCreateWithoutListingInput[]
    connectOrCreate?: PropertyRulesCreateOrConnectWithoutListingInput | PropertyRulesCreateOrConnectWithoutListingInput[]
    upsert?: PropertyRulesUpsertWithWhereUniqueWithoutListingInput | PropertyRulesUpsertWithWhereUniqueWithoutListingInput[]
    createMany?: PropertyRulesCreateManyListingInputEnvelope
    set?: PropertyRulesWhereUniqueInput | PropertyRulesWhereUniqueInput[]
    disconnect?: PropertyRulesWhereUniqueInput | PropertyRulesWhereUniqueInput[]
    delete?: PropertyRulesWhereUniqueInput | PropertyRulesWhereUniqueInput[]
    connect?: PropertyRulesWhereUniqueInput | PropertyRulesWhereUniqueInput[]
    update?: PropertyRulesUpdateWithWhereUniqueWithoutListingInput | PropertyRulesUpdateWithWhereUniqueWithoutListingInput[]
    updateMany?: PropertyRulesUpdateManyWithWhereWithoutListingInput | PropertyRulesUpdateManyWithWhereWithoutListingInput[]
    deleteMany?: PropertyRulesScalarWhereInput | PropertyRulesScalarWhereInput[]
  }

  export type PropertyPoliciesUncheckedUpdateManyWithoutListingNestedInput = {
    create?: XOR<PropertyPoliciesCreateWithoutListingInput, PropertyPoliciesUncheckedCreateWithoutListingInput> | PropertyPoliciesCreateWithoutListingInput[] | PropertyPoliciesUncheckedCreateWithoutListingInput[]
    connectOrCreate?: PropertyPoliciesCreateOrConnectWithoutListingInput | PropertyPoliciesCreateOrConnectWithoutListingInput[]
    upsert?: PropertyPoliciesUpsertWithWhereUniqueWithoutListingInput | PropertyPoliciesUpsertWithWhereUniqueWithoutListingInput[]
    createMany?: PropertyPoliciesCreateManyListingInputEnvelope
    set?: PropertyPoliciesWhereUniqueInput | PropertyPoliciesWhereUniqueInput[]
    disconnect?: PropertyPoliciesWhereUniqueInput | PropertyPoliciesWhereUniqueInput[]
    delete?: PropertyPoliciesWhereUniqueInput | PropertyPoliciesWhereUniqueInput[]
    connect?: PropertyPoliciesWhereUniqueInput | PropertyPoliciesWhereUniqueInput[]
    update?: PropertyPoliciesUpdateWithWhereUniqueWithoutListingInput | PropertyPoliciesUpdateWithWhereUniqueWithoutListingInput[]
    updateMany?: PropertyPoliciesUpdateManyWithWhereWithoutListingInput | PropertyPoliciesUpdateManyWithWhereWithoutListingInput[]
    deleteMany?: PropertyPoliciesScalarWhereInput | PropertyPoliciesScalarWhereInput[]
  }

  export type PropertyAmenitiesUncheckedUpdateManyWithoutListingNestedInput = {
    create?: XOR<PropertyAmenitiesCreateWithoutListingInput, PropertyAmenitiesUncheckedCreateWithoutListingInput> | PropertyAmenitiesCreateWithoutListingInput[] | PropertyAmenitiesUncheckedCreateWithoutListingInput[]
    connectOrCreate?: PropertyAmenitiesCreateOrConnectWithoutListingInput | PropertyAmenitiesCreateOrConnectWithoutListingInput[]
    upsert?: PropertyAmenitiesUpsertWithWhereUniqueWithoutListingInput | PropertyAmenitiesUpsertWithWhereUniqueWithoutListingInput[]
    createMany?: PropertyAmenitiesCreateManyListingInputEnvelope
    set?: PropertyAmenitiesWhereUniqueInput | PropertyAmenitiesWhereUniqueInput[]
    disconnect?: PropertyAmenitiesWhereUniqueInput | PropertyAmenitiesWhereUniqueInput[]
    delete?: PropertyAmenitiesWhereUniqueInput | PropertyAmenitiesWhereUniqueInput[]
    connect?: PropertyAmenitiesWhereUniqueInput | PropertyAmenitiesWhereUniqueInput[]
    update?: PropertyAmenitiesUpdateWithWhereUniqueWithoutListingInput | PropertyAmenitiesUpdateWithWhereUniqueWithoutListingInput[]
    updateMany?: PropertyAmenitiesUpdateManyWithWhereWithoutListingInput | PropertyAmenitiesUpdateManyWithWhereWithoutListingInput[]
    deleteMany?: PropertyAmenitiesScalarWhereInput | PropertyAmenitiesScalarWhereInput[]
  }

  export type ListingCreateNestedOneWithoutRulesInput = {
    create?: XOR<ListingCreateWithoutRulesInput, ListingUncheckedCreateWithoutRulesInput>
    connectOrCreate?: ListingCreateOrConnectWithoutRulesInput
    connect?: ListingWhereUniqueInput
  }

  export type ListingUpdateOneRequiredWithoutRulesNestedInput = {
    create?: XOR<ListingCreateWithoutRulesInput, ListingUncheckedCreateWithoutRulesInput>
    connectOrCreate?: ListingCreateOrConnectWithoutRulesInput
    upsert?: ListingUpsertWithoutRulesInput
    connect?: ListingWhereUniqueInput
    update?: XOR<XOR<ListingUpdateToOneWithWhereWithoutRulesInput, ListingUpdateWithoutRulesInput>, ListingUncheckedUpdateWithoutRulesInput>
  }

  export type ListingCreateNestedOneWithoutPoliciesInput = {
    create?: XOR<ListingCreateWithoutPoliciesInput, ListingUncheckedCreateWithoutPoliciesInput>
    connectOrCreate?: ListingCreateOrConnectWithoutPoliciesInput
    connect?: ListingWhereUniqueInput
  }

  export type ListingUpdateOneRequiredWithoutPoliciesNestedInput = {
    create?: XOR<ListingCreateWithoutPoliciesInput, ListingUncheckedCreateWithoutPoliciesInput>
    connectOrCreate?: ListingCreateOrConnectWithoutPoliciesInput
    upsert?: ListingUpsertWithoutPoliciesInput
    connect?: ListingWhereUniqueInput
    update?: XOR<XOR<ListingUpdateToOneWithWhereWithoutPoliciesInput, ListingUpdateWithoutPoliciesInput>, ListingUncheckedUpdateWithoutPoliciesInput>
  }

  export type ListingCreateNestedOneWithoutAmenitiesInput = {
    create?: XOR<ListingCreateWithoutAmenitiesInput, ListingUncheckedCreateWithoutAmenitiesInput>
    connectOrCreate?: ListingCreateOrConnectWithoutAmenitiesInput
    connect?: ListingWhereUniqueInput
  }

  export type ListingUpdateOneRequiredWithoutAmenitiesNestedInput = {
    create?: XOR<ListingCreateWithoutAmenitiesInput, ListingUncheckedCreateWithoutAmenitiesInput>
    connectOrCreate?: ListingCreateOrConnectWithoutAmenitiesInput
    upsert?: ListingUpsertWithoutAmenitiesInput
    connect?: ListingWhereUniqueInput
    update?: XOR<XOR<ListingUpdateToOneWithWhereWithoutAmenitiesInput, ListingUpdateWithoutAmenitiesInput>, ListingUncheckedUpdateWithoutAmenitiesInput>
  }

  export type ReviewCategoryScoreCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ReviewCategoryScoreCreateWithoutCategoryInput, ReviewCategoryScoreUncheckedCreateWithoutCategoryInput> | ReviewCategoryScoreCreateWithoutCategoryInput[] | ReviewCategoryScoreUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ReviewCategoryScoreCreateOrConnectWithoutCategoryInput | ReviewCategoryScoreCreateOrConnectWithoutCategoryInput[]
    createMany?: ReviewCategoryScoreCreateManyCategoryInputEnvelope
    connect?: ReviewCategoryScoreWhereUniqueInput | ReviewCategoryScoreWhereUniqueInput[]
  }

  export type ReviewCategoryScoreUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ReviewCategoryScoreCreateWithoutCategoryInput, ReviewCategoryScoreUncheckedCreateWithoutCategoryInput> | ReviewCategoryScoreCreateWithoutCategoryInput[] | ReviewCategoryScoreUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ReviewCategoryScoreCreateOrConnectWithoutCategoryInput | ReviewCategoryScoreCreateOrConnectWithoutCategoryInput[]
    createMany?: ReviewCategoryScoreCreateManyCategoryInputEnvelope
    connect?: ReviewCategoryScoreWhereUniqueInput | ReviewCategoryScoreWhereUniqueInput[]
  }

  export type ReviewCategoryScoreUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ReviewCategoryScoreCreateWithoutCategoryInput, ReviewCategoryScoreUncheckedCreateWithoutCategoryInput> | ReviewCategoryScoreCreateWithoutCategoryInput[] | ReviewCategoryScoreUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ReviewCategoryScoreCreateOrConnectWithoutCategoryInput | ReviewCategoryScoreCreateOrConnectWithoutCategoryInput[]
    upsert?: ReviewCategoryScoreUpsertWithWhereUniqueWithoutCategoryInput | ReviewCategoryScoreUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ReviewCategoryScoreCreateManyCategoryInputEnvelope
    set?: ReviewCategoryScoreWhereUniqueInput | ReviewCategoryScoreWhereUniqueInput[]
    disconnect?: ReviewCategoryScoreWhereUniqueInput | ReviewCategoryScoreWhereUniqueInput[]
    delete?: ReviewCategoryScoreWhereUniqueInput | ReviewCategoryScoreWhereUniqueInput[]
    connect?: ReviewCategoryScoreWhereUniqueInput | ReviewCategoryScoreWhereUniqueInput[]
    update?: ReviewCategoryScoreUpdateWithWhereUniqueWithoutCategoryInput | ReviewCategoryScoreUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ReviewCategoryScoreUpdateManyWithWhereWithoutCategoryInput | ReviewCategoryScoreUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ReviewCategoryScoreScalarWhereInput | ReviewCategoryScoreScalarWhereInput[]
  }

  export type ReviewCategoryScoreUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ReviewCategoryScoreCreateWithoutCategoryInput, ReviewCategoryScoreUncheckedCreateWithoutCategoryInput> | ReviewCategoryScoreCreateWithoutCategoryInput[] | ReviewCategoryScoreUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ReviewCategoryScoreCreateOrConnectWithoutCategoryInput | ReviewCategoryScoreCreateOrConnectWithoutCategoryInput[]
    upsert?: ReviewCategoryScoreUpsertWithWhereUniqueWithoutCategoryInput | ReviewCategoryScoreUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ReviewCategoryScoreCreateManyCategoryInputEnvelope
    set?: ReviewCategoryScoreWhereUniqueInput | ReviewCategoryScoreWhereUniqueInput[]
    disconnect?: ReviewCategoryScoreWhereUniqueInput | ReviewCategoryScoreWhereUniqueInput[]
    delete?: ReviewCategoryScoreWhereUniqueInput | ReviewCategoryScoreWhereUniqueInput[]
    connect?: ReviewCategoryScoreWhereUniqueInput | ReviewCategoryScoreWhereUniqueInput[]
    update?: ReviewCategoryScoreUpdateWithWhereUniqueWithoutCategoryInput | ReviewCategoryScoreUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ReviewCategoryScoreUpdateManyWithWhereWithoutCategoryInput | ReviewCategoryScoreUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ReviewCategoryScoreScalarWhereInput | ReviewCategoryScoreScalarWhereInput[]
  }

  export type ReviewCreateNestedOneWithoutReviewCategoryScoreInput = {
    create?: XOR<ReviewCreateWithoutReviewCategoryScoreInput, ReviewUncheckedCreateWithoutReviewCategoryScoreInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewCategoryScoreInput
    connect?: ReviewWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutScoresInput = {
    create?: XOR<CategoryCreateWithoutScoresInput, CategoryUncheckedCreateWithoutScoresInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutScoresInput
    connect?: CategoryWhereUniqueInput
  }

  export type ReviewUpdateOneRequiredWithoutReviewCategoryScoreNestedInput = {
    create?: XOR<ReviewCreateWithoutReviewCategoryScoreInput, ReviewUncheckedCreateWithoutReviewCategoryScoreInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewCategoryScoreInput
    upsert?: ReviewUpsertWithoutReviewCategoryScoreInput
    connect?: ReviewWhereUniqueInput
    update?: XOR<XOR<ReviewUpdateToOneWithWhereWithoutReviewCategoryScoreInput, ReviewUpdateWithoutReviewCategoryScoreInput>, ReviewUncheckedUpdateWithoutReviewCategoryScoreInput>
  }

  export type CategoryUpdateOneRequiredWithoutScoresNestedInput = {
    create?: XOR<CategoryCreateWithoutScoresInput, CategoryUncheckedCreateWithoutScoresInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutScoresInput
    upsert?: CategoryUpsertWithoutScoresInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutScoresInput, CategoryUpdateWithoutScoresInput>, CategoryUncheckedUpdateWithoutScoresInput>
  }

  export type ReviewCreateNestedOneWithoutRawInput = {
    create?: XOR<ReviewCreateWithoutRawInput, ReviewUncheckedCreateWithoutRawInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutRawInput
    connect?: ReviewWhereUniqueInput
  }

  export type ReviewUpdateOneRequiredWithoutRawNestedInput = {
    create?: XOR<ReviewCreateWithoutRawInput, ReviewUncheckedCreateWithoutRawInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutRawInput
    upsert?: ReviewUpsertWithoutRawInput
    connect?: ReviewWhereUniqueInput
    update?: XOR<XOR<ReviewUpdateToOneWithWhereWithoutRawInput, ReviewUpdateWithoutRawInput>, ReviewUncheckedUpdateWithoutRawInput>
  }

  export type ReviewCreateNestedOneWithoutFollowUpsInput = {
    create?: XOR<ReviewCreateWithoutFollowUpsInput, ReviewUncheckedCreateWithoutFollowUpsInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutFollowUpsInput
    connect?: ReviewWhereUniqueInput
  }

  export type ReviewUpdateOneRequiredWithoutFollowUpsNestedInput = {
    create?: XOR<ReviewCreateWithoutFollowUpsInput, ReviewUncheckedCreateWithoutFollowUpsInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutFollowUpsInput
    upsert?: ReviewUpsertWithoutFollowUpsInput
    connect?: ReviewWhereUniqueInput
    update?: XOR<XOR<ReviewUpdateToOneWithWhereWithoutFollowUpsInput, ReviewUpdateWithoutFollowUpsInput>, ReviewUncheckedUpdateWithoutFollowUpsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumColorFilter<$PrismaModel = never> = {
    equals?: $Enums.Color | EnumColorFieldRefInput<$PrismaModel>
    in?: $Enums.Color[]
    notIn?: $Enums.Color[]
    not?: NestedEnumColorFilter<$PrismaModel> | $Enums.Color
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumColorWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Color | EnumColorFieldRefInput<$PrismaModel>
    in?: $Enums.Color[]
    notIn?: $Enums.Color[]
    not?: NestedEnumColorWithAggregatesFilter<$PrismaModel> | $Enums.Color
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumColorFilter<$PrismaModel>
    _max?: NestedEnumColorFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumReviewStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewStatus | EnumReviewStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewStatus[]
    notIn?: $Enums.ReviewStatus[]
    not?: NestedEnumReviewStatusFilter<$PrismaModel> | $Enums.ReviewStatus
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumReviewStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewStatus | EnumReviewStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewStatus[]
    notIn?: $Enums.ReviewStatus[]
    not?: NestedEnumReviewStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReviewStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReviewStatusFilter<$PrismaModel>
    _max?: NestedEnumReviewStatusFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumChannelFilter<$PrismaModel = never> = {
    equals?: $Enums.Channel | EnumChannelFieldRefInput<$PrismaModel>
    in?: $Enums.Channel[]
    notIn?: $Enums.Channel[]
    not?: NestedEnumChannelFilter<$PrismaModel> | $Enums.Channel
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumReviewTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewType | EnumReviewTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewType[]
    notIn?: $Enums.ReviewType[]
    not?: NestedEnumReviewTypeFilter<$PrismaModel> | $Enums.ReviewType
  }

  export type NestedEnumChannelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Channel | EnumChannelFieldRefInput<$PrismaModel>
    in?: $Enums.Channel[]
    notIn?: $Enums.Channel[]
    not?: NestedEnumChannelWithAggregatesFilter<$PrismaModel> | $Enums.Channel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChannelFilter<$PrismaModel>
    _max?: NestedEnumChannelFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumReviewTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewType | EnumReviewTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewType[]
    notIn?: $Enums.ReviewType[]
    not?: NestedEnumReviewTypeWithAggregatesFilter<$PrismaModel> | $Enums.ReviewType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReviewTypeFilter<$PrismaModel>
    _max?: NestedEnumReviewTypeFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ReviewCreateWithoutApprovedReviewInput = {
    sourceSystem?: string
    sourceReviewId: string
    channel: $Enums.Channel
    rating10?: Decimal | DecimalJsLike | number | string | null
    overall5: Decimal | DecimalJsLike | number | string
    type: $Enums.ReviewType
    publicReview: string
    submittedAt: Date | string
    guestName: string
    listingName: string
    status?: $Enums.ReviewStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    Property: ListingCreateNestedOneWithoutReviewsInput
    ReviewCategoryScore?: ReviewCategoryScoreCreateNestedManyWithoutReviewInput
    raw?: ReviewRawIngestCreateNestedOneWithoutReviewInput
    FollowUps?: FollowUpsCreateNestedManyWithoutReviewInput
  }

  export type ReviewUncheckedCreateWithoutApprovedReviewInput = {
    id?: number
    sourceSystem?: string
    sourceReviewId: string
    channel: $Enums.Channel
    listingId: number
    rating10?: Decimal | DecimalJsLike | number | string | null
    overall5: Decimal | DecimalJsLike | number | string
    type: $Enums.ReviewType
    publicReview: string
    submittedAt: Date | string
    guestName: string
    listingName: string
    status?: $Enums.ReviewStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    ReviewCategoryScore?: ReviewCategoryScoreUncheckedCreateNestedManyWithoutReviewInput
    raw?: ReviewRawIngestUncheckedCreateNestedOneWithoutReviewInput
    FollowUps?: FollowUpsUncheckedCreateNestedManyWithoutReviewInput
  }

  export type ReviewCreateOrConnectWithoutApprovedReviewInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutApprovedReviewInput, ReviewUncheckedCreateWithoutApprovedReviewInput>
  }

  export type ReviewUpsertWithoutApprovedReviewInput = {
    update: XOR<ReviewUpdateWithoutApprovedReviewInput, ReviewUncheckedUpdateWithoutApprovedReviewInput>
    create: XOR<ReviewCreateWithoutApprovedReviewInput, ReviewUncheckedCreateWithoutApprovedReviewInput>
    where?: ReviewWhereInput
  }

  export type ReviewUpdateToOneWithWhereWithoutApprovedReviewInput = {
    where?: ReviewWhereInput
    data: XOR<ReviewUpdateWithoutApprovedReviewInput, ReviewUncheckedUpdateWithoutApprovedReviewInput>
  }

  export type ReviewUpdateWithoutApprovedReviewInput = {
    sourceSystem?: StringFieldUpdateOperationsInput | string
    sourceReviewId?: StringFieldUpdateOperationsInput | string
    channel?: EnumChannelFieldUpdateOperationsInput | $Enums.Channel
    rating10?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    overall5?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumReviewTypeFieldUpdateOperationsInput | $Enums.ReviewType
    publicReview?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guestName?: StringFieldUpdateOperationsInput | string
    listingName?: StringFieldUpdateOperationsInput | string
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Property?: ListingUpdateOneRequiredWithoutReviewsNestedInput
    ReviewCategoryScore?: ReviewCategoryScoreUpdateManyWithoutReviewNestedInput
    raw?: ReviewRawIngestUpdateOneWithoutReviewNestedInput
    FollowUps?: FollowUpsUpdateManyWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateWithoutApprovedReviewInput = {
    id?: IntFieldUpdateOperationsInput | number
    sourceSystem?: StringFieldUpdateOperationsInput | string
    sourceReviewId?: StringFieldUpdateOperationsInput | string
    channel?: EnumChannelFieldUpdateOperationsInput | $Enums.Channel
    listingId?: IntFieldUpdateOperationsInput | number
    rating10?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    overall5?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumReviewTypeFieldUpdateOperationsInput | $Enums.ReviewType
    publicReview?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guestName?: StringFieldUpdateOperationsInput | string
    listingName?: StringFieldUpdateOperationsInput | string
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ReviewCategoryScore?: ReviewCategoryScoreUncheckedUpdateManyWithoutReviewNestedInput
    raw?: ReviewRawIngestUncheckedUpdateOneWithoutReviewNestedInput
    FollowUps?: FollowUpsUncheckedUpdateManyWithoutReviewNestedInput
  }

  export type ListingCreateWithoutReviewsInput = {
    slug: string
    name: string
    address?: string | null
    city?: string | null
    state?: string | null
    zip?: string | null
    country?: string | null
    propertyDesc?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rules?: PropertyRulesCreateNestedManyWithoutListingInput
    policies?: PropertyPoliciesCreateNestedManyWithoutListingInput
    amenities?: PropertyAmenitiesCreateNestedManyWithoutListingInput
  }

  export type ListingUncheckedCreateWithoutReviewsInput = {
    id?: number
    slug: string
    name: string
    address?: string | null
    city?: string | null
    state?: string | null
    zip?: string | null
    country?: string | null
    propertyDesc?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rules?: PropertyRulesUncheckedCreateNestedManyWithoutListingInput
    policies?: PropertyPoliciesUncheckedCreateNestedManyWithoutListingInput
    amenities?: PropertyAmenitiesUncheckedCreateNestedManyWithoutListingInput
  }

  export type ListingCreateOrConnectWithoutReviewsInput = {
    where: ListingWhereUniqueInput
    create: XOR<ListingCreateWithoutReviewsInput, ListingUncheckedCreateWithoutReviewsInput>
  }

  export type ReviewCategoryScoreCreateWithoutReviewInput = {
    score10?: Decimal | DecimalJsLike | number | string | null
    score5?: Decimal | DecimalJsLike | number | string | null
    category: CategoryCreateNestedOneWithoutScoresInput
  }

  export type ReviewCategoryScoreUncheckedCreateWithoutReviewInput = {
    categoryId: number
    score10?: Decimal | DecimalJsLike | number | string | null
    score5?: Decimal | DecimalJsLike | number | string | null
  }

  export type ReviewCategoryScoreCreateOrConnectWithoutReviewInput = {
    where: ReviewCategoryScoreWhereUniqueInput
    create: XOR<ReviewCategoryScoreCreateWithoutReviewInput, ReviewCategoryScoreUncheckedCreateWithoutReviewInput>
  }

  export type ReviewCategoryScoreCreateManyReviewInputEnvelope = {
    data: ReviewCategoryScoreCreateManyReviewInput | ReviewCategoryScoreCreateManyReviewInput[]
    skipDuplicates?: boolean
  }

  export type ApprovedReviewCreateWithoutReviewsInput = {
    name: string
    status?: $Enums.ReviewStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    approvalNotes?: string | null
    approvedBy?: string | null
    approvedAt?: Date | string | null
    approved?: boolean
  }

  export type ApprovedReviewUncheckedCreateWithoutReviewsInput = {
    name: string
    status?: $Enums.ReviewStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    approvalNotes?: string | null
    approvedBy?: string | null
    approvedAt?: Date | string | null
    approved?: boolean
  }

  export type ApprovedReviewCreateOrConnectWithoutReviewsInput = {
    where: ApprovedReviewWhereUniqueInput
    create: XOR<ApprovedReviewCreateWithoutReviewsInput, ApprovedReviewUncheckedCreateWithoutReviewsInput>
  }

  export type ReviewRawIngestCreateWithoutReviewInput = {
    payload: JsonNullValueInput | InputJsonValue
    payloadHash: string
  }

  export type ReviewRawIngestUncheckedCreateWithoutReviewInput = {
    payload: JsonNullValueInput | InputJsonValue
    payloadHash: string
  }

  export type ReviewRawIngestCreateOrConnectWithoutReviewInput = {
    where: ReviewRawIngestWhereUniqueInput
    create: XOR<ReviewRawIngestCreateWithoutReviewInput, ReviewRawIngestUncheckedCreateWithoutReviewInput>
  }

  export type FollowUpsCreateWithoutReviewInput = {
    term: string
    issueId?: string | null
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    completed?: boolean
    closedAt?: Date | string | null
  }

  export type FollowUpsUncheckedCreateWithoutReviewInput = {
    id?: number
    term: string
    issueId?: string | null
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    completed?: boolean
    closedAt?: Date | string | null
  }

  export type FollowUpsCreateOrConnectWithoutReviewInput = {
    where: FollowUpsWhereUniqueInput
    create: XOR<FollowUpsCreateWithoutReviewInput, FollowUpsUncheckedCreateWithoutReviewInput>
  }

  export type FollowUpsCreateManyReviewInputEnvelope = {
    data: FollowUpsCreateManyReviewInput | FollowUpsCreateManyReviewInput[]
    skipDuplicates?: boolean
  }

  export type ListingUpsertWithoutReviewsInput = {
    update: XOR<ListingUpdateWithoutReviewsInput, ListingUncheckedUpdateWithoutReviewsInput>
    create: XOR<ListingCreateWithoutReviewsInput, ListingUncheckedCreateWithoutReviewsInput>
    where?: ListingWhereInput
  }

  export type ListingUpdateToOneWithWhereWithoutReviewsInput = {
    where?: ListingWhereInput
    data: XOR<ListingUpdateWithoutReviewsInput, ListingUncheckedUpdateWithoutReviewsInput>
  }

  export type ListingUpdateWithoutReviewsInput = {
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    propertyDesc?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rules?: PropertyRulesUpdateManyWithoutListingNestedInput
    policies?: PropertyPoliciesUpdateManyWithoutListingNestedInput
    amenities?: PropertyAmenitiesUpdateManyWithoutListingNestedInput
  }

  export type ListingUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    propertyDesc?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rules?: PropertyRulesUncheckedUpdateManyWithoutListingNestedInput
    policies?: PropertyPoliciesUncheckedUpdateManyWithoutListingNestedInput
    amenities?: PropertyAmenitiesUncheckedUpdateManyWithoutListingNestedInput
  }

  export type ReviewCategoryScoreUpsertWithWhereUniqueWithoutReviewInput = {
    where: ReviewCategoryScoreWhereUniqueInput
    update: XOR<ReviewCategoryScoreUpdateWithoutReviewInput, ReviewCategoryScoreUncheckedUpdateWithoutReviewInput>
    create: XOR<ReviewCategoryScoreCreateWithoutReviewInput, ReviewCategoryScoreUncheckedCreateWithoutReviewInput>
  }

  export type ReviewCategoryScoreUpdateWithWhereUniqueWithoutReviewInput = {
    where: ReviewCategoryScoreWhereUniqueInput
    data: XOR<ReviewCategoryScoreUpdateWithoutReviewInput, ReviewCategoryScoreUncheckedUpdateWithoutReviewInput>
  }

  export type ReviewCategoryScoreUpdateManyWithWhereWithoutReviewInput = {
    where: ReviewCategoryScoreScalarWhereInput
    data: XOR<ReviewCategoryScoreUpdateManyMutationInput, ReviewCategoryScoreUncheckedUpdateManyWithoutReviewInput>
  }

  export type ReviewCategoryScoreScalarWhereInput = {
    AND?: ReviewCategoryScoreScalarWhereInput | ReviewCategoryScoreScalarWhereInput[]
    OR?: ReviewCategoryScoreScalarWhereInput[]
    NOT?: ReviewCategoryScoreScalarWhereInput | ReviewCategoryScoreScalarWhereInput[]
    reviewId?: IntFilter<"ReviewCategoryScore"> | number
    categoryId?: IntFilter<"ReviewCategoryScore"> | number
    score10?: DecimalNullableFilter<"ReviewCategoryScore"> | Decimal | DecimalJsLike | number | string | null
    score5?: DecimalNullableFilter<"ReviewCategoryScore"> | Decimal | DecimalJsLike | number | string | null
  }

  export type ApprovedReviewUpsertWithoutReviewsInput = {
    update: XOR<ApprovedReviewUpdateWithoutReviewsInput, ApprovedReviewUncheckedUpdateWithoutReviewsInput>
    create: XOR<ApprovedReviewCreateWithoutReviewsInput, ApprovedReviewUncheckedCreateWithoutReviewsInput>
    where?: ApprovedReviewWhereInput
  }

  export type ApprovedReviewUpdateToOneWithWhereWithoutReviewsInput = {
    where?: ApprovedReviewWhereInput
    data: XOR<ApprovedReviewUpdateWithoutReviewsInput, ApprovedReviewUncheckedUpdateWithoutReviewsInput>
  }

  export type ApprovedReviewUpdateWithoutReviewsInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approved?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ApprovedReviewUncheckedUpdateWithoutReviewsInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approved?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ReviewRawIngestUpsertWithoutReviewInput = {
    update: XOR<ReviewRawIngestUpdateWithoutReviewInput, ReviewRawIngestUncheckedUpdateWithoutReviewInput>
    create: XOR<ReviewRawIngestCreateWithoutReviewInput, ReviewRawIngestUncheckedCreateWithoutReviewInput>
    where?: ReviewRawIngestWhereInput
  }

  export type ReviewRawIngestUpdateToOneWithWhereWithoutReviewInput = {
    where?: ReviewRawIngestWhereInput
    data: XOR<ReviewRawIngestUpdateWithoutReviewInput, ReviewRawIngestUncheckedUpdateWithoutReviewInput>
  }

  export type ReviewRawIngestUpdateWithoutReviewInput = {
    payload?: JsonNullValueInput | InputJsonValue
    payloadHash?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewRawIngestUncheckedUpdateWithoutReviewInput = {
    payload?: JsonNullValueInput | InputJsonValue
    payloadHash?: StringFieldUpdateOperationsInput | string
  }

  export type FollowUpsUpsertWithWhereUniqueWithoutReviewInput = {
    where: FollowUpsWhereUniqueInput
    update: XOR<FollowUpsUpdateWithoutReviewInput, FollowUpsUncheckedUpdateWithoutReviewInput>
    create: XOR<FollowUpsCreateWithoutReviewInput, FollowUpsUncheckedCreateWithoutReviewInput>
  }

  export type FollowUpsUpdateWithWhereUniqueWithoutReviewInput = {
    where: FollowUpsWhereUniqueInput
    data: XOR<FollowUpsUpdateWithoutReviewInput, FollowUpsUncheckedUpdateWithoutReviewInput>
  }

  export type FollowUpsUpdateManyWithWhereWithoutReviewInput = {
    where: FollowUpsScalarWhereInput
    data: XOR<FollowUpsUpdateManyMutationInput, FollowUpsUncheckedUpdateManyWithoutReviewInput>
  }

  export type FollowUpsScalarWhereInput = {
    AND?: FollowUpsScalarWhereInput | FollowUpsScalarWhereInput[]
    OR?: FollowUpsScalarWhereInput[]
    NOT?: FollowUpsScalarWhereInput | FollowUpsScalarWhereInput[]
    id?: IntFilter<"FollowUps"> | number
    reviewId?: IntFilter<"FollowUps"> | number
    term?: StringFilter<"FollowUps"> | string
    issueId?: StringNullableFilter<"FollowUps"> | string | null
    content?: StringFilter<"FollowUps"> | string
    createdAt?: DateTimeFilter<"FollowUps"> | Date | string
    updatedAt?: DateTimeFilter<"FollowUps"> | Date | string
    completed?: BoolFilter<"FollowUps"> | boolean
    closedAt?: DateTimeNullableFilter<"FollowUps"> | Date | string | null
  }

  export type ReviewCreateWithoutPropertyInput = {
    sourceSystem?: string
    sourceReviewId: string
    channel: $Enums.Channel
    rating10?: Decimal | DecimalJsLike | number | string | null
    overall5: Decimal | DecimalJsLike | number | string
    type: $Enums.ReviewType
    publicReview: string
    submittedAt: Date | string
    guestName: string
    listingName: string
    status?: $Enums.ReviewStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    ReviewCategoryScore?: ReviewCategoryScoreCreateNestedManyWithoutReviewInput
    ApprovedReview?: ApprovedReviewCreateNestedOneWithoutReviewsInput
    raw?: ReviewRawIngestCreateNestedOneWithoutReviewInput
    FollowUps?: FollowUpsCreateNestedManyWithoutReviewInput
  }

  export type ReviewUncheckedCreateWithoutPropertyInput = {
    id?: number
    sourceSystem?: string
    sourceReviewId: string
    channel: $Enums.Channel
    rating10?: Decimal | DecimalJsLike | number | string | null
    overall5: Decimal | DecimalJsLike | number | string
    type: $Enums.ReviewType
    publicReview: string
    submittedAt: Date | string
    guestName: string
    listingName: string
    status?: $Enums.ReviewStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    ReviewCategoryScore?: ReviewCategoryScoreUncheckedCreateNestedManyWithoutReviewInput
    ApprovedReview?: ApprovedReviewUncheckedCreateNestedOneWithoutReviewsInput
    raw?: ReviewRawIngestUncheckedCreateNestedOneWithoutReviewInput
    FollowUps?: FollowUpsUncheckedCreateNestedManyWithoutReviewInput
  }

  export type ReviewCreateOrConnectWithoutPropertyInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutPropertyInput, ReviewUncheckedCreateWithoutPropertyInput>
  }

  export type ReviewCreateManyPropertyInputEnvelope = {
    data: ReviewCreateManyPropertyInput | ReviewCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type PropertyRulesCreateWithoutListingInput = {
    rule: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyRulesUncheckedCreateWithoutListingInput = {
    id?: number
    rule: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyRulesCreateOrConnectWithoutListingInput = {
    where: PropertyRulesWhereUniqueInput
    create: XOR<PropertyRulesCreateWithoutListingInput, PropertyRulesUncheckedCreateWithoutListingInput>
  }

  export type PropertyRulesCreateManyListingInputEnvelope = {
    data: PropertyRulesCreateManyListingInput | PropertyRulesCreateManyListingInput[]
    skipDuplicates?: boolean
  }

  export type PropertyPoliciesCreateWithoutListingInput = {
    policy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyPoliciesUncheckedCreateWithoutListingInput = {
    id?: number
    policy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyPoliciesCreateOrConnectWithoutListingInput = {
    where: PropertyPoliciesWhereUniqueInput
    create: XOR<PropertyPoliciesCreateWithoutListingInput, PropertyPoliciesUncheckedCreateWithoutListingInput>
  }

  export type PropertyPoliciesCreateManyListingInputEnvelope = {
    data: PropertyPoliciesCreateManyListingInput | PropertyPoliciesCreateManyListingInput[]
    skipDuplicates?: boolean
  }

  export type PropertyAmenitiesCreateWithoutListingInput = {
    amenity: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyAmenitiesUncheckedCreateWithoutListingInput = {
    id?: number
    amenity: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyAmenitiesCreateOrConnectWithoutListingInput = {
    where: PropertyAmenitiesWhereUniqueInput
    create: XOR<PropertyAmenitiesCreateWithoutListingInput, PropertyAmenitiesUncheckedCreateWithoutListingInput>
  }

  export type PropertyAmenitiesCreateManyListingInputEnvelope = {
    data: PropertyAmenitiesCreateManyListingInput | PropertyAmenitiesCreateManyListingInput[]
    skipDuplicates?: boolean
  }

  export type ReviewUpsertWithWhereUniqueWithoutPropertyInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutPropertyInput, ReviewUncheckedUpdateWithoutPropertyInput>
    create: XOR<ReviewCreateWithoutPropertyInput, ReviewUncheckedCreateWithoutPropertyInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutPropertyInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutPropertyInput, ReviewUncheckedUpdateWithoutPropertyInput>
  }

  export type ReviewUpdateManyWithWhereWithoutPropertyInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutPropertyInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: IntFilter<"Review"> | number
    sourceSystem?: StringFilter<"Review"> | string
    sourceReviewId?: StringFilter<"Review"> | string
    channel?: EnumChannelFilter<"Review"> | $Enums.Channel
    listingId?: IntFilter<"Review"> | number
    rating10?: DecimalNullableFilter<"Review"> | Decimal | DecimalJsLike | number | string | null
    overall5?: DecimalFilter<"Review"> | Decimal | DecimalJsLike | number | string
    type?: EnumReviewTypeFilter<"Review"> | $Enums.ReviewType
    publicReview?: StringFilter<"Review"> | string
    submittedAt?: DateTimeFilter<"Review"> | Date | string
    guestName?: StringFilter<"Review"> | string
    listingName?: StringFilter<"Review"> | string
    status?: EnumReviewStatusFilter<"Review"> | $Enums.ReviewStatus
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
  }

  export type PropertyRulesUpsertWithWhereUniqueWithoutListingInput = {
    where: PropertyRulesWhereUniqueInput
    update: XOR<PropertyRulesUpdateWithoutListingInput, PropertyRulesUncheckedUpdateWithoutListingInput>
    create: XOR<PropertyRulesCreateWithoutListingInput, PropertyRulesUncheckedCreateWithoutListingInput>
  }

  export type PropertyRulesUpdateWithWhereUniqueWithoutListingInput = {
    where: PropertyRulesWhereUniqueInput
    data: XOR<PropertyRulesUpdateWithoutListingInput, PropertyRulesUncheckedUpdateWithoutListingInput>
  }

  export type PropertyRulesUpdateManyWithWhereWithoutListingInput = {
    where: PropertyRulesScalarWhereInput
    data: XOR<PropertyRulesUpdateManyMutationInput, PropertyRulesUncheckedUpdateManyWithoutListingInput>
  }

  export type PropertyRulesScalarWhereInput = {
    AND?: PropertyRulesScalarWhereInput | PropertyRulesScalarWhereInput[]
    OR?: PropertyRulesScalarWhereInput[]
    NOT?: PropertyRulesScalarWhereInput | PropertyRulesScalarWhereInput[]
    id?: IntFilter<"PropertyRules"> | number
    listingId?: IntFilter<"PropertyRules"> | number
    rule?: StringFilter<"PropertyRules"> | string
    createdAt?: DateTimeFilter<"PropertyRules"> | Date | string
    updatedAt?: DateTimeFilter<"PropertyRules"> | Date | string
  }

  export type PropertyPoliciesUpsertWithWhereUniqueWithoutListingInput = {
    where: PropertyPoliciesWhereUniqueInput
    update: XOR<PropertyPoliciesUpdateWithoutListingInput, PropertyPoliciesUncheckedUpdateWithoutListingInput>
    create: XOR<PropertyPoliciesCreateWithoutListingInput, PropertyPoliciesUncheckedCreateWithoutListingInput>
  }

  export type PropertyPoliciesUpdateWithWhereUniqueWithoutListingInput = {
    where: PropertyPoliciesWhereUniqueInput
    data: XOR<PropertyPoliciesUpdateWithoutListingInput, PropertyPoliciesUncheckedUpdateWithoutListingInput>
  }

  export type PropertyPoliciesUpdateManyWithWhereWithoutListingInput = {
    where: PropertyPoliciesScalarWhereInput
    data: XOR<PropertyPoliciesUpdateManyMutationInput, PropertyPoliciesUncheckedUpdateManyWithoutListingInput>
  }

  export type PropertyPoliciesScalarWhereInput = {
    AND?: PropertyPoliciesScalarWhereInput | PropertyPoliciesScalarWhereInput[]
    OR?: PropertyPoliciesScalarWhereInput[]
    NOT?: PropertyPoliciesScalarWhereInput | PropertyPoliciesScalarWhereInput[]
    id?: IntFilter<"PropertyPolicies"> | number
    listingId?: IntFilter<"PropertyPolicies"> | number
    policy?: StringFilter<"PropertyPolicies"> | string
    createdAt?: DateTimeFilter<"PropertyPolicies"> | Date | string
    updatedAt?: DateTimeFilter<"PropertyPolicies"> | Date | string
  }

  export type PropertyAmenitiesUpsertWithWhereUniqueWithoutListingInput = {
    where: PropertyAmenitiesWhereUniqueInput
    update: XOR<PropertyAmenitiesUpdateWithoutListingInput, PropertyAmenitiesUncheckedUpdateWithoutListingInput>
    create: XOR<PropertyAmenitiesCreateWithoutListingInput, PropertyAmenitiesUncheckedCreateWithoutListingInput>
  }

  export type PropertyAmenitiesUpdateWithWhereUniqueWithoutListingInput = {
    where: PropertyAmenitiesWhereUniqueInput
    data: XOR<PropertyAmenitiesUpdateWithoutListingInput, PropertyAmenitiesUncheckedUpdateWithoutListingInput>
  }

  export type PropertyAmenitiesUpdateManyWithWhereWithoutListingInput = {
    where: PropertyAmenitiesScalarWhereInput
    data: XOR<PropertyAmenitiesUpdateManyMutationInput, PropertyAmenitiesUncheckedUpdateManyWithoutListingInput>
  }

  export type PropertyAmenitiesScalarWhereInput = {
    AND?: PropertyAmenitiesScalarWhereInput | PropertyAmenitiesScalarWhereInput[]
    OR?: PropertyAmenitiesScalarWhereInput[]
    NOT?: PropertyAmenitiesScalarWhereInput | PropertyAmenitiesScalarWhereInput[]
    id?: IntFilter<"PropertyAmenities"> | number
    listingId?: IntFilter<"PropertyAmenities"> | number
    amenity?: StringFilter<"PropertyAmenities"> | string
    createdAt?: DateTimeFilter<"PropertyAmenities"> | Date | string
    updatedAt?: DateTimeFilter<"PropertyAmenities"> | Date | string
  }

  export type ListingCreateWithoutRulesInput = {
    slug: string
    name: string
    address?: string | null
    city?: string | null
    state?: string | null
    zip?: string | null
    country?: string | null
    propertyDesc?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewCreateNestedManyWithoutPropertyInput
    policies?: PropertyPoliciesCreateNestedManyWithoutListingInput
    amenities?: PropertyAmenitiesCreateNestedManyWithoutListingInput
  }

  export type ListingUncheckedCreateWithoutRulesInput = {
    id?: number
    slug: string
    name: string
    address?: string | null
    city?: string | null
    state?: string | null
    zip?: string | null
    country?: string | null
    propertyDesc?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutPropertyInput
    policies?: PropertyPoliciesUncheckedCreateNestedManyWithoutListingInput
    amenities?: PropertyAmenitiesUncheckedCreateNestedManyWithoutListingInput
  }

  export type ListingCreateOrConnectWithoutRulesInput = {
    where: ListingWhereUniqueInput
    create: XOR<ListingCreateWithoutRulesInput, ListingUncheckedCreateWithoutRulesInput>
  }

  export type ListingUpsertWithoutRulesInput = {
    update: XOR<ListingUpdateWithoutRulesInput, ListingUncheckedUpdateWithoutRulesInput>
    create: XOR<ListingCreateWithoutRulesInput, ListingUncheckedCreateWithoutRulesInput>
    where?: ListingWhereInput
  }

  export type ListingUpdateToOneWithWhereWithoutRulesInput = {
    where?: ListingWhereInput
    data: XOR<ListingUpdateWithoutRulesInput, ListingUncheckedUpdateWithoutRulesInput>
  }

  export type ListingUpdateWithoutRulesInput = {
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    propertyDesc?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUpdateManyWithoutPropertyNestedInput
    policies?: PropertyPoliciesUpdateManyWithoutListingNestedInput
    amenities?: PropertyAmenitiesUpdateManyWithoutListingNestedInput
  }

  export type ListingUncheckedUpdateWithoutRulesInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    propertyDesc?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutPropertyNestedInput
    policies?: PropertyPoliciesUncheckedUpdateManyWithoutListingNestedInput
    amenities?: PropertyAmenitiesUncheckedUpdateManyWithoutListingNestedInput
  }

  export type ListingCreateWithoutPoliciesInput = {
    slug: string
    name: string
    address?: string | null
    city?: string | null
    state?: string | null
    zip?: string | null
    country?: string | null
    propertyDesc?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewCreateNestedManyWithoutPropertyInput
    rules?: PropertyRulesCreateNestedManyWithoutListingInput
    amenities?: PropertyAmenitiesCreateNestedManyWithoutListingInput
  }

  export type ListingUncheckedCreateWithoutPoliciesInput = {
    id?: number
    slug: string
    name: string
    address?: string | null
    city?: string | null
    state?: string | null
    zip?: string | null
    country?: string | null
    propertyDesc?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutPropertyInput
    rules?: PropertyRulesUncheckedCreateNestedManyWithoutListingInput
    amenities?: PropertyAmenitiesUncheckedCreateNestedManyWithoutListingInput
  }

  export type ListingCreateOrConnectWithoutPoliciesInput = {
    where: ListingWhereUniqueInput
    create: XOR<ListingCreateWithoutPoliciesInput, ListingUncheckedCreateWithoutPoliciesInput>
  }

  export type ListingUpsertWithoutPoliciesInput = {
    update: XOR<ListingUpdateWithoutPoliciesInput, ListingUncheckedUpdateWithoutPoliciesInput>
    create: XOR<ListingCreateWithoutPoliciesInput, ListingUncheckedCreateWithoutPoliciesInput>
    where?: ListingWhereInput
  }

  export type ListingUpdateToOneWithWhereWithoutPoliciesInput = {
    where?: ListingWhereInput
    data: XOR<ListingUpdateWithoutPoliciesInput, ListingUncheckedUpdateWithoutPoliciesInput>
  }

  export type ListingUpdateWithoutPoliciesInput = {
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    propertyDesc?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUpdateManyWithoutPropertyNestedInput
    rules?: PropertyRulesUpdateManyWithoutListingNestedInput
    amenities?: PropertyAmenitiesUpdateManyWithoutListingNestedInput
  }

  export type ListingUncheckedUpdateWithoutPoliciesInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    propertyDesc?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutPropertyNestedInput
    rules?: PropertyRulesUncheckedUpdateManyWithoutListingNestedInput
    amenities?: PropertyAmenitiesUncheckedUpdateManyWithoutListingNestedInput
  }

  export type ListingCreateWithoutAmenitiesInput = {
    slug: string
    name: string
    address?: string | null
    city?: string | null
    state?: string | null
    zip?: string | null
    country?: string | null
    propertyDesc?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewCreateNestedManyWithoutPropertyInput
    rules?: PropertyRulesCreateNestedManyWithoutListingInput
    policies?: PropertyPoliciesCreateNestedManyWithoutListingInput
  }

  export type ListingUncheckedCreateWithoutAmenitiesInput = {
    id?: number
    slug: string
    name: string
    address?: string | null
    city?: string | null
    state?: string | null
    zip?: string | null
    country?: string | null
    propertyDesc?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutPropertyInput
    rules?: PropertyRulesUncheckedCreateNestedManyWithoutListingInput
    policies?: PropertyPoliciesUncheckedCreateNestedManyWithoutListingInput
  }

  export type ListingCreateOrConnectWithoutAmenitiesInput = {
    where: ListingWhereUniqueInput
    create: XOR<ListingCreateWithoutAmenitiesInput, ListingUncheckedCreateWithoutAmenitiesInput>
  }

  export type ListingUpsertWithoutAmenitiesInput = {
    update: XOR<ListingUpdateWithoutAmenitiesInput, ListingUncheckedUpdateWithoutAmenitiesInput>
    create: XOR<ListingCreateWithoutAmenitiesInput, ListingUncheckedCreateWithoutAmenitiesInput>
    where?: ListingWhereInput
  }

  export type ListingUpdateToOneWithWhereWithoutAmenitiesInput = {
    where?: ListingWhereInput
    data: XOR<ListingUpdateWithoutAmenitiesInput, ListingUncheckedUpdateWithoutAmenitiesInput>
  }

  export type ListingUpdateWithoutAmenitiesInput = {
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    propertyDesc?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUpdateManyWithoutPropertyNestedInput
    rules?: PropertyRulesUpdateManyWithoutListingNestedInput
    policies?: PropertyPoliciesUpdateManyWithoutListingNestedInput
  }

  export type ListingUncheckedUpdateWithoutAmenitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    propertyDesc?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutPropertyNestedInput
    rules?: PropertyRulesUncheckedUpdateManyWithoutListingNestedInput
    policies?: PropertyPoliciesUncheckedUpdateManyWithoutListingNestedInput
  }

  export type ReviewCategoryScoreCreateWithoutCategoryInput = {
    score10?: Decimal | DecimalJsLike | number | string | null
    score5?: Decimal | DecimalJsLike | number | string | null
    review: ReviewCreateNestedOneWithoutReviewCategoryScoreInput
  }

  export type ReviewCategoryScoreUncheckedCreateWithoutCategoryInput = {
    reviewId: number
    score10?: Decimal | DecimalJsLike | number | string | null
    score5?: Decimal | DecimalJsLike | number | string | null
  }

  export type ReviewCategoryScoreCreateOrConnectWithoutCategoryInput = {
    where: ReviewCategoryScoreWhereUniqueInput
    create: XOR<ReviewCategoryScoreCreateWithoutCategoryInput, ReviewCategoryScoreUncheckedCreateWithoutCategoryInput>
  }

  export type ReviewCategoryScoreCreateManyCategoryInputEnvelope = {
    data: ReviewCategoryScoreCreateManyCategoryInput | ReviewCategoryScoreCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCategoryScoreUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ReviewCategoryScoreWhereUniqueInput
    update: XOR<ReviewCategoryScoreUpdateWithoutCategoryInput, ReviewCategoryScoreUncheckedUpdateWithoutCategoryInput>
    create: XOR<ReviewCategoryScoreCreateWithoutCategoryInput, ReviewCategoryScoreUncheckedCreateWithoutCategoryInput>
  }

  export type ReviewCategoryScoreUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ReviewCategoryScoreWhereUniqueInput
    data: XOR<ReviewCategoryScoreUpdateWithoutCategoryInput, ReviewCategoryScoreUncheckedUpdateWithoutCategoryInput>
  }

  export type ReviewCategoryScoreUpdateManyWithWhereWithoutCategoryInput = {
    where: ReviewCategoryScoreScalarWhereInput
    data: XOR<ReviewCategoryScoreUpdateManyMutationInput, ReviewCategoryScoreUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ReviewCreateWithoutReviewCategoryScoreInput = {
    sourceSystem?: string
    sourceReviewId: string
    channel: $Enums.Channel
    rating10?: Decimal | DecimalJsLike | number | string | null
    overall5: Decimal | DecimalJsLike | number | string
    type: $Enums.ReviewType
    publicReview: string
    submittedAt: Date | string
    guestName: string
    listingName: string
    status?: $Enums.ReviewStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    Property: ListingCreateNestedOneWithoutReviewsInput
    ApprovedReview?: ApprovedReviewCreateNestedOneWithoutReviewsInput
    raw?: ReviewRawIngestCreateNestedOneWithoutReviewInput
    FollowUps?: FollowUpsCreateNestedManyWithoutReviewInput
  }

  export type ReviewUncheckedCreateWithoutReviewCategoryScoreInput = {
    id?: number
    sourceSystem?: string
    sourceReviewId: string
    channel: $Enums.Channel
    listingId: number
    rating10?: Decimal | DecimalJsLike | number | string | null
    overall5: Decimal | DecimalJsLike | number | string
    type: $Enums.ReviewType
    publicReview: string
    submittedAt: Date | string
    guestName: string
    listingName: string
    status?: $Enums.ReviewStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    ApprovedReview?: ApprovedReviewUncheckedCreateNestedOneWithoutReviewsInput
    raw?: ReviewRawIngestUncheckedCreateNestedOneWithoutReviewInput
    FollowUps?: FollowUpsUncheckedCreateNestedManyWithoutReviewInput
  }

  export type ReviewCreateOrConnectWithoutReviewCategoryScoreInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutReviewCategoryScoreInput, ReviewUncheckedCreateWithoutReviewCategoryScoreInput>
  }

  export type CategoryCreateWithoutScoresInput = {
    name: string
  }

  export type CategoryUncheckedCreateWithoutScoresInput = {
    id?: number
    name: string
  }

  export type CategoryCreateOrConnectWithoutScoresInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutScoresInput, CategoryUncheckedCreateWithoutScoresInput>
  }

  export type ReviewUpsertWithoutReviewCategoryScoreInput = {
    update: XOR<ReviewUpdateWithoutReviewCategoryScoreInput, ReviewUncheckedUpdateWithoutReviewCategoryScoreInput>
    create: XOR<ReviewCreateWithoutReviewCategoryScoreInput, ReviewUncheckedCreateWithoutReviewCategoryScoreInput>
    where?: ReviewWhereInput
  }

  export type ReviewUpdateToOneWithWhereWithoutReviewCategoryScoreInput = {
    where?: ReviewWhereInput
    data: XOR<ReviewUpdateWithoutReviewCategoryScoreInput, ReviewUncheckedUpdateWithoutReviewCategoryScoreInput>
  }

  export type ReviewUpdateWithoutReviewCategoryScoreInput = {
    sourceSystem?: StringFieldUpdateOperationsInput | string
    sourceReviewId?: StringFieldUpdateOperationsInput | string
    channel?: EnumChannelFieldUpdateOperationsInput | $Enums.Channel
    rating10?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    overall5?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumReviewTypeFieldUpdateOperationsInput | $Enums.ReviewType
    publicReview?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guestName?: StringFieldUpdateOperationsInput | string
    listingName?: StringFieldUpdateOperationsInput | string
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Property?: ListingUpdateOneRequiredWithoutReviewsNestedInput
    ApprovedReview?: ApprovedReviewUpdateOneWithoutReviewsNestedInput
    raw?: ReviewRawIngestUpdateOneWithoutReviewNestedInput
    FollowUps?: FollowUpsUpdateManyWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateWithoutReviewCategoryScoreInput = {
    id?: IntFieldUpdateOperationsInput | number
    sourceSystem?: StringFieldUpdateOperationsInput | string
    sourceReviewId?: StringFieldUpdateOperationsInput | string
    channel?: EnumChannelFieldUpdateOperationsInput | $Enums.Channel
    listingId?: IntFieldUpdateOperationsInput | number
    rating10?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    overall5?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumReviewTypeFieldUpdateOperationsInput | $Enums.ReviewType
    publicReview?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guestName?: StringFieldUpdateOperationsInput | string
    listingName?: StringFieldUpdateOperationsInput | string
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ApprovedReview?: ApprovedReviewUncheckedUpdateOneWithoutReviewsNestedInput
    raw?: ReviewRawIngestUncheckedUpdateOneWithoutReviewNestedInput
    FollowUps?: FollowUpsUncheckedUpdateManyWithoutReviewNestedInput
  }

  export type CategoryUpsertWithoutScoresInput = {
    update: XOR<CategoryUpdateWithoutScoresInput, CategoryUncheckedUpdateWithoutScoresInput>
    create: XOR<CategoryCreateWithoutScoresInput, CategoryUncheckedCreateWithoutScoresInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutScoresInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutScoresInput, CategoryUncheckedUpdateWithoutScoresInput>
  }

  export type CategoryUpdateWithoutScoresInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateWithoutScoresInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewCreateWithoutRawInput = {
    sourceSystem?: string
    sourceReviewId: string
    channel: $Enums.Channel
    rating10?: Decimal | DecimalJsLike | number | string | null
    overall5: Decimal | DecimalJsLike | number | string
    type: $Enums.ReviewType
    publicReview: string
    submittedAt: Date | string
    guestName: string
    listingName: string
    status?: $Enums.ReviewStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    Property: ListingCreateNestedOneWithoutReviewsInput
    ReviewCategoryScore?: ReviewCategoryScoreCreateNestedManyWithoutReviewInput
    ApprovedReview?: ApprovedReviewCreateNestedOneWithoutReviewsInput
    FollowUps?: FollowUpsCreateNestedManyWithoutReviewInput
  }

  export type ReviewUncheckedCreateWithoutRawInput = {
    id?: number
    sourceSystem?: string
    sourceReviewId: string
    channel: $Enums.Channel
    listingId: number
    rating10?: Decimal | DecimalJsLike | number | string | null
    overall5: Decimal | DecimalJsLike | number | string
    type: $Enums.ReviewType
    publicReview: string
    submittedAt: Date | string
    guestName: string
    listingName: string
    status?: $Enums.ReviewStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    ReviewCategoryScore?: ReviewCategoryScoreUncheckedCreateNestedManyWithoutReviewInput
    ApprovedReview?: ApprovedReviewUncheckedCreateNestedOneWithoutReviewsInput
    FollowUps?: FollowUpsUncheckedCreateNestedManyWithoutReviewInput
  }

  export type ReviewCreateOrConnectWithoutRawInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutRawInput, ReviewUncheckedCreateWithoutRawInput>
  }

  export type ReviewUpsertWithoutRawInput = {
    update: XOR<ReviewUpdateWithoutRawInput, ReviewUncheckedUpdateWithoutRawInput>
    create: XOR<ReviewCreateWithoutRawInput, ReviewUncheckedCreateWithoutRawInput>
    where?: ReviewWhereInput
  }

  export type ReviewUpdateToOneWithWhereWithoutRawInput = {
    where?: ReviewWhereInput
    data: XOR<ReviewUpdateWithoutRawInput, ReviewUncheckedUpdateWithoutRawInput>
  }

  export type ReviewUpdateWithoutRawInput = {
    sourceSystem?: StringFieldUpdateOperationsInput | string
    sourceReviewId?: StringFieldUpdateOperationsInput | string
    channel?: EnumChannelFieldUpdateOperationsInput | $Enums.Channel
    rating10?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    overall5?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumReviewTypeFieldUpdateOperationsInput | $Enums.ReviewType
    publicReview?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guestName?: StringFieldUpdateOperationsInput | string
    listingName?: StringFieldUpdateOperationsInput | string
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Property?: ListingUpdateOneRequiredWithoutReviewsNestedInput
    ReviewCategoryScore?: ReviewCategoryScoreUpdateManyWithoutReviewNestedInput
    ApprovedReview?: ApprovedReviewUpdateOneWithoutReviewsNestedInput
    FollowUps?: FollowUpsUpdateManyWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateWithoutRawInput = {
    id?: IntFieldUpdateOperationsInput | number
    sourceSystem?: StringFieldUpdateOperationsInput | string
    sourceReviewId?: StringFieldUpdateOperationsInput | string
    channel?: EnumChannelFieldUpdateOperationsInput | $Enums.Channel
    listingId?: IntFieldUpdateOperationsInput | number
    rating10?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    overall5?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumReviewTypeFieldUpdateOperationsInput | $Enums.ReviewType
    publicReview?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guestName?: StringFieldUpdateOperationsInput | string
    listingName?: StringFieldUpdateOperationsInput | string
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ReviewCategoryScore?: ReviewCategoryScoreUncheckedUpdateManyWithoutReviewNestedInput
    ApprovedReview?: ApprovedReviewUncheckedUpdateOneWithoutReviewsNestedInput
    FollowUps?: FollowUpsUncheckedUpdateManyWithoutReviewNestedInput
  }

  export type ReviewCreateWithoutFollowUpsInput = {
    sourceSystem?: string
    sourceReviewId: string
    channel: $Enums.Channel
    rating10?: Decimal | DecimalJsLike | number | string | null
    overall5: Decimal | DecimalJsLike | number | string
    type: $Enums.ReviewType
    publicReview: string
    submittedAt: Date | string
    guestName: string
    listingName: string
    status?: $Enums.ReviewStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    Property: ListingCreateNestedOneWithoutReviewsInput
    ReviewCategoryScore?: ReviewCategoryScoreCreateNestedManyWithoutReviewInput
    ApprovedReview?: ApprovedReviewCreateNestedOneWithoutReviewsInput
    raw?: ReviewRawIngestCreateNestedOneWithoutReviewInput
  }

  export type ReviewUncheckedCreateWithoutFollowUpsInput = {
    id?: number
    sourceSystem?: string
    sourceReviewId: string
    channel: $Enums.Channel
    listingId: number
    rating10?: Decimal | DecimalJsLike | number | string | null
    overall5: Decimal | DecimalJsLike | number | string
    type: $Enums.ReviewType
    publicReview: string
    submittedAt: Date | string
    guestName: string
    listingName: string
    status?: $Enums.ReviewStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    ReviewCategoryScore?: ReviewCategoryScoreUncheckedCreateNestedManyWithoutReviewInput
    ApprovedReview?: ApprovedReviewUncheckedCreateNestedOneWithoutReviewsInput
    raw?: ReviewRawIngestUncheckedCreateNestedOneWithoutReviewInput
  }

  export type ReviewCreateOrConnectWithoutFollowUpsInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutFollowUpsInput, ReviewUncheckedCreateWithoutFollowUpsInput>
  }

  export type ReviewUpsertWithoutFollowUpsInput = {
    update: XOR<ReviewUpdateWithoutFollowUpsInput, ReviewUncheckedUpdateWithoutFollowUpsInput>
    create: XOR<ReviewCreateWithoutFollowUpsInput, ReviewUncheckedCreateWithoutFollowUpsInput>
    where?: ReviewWhereInput
  }

  export type ReviewUpdateToOneWithWhereWithoutFollowUpsInput = {
    where?: ReviewWhereInput
    data: XOR<ReviewUpdateWithoutFollowUpsInput, ReviewUncheckedUpdateWithoutFollowUpsInput>
  }

  export type ReviewUpdateWithoutFollowUpsInput = {
    sourceSystem?: StringFieldUpdateOperationsInput | string
    sourceReviewId?: StringFieldUpdateOperationsInput | string
    channel?: EnumChannelFieldUpdateOperationsInput | $Enums.Channel
    rating10?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    overall5?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumReviewTypeFieldUpdateOperationsInput | $Enums.ReviewType
    publicReview?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guestName?: StringFieldUpdateOperationsInput | string
    listingName?: StringFieldUpdateOperationsInput | string
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Property?: ListingUpdateOneRequiredWithoutReviewsNestedInput
    ReviewCategoryScore?: ReviewCategoryScoreUpdateManyWithoutReviewNestedInput
    ApprovedReview?: ApprovedReviewUpdateOneWithoutReviewsNestedInput
    raw?: ReviewRawIngestUpdateOneWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateWithoutFollowUpsInput = {
    id?: IntFieldUpdateOperationsInput | number
    sourceSystem?: StringFieldUpdateOperationsInput | string
    sourceReviewId?: StringFieldUpdateOperationsInput | string
    channel?: EnumChannelFieldUpdateOperationsInput | $Enums.Channel
    listingId?: IntFieldUpdateOperationsInput | number
    rating10?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    overall5?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumReviewTypeFieldUpdateOperationsInput | $Enums.ReviewType
    publicReview?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guestName?: StringFieldUpdateOperationsInput | string
    listingName?: StringFieldUpdateOperationsInput | string
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ReviewCategoryScore?: ReviewCategoryScoreUncheckedUpdateManyWithoutReviewNestedInput
    ApprovedReview?: ApprovedReviewUncheckedUpdateOneWithoutReviewsNestedInput
    raw?: ReviewRawIngestUncheckedUpdateOneWithoutReviewNestedInput
  }

  export type ReviewCategoryScoreCreateManyReviewInput = {
    categoryId: number
    score10?: Decimal | DecimalJsLike | number | string | null
    score5?: Decimal | DecimalJsLike | number | string | null
  }

  export type FollowUpsCreateManyReviewInput = {
    id?: number
    term: string
    issueId?: string | null
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    completed?: boolean
    closedAt?: Date | string | null
  }

  export type ReviewCategoryScoreUpdateWithoutReviewInput = {
    score10?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    score5?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    category?: CategoryUpdateOneRequiredWithoutScoresNestedInput
  }

  export type ReviewCategoryScoreUncheckedUpdateWithoutReviewInput = {
    categoryId?: IntFieldUpdateOperationsInput | number
    score10?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    score5?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type ReviewCategoryScoreUncheckedUpdateManyWithoutReviewInput = {
    categoryId?: IntFieldUpdateOperationsInput | number
    score10?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    score5?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type FollowUpsUpdateWithoutReviewInput = {
    term?: StringFieldUpdateOperationsInput | string
    issueId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FollowUpsUncheckedUpdateWithoutReviewInput = {
    id?: IntFieldUpdateOperationsInput | number
    term?: StringFieldUpdateOperationsInput | string
    issueId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FollowUpsUncheckedUpdateManyWithoutReviewInput = {
    id?: IntFieldUpdateOperationsInput | number
    term?: StringFieldUpdateOperationsInput | string
    issueId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReviewCreateManyPropertyInput = {
    id?: number
    sourceSystem?: string
    sourceReviewId: string
    channel: $Enums.Channel
    rating10?: Decimal | DecimalJsLike | number | string | null
    overall5: Decimal | DecimalJsLike | number | string
    type: $Enums.ReviewType
    publicReview: string
    submittedAt: Date | string
    guestName: string
    listingName: string
    status?: $Enums.ReviewStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyRulesCreateManyListingInput = {
    id?: number
    rule: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyPoliciesCreateManyListingInput = {
    id?: number
    policy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyAmenitiesCreateManyListingInput = {
    id?: number
    amenity: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateWithoutPropertyInput = {
    sourceSystem?: StringFieldUpdateOperationsInput | string
    sourceReviewId?: StringFieldUpdateOperationsInput | string
    channel?: EnumChannelFieldUpdateOperationsInput | $Enums.Channel
    rating10?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    overall5?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumReviewTypeFieldUpdateOperationsInput | $Enums.ReviewType
    publicReview?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guestName?: StringFieldUpdateOperationsInput | string
    listingName?: StringFieldUpdateOperationsInput | string
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ReviewCategoryScore?: ReviewCategoryScoreUpdateManyWithoutReviewNestedInput
    ApprovedReview?: ApprovedReviewUpdateOneWithoutReviewsNestedInput
    raw?: ReviewRawIngestUpdateOneWithoutReviewNestedInput
    FollowUps?: FollowUpsUpdateManyWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateWithoutPropertyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sourceSystem?: StringFieldUpdateOperationsInput | string
    sourceReviewId?: StringFieldUpdateOperationsInput | string
    channel?: EnumChannelFieldUpdateOperationsInput | $Enums.Channel
    rating10?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    overall5?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumReviewTypeFieldUpdateOperationsInput | $Enums.ReviewType
    publicReview?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guestName?: StringFieldUpdateOperationsInput | string
    listingName?: StringFieldUpdateOperationsInput | string
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ReviewCategoryScore?: ReviewCategoryScoreUncheckedUpdateManyWithoutReviewNestedInput
    ApprovedReview?: ApprovedReviewUncheckedUpdateOneWithoutReviewsNestedInput
    raw?: ReviewRawIngestUncheckedUpdateOneWithoutReviewNestedInput
    FollowUps?: FollowUpsUncheckedUpdateManyWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateManyWithoutPropertyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sourceSystem?: StringFieldUpdateOperationsInput | string
    sourceReviewId?: StringFieldUpdateOperationsInput | string
    channel?: EnumChannelFieldUpdateOperationsInput | $Enums.Channel
    rating10?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    overall5?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumReviewTypeFieldUpdateOperationsInput | $Enums.ReviewType
    publicReview?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guestName?: StringFieldUpdateOperationsInput | string
    listingName?: StringFieldUpdateOperationsInput | string
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyRulesUpdateWithoutListingInput = {
    rule?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyRulesUncheckedUpdateWithoutListingInput = {
    id?: IntFieldUpdateOperationsInput | number
    rule?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyRulesUncheckedUpdateManyWithoutListingInput = {
    id?: IntFieldUpdateOperationsInput | number
    rule?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyPoliciesUpdateWithoutListingInput = {
    policy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyPoliciesUncheckedUpdateWithoutListingInput = {
    id?: IntFieldUpdateOperationsInput | number
    policy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyPoliciesUncheckedUpdateManyWithoutListingInput = {
    id?: IntFieldUpdateOperationsInput | number
    policy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyAmenitiesUpdateWithoutListingInput = {
    amenity?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyAmenitiesUncheckedUpdateWithoutListingInput = {
    id?: IntFieldUpdateOperationsInput | number
    amenity?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyAmenitiesUncheckedUpdateManyWithoutListingInput = {
    id?: IntFieldUpdateOperationsInput | number
    amenity?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCategoryScoreCreateManyCategoryInput = {
    reviewId: number
    score10?: Decimal | DecimalJsLike | number | string | null
    score5?: Decimal | DecimalJsLike | number | string | null
  }

  export type ReviewCategoryScoreUpdateWithoutCategoryInput = {
    score10?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    score5?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    review?: ReviewUpdateOneRequiredWithoutReviewCategoryScoreNestedInput
  }

  export type ReviewCategoryScoreUncheckedUpdateWithoutCategoryInput = {
    reviewId?: IntFieldUpdateOperationsInput | number
    score10?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    score5?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type ReviewCategoryScoreUncheckedUpdateManyWithoutCategoryInput = {
    reviewId?: IntFieldUpdateOperationsInput | number
    score10?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    score5?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
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