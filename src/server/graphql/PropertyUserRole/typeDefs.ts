import gql from 'graphql-tag'

export default gql`
  """
  @@allow('all', true)
  """
  type PropertyUserRole {
    id: Int!
    type: PropertyUserRoleType!
    userId: Int!
    user: PropertyUser!
  }

  type Query {
    findUniquePropertyUserRole(
      where: PropertyUserRoleWhereUniqueInput!
    ): PropertyUserRole
    findFirstPropertyUserRole(
      where: PropertyUserRoleWhereInput
      orderBy: [PropertyUserRoleOrderByWithRelationInput]
      cursor: PropertyUserRoleWhereUniqueInput
      take: Int
      skip: Int
      distinct: [PropertyUserRoleScalarFieldEnum]
    ): PropertyUserRole
    findManyPropertyUserRole(
      where: PropertyUserRoleWhereInput
      orderBy: [PropertyUserRoleOrderByWithRelationInput]
      cursor: PropertyUserRoleWhereUniqueInput
      take: Int
      skip: Int
      distinct: [PropertyUserRoleScalarFieldEnum]
    ): [PropertyUserRole!]!
    findManyPropertyUserRoleCount(
      where: PropertyUserRoleWhereInput
      orderBy: [PropertyUserRoleOrderByWithRelationInput]
      cursor: PropertyUserRoleWhereUniqueInput
      take: Int
      skip: Int
      distinct: [PropertyUserRoleScalarFieldEnum]
    ): Int!
    aggregatePropertyUserRole(
      where: PropertyUserRoleWhereInput
      orderBy: [PropertyUserRoleOrderByWithRelationInput]
      cursor: PropertyUserRoleWhereUniqueInput
      take: Int
      skip: Int
    ): AggregatePropertyUserRole
  }

  type Mutation {
    createOnePropertyUserRole(
      data: PropertyUserRoleCreateInput!
    ): PropertyUserRole!
    updateOnePropertyUserRole(
      data: PropertyUserRoleUpdateInput!
      where: PropertyUserRoleWhereUniqueInput!
    ): PropertyUserRole!
    deleteOnePropertyUserRole(
      where: PropertyUserRoleWhereUniqueInput!
    ): PropertyUserRole
    upsertOnePropertyUserRole(
      where: PropertyUserRoleWhereUniqueInput!
      create: PropertyUserRoleCreateInput!
      update: PropertyUserRoleUpdateInput!
    ): PropertyUserRole
    deleteManyPropertyUserRole(where: PropertyUserRoleWhereInput): BatchPayload
    updateManyPropertyUserRole(
      data: PropertyUserRoleUpdateManyMutationInput!
      where: PropertyUserRoleWhereInput
    ): BatchPayload
  }
`
