import { RiComputerLine } from 'react-icons/ri';
import { FaServer } from 'react-icons/fa';
import { BsCodeSlash } from 'react-icons/bs';
import { DiMootoolsBadge } from 'react-icons/di';

import { ServiceInterface } from 'components/types';

export const services: ServiceInterface[] = [
  {
    title: 'Frontend Developer:',
    about:
      'I have experience in <b>Next Js, React Js, Javascript, Typescript, Tailwind CSS, Ant D, Chakra UI</b>',
    icon: RiComputerLine
  },
  {
    title: 'Backend Developer:',
    about: 'I have experience in <b>Node Js, Express Js, MySQL, Strapi</b>',
    icon: FaServer
  },
  {
    title: 'Competitive Coder:',
    about:
      'I had been coding on different platforms like <b>Leetcode</b> and <b>CodeChef</b> in C++ and Javascript language',
    icon: BsCodeSlash
  },
  {
    title: 'Oher Tools:',
    about:
      'I have also worked with other tools like git/github, libraries like jest for testing websites.',
    icon: DiMootoolsBadge
  }
];
