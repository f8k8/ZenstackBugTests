import * as Client from '@prisma/client'

import { Context } from './context'

import { GraphQLResolveInfo } from 'graphql'

type Resolver<T extends {}, A extends {}, R extends any> = (
  parent: T,
  args: A,
  context: Context,
  info: GraphQLResolveInfo,
) => Promise<R>

type NoExpand<T> = T extends unknown ? T : never

type AtLeast<O extends object, K extends string> = NoExpand<
  O extends unknown
    ?
        | (K extends keyof O ? { [P in K]: O[P] } & O : O)
        | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
    : never
>

export type Resolvers = {
  [key: string]: { [key: string]: Resolver<any, any, any> }
} & {
  User?: User
  Company?: Company
  CompanyUser?: CompanyUser
  PropertyUserRole?: PropertyUserRole
  PropertyUser?: PropertyUser
  Property?: Property
  Query?: Query
  Mutation?: Mutation
  AggregateUser?: AggregateUser
  UserGroupByOutputType?: UserGroupByOutputType
  AggregateCompany?: AggregateCompany
  CompanyGroupByOutputType?: CompanyGroupByOutputType
  AggregateCompanyUser?: AggregateCompanyUser
  CompanyUserGroupByOutputType?: CompanyUserGroupByOutputType
  AggregatePropertyUserRole?: AggregatePropertyUserRole
  PropertyUserRoleGroupByOutputType?: PropertyUserRoleGroupByOutputType
  AggregatePropertyUser?: AggregatePropertyUser
  PropertyUserGroupByOutputType?: PropertyUserGroupByOutputType
  AggregateProperty?: AggregateProperty
  PropertyGroupByOutputType?: PropertyGroupByOutputType
  AffectedRowsOutput?: AffectedRowsOutput
  UserCountOutputType?: UserCountOutputType
  UserCountAggregateOutputType?: UserCountAggregateOutputType
  UserAvgAggregateOutputType?: UserAvgAggregateOutputType
  UserSumAggregateOutputType?: UserSumAggregateOutputType
  UserMinAggregateOutputType?: UserMinAggregateOutputType
  UserMaxAggregateOutputType?: UserMaxAggregateOutputType
  CompanyCountOutputType?: CompanyCountOutputType
  CompanyCountAggregateOutputType?: CompanyCountAggregateOutputType
  CompanyAvgAggregateOutputType?: CompanyAvgAggregateOutputType
  CompanySumAggregateOutputType?: CompanySumAggregateOutputType
  CompanyMinAggregateOutputType?: CompanyMinAggregateOutputType
  CompanyMaxAggregateOutputType?: CompanyMaxAggregateOutputType
  CompanyUserCountAggregateOutputType?: CompanyUserCountAggregateOutputType
  CompanyUserAvgAggregateOutputType?: CompanyUserAvgAggregateOutputType
  CompanyUserSumAggregateOutputType?: CompanyUserSumAggregateOutputType
  CompanyUserMinAggregateOutputType?: CompanyUserMinAggregateOutputType
  CompanyUserMaxAggregateOutputType?: CompanyUserMaxAggregateOutputType
  PropertyUserRoleCountAggregateOutputType?: PropertyUserRoleCountAggregateOutputType
  PropertyUserRoleAvgAggregateOutputType?: PropertyUserRoleAvgAggregateOutputType
  PropertyUserRoleSumAggregateOutputType?: PropertyUserRoleSumAggregateOutputType
  PropertyUserRoleMinAggregateOutputType?: PropertyUserRoleMinAggregateOutputType
  PropertyUserRoleMaxAggregateOutputType?: PropertyUserRoleMaxAggregateOutputType
  PropertyUserCountOutputType?: PropertyUserCountOutputType
  PropertyUserCountAggregateOutputType?: PropertyUserCountAggregateOutputType
  PropertyUserAvgAggregateOutputType?: PropertyUserAvgAggregateOutputType
  PropertyUserSumAggregateOutputType?: PropertyUserSumAggregateOutputType
  PropertyUserMinAggregateOutputType?: PropertyUserMinAggregateOutputType
  PropertyUserMaxAggregateOutputType?: PropertyUserMaxAggregateOutputType
  PropertyCountOutputType?: PropertyCountOutputType
  PropertyCountAggregateOutputType?: PropertyCountAggregateOutputType
  PropertyAvgAggregateOutputType?: PropertyAvgAggregateOutputType
  PropertySumAggregateOutputType?: PropertySumAggregateOutputType
  PropertyMinAggregateOutputType?: PropertyMinAggregateOutputType
  PropertyMaxAggregateOutputType?: PropertyMaxAggregateOutputType
}

export type User = { [key: string]: Resolver<any, any, any> } & {
  id?: Resolver<Client.User, {}, number>
  username?: Resolver<Client.User, {}, string>
  employedBy?: Resolver<
    Client.User,
    UserEmployedByArgs,
    Client.CompanyUser[] | null
  >
  properties?: Resolver<
    Client.User,
    UserPropertiesArgs,
    Client.PropertyUser[] | null
  >
  companies?: Resolver<Client.User, UserCompaniesArgs, Client.Company[] | null>
  _count?: Resolver<Client.User, {}, Client.Prisma.UserCountOutputType>
}

export type Company = { [key: string]: Resolver<any, any, any> } & {
  id?: Resolver<Client.Company, {}, number>
  name?: Resolver<Client.Company, {}, string>
  companyUsers?: Resolver<
    Client.Company,
    CompanyCompanyUsersArgs,
    Client.CompanyUser[] | null
  >
  propertyUsers?: Resolver<
    Client.Company,
    CompanyPropertyUsersArgs,
    Client.User[] | null
  >
  properties?: Resolver<
    Client.Company,
    CompanyPropertiesArgs,
    Client.Property[] | null
  >
  _count?: Resolver<Client.Company, {}, Client.Prisma.CompanyCountOutputType>
}

export type CompanyUser = { [key: string]: Resolver<any, any, any> } & {
  companyId?: Resolver<Client.CompanyUser, {}, number>
  userId?: Resolver<Client.CompanyUser, {}, number>
  dummyField?: Resolver<Client.CompanyUser, {}, string>
  company?: Resolver<Client.CompanyUser, {}, Client.Company>
  user?: Resolver<Client.CompanyUser, {}, Client.User>
}

export type PropertyUserRole = { [key: string]: Resolver<any, any, any> } & {
  id?: Resolver<Client.PropertyUserRole, {}, number>
  type?: Resolver<Client.PropertyUserRole, {}, Client.PropertyUserRoleType>
  userId?: Resolver<Client.PropertyUserRole, {}, number>
  user?: Resolver<Client.PropertyUserRole, {}, Client.PropertyUser>
}

export type PropertyUser = { [key: string]: Resolver<any, any, any> } & {
  id?: Resolver<Client.PropertyUser, {}, number>
  dummyField?: Resolver<Client.PropertyUser, {}, string>
  propertyId?: Resolver<Client.PropertyUser, {}, number>
  userId?: Resolver<Client.PropertyUser, {}, number>
  property?: Resolver<Client.PropertyUser, {}, Client.Property>
  user?: Resolver<Client.PropertyUser, {}, Client.User>
  roles?: Resolver<
    Client.PropertyUser,
    PropertyUserRolesArgs,
    Client.PropertyUserRole[] | null
  >
  _count?: Resolver<
    Client.PropertyUser,
    {},
    Client.Prisma.PropertyUserCountOutputType
  >
}

export type Property = { [key: string]: Resolver<any, any, any> } & {
  id?: Resolver<Client.Property, {}, number>
  name?: Resolver<Client.Property, {}, string>
  companyId?: Resolver<Client.Property, {}, number>
  users?: Resolver<
    Client.Property,
    PropertyUsersArgs,
    Client.PropertyUser[] | null
  >
  company?: Resolver<Client.Property, {}, Client.Company>
  _count?: Resolver<Client.Property, {}, Client.Prisma.PropertyCountOutputType>
}

export type Query = { [key: string]: Resolver<any, any, any> } & {
  findFirstUser?: Resolver<{}, FindFirstUserArgs, Client.User | null>
  findFirstUserOrThrow?: Resolver<
    {},
    FindFirstUserOrThrowArgs,
    Client.User | null
  >
  findManyUser?: Resolver<{}, FindManyUserArgs, Client.User[]>
  findManyUserCount?: Resolver<{}, FindManyUserArgs, number>
  aggregateUser?: Resolver<
    {},
    AggregateUserArgs,
    Client.Prisma.GetUserAggregateType<AggregateUserArgs>
  >
  groupByUser?: Resolver<
    {},
    GroupByUserArgs,
    Client.Prisma.UserGroupByOutputType[]
  >
  findUniqueUser?: Resolver<{}, FindUniqueUserArgs, Client.User | null>
  findUniqueUserOrThrow?: Resolver<
    {},
    FindUniqueUserOrThrowArgs,
    Client.User | null
  >
  findFirstCompany?: Resolver<{}, FindFirstCompanyArgs, Client.Company | null>
  findFirstCompanyOrThrow?: Resolver<
    {},
    FindFirstCompanyOrThrowArgs,
    Client.Company | null
  >
  findManyCompany?: Resolver<{}, FindManyCompanyArgs, Client.Company[]>
  findManyCompanyCount?: Resolver<{}, FindManyCompanyArgs, number>
  aggregateCompany?: Resolver<
    {},
    AggregateCompanyArgs,
    Client.Prisma.GetCompanyAggregateType<AggregateCompanyArgs>
  >
  groupByCompany?: Resolver<
    {},
    GroupByCompanyArgs,
    Client.Prisma.CompanyGroupByOutputType[]
  >
  findUniqueCompany?: Resolver<{}, FindUniqueCompanyArgs, Client.Company | null>
  findUniqueCompanyOrThrow?: Resolver<
    {},
    FindUniqueCompanyOrThrowArgs,
    Client.Company | null
  >
  findFirstCompanyUser?: Resolver<
    {},
    FindFirstCompanyUserArgs,
    Client.CompanyUser | null
  >
  findFirstCompanyUserOrThrow?: Resolver<
    {},
    FindFirstCompanyUserOrThrowArgs,
    Client.CompanyUser | null
  >
  findManyCompanyUser?: Resolver<
    {},
    FindManyCompanyUserArgs,
    Client.CompanyUser[]
  >
  findManyCompanyUserCount?: Resolver<{}, FindManyCompanyUserArgs, number>
  aggregateCompanyUser?: Resolver<
    {},
    AggregateCompanyUserArgs,
    Client.Prisma.GetCompanyUserAggregateType<AggregateCompanyUserArgs>
  >
  groupByCompanyUser?: Resolver<
    {},
    GroupByCompanyUserArgs,
    Client.Prisma.CompanyUserGroupByOutputType[]
  >
  findUniqueCompanyUser?: Resolver<
    {},
    FindUniqueCompanyUserArgs,
    Client.CompanyUser | null
  >
  findUniqueCompanyUserOrThrow?: Resolver<
    {},
    FindUniqueCompanyUserOrThrowArgs,
    Client.CompanyUser | null
  >
  findFirstPropertyUserRole?: Resolver<
    {},
    FindFirstPropertyUserRoleArgs,
    Client.PropertyUserRole | null
  >
  findFirstPropertyUserRoleOrThrow?: Resolver<
    {},
    FindFirstPropertyUserRoleOrThrowArgs,
    Client.PropertyUserRole | null
  >
  findManyPropertyUserRole?: Resolver<
    {},
    FindManyPropertyUserRoleArgs,
    Client.PropertyUserRole[]
  >
  findManyPropertyUserRoleCount?: Resolver<
    {},
    FindManyPropertyUserRoleArgs,
    number
  >
  aggregatePropertyUserRole?: Resolver<
    {},
    AggregatePropertyUserRoleArgs,
    Client.Prisma.GetPropertyUserRoleAggregateType<AggregatePropertyUserRoleArgs>
  >
  groupByPropertyUserRole?: Resolver<
    {},
    GroupByPropertyUserRoleArgs,
    Client.Prisma.PropertyUserRoleGroupByOutputType[]
  >
  findUniquePropertyUserRole?: Resolver<
    {},
    FindUniquePropertyUserRoleArgs,
    Client.PropertyUserRole | null
  >
  findUniquePropertyUserRoleOrThrow?: Resolver<
    {},
    FindUniquePropertyUserRoleOrThrowArgs,
    Client.PropertyUserRole | null
  >
  findFirstPropertyUser?: Resolver<
    {},
    FindFirstPropertyUserArgs,
    Client.PropertyUser | null
  >
  findFirstPropertyUserOrThrow?: Resolver<
    {},
    FindFirstPropertyUserOrThrowArgs,
    Client.PropertyUser | null
  >
  findManyPropertyUser?: Resolver<
    {},
    FindManyPropertyUserArgs,
    Client.PropertyUser[]
  >
  findManyPropertyUserCount?: Resolver<{}, FindManyPropertyUserArgs, number>
  aggregatePropertyUser?: Resolver<
    {},
    AggregatePropertyUserArgs,
    Client.Prisma.GetPropertyUserAggregateType<AggregatePropertyUserArgs>
  >
  groupByPropertyUser?: Resolver<
    {},
    GroupByPropertyUserArgs,
    Client.Prisma.PropertyUserGroupByOutputType[]
  >
  findUniquePropertyUser?: Resolver<
    {},
    FindUniquePropertyUserArgs,
    Client.PropertyUser | null
  >
  findUniquePropertyUserOrThrow?: Resolver<
    {},
    FindUniquePropertyUserOrThrowArgs,
    Client.PropertyUser | null
  >
  findFirstProperty?: Resolver<
    {},
    FindFirstPropertyArgs,
    Client.Property | null
  >
  findFirstPropertyOrThrow?: Resolver<
    {},
    FindFirstPropertyOrThrowArgs,
    Client.Property | null
  >
  findManyProperty?: Resolver<{}, FindManyPropertyArgs, Client.Property[]>
  findManyPropertyCount?: Resolver<{}, FindManyPropertyArgs, number>
  aggregateProperty?: Resolver<
    {},
    AggregatePropertyArgs,
    Client.Prisma.GetPropertyAggregateType<AggregatePropertyArgs>
  >
  groupByProperty?: Resolver<
    {},
    GroupByPropertyArgs,
    Client.Prisma.PropertyGroupByOutputType[]
  >
  findUniqueProperty?: Resolver<
    {},
    FindUniquePropertyArgs,
    Client.Property | null
  >
  findUniquePropertyOrThrow?: Resolver<
    {},
    FindUniquePropertyOrThrowArgs,
    Client.Property | null
  >
}

export type Mutation = { [key: string]: Resolver<any, any, any> } & {
  createOneUser?: Resolver<{}, CreateOneUserArgs, Client.User>
  upsertOneUser?: Resolver<{}, UpsertOneUserArgs, Client.User>
  createManyUser?: Resolver<{}, CreateManyUserArgs, Client.Prisma.BatchPayload>
  deleteOneUser?: Resolver<{}, DeleteOneUserArgs, Client.User | null>
  updateOneUser?: Resolver<{}, UpdateOneUserArgs, Client.User | null>
  updateManyUser?: Resolver<{}, UpdateManyUserArgs, Client.Prisma.BatchPayload>
  deleteManyUser?: Resolver<{}, DeleteManyUserArgs, Client.Prisma.BatchPayload>
  createOneCompany?: Resolver<{}, CreateOneCompanyArgs, Client.Company>
  upsertOneCompany?: Resolver<{}, UpsertOneCompanyArgs, Client.Company>
  createManyCompany?: Resolver<
    {},
    CreateManyCompanyArgs,
    Client.Prisma.BatchPayload
  >
  deleteOneCompany?: Resolver<{}, DeleteOneCompanyArgs, Client.Company | null>
  updateOneCompany?: Resolver<{}, UpdateOneCompanyArgs, Client.Company | null>
  updateManyCompany?: Resolver<
    {},
    UpdateManyCompanyArgs,
    Client.Prisma.BatchPayload
  >
  deleteManyCompany?: Resolver<
    {},
    DeleteManyCompanyArgs,
    Client.Prisma.BatchPayload
  >
  createOneCompanyUser?: Resolver<
    {},
    CreateOneCompanyUserArgs,
    Client.CompanyUser
  >
  upsertOneCompanyUser?: Resolver<
    {},
    UpsertOneCompanyUserArgs,
    Client.CompanyUser
  >
  createManyCompanyUser?: Resolver<
    {},
    CreateManyCompanyUserArgs,
    Client.Prisma.BatchPayload
  >
  deleteOneCompanyUser?: Resolver<
    {},
    DeleteOneCompanyUserArgs,
    Client.CompanyUser | null
  >
  updateOneCompanyUser?: Resolver<
    {},
    UpdateOneCompanyUserArgs,
    Client.CompanyUser | null
  >
  updateManyCompanyUser?: Resolver<
    {},
    UpdateManyCompanyUserArgs,
    Client.Prisma.BatchPayload
  >
  deleteManyCompanyUser?: Resolver<
    {},
    DeleteManyCompanyUserArgs,
    Client.Prisma.BatchPayload
  >
  createOnePropertyUserRole?: Resolver<
    {},
    CreateOnePropertyUserRoleArgs,
    Client.PropertyUserRole
  >
  upsertOnePropertyUserRole?: Resolver<
    {},
    UpsertOnePropertyUserRoleArgs,
    Client.PropertyUserRole
  >
  createManyPropertyUserRole?: Resolver<
    {},
    CreateManyPropertyUserRoleArgs,
    Client.Prisma.BatchPayload
  >
  deleteOnePropertyUserRole?: Resolver<
    {},
    DeleteOnePropertyUserRoleArgs,
    Client.PropertyUserRole | null
  >
  updateOnePropertyUserRole?: Resolver<
    {},
    UpdateOnePropertyUserRoleArgs,
    Client.PropertyUserRole | null
  >
  updateManyPropertyUserRole?: Resolver<
    {},
    UpdateManyPropertyUserRoleArgs,
    Client.Prisma.BatchPayload
  >
  deleteManyPropertyUserRole?: Resolver<
    {},
    DeleteManyPropertyUserRoleArgs,
    Client.Prisma.BatchPayload
  >
  createOnePropertyUser?: Resolver<
    {},
    CreateOnePropertyUserArgs,
    Client.PropertyUser
  >
  upsertOnePropertyUser?: Resolver<
    {},
    UpsertOnePropertyUserArgs,
    Client.PropertyUser
  >
  createManyPropertyUser?: Resolver<
    {},
    CreateManyPropertyUserArgs,
    Client.Prisma.BatchPayload
  >
  deleteOnePropertyUser?: Resolver<
    {},
    DeleteOnePropertyUserArgs,
    Client.PropertyUser | null
  >
  updateOnePropertyUser?: Resolver<
    {},
    UpdateOnePropertyUserArgs,
    Client.PropertyUser | null
  >
  updateManyPropertyUser?: Resolver<
    {},
    UpdateManyPropertyUserArgs,
    Client.Prisma.BatchPayload
  >
  deleteManyPropertyUser?: Resolver<
    {},
    DeleteManyPropertyUserArgs,
    Client.Prisma.BatchPayload
  >
  createOneProperty?: Resolver<{}, CreateOnePropertyArgs, Client.Property>
  upsertOneProperty?: Resolver<{}, UpsertOnePropertyArgs, Client.Property>
  createManyProperty?: Resolver<
    {},
    CreateManyPropertyArgs,
    Client.Prisma.BatchPayload
  >
  deleteOneProperty?: Resolver<
    {},
    DeleteOnePropertyArgs,
    Client.Property | null
  >
  updateOneProperty?: Resolver<
    {},
    UpdateOnePropertyArgs,
    Client.Property | null
  >
  updateManyProperty?: Resolver<
    {},
    UpdateManyPropertyArgs,
    Client.Prisma.BatchPayload
  >
  deleteManyProperty?: Resolver<
    {},
    DeleteManyPropertyArgs,
    Client.Prisma.BatchPayload
  >
  executeRaw?: Resolver<{}, ExecuteRawArgs, any>
  queryRaw?: Resolver<{}, QueryRawArgs, any>
}

