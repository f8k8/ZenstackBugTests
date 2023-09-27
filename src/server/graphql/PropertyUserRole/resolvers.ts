import { Resolvers } from '../../resolversTypes'

const resolvers: Resolvers = {
  Query: {
    findUniquePropertyUserRole: (_parent, args, { prisma }) => {
      return prisma.propertyUserRole.findUnique(args)
    },
    findFirstPropertyUserRole: (_parent, args, { prisma }) => {
      return prisma.propertyUserRole.findFirst(args)
    },
    findManyPropertyUserRole: (_parent, args, { prisma }) => {
      return prisma.propertyUserRole.findMany(args)
    },
    findManyPropertyUserRoleCount: (_parent, args, { prisma }) => {
      return prisma.propertyUserRole.count(args)
    },
    aggregatePropertyUserRole: (_parent, args, { prisma }) => {
      return prisma.propertyUserRole.aggregate(args)
    },
  },
  Mutation: {
    createOnePropertyUserRole: (_parent, args, { prisma }) => {
      return prisma.propertyUserRole.create(args)
    },
    updateOnePropertyUserRole: (_parent, args, { prisma }) => {
      return prisma.propertyUserRole.update(args)
    },
    deleteOnePropertyUserRole: async (_parent, args, { prisma }) => {
      return prisma.propertyUserRole.delete(args)
    },
    upsertOnePropertyUserRole: async (_parent, args, { prisma }) => {
      return prisma.propertyUserRole.upsert(args)
    },
    deleteManyPropertyUserRole: async (_parent, args, { prisma }) => {
      return prisma.propertyUserRole.deleteMany(args)
    },
    updateManyPropertyUserRole: (_parent, args, { prisma }) => {
      return prisma.propertyUserRole.updateMany(args)
    },
  },
}
export default resolvers
