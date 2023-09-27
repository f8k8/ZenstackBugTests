import Property from './Property/resolvers'
import PropertyUser from './PropertyUser/resolvers'
import PropertyUserRole from './PropertyUserRole/resolvers'
import CompanyUser from './CompanyUser/resolvers'
import Company from './Company/resolvers'
import User from './User/resolvers'
export default [
  User,
  Company,
  CompanyUser,
  PropertyUserRole,
  PropertyUser,
  Property,
]
