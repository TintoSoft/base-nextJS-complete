import { Topbar } from "components/organisms/Topbar";
import { Footer } from "components/organisms/Footer";
import { Head } from "components/atoms/Head";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Probando next</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Topbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};