import * as fromSchema from "@gql2ts/from-schema";
import gqlSchema from "../src/typeDefs";

console.log(
  fromSchema.schemaToInterfaces(
    gqlSchema,
    {
      ignoreTypeNameDeclaration: true
    },
    {
      interfaceBuilder(name: string, body: string) {
        if (
          ![
            "IGraphQLResponseRoot",
            "IGraphQLResponseError",
            "IGraphQLResponseErrorLocation"
          ].includes(name)
        ) {
          const newBody = body
            .split("\n")
            .map(
              x =>
                x.includes("permissions: Array<IPermissionDTO> | null;")
                  ? "permissions?: Array<IPermissionDTO> | null;"
                  : x
            )
            .join("\n");
          return `export interface ${name} ${newBody} `;
        }
      }
    }
  )
);