export type AggregateUser = { [key: string]: Resolver<any, any, any> } & {
  _count?: Resolver<
    Client.Prisma.AggregateUser,
    {},
    Client.Prisma.UserCountAggregateOutputType | null
  >
  _avg?: Resolver<
    Client.Prisma.AggregateUser,
    {},
    Client.Prisma.UserAvgAggregateOutputType | null
  >
  _sum?: Resolver<
    Client.Prisma.AggregateUser,
    {},
    Client.Prisma.UserSumAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.AggregateUser,
    {},
    Client.Prisma.UserMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.AggregateUser,
    {},
    Client.Prisma.UserMaxAggregateOutputType | null
  >
}

export type UserGroupByOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<Client.Prisma.UserGroupByOutputType, {}, number>
  username?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string>
  _count?: Resolver<
    Client.Prisma.UserGroupByOutputType,
    {},
    Client.Prisma.UserCountAggregateOutputType | null
  >
  _avg?: Resolver<
    Client.Prisma.UserGroupByOutputType,
    {},
    Client.Prisma.UserAvgAggregateOutputType | null
  >
  _sum?: Resolver<
    Client.Prisma.UserGroupByOutputType,
    {},
    Client.Prisma.UserSumAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.UserGroupByOutputType,
    {},
    Client.Prisma.UserMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.UserGroupByOutputType,
    {},
    Client.Prisma.UserMaxAggregateOutputType | null
  >
}

export type AggregateCompany = { [key: string]: Resolver<any, any, any> } & {
  _count?: Resolver<
    Client.Prisma.AggregateCompany,
    {},
    Client.Prisma.CompanyCountAggregateOutputType | null
  >
  _avg?: Resolver<
    Client.Prisma.AggregateCompany,
    {},
    Client.Prisma.CompanyAvgAggregateOutputType | null
  >
  _sum?: Resolver<
    Client.Prisma.AggregateCompany,
    {},
    Client.Prisma.CompanySumAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.AggregateCompany,
    {},
    Client.Prisma.CompanyMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.AggregateCompany,
    {},
    Client.Prisma.CompanyMaxAggregateOutputType | null
  >
}

export type CompanyGroupByOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<Client.Prisma.CompanyGroupByOutputType, {}, number>
  name?: Resolver<Client.Prisma.CompanyGroupByOutputType, {}, string>
  _count?: Resolver<
    Client.Prisma.CompanyGroupByOutputType,
    {},
    Client.Prisma.CompanyCountAggregateOutputType | null
  >
  _avg?: Resolver<
    Client.Prisma.CompanyGroupByOutputType,
    {},
    Client.Prisma.CompanyAvgAggregateOutputType | null
  >
  _sum?: Resolver<
    Client.Prisma.CompanyGroupByOutputType,
    {},
    Client.Prisma.CompanySumAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.CompanyGroupByOutputType,
    {},
    Client.Prisma.CompanyMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.CompanyGroupByOutputType,
    {},
    Client.Prisma.CompanyMaxAggregateOutputType | null
  >
}

export type AggregateCompanyUser = {
  [key: string]: Resolver<any, any, any>
} & {
  _count?: Resolver<
    Client.Prisma.AggregateCompanyUser,
    {},
    Client.Prisma.CompanyUserCountAggregateOutputType | null
  >
  _avg?: Resolver<
    Client.Prisma.AggregateCompanyUser,
    {},
    Client.Prisma.CompanyUserAvgAggregateOutputType | null
  >
  _sum?: Resolver<
    Client.Prisma.AggregateCompanyUser,
    {},
    Client.Prisma.CompanyUserSumAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.AggregateCompanyUser,
    {},
    Client.Prisma.CompanyUserMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.AggregateCompanyUser,
    {},
    Client.Prisma.CompanyUserMaxAggregateOutputType | null
  >
}

export type CompanyUserGroupByOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  companyId?: Resolver<Client.Prisma.CompanyUserGroupByOutputType, {}, number>
  userId?: Resolver<Client.Prisma.CompanyUserGroupByOutputType, {}, number>
  dummyField?: Resolver<Client.Prisma.CompanyUserGroupByOutputType, {}, string>
  _count?: Resolver<
    Client.Prisma.CompanyUserGroupByOutputType,
    {},
    Client.Prisma.CompanyUserCountAggregateOutputType | null
  >
  _avg?: Resolver<
    Client.Prisma.CompanyUserGroupByOutputType,
    {},
    Client.Prisma.CompanyUserAvgAggregateOutputType | null
  >
  _sum?: Resolver<
    Client.Prisma.CompanyUserGroupByOutputType,
    {},
    Client.Prisma.CompanyUserSumAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.CompanyUserGroupByOutputType,
    {},
    Client.Prisma.CompanyUserMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.CompanyUserGroupByOutputType,
    {},
    Client.Prisma.CompanyUserMaxAggregateOutputType | null
  >
}

export type AggregatePropertyUserRole = {
  [key: string]: Resolver<any, any, any>
} & {
  _count?: Resolver<
    Client.Prisma.AggregatePropertyUserRole,
    {},
    Client.Prisma.PropertyUserRoleCountAggregateOutputType | null
  >
  _avg?: Resolver<
    Client.Prisma.AggregatePropertyUserRole,
    {},
    Client.Prisma.PropertyUserRoleAvgAggregateOutputType | null
  >
  _sum?: Resolver<
    Client.Prisma.AggregatePropertyUserRole,
    {},
    Client.Prisma.PropertyUserRoleSumAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.AggregatePropertyUserRole,
    {},
    Client.Prisma.PropertyUserRoleMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.AggregatePropertyUserRole,
    {},
    Client.Prisma.PropertyUserRoleMaxAggregateOutputType | null
  >
}

export type PropertyUserRoleGroupByOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<Client.Prisma.PropertyUserRoleGroupByOutputType, {}, number>
  type?: Resolver<
    Client.Prisma.PropertyUserRoleGroupByOutputType,
    {},
    Client.PropertyUserRoleType
  >
  userId?: Resolver<Client.Prisma.PropertyUserRoleGroupByOutputType, {}, number>
  _count?: Resolver<
    Client.Prisma.PropertyUserRoleGroupByOutputType,
    {},
    Client.Prisma.PropertyUserRoleCountAggregateOutputType | null
  >
  _avg?: Resolver<
    Client.Prisma.PropertyUserRoleGroupByOutputType,
    {},
    Client.Prisma.PropertyUserRoleAvgAggregateOutputType | null
  >
  _sum?: Resolver<
    Client.Prisma.PropertyUserRoleGroupByOutputType,
    {},
    Client.Prisma.PropertyUserRoleSumAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.PropertyUserRoleGroupByOutputType,
    {},
    Client.Prisma.PropertyUserRoleMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.PropertyUserRoleGroupByOutputType,
    {},
    Client.Prisma.PropertyUserRoleMaxAggregateOutputType | null
  >
}

export type AggregatePropertyUser = {
  [key: string]: Resolver<any, any, any>
} & {
  _count?: Resolver<
    Client.Prisma.AggregatePropertyUser,
    {},
    Client.Prisma.PropertyUserCountAggregateOutputType | null
  >
  _avg?: Resolver<
    Client.Prisma.AggregatePropertyUser,
    {},
    Client.Prisma.PropertyUserAvgAggregateOutputType | null
  >
  _sum?: Resolver<
    Client.Prisma.AggregatePropertyUser,
    {},
    Client.Prisma.PropertyUserSumAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.AggregatePropertyUser,
    {},
    Client.Prisma.PropertyUserMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.AggregatePropertyUser,
    {},
    Client.Prisma.PropertyUserMaxAggregateOutputType | null
  >
}

export type PropertyUserGroupByOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<Client.Prisma.PropertyUserGroupByOutputType, {}, number>
  dummyField?: Resolver<Client.Prisma.PropertyUserGroupByOutputType, {}, string>
  propertyId?: Resolver<Client.Prisma.PropertyUserGroupByOutputType, {}, number>
  userId?: Resolver<Client.Prisma.PropertyUserGroupByOutputType, {}, number>
  _count?: Resolver<
    Client.Prisma.PropertyUserGroupByOutputType,
    {},
    Client.Prisma.PropertyUserCountAggregateOutputType | null
  >
  _avg?: Resolver<
    Client.Prisma.PropertyUserGroupByOutputType,
    {},
    Client.Prisma.PropertyUserAvgAggregateOutputType | null
  >
  _sum?: Resolver<
    Client.Prisma.PropertyUserGroupByOutputType,
    {},
    Client.Prisma.PropertyUserSumAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.PropertyUserGroupByOutputType,
    {},
    Client.Prisma.PropertyUserMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.PropertyUserGroupByOutputType,
    {},
    Client.Prisma.PropertyUserMaxAggregateOutputType | null
  >
}

export type AggregateProperty = { [key: string]: Resolver<any, any, any> } & {
  _count?: Resolver<
    Client.Prisma.AggregateProperty,
    {},
    Client.Prisma.PropertyCountAggregateOutputType | null
  >
  _avg?: Resolver<
    Client.Prisma.AggregateProperty,
    {},
    Client.Prisma.PropertyAvgAggregateOutputType | null
  >
  _sum?: Resolver<
    Client.Prisma.AggregateProperty,
    {},
    Client.Prisma.PropertySumAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.AggregateProperty,
    {},
    Client.Prisma.PropertyMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.AggregateProperty,
    {},
    Client.Prisma.PropertyMaxAggregateOutputType | null
  >
}

export type PropertyGroupByOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<Client.Prisma.PropertyGroupByOutputType, {}, number>
  name?: Resolver<Client.Prisma.PropertyGroupByOutputType, {}, string>
  companyId?: Resolver<Client.Prisma.PropertyGroupByOutputType, {}, number>
  _count?: Resolver<
    Client.Prisma.PropertyGroupByOutputType,
    {},
    Client.Prisma.PropertyCountAggregateOutputType | null
  >
  _avg?: Resolver<
    Client.Prisma.PropertyGroupByOutputType,
    {},
    Client.Prisma.PropertyAvgAggregateOutputType | null
  >
  _sum?: Resolver<
    Client.Prisma.PropertyGroupByOutputType,
    {},
    Client.Prisma.PropertySumAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.PropertyGroupByOutputType,
    {},
    Client.Prisma.PropertyMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.PropertyGroupByOutputType,
    {},
    Client.Prisma.PropertyMaxAggregateOutputType | null
  >
}

export type AffectedRowsOutput = { [key: string]: Resolver<any, any, any> } & {
  count?: Resolver<Client.Prisma.BatchPayload, {}, number>
}

export type UserCountOutputType = { [key: string]: Resolver<any, any, any> } & {
  employedBy?: Resolver<
    Client.Prisma.UserCountOutputType,
    UserCountOutputTypeEmployedByArgs,
    number
  >
  properties?: Resolver<
    Client.Prisma.UserCountOutputType,
    UserCountOutputTypePropertiesArgs,
    number
  >
  companies?: Resolver<
    Client.Prisma.UserCountOutputType,
    UserCountOutputTypeCompaniesArgs,
    number
  >
}

export type UserCountAggregateOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
  username?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
  _all?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
}

export type UserAvgAggregateOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<Client.Prisma.UserAvgAggregateOutputType, {}, number | null>
}

export type UserSumAggregateOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<Client.Prisma.UserSumAggregateOutputType, {}, number | null>
}

export type UserMinAggregateOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<Client.Prisma.UserMinAggregateOutputType, {}, number | null>
  username?: Resolver<
    Client.Prisma.UserMinAggregateOutputType,
    {},
    string | null
  >
}

export type UserMaxAggregateOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<Client.Prisma.UserMaxAggregateOutputType, {}, number | null>
  username?: Resolver<
    Client.Prisma.UserMaxAggregateOutputType,
    {},
    string | null
  >
}

export type CompanyCountOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  companyUsers?: Resolver<
    Client.Prisma.CompanyCountOutputType,
    CompanyCountOutputTypeCompanyUsersArgs,
    number
  >
  propertyUsers?: Resolver<
    Client.Prisma.CompanyCountOutputType,
    CompanyCountOutputTypePropertyUsersArgs,
    number
  >
  properties?: Resolver<
    Client.Prisma.CompanyCountOutputType,
    CompanyCountOutputTypePropertiesArgs,
    number
  >
}

export type CompanyCountAggregateOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<Client.Prisma.CompanyCountAggregateOutputType, {}, number>
  name?: Resolver<Client.Prisma.CompanyCountAggregateOutputType, {}, number>
  _all?: Resolver<Client.Prisma.CompanyCountAggregateOutputType, {}, number>
}

export type CompanyAvgAggregateOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<Client.Prisma.CompanyAvgAggregateOutputType, {}, number | null>
}

export type CompanySumAggregateOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<Client.Prisma.CompanySumAggregateOutputType, {}, number | null>
}

export type CompanyMinAggregateOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<Client.Prisma.CompanyMinAggregateOutputType, {}, number | null>
  name?: Resolver<
    Client.Prisma.CompanyMinAggregateOutputType,
    {},
    string | null
  >
}

export type CompanyMaxAggregateOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<Client.Prisma.CompanyMaxAggregateOutputType, {}, number | null>
  name?: Resolver<
    Client.Prisma.CompanyMaxAggregateOutputType,
    {},
    string | null
  >
}

export type CompanyUserCountAggregateOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  companyId?: Resolver<
    Client.Prisma.CompanyUserCountAggregateOutputType,
    {},
    number
  >
  userId?: Resolver<
    Client.Prisma.CompanyUserCountAggregateOutputType,
    {},
    number
  >
  dummyField?: Resolver<
    Client.Prisma.CompanyUserCountAggregateOutputType,
    {},
    number
  >
  _all?: Resolver<Client.Prisma.CompanyUserCountAggregateOutputType, {}, number>
}

export type CompanyUserAvgAggregateOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  companyId?: Resolver<
    Client.Prisma.CompanyUserAvgAggregateOutputType,
    {},
    number | null
  >
  userId?: Resolver<
    Client.Prisma.CompanyUserAvgAggregateOutputType,
    {},
    number | null
  >
}

export type CompanyUserSumAggregateOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  companyId?: Resolver<
    Client.Prisma.CompanyUserSumAggregateOutputType,
    {},
    number | null
  >
  userId?: Resolver<
    Client.Prisma.CompanyUserSumAggregateOutputType,
    {},
    number | null
  >
}

export type CompanyUserMinAggregateOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  companyId?: Resolver<
    Client.Prisma.CompanyUserMinAggregateOutputType,
    {},
    number | null
  >
  userId?: Resolver<
    Client.Prisma.CompanyUserMinAggregateOutputType,
    {},
    number | null
  >
  dummyField?: Resolver<
    Client.Prisma.CompanyUserMinAggregateOutputType,
    {},
    string | null
  >
}

export type CompanyUserMaxAggregateOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  companyId?: Resolver<
    Client.Prisma.CompanyUserMaxAggregateOutputType,
    {},
    number | null
  >
  userId?: Resolver<
    Client.Prisma.CompanyUserMaxAggregateOutputType,
    {},
    number | null
  >
  dummyField?: Resolver<
    Client.Prisma.CompanyUserMaxAggregateOutputType,
    {},
    string | null
  >
}

export type PropertyUserRoleCountAggregateOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<
    Client.Prisma.PropertyUserRoleCountAggregateOutputType,
    {},
    number
  >
  type?: Resolver<
    Client.Prisma.PropertyUserRoleCountAggregateOutputType,
    {},
    number
  >
  userId?: Resolver<
    Client.Prisma.PropertyUserRoleCountAggregateOutputType,
    {},
    number
  >
  _all?: Resolver<
    Client.Prisma.PropertyUserRoleCountAggregateOutputType,
    {},
    number
  >
}

export type PropertyUserRoleAvgAggregateOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<
    Client.Prisma.PropertyUserRoleAvgAggregateOutputType,
    {},
    number | null
  >
  userId?: Resolver<
    Client.Prisma.PropertyUserRoleAvgAggregateOutputType,
    {},
    number | null
  >
}

export type PropertyUserRoleSumAggregateOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<
    Client.Prisma.PropertyUserRoleSumAggregateOutputType,
    {},
    number | null
  >
  userId?: Resolver<
    Client.Prisma.PropertyUserRoleSumAggregateOutputType,
    {},
    number | null
  >
}

export type PropertyUserRoleMinAggregateOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<
    Client.Prisma.PropertyUserRoleMinAggregateOutputType,
    {},
    number | null
  >
  type?: Resolver<
    Client.Prisma.PropertyUserRoleMinAggregateOutputType,
    {},
    Client.PropertyUserRoleType | null
  >
  userId?: Resolver<
    Client.Prisma.PropertyUserRoleMinAggregateOutputType,
    {},
    number | null
  >
}

export type PropertyUserRoleMaxAggregateOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<
    Client.Prisma.PropertyUserRoleMaxAggregateOutputType,
    {},
    number | null
  >
  type?: Resolver<
    Client.Prisma.PropertyUserRoleMaxAggregateOutputType,
    {},
    Client.PropertyUserRoleType | null
  >
  userId?: Resolver<
    Client.Prisma.PropertyUserRoleMaxAggregateOutputType,
    {},
    number | null
  >
}

export type PropertyUserCountOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  roles?: Resolver<
    Client.Prisma.PropertyUserCountOutputType,
    PropertyUserCountOutputTypeRolesArgs,
    number
  >
}

export type PropertyUserCountAggregateOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<Client.Prisma.PropertyUserCountAggregateOutputType, {}, number>
  dummyField?: Resolver<
    Client.Prisma.PropertyUserCountAggregateOutputType,
    {},
    number
  >
  propertyId?: Resolver<
    Client.Prisma.PropertyUserCountAggregateOutputType,
    {},
    number
  >
  userId?: Resolver<
    Client.Prisma.PropertyUserCountAggregateOutputType,
    {},
    number
  >
  _all?: Resolver<
    Client.Prisma.PropertyUserCountAggregateOutputType,
    {},
    number
  >
}

export type PropertyUserAvgAggregateOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<
    Client.Prisma.PropertyUserAvgAggregateOutputType,
    {},
    number | null
  >
  propertyId?: Resolver<
    Client.Prisma.PropertyUserAvgAggregateOutputType,
    {},
    number | null
  >
  userId?: Resolver<
    Client.Prisma.PropertyUserAvgAggregateOutputType,
    {},
    number | null
  >
}

export type PropertyUserSumAggregateOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<
    Client.Prisma.PropertyUserSumAggregateOutputType,
    {},
    number | null
  >
  propertyId?: Resolver<
    Client.Prisma.PropertyUserSumAggregateOutputType,
    {},
    number | null
  >
  userId?: Resolver<
    Client.Prisma.PropertyUserSumAggregateOutputType,
    {},
    number | null
  >
}

export type PropertyUserMinAggregateOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<
    Client.Prisma.PropertyUserMinAggregateOutputType,
    {},
    number | null
  >
  dummyField?: Resolver<
    Client.Prisma.PropertyUserMinAggregateOutputType,
    {},
    string | null
  >
  propertyId?: Resolver<
    Client.Prisma.PropertyUserMinAggregateOutputType,
    {},
    number | null
  >
  userId?: Resolver<
    Client.Prisma.PropertyUserMinAggregateOutputType,
    {},
    number | null
  >
}

export type PropertyUserMaxAggregateOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<
    Client.Prisma.PropertyUserMaxAggregateOutputType,
    {},
    number | null
  >
  dummyField?: Resolver<
    Client.Prisma.PropertyUserMaxAggregateOutputType,
    {},
    string | null
  >
  propertyId?: Resolver<
    Client.Prisma.PropertyUserMaxAggregateOutputType,
    {},
    number | null
  >
  userId?: Resolver<
    Client.Prisma.PropertyUserMaxAggregateOutputType,
    {},
    number | null
  >
}

export type PropertyCountOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  users?: Resolver<
    Client.Prisma.PropertyCountOutputType,
    PropertyCountOutputTypeUsersArgs,
    number
  >
}

export type PropertyCountAggregateOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<Client.Prisma.PropertyCountAggregateOutputType, {}, number>
  name?: Resolver<Client.Prisma.PropertyCountAggregateOutputType, {}, number>
  companyId?: Resolver<
    Client.Prisma.PropertyCountAggregateOutputType,
    {},
    number
  >
  _all?: Resolver<Client.Prisma.PropertyCountAggregateOutputType, {}, number>
}

export type PropertyAvgAggregateOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<Client.Prisma.PropertyAvgAggregateOutputType, {}, number | null>
  companyId?: Resolver<
    Client.Prisma.PropertyAvgAggregateOutputType,
    {},
    number | null
  >
}

export type PropertySumAggregateOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<Client.Prisma.PropertySumAggregateOutputType, {}, number | null>
  companyId?: Resolver<
    Client.Prisma.PropertySumAggregateOutputType,
    {},
    number | null
  >
}

export type PropertyMinAggregateOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<Client.Prisma.PropertyMinAggregateOutputType, {}, number | null>
  name?: Resolver<
    Client.Prisma.PropertyMinAggregateOutputType,
    {},
    string | null
  >
  companyId?: Resolver<
    Client.Prisma.PropertyMinAggregateOutputType,
    {},
    number | null
  >
}

export type PropertyMaxAggregateOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<Client.Prisma.PropertyMaxAggregateOutputType, {}, number | null>
  name?: Resolver<
    Client.Prisma.PropertyMaxAggregateOutputType,
    {},
    string | null
  >
  companyId?: Resolver<
    Client.Prisma.PropertyMaxAggregateOutputType,
    {},
    number | null
  >
}

export type UserEmployedByArgs = {
  where?: CompanyUserWhereInput
  orderBy?: CompanyUserOrderByWithRelationInput[]
  cursor?: CompanyUserWhereUniqueInput
  take?: number
  skip?: number
  distinct?: CompanyUserScalarFieldEnum[]
}

export type UserPropertiesArgs = {
  where?: PropertyUserWhereInput
  orderBy?: PropertyUserOrderByWithRelationInput[]
  cursor?: PropertyUserWhereUniqueInput
  take?: number
  skip?: number
  distinct?: PropertyUserScalarFieldEnum[]
}

export type UserCompaniesArgs = {
  where?: CompanyWhereInput
  orderBy?: CompanyOrderByWithRelationInput[]
  cursor?: CompanyWhereUniqueInput
  take?: number
  skip?: number
  distinct?: CompanyScalarFieldEnum[]
}

export type CompanyCompanyUsersArgs = {
  where?: CompanyUserWhereInput
  orderBy?: CompanyUserOrderByWithRelationInput[]
  cursor?: CompanyUserWhereUniqueInput
  take?: number
  skip?: number
  distinct?: CompanyUserScalarFieldEnum[]
}

export type CompanyPropertyUsersArgs = {
  where?: UserWhereInput
  orderBy?: UserOrderByWithRelationInput[]
  cursor?: UserWhereUniqueInput
  take?: number
  skip?: number
  distinct?: UserScalarFieldEnum[]
}

export type CompanyPropertiesArgs = {
  where?: PropertyWhereInput
  orderBy?: PropertyOrderByWithRelationInput[]
  cursor?: PropertyWhereUniqueInput
  take?: number
  skip?: number
  distinct?: PropertyScalarFieldEnum[]
}

export type PropertyUserRolesArgs = {
  where?: PropertyUserRoleWhereInput
  orderBy?: PropertyUserRoleOrderByWithRelationInput[]
  cursor?: PropertyUserRoleWhereUniqueInput
  take?: number
  skip?: number
  distinct?: PropertyUserRoleScalarFieldEnum[]
}

export type PropertyUsersArgs = {
  where?: PropertyUserWhereInput
  orderBy?: PropertyUserOrderByWithRelationInput[]
  cursor?: PropertyUserWhereUniqueInput
  take?: number
  skip?: number
  distinct?: PropertyUserScalarFieldEnum[]
}

export type FindFirstUserArgs = {
  where?: UserWhereInput
  orderBy?: UserOrderByWithRelationInput[]
  cursor?: UserWhereUniqueInput
  take?: number
  skip?: number
  distinct?: UserScalarFieldEnum[]
}

export type FindFirstUserOrThrowArgs = {
  where?: UserWhereInput
  orderBy?: UserOrderByWithRelationInput[]
  cursor?: UserWhereUniqueInput
  take?: number
  skip?: number
  distinct?: UserScalarFieldEnum[]
}

export type FindManyUserArgs = {
  where?: UserWhereInput
  orderBy?: UserOrderByWithRelationInput[]
  cursor?: UserWhereUniqueInput
  take?: number
  skip?: number
  distinct?: UserScalarFieldEnum[]
}

export type AggregateUserArgs = {
  where?: UserWhereInput
  orderBy?: UserOrderByWithRelationInput[]
  cursor?: UserWhereUniqueInput
  take?: number
  skip?: number
  _count?: Client.Prisma.UserCountAggregateInputType
  _avg?: Client.Prisma.UserAvgAggregateInputType
  _sum?: Client.Prisma.UserSumAggregateInputType
  _min?: Client.Prisma.UserMinAggregateInputType
  _max?: Client.Prisma.UserMaxAggregateInputType
}

export type GroupByUserArgs = {
  where?: UserWhereInput
  orderBy?: UserOrderByWithAggregationInput[]
  by: UserScalarFieldEnum[]
  having?: UserScalarWhereWithAggregatesInput
  take?: number
  skip?: number
}

export type FindUniqueUserArgs = {
  where: UserWhereUniqueInput
}

export type FindUniqueUserOrThrowArgs = {
  where: UserWhereUniqueInput
}

export type FindFirstCompanyArgs = {
  where?: CompanyWhereInput
  orderBy?: CompanyOrderByWithRelationInput[]
  cursor?: CompanyWhereUniqueInput
  take?: number
  skip?: number
  distinct?: CompanyScalarFieldEnum[]
}

export type FindFirstCompanyOrThrowArgs = {
  where?: CompanyWhereInput
  orderBy?: CompanyOrderByWithRelationInput[]
  cursor?: CompanyWhereUniqueInput
  take?: number
  skip?: number
  distinct?: CompanyScalarFieldEnum[]
}

export type FindManyCompanyArgs = {
  where?: CompanyWhereInput
  orderBy?: CompanyOrderByWithRelationInput[]
  cursor?: CompanyWhereUniqueInput
  take?: number
  skip?: number
  distinct?: CompanyScalarFieldEnum[]
}

export type AggregateCompanyArgs = {
  where?: CompanyWhereInput
  orderBy?: CompanyOrderByWithRelationInput[]
  cursor?: CompanyWhereUniqueInput
  take?: number
  skip?: number
  _count?: Client.Prisma.CompanyCountAggregateInputType
  _avg?: Client.Prisma.CompanyAvgAggregateInputType
  _sum?: Client.Prisma.CompanySumAggregateInputType
  _min?: Client.Prisma.CompanyMinAggregateInputType
  _max?: Client.Prisma.CompanyMaxAggregateInputType
}

export type GroupByCompanyArgs = {
  where?: CompanyWhereInput
  orderBy?: CompanyOrderByWithAggregationInput[]
  by: CompanyScalarFieldEnum[]
  having?: CompanyScalarWhereWithAggregatesInput
  take?: number
  skip?: number
}

export type FindUniqueCompanyArgs = {
  where: CompanyWhereUniqueInput
}

export type FindUniqueCompanyOrThrowArgs = {
  where: CompanyWhereUniqueInput
}

export type FindFirstCompanyUserArgs = {
  where?: CompanyUserWhereInput
  orderBy?: CompanyUserOrderByWithRelationInput[]
  cursor?: CompanyUserWhereUniqueInput
  take?: number
  skip?: number
  distinct?: CompanyUserScalarFieldEnum[]
}

export type FindFirstCompanyUserOrThrowArgs = {
  where?: CompanyUserWhereInput
  orderBy?: CompanyUserOrderByWithRelationInput[]
  cursor?: CompanyUserWhereUniqueInput
  take?: number
  skip?: number
  distinct?: CompanyUserScalarFieldEnum[]
}

export type FindManyCompanyUserArgs = {
  where?: CompanyUserWhereInput
  orderBy?: CompanyUserOrderByWithRelationInput[]
  cursor?: CompanyUserWhereUniqueInput
  take?: number
  skip?: number
  distinct?: CompanyUserScalarFieldEnum[]
}

export type AggregateCompanyUserArgs = {
  where?: CompanyUserWhereInput
  orderBy?: CompanyUserOrderByWithRelationInput[]
  cursor?: CompanyUserWhereUniqueInput
  take?: number
  skip?: number
  _count?: Client.Prisma.CompanyUserCountAggregateInputType
  _avg?: Client.Prisma.CompanyUserAvgAggregateInputType
  _sum?: Client.Prisma.CompanyUserSumAggregateInputType
  _min?: Client.Prisma.CompanyUserMinAggregateInputType
  _max?: Client.Prisma.CompanyUserMaxAggregateInputType
}

export type GroupByCompanyUserArgs = {
  where?: CompanyUserWhereInput
  orderBy?: CompanyUserOrderByWithAggregationInput[]
  by: CompanyUserScalarFieldEnum[]
  having?: CompanyUserScalarWhereWithAggregatesInput
  take?: number
  skip?: number
}

export type FindUniqueCompanyUserArgs = {
  where: CompanyUserWhereUniqueInput
}

export type FindUniqueCompanyUserOrThrowArgs = {
  where: CompanyUserWhereUniqueInput
}

export type FindFirstPropertyUserRoleArgs = {
  where?: PropertyUserRoleWhereInput
  orderBy?: PropertyUserRoleOrderByWithRelationInput[]
  cursor?: PropertyUserRoleWhereUniqueInput
  take?: number
  skip?: number
  distinct?: PropertyUserRoleScalarFieldEnum[]
}

export type FindFirstPropertyUserRoleOrThrowArgs = {
  where?: PropertyUserRoleWhereInput
  orderBy?: PropertyUserRoleOrderByWithRelationInput[]
  cursor?: PropertyUserRoleWhereUniqueInput
  take?: number
  skip?: number
  distinct?: PropertyUserRoleScalarFieldEnum[]
}

export type FindManyPropertyUserRoleArgs = {
  where?: PropertyUserRoleWhereInput
  orderBy?: PropertyUserRoleOrderByWithRelationInput[]
  cursor?: PropertyUserRoleWhereUniqueInput
  take?: number
  skip?: number
  distinct?: PropertyUserRoleScalarFieldEnum[]
}

export type AggregatePropertyUserRoleArgs = {
  where?: PropertyUserRoleWhereInput
  orderBy?: PropertyUserRoleOrderByWithRelationInput[]
  cursor?: PropertyUserRoleWhereUniqueInput
  take?: number
  skip?: number
  _count?: Client.Prisma.PropertyUserRoleCountAggregateInputType
  _avg?: Client.Prisma.PropertyUserRoleAvgAggregateInputType
  _sum?: Client.Prisma.PropertyUserRoleSumAggregateInputType
  _min?: Client.Prisma.PropertyUserRoleMinAggregateInputType
  _max?: Client.Prisma.PropertyUserRoleMaxAggregateInputType
}

export type GroupByPropertyUserRoleArgs = {
  where?: PropertyUserRoleWhereInput
  orderBy?: PropertyUserRoleOrderByWithAggregationInput[]
  by: PropertyUserRoleScalarFieldEnum[]
  having?: PropertyUserRoleScalarWhereWithAggregatesInput
  take?: number
  skip?: number
}

export type FindUniquePropertyUserRoleArgs = {
  where: PropertyUserRoleWhereUniqueInput
}

export type FindUniquePropertyUserRoleOrThrowArgs = {
  where: PropertyUserRoleWhereUniqueInput
}

export type FindFirstPropertyUserArgs = {
  where?: PropertyUserWhereInput
  orderBy?: PropertyUserOrderByWithRelationInput[]
  cursor?: PropertyUserWhereUniqueInput
  take?: number
  skip?: number
  distinct?: PropertyUserScalarFieldEnum[]
}

export type FindFirstPropertyUserOrThrowArgs = {
  where?: PropertyUserWhereInput
  orderBy?: PropertyUserOrderByWithRelationInput[]
  cursor?: PropertyUserWhereUniqueInput
  take?: number
  skip?: number
  distinct?: PropertyUserScalarFieldEnum[]
}

export type FindManyPropertyUserArgs = {
  where?: PropertyUserWhereInput
  orderBy?: PropertyUserOrderByWithRelationInput[]
  cursor?: PropertyUserWhereUniqueInput
  take?: number
  skip?: number
  distinct?: PropertyUserScalarFieldEnum[]
}

export type AggregatePropertyUserArgs = {
  where?: PropertyUserWhereInput
  orderBy?: PropertyUserOrderByWithRelationInput[]
  cursor?: PropertyUserWhereUniqueInput
  take?: number
  skip?: number
  _count?: Client.Prisma.PropertyUserCountAggregateInputType
  _avg?: Client.Prisma.PropertyUserAvgAggregateInputType
  _sum?: Client.Prisma.PropertyUserSumAggregateInputType
  _min?: Client.Prisma.PropertyUserMinAggregateInputType
  _max?: Client.Prisma.PropertyUserMaxAggregateInputType
}

