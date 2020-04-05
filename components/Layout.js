import Header from './Header';
import Head from 'next/head';

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>The Best Car Services</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Header />
      {children}
    </div>
  );
}

export default Layout;
