import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { API_URL } from "../variables/variables";

export const clientMy = new ApolloClient({
    link: createHttpLink({
        uri: API_URL,
        fetchOption: { mode: "no-cors" },
    }),
    cache: new InMemoryCache(),
});
