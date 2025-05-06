import Head from "next/head";
import "../styles/globals.css";

function Application({Component, pageProps}) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default Application;
