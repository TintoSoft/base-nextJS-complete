import Link from 'next/link';

type LinkProps = {
  href: string;
  children: React.ReactNode;
};

const CustomLink = ({ href, children }: LinkProps) => {
  return <Link href={href}>{children}</Link>;
};

export { CustomLink as Link };
