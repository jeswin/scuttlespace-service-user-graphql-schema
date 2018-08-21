rm -rf dist
ts-node tools/graphqlToTS.ts > src/schemaTypes.ts
tsc
prettier --write src/schemaTypes.ts