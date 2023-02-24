import { Category } from 'components/types';
import { FunctionComponent } from 'react';

export const NavItem: FunctionComponent<{
  value: Category | 'all';
  handlerFilterCategory: Function;
  active: string;
}> = ({ value, handlerFilterCategory, active }) => {
  let className = 'capitalize cursor-pointer hover:text-purple-500';
  if (active === value) className += ' text-purple-500';

  return (
    <li className={className} onClick={() => handlerFilterCategory(value)}>
      {value}
    </li>
  );
};

const ProjectsNavbar: FunctionComponent<{
  handlerFilterCategory: Function;
  active: string;
}> = props => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <NavItem value="all" {...props} />
      <NavItem value="reactjs" {...props} />
      <NavItem value="nodejs" {...props} />
      <NavItem value="mysql" {...props} />
      <NavItem value="javascript" {...props} />
      <NavItem value="firebase" {...props} />
    </div>
  );
};

export default ProjectsNavbar;
