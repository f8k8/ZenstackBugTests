import { PrismaClient } from "@prisma/client";
import { enhance } from "@zenstackhq/runtime";

export type Context = {
  prisma: any;
  prismaWithoutPolicy: any;
  authInfo: {
    userID: number;
  };
};

const clientOptions: any = {};
if (process.env.DEBUG || process.env.NODE_ENV === "development") {
  clientOptions.log = ["query", "info", "warn", "error"];
}
const prisma = new PrismaClient(clientOptions);

export async function createContext({}): Promise<Context> {
  const user = await prisma.user.findFirst();
  return {
    prismaWithoutPolicy: prisma,
    prisma: enhance(prisma, {
      user,
    }),
    authInfo: {
        userID: user?.id
    }
  };
}
