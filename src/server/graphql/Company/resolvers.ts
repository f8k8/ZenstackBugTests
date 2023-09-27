import { Resolvers } from '../../resolversTypes'

const resolvers: Resolvers = {
  Query: {
    findUniqueCompany: (_parent, args, { prisma }) => {
      return prisma.company.findUnique(args)
    },
    findFirstCompany: (_parent, args, { prisma }) => {
      return prisma.company.findFirst(args)
    },
    findManyCompany: (_parent, args, { prisma }) => {
      return prisma.company.findMany(args)
    },
    findManyCompanyCount: (_parent, args, { prisma }) => {
      return prisma.company.count(args)
    },
    aggregateCompany: (_parent, args, { prisma }) => {
      return prisma.company.aggregate(args)
    },
  },
  Mutation: {
    createOneCompany: (_parent, args, { prisma }) => {
      return prisma.company.create(args)
    },
    updateOneCompany: (_parent, args, { prisma }) => {
      return prisma.company.update(args)
    },
    deleteOneCompany: async (_parent, args, { prisma }) => {
      return prisma.company.delete(args)
    },
    upsertOneCompany: async (_parent, args, { prisma }) => {
      return prisma.company.upsert(args)
    },
    deleteManyCompany: async (_parent, args, { prisma }) => {
      return prisma.company.deleteMany(args)
    },
    updateManyCompany: (_parent, args, { prisma }) => {
      return prisma.company.updateMany(args)
    },
  },
}
export default resolvers
