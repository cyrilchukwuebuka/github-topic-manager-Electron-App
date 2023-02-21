import { FC, ReactNode } from 'react';

interface IDrawerFooterLink {
  href: string;
  iconAs: ReactNode;
}

const DrawerFooterLink: FC<IDrawerFooterLink> = ({ href, iconAs }) => {
  return (
    <section className="pr-2.5 hover:scale-105 hover:cursor-pointer focus:outline-none">
      {/* use ipc message to make shell open in a browser */}
      {iconAs}
      {/* <Link href={href} isExternal _focus={{ outline: 'none' }}>
      </Link> */}
    </section>
  );
};

export default DrawerFooterLink;
