import gql from 'graphql-tag'

export default gql`
  """
  @@allow('all', true)
  """
  type User {
    id: Int!
    username: String!
    employedBy(
      where: CompanyUserWhereInput
      orderBy: [CompanyUserOrderByWithRelationInput]
      cursor: CompanyUserWhereUniqueInput
      take: Int
      skip: Int
      distinct: [CompanyUserScalarFieldEnum]
    ): [CompanyUser!]!
    properties(
      where: PropertyUserWhereInput
      orderBy: [PropertyUserOrderByWithRelationInput]
      cursor: PropertyUserWhereUniqueInput
      take: Int
      skip: Int
      distinct: [PropertyUserScalarFieldEnum]
    ): [PropertyUser!]!
    companies(
      where: CompanyWhereInput
      orderBy: [CompanyOrderByWithRelationInput]
      cursor: CompanyWhereUniqueInput
      take: Int
      skip: Int
      distinct: [CompanyScalarFieldEnum]
    ): [Company!]!
    _count: UserCountOutputType!
  }

  type Query {
    findUniqueUser(where: UserWhereUniqueInput!): User
    findFirstUser(
      where: UserWhereInput
      orderBy: [UserOrderByWithRelationInput]
      cursor: UserWhereUniqueInput
      take: Int
      skip: Int
      distinct: [UserScalarFieldEnum]
    ): User
    findManyUser(
      where: UserWhereInput
      orderBy: [UserOrderByWithRelationInput]
      cursor: UserWhereUniqueInput
      take: Int
      skip: Int
      distinct: [UserScalarFieldEnum]
    ): [User!]!
    findManyUserCount(
      where: UserWhereInput
      orderBy: [UserOrderByWithRelationInput]
      cursor: UserWhereUniqueInput
      take: Int
      skip: Int
      distinct: [UserScalarFieldEnum]
    ): Int!
    aggregateUser(
      where: UserWhereInput
      orderBy: [UserOrderByWithRelationInput]
      cursor: UserWhereUniqueInput
      take: Int
      skip: Int
    ): AggregateUser
  }

  type Mutation {
    createOneUser(data: UserCreateInput!): User!
    updateOneUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User!
    deleteOneUser(where: UserWhereUniqueInput!): User
    upsertOneUser(
      where: UserWhereUniqueInput!
      create: UserCreateInput!
      update: UserUpdateInput!
    ): User
    deleteManyUser(where: UserWhereInput): BatchPayload
    updateManyUser(
      data: UserUpdateManyMutationInput!
      where: UserWhereInput
    ): BatchPayload
  }
`
