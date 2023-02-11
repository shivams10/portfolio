import Link from 'next/link';
import { FunctionComponent } from 'react';

export const NavItems: FunctionComponent<{
  activeItem: string;
  setActiveItem: Function;
  name: string;
  route: string;
}> = ({ name, route, activeItem, setActiveItem }) => {
  return activeItem !== name ? (
    <Link href={route}>
      <span
        className="hover:text-purple-500"
        onClick={() => setActiveItem(name)}
      >
        {name}
      </span>
    </Link>
  ) : null;
};
