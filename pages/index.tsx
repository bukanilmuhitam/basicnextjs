import Image from 'next/image';
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout pageTitle="Home Page">

      <h1>This Home</h1>
      <Image src="/img/get.jpg" width={300} height={300} alt="Get" />
    </Layout>
  );
}
