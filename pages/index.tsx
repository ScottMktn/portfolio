import Timeline from "@/components/timeline";
import Head from "next/head";
import Link from "next/link";

interface HomeProps {}

const Home = (props: HomeProps) => {
  const {} = props;

  return (
    <>
      <Head>
        <title>Scott Nguyen</title>
        <meta
          name="description"
          content="Scott Nguyen is a software engineer based in San Francisco, California. He specializes in building web applications and has a passion for creating products that are user-friendly and accessible."
        />
      </Head>
      <main className="w-full min-h-screen bg-orange-100">
        <section className="w-full flex flex-col p-4 space-y-8 max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold font-serif mt-36 tracking-tight">
            Hello, my name is Scott Nguyen
          </h1>
          <p className="text-lg font-serif">
            I am a{" "}
            <span className="text-orange-500 font-bold">software engineer</span>{" "}
            based in San Francisco, California. I specialize in building web
            applications and have a passion for creating products that are
            user-friendly and accessible.
          </p>
          <p className="text-lg font-serif">
            I am currently building{" "}
            <a
              href="https://www.linkedin.com/company/coinbase/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 font-bold"
            >
              Helicone.ai (YCW23)
            </a>{" "}
            - the LLM-observability platform designed for developers.
          </p>
          <p className="text-lg font-serif">
            Previous @{" "}
            <Link
              className="text-orange-500 font-bold underline"
              href="https://www.candy.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Candy
            </Link>
            ,{" "}
            <Link
              className="text-orange-500 font-bold underline"
              href="https://www.draftkings.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              DraftKings
            </Link>
            ,
            <Link
              className="text-orange-500 font-bold underline"
              href="https://www.tesla.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Tesla
            </Link>
            .
          </p>
        </section>
      </main>
    </>
  );
};

export default Home;
