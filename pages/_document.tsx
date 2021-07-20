import Document, { Html, Head, Main, NextScript } from 'next/document';

class AppDocument extends Document {
  // метод, чтобы страницы из pages знали какие пропсы есть в приложении
  // и getInitialProps будет прокидывать их дальше в другие страницы
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Clubhouse: Drop-in audio chat</title>
          <link rel="preconnect" href="https:/fonts.gstatic.com" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap" />
        </Head>
        <body>
          {/* в Main передается страница (рум, главная стр и тд)*/}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;
