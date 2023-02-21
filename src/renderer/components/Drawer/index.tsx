import {
  useColorModeValue
} from '@chakra-ui/react';
import { FC, useEffect, useMemo } from 'react';
import { BsLinkedin, BsTwitter } from 'react-icons/bs';
import { FaInstagram } from 'react-icons/fa';
import { GrFormClose } from 'react-icons/gr';
import { VscGithub } from 'react-icons/vsc';
import Tilt from 'react-parallax-tilt';
import { Link } from 'react-router-dom';
// import { useAppDispatch } from "src/globalState/stateHooks";
// import {
//   firebaseSignInWithPopup,
//   firebaseSignOut
// } from "../../services/firebaseApp";
import { Flag } from 'renderer/App';
import { useAppDispatch } from 'renderer/globalState/stateHooks';
import DrawerFooterLink from '../Link/DrawerFooterLink';

type DrawerCompenentProps = {
  isOpen: boolean;
  onClose: (x: boolean) => void;
  accessToken: string;
};

const DrawerCompenent: FC<DrawerCompenentProps> = ({
  isOpen,
  onClose,
  accessToken,
}) => {
  const dispatch = useAppDispatch();
  const bgColor = useColorModeValue('themeLight.bg', 'themeDark.bgBody');
  const logoColor = useColorModeValue('themeLight.logo', 'themeDark.logo');
  const bgInstagram = useColorModeValue('red', 'white');
  const bgGithub = useColorModeValue('black', 'white');
  const bgLinkedIn = useColorModeValue('#0077b5', 'white');
  const bgTwitter = useColorModeValue('#1DA1F2', 'white');

  const FooterLinkData = useMemo(
    () => [
      {
        href: 'https://github.com/cyrilchukwuebuka',
        iconAs: VscGithub,
        bg: bgGithub,
      },
      {
        href: 'https://www.instagram.com/chuk_cy/?hl=en',
        iconAs: FaInstagram,
        bg: bgInstagram,
      },
      {
        href: 'https://twitter.com/hooolycode',
        iconAs: BsTwitter,
        bg: bgTwitter,
      },
      {
        href: 'https://linkedin.com/in/chukwuebuka-cyril-muofunanya',
        iconAs: BsLinkedin,
        bg: bgLinkedIn,
      },
    ],
    [bgGithub, bgInstagram, bgLinkedIn, bgTwitter]
  );

  useEffect(() => {
    document.addEventListener(
      'keydown',
      (e) => e.key === 'Escape' && onClose(false)
    );

    return () => {
      document.removeEventListener('keydown', (e) => e.key === 'Escape');
    };
  }, []);

  return (
    <div
      className={`z-10 ${
        isOpen ? 'flex' : 'flex translate-x-full'
      } justify-end overflow-y-hidden fixed top-0 bottom-0 left-0 right-0 bg-black/50 transition-ease h-screen`}
    >
      <section
        onClick={() => onClose(false)}
        className="fixed top-0 bottom-0 left-0 right-0"
      ></section>
      <section className="relative w-full p-5 md:p-10 sm:w-[50%] md:w-[40%] lg:w-[30%] bg-slate-100 h-screen place-self-end">
        <div
          onClick={() => onClose(false)}
          className="hover:cursor-pointer hover:bg-slate-200 transition-ease absolute top-5 right-7 z-10 w-8 h-8 rounded border flex items-center justify-center"
        >
          <GrFormClose className="w-6 h-6" />
        </div>

        <section className="flex items-center h-[10vh]">
          <Link to="/" className="focus:outline-none">
            <div className="flex items-center space-x-2">
              <Tilt tiltMaxAngleX={20} tiltMaxAngleY={20}>
                <VscGithub className="w-7 h-7" />
              </Tilt>
              <aside className="flex flex-col items-center space-y-0 ">
                <p className="font-bold leading-none">TOPIC</p>
                <p className="font-bold leading-none">MANAGER</p>
              </aside>
            </div>
          </Link>
        </section>

        <section className="flex flex-col space-y-2 h-[65vh] pt-5">
          <Link
            to="/how-it-works"
            className="hover:cursor-pointer hover:scale-105 transition-ease focus:outline-none font-medium w-fit"
          >
            How It Works
          </Link>
          <button
            className="hover:cursor-pointer hover:scale-105 transition-ease focus:outline-none font-medium w-fit"
            // onClick={
            //   accessToken
            //     ? () => firebaseSignOut(dispatch)
            //     : () => firebaseSignInWithPopup(dispatch)
            // }
          >
            {accessToken ? 'Log out' : 'Login'}
          </button>

          {/* sends ipc message to use shell tp open link on browser 
          "https://github.com/cyrilchukwuebuka/github-topic-manager"*/}
          <button className="hover:cursor-pointer hover:scale-105 transition-ease focus:outline-none font-medium w-fit">
            <Link
              className="hover:cursor-pointer font-medium"
              to="https://github.com/cyrilchukwuebuka/github-topic-manager"
              // use ipc to make shell open the link on a browser
            >
              Fork Repo
            </Link>
          </button>
        </section>

        <section className="max-h-[25vh]">
          <div className="flex flex-col px-1 py-1.5 h-full w-full border-t items-center justify-center">
            <div className="pl-2.5 flex items-center justify-center">
              <p className="pr-2.5">© 2022</p>
              <span className="w-4 h-4 mr-2.5">
                <img src={Flag} alt="Flag" className="w-full h-full" />
              </span>
            </div>
            <p>Chukwuebuka Cyril Muofunanya</p>
            <div className="flex items-center justify-center pr-2.5">
              {FooterLinkData.map((data) => (
                <DrawerFooterLink
                  href={data.href}
                  iconAs={data.iconAs}
                  bg={data.bg}
                />
              ))}
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default DrawerCompenent;
