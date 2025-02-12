import Head from 'next/head';

const PageHead = ({ headTitle }) => {
  return (
    <>
      <Head>
        <title>
          {headTitle
            ? headTitle
            : 'UMA Global Express premier cargo express provider'}
        </title>
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
    </>
  );
};

export default PageHead;
