import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head>
          <meta name="description"
                content="不知道写什么"/>
          <meta name="keywords" content="不知道写什么"/>
          <meta charSet="utf-8"/>
          <meta content="telephone=no" name="format-detection"/>
          <meta name="viewport"
                content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,minimal-ui"/>
          <title>不知道写什么</title>
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}