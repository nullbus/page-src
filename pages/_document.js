import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class RootDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="description" content="nullbus's website"/>
                    <meta name="keywords" content="nullbus,developer" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no" />
                    <link rel="stylesheet" href="/tailwind.css" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
