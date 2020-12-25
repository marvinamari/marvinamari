import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html land="en">
        <Head>
        <meta charSet="UTF-8" />
        <meta name="author" content="Marvin Dore" />
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Coding tutorials and examples." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
