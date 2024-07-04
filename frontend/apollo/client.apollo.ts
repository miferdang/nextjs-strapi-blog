import { ApolloLink, HttpLink } from "@apollo/client";
import { loadDevMessages, loadErrorMessages } from "@apollo/client/dev";
import { ApolloClient, InMemoryCache, SSRMultipartLink } from "@apollo/experimental-nextjs-app-support";
import { setVerbosity } from "ts-invariant";

import { onError } from "@apollo/client/link/error";

// Handle - debug when env is development
if (process.env.NODE_ENV === "development") {
    setVerbosity("debug");
    loadDevMessages();
    loadErrorMessages();
}

// Define - apollo client for client side
export const makeClient = () => {
    // Define - HTTP link for making requests to the GraphQL server
    const httpLink = new HttpLink({
        uri: process.env.NEXT_PUBLIC_CMS_GRAPHQL_URL,
        fetchOptions: { cache: "no-store" },
    });

    // Define - error link
    const errorLink = onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors)
            graphQLErrors.forEach(({ message, locations, path }) =>
                console.error(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
            );
        if (networkError) console.error(`[Network error]: ${networkError}`);
    });

    return new ApolloClient({
        // Create - connect to use apollo dev tool
        connectToDevTools: true,
        // ssrMode: true,
        credentials: "same-origin",
        // Define - cache store normalised on browser side, so can be reused
        cache: new InMemoryCache(),
        // Create - when in SSR, strip fragments marked with @defer, else create only Apollo Http Link
        link:
            typeof window === "undefined"
                ? ApolloLink.from([
                      new SSRMultipartLink({
                          stripDefer: true,
                      }),
                      httpLink,
                      errorLink,
                  ])
                : httpLink,
    });
};
