import { IconType } from 'react-icons';

export interface ServiceInterface {
  title: string;
  about: string;
  icon: IconType;
}

export interface SkillInterface {
  name: string;
  level: string;
  Icon: IconType;
}

export interface ProjectInterface {
  name: string;
  description: string;
  image_path: string;
  deployed_url: string;
  github_url: string;
  category: Category[];
  key_techs: string[];
}

export type Category =
  | 'reactjs'
  | 'nextjs'
  | 'nodejs'
  | 'mysql'
  | 'javascript'
  | 'firebase';
