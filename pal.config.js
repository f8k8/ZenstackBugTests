module.exports = {
    schema: "./prisma/schema.prisma",
    backend: {
      generator: "sdl",
      onDelete: true,
      output: "src/server/graphql",
    },
    frontend: {
      admin: {
        outPut: "./adminOut",
      },
    },
  };
  