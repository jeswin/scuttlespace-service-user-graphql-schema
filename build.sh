rm -rf dist
ts-node tools/codegen/generateSchemaTypes.ts > src/schemaTypes.ts
tsc
prettier --write src/schemaTypes.ts