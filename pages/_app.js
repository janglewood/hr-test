import { ApolloProvider } from "@apollo/client";
import RootLayout from "../app/layout";
import "../styles/globals.css";
import client from "../apollo-client";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </ApolloProvider>
  );
}

export default MyApp;
