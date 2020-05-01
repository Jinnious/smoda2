import Document, { Html, Head, Main, NextScript } from 'next/document'



class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,500&display=swap" rel="stylesheet">
    </link>
a
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument