import {
  Spinner
} from '@chakra-ui/react';
import type { GraphQlQueryResponseData } from '@octokit/graphql';
import { FC, useEffect, useState } from 'react';
import { GrFormClose } from 'react-icons/gr';
import {
  useAppDispatch,
  useAppSelector
} from 'renderer/globalState/stateHooks';
import {
  fetchAsyncRepos,
  getLoader,
  getRepos,
  getUserData
} from '../../globalState/githubUser/githubUserSlice';
import { updateRepoTopic } from '../../services/utility';
import ModalComponent from '../Modal';
import RepoCard from '../RepoCard';

type Repo = GraphQlQueryResponseData;

const RepoListing: FC<{}> = () => {
  const accessToken = useAppSelector(getUserData)?.token;
  const dispatch = useAppDispatch();
  const isLoaded = useAppSelector(getLoader);
  const repos: Repo = useAppSelector(getRepos)?.viewer?.repositories;
  // const hasNext = repos?.pageInfo?.hasNextPage;
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [infoModal, setInfoModal] = useState(false);
  let [count, setCount] = useState(0);
  let [selectedRepo, setSelectedRepo] = useState<Repo[]>([]);

  const checkedRepoValue = (repo: Repo) => {
    const foundIndex = selectedRepo.findIndex(
      (checkRepo: Repo) => checkRepo.id === repo.id
    );
    if (foundIndex === -1) {
      setSelectedRepo([...selectedRepo, repo]);
      setCount(++count);
    } else {
      let tempRepo = [...selectedRepo];
      tempRepo.splice(foundIndex, 1);
      setSelectedRepo([...tempRepo]);
      setCount(--count);
    }
  };

  const repoRender = repos?.nodes.map((repo: Repo) => (
    <RepoCard
      key={repo.id}
      id={repo.id!}
      name={repo.name!}
      repo={repo}
      callback={checkedRepoValue}
    />
  ));

  const onAdd = (topics?: string) => {
    setIsOpen(false);
    updateRepoTopic(topics ?? '', 'add', accessToken, selectedRepo);
    setOpen(!open);
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  };

  const onRemove = (topics?: string) => {
    setIsOpen(false);
    updateRepoTopic(topics ?? '', 'remove', accessToken, selectedRepo);
    setOpen(!open);
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  };

  useEffect(() => {
    dispatch(fetchAsyncRepos(accessToken));
  }, [dispatch, accessToken]);

  return (
    <>
      {!isLoaded ? (
        <div className="w-full h-[calc(100vh-90px)] md:h-[calc(100vh-90px)] lg:h-[calc(100vh-85px)] px-2.5">
          <section className="h-[10%] p-5 flex items-center justify-end">
            <div className="relative">
              <button
                onClick={() =>
                  count !== 0 ? setInfoModal(!infoModal) : setIsOpen(!isOpen)
                }
                className="relative my-3 w-fit py-2 px-4 text-sm button active:scale-105 focus:outline-none"
              >
                ADD TOPIC
              </button>
              {count === 0 && infoModal && (
                <p className="absolute top-14 right-0 w-60 border-2 border-indigo-400/50 rounded-md p-2 text-sm">
                  You've selected no repository
                </p>
              )}
            </div>

            <ModalComponent
              isOpen={isOpen}
              onClose={setIsOpen}
              onRemove={onRemove}
              onAdd={onAdd}
            />

            <div
              className={`z-10 ${
                open ? 'flex' : 'flex translate-x-full'
              } justify-center items-center overflow-y-hidden fixed top-0 bottom-0 left-0 right-0 bg-black/50 transition-ease h-screen`}
            >
              <section
                onClick={() => setOpen(false)}
                className="fixed top-0 bottom-0 left-0 right-0"
              ></section>

              <section className="relative p-5 bg-slate-100 w-[45%] rounded-md">
                <div
                  onClick={() => setOpen(false)}
                  className="hover:cursor-pointer hover:bg-slate-200 transition-ease absolute top-2 right-2 z-10 w-8 h-8 flex items-center justify-center"
                >
                  <GrFormClose className="w-6 h-6" />
                </div>

                <p className="text-center">
                  The Topic update takes a while to reflect on this app,...but
                  you can as well check it out on the repository github page by
                  clicking the "REPO GITHUB PAGE" button
                </p>
              </section>
            </div>
          </section>
          <section className="h-[83%] overflow-y-auto generic-scrollbar scroll-smooth flex flex-col">
            {repoRender}
          </section>
        </div>
      ) : (
        <div className="w-full h-[calc(100vh-90px)] md:h-[calc(100vh-90px)] lg:h-[calc(100vh-85px)] px-2.5">
          <span className="flex items-center justify-center w-full h-full">
            <Spinner
              color="brand.500"
              size="xl"
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
            />
          </span>
        </div>
      )}
    </>
  );
};

export default RepoListing;
