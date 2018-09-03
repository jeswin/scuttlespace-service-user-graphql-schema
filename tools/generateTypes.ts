import * as codegen from "graphql-to-ts";
import {
  ITSEnumDefinition,
  ITSInterfaceDefinition
} from "graphql-to-ts/dist/types";
import prettier = require("prettier");
import { schema } from "../src";

function generateEnums(enums: ITSEnumDefinition[]) {
  return enums.map(
    e => `
    export enum ${e.name} {
      ${e.values.join(",")}
    }
    `
  );
}

function generateInterfaces(interfaces: ITSInterfaceDefinition[]) {
  return interfaces
    .map(
      i => `
    export interface ${i.name} {
      ${i.fields.map(f => `${f.name}: ${f.type};`).join("")}
    }
    `
    )
    .join("");
}

const types = codegen.getTypes(schema);

console.log(
  prettier.format(
    `
    ${generateEnums(types.enums)}
    ${generateInterfaces(
      types.interfaces.filter(x => !["IQuery", "IMutation"].includes(x.name))
    )}
    `,
    { parser: "typescript" }
  )
);
