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
  SiJest,
  SiExpress,
  SiGit,
  SiPostman,
  SiMysql
} from 'react-icons/si';

import {
  ProjectInterface,
  ServiceInterface,
  SkillInterface
} from 'components/types';
import Foodo from 'asserts/images/foodo.png';

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
    level: '70%',
    Icon: SiNextdotjs
  },
  {
    name: 'TypeScript',
    level: '50%',
    Icon: SiTypescript
  },
  {
    name: 'Express Js',
    level: '50%',
    Icon: SiExpress
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
    name: 'Git / Github',
    level: '80%',
    Icon: SiGit
  },
  {
    name: 'Postman',
    level: '70%',
    Icon: SiPostman
  },
  {
    name: 'Jest Testing',
    level: '50%',
    Icon: SiJest
  },
  {
    name: 'MySQL',
    level: '60%',
    Icon: SiMysql
  }
];

export const projects: ProjectInterface[] = [
  {
    name: 'Foodo',
    description:
      'Foodo helps hungry by letting them order food online or by finding out the recipe of a particular food. The user is able to post review on a particular food. The conyacy page is made using email js which helps in managing real time mail. The pages are made with protected route and only authorized user can see the pages',
    image_path: Foodo,
    deployed_url: '',
    category: ['reactjs'],
    key_techs: ['React Js', 'Jest Testig', 'Javascript'],
    github_url: ''
  },
  {
    name: 'Foodo',
    description:
      'Foodo helps hungry by letting them order food online or by finding out the recipe of a particular food. The user is able to post review on a particular food. The conyacy page is made using email js which helps in managing real time mail. The pages are made with protected route and only authorized user can see the pages',
    image_path: Foodo,
    deployed_url: '',
    category: ['reactjs'],
    key_techs: ['React Js', 'Jest Testig', 'Javascript'],
    github_url: ''
  },
  {
    name: 'Foodo',
    description:
      'Foodo helps hungry by letting them order food online or by finding out the recipe of a particular food. The user is able to post review on a particular food. The conyacy page is made using email js which helps in managing real time mail. The pages are made with protected route and only authorized user can see the pages',
    image_path: Foodo,
    deployed_url: '',
    category: ['reactjs'],
    key_techs: ['React Js', 'Jest Testig', 'Javascript'],
    github_url: ''
  },
  {
    name: 'Foodo',
    description:
      'Foodo helps hungry by letting them order food online or by finding out the recipe of a particular food. The user is able to post review on a particular food. The conyacy page is made using email js which helps in managing real time mail. The pages are made with protected route and only authorized user can see the pages',
    image_path: Foodo,
    deployed_url: '',
    category: ['reactjs'],
    key_techs: ['React Js', 'Jest Testig', 'Javascript'],
    github_url: ''
  },
  {
    name: 'Foodo',
    description:
      'Foodo helps hungry by letting them order food online or by finding out the recipe of a particular food. The user is able to post review on a particular food. The conyacy page is made using email js which helps in managing real time mail. The pages are made with protected route and only authorized user can see the pages',
    image_path: Foodo,
    deployed_url: '',
    category: ['reactjs'],
    key_techs: ['React Js', 'Jest Testig', 'Javascript'],
    github_url: ''
  },
  {
    name: 'Foodo',
    description:
      'Foodo helps hungry by letting them order food online or by finding out the recipe of a particular food. The user is able to post review on a particular food. The conyacy page is made using email js which helps in managing real time mail. The pages are made with protected route and only authorized user can see the pages',
    image_path: Foodo,
    deployed_url: '',
    category: ['reactjs'],
    key_techs: ['React Js', 'Jest Testig', 'Javascript'],
    github_url: ''
  },
  {
    name: 'Foodo',
    description:
      'Foodo helps hungry by letting them order food online or by finding out the recipe of a particular food. The user is able to post review on a particular food. The conyacy page is made using email js which helps in managing real time mail. The pages are made with protected route and only authorized user can see the pages',
    image_path: Foodo,
    deployed_url: '',
    category: ['reactjs'],
    key_techs: ['React Js', 'Jest Testig', 'Javascript'],
    github_url: ''
  }
];
