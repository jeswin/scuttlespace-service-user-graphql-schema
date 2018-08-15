rm -rf dist
tsc src/schema.ts --outDir dist/
node tools/graphql-to-ts.js > src/schema-types.ts
tsc
prettier --write src/schema-types.ts