import Head from "next/head";

type HeadProps = {
  children: React.ReactNode;
};

export const CustomHead = ({ children }: HeadProps) => {
  return <Head>{children}</Head>;
};

export { CustomHead as Head };