export type GroupByPropertyUserArgs = {
  where?: PropertyUserWhereInput
  orderBy?: PropertyUserOrderByWithAggregationInput[]
  by: PropertyUserScalarFieldEnum[]
  having?: PropertyUserScalarWhereWithAggregatesInput
  take?: number
  skip?: number
}

export type FindUniquePropertyUserArgs = {
  where: PropertyUserWhereUniqueInput
}

export type FindUniquePropertyUserOrThrowArgs = {
  where: PropertyUserWhereUniqueInput
}

export type FindFirstPropertyArgs = {
  where?: PropertyWhereInput
  orderBy?: PropertyOrderByWithRelationInput[]
  cursor?: PropertyWhereUniqueInput
  take?: number
  skip?: number
  distinct?: PropertyScalarFieldEnum[]
}

export type FindFirstPropertyOrThrowArgs = {
  where?: PropertyWhereInput
  orderBy?: PropertyOrderByWithRelationInput[]
  cursor?: PropertyWhereUniqueInput
  take?: number
  skip?: number
  distinct?: PropertyScalarFieldEnum[]
}

export type FindManyPropertyArgs = {
  where?: PropertyWhereInput
  orderBy?: PropertyOrderByWithRelationInput[]
  cursor?: PropertyWhereUniqueInput
  take?: number
  skip?: number
  distinct?: PropertyScalarFieldEnum[]
}

export type AggregatePropertyArgs = {
  where?: PropertyWhereInput
  orderBy?: PropertyOrderByWithRelationInput[]
  cursor?: PropertyWhereUniqueInput
  take?: number
  skip?: number
  _count?: Client.Prisma.PropertyCountAggregateInputType
  _avg?: Client.Prisma.PropertyAvgAggregateInputType
  _sum?: Client.Prisma.PropertySumAggregateInputType
  _min?: Client.Prisma.PropertyMinAggregateInputType
  _max?: Client.Prisma.PropertyMaxAggregateInputType
}

export type GroupByPropertyArgs = {
  where?: PropertyWhereInput
  orderBy?: PropertyOrderByWithAggregationInput[]
  by: PropertyScalarFieldEnum[]
  having?: PropertyScalarWhereWithAggregatesInput
  take?: number
  skip?: number
}

export type FindUniquePropertyArgs = {
  where: PropertyWhereUniqueInput
}

export type FindUniquePropertyOrThrowArgs = {
  where: PropertyWhereUniqueInput
}

export type CreateOneUserArgs = {
  data: UserCreateInput
}

export type UpsertOneUserArgs = {
  where: UserWhereUniqueInput
  create: UserCreateInput
  update: UserUpdateInput
}

export type CreateManyUserArgs = {
  data: UserCreateManyInput[]
  skipDuplicates?: boolean
}

export type DeleteOneUserArgs = {
  where: UserWhereUniqueInput
}

export type UpdateOneUserArgs = {
  data: UserUpdateInput
  where: UserWhereUniqueInput
}

export type UpdateManyUserArgs = {
  data: UserUpdateManyMutationInput
  where?: UserWhereInput
}

export type DeleteManyUserArgs = {
  where?: UserWhereInput
}

export type CreateOneCompanyArgs = {
  data: CompanyCreateInput
}

export type UpsertOneCompanyArgs = {
  where: CompanyWhereUniqueInput
  create: CompanyCreateInput
  update: CompanyUpdateInput
}

export type CreateManyCompanyArgs = {
  data: CompanyCreateManyInput[]
  skipDuplicates?: boolean
}

export type DeleteOneCompanyArgs = {
  where: CompanyWhereUniqueInput
}

export type UpdateOneCompanyArgs = {
  data: CompanyUpdateInput
  where: CompanyWhereUniqueInput
}

export type UpdateManyCompanyArgs = {
  data: CompanyUpdateManyMutationInput
  where?: CompanyWhereInput
}

export type DeleteManyCompanyArgs = {
  where?: CompanyWhereInput
}

export type CreateOneCompanyUserArgs = {
  data: CompanyUserCreateInput
}

export type UpsertOneCompanyUserArgs = {
  where: CompanyUserWhereUniqueInput
  create: CompanyUserCreateInput
  update: CompanyUserUpdateInput
}

export type CreateManyCompanyUserArgs = {
  data: CompanyUserCreateManyInput[]
  skipDuplicates?: boolean
}

export type DeleteOneCompanyUserArgs = {
  where: CompanyUserWhereUniqueInput
}

export type UpdateOneCompanyUserArgs = {
  data: CompanyUserUpdateInput
  where: CompanyUserWhereUniqueInput
}

export type UpdateManyCompanyUserArgs = {
  data: CompanyUserUpdateManyMutationInput
  where?: CompanyUserWhereInput
}

export type DeleteManyCompanyUserArgs = {
  where?: CompanyUserWhereInput
}

export type CreateOnePropertyUserRoleArgs = {
  data: PropertyUserRoleCreateInput
}

export type UpsertOnePropertyUserRoleArgs = {
  where: PropertyUserRoleWhereUniqueInput
  create: PropertyUserRoleCreateInput
  update: PropertyUserRoleUpdateInput
}

export type CreateManyPropertyUserRoleArgs = {
  data: PropertyUserRoleCreateManyInput[]
  skipDuplicates?: boolean
}

export type DeleteOnePropertyUserRoleArgs = {
  where: PropertyUserRoleWhereUniqueInput
}

export type UpdateOnePropertyUserRoleArgs = {
  data: PropertyUserRoleUpdateInput
  where: PropertyUserRoleWhereUniqueInput
}

export type UpdateManyPropertyUserRoleArgs = {
  data: PropertyUserRoleUpdateManyMutationInput
  where?: PropertyUserRoleWhereInput
}

export type DeleteManyPropertyUserRoleArgs = {
  where?: PropertyUserRoleWhereInput
}

export type CreateOnePropertyUserArgs = {
  data: PropertyUserCreateInput
}

export type UpsertOnePropertyUserArgs = {
  where: PropertyUserWhereUniqueInput
  create: PropertyUserCreateInput
  update: PropertyUserUpdateInput
}

export type CreateManyPropertyUserArgs = {
  data: PropertyUserCreateManyInput[]
  skipDuplicates?: boolean
}

export type DeleteOnePropertyUserArgs = {
  where: PropertyUserWhereUniqueInput
}

export type UpdateOnePropertyUserArgs = {
  data: PropertyUserUpdateInput
  where: PropertyUserWhereUniqueInput
}

export type UpdateManyPropertyUserArgs = {
  data: PropertyUserUpdateManyMutationInput
  where?: PropertyUserWhereInput
}

export type DeleteManyPropertyUserArgs = {
  where?: PropertyUserWhereInput
}

export type CreateOnePropertyArgs = {
  data: PropertyCreateInput
}

export type UpsertOnePropertyArgs = {
  where: PropertyWhereUniqueInput
  create: PropertyCreateInput
  update: PropertyUpdateInput
}

export type CreateManyPropertyArgs = {
  data: PropertyCreateManyInput[]
  skipDuplicates?: boolean
}

export type DeleteOnePropertyArgs = {
  where: PropertyWhereUniqueInput
}

export type UpdateOnePropertyArgs = {
  data: PropertyUpdateInput
  where: PropertyWhereUniqueInput
}

export type UpdateManyPropertyArgs = {
  data: PropertyUpdateManyMutationInput
  where?: PropertyWhereInput
}

export type DeleteManyPropertyArgs = {
  where?: PropertyWhereInput
}

export type ExecuteRawArgs = {
  query: string
  parameters?: any
}

export type QueryRawArgs = {
  query: string
  parameters?: any
}

export type UserCountOutputTypeEmployedByArgs = {
  where?: CompanyUserWhereInput
}

export type UserCountOutputTypePropertiesArgs = {
  where?: PropertyUserWhereInput
}

export type UserCountOutputTypeCompaniesArgs = {
  where?: CompanyWhereInput
}

export type CompanyCountOutputTypeCompanyUsersArgs = {
  where?: CompanyUserWhereInput
}

export type CompanyCountOutputTypePropertyUsersArgs = {
  where?: UserWhereInput
}

export type CompanyCountOutputTypePropertiesArgs = {
  where?: PropertyWhereInput
}

export type PropertyUserCountOutputTypeRolesArgs = {
  where?: PropertyUserRoleWhereInput
}

export type PropertyCountOutputTypeUsersArgs = {
  where?: PropertyUserWhereInput
}

export type UserWhereInput = {
  AND?: UserWhereInput[]
  OR?: UserWhereInput[]
  NOT?: UserWhereInput[]
  id?: IntFilter
  username?: StringFilter
  employedBy?: CompanyUserListRelationFilter
  properties?: PropertyUserListRelationFilter
  companies?: CompanyListRelationFilter
}

export type UserOrderByWithRelationInput = {
  id?: SortOrder
  username?: SortOrder
  employedBy?: CompanyUserOrderByRelationAggregateInput
  properties?: PropertyUserOrderByRelationAggregateInput
  companies?: CompanyOrderByRelationAggregateInput
}

export type UserWhereUniqueInput = AtLeast<
  {
    id?: number
    username?: string
    AND?: UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput[]
    employedBy?: CompanyUserListRelationFilter
    properties?: PropertyUserListRelationFilter
    companies?: CompanyListRelationFilter
  },
  'id' | 'username'
>

export type UserOrderByWithAggregationInput = {
  id?: SortOrder
  username?: SortOrder
  _count?: UserCountOrderByAggregateInput
  _avg?: UserAvgOrderByAggregateInput
  _max?: UserMaxOrderByAggregateInput
  _min?: UserMinOrderByAggregateInput
  _sum?: UserSumOrderByAggregateInput
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: UserScalarWhereWithAggregatesInput[]
  OR?: UserScalarWhereWithAggregatesInput[]
  NOT?: UserScalarWhereWithAggregatesInput[]
  id?: IntWithAggregatesFilter
  username?: StringWithAggregatesFilter
}

export type CompanyWhereInput = {
  AND?: CompanyWhereInput[]
  OR?: CompanyWhereInput[]
  NOT?: CompanyWhereInput[]
  id?: IntFilter
  name?: StringFilter
  companyUsers?: CompanyUserListRelationFilter
  propertyUsers?: UserListRelationFilter
  properties?: PropertyListRelationFilter
}

export type CompanyOrderByWithRelationInput = {
  id?: SortOrder
  name?: SortOrder
  companyUsers?: CompanyUserOrderByRelationAggregateInput
  propertyUsers?: UserOrderByRelationAggregateInput
  properties?: PropertyOrderByRelationAggregateInput
}

export type CompanyWhereUniqueInput = AtLeast<
  {
    id?: number
    AND?: CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput[]
    name?: StringFilter
    companyUsers?: CompanyUserListRelationFilter
    propertyUsers?: UserListRelationFilter
    properties?: PropertyListRelationFilter
  },
  'id'
>

export type CompanyOrderByWithAggregationInput = {
  id?: SortOrder
  name?: SortOrder
  _count?: CompanyCountOrderByAggregateInput
  _avg?: CompanyAvgOrderByAggregateInput
  _max?: CompanyMaxOrderByAggregateInput
  _min?: CompanyMinOrderByAggregateInput
  _sum?: CompanySumOrderByAggregateInput
}

export type CompanyScalarWhereWithAggregatesInput = {
  AND?: CompanyScalarWhereWithAggregatesInput[]
  OR?: CompanyScalarWhereWithAggregatesInput[]
  NOT?: CompanyScalarWhereWithAggregatesInput[]
  id?: IntWithAggregatesFilter
  name?: StringWithAggregatesFilter
}

export type CompanyUserWhereInput = {
  AND?: CompanyUserWhereInput[]
  OR?: CompanyUserWhereInput[]
  NOT?: CompanyUserWhereInput[]
  companyId?: IntFilter
  userId?: IntFilter
  dummyField?: StringFilter
  company?: CompanyRelationFilter
  user?: UserRelationFilter
}

export type CompanyUserOrderByWithRelationInput = {
  companyId?: SortOrder
  userId?: SortOrder
  dummyField?: SortOrder
  company?: CompanyOrderByWithRelationInput
  user?: UserOrderByWithRelationInput
}

export type CompanyUserWhereUniqueInput = AtLeast<
  {
    companyId_userId?: CompanyUserCompanyIdUserIdCompoundUniqueInput
    AND?: CompanyUserWhereInput[]
    OR?: CompanyUserWhereInput[]
    NOT?: CompanyUserWhereInput[]
    companyId?: IntFilter
    userId?: IntFilter
    dummyField?: StringFilter
    company?: CompanyRelationFilter
    user?: UserRelationFilter
  },
  'companyId_userId'
>

export type CompanyUserOrderByWithAggregationInput = {
  companyId?: SortOrder
  userId?: SortOrder
  dummyField?: SortOrder
  _count?: CompanyUserCountOrderByAggregateInput
  _avg?: CompanyUserAvgOrderByAggregateInput
  _max?: CompanyUserMaxOrderByAggregateInput
  _min?: CompanyUserMinOrderByAggregateInput
  _sum?: CompanyUserSumOrderByAggregateInput
}

export type CompanyUserScalarWhereWithAggregatesInput = {
  AND?: CompanyUserScalarWhereWithAggregatesInput[]
  OR?: CompanyUserScalarWhereWithAggregatesInput[]
  NOT?: CompanyUserScalarWhereWithAggregatesInput[]
  companyId?: IntWithAggregatesFilter
  userId?: IntWithAggregatesFilter
  dummyField?: StringWithAggregatesFilter
}

export type PropertyUserRoleWhereInput = {
  AND?: PropertyUserRoleWhereInput[]
  OR?: PropertyUserRoleWhereInput[]
  NOT?: PropertyUserRoleWhereInput[]
  id?: IntFilter
  type?: EnumPropertyUserRoleTypeFilter
  userId?: IntFilter
  user?: PropertyUserRelationFilter
}

export type PropertyUserRoleOrderByWithRelationInput = {
  id?: SortOrder
  type?: SortOrder
  userId?: SortOrder
  user?: PropertyUserOrderByWithRelationInput
}

export type PropertyUserRoleWhereUniqueInput = AtLeast<
  {
    id?: number
    AND?: PropertyUserRoleWhereInput[]
    OR?: PropertyUserRoleWhereInput[]
    NOT?: PropertyUserRoleWhereInput[]
    type?: EnumPropertyUserRoleTypeFilter
    userId?: IntFilter
    user?: PropertyUserRelationFilter
  },
  'id'
>

export type PropertyUserRoleOrderByWithAggregationInput = {
  id?: SortOrder
  type?: SortOrder
  userId?: SortOrder
  _count?: PropertyUserRoleCountOrderByAggregateInput
  _avg?: PropertyUserRoleAvgOrderByAggregateInput
  _max?: PropertyUserRoleMaxOrderByAggregateInput
  _min?: PropertyUserRoleMinOrderByAggregateInput
  _sum?: PropertyUserRoleSumOrderByAggregateInput
}

export type PropertyUserRoleScalarWhereWithAggregatesInput = {
  AND?: PropertyUserRoleScalarWhereWithAggregatesInput[]
  OR?: PropertyUserRoleScalarWhereWithAggregatesInput[]
  NOT?: PropertyUserRoleScalarWhereWithAggregatesInput[]
  id?: IntWithAggregatesFilter
  type?: EnumPropertyUserRoleTypeWithAggregatesFilter
  userId?: IntWithAggregatesFilter
}

export type PropertyUserWhereInput = {
  AND?: PropertyUserWhereInput[]
  OR?: PropertyUserWhereInput[]
  NOT?: PropertyUserWhereInput[]
  id?: IntFilter
  dummyField?: StringFilter
  propertyId?: IntFilter
  userId?: IntFilter
  property?: PropertyRelationFilter
  user?: UserRelationFilter
  roles?: PropertyUserRoleListRelationFilter
}

export type PropertyUserOrderByWithRelationInput = {
  id?: SortOrder
  dummyField?: SortOrder
  propertyId?: SortOrder
  userId?: SortOrder
  property?: PropertyOrderByWithRelationInput
  user?: UserOrderByWithRelationInput
  roles?: PropertyUserRoleOrderByRelationAggregateInput
}

export type PropertyUserWhereUniqueInput = AtLeast<
  {
    id?: number
    propertyId_userId?: PropertyUserPropertyIdUserIdCompoundUniqueInput
    AND?: PropertyUserWhereInput[]
    OR?: PropertyUserWhereInput[]
    NOT?: PropertyUserWhereInput[]
    dummyField?: StringFilter
    propertyId?: IntFilter
    userId?: IntFilter
    property?: PropertyRelationFilter
    user?: UserRelationFilter
    roles?: PropertyUserRoleListRelationFilter
  },
  'id' | 'propertyId_userId'
>

export type PropertyUserOrderByWithAggregationInput = {
  id?: SortOrder
  dummyField?: SortOrder
  propertyId?: SortOrder
  userId?: SortOrder
  _count?: PropertyUserCountOrderByAggregateInput
  _avg?: PropertyUserAvgOrderByAggregateInput
  _max?: PropertyUserMaxOrderByAggregateInput
  _min?: PropertyUserMinOrderByAggregateInput
  _sum?: PropertyUserSumOrderByAggregateInput
}

export type PropertyUserScalarWhereWithAggregatesInput = {
  AND?: PropertyUserScalarWhereWithAggregatesInput[]
  OR?: PropertyUserScalarWhereWithAggregatesInput[]
  NOT?: PropertyUserScalarWhereWithAggregatesInput[]
  id?: IntWithAggregatesFilter
  dummyField?: StringWithAggregatesFilter
  propertyId?: IntWithAggregatesFilter
  userId?: IntWithAggregatesFilter
}

