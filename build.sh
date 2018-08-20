rm -rf dist
ts-node tools/graphql-to-ts.ts > src/schemaTypes.ts
tsc
prettier --write src/schemaTypes.ts