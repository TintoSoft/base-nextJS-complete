import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div>
      <h1>Probando NextJS</h1>
      <Link href="/firstpage">Ir a primera pagina</Link>
    </div>
  );
};

export default Home;