export type PropertyWhereInput = {
  AND?: PropertyWhereInput[]
  OR?: PropertyWhereInput[]
  NOT?: PropertyWhereInput[]
  id?: IntFilter
  name?: StringFilter
  companyId?: IntFilter
  users?: PropertyUserListRelationFilter
  company?: CompanyRelationFilter
}

export type PropertyOrderByWithRelationInput = {
  id?: SortOrder
  name?: SortOrder
  companyId?: SortOrder
  users?: PropertyUserOrderByRelationAggregateInput
  company?: CompanyOrderByWithRelationInput
}

export type PropertyWhereUniqueInput = AtLeast<
  {
    id?: number
    AND?: PropertyWhereInput[]
    OR?: PropertyWhereInput[]
    NOT?: PropertyWhereInput[]
    name?: StringFilter
    companyId?: IntFilter
    users?: PropertyUserListRelationFilter
    company?: CompanyRelationFilter
  },
  'id'
>

export type PropertyOrderByWithAggregationInput = {
  id?: SortOrder
  name?: SortOrder
  companyId?: SortOrder
  _count?: PropertyCountOrderByAggregateInput
  _avg?: PropertyAvgOrderByAggregateInput
  _max?: PropertyMaxOrderByAggregateInput
  _min?: PropertyMinOrderByAggregateInput
  _sum?: PropertySumOrderByAggregateInput
}

export type PropertyScalarWhereWithAggregatesInput = {
  AND?: PropertyScalarWhereWithAggregatesInput[]
  OR?: PropertyScalarWhereWithAggregatesInput[]
  NOT?: PropertyScalarWhereWithAggregatesInput[]
  id?: IntWithAggregatesFilter
  name?: StringWithAggregatesFilter
  companyId?: IntWithAggregatesFilter
}

export type UserCreateInput = {
  username: string
  employedBy?: CompanyUserCreateNestedManyWithoutUserInput
  properties?: PropertyUserCreateNestedManyWithoutUserInput
  companies?: CompanyCreateNestedManyWithoutPropertyUsersInput
}

export type UserUncheckedCreateInput = {
  id?: number
  username: string
  employedBy?: CompanyUserUncheckedCreateNestedManyWithoutUserInput
  properties?: PropertyUserUncheckedCreateNestedManyWithoutUserInput
  companies?: CompanyUncheckedCreateNestedManyWithoutPropertyUsersInput
}

export type UserUpdateInput = {
  username?: StringFieldUpdateOperationsInput
  employedBy?: CompanyUserUpdateManyWithoutUserNestedInput
  properties?: PropertyUserUpdateManyWithoutUserNestedInput
  companies?: CompanyUpdateManyWithoutPropertyUsersNestedInput
}

export type UserUncheckedUpdateInput = {
  id?: IntFieldUpdateOperationsInput
  username?: StringFieldUpdateOperationsInput
  employedBy?: CompanyUserUncheckedUpdateManyWithoutUserNestedInput
  properties?: PropertyUserUncheckedUpdateManyWithoutUserNestedInput
  companies?: CompanyUncheckedUpdateManyWithoutPropertyUsersNestedInput
}

export type UserCreateManyInput = {
  id?: number
  username: string
}

export type UserUpdateManyMutationInput = {
  username?: StringFieldUpdateOperationsInput
}

export type UserUncheckedUpdateManyInput = {
  id?: IntFieldUpdateOperationsInput
  username?: StringFieldUpdateOperationsInput
}

export type CompanyCreateInput = {
  name: string
  companyUsers?: CompanyUserCreateNestedManyWithoutCompanyInput
  propertyUsers?: UserCreateNestedManyWithoutCompaniesInput
  properties?: PropertyCreateNestedManyWithoutCompanyInput
}

export type CompanyUncheckedCreateInput = {
  id?: number
  name: string
  companyUsers?: CompanyUserUncheckedCreateNestedManyWithoutCompanyInput
  propertyUsers?: UserUncheckedCreateNestedManyWithoutCompaniesInput
  properties?: PropertyUncheckedCreateNestedManyWithoutCompanyInput
}

export type CompanyUpdateInput = {
  name?: StringFieldUpdateOperationsInput
  companyUsers?: CompanyUserUpdateManyWithoutCompanyNestedInput
  propertyUsers?: UserUpdateManyWithoutCompaniesNestedInput
  properties?: PropertyUpdateManyWithoutCompanyNestedInput
}

export type CompanyUncheckedUpdateInput = {
  id?: IntFieldUpdateOperationsInput
  name?: StringFieldUpdateOperationsInput
  companyUsers?: CompanyUserUncheckedUpdateManyWithoutCompanyNestedInput
  propertyUsers?: UserUncheckedUpdateManyWithoutCompaniesNestedInput
  properties?: PropertyUncheckedUpdateManyWithoutCompanyNestedInput
}

export type CompanyCreateManyInput = {
  id?: number
  name: string
}

export type CompanyUpdateManyMutationInput = {
  name?: StringFieldUpdateOperationsInput
}

export type CompanyUncheckedUpdateManyInput = {
  id?: IntFieldUpdateOperationsInput
  name?: StringFieldUpdateOperationsInput
}

export type CompanyUserCreateInput = {
  dummyField: string
  company: CompanyCreateNestedOneWithoutCompanyUsersInput
  user: UserCreateNestedOneWithoutEmployedByInput
}

export type CompanyUserUncheckedCreateInput = {
  companyId: number
  userId: number
  dummyField: string
}

export type CompanyUserUpdateInput = {
  dummyField?: StringFieldUpdateOperationsInput
  company?: CompanyUpdateOneRequiredWithoutCompanyUsersNestedInput
  user?: UserUpdateOneRequiredWithoutEmployedByNestedInput
}

export type CompanyUserUncheckedUpdateInput = {
  companyId?: IntFieldUpdateOperationsInput
  userId?: IntFieldUpdateOperationsInput
  dummyField?: StringFieldUpdateOperationsInput
}

export type CompanyUserCreateManyInput = {
  companyId: number
  userId: number
  dummyField: string
}

export type CompanyUserUpdateManyMutationInput = {
  dummyField?: StringFieldUpdateOperationsInput
}

export type CompanyUserUncheckedUpdateManyInput = {
  companyId?: IntFieldUpdateOperationsInput
  userId?: IntFieldUpdateOperationsInput
  dummyField?: StringFieldUpdateOperationsInput
}

export type PropertyUserRoleCreateInput = {
  type: PropertyUserRoleType
  user: PropertyUserCreateNestedOneWithoutRolesInput
}

export type PropertyUserRoleUncheckedCreateInput = {
  id?: number
  type: PropertyUserRoleType
  userId: number
}

export type PropertyUserRoleUpdateInput = {
  type?: EnumPropertyUserRoleTypeFieldUpdateOperationsInput
  user?: PropertyUserUpdateOneRequiredWithoutRolesNestedInput
}

export type PropertyUserRoleUncheckedUpdateInput = {
  id?: IntFieldUpdateOperationsInput
  type?: EnumPropertyUserRoleTypeFieldUpdateOperationsInput
  userId?: IntFieldUpdateOperationsInput
}

export type PropertyUserRoleCreateManyInput = {
  id?: number
  type: PropertyUserRoleType
  userId: number
}

export type PropertyUserRoleUpdateManyMutationInput = {
  type?: EnumPropertyUserRoleTypeFieldUpdateOperationsInput
}

export type PropertyUserRoleUncheckedUpdateManyInput = {
  id?: IntFieldUpdateOperationsInput
  type?: EnumPropertyUserRoleTypeFieldUpdateOperationsInput
  userId?: IntFieldUpdateOperationsInput
}

export type PropertyUserCreateInput = {
  dummyField: string
  property: PropertyCreateNestedOneWithoutUsersInput
  user: UserCreateNestedOneWithoutPropertiesInput
  roles?: PropertyUserRoleCreateNestedManyWithoutUserInput
}

export type PropertyUserUncheckedCreateInput = {
  id?: number
  dummyField: string
  propertyId: number
  userId: number
  roles?: PropertyUserRoleUncheckedCreateNestedManyWithoutUserInput
}

export type PropertyUserUpdateInput = {
  dummyField?: StringFieldUpdateOperationsInput
  property?: PropertyUpdateOneRequiredWithoutUsersNestedInput
  user?: UserUpdateOneRequiredWithoutPropertiesNestedInput
  roles?: PropertyUserRoleUpdateManyWithoutUserNestedInput
}

export type PropertyUserUncheckedUpdateInput = {
  id?: IntFieldUpdateOperationsInput
  dummyField?: StringFieldUpdateOperationsInput
  propertyId?: IntFieldUpdateOperationsInput
  userId?: IntFieldUpdateOperationsInput
  roles?: PropertyUserRoleUncheckedUpdateManyWithoutUserNestedInput
}

export type PropertyUserCreateManyInput = {
  id?: number
  dummyField: string
  propertyId: number
  userId: number
}

export type PropertyUserUpdateManyMutationInput = {
  dummyField?: StringFieldUpdateOperationsInput
}

export type PropertyUserUncheckedUpdateManyInput = {
  id?: IntFieldUpdateOperationsInput
  dummyField?: StringFieldUpdateOperationsInput
  propertyId?: IntFieldUpdateOperationsInput
  userId?: IntFieldUpdateOperationsInput
}

export type PropertyCreateInput = {
  name: string
  users?: PropertyUserCreateNestedManyWithoutPropertyInput
  company: CompanyCreateNestedOneWithoutPropertiesInput
}

export type PropertyUncheckedCreateInput = {
  id?: number
  name: string
  companyId: number
  users?: PropertyUserUncheckedCreateNestedManyWithoutPropertyInput
}

export type PropertyUpdateInput = {
  name?: StringFieldUpdateOperationsInput
  users?: PropertyUserUpdateManyWithoutPropertyNestedInput
  company?: CompanyUpdateOneRequiredWithoutPropertiesNestedInput
}

export type PropertyUncheckedUpdateInput = {
  id?: IntFieldUpdateOperationsInput
  name?: StringFieldUpdateOperationsInput
  companyId?: IntFieldUpdateOperationsInput
  users?: PropertyUserUncheckedUpdateManyWithoutPropertyNestedInput
}

export type PropertyCreateManyInput = {
  id?: number
  name: string
  companyId: number
}

export type PropertyUpdateManyMutationInput = {
  name?: StringFieldUpdateOperationsInput
}

export type PropertyUncheckedUpdateManyInput = {
  id?: IntFieldUpdateOperationsInput
  name?: StringFieldUpdateOperationsInput
  companyId?: IntFieldUpdateOperationsInput
}

export type IntFilter = {
  equals?: number
  in?: number[]
  notIn?: number[]
  lt?: number
  lte?: number
  gt?: number
  gte?: number
  not?: NestedIntFilter
}

export type StringFilter = {
  equals?: string
  in?: string[]
  notIn?: string[]
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  not?: NestedStringFilter
}

export type CompanyUserListRelationFilter = {
  every?: CompanyUserWhereInput
  some?: CompanyUserWhereInput
  none?: CompanyUserWhereInput
}

export type PropertyUserListRelationFilter = {
  every?: PropertyUserWhereInput
  some?: PropertyUserWhereInput
  none?: PropertyUserWhereInput
}

export type CompanyListRelationFilter = {
  every?: CompanyWhereInput
  some?: CompanyWhereInput
  none?: CompanyWhereInput
}

export type CompanyUserOrderByRelationAggregateInput = {
  _count?: SortOrder
}

export type PropertyUserOrderByRelationAggregateInput = {
  _count?: SortOrder
}

export type CompanyOrderByRelationAggregateInput = {
  _count?: SortOrder
}

export type UserCountOrderByAggregateInput = {
  id?: SortOrder
  username?: SortOrder
}

export type UserAvgOrderByAggregateInput = {
  id?: SortOrder
}

export type UserMaxOrderByAggregateInput = {
  id?: SortOrder
  username?: SortOrder
}

export type UserMinOrderByAggregateInput = {
  id?: SortOrder
  username?: SortOrder
}

export type UserSumOrderByAggregateInput = {
  id?: SortOrder
}

export type IntWithAggregatesFilter = {
  equals?: number
  in?: number[]
  notIn?: number[]
  lt?: number
  lte?: number
  gt?: number
  gte?: number
  not?: NestedIntWithAggregatesFilter
  _count?: NestedIntFilter
  _avg?: NestedFloatFilter
  _sum?: NestedIntFilter
  _min?: NestedIntFilter
  _max?: NestedIntFilter
}

export type StringWithAggregatesFilter = {
  equals?: string
  in?: string[]
  notIn?: string[]
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  not?: NestedStringWithAggregatesFilter
  _count?: NestedIntFilter
  _min?: NestedStringFilter
  _max?: NestedStringFilter
}

export type UserListRelationFilter = {
  every?: UserWhereInput
  some?: UserWhereInput
  none?: UserWhereInput
}

export type PropertyListRelationFilter = {
  every?: PropertyWhereInput
  some?: PropertyWhereInput
  none?: PropertyWhereInput
}

export type UserOrderByRelationAggregateInput = {
  _count?: SortOrder
}

export type PropertyOrderByRelationAggregateInput = {
  _count?: SortOrder
}

export type CompanyCountOrderByAggregateInput = {
  id?: SortOrder
  name?: SortOrder
}

export type CompanyAvgOrderByAggregateInput = {
  id?: SortOrder
}

export type CompanyMaxOrderByAggregateInput = {
  id?: SortOrder
  name?: SortOrder
}

export type CompanyMinOrderByAggregateInput = {
  id?: SortOrder
  name?: SortOrder
}

export type CompanySumOrderByAggregateInput = {
  id?: SortOrder
}

export type CompanyRelationFilter = {
  is?: CompanyWhereInput
  isNot?: CompanyWhereInput
}

export type UserRelationFilter = {
  is?: UserWhereInput
  isNot?: UserWhereInput
}

export type CompanyUserCompanyIdUserIdCompoundUniqueInput = {
  companyId: number
  userId: number
}

export type CompanyUserCountOrderByAggregateInput = {
  companyId?: SortOrder
  userId?: SortOrder
  dummyField?: SortOrder
}

export type CompanyUserAvgOrderByAggregateInput = {
  companyId?: SortOrder
  userId?: SortOrder
}

export type CompanyUserMaxOrderByAggregateInput = {
  companyId?: SortOrder
  userId?: SortOrder
  dummyField?: SortOrder
}

export type CompanyUserMinOrderByAggregateInput = {
  companyId?: SortOrder
  userId?: SortOrder
  dummyField?: SortOrder
}

export type CompanyUserSumOrderByAggregateInput = {
  companyId?: SortOrder
  userId?: SortOrder
}

export type EnumPropertyUserRoleTypeFilter = {
  equals?: PropertyUserRoleType
  in?: PropertyUserRoleType[]
  notIn?: PropertyUserRoleType[]
  not?: NestedEnumPropertyUserRoleTypeFilter
}

export type PropertyUserRelationFilter = {
  is?: PropertyUserWhereInput
  isNot?: PropertyUserWhereInput
}

export type PropertyUserRoleCountOrderByAggregateInput = {
  id?: SortOrder
  type?: SortOrder
  userId?: SortOrder
}

export type PropertyUserRoleAvgOrderByAggregateInput = {
  id?: SortOrder
  userId?: SortOrder
}

export type PropertyUserRoleMaxOrderByAggregateInput = {
  id?: SortOrder
  type?: SortOrder
  userId?: SortOrder
}

export type PropertyUserRoleMinOrderByAggregateInput = {
  id?: SortOrder
  type?: SortOrder
  userId?: SortOrder
}

export type PropertyUserRoleSumOrderByAggregateInput = {
  id?: SortOrder
  userId?: SortOrder
}

export type EnumPropertyUserRoleTypeWithAggregatesFilter = {
  equals?: PropertyUserRoleType
  in?: PropertyUserRoleType[]
  notIn?: PropertyUserRoleType[]
  not?: NestedEnumPropertyUserRoleTypeWithAggregatesFilter
  _count?: NestedIntFilter
  _min?: NestedEnumPropertyUserRoleTypeFilter
  _max?: NestedEnumPropertyUserRoleTypeFilter
}

export type PropertyRelationFilter = {
  is?: PropertyWhereInput
  isNot?: PropertyWhereInput
}

export type PropertyUserRoleListRelationFilter = {
  every?: PropertyUserRoleWhereInput
  some?: PropertyUserRoleWhereInput
  none?: PropertyUserRoleWhereInput
}

export type PropertyUserRoleOrderByRelationAggregateInput = {
  _count?: SortOrder
}

export type PropertyUserPropertyIdUserIdCompoundUniqueInput = {
  propertyId: number
  userId: number
}

export type PropertyUserCountOrderByAggregateInput = {
  id?: SortOrder
  dummyField?: SortOrder
  propertyId?: SortOrder
  userId?: SortOrder
}

export type PropertyUserAvgOrderByAggregateInput = {
  id?: SortOrder
  propertyId?: SortOrder
  userId?: SortOrder
}

export type PropertyUserMaxOrderByAggregateInput = {
  id?: SortOrder
  dummyField?: SortOrder
  propertyId?: SortOrder
  userId?: SortOrder
}

export type PropertyUserMinOrderByAggregateInput = {
  id?: SortOrder
  dummyField?: SortOrder
  propertyId?: SortOrder
  userId?: SortOrder
}

export type PropertyUserSumOrderByAggregateInput = {
  id?: SortOrder
  propertyId?: SortOrder
  userId?: SortOrder
}

export type PropertyCountOrderByAggregateInput = {
  id?: SortOrder
  name?: SortOrder
  companyId?: SortOrder
}

export type PropertyAvgOrderByAggregateInput = {
  id?: SortOrder
  companyId?: SortOrder
}

