"use client";

import { makeClient } from "@/apollo/client.apollo";
import { ApolloNextAppProvider } from "@apollo/experimental-nextjs-app-support";

// Define - type of props
type TProps = Readonly<{
    children: React.ReactNode;
}>;

// Component - apollo provider
const ApolloProvider = ({ children }: TProps) => {
    return (
        /* Apollo - graphql */
        <ApolloNextAppProvider makeClient={makeClient}>{children}</ApolloNextAppProvider>
    );
};

export default ApolloProvider;
