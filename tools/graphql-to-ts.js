const gqlSchema = require("../dist/typeDefs");
const fromSchema = require("@gql2ts/from-schema");

console.log(
  fromSchema.schemaToInterfaces(
    gqlSchema.default,
    {
      ignoreTypeNameDeclaration: true
    },
    {
      interfaceBuilder(name, body) {
        if (
          ![
            "IGraphQLResponseRoot",
            "IGraphQLResponseError",
            "IGraphQLResponseErrorLocation"
          ].includes(name)
        ) {
          // const newBody = body
          //   .split("\n")
          //   .map(              
          //     x =>
          //       x.includes("| null")
          //         ? x.replace(/\| null/g, "")
          //         : x
          //   )
          //   .join("\n");
          return `export interface ${name} ${body} `;
        }
      }
    }
  )
);
