import { FC } from 'react';
import LandingComp from 'renderer/components/LandingComp';
import { getUserData } from 'renderer/globalState/githubUser/githubUserSlice';
import { useAppSelector } from 'renderer/globalState/stateHooks';

const Home: FC<{}> = () => {
  const accessToken = useAppSelector(getUserData)?.token;

//   <RepoListing />
  let render = accessToken ? (
    <p>okay</p>
  ) : (
      <LandingComp />
  )

    return (
      <>
        {render}
      </>
    );
};

export default Home;
