import gql from 'graphql-tag'

export default gql`
  scalar DateTime
  type BatchPayload {
    count: Int!
  }

  enum TransactionIsolationLevel {
    ReadUncommitted
    ReadCommitted
    RepeatableRead
    Serializable
  }

  enum UserScalarFieldEnum {
    id
    username
  }

  enum CompanyScalarFieldEnum {
    id
    name
  }

  enum CompanyUserScalarFieldEnum {
    companyId
    userId
    dummyField
  }

  enum PropertyUserRoleScalarFieldEnum {
    id
    type
    userId
  }

  enum PropertyUserScalarFieldEnum {
    id
    dummyField
    propertyId
    userId
  }

  enum PropertyScalarFieldEnum {
    id
    name
    companyId
  }

  enum SortOrder {
    asc
    desc
  }

  enum PropertyUserRoleType {
    Owner
    Administrator
  }

  input UserWhereInput {
    AND: [UserWhereInput!]
    OR: [UserWhereInput!]
    NOT: [UserWhereInput!]
    id: IntFilter
    username: StringFilter
    employedBy: CompanyUserListRelationFilter
    properties: PropertyUserListRelationFilter
    companies: CompanyListRelationFilter
  }

  input UserOrderByWithRelationInput {
    id: SortOrder
    username: SortOrder
    employedBy: CompanyUserOrderByRelationAggregateInput
    properties: PropertyUserOrderByRelationAggregateInput
    companies: CompanyOrderByRelationAggregateInput
  }

  input UserWhereUniqueInput {
    id: Int
    username: String
    AND: [UserWhereInput!]
    OR: [UserWhereInput!]
    NOT: [UserWhereInput!]
    employedBy: CompanyUserListRelationFilter
    properties: PropertyUserListRelationFilter
    companies: CompanyListRelationFilter
  }

  input UserOrderByWithAggregationInput {
    id: SortOrder
    username: SortOrder
    _count: UserCountOrderByAggregateInput
    _avg: UserAvgOrderByAggregateInput
    _max: UserMaxOrderByAggregateInput
    _min: UserMinOrderByAggregateInput
    _sum: UserSumOrderByAggregateInput
  }

  input UserScalarWhereWithAggregatesInput {
    AND: [UserScalarWhereWithAggregatesInput!]
    OR: [UserScalarWhereWithAggregatesInput!]
    NOT: [UserScalarWhereWithAggregatesInput!]
    id: IntWithAggregatesFilter
    username: StringWithAggregatesFilter
  }

  input CompanyWhereInput {
    AND: [CompanyWhereInput!]
    OR: [CompanyWhereInput!]
    NOT: [CompanyWhereInput!]
    id: IntFilter
    name: StringFilter
    companyUsers: CompanyUserListRelationFilter
    propertyUsers: UserListRelationFilter
    properties: PropertyListRelationFilter
  }

  input CompanyOrderByWithRelationInput {
    id: SortOrder
    name: SortOrder
    companyUsers: CompanyUserOrderByRelationAggregateInput
    propertyUsers: UserOrderByRelationAggregateInput
    properties: PropertyOrderByRelationAggregateInput
  }

  input CompanyWhereUniqueInput {
    id: Int
    AND: [CompanyWhereInput!]
    OR: [CompanyWhereInput!]
    NOT: [CompanyWhereInput!]
    name: StringFilter
    companyUsers: CompanyUserListRelationFilter
    propertyUsers: UserListRelationFilter
    properties: PropertyListRelationFilter
  }

  input CompanyOrderByWithAggregationInput {
    id: SortOrder
    name: SortOrder
    _count: CompanyCountOrderByAggregateInput
    _avg: CompanyAvgOrderByAggregateInput
    _max: CompanyMaxOrderByAggregateInput
    _min: CompanyMinOrderByAggregateInput
    _sum: CompanySumOrderByAggregateInput
  }

  input CompanyScalarWhereWithAggregatesInput {
    AND: [CompanyScalarWhereWithAggregatesInput!]
    OR: [CompanyScalarWhereWithAggregatesInput!]
    NOT: [CompanyScalarWhereWithAggregatesInput!]
    id: IntWithAggregatesFilter
    name: StringWithAggregatesFilter
  }

  input CompanyUserWhereInput {
    AND: [CompanyUserWhereInput!]
    OR: [CompanyUserWhereInput!]
    NOT: [CompanyUserWhereInput!]
    companyId: IntFilter
    userId: IntFilter
    dummyField: StringFilter
    company: CompanyRelationFilter
    user: UserRelationFilter
  }

  input CompanyUserOrderByWithRelationInput {
    companyId: SortOrder
    userId: SortOrder
    dummyField: SortOrder
    company: CompanyOrderByWithRelationInput
    user: UserOrderByWithRelationInput
  }

  input CompanyUserWhereUniqueInput {
    companyId_userId: CompanyUserCompanyIdUserIdCompoundUniqueInput
    AND: [CompanyUserWhereInput!]
    OR: [CompanyUserWhereInput!]
    NOT: [CompanyUserWhereInput!]
    companyId: IntFilter
    userId: IntFilter
    dummyField: StringFilter
    company: CompanyRelationFilter
    user: UserRelationFilter
  }

  input CompanyUserOrderByWithAggregationInput {
    companyId: SortOrder
    userId: SortOrder
    dummyField: SortOrder
    _count: CompanyUserCountOrderByAggregateInput
    _avg: CompanyUserAvgOrderByAggregateInput
    _max: CompanyUserMaxOrderByAggregateInput
    _min: CompanyUserMinOrderByAggregateInput
    _sum: CompanyUserSumOrderByAggregateInput
  }

  input CompanyUserScalarWhereWithAggregatesInput {
    AND: [CompanyUserScalarWhereWithAggregatesInput!]
    OR: [CompanyUserScalarWhereWithAggregatesInput!]
    NOT: [CompanyUserScalarWhereWithAggregatesInput!]
    companyId: IntWithAggregatesFilter
    userId: IntWithAggregatesFilter
    dummyField: StringWithAggregatesFilter
  }

  input PropertyUserRoleWhereInput {
    AND: [PropertyUserRoleWhereInput!]
    OR: [PropertyUserRoleWhereInput!]
    NOT: [PropertyUserRoleWhereInput!]
    id: IntFilter
    type: EnumPropertyUserRoleTypeFilter
    userId: IntFilter
    user: PropertyUserRelationFilter
  }

  input PropertyUserRoleOrderByWithRelationInput {
    id: SortOrder
    type: SortOrder
    userId: SortOrder
    user: PropertyUserOrderByWithRelationInput
  }

  input PropertyUserRoleWhereUniqueInput {
    id: Int
    AND: [PropertyUserRoleWhereInput!]
    OR: [PropertyUserRoleWhereInput!]
    NOT: [PropertyUserRoleWhereInput!]
    type: EnumPropertyUserRoleTypeFilter
    userId: IntFilter
    user: PropertyUserRelationFilter
  }

  input PropertyUserRoleOrderByWithAggregationInput {
    id: SortOrder
    type: SortOrder
    userId: SortOrder
    _count: PropertyUserRoleCountOrderByAggregateInput
    _avg: PropertyUserRoleAvgOrderByAggregateInput
    _max: PropertyUserRoleMaxOrderByAggregateInput
    _min: PropertyUserRoleMinOrderByAggregateInput
    _sum: PropertyUserRoleSumOrderByAggregateInput
  }

  input PropertyUserRoleScalarWhereWithAggregatesInput {
    AND: [PropertyUserRoleScalarWhereWithAggregatesInput!]
    OR: [PropertyUserRoleScalarWhereWithAggregatesInput!]
    NOT: [PropertyUserRoleScalarWhereWithAggregatesInput!]
    id: IntWithAggregatesFilter
    type: EnumPropertyUserRoleTypeWithAggregatesFilter
    userId: IntWithAggregatesFilter
  }

  input PropertyUserWhereInput {
    AND: [PropertyUserWhereInput!]
    OR: [PropertyUserWhereInput!]
    NOT: [PropertyUserWhereInput!]
    id: IntFilter
    dummyField: StringFilter
    propertyId: IntFilter
    userId: IntFilter
    property: PropertyRelationFilter
    user: UserRelationFilter
    roles: PropertyUserRoleListRelationFilter
  }

  input PropertyUserOrderByWithRelationInput {
    id: SortOrder
    dummyField: SortOrder
    propertyId: SortOrder
    userId: SortOrder
    property: PropertyOrderByWithRelationInput
    user: UserOrderByWithRelationInput
    roles: PropertyUserRoleOrderByRelationAggregateInput
  }

  input PropertyUserWhereUniqueInput {
    id: Int
    propertyId_userId: PropertyUserPropertyIdUserIdCompoundUniqueInput
    AND: [PropertyUserWhereInput!]
    OR: [PropertyUserWhereInput!]
    NOT: [PropertyUserWhereInput!]
    dummyField: StringFilter
    propertyId: IntFilter
    userId: IntFilter
    property: PropertyRelationFilter
    user: UserRelationFilter
    roles: PropertyUserRoleListRelationFilter
  }

  input PropertyUserOrderByWithAggregationInput {
    id: SortOrder
    dummyField: SortOrder
    propertyId: SortOrder
    userId: SortOrder
    _count: PropertyUserCountOrderByAggregateInput
    _avg: PropertyUserAvgOrderByAggregateInput
    _max: PropertyUserMaxOrderByAggregateInput
    _min: PropertyUserMinOrderByAggregateInput
    _sum: PropertyUserSumOrderByAggregateInput
  }

  input PropertyUserScalarWhereWithAggregatesInput {
    AND: [PropertyUserScalarWhereWithAggregatesInput!]
    OR: [PropertyUserScalarWhereWithAggregatesInput!]
    NOT: [PropertyUserScalarWhereWithAggregatesInput!]
    id: IntWithAggregatesFilter
    dummyField: StringWithAggregatesFilter
    propertyId: IntWithAggregatesFilter
    userId: IntWithAggregatesFilter
  }

  input PropertyWhereInput {
    AND: [PropertyWhereInput!]
    OR: [PropertyWhereInput!]
    NOT: [PropertyWhereInput!]
    id: IntFilter
    name: StringFilter
    companyId: IntFilter
    users: PropertyUserListRelationFilter
    company: CompanyRelationFilter
  }

  input PropertyOrderByWithRelationInput {
    id: SortOrder
    name: SortOrder
    companyId: SortOrder
    users: PropertyUserOrderByRelationAggregateInput
    company: CompanyOrderByWithRelationInput
  }

  input PropertyWhereUniqueInput {
    id: Int
    AND: [PropertyWhereInput!]
    OR: [PropertyWhereInput!]
    NOT: [PropertyWhereInput!]
    name: StringFilter
    companyId: IntFilter
    users: PropertyUserListRelationFilter
    company: CompanyRelationFilter
  }

  input PropertyOrderByWithAggregationInput {
    id: SortOrder
    name: SortOrder
    companyId: SortOrder
    _count: PropertyCountOrderByAggregateInput
    _avg: PropertyAvgOrderByAggregateInput
    _max: PropertyMaxOrderByAggregateInput
    _min: PropertyMinOrderByAggregateInput
    _sum: PropertySumOrderByAggregateInput
  }

  input PropertyScalarWhereWithAggregatesInput {
    AND: [PropertyScalarWhereWithAggregatesInput!]
    OR: [PropertyScalarWhereWithAggregatesInput!]
    NOT: [PropertyScalarWhereWithAggregatesInput!]
    id: IntWithAggregatesFilter
    name: StringWithAggregatesFilter
    companyId: IntWithAggregatesFilter
  }

  input UserCreateInput {
    username: String!
    employedBy: CompanyUserCreateNestedManyWithoutUserInput
    properties: PropertyUserCreateNestedManyWithoutUserInput
    companies: CompanyCreateNestedManyWithoutPropertyUsersInput
  }

  input UserUncheckedCreateInput {
    id: Int
    username: String!
    employedBy: CompanyUserUncheckedCreateNestedManyWithoutUserInput
    properties: PropertyUserUncheckedCreateNestedManyWithoutUserInput
    companies: CompanyUncheckedCreateNestedManyWithoutPropertyUsersInput
  }

  input UserUpdateInput {
    username: StringFieldUpdateOperationsInput
    employedBy: CompanyUserUpdateManyWithoutUserNestedInput
    properties: PropertyUserUpdateManyWithoutUserNestedInput
    companies: CompanyUpdateManyWithoutPropertyUsersNestedInput
  }

  input UserUncheckedUpdateInput {
    id: IntFieldUpdateOperationsInput
    username: StringFieldUpdateOperationsInput
    employedBy: CompanyUserUncheckedUpdateManyWithoutUserNestedInput
    properties: PropertyUserUncheckedUpdateManyWithoutUserNestedInput
    companies: CompanyUncheckedUpdateManyWithoutPropertyUsersNestedInput
  }

  input UserCreateManyInput {
    id: Int
    username: String!
  }

  input UserUpdateManyMutationInput {
    username: StringFieldUpdateOperationsInput
  }

  input UserUncheckedUpdateManyInput {
    id: IntFieldUpdateOperationsInput
    username: StringFieldUpdateOperationsInput
  }

  input CompanyCreateInput {
    name: String!
    companyUsers: CompanyUserCreateNestedManyWithoutCompanyInput
    propertyUsers: UserCreateNestedManyWithoutCompaniesInput
    properties: PropertyCreateNestedManyWithoutCompanyInput
  }

  input CompanyUncheckedCreateInput {
    id: Int
    name: String!
    companyUsers: CompanyUserUncheckedCreateNestedManyWithoutCompanyInput
    propertyUsers: UserUncheckedCreateNestedManyWithoutCompaniesInput
    properties: PropertyUncheckedCreateNestedManyWithoutCompanyInput
  }

  input CompanyUpdateInput {
    name: StringFieldUpdateOperationsInput
    companyUsers: CompanyUserUpdateManyWithoutCompanyNestedInput
    propertyUsers: UserUpdateManyWithoutCompaniesNestedInput
    properties: PropertyUpdateManyWithoutCompanyNestedInput
  }

  input CompanyUncheckedUpdateInput {
    id: IntFieldUpdateOperationsInput
    name: StringFieldUpdateOperationsInput
    companyUsers: CompanyUserUncheckedUpdateManyWithoutCompanyNestedInput
    propertyUsers: UserUncheckedUpdateManyWithoutCompaniesNestedInput
    properties: PropertyUncheckedUpdateManyWithoutCompanyNestedInput
  }

  input CompanyCreateManyInput {
    id: Int
    name: String!
  }

  input CompanyUpdateManyMutationInput {
    name: StringFieldUpdateOperationsInput
  }

  input CompanyUncheckedUpdateManyInput {
    id: IntFieldUpdateOperationsInput
    name: StringFieldUpdateOperationsInput
  }

  input CompanyUserCreateInput {
    dummyField: String!
    company: CompanyCreateNestedOneWithoutCompanyUsersInput!
    user: UserCreateNestedOneWithoutEmployedByInput!
  }

  input CompanyUserUncheckedCreateInput {
    companyId: Int!
    userId: Int!
    dummyField: String!
  }

  input CompanyUserUpdateInput {
    dummyField: StringFieldUpdateOperationsInput
    company: CompanyUpdateOneRequiredWithoutCompanyUsersNestedInput
    user: UserUpdateOneRequiredWithoutEmployedByNestedInput
  }

  input CompanyUserUncheckedUpdateInput {
    companyId: IntFieldUpdateOperationsInput
    userId: IntFieldUpdateOperationsInput
    dummyField: StringFieldUpdateOperationsInput
  }

  input CompanyUserCreateManyInput {
    companyId: Int!
    userId: Int!
    dummyField: String!
  }

  input CompanyUserUpdateManyMutationInput {
    dummyField: StringFieldUpdateOperationsInput
  }

  input CompanyUserUncheckedUpdateManyInput {
    companyId: IntFieldUpdateOperationsInput
    userId: IntFieldUpdateOperationsInput
    dummyField: StringFieldUpdateOperationsInput
  }

  input PropertyUserRoleCreateInput {
    type: PropertyUserRoleType!
    user: PropertyUserCreateNestedOneWithoutRolesInput!
  }

  input PropertyUserRoleUncheckedCreateInput {
    id: Int
    type: PropertyUserRoleType!
    userId: Int!
  }

  input PropertyUserRoleUpdateInput {
    type: EnumPropertyUserRoleTypeFieldUpdateOperationsInput
    user: PropertyUserUpdateOneRequiredWithoutRolesNestedInput
  }

  input PropertyUserRoleUncheckedUpdateInput {
    id: IntFieldUpdateOperationsInput
    type: EnumPropertyUserRoleTypeFieldUpdateOperationsInput
    userId: IntFieldUpdateOperationsInput
  }

  input PropertyUserRoleCreateManyInput {
    id: Int
    type: PropertyUserRoleType!
    userId: Int!
  }

  input PropertyUserRoleUpdateManyMutationInput {
    type: EnumPropertyUserRoleTypeFieldUpdateOperationsInput
  }

  input PropertyUserRoleUncheckedUpdateManyInput {
    id: IntFieldUpdateOperationsInput
    type: EnumPropertyUserRoleTypeFieldUpdateOperationsInput
    userId: IntFieldUpdateOperationsInput
  }

  input PropertyUserCreateInput {
    dummyField: String!
    property: PropertyCreateNestedOneWithoutUsersInput!
    user: UserCreateNestedOneWithoutPropertiesInput!
    roles: PropertyUserRoleCreateNestedManyWithoutUserInput
  }

  input PropertyUserUncheckedCreateInput {
    id: Int
    dummyField: String!
    propertyId: Int!
    userId: Int!
    roles: PropertyUserRoleUncheckedCreateNestedManyWithoutUserInput
  }

  input PropertyUserUpdateInput {
    dummyField: StringFieldUpdateOperationsInput
    property: PropertyUpdateOneRequiredWithoutUsersNestedInput
    user: UserUpdateOneRequiredWithoutPropertiesNestedInput
    roles: PropertyUserRoleUpdateManyWithoutUserNestedInput
  }

  input PropertyUserUncheckedUpdateInput {
    id: IntFieldUpdateOperationsInput
    dummyField: StringFieldUpdateOperationsInput
    propertyId: IntFieldUpdateOperationsInput
    userId: IntFieldUpdateOperationsInput
    roles: PropertyUserRoleUncheckedUpdateManyWithoutUserNestedInput
  }

  input PropertyUserCreateManyInput {
    id: Int
    dummyField: String!
    propertyId: Int!
    userId: Int!
  }

  input PropertyUserUpdateManyMutationInput {
    dummyField: StringFieldUpdateOperationsInput
  }

  input PropertyUserUncheckedUpdateManyInput {
    id: IntFieldUpdateOperationsInput
    dummyField: StringFieldUpdateOperationsInput
    propertyId: IntFieldUpdateOperationsInput
    userId: IntFieldUpdateOperationsInput
  }

  input PropertyCreateInput {
    name: String!
    users: PropertyUserCreateNestedManyWithoutPropertyInput
    company: CompanyCreateNestedOneWithoutPropertiesInput!
  }

  input PropertyUncheckedCreateInput {
    id: Int
    name: String!
    companyId: Int!
    users: PropertyUserUncheckedCreateNestedManyWithoutPropertyInput
  }

  input PropertyUpdateInput {
    name: StringFieldUpdateOperationsInput
    users: PropertyUserUpdateManyWithoutPropertyNestedInput
    company: CompanyUpdateOneRequiredWithoutPropertiesNestedInput
  }

  input PropertyUncheckedUpdateInput {
    id: IntFieldUpdateOperationsInput
    name: StringFieldUpdateOperationsInput
    companyId: IntFieldUpdateOperationsInput
    users: PropertyUserUncheckedUpdateManyWithoutPropertyNestedInput
  }

  input PropertyCreateManyInput {
    id: Int
    name: String!
    companyId: Int!
  }

  input PropertyUpdateManyMutationInput {
    name: StringFieldUpdateOperationsInput
  }

  input PropertyUncheckedUpdateManyInput {
    id: IntFieldUpdateOperationsInput
    name: StringFieldUpdateOperationsInput
    companyId: IntFieldUpdateOperationsInput
  }

  input IntFilter {
    equals: Int
    in: [Int!]
    notIn: [Int!]
    lt: Int
    lte: Int
    gt: Int
    gte: Int
    not: NestedIntFilter
  }

  input StringFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    not: NestedStringFilter
  }

  input CompanyUserListRelationFilter {
    every: CompanyUserWhereInput
    some: CompanyUserWhereInput
    none: CompanyUserWhereInput
  }

  input PropertyUserListRelationFilter {
    every: PropertyUserWhereInput
    some: PropertyUserWhereInput
    none: PropertyUserWhereInput
  }

  input CompanyListRelationFilter {
    every: CompanyWhereInput
    some: CompanyWhereInput
    none: CompanyWhereInput
  }

  input CompanyUserOrderByRelationAggregateInput {
    _count: SortOrder
  }

  input PropertyUserOrderByRelationAggregateInput {
    _count: SortOrder
  }

  input CompanyOrderByRelationAggregateInput {
    _count: SortOrder
  }

  input UserCountOrderByAggregateInput {
    id: SortOrder
    username: SortOrder
  }

  input UserAvgOrderByAggregateInput {
    id: SortOrder
  }

  input UserMaxOrderByAggregateInput {
    id: SortOrder
    username: SortOrder
  }

  input UserMinOrderByAggregateInput {
    id: SortOrder
    username: SortOrder
  }

  input UserSumOrderByAggregateInput {
    id: SortOrder
  }

  input IntWithAggregatesFilter {
    equals: Int
    in: [Int!]
    notIn: [Int!]
    lt: Int
    lte: Int
    gt: Int
    gte: Int
    not: NestedIntWithAggregatesFilter
    _count: NestedIntFilter
    _avg: NestedFloatFilter
    _sum: NestedIntFilter
    _min: NestedIntFilter
    _max: NestedIntFilter
  }

  input StringWithAggregatesFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    not: NestedStringWithAggregatesFilter
    _count: NestedIntFilter
    _min: NestedStringFilter
    _max: NestedStringFilter
  }

  input UserListRelationFilter {
    every: UserWhereInput
    some: UserWhereInput
    none: UserWhereInput
  }

  input PropertyListRelationFilter {
    every: PropertyWhereInput
    some: PropertyWhereInput
    none: PropertyWhereInput
  }

  input UserOrderByRelationAggregateInput {
    _count: SortOrder
  }

  input PropertyOrderByRelationAggregateInput {
    _count: SortOrder
  }

  input CompanyCountOrderByAggregateInput {
    id: SortOrder
    name: SortOrder
  }

  input CompanyAvgOrderByAggregateInput {
    id: SortOrder
  }

  input CompanyMaxOrderByAggregateInput {
    id: SortOrder
    name: SortOrder
  }

  input CompanyMinOrderByAggregateInput {
    id: SortOrder
    name: SortOrder
  }

  input CompanySumOrderByAggregateInput {
    id: SortOrder
  }

  input CompanyRelationFilter {
    is: CompanyWhereInput
    isNot: CompanyWhereInput
  }

  input UserRelationFilter {
    is: UserWhereInput
    isNot: UserWhereInput
  }

  input CompanyUserCompanyIdUserIdCompoundUniqueInput {
    companyId: Int!
    userId: Int!
  }

  input CompanyUserCountOrderByAggregateInput {
    companyId: SortOrder
    userId: SortOrder
    dummyField: SortOrder
  }

  input CompanyUserAvgOrderByAggregateInput {
    companyId: SortOrder
    userId: SortOrder
  }

  input CompanyUserMaxOrderByAggregateInput {
    companyId: SortOrder
    userId: SortOrder
    dummyField: SortOrder
  }

  input CompanyUserMinOrderByAggregateInput {
    companyId: SortOrder
    userId: SortOrder
    dummyField: SortOrder
  }

  input CompanyUserSumOrderByAggregateInput {
    companyId: SortOrder
    userId: SortOrder
  }

  input EnumPropertyUserRoleTypeFilter {
    equals: PropertyUserRoleType
    in: [PropertyUserRoleType!]
    notIn: [PropertyUserRoleType!]
    not: NestedEnumPropertyUserRoleTypeFilter
  }

  input PropertyUserRelationFilter {
    is: PropertyUserWhereInput
    isNot: PropertyUserWhereInput
  }

  input PropertyUserRoleCountOrderByAggregateInput {
    id: SortOrder
    type: SortOrder
    userId: SortOrder
  }

  input PropertyUserRoleAvgOrderByAggregateInput {
    id: SortOrder
    userId: SortOrder
  }

  input PropertyUserRoleMaxOrderByAggregateInput {
    id: SortOrder
    type: SortOrder
    userId: SortOrder
  }

  input PropertyUserRoleMinOrderByAggregateInput {
    id: SortOrder
    type: SortOrder
    userId: SortOrder
  }

  input PropertyUserRoleSumOrderByAggregateInput {
    id: SortOrder
    userId: SortOrder
  }

  input EnumPropertyUserRoleTypeWithAggregatesFilter {
    equals: PropertyUserRoleType
    in: [PropertyUserRoleType!]
    notIn: [PropertyUserRoleType!]
    not: NestedEnumPropertyUserRoleTypeWithAggregatesFilter
    _count: NestedIntFilter
    _min: NestedEnumPropertyUserRoleTypeFilter
    _max: NestedEnumPropertyUserRoleTypeFilter
  }

  input PropertyRelationFilter {
    is: PropertyWhereInput
    isNot: PropertyWhereInput
  }

  input PropertyUserRoleListRelationFilter {
    every: PropertyUserRoleWhereInput
    some: PropertyUserRoleWhereInput
    none: PropertyUserRoleWhereInput
  }

  input PropertyUserRoleOrderByRelationAggregateInput {
    _count: SortOrder
  }

  input PropertyUserPropertyIdUserIdCompoundUniqueInput {
    propertyId: Int!
    userId: Int!
  }

  input PropertyUserCountOrderByAggregateInput {
    id: SortOrder
    dummyField: SortOrder
    propertyId: SortOrder
    userId: SortOrder
  }

  input PropertyUserAvgOrderByAggregateInput {
    id: SortOrder
    propertyId: SortOrder
    userId: SortOrder
  }

  input PropertyUserMaxOrderByAggregateInput {
    id: SortOrder
    dummyField: SortOrder
    propertyId: SortOrder
    userId: SortOrder
  }

  input PropertyUserMinOrderByAggregateInput {
    id: SortOrder
    dummyField: SortOrder
    propertyId: SortOrder
    userId: SortOrder
  }

  input PropertyUserSumOrderByAggregateInput {
    id: SortOrder
    propertyId: SortOrder
    userId: SortOrder
  }

  input PropertyCountOrderByAggregateInput {
    id: SortOrder
    name: SortOrder
    companyId: SortOrder
  }

  input PropertyAvgOrderByAggregateInput {
    id: SortOrder
    companyId: SortOrder
  }

  input PropertyMaxOrderByAggregateInput {
    id: SortOrder
    name: SortOrder
    companyId: SortOrder
  }

  input PropertyMinOrderByAggregateInput {
    id: SortOrder
    name: SortOrder
    companyId: SortOrder
  }

  input PropertySumOrderByAggregateInput {
    id: SortOrder
    companyId: SortOrder
  }

  input CompanyUserCreateNestedManyWithoutUserInput {
    create: [CompanyUserCreateWithoutUserInput!]
    connectOrCreate: [CompanyUserCreateOrConnectWithoutUserInput!]
    createMany: CompanyUserCreateManyUserInputEnvelope
    connect: [CompanyUserWhereUniqueInput!]
  }

  input PropertyUserCreateNestedManyWithoutUserInput {
    create: [PropertyUserCreateWithoutUserInput!]
    connectOrCreate: [PropertyUserCreateOrConnectWithoutUserInput!]
    createMany: PropertyUserCreateManyUserInputEnvelope
    connect: [PropertyUserWhereUniqueInput!]
  }

  input CompanyCreateNestedManyWithoutPropertyUsersInput {
    create: [CompanyCreateWithoutPropertyUsersInput!]
    connectOrCreate: [CompanyCreateOrConnectWithoutPropertyUsersInput!]
    connect: [CompanyWhereUniqueInput!]
  }

  input CompanyUserUncheckedCreateNestedManyWithoutUserInput {
    create: [CompanyUserCreateWithoutUserInput!]
    connectOrCreate: [CompanyUserCreateOrConnectWithoutUserInput!]
    createMany: CompanyUserCreateManyUserInputEnvelope
    connect: [CompanyUserWhereUniqueInput!]
  }

  input PropertyUserUncheckedCreateNestedManyWithoutUserInput {
    create: [PropertyUserCreateWithoutUserInput!]
    connectOrCreate: [PropertyUserCreateOrConnectWithoutUserInput!]
    createMany: PropertyUserCreateManyUserInputEnvelope
    connect: [PropertyUserWhereUniqueInput!]
  }

  input CompanyUncheckedCreateNestedManyWithoutPropertyUsersInput {
    create: [CompanyCreateWithoutPropertyUsersInput!]
    connectOrCreate: [CompanyCreateOrConnectWithoutPropertyUsersInput!]
    connect: [CompanyWhereUniqueInput!]
  }

  input StringFieldUpdateOperationsInput {
    set: String
  }

  input CompanyUserUpdateManyWithoutUserNestedInput {
    create: [CompanyUserCreateWithoutUserInput!]
    connectOrCreate: [CompanyUserCreateOrConnectWithoutUserInput!]
    upsert: [CompanyUserUpsertWithWhereUniqueWithoutUserInput!]
    createMany: CompanyUserCreateManyUserInputEnvelope
    set: [CompanyUserWhereUniqueInput!]
    disconnect: [CompanyUserWhereUniqueInput!]
    delete: [CompanyUserWhereUniqueInput!]
    connect: [CompanyUserWhereUniqueInput!]
    update: [CompanyUserUpdateWithWhereUniqueWithoutUserInput!]
    updateMany: [CompanyUserUpdateManyWithWhereWithoutUserInput!]
    deleteMany: [CompanyUserScalarWhereInput!]
  }

  input PropertyUserUpdateManyWithoutUserNestedInput {
    create: [PropertyUserCreateWithoutUserInput!]
    connectOrCreate: [PropertyUserCreateOrConnectWithoutUserInput!]
    upsert: [PropertyUserUpsertWithWhereUniqueWithoutUserInput!]
    createMany: PropertyUserCreateManyUserInputEnvelope
    set: [PropertyUserWhereUniqueInput!]
    disconnect: [PropertyUserWhereUniqueInput!]
    delete: [PropertyUserWhereUniqueInput!]
    connect: [PropertyUserWhereUniqueInput!]
    update: [PropertyUserUpdateWithWhereUniqueWithoutUserInput!]
    updateMany: [PropertyUserUpdateManyWithWhereWithoutUserInput!]
    deleteMany: [PropertyUserScalarWhereInput!]
  }

  input CompanyUpdateManyWithoutPropertyUsersNestedInput {
    create: [CompanyCreateWithoutPropertyUsersInput!]
    connectOrCreate: [CompanyCreateOrConnectWithoutPropertyUsersInput!]
    upsert: [CompanyUpsertWithWhereUniqueWithoutPropertyUsersInput!]
    set: [CompanyWhereUniqueInput!]
    disconnect: [CompanyWhereUniqueInput!]
    delete: [CompanyWhereUniqueInput!]
    connect: [CompanyWhereUniqueInput!]
    update: [CompanyUpdateWithWhereUniqueWithoutPropertyUsersInput!]
    updateMany: [CompanyUpdateManyWithWhereWithoutPropertyUsersInput!]
    deleteMany: [CompanyScalarWhereInput!]
  }

  input IntFieldUpdateOperationsInput {
    set: Int
    increment: Int
    decrement: Int
    multiply: Int
    divide: Int
  }

  input CompanyUserUncheckedUpdateManyWithoutUserNestedInput {
    create: [CompanyUserCreateWithoutUserInput!]
    connectOrCreate: [CompanyUserCreateOrConnectWithoutUserInput!]
    upsert: [CompanyUserUpsertWithWhereUniqueWithoutUserInput!]
    createMany: CompanyUserCreateManyUserInputEnvelope
    set: [CompanyUserWhereUniqueInput!]
    disconnect: [CompanyUserWhereUniqueInput!]
    delete: [CompanyUserWhereUniqueInput!]
    connect: [CompanyUserWhereUniqueInput!]
    update: [CompanyUserUpdateWithWhereUniqueWithoutUserInput!]
    updateMany: [CompanyUserUpdateManyWithWhereWithoutUserInput!]
    deleteMany: [CompanyUserScalarWhereInput!]
  }

  input PropertyUserUncheckedUpdateManyWithoutUserNestedInput {
    create: [PropertyUserCreateWithoutUserInput!]
    connectOrCreate: [PropertyUserCreateOrConnectWithoutUserInput!]
    upsert: [PropertyUserUpsertWithWhereUniqueWithoutUserInput!]
    createMany: PropertyUserCreateManyUserInputEnvelope
    set: [PropertyUserWhereUniqueInput!]
    disconnect: [PropertyUserWhereUniqueInput!]
    delete: [PropertyUserWhereUniqueInput!]
    connect: [PropertyUserWhereUniqueInput!]
    update: [PropertyUserUpdateWithWhereUniqueWithoutUserInput!]
    updateMany: [PropertyUserUpdateManyWithWhereWithoutUserInput!]
    deleteMany: [PropertyUserScalarWhereInput!]
  }

  input CompanyUncheckedUpdateManyWithoutPropertyUsersNestedInput {
    create: [CompanyCreateWithoutPropertyUsersInput!]
    connectOrCreate: [CompanyCreateOrConnectWithoutPropertyUsersInput!]
    upsert: [CompanyUpsertWithWhereUniqueWithoutPropertyUsersInput!]
    set: [CompanyWhereUniqueInput!]
    disconnect: [CompanyWhereUniqueInput!]
    delete: [CompanyWhereUniqueInput!]
    connect: [CompanyWhereUniqueInput!]
    update: [CompanyUpdateWithWhereUniqueWithoutPropertyUsersInput!]
    updateMany: [CompanyUpdateManyWithWhereWithoutPropertyUsersInput!]
    deleteMany: [CompanyScalarWhereInput!]
  }

  input CompanyUserCreateNestedManyWithoutCompanyInput {
    create: [CompanyUserCreateWithoutCompanyInput!]
    connectOrCreate: [CompanyUserCreateOrConnectWithoutCompanyInput!]
    createMany: CompanyUserCreateManyCompanyInputEnvelope
    connect: [CompanyUserWhereUniqueInput!]
  }

  input UserCreateNestedManyWithoutCompaniesInput {
    create: [UserCreateWithoutCompaniesInput!]
    connectOrCreate: [UserCreateOrConnectWithoutCompaniesInput!]
    connect: [UserWhereUniqueInput!]
  }

  input PropertyCreateNestedManyWithoutCompanyInput {
    create: [PropertyCreateWithoutCompanyInput!]
    connectOrCreate: [PropertyCreateOrConnectWithoutCompanyInput!]
    createMany: PropertyCreateManyCompanyInputEnvelope
    connect: [PropertyWhereUniqueInput!]
  }

  input CompanyUserUncheckedCreateNestedManyWithoutCompanyInput {
    create: [CompanyUserCreateWithoutCompanyInput!]
    connectOrCreate: [CompanyUserCreateOrConnectWithoutCompanyInput!]
    createMany: CompanyUserCreateManyCompanyInputEnvelope
    connect: [CompanyUserWhereUniqueInput!]
  }

  input UserUncheckedCreateNestedManyWithoutCompaniesInput {
    create: [UserCreateWithoutCompaniesInput!]
    connectOrCreate: [UserCreateOrConnectWithoutCompaniesInput!]
    connect: [UserWhereUniqueInput!]
  }

  input PropertyUncheckedCreateNestedManyWithoutCompanyInput {
    create: [PropertyCreateWithoutCompanyInput!]
    connectOrCreate: [PropertyCreateOrConnectWithoutCompanyInput!]
    createMany: PropertyCreateManyCompanyInputEnvelope
    connect: [PropertyWhereUniqueInput!]
  }

  input CompanyUserUpdateManyWithoutCompanyNestedInput {
    create: [CompanyUserCreateWithoutCompanyInput!]
    connectOrCreate: [CompanyUserCreateOrConnectWithoutCompanyInput!]
    upsert: [CompanyUserUpsertWithWhereUniqueWithoutCompanyInput!]
    createMany: CompanyUserCreateManyCompanyInputEnvelope
    set: [CompanyUserWhereUniqueInput!]
    disconnect: [CompanyUserWhereUniqueInput!]
    delete: [CompanyUserWhereUniqueInput!]
    connect: [CompanyUserWhereUniqueInput!]
    update: [CompanyUserUpdateWithWhereUniqueWithoutCompanyInput!]
    updateMany: [CompanyUserUpdateManyWithWhereWithoutCompanyInput!]
    deleteMany: [CompanyUserScalarWhereInput!]
  }

  input UserUpdateManyWithoutCompaniesNestedInput {
    create: [UserCreateWithoutCompaniesInput!]
    connectOrCreate: [UserCreateOrConnectWithoutCompaniesInput!]
    upsert: [UserUpsertWithWhereUniqueWithoutCompaniesInput!]
    set: [UserWhereUniqueInput!]
    disconnect: [UserWhereUniqueInput!]
    delete: [UserWhereUniqueInput!]
    connect: [UserWhereUniqueInput!]
    update: [UserUpdateWithWhereUniqueWithoutCompaniesInput!]
    updateMany: [UserUpdateManyWithWhereWithoutCompaniesInput!]
    deleteMany: [UserScalarWhereInput!]
  }

  input PropertyUpdateManyWithoutCompanyNestedInput {
    create: [PropertyCreateWithoutCompanyInput!]
    connectOrCreate: [PropertyCreateOrConnectWithoutCompanyInput!]
    upsert: [PropertyUpsertWithWhereUniqueWithoutCompanyInput!]
    createMany: PropertyCreateManyCompanyInputEnvelope
    set: [PropertyWhereUniqueInput!]
    disconnect: [PropertyWhereUniqueInput!]
    delete: [PropertyWhereUniqueInput!]
    connect: [PropertyWhereUniqueInput!]
    update: [PropertyUpdateWithWhereUniqueWithoutCompanyInput!]
    updateMany: [PropertyUpdateManyWithWhereWithoutCompanyInput!]
    deleteMany: [PropertyScalarWhereInput!]
  }

  input CompanyUserUncheckedUpdateManyWithoutCompanyNestedInput {
    create: [CompanyUserCreateWithoutCompanyInput!]
    connectOrCreate: [CompanyUserCreateOrConnectWithoutCompanyInput!]
    upsert: [CompanyUserUpsertWithWhereUniqueWithoutCompanyInput!]
    createMany: CompanyUserCreateManyCompanyInputEnvelope
    set: [CompanyUserWhereUniqueInput!]
    disconnect: [CompanyUserWhereUniqueInput!]
    delete: [CompanyUserWhereUniqueInput!]
    connect: [CompanyUserWhereUniqueInput!]
    update: [CompanyUserUpdateWithWhereUniqueWithoutCompanyInput!]
    updateMany: [CompanyUserUpdateManyWithWhereWithoutCompanyInput!]
    deleteMany: [CompanyUserScalarWhereInput!]
  }

  input UserUncheckedUpdateManyWithoutCompaniesNestedInput {
    create: [UserCreateWithoutCompaniesInput!]
    connectOrCreate: [UserCreateOrConnectWithoutCompaniesInput!]
    upsert: [UserUpsertWithWhereUniqueWithoutCompaniesInput!]
    set: [UserWhereUniqueInput!]
    disconnect: [UserWhereUniqueInput!]
    delete: [UserWhereUniqueInput!]
    connect: [UserWhereUniqueInput!]
    update: [UserUpdateWithWhereUniqueWithoutCompaniesInput!]
    updateMany: [UserUpdateManyWithWhereWithoutCompaniesInput!]
    deleteMany: [UserScalarWhereInput!]
  }

  input PropertyUncheckedUpdateManyWithoutCompanyNestedInput {
    create: [PropertyCreateWithoutCompanyInput!]
    connectOrCreate: [PropertyCreateOrConnectWithoutCompanyInput!]
    upsert: [PropertyUpsertWithWhereUniqueWithoutCompanyInput!]
    createMany: PropertyCreateManyCompanyInputEnvelope
    set: [PropertyWhereUniqueInput!]
    disconnect: [PropertyWhereUniqueInput!]
    delete: [PropertyWhereUniqueInput!]
    connect: [PropertyWhereUniqueInput!]
    update: [PropertyUpdateWithWhereUniqueWithoutCompanyInput!]
    updateMany: [PropertyUpdateManyWithWhereWithoutCompanyInput!]
    deleteMany: [PropertyScalarWhereInput!]
  }

  input CompanyCreateNestedOneWithoutCompanyUsersInput {
    create: CompanyCreateWithoutCompanyUsersInput
    connectOrCreate: CompanyCreateOrConnectWithoutCompanyUsersInput
    connect: CompanyWhereUniqueInput
  }

  input UserCreateNestedOneWithoutEmployedByInput {
    create: UserCreateWithoutEmployedByInput
    connectOrCreate: UserCreateOrConnectWithoutEmployedByInput
    connect: UserWhereUniqueInput
  }

  input CompanyUpdateOneRequiredWithoutCompanyUsersNestedInput {
    create: CompanyCreateWithoutCompanyUsersInput
    connectOrCreate: CompanyCreateOrConnectWithoutCompanyUsersInput
    upsert: CompanyUpsertWithoutCompanyUsersInput
    connect: CompanyWhereUniqueInput
    update: CompanyUpdateToOneWithWhereWithoutCompanyUsersInput
  }

  input UserUpdateOneRequiredWithoutEmployedByNestedInput {
    create: UserCreateWithoutEmployedByInput
    connectOrCreate: UserCreateOrConnectWithoutEmployedByInput
    upsert: UserUpsertWithoutEmployedByInput
    connect: UserWhereUniqueInput
    update: UserUpdateToOneWithWhereWithoutEmployedByInput
  }

  input PropertyUserCreateNestedOneWithoutRolesInput {
    create: PropertyUserCreateWithoutRolesInput
    connectOrCreate: PropertyUserCreateOrConnectWithoutRolesInput
    connect: PropertyUserWhereUniqueInput
  }

  input EnumPropertyUserRoleTypeFieldUpdateOperationsInput {
    set: PropertyUserRoleType
  }

  input PropertyUserUpdateOneRequiredWithoutRolesNestedInput {
    create: PropertyUserCreateWithoutRolesInput
    connectOrCreate: PropertyUserCreateOrConnectWithoutRolesInput
    upsert: PropertyUserUpsertWithoutRolesInput
    connect: PropertyUserWhereUniqueInput
    update: PropertyUserUpdateToOneWithWhereWithoutRolesInput
  }

  input PropertyCreateNestedOneWithoutUsersInput {
    create: PropertyCreateWithoutUsersInput
    connectOrCreate: PropertyCreateOrConnectWithoutUsersInput
    connect: PropertyWhereUniqueInput
  }

  input UserCreateNestedOneWithoutPropertiesInput {
    create: UserCreateWithoutPropertiesInput
    connectOrCreate: UserCreateOrConnectWithoutPropertiesInput
    connect: UserWhereUniqueInput
  }

  input PropertyUserRoleCreateNestedManyWithoutUserInput {
    create: [PropertyUserRoleCreateWithoutUserInput!]
    connectOrCreate: [PropertyUserRoleCreateOrConnectWithoutUserInput!]
    createMany: PropertyUserRoleCreateManyUserInputEnvelope
    connect: [PropertyUserRoleWhereUniqueInput!]
  }

  input PropertyUserRoleUncheckedCreateNestedManyWithoutUserInput {
    create: [PropertyUserRoleCreateWithoutUserInput!]
    connectOrCreate: [PropertyUserRoleCreateOrConnectWithoutUserInput!]
    createMany: PropertyUserRoleCreateManyUserInputEnvelope
    connect: [PropertyUserRoleWhereUniqueInput!]
  }

  input PropertyUpdateOneRequiredWithoutUsersNestedInput {
    create: PropertyCreateWithoutUsersInput
    connectOrCreate: PropertyCreateOrConnectWithoutUsersInput
    upsert: PropertyUpsertWithoutUsersInput
    connect: PropertyWhereUniqueInput
    update: PropertyUpdateToOneWithWhereWithoutUsersInput
  }

  input UserUpdateOneRequiredWithoutPropertiesNestedInput {
    create: UserCreateWithoutPropertiesInput
    connectOrCreate: UserCreateOrConnectWithoutPropertiesInput
    upsert: UserUpsertWithoutPropertiesInput
    connect: UserWhereUniqueInput
    update: UserUpdateToOneWithWhereWithoutPropertiesInput
  }

  input PropertyUserRoleUpdateManyWithoutUserNestedInput {
    create: [PropertyUserRoleCreateWithoutUserInput!]
    connectOrCreate: [PropertyUserRoleCreateOrConnectWithoutUserInput!]
    upsert: [PropertyUserRoleUpsertWithWhereUniqueWithoutUserInput!]
    createMany: PropertyUserRoleCreateManyUserInputEnvelope
    set: [PropertyUserRoleWhereUniqueInput!]
    disconnect: [PropertyUserRoleWhereUniqueInput!]
    delete: [PropertyUserRoleWhereUniqueInput!]
    connect: [PropertyUserRoleWhereUniqueInput!]
    update: [PropertyUserRoleUpdateWithWhereUniqueWithoutUserInput!]
    updateMany: [PropertyUserRoleUpdateManyWithWhereWithoutUserInput!]
    deleteMany: [PropertyUserRoleScalarWhereInput!]
  }

  input PropertyUserRoleUncheckedUpdateManyWithoutUserNestedInput {
    create: [PropertyUserRoleCreateWithoutUserInput!]
    connectOrCreate: [PropertyUserRoleCreateOrConnectWithoutUserInput!]
    upsert: [PropertyUserRoleUpsertWithWhereUniqueWithoutUserInput!]
    createMany: PropertyUserRoleCreateManyUserInputEnvelope
    set: [PropertyUserRoleWhereUniqueInput!]
    disconnect: [PropertyUserRoleWhereUniqueInput!]
    delete: [PropertyUserRoleWhereUniqueInput!]
    connect: [PropertyUserRoleWhereUniqueInput!]
    update: [PropertyUserRoleUpdateWithWhereUniqueWithoutUserInput!]
    updateMany: [PropertyUserRoleUpdateManyWithWhereWithoutUserInput!]
    deleteMany: [PropertyUserRoleScalarWhereInput!]
  }

  input PropertyUserCreateNestedManyWithoutPropertyInput {
    create: [PropertyUserCreateWithoutPropertyInput!]
    connectOrCreate: [PropertyUserCreateOrConnectWithoutPropertyInput!]
    createMany: PropertyUserCreateManyPropertyInputEnvelope
    connect: [PropertyUserWhereUniqueInput!]
  }

  input CompanyCreateNestedOneWithoutPropertiesInput {
    create: CompanyCreateWithoutPropertiesInput
    connectOrCreate: CompanyCreateOrConnectWithoutPropertiesInput
    connect: CompanyWhereUniqueInput
  }

  input PropertyUserUncheckedCreateNestedManyWithoutPropertyInput {
    create: [PropertyUserCreateWithoutPropertyInput!]
    connectOrCreate: [PropertyUserCreateOrConnectWithoutPropertyInput!]
    createMany: PropertyUserCreateManyPropertyInputEnvelope
    connect: [PropertyUserWhereUniqueInput!]
  }

  input PropertyUserUpdateManyWithoutPropertyNestedInput {
    create: [PropertyUserCreateWithoutPropertyInput!]
    connectOrCreate: [PropertyUserCreateOrConnectWithoutPropertyInput!]
    upsert: [PropertyUserUpsertWithWhereUniqueWithoutPropertyInput!]
    createMany: PropertyUserCreateManyPropertyInputEnvelope
    set: [PropertyUserWhereUniqueInput!]
    disconnect: [PropertyUserWhereUniqueInput!]
    delete: [PropertyUserWhereUniqueInput!]
    connect: [PropertyUserWhereUniqueInput!]
    update: [PropertyUserUpdateWithWhereUniqueWithoutPropertyInput!]
    updateMany: [PropertyUserUpdateManyWithWhereWithoutPropertyInput!]
    deleteMany: [PropertyUserScalarWhereInput!]
  }

  input CompanyUpdateOneRequiredWithoutPropertiesNestedInput {
    create: CompanyCreateWithoutPropertiesInput
    connectOrCreate: CompanyCreateOrConnectWithoutPropertiesInput
    upsert: CompanyUpsertWithoutPropertiesInput
    connect: CompanyWhereUniqueInput
    update: CompanyUpdateToOneWithWhereWithoutPropertiesInput
  }

  input PropertyUserUncheckedUpdateManyWithoutPropertyNestedInput {
    create: [PropertyUserCreateWithoutPropertyInput!]
    connectOrCreate: [PropertyUserCreateOrConnectWithoutPropertyInput!]
    upsert: [PropertyUserUpsertWithWhereUniqueWithoutPropertyInput!]
    createMany: PropertyUserCreateManyPropertyInputEnvelope
    set: [PropertyUserWhereUniqueInput!]
    disconnect: [PropertyUserWhereUniqueInput!]
    delete: [PropertyUserWhereUniqueInput!]
    connect: [PropertyUserWhereUniqueInput!]
    update: [PropertyUserUpdateWithWhereUniqueWithoutPropertyInput!]
    updateMany: [PropertyUserUpdateManyWithWhereWithoutPropertyInput!]
    deleteMany: [PropertyUserScalarWhereInput!]
  }

  input NestedIntFilter {
    equals: Int
    in: [Int!]
    notIn: [Int!]
    lt: Int
    lte: Int
    gt: Int
    gte: Int
    not: NestedIntFilter
  }

  input NestedStringFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    not: NestedStringFilter
  }

  input NestedIntWithAggregatesFilter {
    equals: Int
    in: [Int!]
    notIn: [Int!]
    lt: Int
    lte: Int
    gt: Int
    gte: Int
    not: NestedIntWithAggregatesFilter
    _count: NestedIntFilter
    _avg: NestedFloatFilter
    _sum: NestedIntFilter
    _min: NestedIntFilter
    _max: NestedIntFilter
  }

  input NestedFloatFilter {
    equals: Float
    in: [Float!]
    notIn: [Float!]
    lt: Float
    lte: Float
    gt: Float
    gte: Float
    not: NestedFloatFilter
  }

  input NestedStringWithAggregatesFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    not: NestedStringWithAggregatesFilter
    _count: NestedIntFilter
    _min: NestedStringFilter
    _max: NestedStringFilter
  }

  input NestedEnumPropertyUserRoleTypeFilter {
    equals: PropertyUserRoleType
    in: [PropertyUserRoleType!]
    notIn: [PropertyUserRoleType!]
    not: NestedEnumPropertyUserRoleTypeFilter
  }

  input NestedEnumPropertyUserRoleTypeWithAggregatesFilter {
    equals: PropertyUserRoleType
    in: [PropertyUserRoleType!]
    notIn: [PropertyUserRoleType!]
    not: NestedEnumPropertyUserRoleTypeWithAggregatesFilter
    _count: NestedIntFilter
    _min: NestedEnumPropertyUserRoleTypeFilter
    _max: NestedEnumPropertyUserRoleTypeFilter
  }

  input CompanyUserCreateWithoutUserInput {
    dummyField: String!
    company: CompanyCreateNestedOneWithoutCompanyUsersInput!
  }

  input CompanyUserUncheckedCreateWithoutUserInput {
    companyId: Int!
    dummyField: String!
  }

  input CompanyUserCreateOrConnectWithoutUserInput {
    where: CompanyUserWhereUniqueInput!
    create: CompanyUserCreateWithoutUserInput!
  }

  input CompanyUserCreateManyUserInputEnvelope {
    data: [CompanyUserCreateManyUserInput!]!
    skipDuplicates: Boolean
  }

  input PropertyUserCreateWithoutUserInput {
    dummyField: String!
    property: PropertyCreateNestedOneWithoutUsersInput!
    roles: PropertyUserRoleCreateNestedManyWithoutUserInput
  }

  input PropertyUserUncheckedCreateWithoutUserInput {
    id: Int
    dummyField: String!
    propertyId: Int!
    roles: PropertyUserRoleUncheckedCreateNestedManyWithoutUserInput
  }

  input PropertyUserCreateOrConnectWithoutUserInput {
    where: PropertyUserWhereUniqueInput!
    create: PropertyUserCreateWithoutUserInput!
  }

  input PropertyUserCreateManyUserInputEnvelope {
    data: [PropertyUserCreateManyUserInput!]!
    skipDuplicates: Boolean
  }

  input CompanyCreateWithoutPropertyUsersInput {
    name: String!
    companyUsers: CompanyUserCreateNestedManyWithoutCompanyInput
    properties: PropertyCreateNestedManyWithoutCompanyInput
  }

  input CompanyUncheckedCreateWithoutPropertyUsersInput {
    id: Int
    name: String!
    companyUsers: CompanyUserUncheckedCreateNestedManyWithoutCompanyInput
    properties: PropertyUncheckedCreateNestedManyWithoutCompanyInput
  }

  input CompanyCreateOrConnectWithoutPropertyUsersInput {
    where: CompanyWhereUniqueInput!
    create: CompanyCreateWithoutPropertyUsersInput!
  }

  input CompanyUserUpsertWithWhereUniqueWithoutUserInput {
    where: CompanyUserWhereUniqueInput!
    update: CompanyUserUpdateWithoutUserInput!
    create: CompanyUserCreateWithoutUserInput!
  }

  input CompanyUserUpdateWithWhereUniqueWithoutUserInput {
    where: CompanyUserWhereUniqueInput!
    data: CompanyUserUpdateWithoutUserInput!
  }

  input CompanyUserUpdateManyWithWhereWithoutUserInput {
    where: CompanyUserScalarWhereInput!
    data: CompanyUserUpdateManyMutationInput!
  }

  input CompanyUserScalarWhereInput {
    AND: [CompanyUserScalarWhereInput!]
    OR: [CompanyUserScalarWhereInput!]
    NOT: [CompanyUserScalarWhereInput!]
    companyId: IntFilter
    userId: IntFilter
    dummyField: StringFilter
  }

  input PropertyUserUpsertWithWhereUniqueWithoutUserInput {
    where: PropertyUserWhereUniqueInput!
    update: PropertyUserUpdateWithoutUserInput!
    create: PropertyUserCreateWithoutUserInput!
  }

  input PropertyUserUpdateWithWhereUniqueWithoutUserInput {
    where: PropertyUserWhereUniqueInput!
    data: PropertyUserUpdateWithoutUserInput!
  }

  input PropertyUserUpdateManyWithWhereWithoutUserInput {
    where: PropertyUserScalarWhereInput!
    data: PropertyUserUpdateManyMutationInput!
  }

  input PropertyUserScalarWhereInput {
    AND: [PropertyUserScalarWhereInput!]
    OR: [PropertyUserScalarWhereInput!]
    NOT: [PropertyUserScalarWhereInput!]
    id: IntFilter
    dummyField: StringFilter
    propertyId: IntFilter
    userId: IntFilter
  }

  input CompanyUpsertWithWhereUniqueWithoutPropertyUsersInput {
    where: CompanyWhereUniqueInput!
    update: CompanyUpdateWithoutPropertyUsersInput!
    create: CompanyCreateWithoutPropertyUsersInput!
  }

  input CompanyUpdateWithWhereUniqueWithoutPropertyUsersInput {
    where: CompanyWhereUniqueInput!
    data: CompanyUpdateWithoutPropertyUsersInput!
  }

  input CompanyUpdateManyWithWhereWithoutPropertyUsersInput {
    where: CompanyScalarWhereInput!
    data: CompanyUpdateManyMutationInput!
  }

  input CompanyScalarWhereInput {
    AND: [CompanyScalarWhereInput!]
    OR: [CompanyScalarWhereInput!]
    NOT: [CompanyScalarWhereInput!]
    id: IntFilter
    name: StringFilter
  }

  input CompanyUserCreateWithoutCompanyInput {
    dummyField: String!
    user: UserCreateNestedOneWithoutEmployedByInput!
  }

  input CompanyUserUncheckedCreateWithoutCompanyInput {
    userId: Int!
    dummyField: String!
  }

  input CompanyUserCreateOrConnectWithoutCompanyInput {
    where: CompanyUserWhereUniqueInput!
    create: CompanyUserCreateWithoutCompanyInput!
  }

  input CompanyUserCreateManyCompanyInputEnvelope {
    data: [CompanyUserCreateManyCompanyInput!]!
    skipDuplicates: Boolean
  }

  input UserCreateWithoutCompaniesInput {
    username: String!
    employedBy: CompanyUserCreateNestedManyWithoutUserInput
    properties: PropertyUserCreateNestedManyWithoutUserInput
  }

  input UserUncheckedCreateWithoutCompaniesInput {
    id: Int
    username: String!
    employedBy: CompanyUserUncheckedCreateNestedManyWithoutUserInput
    properties: PropertyUserUncheckedCreateNestedManyWithoutUserInput
  }

  input UserCreateOrConnectWithoutCompaniesInput {
    where: UserWhereUniqueInput!
    create: UserCreateWithoutCompaniesInput!
  }

  input PropertyCreateWithoutCompanyInput {
    name: String!
    users: PropertyUserCreateNestedManyWithoutPropertyInput
  }

  input PropertyUncheckedCreateWithoutCompanyInput {
    id: Int
    name: String!
    users: PropertyUserUncheckedCreateNestedManyWithoutPropertyInput
  }

  input PropertyCreateOrConnectWithoutCompanyInput {
    where: PropertyWhereUniqueInput!
    create: PropertyCreateWithoutCompanyInput!
  }

  input PropertyCreateManyCompanyInputEnvelope {
    data: [PropertyCreateManyCompanyInput!]!
    skipDuplicates: Boolean
  }

  input CompanyUserUpsertWithWhereUniqueWithoutCompanyInput {
    where: CompanyUserWhereUniqueInput!
    update: CompanyUserUpdateWithoutCompanyInput!
    create: CompanyUserCreateWithoutCompanyInput!
  }

  input CompanyUserUpdateWithWhereUniqueWithoutCompanyInput {
    where: CompanyUserWhereUniqueInput!
    data: CompanyUserUpdateWithoutCompanyInput!
  }

  input CompanyUserUpdateManyWithWhereWithoutCompanyInput {
    where: CompanyUserScalarWhereInput!
    data: CompanyUserUpdateManyMutationInput!
  }

  input UserUpsertWithWhereUniqueWithoutCompaniesInput {
    where: UserWhereUniqueInput!
    update: UserUpdateWithoutCompaniesInput!
    create: UserCreateWithoutCompaniesInput!
  }

  input UserUpdateWithWhereUniqueWithoutCompaniesInput {
    where: UserWhereUniqueInput!
    data: UserUpdateWithoutCompaniesInput!
  }

  input UserUpdateManyWithWhereWithoutCompaniesInput {
    where: UserScalarWhereInput!
    data: UserUpdateManyMutationInput!
  }

  input UserScalarWhereInput {
    AND: [UserScalarWhereInput!]
    OR: [UserScalarWhereInput!]
    NOT: [UserScalarWhereInput!]
    id: IntFilter
    username: StringFilter
  }

  input PropertyUpsertWithWhereUniqueWithoutCompanyInput {
    where: PropertyWhereUniqueInput!
    update: PropertyUpdateWithoutCompanyInput!
    create: PropertyCreateWithoutCompanyInput!
  }

  input PropertyUpdateWithWhereUniqueWithoutCompanyInput {
    where: PropertyWhereUniqueInput!
    data: PropertyUpdateWithoutCompanyInput!
  }

  input PropertyUpdateManyWithWhereWithoutCompanyInput {
    where: PropertyScalarWhereInput!
    data: PropertyUpdateManyMutationInput!
  }

  input PropertyScalarWhereInput {
    AND: [PropertyScalarWhereInput!]
    OR: [PropertyScalarWhereInput!]
    NOT: [PropertyScalarWhereInput!]
    id: IntFilter
    name: StringFilter
    companyId: IntFilter
  }

  input CompanyCreateWithoutCompanyUsersInput {
    name: String!
    propertyUsers: UserCreateNestedManyWithoutCompaniesInput
    properties: PropertyCreateNestedManyWithoutCompanyInput
  }

  input CompanyUncheckedCreateWithoutCompanyUsersInput {
    id: Int
    name: String!
    propertyUsers: UserUncheckedCreateNestedManyWithoutCompaniesInput
    properties: PropertyUncheckedCreateNestedManyWithoutCompanyInput
  }

  input CompanyCreateOrConnectWithoutCompanyUsersInput {
    where: CompanyWhereUniqueInput!
    create: CompanyCreateWithoutCompanyUsersInput!
  }

  input UserCreateWithoutEmployedByInput {
    username: String!
    properties: PropertyUserCreateNestedManyWithoutUserInput
    companies: CompanyCreateNestedManyWithoutPropertyUsersInput
  }

  input UserUncheckedCreateWithoutEmployedByInput {
    id: Int
    username: String!
    properties: PropertyUserUncheckedCreateNestedManyWithoutUserInput
    companies: CompanyUncheckedCreateNestedManyWithoutPropertyUsersInput
  }

  input UserCreateOrConnectWithoutEmployedByInput {
    where: UserWhereUniqueInput!
    create: UserCreateWithoutEmployedByInput!
  }

  input CompanyUpsertWithoutCompanyUsersInput {
    update: CompanyUpdateWithoutCompanyUsersInput!
    create: CompanyCreateWithoutCompanyUsersInput!
    where: CompanyWhereInput
  }

  input CompanyUpdateToOneWithWhereWithoutCompanyUsersInput {
    where: CompanyWhereInput
    data: CompanyUpdateWithoutCompanyUsersInput!
  }

  input CompanyUpdateWithoutCompanyUsersInput {
    name: StringFieldUpdateOperationsInput
    propertyUsers: UserUpdateManyWithoutCompaniesNestedInput
    properties: PropertyUpdateManyWithoutCompanyNestedInput
  }

  input CompanyUncheckedUpdateWithoutCompanyUsersInput {
    id: IntFieldUpdateOperationsInput
    name: StringFieldUpdateOperationsInput
    propertyUsers: UserUncheckedUpdateManyWithoutCompaniesNestedInput
    properties: PropertyUncheckedUpdateManyWithoutCompanyNestedInput
  }

  input UserUpsertWithoutEmployedByInput {
    update: UserUpdateWithoutEmployedByInput!
    create: UserCreateWithoutEmployedByInput!
    where: UserWhereInput
  }

  input UserUpdateToOneWithWhereWithoutEmployedByInput {
    where: UserWhereInput
    data: UserUpdateWithoutEmployedByInput!
  }

  input UserUpdateWithoutEmployedByInput {
    username: StringFieldUpdateOperationsInput
    properties: PropertyUserUpdateManyWithoutUserNestedInput
    companies: CompanyUpdateManyWithoutPropertyUsersNestedInput
  }

  input UserUncheckedUpdateWithoutEmployedByInput {
    id: IntFieldUpdateOperationsInput
    username: StringFieldUpdateOperationsInput
    properties: PropertyUserUncheckedUpdateManyWithoutUserNestedInput
    companies: CompanyUncheckedUpdateManyWithoutPropertyUsersNestedInput
  }

  input PropertyUserCreateWithoutRolesInput {
    dummyField: String!
    property: PropertyCreateNestedOneWithoutUsersInput!
    user: UserCreateNestedOneWithoutPropertiesInput!
  }

  input PropertyUserUncheckedCreateWithoutRolesInput {
    id: Int
    dummyField: String!
    propertyId: Int!
    userId: Int!
  }

  input PropertyUserCreateOrConnectWithoutRolesInput {
    where: PropertyUserWhereUniqueInput!
    create: PropertyUserCreateWithoutRolesInput!
  }

  input PropertyUserUpsertWithoutRolesInput {
    update: PropertyUserUpdateWithoutRolesInput!
    create: PropertyUserCreateWithoutRolesInput!
    where: PropertyUserWhereInput
  }

  input PropertyUserUpdateToOneWithWhereWithoutRolesInput {
    where: PropertyUserWhereInput
    data: PropertyUserUpdateWithoutRolesInput!
  }

  input PropertyUserUpdateWithoutRolesInput {
    dummyField: StringFieldUpdateOperationsInput
    property: PropertyUpdateOneRequiredWithoutUsersNestedInput
    user: UserUpdateOneRequiredWithoutPropertiesNestedInput
  }

  input PropertyUserUncheckedUpdateWithoutRolesInput {
    id: IntFieldUpdateOperationsInput
    dummyField: StringFieldUpdateOperationsInput
    propertyId: IntFieldUpdateOperationsInput
    userId: IntFieldUpdateOperationsInput
  }

  input PropertyCreateWithoutUsersInput {
    name: String!
    company: CompanyCreateNestedOneWithoutPropertiesInput!
  }

  input PropertyUncheckedCreateWithoutUsersInput {
    id: Int
    name: String!
    companyId: Int!
  }

  input PropertyCreateOrConnectWithoutUsersInput {
    where: PropertyWhereUniqueInput!
    create: PropertyCreateWithoutUsersInput!
  }

  input UserCreateWithoutPropertiesInput {
    username: String!
    employedBy: CompanyUserCreateNestedManyWithoutUserInput
    companies: CompanyCreateNestedManyWithoutPropertyUsersInput
  }

  input UserUncheckedCreateWithoutPropertiesInput {
    id: Int
    username: String!
    employedBy: CompanyUserUncheckedCreateNestedManyWithoutUserInput
    companies: CompanyUncheckedCreateNestedManyWithoutPropertyUsersInput
  }

  input UserCreateOrConnectWithoutPropertiesInput {
    where: UserWhereUniqueInput!
    create: UserCreateWithoutPropertiesInput!
  }

  input PropertyUserRoleCreateWithoutUserInput {
    type: PropertyUserRoleType!
  }

  input PropertyUserRoleUncheckedCreateWithoutUserInput {
    id: Int
    type: PropertyUserRoleType!
  }

  input PropertyUserRoleCreateOrConnectWithoutUserInput {
    where: PropertyUserRoleWhereUniqueInput!
    create: PropertyUserRoleCreateWithoutUserInput!
  }

  input PropertyUserRoleCreateManyUserInputEnvelope {
    data: [PropertyUserRoleCreateManyUserInput!]!
    skipDuplicates: Boolean
  }

  input PropertyUpsertWithoutUsersInput {
    update: PropertyUpdateWithoutUsersInput!
    create: PropertyCreateWithoutUsersInput!
    where: PropertyWhereInput
  }

  input PropertyUpdateToOneWithWhereWithoutUsersInput {
    where: PropertyWhereInput
    data: PropertyUpdateWithoutUsersInput!
  }

  input PropertyUpdateWithoutUsersInput {
    name: StringFieldUpdateOperationsInput
    company: CompanyUpdateOneRequiredWithoutPropertiesNestedInput
  }

  input PropertyUncheckedUpdateWithoutUsersInput {
    id: IntFieldUpdateOperationsInput
    name: StringFieldUpdateOperationsInput
    companyId: IntFieldUpdateOperationsInput
  }

  input UserUpsertWithoutPropertiesInput {
    update: UserUpdateWithoutPropertiesInput!
    create: UserCreateWithoutPropertiesInput!
    where: UserWhereInput
  }

  input UserUpdateToOneWithWhereWithoutPropertiesInput {
    where: UserWhereInput
    data: UserUpdateWithoutPropertiesInput!
  }

  input UserUpdateWithoutPropertiesInput {
    username: StringFieldUpdateOperationsInput
    employedBy: CompanyUserUpdateManyWithoutUserNestedInput
    companies: CompanyUpdateManyWithoutPropertyUsersNestedInput
  }

  input UserUncheckedUpdateWithoutPropertiesInput {
    id: IntFieldUpdateOperationsInput
    username: StringFieldUpdateOperationsInput
    employedBy: CompanyUserUncheckedUpdateManyWithoutUserNestedInput
    companies: CompanyUncheckedUpdateManyWithoutPropertyUsersNestedInput
  }

  input PropertyUserRoleUpsertWithWhereUniqueWithoutUserInput {
    where: PropertyUserRoleWhereUniqueInput!
    update: PropertyUserRoleUpdateWithoutUserInput!
    create: PropertyUserRoleCreateWithoutUserInput!
  }

  input PropertyUserRoleUpdateWithWhereUniqueWithoutUserInput {
    where: PropertyUserRoleWhereUniqueInput!
    data: PropertyUserRoleUpdateWithoutUserInput!
  }

  input PropertyUserRoleUpdateManyWithWhereWithoutUserInput {
    where: PropertyUserRoleScalarWhereInput!
    data: PropertyUserRoleUpdateManyMutationInput!
  }

  input PropertyUserRoleScalarWhereInput {
    AND: [PropertyUserRoleScalarWhereInput!]
    OR: [PropertyUserRoleScalarWhereInput!]
    NOT: [PropertyUserRoleScalarWhereInput!]
    id: IntFilter
    type: EnumPropertyUserRoleTypeFilter
    userId: IntFilter
  }

  input PropertyUserCreateWithoutPropertyInput {
    dummyField: String!
    user: UserCreateNestedOneWithoutPropertiesInput!
    roles: PropertyUserRoleCreateNestedManyWithoutUserInput
  }

  input PropertyUserUncheckedCreateWithoutPropertyInput {
    id: Int
    dummyField: String!
    userId: Int!
    roles: PropertyUserRoleUncheckedCreateNestedManyWithoutUserInput
  }

  input PropertyUserCreateOrConnectWithoutPropertyInput {
    where: PropertyUserWhereUniqueInput!
    create: PropertyUserCreateWithoutPropertyInput!
  }

  input PropertyUserCreateManyPropertyInputEnvelope {
    data: [PropertyUserCreateManyPropertyInput!]!
    skipDuplicates: Boolean
  }

  input CompanyCreateWithoutPropertiesInput {
    name: String!
    companyUsers: CompanyUserCreateNestedManyWithoutCompanyInput
    propertyUsers: UserCreateNestedManyWithoutCompaniesInput
  }

  input CompanyUncheckedCreateWithoutPropertiesInput {
    id: Int
    name: String!
    companyUsers: CompanyUserUncheckedCreateNestedManyWithoutCompanyInput
    propertyUsers: UserUncheckedCreateNestedManyWithoutCompaniesInput
  }

  input CompanyCreateOrConnectWithoutPropertiesInput {
    where: CompanyWhereUniqueInput!
    create: CompanyCreateWithoutPropertiesInput!
  }

  input PropertyUserUpsertWithWhereUniqueWithoutPropertyInput {
    where: PropertyUserWhereUniqueInput!
    update: PropertyUserUpdateWithoutPropertyInput!
    create: PropertyUserCreateWithoutPropertyInput!
  }

  input PropertyUserUpdateWithWhereUniqueWithoutPropertyInput {
    where: PropertyUserWhereUniqueInput!
    data: PropertyUserUpdateWithoutPropertyInput!
  }

  input PropertyUserUpdateManyWithWhereWithoutPropertyInput {
    where: PropertyUserScalarWhereInput!
    data: PropertyUserUpdateManyMutationInput!
  }

  input CompanyUpsertWithoutPropertiesInput {
    update: CompanyUpdateWithoutPropertiesInput!
    create: CompanyCreateWithoutPropertiesInput!
    where: CompanyWhereInput
  }

  input CompanyUpdateToOneWithWhereWithoutPropertiesInput {
    where: CompanyWhereInput
    data: CompanyUpdateWithoutPropertiesInput!
  }

  input CompanyUpdateWithoutPropertiesInput {
    name: StringFieldUpdateOperationsInput
    companyUsers: CompanyUserUpdateManyWithoutCompanyNestedInput
    propertyUsers: UserUpdateManyWithoutCompaniesNestedInput
  }

  input CompanyUncheckedUpdateWithoutPropertiesInput {
    id: IntFieldUpdateOperationsInput
    name: StringFieldUpdateOperationsInput
    companyUsers: CompanyUserUncheckedUpdateManyWithoutCompanyNestedInput
    propertyUsers: UserUncheckedUpdateManyWithoutCompaniesNestedInput
  }

  input CompanyUserCreateManyUserInput {
    companyId: Int!
    dummyField: String!
  }

  input PropertyUserCreateManyUserInput {
    id: Int
    dummyField: String!
    propertyId: Int!
  }

  input CompanyUserUpdateWithoutUserInput {
    dummyField: StringFieldUpdateOperationsInput
    company: CompanyUpdateOneRequiredWithoutCompanyUsersNestedInput
  }

  input CompanyUserUncheckedUpdateWithoutUserInput {
    companyId: IntFieldUpdateOperationsInput
    dummyField: StringFieldUpdateOperationsInput
  }

  input CompanyUserUncheckedUpdateManyWithoutUserInput {
    companyId: IntFieldUpdateOperationsInput
    dummyField: StringFieldUpdateOperationsInput
  }

  input PropertyUserUpdateWithoutUserInput {
    dummyField: StringFieldUpdateOperationsInput
    property: PropertyUpdateOneRequiredWithoutUsersNestedInput
    roles: PropertyUserRoleUpdateManyWithoutUserNestedInput
  }

  input PropertyUserUncheckedUpdateWithoutUserInput {
    id: IntFieldUpdateOperationsInput
    dummyField: StringFieldUpdateOperationsInput
    propertyId: IntFieldUpdateOperationsInput
    roles: PropertyUserRoleUncheckedUpdateManyWithoutUserNestedInput
  }

  input PropertyUserUncheckedUpdateManyWithoutUserInput {
    id: IntFieldUpdateOperationsInput
    dummyField: StringFieldUpdateOperationsInput
    propertyId: IntFieldUpdateOperationsInput
  }

  input CompanyUpdateWithoutPropertyUsersInput {
    name: StringFieldUpdateOperationsInput
    companyUsers: CompanyUserUpdateManyWithoutCompanyNestedInput
    properties: PropertyUpdateManyWithoutCompanyNestedInput
  }

  input CompanyUncheckedUpdateWithoutPropertyUsersInput {
    id: IntFieldUpdateOperationsInput
    name: StringFieldUpdateOperationsInput
    companyUsers: CompanyUserUncheckedUpdateManyWithoutCompanyNestedInput
    properties: PropertyUncheckedUpdateManyWithoutCompanyNestedInput
  }

  input CompanyUncheckedUpdateManyWithoutPropertyUsersInput {
    id: IntFieldUpdateOperationsInput
    name: StringFieldUpdateOperationsInput
  }

  input CompanyUserCreateManyCompanyInput {
    userId: Int!
    dummyField: String!
  }

  input PropertyCreateManyCompanyInput {
    id: Int
    name: String!
  }

  input CompanyUserUpdateWithoutCompanyInput {
    dummyField: StringFieldUpdateOperationsInput
    user: UserUpdateOneRequiredWithoutEmployedByNestedInput
  }

  input CompanyUserUncheckedUpdateWithoutCompanyInput {
    userId: IntFieldUpdateOperationsInput
    dummyField: StringFieldUpdateOperationsInput
  }

  input CompanyUserUncheckedUpdateManyWithoutCompanyInput {
    userId: IntFieldUpdateOperationsInput
    dummyField: StringFieldUpdateOperationsInput
  }

  input UserUpdateWithoutCompaniesInput {
    username: StringFieldUpdateOperationsInput
    employedBy: CompanyUserUpdateManyWithoutUserNestedInput
    properties: PropertyUserUpdateManyWithoutUserNestedInput
  }

  input UserUncheckedUpdateWithoutCompaniesInput {
    id: IntFieldUpdateOperationsInput
    username: StringFieldUpdateOperationsInput
    employedBy: CompanyUserUncheckedUpdateManyWithoutUserNestedInput
    properties: PropertyUserUncheckedUpdateManyWithoutUserNestedInput
  }

  input UserUncheckedUpdateManyWithoutCompaniesInput {
    id: IntFieldUpdateOperationsInput
    username: StringFieldUpdateOperationsInput
  }

  input PropertyUpdateWithoutCompanyInput {
    name: StringFieldUpdateOperationsInput
    users: PropertyUserUpdateManyWithoutPropertyNestedInput
  }

  input PropertyUncheckedUpdateWithoutCompanyInput {
    id: IntFieldUpdateOperationsInput
    name: StringFieldUpdateOperationsInput
    users: PropertyUserUncheckedUpdateManyWithoutPropertyNestedInput
  }

  input PropertyUncheckedUpdateManyWithoutCompanyInput {
    id: IntFieldUpdateOperationsInput
    name: StringFieldUpdateOperationsInput
  }

  input PropertyUserRoleCreateManyUserInput {
    id: Int
    type: PropertyUserRoleType!
  }

  input PropertyUserRoleUpdateWithoutUserInput {
    type: EnumPropertyUserRoleTypeFieldUpdateOperationsInput
  }

  input PropertyUserRoleUncheckedUpdateWithoutUserInput {
    id: IntFieldUpdateOperationsInput
    type: EnumPropertyUserRoleTypeFieldUpdateOperationsInput
  }

  input PropertyUserRoleUncheckedUpdateManyWithoutUserInput {
    id: IntFieldUpdateOperationsInput
    type: EnumPropertyUserRoleTypeFieldUpdateOperationsInput
  }

  input PropertyUserCreateManyPropertyInput {
    id: Int
    dummyField: String!
    userId: Int!
  }

  input PropertyUserUpdateWithoutPropertyInput {
    dummyField: StringFieldUpdateOperationsInput
    user: UserUpdateOneRequiredWithoutPropertiesNestedInput
    roles: PropertyUserRoleUpdateManyWithoutUserNestedInput
  }

  input PropertyUserUncheckedUpdateWithoutPropertyInput {
    id: IntFieldUpdateOperationsInput
    dummyField: StringFieldUpdateOperationsInput
    userId: IntFieldUpdateOperationsInput
    roles: PropertyUserRoleUncheckedUpdateManyWithoutUserNestedInput
  }

  input PropertyUserUncheckedUpdateManyWithoutPropertyInput {
    id: IntFieldUpdateOperationsInput
    dummyField: StringFieldUpdateOperationsInput
    userId: IntFieldUpdateOperationsInput
  }

  type AggregateUser {
    _count: UserCountAggregateOutputType
    _avg: UserAvgAggregateOutputType
    _sum: UserSumAggregateOutputType
    _min: UserMinAggregateOutputType
    _max: UserMaxAggregateOutputType
  }

  type AggregateCompany {
    _count: CompanyCountAggregateOutputType
    _avg: CompanyAvgAggregateOutputType
    _sum: CompanySumAggregateOutputType
    _min: CompanyMinAggregateOutputType
    _max: CompanyMaxAggregateOutputType
  }

  type AggregateCompanyUser {
    _count: CompanyUserCountAggregateOutputType
    _avg: CompanyUserAvgAggregateOutputType
    _sum: CompanyUserSumAggregateOutputType
    _min: CompanyUserMinAggregateOutputType
    _max: CompanyUserMaxAggregateOutputType
  }

  type AggregatePropertyUserRole {
    _count: PropertyUserRoleCountAggregateOutputType
    _avg: PropertyUserRoleAvgAggregateOutputType
    _sum: PropertyUserRoleSumAggregateOutputType
    _min: PropertyUserRoleMinAggregateOutputType
    _max: PropertyUserRoleMaxAggregateOutputType
  }

  type AggregatePropertyUser {
    _count: PropertyUserCountAggregateOutputType
    _avg: PropertyUserAvgAggregateOutputType
    _sum: PropertyUserSumAggregateOutputType
    _min: PropertyUserMinAggregateOutputType
    _max: PropertyUserMaxAggregateOutputType
  }

  type AggregateProperty {
    _count: PropertyCountAggregateOutputType
    _avg: PropertyAvgAggregateOutputType
    _sum: PropertySumAggregateOutputType
    _min: PropertyMinAggregateOutputType
    _max: PropertyMaxAggregateOutputType
  }

  type UserCountOutputType {
    employedBy: Int!
    properties: Int!
    companies: Int!
  }

  type UserCountAggregateOutputType {
    id: Int!
    username: Int!
    _all: Int!
  }

  type UserAvgAggregateOutputType {
    id: Float
  }

  type UserSumAggregateOutputType {
    id: Int
  }

  type UserMinAggregateOutputType {
    id: Int
    username: String
  }

  type UserMaxAggregateOutputType {
    id: Int
    username: String
  }

  type CompanyCountOutputType {
    companyUsers: Int!
    propertyUsers: Int!
    properties: Int!
  }

  type CompanyCountAggregateOutputType {
    id: Int!
    name: Int!
    _all: Int!
  }

  type CompanyAvgAggregateOutputType {
    id: Float
  }

  type CompanySumAggregateOutputType {
    id: Int
  }

  type CompanyMinAggregateOutputType {
    id: Int
    name: String
  }

  type CompanyMaxAggregateOutputType {
    id: Int
    name: String
  }

  type CompanyUserCountAggregateOutputType {
    companyId: Int!
    userId: Int!
    dummyField: Int!
    _all: Int!
  }

  type CompanyUserAvgAggregateOutputType {
    companyId: Float
    userId: Float
  }

  type CompanyUserSumAggregateOutputType {
    companyId: Int
    userId: Int
  }

  type CompanyUserMinAggregateOutputType {
    companyId: Int
    userId: Int
    dummyField: String
  }

  type CompanyUserMaxAggregateOutputType {
    companyId: Int
    userId: Int
    dummyField: String
  }

  type PropertyUserRoleCountAggregateOutputType {
    id: Int!
    type: Int!
    userId: Int!
    _all: Int!
  }

  type PropertyUserRoleAvgAggregateOutputType {
    id: Float
    userId: Float
  }

  type PropertyUserRoleSumAggregateOutputType {
    id: Int
    userId: Int
  }

  type PropertyUserRoleMinAggregateOutputType {
    id: Int
    type: PropertyUserRoleType
    userId: Int
  }

  type PropertyUserRoleMaxAggregateOutputType {
    id: Int
    type: PropertyUserRoleType
    userId: Int
  }

  type PropertyUserCountOutputType {
    roles: Int!
  }

  type PropertyUserCountAggregateOutputType {
    id: Int!
    dummyField: Int!
    propertyId: Int!
    userId: Int!
    _all: Int!
  }

  type PropertyUserAvgAggregateOutputType {
    id: Float
    propertyId: Float
    userId: Float
  }

  type PropertyUserSumAggregateOutputType {
    id: Int
    propertyId: Int
    userId: Int
  }

  type PropertyUserMinAggregateOutputType {
    id: Int
    dummyField: String
    propertyId: Int
    userId: Int
  }

  type PropertyUserMaxAggregateOutputType {
    id: Int
    dummyField: String
    propertyId: Int
    userId: Int
  }

  type PropertyCountOutputType {
    users: Int!
  }

  type PropertyCountAggregateOutputType {
    id: Int!
    name: Int!
    companyId: Int!
    _all: Int!
  }

  type PropertyAvgAggregateOutputType {
    id: Float
    companyId: Float
  }

  type PropertySumAggregateOutputType {
    id: Int
    companyId: Int
  }

  type PropertyMinAggregateOutputType {
    id: Int
    name: String
    companyId: Int
  }

  type PropertyMaxAggregateOutputType {
    id: Int
    name: String
    companyId: Int
  }
`
