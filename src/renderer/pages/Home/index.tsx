import { FC } from 'react';
import LandingComp from 'renderer/components/LandingComp';
import RepoListing from 'renderer/components/RepoListing';
import { getUserData } from 'renderer/globalState/githubUser/githubUserSlice';
import { useAppSelector } from 'renderer/globalState/stateHooks';

const Home: FC<{}> = () => {
  const accessToken = useAppSelector(getUserData)?.token;

  let render = !accessToken ? <RepoListing /> : <LandingComp />;

    return (
      <>
        {render}
      </>
    );
};

export default Home;
