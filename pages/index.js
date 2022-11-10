import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import Section1 from "../components/Section1";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Blog App Using NextJS</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <Section1 />
        </main>
      </div>
    </Layout>
  );
}
