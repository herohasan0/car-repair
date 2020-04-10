import Head from 'next/head';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>The Best Car Services</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" type="image/png" href="/favicon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Header />
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