export type PropertyMaxOrderByAggregateInput = {
  id?: SortOrder
  name?: SortOrder
  companyId?: SortOrder
}

export type PropertyMinOrderByAggregateInput = {
  id?: SortOrder
  name?: SortOrder
  companyId?: SortOrder
}

export type PropertySumOrderByAggregateInput = {
  id?: SortOrder
  companyId?: SortOrder
}

export type CompanyUserCreateNestedManyWithoutUserInput = {
  create?: CompanyUserCreateWithoutUserInput[]
  connectOrCreate?: CompanyUserCreateOrConnectWithoutUserInput[]
  createMany?: CompanyUserCreateManyUserInputEnvelope
  connect?: CompanyUserWhereUniqueInput[]
}

export type PropertyUserCreateNestedManyWithoutUserInput = {
  create?: PropertyUserCreateWithoutUserInput[]
  connectOrCreate?: PropertyUserCreateOrConnectWithoutUserInput[]
  createMany?: PropertyUserCreateManyUserInputEnvelope
  connect?: PropertyUserWhereUniqueInput[]
}

export type CompanyCreateNestedManyWithoutPropertyUsersInput = {
  create?: CompanyCreateWithoutPropertyUsersInput[]
  connectOrCreate?: CompanyCreateOrConnectWithoutPropertyUsersInput[]
  connect?: CompanyWhereUniqueInput[]
}

export type CompanyUserUncheckedCreateNestedManyWithoutUserInput = {
  create?: CompanyUserCreateWithoutUserInput[]
  connectOrCreate?: CompanyUserCreateOrConnectWithoutUserInput[]
  createMany?: CompanyUserCreateManyUserInputEnvelope
  connect?: CompanyUserWhereUniqueInput[]
}

export type PropertyUserUncheckedCreateNestedManyWithoutUserInput = {
  create?: PropertyUserCreateWithoutUserInput[]
  connectOrCreate?: PropertyUserCreateOrConnectWithoutUserInput[]
  createMany?: PropertyUserCreateManyUserInputEnvelope
  connect?: PropertyUserWhereUniqueInput[]
}

export type CompanyUncheckedCreateNestedManyWithoutPropertyUsersInput = {
  create?: CompanyCreateWithoutPropertyUsersInput[]
  connectOrCreate?: CompanyCreateOrConnectWithoutPropertyUsersInput[]
  connect?: CompanyWhereUniqueInput[]
}

export type StringFieldUpdateOperationsInput = {
  set?: string
}

export type CompanyUserUpdateManyWithoutUserNestedInput = {
  create?: CompanyUserCreateWithoutUserInput[]
  connectOrCreate?: CompanyUserCreateOrConnectWithoutUserInput[]
  upsert?: CompanyUserUpsertWithWhereUniqueWithoutUserInput[]
  createMany?: CompanyUserCreateManyUserInputEnvelope
  set?: CompanyUserWhereUniqueInput[]
  disconnect?: CompanyUserWhereUniqueInput[]
  delete?: CompanyUserWhereUniqueInput[]
  connect?: CompanyUserWhereUniqueInput[]
  update?: CompanyUserUpdateWithWhereUniqueWithoutUserInput[]
  updateMany?: CompanyUserUpdateManyWithWhereWithoutUserInput[]
  deleteMany?: CompanyUserScalarWhereInput[]
}

export type PropertyUserUpdateManyWithoutUserNestedInput = {
  create?: PropertyUserCreateWithoutUserInput[]
  connectOrCreate?: PropertyUserCreateOrConnectWithoutUserInput[]
  upsert?: PropertyUserUpsertWithWhereUniqueWithoutUserInput[]
  createMany?: PropertyUserCreateManyUserInputEnvelope
  set?: PropertyUserWhereUniqueInput[]
  disconnect?: PropertyUserWhereUniqueInput[]
  delete?: PropertyUserWhereUniqueInput[]
  connect?: PropertyUserWhereUniqueInput[]
  update?: PropertyUserUpdateWithWhereUniqueWithoutUserInput[]
  updateMany?: PropertyUserUpdateManyWithWhereWithoutUserInput[]
  deleteMany?: PropertyUserScalarWhereInput[]
}

export type CompanyUpdateManyWithoutPropertyUsersNestedInput = {
  create?: CompanyCreateWithoutPropertyUsersInput[]
  connectOrCreate?: CompanyCreateOrConnectWithoutPropertyUsersInput[]
  upsert?: CompanyUpsertWithWhereUniqueWithoutPropertyUsersInput[]
  set?: CompanyWhereUniqueInput[]
  disconnect?: CompanyWhereUniqueInput[]
  delete?: CompanyWhereUniqueInput[]
  connect?: CompanyWhereUniqueInput[]
  update?: CompanyUpdateWithWhereUniqueWithoutPropertyUsersInput[]
  updateMany?: CompanyUpdateManyWithWhereWithoutPropertyUsersInput[]
  deleteMany?: CompanyScalarWhereInput[]
}

export type IntFieldUpdateOperationsInput = {
  set?: number
  increment?: number
  decrement?: number
  multiply?: number
  divide?: number
}

export type CompanyUserUncheckedUpdateManyWithoutUserNestedInput = {
  create?: CompanyUserCreateWithoutUserInput[]
  connectOrCreate?: CompanyUserCreateOrConnectWithoutUserInput[]
  upsert?: CompanyUserUpsertWithWhereUniqueWithoutUserInput[]
  createMany?: CompanyUserCreateManyUserInputEnvelope
  set?: CompanyUserWhereUniqueInput[]
  disconnect?: CompanyUserWhereUniqueInput[]
  delete?: CompanyUserWhereUniqueInput[]
  connect?: CompanyUserWhereUniqueInput[]
  update?: CompanyUserUpdateWithWhereUniqueWithoutUserInput[]
  updateMany?: CompanyUserUpdateManyWithWhereWithoutUserInput[]
  deleteMany?: CompanyUserScalarWhereInput[]
}

export type PropertyUserUncheckedUpdateManyWithoutUserNestedInput = {
  create?: PropertyUserCreateWithoutUserInput[]
  connectOrCreate?: PropertyUserCreateOrConnectWithoutUserInput[]
  upsert?: PropertyUserUpsertWithWhereUniqueWithoutUserInput[]
  createMany?: PropertyUserCreateManyUserInputEnvelope
  set?: PropertyUserWhereUniqueInput[]
  disconnect?: PropertyUserWhereUniqueInput[]
  delete?: PropertyUserWhereUniqueInput[]
  connect?: PropertyUserWhereUniqueInput[]
  update?: PropertyUserUpdateWithWhereUniqueWithoutUserInput[]
  updateMany?: PropertyUserUpdateManyWithWhereWithoutUserInput[]
  deleteMany?: PropertyUserScalarWhereInput[]
}

export type CompanyUncheckedUpdateManyWithoutPropertyUsersNestedInput = {
  create?: CompanyCreateWithoutPropertyUsersInput[]
  connectOrCreate?: CompanyCreateOrConnectWithoutPropertyUsersInput[]
  upsert?: CompanyUpsertWithWhereUniqueWithoutPropertyUsersInput[]
  set?: CompanyWhereUniqueInput[]
  disconnect?: CompanyWhereUniqueInput[]
  delete?: CompanyWhereUniqueInput[]
  connect?: CompanyWhereUniqueInput[]
  update?: CompanyUpdateWithWhereUniqueWithoutPropertyUsersInput[]
  updateMany?: CompanyUpdateManyWithWhereWithoutPropertyUsersInput[]
  deleteMany?: CompanyScalarWhereInput[]
}

export type CompanyUserCreateNestedManyWithoutCompanyInput = {
  create?: CompanyUserCreateWithoutCompanyInput[]
  connectOrCreate?: CompanyUserCreateOrConnectWithoutCompanyInput[]
  createMany?: CompanyUserCreateManyCompanyInputEnvelope
  connect?: CompanyUserWhereUniqueInput[]
}

export type UserCreateNestedManyWithoutCompaniesInput = {
  create?: UserCreateWithoutCompaniesInput[]
  connectOrCreate?: UserCreateOrConnectWithoutCompaniesInput[]
  connect?: UserWhereUniqueInput[]
}

export type PropertyCreateNestedManyWithoutCompanyInput = {
  create?: PropertyCreateWithoutCompanyInput[]
  connectOrCreate?: PropertyCreateOrConnectWithoutCompanyInput[]
  createMany?: PropertyCreateManyCompanyInputEnvelope
  connect?: PropertyWhereUniqueInput[]
}

export type CompanyUserUncheckedCreateNestedManyWithoutCompanyInput = {
  create?: CompanyUserCreateWithoutCompanyInput[]
  connectOrCreate?: CompanyUserCreateOrConnectWithoutCompanyInput[]
  createMany?: CompanyUserCreateManyCompanyInputEnvelope
  connect?: CompanyUserWhereUniqueInput[]
}

export type UserUncheckedCreateNestedManyWithoutCompaniesInput = {
  create?: UserCreateWithoutCompaniesInput[]
  connectOrCreate?: UserCreateOrConnectWithoutCompaniesInput[]
  connect?: UserWhereUniqueInput[]
}

export type PropertyUncheckedCreateNestedManyWithoutCompanyInput = {
  create?: PropertyCreateWithoutCompanyInput[]
  connectOrCreate?: PropertyCreateOrConnectWithoutCompanyInput[]
  createMany?: PropertyCreateManyCompanyInputEnvelope
  connect?: PropertyWhereUniqueInput[]
}

export type CompanyUserUpdateManyWithoutCompanyNestedInput = {
  create?: CompanyUserCreateWithoutCompanyInput[]
  connectOrCreate?: CompanyUserCreateOrConnectWithoutCompanyInput[]
  upsert?: CompanyUserUpsertWithWhereUniqueWithoutCompanyInput[]
  createMany?: CompanyUserCreateManyCompanyInputEnvelope
  set?: CompanyUserWhereUniqueInput[]
  disconnect?: CompanyUserWhereUniqueInput[]
  delete?: CompanyUserWhereUniqueInput[]
  connect?: CompanyUserWhereUniqueInput[]
  update?: CompanyUserUpdateWithWhereUniqueWithoutCompanyInput[]
  updateMany?: CompanyUserUpdateManyWithWhereWithoutCompanyInput[]
  deleteMany?: CompanyUserScalarWhereInput[]
}

export type UserUpdateManyWithoutCompaniesNestedInput = {
  create?: UserCreateWithoutCompaniesInput[]
  connectOrCreate?: UserCreateOrConnectWithoutCompaniesInput[]
  upsert?: UserUpsertWithWhereUniqueWithoutCompaniesInput[]
  set?: UserWhereUniqueInput[]
  disconnect?: UserWhereUniqueInput[]
  delete?: UserWhereUniqueInput[]
  connect?: UserWhereUniqueInput[]
  update?: UserUpdateWithWhereUniqueWithoutCompaniesInput[]
  updateMany?: UserUpdateManyWithWhereWithoutCompaniesInput[]
  deleteMany?: UserScalarWhereInput[]
}

export type PropertyUpdateManyWithoutCompanyNestedInput = {
  create?: PropertyCreateWithoutCompanyInput[]
  connectOrCreate?: PropertyCreateOrConnectWithoutCompanyInput[]
  upsert?: PropertyUpsertWithWhereUniqueWithoutCompanyInput[]
  createMany?: PropertyCreateManyCompanyInputEnvelope
  set?: PropertyWhereUniqueInput[]
  disconnect?: PropertyWhereUniqueInput[]
  delete?: PropertyWhereUniqueInput[]
  connect?: PropertyWhereUniqueInput[]
  update?: PropertyUpdateWithWhereUniqueWithoutCompanyInput[]
  updateMany?: PropertyUpdateManyWithWhereWithoutCompanyInput[]
  deleteMany?: PropertyScalarWhereInput[]
}

export type CompanyUserUncheckedUpdateManyWithoutCompanyNestedInput = {
  create?: CompanyUserCreateWithoutCompanyInput[]
  connectOrCreate?: CompanyUserCreateOrConnectWithoutCompanyInput[]
  upsert?: CompanyUserUpsertWithWhereUniqueWithoutCompanyInput[]
  createMany?: CompanyUserCreateManyCompanyInputEnvelope
  set?: CompanyUserWhereUniqueInput[]
  disconnect?: CompanyUserWhereUniqueInput[]
  delete?: CompanyUserWhereUniqueInput[]
  connect?: CompanyUserWhereUniqueInput[]
  update?: CompanyUserUpdateWithWhereUniqueWithoutCompanyInput[]
  updateMany?: CompanyUserUpdateManyWithWhereWithoutCompanyInput[]
  deleteMany?: CompanyUserScalarWhereInput[]
}

export type UserUncheckedUpdateManyWithoutCompaniesNestedInput = {
  create?: UserCreateWithoutCompaniesInput[]
  connectOrCreate?: UserCreateOrConnectWithoutCompaniesInput[]
  upsert?: UserUpsertWithWhereUniqueWithoutCompaniesInput[]
  set?: UserWhereUniqueInput[]
  disconnect?: UserWhereUniqueInput[]
  delete?: UserWhereUniqueInput[]
  connect?: UserWhereUniqueInput[]
  update?: UserUpdateWithWhereUniqueWithoutCompaniesInput[]
  updateMany?: UserUpdateManyWithWhereWithoutCompaniesInput[]
  deleteMany?: UserScalarWhereInput[]
}

export type PropertyUncheckedUpdateManyWithoutCompanyNestedInput = {
  create?: PropertyCreateWithoutCompanyInput[]
  connectOrCreate?: PropertyCreateOrConnectWithoutCompanyInput[]
  upsert?: PropertyUpsertWithWhereUniqueWithoutCompanyInput[]
  createMany?: PropertyCreateManyCompanyInputEnvelope
  set?: PropertyWhereUniqueInput[]
  disconnect?: PropertyWhereUniqueInput[]
  delete?: PropertyWhereUniqueInput[]
  connect?: PropertyWhereUniqueInput[]
  update?: PropertyUpdateWithWhereUniqueWithoutCompanyInput[]
  updateMany?: PropertyUpdateManyWithWhereWithoutCompanyInput[]
  deleteMany?: PropertyScalarWhereInput[]
}

export type CompanyCreateNestedOneWithoutCompanyUsersInput = {
  create?: CompanyCreateWithoutCompanyUsersInput
  connectOrCreate?: CompanyCreateOrConnectWithoutCompanyUsersInput
  connect?: CompanyWhereUniqueInput
}

export type UserCreateNestedOneWithoutEmployedByInput = {
  create?: UserCreateWithoutEmployedByInput
  connectOrCreate?: UserCreateOrConnectWithoutEmployedByInput
  connect?: UserWhereUniqueInput
}

export type CompanyUpdateOneRequiredWithoutCompanyUsersNestedInput = {
  create?: CompanyCreateWithoutCompanyUsersInput
  connectOrCreate?: CompanyCreateOrConnectWithoutCompanyUsersInput
  upsert?: CompanyUpsertWithoutCompanyUsersInput
  connect?: CompanyWhereUniqueInput
  update?: CompanyUpdateToOneWithWhereWithoutCompanyUsersInput
}

export type UserUpdateOneRequiredWithoutEmployedByNestedInput = {
  create?: UserCreateWithoutEmployedByInput
  connectOrCreate?: UserCreateOrConnectWithoutEmployedByInput
  upsert?: UserUpsertWithoutEmployedByInput
  connect?: UserWhereUniqueInput
  update?: UserUpdateToOneWithWhereWithoutEmployedByInput
}

export type PropertyUserCreateNestedOneWithoutRolesInput = {
  create?: PropertyUserCreateWithoutRolesInput
  connectOrCreate?: PropertyUserCreateOrConnectWithoutRolesInput
  connect?: PropertyUserWhereUniqueInput
}

export type EnumPropertyUserRoleTypeFieldUpdateOperationsInput = {
  set?: PropertyUserRoleType
}

export type PropertyUserUpdateOneRequiredWithoutRolesNestedInput = {
  create?: PropertyUserCreateWithoutRolesInput
  connectOrCreate?: PropertyUserCreateOrConnectWithoutRolesInput
  upsert?: PropertyUserUpsertWithoutRolesInput
  connect?: PropertyUserWhereUniqueInput
  update?: PropertyUserUpdateToOneWithWhereWithoutRolesInput
}

export type PropertyCreateNestedOneWithoutUsersInput = {
  create?: PropertyCreateWithoutUsersInput
  connectOrCreate?: PropertyCreateOrConnectWithoutUsersInput
  connect?: PropertyWhereUniqueInput
}

export type UserCreateNestedOneWithoutPropertiesInput = {
  create?: UserCreateWithoutPropertiesInput
  connectOrCreate?: UserCreateOrConnectWithoutPropertiesInput
  connect?: UserWhereUniqueInput
}

export type PropertyUserRoleCreateNestedManyWithoutUserInput = {
  create?: PropertyUserRoleCreateWithoutUserInput[]
  connectOrCreate?: PropertyUserRoleCreateOrConnectWithoutUserInput[]
  createMany?: PropertyUserRoleCreateManyUserInputEnvelope
  connect?: PropertyUserRoleWhereUniqueInput[]
}

export type PropertyUserRoleUncheckedCreateNestedManyWithoutUserInput = {
  create?: PropertyUserRoleCreateWithoutUserInput[]
  connectOrCreate?: PropertyUserRoleCreateOrConnectWithoutUserInput[]
  createMany?: PropertyUserRoleCreateManyUserInputEnvelope
  connect?: PropertyUserRoleWhereUniqueInput[]
}

export type PropertyUpdateOneRequiredWithoutUsersNestedInput = {
  create?: PropertyCreateWithoutUsersInput
  connectOrCreate?: PropertyCreateOrConnectWithoutUsersInput
  upsert?: PropertyUpsertWithoutUsersInput
  connect?: PropertyWhereUniqueInput
  update?: PropertyUpdateToOneWithWhereWithoutUsersInput
}

