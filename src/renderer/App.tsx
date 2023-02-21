import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import {
  Container,
  Flex,
  Text,
  useColorModeValue,
  useMediaQuery,
} from '@chakra-ui/react';
import flag from '../../assets/flag.png';
import topic_svg from '../../assets/topic.svg';
import user_avatar from '../../assets/avatar.png';
import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';

export const Flag = flag;
export const Topic_svg = topic_svg;
export const User_avatar = user_avatar;

export const TOKEN = 'token';

export default function App() {
  // const dispatch = useAppDispatch();
  const bgColor = useColorModeValue('themeLight.bg', 'themeDark.bgBody');
  const [isLargerThan310] = useMediaQuery('(min-width: 310px)');

  return (
    <>
      {isLargerThan310 ? (
        <div className="flex flex-col">
          <Router>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="how-it-works" element={<HowItWorks />} />
                {/* 
                <Route path="repo/:repoID" element={<RepoDetail />} />
                <Route path="*" element={<PageNotFound />} /> */}
              </Route>
            </Routes>
          </Router>
        </div>
      ) : (
        <div className="h-screen">
          <span className="flex flex-col items-center justify-center py-[20%] px-[4%] h-full w-full">
            <p className="text-center leading-10 font-semibold">
              Hello,...Welcome to TOPIC MANAGER
            </p>
            <p className="text-center leading-10 italic">
              It is advisable to use desktop mode or desktop screen to view the
              app as it is still in the development stage for the mobile
              responsiveness.
            </p>
            <p className="text-center leading-10 italic">
              We apologize for any inconveniences.
            </p>
          </span>
        </div>
      )}
    </>
  );
}

// npm i react-reveal
