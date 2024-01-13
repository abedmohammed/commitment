import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Commitment</title>
        <meta name="description" content="Commit to your habits" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="dashboard">
        <h1 className="dashboard__title">Hello World</h1>
      </main>
    </>
  );
}
