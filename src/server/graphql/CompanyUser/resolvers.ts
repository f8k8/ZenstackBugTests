import { Resolvers } from '../../resolversTypes'

const resolvers: Resolvers = {
  Query: {
    findUniqueCompanyUser: (_parent, args, { prisma }) => {
      return prisma.companyUser.findUnique(args)
    },
    findFirstCompanyUser: (_parent, args, { prisma }) => {
      return prisma.companyUser.findFirst(args)
    },
    findManyCompanyUser: (_parent, args, { prisma }) => {
      return prisma.companyUser.findMany(args)
    },
    findManyCompanyUserCount: (_parent, args, { prisma }) => {
      return prisma.companyUser.count(args)
    },
    aggregateCompanyUser: (_parent, args, { prisma }) => {
      return prisma.companyUser.aggregate(args)
    },
  },
  Mutation: {
    createOneCompanyUser: (_parent, args, { prisma }) => {
      return prisma.companyUser.create(args)
    },
    updateOneCompanyUser: (_parent, args, { prisma }) => {
      return prisma.companyUser.update(args)
    },
    deleteOneCompanyUser: async (_parent, args, { prisma }) => {
      return prisma.companyUser.delete(args)
    },
    upsertOneCompanyUser: async (_parent, args, { prisma }) => {
      return prisma.companyUser.upsert(args)
    },
    deleteManyCompanyUser: async (_parent, args, { prisma }) => {
      return prisma.companyUser.deleteMany(args)
    },
    updateManyCompanyUser: (_parent, args, { prisma }) => {
      return prisma.companyUser.updateMany(args)
    },
  },
}
export default resolvers
