import gql from 'graphql-tag'

export default gql`
  """
  @@allow('all', true)
  """
  type CompanyUser {
    companyId: Int!
    userId: Int!
    dummyField: String!
    company: Company!
    user: User!
  }

  type Query {
    findUniqueCompanyUser(where: CompanyUserWhereUniqueInput!): CompanyUser
    findFirstCompanyUser(
      where: CompanyUserWhereInput
      orderBy: [CompanyUserOrderByWithRelationInput]
      cursor: CompanyUserWhereUniqueInput
      take: Int
      skip: Int
      distinct: [CompanyUserScalarFieldEnum]
    ): CompanyUser
    findManyCompanyUser(
      where: CompanyUserWhereInput
      orderBy: [CompanyUserOrderByWithRelationInput]
      cursor: CompanyUserWhereUniqueInput
      take: Int
      skip: Int
      distinct: [CompanyUserScalarFieldEnum]
    ): [CompanyUser!]!
    findManyCompanyUserCount(
      where: CompanyUserWhereInput
      orderBy: [CompanyUserOrderByWithRelationInput]
      cursor: CompanyUserWhereUniqueInput
      take: Int
      skip: Int
      distinct: [CompanyUserScalarFieldEnum]
    ): Int!
    aggregateCompanyUser(
      where: CompanyUserWhereInput
      orderBy: [CompanyUserOrderByWithRelationInput]
      cursor: CompanyUserWhereUniqueInput
      take: Int
      skip: Int
    ): AggregateCompanyUser
  }

  type Mutation {
    createOneCompanyUser(data: CompanyUserCreateInput!): CompanyUser!
    updateOneCompanyUser(
      data: CompanyUserUpdateInput!
      where: CompanyUserWhereUniqueInput!
    ): CompanyUser!
    deleteOneCompanyUser(where: CompanyUserWhereUniqueInput!): CompanyUser
    upsertOneCompanyUser(
      where: CompanyUserWhereUniqueInput!
      create: CompanyUserCreateInput!
      update: CompanyUserUpdateInput!
    ): CompanyUser
    deleteManyCompanyUser(where: CompanyUserWhereInput): BatchPayload
    updateManyCompanyUser(
      data: CompanyUserUpdateManyMutationInput!
      where: CompanyUserWhereInput
    ): BatchPayload
  }
`
