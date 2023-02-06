import type { AppProps } from 'next/app';

import 'styles/globals.css';
import { Sidebar } from 'components/sidebar';
import { Navbar } from 'components/navbar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="grid grid-cols-12 gap-6 px-5 my-10 sm:px-20 md:px-32 lg:px-4 xl:px-36">
      <div className="h-full col-span-12 p-4 text-base text-center bg-white lg:col-span-3 rounded-2xl">
        <Sidebar />
      </div>
      <div className="flex flex-col col-span-12 overflow-hidden bg-white lg:col-span-9 rounded-2xl">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </div>
  );
}
