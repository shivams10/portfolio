import type { AppProps } from 'next/app';
import Head from 'next/head';

import 'styles/globals.css';
import { Sidebar } from 'components/sidebar';
import { Navbar } from 'components/navbar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Shivam Shukla</title>
        <meta name="description" content="Shivam Shukla's Portfolio Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/user.png" />
      </Head>
      <div className="grid grid-cols-12 gap-6 px-5 my-10 sm:px-20 md:px-32 lg:px-4 xl:px-36">
        <div className="h-full col-span-12 p-4 text-base text-center bg-white lg:col-span-3 rounded-2xl">
          <Sidebar />
        </div>
        <div className="flex flex-col col-span-12 overflow-hidden bg-white lg:col-span-9 rounded-2xl">
          <Navbar />
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}
