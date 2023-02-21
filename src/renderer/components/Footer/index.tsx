import { Flex, useColorModeValue } from '@chakra-ui/react';
import { FC, useMemo } from 'react';
import { BsLinkedin, BsTwitter } from 'react-icons/bs';
import { FaInstagram } from 'react-icons/fa';
import { VscGithub } from 'react-icons/vsc';
import { Flag } from 'renderer/App';
import FooterLink from '../Link/FooterLink';

const Footer: FC<{}> = () => {
  const bgColor = useColorModeValue('themeLight.bg', 'themeDark.bgBody');

  const FooterLinkData = useMemo(
    () => [
      {
        href: 'https://github.com/cyrilchukwuebuka',
        iconAs: <VscGithub className="w-4 h-4 text-black" />,
      },
      {
        href: 'https://www.instagram.com/chuk_cy/?hl=en',
        iconAs: <FaInstagram className="w-4 h-4 text-red-500" />,
      },
      {
        href: 'https://twitter.com/hooolycode',
        iconAs: <BsTwitter className="w-4 h-4 text-blue-500" />,
      },
      {
        href: 'https://linkedin.com/in/chukwuebuka-cyril-muofunanya',
        iconAs: <BsLinkedin className="w-4 h-4 text-blue-600" />,
      },
    ],
    []
  );

  return (
    <div className="flex px-1 py-1.5 h-7 w-full items-center justify-between border-t shadow-sm">
      <section className="flex space-x-2 pl-2.5 items-center justify-center">
        <span className="flex items-center justify-center">
          <p className="flex items-center pr-2.5">© 2022</p>
          <p className="w-4 h-4">
            <img src={Flag} alt="flag" className="h-full w-full" />
          </p>
        </span>
        <p>Chukwuebuka Cyril Muofunanya</p>
      </section>
      <section className="flex space-x-2 items-center justify-center pr-2.5">
        {FooterLinkData.map((data) => (
          <FooterLink href={data.href} iconAs={data.iconAs} />
        ))}
      </section>
    </div>
  );
};

export default Footer;
