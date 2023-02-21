import {
  Flex,
  Icon,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { FC, useState } from 'react';
import { BiGitBranch, BiMoon } from 'react-icons/bi';
import { ImSun } from 'react-icons/im';
import { VscGithub, VscThreeBars } from 'react-icons/vsc';
import Tilt from 'react-parallax-tilt';
import { Link } from 'react-router-dom';
import { User_avatar } from 'renderer/App';
import { getUserData } from 'renderer/globalState/githubUser/githubUserSlice';
import {
  useAppDispatch,
  useAppSelector,
} from 'renderer/globalState/stateHooks';
import {
  firebaseSignInWithPopup,
  firebaseSignOut,
} from 'renderer/services/firebaseApp';
import { useMediaQuery } from 'usehooks-ts';
import DrawerCompenent from '../Drawer';

const Header: FC<{}> = () => {
  const isLargerThan770 = useMediaQuery('(min-width: 770px)');
  const isLargerThan500 = useMediaQuery('(min-width: 500px)');
  const isLargerThan400 = useMediaQuery('(min-width: 400px)');
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue('themeLight.bg', 'themeDark.bgBody');
  const iconColor = useColorModeValue('themeLight.icon', 'themeDark.icon');
  const logoColor = useColorModeValue('themeLight.logo', 'themeDark.logo');
  const icon = useColorModeValue(BiMoon, ImSun);
  const dispatch = useAppDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [toggle, setToggle] = useState(false)
  const userData = useAppSelector(getUserData).user;
  const avatar = userData?.photoURL;
  const accessToken = userData?.accessToken;

  return (
    <div className="px-5 py-3 shadow flex items-center justify-between">
      <section className="flex items-center">
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

      <section className="h-full w-[40%] flex items-center justify-between">
        <aside className="w-[90%] flex items-center justify-between">
          {isLargerThan770 && (
            <Link
              to="/how-it-works"
              className="focus:outline-none hover:scale-105 font-medium text-sm md:text-base transition-ease"
            >
              How It Works
            </Link>
          )}
          {isLargerThan400 && (
            <button
              className="font-medium text-sm md:text-base transition-ease hover:scale-105 hover:cursor-pointer"
              // onClick={
              //   accessToken
              //     ? () => firebaseSignOut(dispatch)
              //     : () => firebaseSignInWithPopup(dispatch)
              // }
            >
              {accessToken ? 'Log out' : 'Login'}
            </button>
          )}

          {/* should open this link on a new browser window or
          send an ipc communication to open it on a browser 
          "https://github.com/cyrilchukwuebuka/github-topic-manager" */}
          {isLargerThan500 && (
            <BiGitBranch
              onClick={() => ''}
              className="focus:outline-none w-4 md:w-5 h-4 md:h-5 text-indigo-500 hover:scale-105 transition-ease"
            />
          )}

          <BiMoon
            onClick={() => ''}
            className="focus:outline-none w-4 md:w-5 h-4 md:h-5 text-indigo-500 hover:scale-105 transition-ease"
          />
          {/* <Icon
            as={icon}
            onClick={toggleColorMode}
            mx={1}
            w={{ base: '18px', md: '20px', lg: '22px' }}
            h={{ base: '18px', md: '20px', lg: '22px' }}
            color={iconColor}
            _hover={{ transform: 'scale(1.15)', cursor: 'pointer' }}
          /> */}

          <span className="w-6 h-6 border rounded-full overflow-hidden border-gray-500">
            <img src={avatar ? `${avatar}` : `${User_avatar}`} alt="" />
          </span>
        </aside>

        <VscThreeBars
          onClick={() => setToggle(!toggle)}
          className="ml-5 md:ml-10 w-5 h-5 transition-ease hover:scale-105 hover:cursor-pointer"
        />

        <DrawerCompenent
          isOpen={toggle}
          onClose={setToggle}
          accessToken={accessToken}
        />
      </section>
    </div>
  );
};

export default Header;
