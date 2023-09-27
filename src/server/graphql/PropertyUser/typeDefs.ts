import gql from 'graphql-tag'

export default gql`
  """
  @@allow('all', true)
  """
  type PropertyUser {
    id: Int!
    dummyField: String!
    propertyId: Int!
    userId: Int!
    property: Property!
    user: User!
    roles(
      where: PropertyUserRoleWhereInput
      orderBy: [PropertyUserRoleOrderByWithRelationInput]
      cursor: PropertyUserRoleWhereUniqueInput
      take: Int
      skip: Int
      distinct: [PropertyUserRoleScalarFieldEnum]
    ): [PropertyUserRole!]!
    _count: PropertyUserCountOutputType!
  }

  type Query {
    findUniquePropertyUser(where: PropertyUserWhereUniqueInput!): PropertyUser
    findFirstPropertyUser(
      where: PropertyUserWhereInput
      orderBy: [PropertyUserOrderByWithRelationInput]
      cursor: PropertyUserWhereUniqueInput
      take: Int
      skip: Int
      distinct: [PropertyUserScalarFieldEnum]
    ): PropertyUser
    findManyPropertyUser(
      where: PropertyUserWhereInput
      orderBy: [PropertyUserOrderByWithRelationInput]
      cursor: PropertyUserWhereUniqueInput
      take: Int
      skip: Int
      distinct: [PropertyUserScalarFieldEnum]
    ): [PropertyUser!]!
    findManyPropertyUserCount(
      where: PropertyUserWhereInput
      orderBy: [PropertyUserOrderByWithRelationInput]
      cursor: PropertyUserWhereUniqueInput
      take: Int
      skip: Int
      distinct: [PropertyUserScalarFieldEnum]
    ): Int!
    aggregatePropertyUser(
      where: PropertyUserWhereInput
      orderBy: [PropertyUserOrderByWithRelationInput]
      cursor: PropertyUserWhereUniqueInput
      take: Int
      skip: Int
    ): AggregatePropertyUser
  }

  type Mutation {
    createOnePropertyUser(data: PropertyUserCreateInput!): PropertyUser!
    updateOnePropertyUser(
      data: PropertyUserUpdateInput!
      where: PropertyUserWhereUniqueInput!
    ): PropertyUser!
    deleteOnePropertyUser(where: PropertyUserWhereUniqueInput!): PropertyUser
    upsertOnePropertyUser(
      where: PropertyUserWhereUniqueInput!
      create: PropertyUserCreateInput!
      update: PropertyUserUpdateInput!
    ): PropertyUser
    deleteManyPropertyUser(where: PropertyUserWhereInput): BatchPayload
    updateManyPropertyUser(
      data: PropertyUserUpdateManyMutationInput!
      where: PropertyUserWhereInput
    ): BatchPayload
  }
`