export type UserUpdateOneRequiredWithoutPropertiesNestedInput = {
  create?: UserCreateWithoutPropertiesInput
  connectOrCreate?: UserCreateOrConnectWithoutPropertiesInput
  upsert?: UserUpsertWithoutPropertiesInput
  connect?: UserWhereUniqueInput
  update?: UserUpdateToOneWithWhereWithoutPropertiesInput
}

export type PropertyUserRoleUpdateManyWithoutUserNestedInput = {
  create?: PropertyUserRoleCreateWithoutUserInput[]
  connectOrCreate?: PropertyUserRoleCreateOrConnectWithoutUserInput[]
  upsert?: PropertyUserRoleUpsertWithWhereUniqueWithoutUserInput[]
  createMany?: PropertyUserRoleCreateManyUserInputEnvelope
  set?: PropertyUserRoleWhereUniqueInput[]
  disconnect?: PropertyUserRoleWhereUniqueInput[]
  delete?: PropertyUserRoleWhereUniqueInput[]
  connect?: PropertyUserRoleWhereUniqueInput[]
  update?: PropertyUserRoleUpdateWithWhereUniqueWithoutUserInput[]
  updateMany?: PropertyUserRoleUpdateManyWithWhereWithoutUserInput[]
  deleteMany?: PropertyUserRoleScalarWhereInput[]
}

export type PropertyUserRoleUncheckedUpdateManyWithoutUserNestedInput = {
  create?: PropertyUserRoleCreateWithoutUserInput[]
  connectOrCreate?: PropertyUserRoleCreateOrConnectWithoutUserInput[]
  upsert?: PropertyUserRoleUpsertWithWhereUniqueWithoutUserInput[]
  createMany?: PropertyUserRoleCreateManyUserInputEnvelope
  set?: PropertyUserRoleWhereUniqueInput[]
  disconnect?: PropertyUserRoleWhereUniqueInput[]
  delete?: PropertyUserRoleWhereUniqueInput[]
  connect?: PropertyUserRoleWhereUniqueInput[]
  update?: PropertyUserRoleUpdateWithWhereUniqueWithoutUserInput[]
  updateMany?: PropertyUserRoleUpdateManyWithWhereWithoutUserInput[]
  deleteMany?: PropertyUserRoleScalarWhereInput[]
}

export type PropertyUserCreateNestedManyWithoutPropertyInput = {
  create?: PropertyUserCreateWithoutPropertyInput[]
  connectOrCreate?: PropertyUserCreateOrConnectWithoutPropertyInput[]
  createMany?: PropertyUserCreateManyPropertyInputEnvelope
  connect?: PropertyUserWhereUniqueInput[]
}

export type CompanyCreateNestedOneWithoutPropertiesInput = {
  create?: CompanyCreateWithoutPropertiesInput
  connectOrCreate?: CompanyCreateOrConnectWithoutPropertiesInput
  connect?: CompanyWhereUniqueInput
}

export type PropertyUserUncheckedCreateNestedManyWithoutPropertyInput = {
  create?: PropertyUserCreateWithoutPropertyInput[]
  connectOrCreate?: PropertyUserCreateOrConnectWithoutPropertyInput[]
  createMany?: PropertyUserCreateManyPropertyInputEnvelope
  connect?: PropertyUserWhereUniqueInput[]
}

export type PropertyUserUpdateManyWithoutPropertyNestedInput = {
  create?: PropertyUserCreateWithoutPropertyInput[]
  connectOrCreate?: PropertyUserCreateOrConnectWithoutPropertyInput[]
  upsert?: PropertyUserUpsertWithWhereUniqueWithoutPropertyInput[]
  createMany?: PropertyUserCreateManyPropertyInputEnvelope
  set?: PropertyUserWhereUniqueInput[]
  disconnect?: PropertyUserWhereUniqueInput[]
  delete?: PropertyUserWhereUniqueInput[]
  connect?: PropertyUserWhereUniqueInput[]
  update?: PropertyUserUpdateWithWhereUniqueWithoutPropertyInput[]
  updateMany?: PropertyUserUpdateManyWithWhereWithoutPropertyInput[]
  deleteMany?: PropertyUserScalarWhereInput[]
}

export type CompanyUpdateOneRequiredWithoutPropertiesNestedInput = {
  create?: CompanyCreateWithoutPropertiesInput
  connectOrCreate?: CompanyCreateOrConnectWithoutPropertiesInput
  upsert?: CompanyUpsertWithoutPropertiesInput
  connect?: CompanyWhereUniqueInput
  update?: CompanyUpdateToOneWithWhereWithoutPropertiesInput
}

export type PropertyUserUncheckedUpdateManyWithoutPropertyNestedInput = {
  create?: PropertyUserCreateWithoutPropertyInput[]
  connectOrCreate?: PropertyUserCreateOrConnectWithoutPropertyInput[]
  upsert?: PropertyUserUpsertWithWhereUniqueWithoutPropertyInput[]
  createMany?: PropertyUserCreateManyPropertyInputEnvelope
  set?: PropertyUserWhereUniqueInput[]
  disconnect?: PropertyUserWhereUniqueInput[]
  delete?: PropertyUserWhereUniqueInput[]
  connect?: PropertyUserWhereUniqueInput[]
  update?: PropertyUserUpdateWithWhereUniqueWithoutPropertyInput[]
  updateMany?: PropertyUserUpdateManyWithWhereWithoutPropertyInput[]
  deleteMany?: PropertyUserScalarWhereInput[]
}

export type NestedIntFilter = {
  equals?: number
  in?: number[]
  notIn?: number[]
  lt?: number
  lte?: number
  gt?: number
  gte?: number
  not?: NestedIntFilter
}

export type NestedStringFilter = {
  equals?: string
  in?: string[]
  notIn?: string[]
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  not?: NestedStringFilter
}

export type NestedIntWithAggregatesFilter = {
  equals?: number
  in?: number[]
  notIn?: number[]
  lt?: number
  lte?: number
  gt?: number
  gte?: number
  not?: NestedIntWithAggregatesFilter
  _count?: NestedIntFilter
  _avg?: NestedFloatFilter
  _sum?: NestedIntFilter
  _min?: NestedIntFilter
  _max?: NestedIntFilter
}

export type NestedFloatFilter = {
  equals?: number
  in?: number[]
  notIn?: number[]
  lt?: number
  lte?: number
  gt?: number
  gte?: number
  not?: NestedFloatFilter
}

export type NestedStringWithAggregatesFilter = {
  equals?: string
  in?: string[]
  notIn?: string[]
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  not?: NestedStringWithAggregatesFilter
  _count?: NestedIntFilter
  _min?: NestedStringFilter
  _max?: NestedStringFilter
}

export type NestedEnumPropertyUserRoleTypeFilter = {
  equals?: PropertyUserRoleType
  in?: PropertyUserRoleType[]
  notIn?: PropertyUserRoleType[]
  not?: NestedEnumPropertyUserRoleTypeFilter
}

export type NestedEnumPropertyUserRoleTypeWithAggregatesFilter = {
  equals?: PropertyUserRoleType
  in?: PropertyUserRoleType[]
  notIn?: PropertyUserRoleType[]
  not?: NestedEnumPropertyUserRoleTypeWithAggregatesFilter
  _count?: NestedIntFilter
  _min?: NestedEnumPropertyUserRoleTypeFilter
  _max?: NestedEnumPropertyUserRoleTypeFilter
}

export type CompanyUserCreateWithoutUserInput = {
  dummyField: string
  company: CompanyCreateNestedOneWithoutCompanyUsersInput
}

export type CompanyUserUncheckedCreateWithoutUserInput = {
  companyId: number
  dummyField: string
}

export type CompanyUserCreateOrConnectWithoutUserInput = {
  where: CompanyUserWhereUniqueInput
  create: CompanyUserCreateWithoutUserInput
}

export type CompanyUserCreateManyUserInputEnvelope = {
  data: CompanyUserCreateManyUserInput[]
  skipDuplicates?: boolean
}

export type PropertyUserCreateWithoutUserInput = {
  dummyField: string
  property: PropertyCreateNestedOneWithoutUsersInput
  roles?: PropertyUserRoleCreateNestedManyWithoutUserInput
}

export type PropertyUserUncheckedCreateWithoutUserInput = {
  id?: number
  dummyField: string
  propertyId: number
  roles?: PropertyUserRoleUncheckedCreateNestedManyWithoutUserInput
}

export type PropertyUserCreateOrConnectWithoutUserInput = {
  where: PropertyUserWhereUniqueInput
  create: PropertyUserCreateWithoutUserInput
}

export type PropertyUserCreateManyUserInputEnvelope = {
  data: PropertyUserCreateManyUserInput[]
  skipDuplicates?: boolean
}

export type CompanyCreateWithoutPropertyUsersInput = {
  name: string
  companyUsers?: CompanyUserCreateNestedManyWithoutCompanyInput
  properties?: PropertyCreateNestedManyWithoutCompanyInput
}

export type CompanyUncheckedCreateWithoutPropertyUsersInput = {
  id?: number
  name: string
  companyUsers?: CompanyUserUncheckedCreateNestedManyWithoutCompanyInput
  properties?: PropertyUncheckedCreateNestedManyWithoutCompanyInput
}

export type CompanyCreateOrConnectWithoutPropertyUsersInput = {
  where: CompanyWhereUniqueInput
  create: CompanyCreateWithoutPropertyUsersInput
}

export type CompanyUserUpsertWithWhereUniqueWithoutUserInput = {
  where: CompanyUserWhereUniqueInput
  update: CompanyUserUpdateWithoutUserInput
  create: CompanyUserCreateWithoutUserInput
}

export type CompanyUserUpdateWithWhereUniqueWithoutUserInput = {
  where: CompanyUserWhereUniqueInput
  data: CompanyUserUpdateWithoutUserInput
}

export type CompanyUserUpdateManyWithWhereWithoutUserInput = {
  where: CompanyUserScalarWhereInput
  data: CompanyUserUpdateManyMutationInput
}

export type CompanyUserScalarWhereInput = {
  AND?: CompanyUserScalarWhereInput[]
  OR?: CompanyUserScalarWhereInput[]
  NOT?: CompanyUserScalarWhereInput[]
  companyId?: IntFilter
  userId?: IntFilter
  dummyField?: StringFilter
}

export type PropertyUserUpsertWithWhereUniqueWithoutUserInput = {
  where: PropertyUserWhereUniqueInput
  update: PropertyUserUpdateWithoutUserInput
  create: PropertyUserCreateWithoutUserInput
}

export type PropertyUserUpdateWithWhereUniqueWithoutUserInput = {
  where: PropertyUserWhereUniqueInput
  data: PropertyUserUpdateWithoutUserInput
}

export type PropertyUserUpdateManyWithWhereWithoutUserInput = {
  where: PropertyUserScalarWhereInput
  data: PropertyUserUpdateManyMutationInput
}

export type PropertyUserScalarWhereInput = {
  AND?: PropertyUserScalarWhereInput[]
  OR?: PropertyUserScalarWhereInput[]
  NOT?: PropertyUserScalarWhereInput[]
  id?: IntFilter
  dummyField?: StringFilter
  propertyId?: IntFilter
  userId?: IntFilter
}

export type CompanyUpsertWithWhereUniqueWithoutPropertyUsersInput = {
  where: CompanyWhereUniqueInput
  update: CompanyUpdateWithoutPropertyUsersInput
  create: CompanyCreateWithoutPropertyUsersInput
}

export type CompanyUpdateWithWhereUniqueWithoutPropertyUsersInput = {
  where: CompanyWhereUniqueInput
  data: CompanyUpdateWithoutPropertyUsersInput
}

export type CompanyUpdateManyWithWhereWithoutPropertyUsersInput = {
  where: CompanyScalarWhereInput
  data: CompanyUpdateManyMutationInput
}

export type CompanyScalarWhereInput = {
  AND?: CompanyScalarWhereInput[]
  OR?: CompanyScalarWhereInput[]
  NOT?: CompanyScalarWhereInput[]
  id?: IntFilter
  name?: StringFilter
}

export type CompanyUserCreateWithoutCompanyInput = {
  dummyField: string
  user: UserCreateNestedOneWithoutEmployedByInput
}

export type CompanyUserUncheckedCreateWithoutCompanyInput = {
  userId: number
  dummyField: string
}

export type CompanyUserCreateOrConnectWithoutCompanyInput = {
  where: CompanyUserWhereUniqueInput
  create: CompanyUserCreateWithoutCompanyInput
}

export type CompanyUserCreateManyCompanyInputEnvelope = {
  data: CompanyUserCreateManyCompanyInput[]
  skipDuplicates?: boolean
}

export type UserCreateWithoutCompaniesInput = {
  username: string
  employedBy?: CompanyUserCreateNestedManyWithoutUserInput
  properties?: PropertyUserCreateNestedManyWithoutUserInput
}

export type UserUncheckedCreateWithoutCompaniesInput = {
  id?: number
  username: string
  employedBy?: CompanyUserUncheckedCreateNestedManyWithoutUserInput
  properties?: PropertyUserUncheckedCreateNestedManyWithoutUserInput
}

export type UserCreateOrConnectWithoutCompaniesInput = {
  where: UserWhereUniqueInput
  create: UserCreateWithoutCompaniesInput
}

export type PropertyCreateWithoutCompanyInput = {
  name: string
  users?: PropertyUserCreateNestedManyWithoutPropertyInput
}

export type PropertyUncheckedCreateWithoutCompanyInput = {
  id?: number
  name: string
  users?: PropertyUserUncheckedCreateNestedManyWithoutPropertyInput
}

export type PropertyCreateOrConnectWithoutCompanyInput = {
  where: PropertyWhereUniqueInput
  create: PropertyCreateWithoutCompanyInput
}

export type PropertyCreateManyCompanyInputEnvelope = {
  data: PropertyCreateManyCompanyInput[]
  skipDuplicates?: boolean
}

export type CompanyUserUpsertWithWhereUniqueWithoutCompanyInput = {
  where: CompanyUserWhereUniqueInput
  update: CompanyUserUpdateWithoutCompanyInput
  create: CompanyUserCreateWithoutCompanyInput
}

export type CompanyUserUpdateWithWhereUniqueWithoutCompanyInput = {
  where: CompanyUserWhereUniqueInput
  data: CompanyUserUpdateWithoutCompanyInput
}

export type CompanyUserUpdateManyWithWhereWithoutCompanyInput = {
  where: CompanyUserScalarWhereInput
  data: CompanyUserUpdateManyMutationInput
}

export type UserUpsertWithWhereUniqueWithoutCompaniesInput = {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutCompaniesInput
  create: UserCreateWithoutCompaniesInput
}

export type UserUpdateWithWhereUniqueWithoutCompaniesInput = {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutCompaniesInput
}

export type UserUpdateManyWithWhereWithoutCompaniesInput = {
  where: UserScalarWhereInput
  data: UserUpdateManyMutationInput
}

export type UserScalarWhereInput = {
  AND?: UserScalarWhereInput[]
  OR?: UserScalarWhereInput[]
  NOT?: UserScalarWhereInput[]
  id?: IntFilter
  username?: StringFilter
}

export type PropertyUpsertWithWhereUniqueWithoutCompanyInput = {
  where: PropertyWhereUniqueInput
  update: PropertyUpdateWithoutCompanyInput
  create: PropertyCreateWithoutCompanyInput
}

export type PropertyUpdateWithWhereUniqueWithoutCompanyInput = {
  where: PropertyWhereUniqueInput
  data: PropertyUpdateWithoutCompanyInput
}

export type PropertyUpdateManyWithWhereWithoutCompanyInput = {
  where: PropertyScalarWhereInput
  data: PropertyUpdateManyMutationInput
}

export type PropertyScalarWhereInput = {
  AND?: PropertyScalarWhereInput[]
  OR?: PropertyScalarWhereInput[]
  NOT?: PropertyScalarWhereInput[]
  id?: IntFilter
  name?: StringFilter
  companyId?: IntFilter
}

export type CompanyCreateWithoutCompanyUsersInput = {
  name: string
  propertyUsers?: UserCreateNestedManyWithoutCompaniesInput
  properties?: PropertyCreateNestedManyWithoutCompanyInput
}

export type CompanyUncheckedCreateWithoutCompanyUsersInput = {
  id?: number
  name: string
  propertyUsers?: UserUncheckedCreateNestedManyWithoutCompaniesInput
  properties?: PropertyUncheckedCreateNestedManyWithoutCompanyInput
}

export type CompanyCreateOrConnectWithoutCompanyUsersInput = {
  where: CompanyWhereUniqueInput
  create: CompanyCreateWithoutCompanyUsersInput
}

export type UserCreateWithoutEmployedByInput = {
  username: string
  properties?: PropertyUserCreateNestedManyWithoutUserInput
  companies?: CompanyCreateNestedManyWithoutPropertyUsersInput
}

export type UserUncheckedCreateWithoutEmployedByInput = {
  id?: number
  username: string
  properties?: PropertyUserUncheckedCreateNestedManyWithoutUserInput
  companies?: CompanyUncheckedCreateNestedManyWithoutPropertyUsersInput
}

export type UserCreateOrConnectWithoutEmployedByInput = {
  where: UserWhereUniqueInput
  create: UserCreateWithoutEmployedByInput
}

export type CompanyUpsertWithoutCompanyUsersInput = {
  update: CompanyUpdateWithoutCompanyUsersInput
  create: CompanyCreateWithoutCompanyUsersInput
  where?: CompanyWhereInput
}

export type CompanyUpdateToOneWithWhereWithoutCompanyUsersInput = {
  where?: CompanyWhereInput
  data: CompanyUpdateWithoutCompanyUsersInput
}

