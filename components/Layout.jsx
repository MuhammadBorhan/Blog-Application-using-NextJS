import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import styles from "../styles/Home.module.css";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
