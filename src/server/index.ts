import { ApolloServer } from "@apollo/server";

import { makeExecutableSchema } from "@graphql-tools/schema";
import { mergeTypeDefs } from "@graphql-tools/merge";
import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";
import { Context } from "./context";
import { GraphQLResolveInfo } from "graphql";
import { PrismaSelect } from "@paljs/plugins";
import { applyMiddleware } from "graphql-middleware";

let schema = makeExecutableSchema({
  typeDefs: mergeTypeDefs([typeDefs]),
  resolvers: [...resolvers],
});

const middleware = async (
  resolve,
  root,
  args,
  context: Context,
  info: GraphQLResolveInfo,
) => {
  const result = new PrismaSelect(info).value;
  if (Object.keys(result.select).length > 0) {
    args = {
      ...args,
      ...result,
    };
  }
  const resolveResult = await resolve(root, args, context, info);
  return resolveResult;
};

schema = applyMiddleware(schema, middleware);

export default function (config?) {
  return new ApolloServer({
    schema,
    ...(config ?? {}),
  });
}
