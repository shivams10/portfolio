import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Shivam Shukla</title>
        <meta name="description" content="Shivam Shukla's Portfolio Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/user.png" />
      </Head>
      <h1>bybyebey</h1>
      <h1 className="text-3xl font-bold text-indigo-700 underline">
        Hello world!
      </h1>
    </>
  );
}
