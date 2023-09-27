import { Resolvers } from '../../resolversTypes'

const resolvers: Resolvers = {
  Query: {
    findUniqueProperty: (_parent, args, { prisma }) => {
      return prisma.property.findUnique(args)
    },
    findFirstProperty: (_parent, args, { prisma }) => {
      return prisma.property.findFirst(args)
    },
    findManyProperty: (_parent, args, { prisma }) => {
      return prisma.property.findMany(args)
    },
    findManyPropertyCount: (_parent, args, { prisma }) => {
      return prisma.property.count(args)
    },
    aggregateProperty: (_parent, args, { prisma }) => {
      return prisma.property.aggregate(args)
    },
  },
  Mutation: {
    createOneProperty: (_parent, args, { prisma }) => {
      return prisma.property.create(args)
    },
    updateOneProperty: (_parent, args, { prisma }) => {
      return prisma.property.update(args)
    },
    deleteOneProperty: async (_parent, args, { prisma }) => {
      return prisma.property.delete(args)
    },
    upsertOneProperty: async (_parent, args, { prisma }) => {
      return prisma.property.upsert(args)
    },
    deleteManyProperty: async (_parent, args, { prisma }) => {
      return prisma.property.deleteMany(args)
    },
    updateManyProperty: (_parent, args, { prisma }) => {
      return prisma.property.updateMany(args)
    },
  },
}
export default resolvers
