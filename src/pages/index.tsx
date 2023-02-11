import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMysql,
  SiStrapi,
  SiChakraui,
  SiAntdesign
} from 'react-icons/si';

import { services } from 'asserts/services';
import { ServiceCard } from 'components/serviceCard';

export default function Home() {
  return (
    /* eslint-disable */
    <>
      <div className="flex flex-col flex-grow px-6 pt-1">
        <h5 className="my-3 font-medium">
          I'm currently pursuing <b>B. Tech</b> degree from
          <b> Poornima College of Engineering</b>. I have 2+ years of experience
          in
          <b> Web Development</b>. I'm currently improving my frontend skills
          and logic building.
        </h5>
        <div className="flex-grow p-4 mt-5 -mx-6 bg-gray-200 rounded-lg dark:bg-dark-700">
          <h6 className="my-3 text-xl font-bold tracking-wide">
            What I Offer!
          </h6>
          <div className="grid gap-6 lg:grid-cols-1">
            {services.map(service => (
              <div
                className="bg-gray-100 rounded-lg dark:bg-dark-100 lg:col-span-1"
                key={service.title}
              >
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 py-12 space-x-1">
          <SiTypescript className="w-10 h-6 text-blue-600" />
          <SiJavascript className="w-10 h-6 text-yellow-400" />
          <SiReact className="w-10 h-6 text-blue-400" />
          <SiNextdotjs className="w-10 h-6 text-black" />
          <SiTailwindcss className="w-10 h-6 text-blue-400" />
          <SiNodedotjs className="w-10 h-6 text-green-600" />
          <SiMysql className="w-10 h-6 text-yellow-600" />
          <SiStrapi className="w-10 h-6 text-indigo-600" />
          <SiChakraui className="w-10 h-6" color="rgb(80,188,188)" />
          <SiAntdesign className="w-10 h-6 text-blue-600" />
        </div>
      </div>
    </>
  );
  /* eslint-enable */
}
