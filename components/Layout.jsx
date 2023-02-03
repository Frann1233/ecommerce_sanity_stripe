import React from "react";
import Head from "next/head";

import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div>
      <div className="layout">
        <Head>
          <title>JS Mastery Store</title>
        </Head>
        <header>
          <Navbar />
        </header>
        <main className="main-containner">{children}</main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default Layout;
