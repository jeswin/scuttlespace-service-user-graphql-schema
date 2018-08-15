rm -rf dist
tsc src/typeDefs.ts --outDir dist/
node tools/graphql-to-ts.js > src/schemaTypes.ts
tsc
prettier --write src/schemaTypes.ts