import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  Icon,
  Image,
  LinkBox,
  LinkOverlay,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { FC, useEffect, useMemo } from 'react';
import { BsLinkedin, BsTwitter } from 'react-icons/bs';
import { FaInstagram } from 'react-icons/fa';
import { VscGithub } from 'react-icons/vsc';
import { GrFormClose } from 'react-icons/gr';
import Tilt from 'react-parallax-tilt';
import { Link } from 'react-router-dom';
// import { useAppDispatch } from "src/globalState/stateHooks";
// import {
//   firebaseSignInWithPopup,
//   firebaseSignOut
// } from "../../services/firebaseApp";
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
  // const dispatch = useAppDispatch();
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
      } pt-12 md:pt-0 justify-end overflow-y-hidden fixed top-0 bottom-0 left-0 right-0 bg-black/50 transition-ease h-screen`}
    >
      <section className="fixed top-0 bottom-0 left-0 right-0"></section>
      <section className="relative w-full p-5 md:p-10 sm:w-[60%] md:w-[40%] lg:w-[30%] bg-slate-100 h-full place-self-end">
        <div
          onClick={() => onClose(false)}
          className="hover:cursor-pointer hover:bg-slate-200 transition-ease absolute top-5 right-7 z-10 w-8 h-8 rounded border flex items-center justify-center"
        >
          <GrFormClose className="w-6 h-6" />
        </div>

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
      </section>
    </div>
    // <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
    //   <DrawerOverlay />
    //   <DrawerContent backgroundColor={bgColor}>
    //     <DrawerHeader>
    //       <Flex w="100%" align="center" justify="space-between">
    //         <Box alignItems="center">
    //           <LinkBox>
    //             <HStack _hover={{ cursor: 'pointer' }}>
    //               <LinkOverlay
    //                 as={ReactLink}
    //                 to="/"
    //                 _focus={{ outline: 'none' }}
    //               >
    //                 <Tilt tiltMaxAngleX={20} tiltMaxAngleY={20}>
    //                   <Icon as={VscGithub} w={35} h={35} color={logoColor} />
    //                 </Tilt>
    //               </LinkOverlay>
    //               <VStack>
    //                 <Text fontWeight="bold" lineHeight="10px" color={logoColor}>
    //                   TOPIC
    //                 </Text>
    //                 <Text fontWeight="bold" lineHeight="10px" color={logoColor}>
    //                   MANAGER
    //                 </Text>
    //               </VStack>
    //             </HStack>
    //           </LinkBox>
    //         </Box>
    //         <Button h={10} w={10} variant="outline" m={3} onClick={onClose}>
    //           x
    //         </Button>
    //       </Flex>
    //     </DrawerHeader>

    //     <DrawerBody>
    //       <Box
    //         mb="10px"
    //         _hover={{ transform: 'scale(1.02)', cursor: 'pointer' }}
    //       >
    //         <Link
    //           as={ReactLink}
    //           to="/how-it-works"
    //           _focus={{ outline: 'none' }}
    //           _hover={{ textDecoration: 'none' }}
    //           fontWeight="500"
    //         >
    //           How It Works
    //         </Link>
    //       </Box>
    //       <Text
    //         mb="10px"
    //         _hover={{ transform: 'scale(1.02)', cursor: 'pointer' }}
    //         fontWeight="500"
    //         // onClick={
    //         //   accessToken
    //         //     ? () => firebaseSignOut(dispatch)
    //         //     : () => firebaseSignInWithPopup(dispatch)
    //         // }
    //       >
    //         {accessToken ? 'Log out' : 'Login'}
    //       </Text>
    //       <Box
    //         mb="10px"
    //         _hover={{ transform: 'scale(1.02)', cursor: 'pointer' }}
    //       >
    //         <Link
    //           href="https://github.com/cyrilchukwuebuka/github-topic-manager"
    //           _hover={{ cursor: 'pointer' }}
    //           fontWeight="500"
    //         >
    //           Fork Repo
    //         </Link>
    //       </Box>
    //     </DrawerBody>

    //     <DrawerFooter>
    //       <Flex
    //         direction="column"
    //         px="4px"
    //         py="6px"
    //         h="100%"
    //         w="100%"
    //         bg={bgColor}
    //         borderTop="1px"
    //         borderColor="gray.200"
    //         align="center"
    //         justify="space-between"
    //       >
    //         <Flex paddingLeft="10px" align="center" justify="center">
    //           <Text paddingRight="10px">© 2022</Text>
    //           <Box w="15px" h="15px" marginRight="10px">
    //             <Image w="100%" h="100%" src="/images/flag.png" />
    //           </Box>
    //         </Flex>
    //         <Text>Chukwuebuka Cyril Muofunanya</Text>
    //         <Flex align="center" justify="center" paddingRight="10px">
    //           {FooterLinkData.map((data) => (
    //             <DrawerFooterLink
    //               href={data.href}
    //               iconAs={data.iconAs}
    //               bg={data.bg}
    //             />
    //           ))}
    //         </Flex>
    //       </Flex>
    //     </DrawerFooter>
    //   </DrawerContent>
    // </Drawer>
  );
};

export default DrawerCompenent;
