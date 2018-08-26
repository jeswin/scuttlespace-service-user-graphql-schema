import * as codegen from "graphql-to-ts";
import { schema } from "../src";

console.log(codegen.generateTypes(schema));
