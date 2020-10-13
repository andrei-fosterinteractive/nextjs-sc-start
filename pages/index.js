import Head from 'next/head';
import Intro from '../components/intro';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Title of the Site</title>
        <meta name='description' content='Meta Description of the Site' />
      </Head>
      <Header />
      <main>
        <Intro />
      </main>
      <Footer />
    </>
  );
}
