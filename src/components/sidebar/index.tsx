import Image from 'next/image';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { GiTie } from 'react-icons/gi';

import UserAvatar from 'asserts/images/shivam.jpeg';
import { useTheme } from 'next-themes';

export const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div>
      <Image
        src={UserAvatar}
        alt="user avatar"
        className="w-32 h-48 m-auto rounded-full hover:scale-110"
      />
      <h3 className="my-4 text-3xl font-medium text-purple-700 dark:text-purple-500 font-dmsans">
        Shivam Shukla
      </h3>
      <p className="p-2 my-3 bg-gray-200 rounded-full dark:bg-dark-700 ">
        Web Developer
      </p>
      <a
        className="flex items-center justify-center p-2 my-3 bg-gray-200 rounded-full dark:bg-dark-700"
        href=""
        download="name"
      >
        <GiTie className="w-6 h-6" /> Download Resume
      </a>
      <div className="flex items-center justify-center w-9/12 gap-4 mx-auto my-5 text-purple-700 dark:text-purple-500 md:w-full">
        <a href="https://github.com/shivams10">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/mwlite/in/shivam-shukla-4b870b1b3">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
      </div>
      <div
        className="py-5 my-5 bg-gray-200 dark:bg-dark-700 dark:rounded-md"
        style={{ marginLeft: '-1rem', marginRight: '-1rem' }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation /> <span>Dadra, India</span>
        </div>
        <p className="my-2">shivams91099@gmail.com</p>
        <p className="my-2">+91 7984252615</p>
      </div>

      <button
        className="w-8/12 px-5 py-2 my-3 text-white rounded-full bg-gradient-to-r from-purple-500 to-indigo focus:outline-none"
        onClick={() => window.open('mailto:shivams91099@gmail.com')}
      >
        Email Me
      </button>
      <button
        onClick={changeTheme}
        className="w-8/12 px-5 py-2 my-3 text-white rounded-full bg-gradient-to-r from-purple-500 to-indigo"
      >
        Toggle Theme
      </button>
    </div>
  );
};