export type CompanyUpdateWithoutCompanyUsersInput = {
  name?: StringFieldUpdateOperationsInput
  propertyUsers?: UserUpdateManyWithoutCompaniesNestedInput
  properties?: PropertyUpdateManyWithoutCompanyNestedInput
}

export type CompanyUncheckedUpdateWithoutCompanyUsersInput = {
  id?: IntFieldUpdateOperationsInput
  name?: StringFieldUpdateOperationsInput
  propertyUsers?: UserUncheckedUpdateManyWithoutCompaniesNestedInput
  properties?: PropertyUncheckedUpdateManyWithoutCompanyNestedInput
}

export type UserUpsertWithoutEmployedByInput = {
  update: UserUpdateWithoutEmployedByInput
  create: UserCreateWithoutEmployedByInput
  where?: UserWhereInput
}

export type UserUpdateToOneWithWhereWithoutEmployedByInput = {
  where?: UserWhereInput
  data: UserUpdateWithoutEmployedByInput
}

export type UserUpdateWithoutEmployedByInput = {
  username?: StringFieldUpdateOperationsInput
  properties?: PropertyUserUpdateManyWithoutUserNestedInput
  companies?: CompanyUpdateManyWithoutPropertyUsersNestedInput
}

export type UserUncheckedUpdateWithoutEmployedByInput = {
  id?: IntFieldUpdateOperationsInput
  username?: StringFieldUpdateOperationsInput
  properties?: PropertyUserUncheckedUpdateManyWithoutUserNestedInput
  companies?: CompanyUncheckedUpdateManyWithoutPropertyUsersNestedInput
}

export type PropertyUserCreateWithoutRolesInput = {
  dummyField: string
  property: PropertyCreateNestedOneWithoutUsersInput
  user: UserCreateNestedOneWithoutPropertiesInput
}

export type PropertyUserUncheckedCreateWithoutRolesInput = {
  id?: number
  dummyField: string
  propertyId: number
  userId: number
}

export type PropertyUserCreateOrConnectWithoutRolesInput = {
  where: PropertyUserWhereUniqueInput
  create: PropertyUserCreateWithoutRolesInput
}

export type PropertyUserUpsertWithoutRolesInput = {
  update: PropertyUserUpdateWithoutRolesInput
  create: PropertyUserCreateWithoutRolesInput
  where?: PropertyUserWhereInput
}

export type PropertyUserUpdateToOneWithWhereWithoutRolesInput = {
  where?: PropertyUserWhereInput
  data: PropertyUserUpdateWithoutRolesInput
}

export type PropertyUserUpdateWithoutRolesInput = {
  dummyField?: StringFieldUpdateOperationsInput
  property?: PropertyUpdateOneRequiredWithoutUsersNestedInput
  user?: UserUpdateOneRequiredWithoutPropertiesNestedInput
}

export type PropertyUserUncheckedUpdateWithoutRolesInput = {
  id?: IntFieldUpdateOperationsInput
  dummyField?: StringFieldUpdateOperationsInput
  propertyId?: IntFieldUpdateOperationsInput
  userId?: IntFieldUpdateOperationsInput
}

export type PropertyCreateWithoutUsersInput = {
  name: string
  company: CompanyCreateNestedOneWithoutPropertiesInput
}

export type PropertyUncheckedCreateWithoutUsersInput = {
  id?: number
  name: string
  companyId: number
}

export type PropertyCreateOrConnectWithoutUsersInput = {
  where: PropertyWhereUniqueInput
  create: PropertyCreateWithoutUsersInput
}

export type UserCreateWithoutPropertiesInput = {
  username: string
  employedBy?: CompanyUserCreateNestedManyWithoutUserInput
  companies?: CompanyCreateNestedManyWithoutPropertyUsersInput
}

export type UserUncheckedCreateWithoutPropertiesInput = {
  id?: number
  username: string
  employedBy?: CompanyUserUncheckedCreateNestedManyWithoutUserInput
  companies?: CompanyUncheckedCreateNestedManyWithoutPropertyUsersInput
}

export type UserCreateOrConnectWithoutPropertiesInput = {
  where: UserWhereUniqueInput
  create: UserCreateWithoutPropertiesInput
}

export type PropertyUserRoleCreateWithoutUserInput = {
  type: PropertyUserRoleType
}

export type PropertyUserRoleUncheckedCreateWithoutUserInput = {
  id?: number
  type: PropertyUserRoleType
}

export type PropertyUserRoleCreateOrConnectWithoutUserInput = {
  where: PropertyUserRoleWhereUniqueInput
  create: PropertyUserRoleCreateWithoutUserInput
}

export type PropertyUserRoleCreateManyUserInputEnvelope = {
  data: PropertyUserRoleCreateManyUserInput[]
  skipDuplicates?: boolean
}

export type PropertyUpsertWithoutUsersInput = {
  update: PropertyUpdateWithoutUsersInput
  create: PropertyCreateWithoutUsersInput
  where?: PropertyWhereInput
}

export type PropertyUpdateToOneWithWhereWithoutUsersInput = {
  where?: PropertyWhereInput
  data: PropertyUpdateWithoutUsersInput
}

export type PropertyUpdateWithoutUsersInput = {
  name?: StringFieldUpdateOperationsInput
  company?: CompanyUpdateOneRequiredWithoutPropertiesNestedInput
}

export type PropertyUncheckedUpdateWithoutUsersInput = {
  id?: IntFieldUpdateOperationsInput
  name?: StringFieldUpdateOperationsInput
  companyId?: IntFieldUpdateOperationsInput
}

export type UserUpsertWithoutPropertiesInput = {
  update: UserUpdateWithoutPropertiesInput
  create: UserCreateWithoutPropertiesInput
  where?: UserWhereInput
}

export type UserUpdateToOneWithWhereWithoutPropertiesInput = {
  where?: UserWhereInput
  data: UserUpdateWithoutPropertiesInput
}

export type UserUpdateWithoutPropertiesInput = {
  username?: StringFieldUpdateOperationsInput
  employedBy?: CompanyUserUpdateManyWithoutUserNestedInput
  companies?: CompanyUpdateManyWithoutPropertyUsersNestedInput
}

export type UserUncheckedUpdateWithoutPropertiesInput = {
  id?: IntFieldUpdateOperationsInput
  username?: StringFieldUpdateOperationsInput
  employedBy?: CompanyUserUncheckedUpdateManyWithoutUserNestedInput
  companies?: CompanyUncheckedUpdateManyWithoutPropertyUsersNestedInput
}

export type PropertyUserRoleUpsertWithWhereUniqueWithoutUserInput = {
  where: PropertyUserRoleWhereUniqueInput
  update: PropertyUserRoleUpdateWithoutUserInput
  create: PropertyUserRoleCreateWithoutUserInput
}

export type PropertyUserRoleUpdateWithWhereUniqueWithoutUserInput = {
  where: PropertyUserRoleWhereUniqueInput
  data: PropertyUserRoleUpdateWithoutUserInput
}

export type PropertyUserRoleUpdateManyWithWhereWithoutUserInput = {
  where: PropertyUserRoleScalarWhereInput
  data: PropertyUserRoleUpdateManyMutationInput
}

export type PropertyUserRoleScalarWhereInput = {
  AND?: PropertyUserRoleScalarWhereInput[]
  OR?: PropertyUserRoleScalarWhereInput[]
  NOT?: PropertyUserRoleScalarWhereInput[]
  id?: IntFilter
  type?: EnumPropertyUserRoleTypeFilter
  userId?: IntFilter
}

export type PropertyUserCreateWithoutPropertyInput = {
  dummyField: string
  user: UserCreateNestedOneWithoutPropertiesInput
  roles?: PropertyUserRoleCreateNestedManyWithoutUserInput
}

export type PropertyUserUncheckedCreateWithoutPropertyInput = {
  id?: number
  dummyField: string
  userId: number
  roles?: PropertyUserRoleUncheckedCreateNestedManyWithoutUserInput
}

export type PropertyUserCreateOrConnectWithoutPropertyInput = {
  where: PropertyUserWhereUniqueInput
  create: PropertyUserCreateWithoutPropertyInput
}

export type PropertyUserCreateManyPropertyInputEnvelope = {
  data: PropertyUserCreateManyPropertyInput[]
  skipDuplicates?: boolean
}

export type CompanyCreateWithoutPropertiesInput = {
  name: string
  companyUsers?: CompanyUserCreateNestedManyWithoutCompanyInput
  propertyUsers?: UserCreateNestedManyWithoutCompaniesInput
}

export type CompanyUncheckedCreateWithoutPropertiesInput = {
  id?: number
  name: string
  companyUsers?: CompanyUserUncheckedCreateNestedManyWithoutCompanyInput
  propertyUsers?: UserUncheckedCreateNestedManyWithoutCompaniesInput
}

export type CompanyCreateOrConnectWithoutPropertiesInput = {
  where: CompanyWhereUniqueInput
  create: CompanyCreateWithoutPropertiesInput
}

export type PropertyUserUpsertWithWhereUniqueWithoutPropertyInput = {
  where: PropertyUserWhereUniqueInput
  update: PropertyUserUpdateWithoutPropertyInput
  create: PropertyUserCreateWithoutPropertyInput
}

export type PropertyUserUpdateWithWhereUniqueWithoutPropertyInput = {
  where: PropertyUserWhereUniqueInput
  data: PropertyUserUpdateWithoutPropertyInput
}

export type PropertyUserUpdateManyWithWhereWithoutPropertyInput = {
  where: PropertyUserScalarWhereInput
  data: PropertyUserUpdateManyMutationInput
}

export type CompanyUpsertWithoutPropertiesInput = {
  update: CompanyUpdateWithoutPropertiesInput
  create: CompanyCreateWithoutPropertiesInput
  where?: CompanyWhereInput
}

export type CompanyUpdateToOneWithWhereWithoutPropertiesInput = {
  where?: CompanyWhereInput
  data: CompanyUpdateWithoutPropertiesInput
}

export type CompanyUpdateWithoutPropertiesInput = {
  name?: StringFieldUpdateOperationsInput
  companyUsers?: CompanyUserUpdateManyWithoutCompanyNestedInput
  propertyUsers?: UserUpdateManyWithoutCompaniesNestedInput
}

export type CompanyUncheckedUpdateWithoutPropertiesInput = {
  id?: IntFieldUpdateOperationsInput
  name?: StringFieldUpdateOperationsInput
  companyUsers?: CompanyUserUncheckedUpdateManyWithoutCompanyNestedInput
  propertyUsers?: UserUncheckedUpdateManyWithoutCompaniesNestedInput
}

export type CompanyUserCreateManyUserInput = {
  companyId: number
  dummyField: string
}

export type PropertyUserCreateManyUserInput = {
  id?: number
  dummyField: string
  propertyId: number
}

export type CompanyUserUpdateWithoutUserInput = {
  dummyField?: StringFieldUpdateOperationsInput
  company?: CompanyUpdateOneRequiredWithoutCompanyUsersNestedInput
}

export type CompanyUserUncheckedUpdateWithoutUserInput = {
  companyId?: IntFieldUpdateOperationsInput
  dummyField?: StringFieldUpdateOperationsInput
}

export type CompanyUserUncheckedUpdateManyWithoutUserInput = {
  companyId?: IntFieldUpdateOperationsInput
  dummyField?: StringFieldUpdateOperationsInput
}

export type PropertyUserUpdateWithoutUserInput = {
  dummyField?: StringFieldUpdateOperationsInput
  property?: PropertyUpdateOneRequiredWithoutUsersNestedInput
  roles?: PropertyUserRoleUpdateManyWithoutUserNestedInput
}

export type PropertyUserUncheckedUpdateWithoutUserInput = {
  id?: IntFieldUpdateOperationsInput
  dummyField?: StringFieldUpdateOperationsInput
  propertyId?: IntFieldUpdateOperationsInput
  roles?: PropertyUserRoleUncheckedUpdateManyWithoutUserNestedInput
}

export type PropertyUserUncheckedUpdateManyWithoutUserInput = {
  id?: IntFieldUpdateOperationsInput
  dummyField?: StringFieldUpdateOperationsInput
  propertyId?: IntFieldUpdateOperationsInput
}

export type CompanyUpdateWithoutPropertyUsersInput = {
  name?: StringFieldUpdateOperationsInput
  companyUsers?: CompanyUserUpdateManyWithoutCompanyNestedInput
  properties?: PropertyUpdateManyWithoutCompanyNestedInput
}

export type CompanyUncheckedUpdateWithoutPropertyUsersInput = {
  id?: IntFieldUpdateOperationsInput
  name?: StringFieldUpdateOperationsInput
  companyUsers?: CompanyUserUncheckedUpdateManyWithoutCompanyNestedInput
  properties?: PropertyUncheckedUpdateManyWithoutCompanyNestedInput
}

export type CompanyUncheckedUpdateManyWithoutPropertyUsersInput = {
  id?: IntFieldUpdateOperationsInput
  name?: StringFieldUpdateOperationsInput
}

export type CompanyUserCreateManyCompanyInput = {
  userId: number
  dummyField: string
}

export type PropertyCreateManyCompanyInput = {
  id?: number
  name: string
}

export type CompanyUserUpdateWithoutCompanyInput = {
  dummyField?: StringFieldUpdateOperationsInput
  user?: UserUpdateOneRequiredWithoutEmployedByNestedInput
}

export type CompanyUserUncheckedUpdateWithoutCompanyInput = {
  userId?: IntFieldUpdateOperationsInput
  dummyField?: StringFieldUpdateOperationsInput
}

export type CompanyUserUncheckedUpdateManyWithoutCompanyInput = {
  userId?: IntFieldUpdateOperationsInput
  dummyField?: StringFieldUpdateOperationsInput
}

export type UserUpdateWithoutCompaniesInput = {
  username?: StringFieldUpdateOperationsInput
  employedBy?: CompanyUserUpdateManyWithoutUserNestedInput
  properties?: PropertyUserUpdateManyWithoutUserNestedInput
}

export type UserUncheckedUpdateWithoutCompaniesInput = {
  id?: IntFieldUpdateOperationsInput
  username?: StringFieldUpdateOperationsInput
  employedBy?: CompanyUserUncheckedUpdateManyWithoutUserNestedInput
  properties?: PropertyUserUncheckedUpdateManyWithoutUserNestedInput
}

export type UserUncheckedUpdateManyWithoutCompaniesInput = {
  id?: IntFieldUpdateOperationsInput
  username?: StringFieldUpdateOperationsInput
}

export type PropertyUpdateWithoutCompanyInput = {
  name?: StringFieldUpdateOperationsInput
  users?: PropertyUserUpdateManyWithoutPropertyNestedInput
}

export type PropertyUncheckedUpdateWithoutCompanyInput = {
  id?: IntFieldUpdateOperationsInput
  name?: StringFieldUpdateOperationsInput
  users?: PropertyUserUncheckedUpdateManyWithoutPropertyNestedInput
}

export type PropertyUncheckedUpdateManyWithoutCompanyInput = {
  id?: IntFieldUpdateOperationsInput
  name?: StringFieldUpdateOperationsInput
}

export type PropertyUserRoleCreateManyUserInput = {
  id?: number
  type: PropertyUserRoleType
}

export type PropertyUserRoleUpdateWithoutUserInput = {
  type?: EnumPropertyUserRoleTypeFieldUpdateOperationsInput
}

export type PropertyUserRoleUncheckedUpdateWithoutUserInput = {
  id?: IntFieldUpdateOperationsInput
  type?: EnumPropertyUserRoleTypeFieldUpdateOperationsInput
}

export type PropertyUserRoleUncheckedUpdateManyWithoutUserInput = {
  id?: IntFieldUpdateOperationsInput
  type?: EnumPropertyUserRoleTypeFieldUpdateOperationsInput
}

export type PropertyUserCreateManyPropertyInput = {
  id?: number
  dummyField: string
  userId: number
}

export type PropertyUserUpdateWithoutPropertyInput = {
  dummyField?: StringFieldUpdateOperationsInput
  user?: UserUpdateOneRequiredWithoutPropertiesNestedInput
  roles?: PropertyUserRoleUpdateManyWithoutUserNestedInput
}

export type PropertyUserUncheckedUpdateWithoutPropertyInput = {
  id?: IntFieldUpdateOperationsInput
  dummyField?: StringFieldUpdateOperationsInput
  userId?: IntFieldUpdateOperationsInput
  roles?: PropertyUserRoleUncheckedUpdateManyWithoutUserNestedInput
}

export type PropertyUserUncheckedUpdateManyWithoutPropertyInput = {
  id?: IntFieldUpdateOperationsInput
  dummyField?: StringFieldUpdateOperationsInput
  userId?: IntFieldUpdateOperationsInput
}

export enum TransactionIsolationLevel {
  ReadUncommitted = 'ReadUncommitted',
  ReadCommitted = 'ReadCommitted',
  RepeatableRead = 'RepeatableRead',
  Serializable = 'Serializable',
}
export enum UserScalarFieldEnum {
  id = 'id',
  username = 'username',
}
export enum CompanyScalarFieldEnum {
  id = 'id',
  name = 'name',
}
export enum CompanyUserScalarFieldEnum {
  companyId = 'companyId',
  userId = 'userId',
  dummyField = 'dummyField',
}
export enum PropertyUserRoleScalarFieldEnum {
  id = 'id',
  type = 'type',
  userId = 'userId',
}
export enum PropertyUserScalarFieldEnum {
  id = 'id',
  dummyField = 'dummyField',
  propertyId = 'propertyId',
  userId = 'userId',
}
export enum PropertyScalarFieldEnum {
  id = 'id',
  name = 'name',
  companyId = 'companyId',
}
export enum SortOrder {
  asc = 'asc',
  desc = 'desc',
}
export enum PropertyUserRoleType {
  Owner = 'Owner',
  Administrator = 'Administrator',
}
