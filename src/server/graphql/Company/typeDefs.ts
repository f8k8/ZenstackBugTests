import gql from 'graphql-tag'

export default gql`
  """
  @@allow('all', true)
  """
  type Company {
    id: Int!
    name: String!
    companyUsers(
      where: CompanyUserWhereInput
      orderBy: [CompanyUserOrderByWithRelationInput]
      cursor: CompanyUserWhereUniqueInput
      take: Int
      skip: Int
      distinct: [CompanyUserScalarFieldEnum]
    ): [CompanyUser!]!
    propertyUsers(
      where: UserWhereInput
      orderBy: [UserOrderByWithRelationInput]
      cursor: UserWhereUniqueInput
      take: Int
      skip: Int
      distinct: [UserScalarFieldEnum]
    ): [User!]!
    properties(
      where: PropertyWhereInput
      orderBy: [PropertyOrderByWithRelationInput]
      cursor: PropertyWhereUniqueInput
      take: Int
      skip: Int
      distinct: [PropertyScalarFieldEnum]
    ): [Property!]!
    _count: CompanyCountOutputType!
  }

  type Query {
    findUniqueCompany(where: CompanyWhereUniqueInput!): Company
    findFirstCompany(
      where: CompanyWhereInput
      orderBy: [CompanyOrderByWithRelationInput]
      cursor: CompanyWhereUniqueInput
      take: Int
      skip: Int
      distinct: [CompanyScalarFieldEnum]
    ): Company
    findManyCompany(
      where: CompanyWhereInput
      orderBy: [CompanyOrderByWithRelationInput]
      cursor: CompanyWhereUniqueInput
      take: Int
      skip: Int
      distinct: [CompanyScalarFieldEnum]
    ): [Company!]!
    findManyCompanyCount(
      where: CompanyWhereInput
      orderBy: [CompanyOrderByWithRelationInput]
      cursor: CompanyWhereUniqueInput
      take: Int
      skip: Int
      distinct: [CompanyScalarFieldEnum]
    ): Int!
    aggregateCompany(
      where: CompanyWhereInput
      orderBy: [CompanyOrderByWithRelationInput]
      cursor: CompanyWhereUniqueInput
      take: Int
      skip: Int
    ): AggregateCompany
  }

  type Mutation {
    createOneCompany(data: CompanyCreateInput!): Company!
    updateOneCompany(
      data: CompanyUpdateInput!
      where: CompanyWhereUniqueInput!
    ): Company!
    deleteOneCompany(where: CompanyWhereUniqueInput!): Company
    upsertOneCompany(
      where: CompanyWhereUniqueInput!
      create: CompanyCreateInput!
      update: CompanyUpdateInput!
    ): Company
    deleteManyCompany(where: CompanyWhereInput): BatchPayload
    updateManyCompany(
      data: CompanyUpdateManyMutationInput!
      where: CompanyWhereInput
    ): BatchPayload
  }
`
