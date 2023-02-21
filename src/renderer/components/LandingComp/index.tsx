import { FC } from 'react';
import Tilt from 'react-parallax-tilt';
import { Link } from 'react-router-dom';
import { Topic_svg } from 'renderer/App';
// import { useAppDispatch } from "src/globalState/stateHooks";
// import { firebaseSignInWithPopup } from '../../services/firebaseApp';

const LandingComp: FC<{}> = () => {
  // const dispatch = useAppDispatch();

  return (
    <div className="w-full h-[calc(100vh-90px)] md:h-[calc(100vh-90px)] lg:h-[calc(100vh-85px)] px-2.5">
      <div className="flex flex-wrap md:space-x-4 h-full py-6 md:py-3 items-center justify-center border-r border-t shadow-sm overflow-y-auto hidden-scrollbar">
        <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
          <img
            src={Topic_svg}
            alt="Topic"
            className="w-96 h-96 pt-10 border-l border-b shadow-sm"
          />
        </Tilt>

        <section className='items-center justify-center flex flex-col p-6 md:p-4'>
          <span className="flex flex-col md:flex-row items-center justify-center">
            <p className="text-center italic">
              Another Great Day To Create Splendid Topics...
            </p>
            <p className="text-center">
              Why not hop in let's get it started...😊
            </p>
          </span>
          <p className="text-center">
            Click on{' '}
            <Link
              to="/how-it-works"
              className="hover:cursor-pointer hover:text-indigo-600 hover:font-semibold focus:outline-none italic font-semibold"
            >
              How It Works
            </Link>{' '}
            for additional information
          </p>
          <button
          className='button after: active:scale-105 focus:outline-none m-5 uppercase px-6 py-2'
            // onClick={() => firebaseSignInWithPopup(dispatch)}
          >
            Login
          </button>
        </section>
      </div>
    </div>
  );
};

export default LandingComp;
