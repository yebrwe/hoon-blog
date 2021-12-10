import Head from "next/head";
import Sidebar from "@components/common/Sidebar";
import Header from "@components/layout/Header";
import styles from "./PageLayout.module.css";
import { useState } from "react";
export default function PageLayout({ children, menus }) {
  const [sidebar, setSidebar] = useState(true);
  return (
    <>
      <Head>
        <title>Welcome to Hoon's blog!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.layout}>
        <Header sidebar={sidebar} setSidebar={setSidebar} />
        <div className={styles.container}>
          {<Sidebar sidebar={sidebar} menus={menus} />}
          <div className={styles.content}>{children}</div>
        </div>
      </main>
    </>
  );
}
