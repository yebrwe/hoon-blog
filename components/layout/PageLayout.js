import Head from 'next/head'
import Sidebar from '@components/common/Sidebar'
import Header from '@components/layout/Header'
import Footer from '@components/layout/Footer'
import styles from './PageLayout.module.css'
import { useState } from 'react'
export default function PageLayout({ children }) {
    const [sidebar, setSidebar] = useState(false);
    return (
        <>
            <Head>
                <title>Welcome to blog!</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.layout}>
                <Header sidebar={sidebar} setSidebar={setSidebar} />
                <div className={styles.container}>
                    {
                        <Sidebar sidebar={sidebar}>
                            사이드바입니다.
                        </Sidebar>                        
                    }
                    <div className={styles.content}>
                        {
                            children
                        }
                    </div>
                </div>
            </main>

            <Footer />
        </>
    )
}
