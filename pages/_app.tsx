import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from "../components/layout";
import Context from '../context/context';
import localFont from "next/font/local"

const gintoFont = localFont({src: '../assets/fonts/Ginto Nord Bold.ttf', variable: '--font-ginto'})
const fkDisplayFont = localFont({src: '../assets/fonts/FKDisplay-Regular.ttf', variable: '--font-fk-display'})
export default function App({ Component, pageProps }: AppProps) {
    return(
        <Context>
            <main className={`${gintoFont.variable} ${fkDisplayFont.variable}`}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </main>
        </Context>
    )
}
