rm -rf dist
ts-node tools/generateTypes.ts > src/types.ts
prettier --write src/types.ts
tsc