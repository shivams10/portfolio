import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { NavItems } from 'components/navItems';

export function Navbar() {
  const [activeItem, setActiveItem] = useState<string>('');
  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname === '/') setActiveItem('About');
    if (pathname === '/projects') setActiveItem('Projects');
    if (pathname === '/resume') setActiveItem('Resume');
  }, [pathname]);

  return (
    <div className="flex justify-between px-5 py-3 my-3">
      <span className="text-xl font-bold text-purple-500 border-b-4 border-purple-500 md:text-2xl">
        {activeItem}
      </span>
      <div className="flex space-x-5 text-lg text-indigo">
        <NavItems
          name="About"
          route="/"
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        />
        <NavItems
          name="Projects"
          route="/projects"
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        />
        <NavItems
          name="Resume"
          route="/resume"
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        />
      </div>
    </div>
  );
}
