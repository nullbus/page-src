import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class RootDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="description" content="nullbus's website"/>
                    <meta name="keywords" content="nullbus,developer" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}