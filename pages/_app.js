import React from "react";
import { Toaster } from "react-hot-toast";

import { Layout } from "components";
import "../styles/globals.css";
import { AppContextProvider } from "../context/AppContextProvider";

function App({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </AppContextProvider>
  );
}

export default App;
