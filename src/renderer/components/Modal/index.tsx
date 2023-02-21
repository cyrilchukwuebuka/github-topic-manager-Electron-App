import { FC, MutableRefObject, useEffect, useRef } from 'react';
import { GrFormClose } from 'react-icons/gr';

interface ModalComponentProps {
  isOpen: boolean;
  onClose: (x: boolean) => void;
  onRemove: (value?: string) => void;
  onAdd: (value?: string) => void;
}

const ModalComponent: FC<ModalComponentProps> = ({
  isOpen,
  onClose,
  onRemove,
  onAdd,
}) => {
  const focus: MutableRefObject<HTMLInputElement | null> = useRef(null);

  useEffect(() => {
    document.addEventListener(
      'keydown',
      (e) => e.key === 'Escape' && onClose(false)
    );

    return () => {
      document.removeEventListener('keydown', (e) => e.key === 'Escape');
    };
  }, []);

  useEffect(() => {
    if (focus && focus.current) focus.current.focus();
  }, [focus.current]);

  return (
    <div
      className={`z-10 ${
        isOpen ? 'flex' : 'flex translate-x-full'
      } justify-center items-center overflow-y-hidden fixed top-0 bottom-0 left-0 right-0 bg-black/50 transition-ease h-screen`}
    >
      <section
        onClick={() => onClose(false)}
        className="fixed top-0 bottom-0 left-0 right-0"
      ></section>

      <section className="relative w-[90%] rounded-md p-5 md:p-8 sm:w-[50%] md:w-[40%] bg-slate-100 h-[55%]">
        <div
          onClick={() => onClose(false)}
          className="hover:cursor-pointer hover:bg-slate-200 transition-ease absolute top-2 md:top-5 right-2 md:right-7 z-10 w-8 h-8 flex items-center justify-center"
        >
          <GrFormClose className="w-6 h-6" />
        </div>

        <div className="flex flex-col space-y-3 md:space-y-5 mt-2">
          <p className="font-semibold">
            multiple topics could be added by comma (,) seperating them
          </p>

          <input
            ref={focus}
            className="border p-2 rounded-md focus:outline-indigo-500"
            placeholder="topic(s)...example github, react, developer"
          />

          <p className="italic">
            Topic(s) could also be removed by typing the topic correctly and
            clicking the 'Remove' button below
          </p>

          <span className="w-fit place-self-end flex items-center space-x-3">
            <button
              className="button mr-2 px-6 py-2"
              onClick={() => onAdd(focus.current?.value)}
            >
              Add
            </button>
            <button
              className="button-outline border-red-500 text-red-500 mr-2 px-6 py-2"
              onClick={() => onRemove(focus.current?.value)}
            >
              Remove
            </button>
          </span>
        </div>
      </section>
    </div>
  );
};

export default ModalComponent;
