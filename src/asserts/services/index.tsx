import { RiComputerLine } from 'react-icons/ri';
import { FaServer } from 'react-icons/fa';
import { BsCodeSlash } from 'react-icons/bs';
import { DiMootoolsBadge } from 'react-icons/di';
import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiChakraui,
  SiAntdesign,
  SiCplusplus,
  SiJest
} from 'react-icons/si';

import { ServiceInterface, SkillInterface } from 'components/types';

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

export const languages: SkillInterface[] = [
  {
    name: 'C++',
    level: '80%',
    Icon: SiCplusplus
  },
  {
    name: 'React JS',
    level: '80%',
    Icon: SiReact
  },
  {
    name: 'Javascript',
    level: '80%',
    Icon: SiJavascript
  },
  {
    name: 'Next JS',
    level: '60%',
    Icon: SiNextdotjs
  },
  {
    name: 'TypeScript',
    level: '50%',
    Icon: SiTypescript
  }
];

export const libraries: SkillInterface[] = [
  {
    name: 'Tailwind CSS',
    level: '80%',
    Icon: SiTailwindcss
  },
  {
    name: 'Ant Design',
    level: '80%',
    Icon: SiAntdesign
  },
  {
    name: 'Chakra UI',
    level: '80%',
    Icon: SiChakraui
  },
  {
    name: 'Jest Testing Library',
    level: '50%',
    Icon: SiJest
  }
];
