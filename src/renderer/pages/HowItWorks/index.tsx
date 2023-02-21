import { useColorModeValue } from '@chakra-ui/react';
import { FC, useMemo } from 'react';
import { useMediaQuery } from 'usehooks-ts';

const HowItWorks: FC<{}> = () => {
  const isLargerThan653 = useMediaQuery('(min-width: 653px)');
  const bgColor = useColorModeValue(
    'themeLight.textColor',
    'themeDark.textColor'
  );

  const Data = useMemo(
    () => [
      'To be able to make use of this application, you first need to log in with a github account credentials',
      "Having successfully logged into the user's github account, the application lists all existing github repositories it has access to",
      'The user can then proceed to select the number of repositories to add/remove specific topic(s)',
      'When done with the selection, click on the "Add Topic" button to pop up a Modal',
      'Type in the topic(s), comma seperated',
      'Click on the "Add" button to add those topic(s) to the repo(s) selected',
      'Same process applies when removing topic(s) from repo(s)',
      'Having successfully made change(s) to repo(s) topic, user can proceed to check out each repo for change(s) made to it',
      'Note that it may take a while for the changes to reflect on this application, so the user can click on the "Repo Github Page" button made available to be directed to the specific repository page on github',
      'Same process followed above also applies while trying to add/remove topic(s) from a repo while in the repository detail page, the changes only effect the specific repository',
      'When done with the process, the user can choose to log out of the application or remain logged in for future use cases',
    ],
    []
  );

  return (
    <div
      className={`h-[calc(100vh-80px)] flex ${
        isLargerThan653 ? 'flex-row' : 'flex-col w-full'
      } items-center p-5`}
    >
      <section
        className={`${
          isLargerThan653 ? 'w-[50%] h-full' : 'w-full h-[50%]'
        } flex flex-col items-center`}
      >
        <p className="mb-[5%] underline text-lg md:text-xl font-bold text-center">
          About
        </p>
        <p
          id="about-message"
          className="mb-[5%] max-w-[90%] italic text-sm md:text-lg text-justify"
        >
          This Application streamlines the process of adding or removal of
          Topics by developers and github users to one or more github
          repositories. With topics, exploring repositories in a particular
          subject area, finding projects to contribute to, and discovering new
          solutions to a specific problem becomes easy. Topics appear on the
          main page of a repository. Clicking on a topic name refers you to see
          related topics and a list of other repositories classified with that
          topic.
        </p>
      </section>
      <section
        className={`p-[1%] ${
          isLargerThan653 ? 'w-[50%] h-full' : 'w-full h-[50%]'
        } flex flex-col`}
      >
        <p className="mb-5 underline text-lg md:text-xl text-center font-bold">
          How It Works
        </p>
        <span
          className={`${
            isLargerThan653 ? 'h-fit' : 'h-52 mt-2.5 w-full'
          } flex flex-col items-center scroll-smooth overflow-y-auto generic-scrollbar`}
        >
          {Data.map((value, i) => (
            <div
              key={i}
              className="w-full h-fit px-[5%] py-3 flex items-center justify-start"
            >
              <span className="w-1 md:w-2 h-1 md:h-2 bg-black rounded-full mr-2"></span>
              <p className="text-justify italic w-[95%] text-sm md:text-lg">
                {value}
              </p>
            </div>
          ))}
        </span>
      </section>
    </div>
  );
};

export default HowItWorks;
