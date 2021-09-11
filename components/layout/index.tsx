import { ReactNode } from 'react';
import Head from 'next/head';
import Footer from '../footer';
import Header from '../header';

interface LayoutProps{
    children : ReactNode,
    pageTitle : string
}
export default function Layout(props : LayoutProps) {
  const { children, pageTitle } = props;
  return (
    <>
      <Head>
        <title>
          Basic Next JS |
          {' '}
          {pageTitle}
        </title>
        <meta name="description" content="Website basic next js" />
      </Head>
      <div>
        <Header />
        <div>{children}</div>
        <Footer />
      </div>
    </>
  );
}
