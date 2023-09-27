import { Resolvers } from '../../resolversTypes'

const resolvers: Resolvers = {
  Query: {
    findUniquePropertyUser: (_parent, args, { prisma }) => {
      return prisma.propertyUser.findUnique(args)
    },
    findFirstPropertyUser: (_parent, args, { prisma }) => {
      return prisma.propertyUser.findFirst(args)
    },
    findManyPropertyUser: (_parent, args, { prisma }) => {
      return prisma.propertyUser.findMany(args)
    },
    findManyPropertyUserCount: (_parent, args, { prisma }) => {
      return prisma.propertyUser.count(args)
    },
    aggregatePropertyUser: (_parent, args, { prisma }) => {
      return prisma.propertyUser.aggregate(args)
    },
  },
  Mutation: {
    createOnePropertyUser: (_parent, args, { prisma }) => {
      return prisma.propertyUser.create(args)
    },
    updateOnePropertyUser: (_parent, args, { prisma }) => {
      return prisma.propertyUser.update(args)
    },
    deleteOnePropertyUser: async (_parent, args, { prisma }) => {
      return prisma.propertyUser.delete(args)
    },
    upsertOnePropertyUser: async (_parent, args, { prisma }) => {
      return prisma.propertyUser.upsert(args)
    },
    deleteManyPropertyUser: async (_parent, args, { prisma }) => {
      return prisma.propertyUser.deleteMany(args)
    },
    updateManyPropertyUser: (_parent, args, { prisma }) => {
      return prisma.propertyUser.updateMany(args)
    },
  },
}
export default resolvers
