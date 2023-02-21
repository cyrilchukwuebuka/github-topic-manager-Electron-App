import { FC, ReactNode } from 'react';

interface IFooterLink {
  href: string;
  iconAs: ReactNode;
}

const FooterLink: FC<IFooterLink> = ({ href, iconAs }) => {
  return (
    <section className="pr-1.5 md:pr-2.5 hover:scale-105 hover:cursor-pointer focus:outline-none">
      {/* use ipc message to make shell open in a browser */}
      {iconAs}
      {/* <Link href={href} isExternal _focus={{ outline: 'none' }}>
      </Link> */}
    </section>
  );
};

export default FooterLink;
