import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import nhost from "./nhost"; // Ensure correct import

const httpLink = createHttpLink({
  uri: "https://ktkucbnyhybpruopvqyu.graphql.ap-south-1.nhost.run/v1",
});

const authLink = setContext(async (_, { headers }) => {
  const token = await nhost.auth.getAccessToken();
  console.log("Sending Token:", token); // Debugging line
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : "", // Ensure proper format
    },
  };
});


const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
