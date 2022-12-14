import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {

  const routines = [
    {
      "name": "Legs",
      "description": "Calve Extensions, Lunges, Squats",
      "url": "http://localhost:3000"
    },
    {
      "name": "Push",
      "description": "Pull Downs, Tricep Extensions, Pushups",
      "url": "http://localhost:3000"
    },
    {
      "name": "Pull",
      "description": "Rows, Pull Ups, Curls",
      "url": "http://localhost:3000"
    }
  ]

  return (
    <>
      <Head>
        <title>Your Routines</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="mx-auto px-4 pt-6 w-3/4 lg:w-2/3 flex justify-end">
        <i className="fa-solid text-3xl fa-user duration-200 motion-safe:hover:scale-105"></i>
      </nav>
      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center px-4">
        <h1 className="text-5xl font-extrabold leading-normal text-gray-700 md:text-[5rem]">
          Create <span className="text-purple-300">Routines</span>
        </h1>

        <div className="mt-3 grid gap-3 pt-3 text-center md:grid-cols-3 lg:w-2/3">
          {routines.map((routine) =>
            <RoutineCard
              name={routine.name}
              description={routine.description}
              documentation={routine.url}
            />
          )
          }
        </div>

        <div className="mt-20">
          <i className="fa-solid fa-plus rounded-3xl text-white text-lg bg-blue-500 px-3 py-3 duration-200 motion-safe:hover:scale-105"></i>
        </div>
      </main>
    </>
  );
};

export default Home;

type RoutineCardProps = {
  name: string;
  description: string;
  documentation: string;
};

const RoutineCard = ({
  name,
  description,
  documentation,
}: RoutineCardProps) => {
  return (
    <section className="flex flex-col justify-center rounded border-2 border-slate-300 p-6 shadow-xl duration-500 motion-safe:hover:scale-105">
      <div className="flex justify-center align-middle">
        <h2 className="text-lg text-gray-700 flex-grow">{name}</h2>
        <i className="fa-solid fa-pen-to-square self-center"></i>
      </div>
      <p className="text-sm text-gray-600">{description}</p>
      <a
        className="m-auto mt-3 w-fit text-sm text-violet-500 underline decoration-dotted underline-offset-2"
        href={documentation}
        target="_blank"
        rel="noreferrer"
      >
      </a>
    </section>

  );
};
