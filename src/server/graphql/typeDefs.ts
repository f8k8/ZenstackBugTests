import Property from './Property/typeDefs'
import PropertyUser from './PropertyUser/typeDefs'
import PropertyUserRole from './PropertyUserRole/typeDefs'
import CompanyUser from './CompanyUser/typeDefs'
import Company from './Company/typeDefs'
import User from './User/typeDefs'
import { mergeTypeDefs } from '@graphql-tools/merge'
import InputTypes from './InputTypes'

export default mergeTypeDefs([
  InputTypes,
  User,
  Company,
  CompanyUser,
  PropertyUserRole,
  PropertyUser,
  Property,
])
