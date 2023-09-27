import gql from 'graphql-tag'

export default gql`
  """
  @@allow('all', true)
  """
  type Property {
    id: Int!
    name: String!
    companyId: Int!
    users(
      where: PropertyUserWhereInput
      orderBy: [PropertyUserOrderByWithRelationInput]
      cursor: PropertyUserWhereUniqueInput
      take: Int
      skip: Int
      distinct: [PropertyUserScalarFieldEnum]
    ): [PropertyUser!]!
    company: Company!
    _count: PropertyCountOutputType!
  }

  type Query {
    findUniqueProperty(where: PropertyWhereUniqueInput!): Property
    findFirstProperty(
      where: PropertyWhereInput
      orderBy: [PropertyOrderByWithRelationInput]
      cursor: PropertyWhereUniqueInput
      take: Int
      skip: Int
      distinct: [PropertyScalarFieldEnum]
    ): Property
    findManyProperty(
      where: PropertyWhereInput
      orderBy: [PropertyOrderByWithRelationInput]
      cursor: PropertyWhereUniqueInput
      take: Int
      skip: Int
      distinct: [PropertyScalarFieldEnum]
    ): [Property!]!
    findManyPropertyCount(
      where: PropertyWhereInput
      orderBy: [PropertyOrderByWithRelationInput]
      cursor: PropertyWhereUniqueInput
      take: Int
      skip: Int
      distinct: [PropertyScalarFieldEnum]
    ): Int!
    aggregateProperty(
      where: PropertyWhereInput
      orderBy: [PropertyOrderByWithRelationInput]
      cursor: PropertyWhereUniqueInput
      take: Int
      skip: Int
    ): AggregateProperty
  }

  type Mutation {
    createOneProperty(data: PropertyCreateInput!): Property!
    updateOneProperty(
      data: PropertyUpdateInput!
      where: PropertyWhereUniqueInput!
    ): Property!
    deleteOneProperty(where: PropertyWhereUniqueInput!): Property
    upsertOneProperty(
      where: PropertyWhereUniqueInput!
      create: PropertyCreateInput!
      update: PropertyUpdateInput!
    ): Property
    deleteManyProperty(where: PropertyWhereInput): BatchPayload
    updateManyProperty(
      data: PropertyUpdateManyMutationInput!
      where: PropertyWhereInput
    ): BatchPayload
  }
`
