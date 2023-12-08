import { ApolloProvider } from "@apollo/client";
import RootLayout from "../app/layout";
import client from "../apollo-client";
import { useRouter } from "next/router";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // we need this effect to protect /info page from unauthnticated users
  useEffect(() => {
    // check for window because we can render pages on server and in this case we don't have window and localStorage
    if (window !== undefined && localStorage) {
      const userIsAuthenticated = JSON.parse(localStorage.getItem("user")).name;

      if (!userIsAuthenticated && router.pathname === "/info") {
        router.replace("/");
      }
    }
  }, [router]);

  return (
    <ApolloProvider client={client}>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </ApolloProvider>
  );
}

export default MyApp;
