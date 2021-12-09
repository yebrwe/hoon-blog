import Head from 'next/head'
import Sidebar from '@components/common/Sidebar'
import Header from '@components/layout/Header'
import Footer from '@components/layout/Footer'
import styles from './PageLayout.module.css'
export default function PageLayout({ children }) {
    return (
        <>
            <Head>
                <title>Welcome to blog!</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.layout}>
                <Header/>
                <div className="container">
                    <Sidebar>
                        사이드바입니다.
                    </Sidebar>
                    {
                        children
                    }
                </div>
            </main>

            <Footer />
        </>
    )
}
