import type { CodegenConfig } from "@graphql-codegen/cli";

// Config - use code gen for generating graphql commands in @/graphql/gqls to @graphql/codegen
const config: CodegenConfig = {
    schema: "http://localhost:1337/graphql",
    documents: ["graphql/gqls/**/*.ts"],
    generates: {
        "./graphql/codegen/": {
            preset: "client",
            presetConfig: {
                gqlTagName: "gql",
            },
            plugins: [],
        },
    },
    ignoreNoDocuments: true,
};

export default config;
