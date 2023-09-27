# ZenstackBugTests

There's an issue when trying to update with a connection. Steps to reproduce:

- Add an `.env.test` with a `DATABASE_URL="..."` entry. Note that the build step uses `prisma db push --accept-data-loss`, so don't use a DB that you care about 
- `npm i` and then run the app from VS Code
- The app launches an Apollo GraphQL server which can be accessed via http://localhost:4000/. From there, run the following mutations:

Operation
```
mutation CreateUser($data: UserCreateInput!) {
  createOneUser(data: $data) {
    id
  }
}
```
Variables
```
{
  "data": {
    "username": "test@example.com"
  }
}
```

- Then

Operation
```
mutation CreateCompany($data: CompanyCreateInput!) {
  createOneCompany(data: $data) {
    id
  }
}
```
Variables
```
{
  "data": {
    "name": "My Company",
    "companyUsers": {
      "create": {
        "dummyField": "",
        "user": {
          "connect": {
            "id": 1
          }
        }
      }
    },
    "propertyUsers": {
      "connect": {
        "id": 1
      }
    },
    "properties": {
      "create": [{
        "name": "Test",
      }]
    }
  }
}
```

- Then

Operation
```
mutation UpdateProperty($data: PropertyUpdateInput!, $where: PropertyWhereUniqueInput!) {
  updateOneProperty(data: $data, where: $where) {
    id
  }
}
```
Variables
```
{
  "data": {
    "users": {
      "create": {
        "dummyField": "",
        "roles": {
          "createMany": {
            "data": {
              "type": "Owner"
            }
          }
        },
        "user": {
          "connect": {
            "id": 1
          }
        }
      }
    }
  }, "where": {
    "id": 1
  }
}
```

The following error occurs:

```
  "Error calling enhanced Prisma method `update`: ",
          "Invalid `db[model].create()` invocation in",
          "node_modules\\@zenstackhq\\runtime\\enhancements\\policy\\handler.js:328:44",
          "",
          "  325 if (this.shouldLogQuery) {",
          "  326     this.logger.info(`[policy] \\`create\\` ${model}: ${(0, utils_1.formatObject)(createArgs)}`);",
          "  327 }",
          "→ 328 const result = yield db[model].create({",
          "        data: {",
          "          dummyField: \"\",",
          "          user: {",
          "            connect: {",
          "              id: 1",
          "            }",
          "          },",
          "          roles: {",
          "            createMany: {",
          "              data: [",
          "                {",
          "                  type: \"Owner\"",
          "                }",
          "              ]",
          "            }",
          "          },",
          "          propertyId: 1,",
          "      +   property: {",
          "      +     create: PropertyCreateWithoutUsersInput | PropertyUncheckedCreateWithoutUsersInput,",
          "      +     connectOrCreate: PropertyCreateOrConnectWithoutUsersInput,",
          "      +     connect: PropertyWhereUniqueInput",
          "      +   }",
          "        },",
          "        select: {",
          "          id: true,",
          "          roles: {",
          "            select: {",
          "              id: true",
          "            }",
          "          }",
          "        }",
          "      })",
          "",
          "Argument `property` is missing.",
          "    at Object.updateOneProperty
```
