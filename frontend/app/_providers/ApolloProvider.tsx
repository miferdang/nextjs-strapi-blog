"use client";

import { makeClient } from "@/apollo/client.apollo";
import { ApolloNextAppProvider } from "@apollo/experimental-nextjs-app-support";

// Define - type of props
type Props = Readonly<{
    children: React.ReactNode;
}>;

// Component - apollo provider
const ApolloProvider = ({ children }: Props) => {
    return (
        /* Apollo - graphql */
        <ApolloNextAppProvider makeClient={makeClient}>{children}</ApolloNextAppProvider>
    );
};

export default ApolloProvider;
