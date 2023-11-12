import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen h-full">
      <div className="min-h-screen h-full w-full mx-auto max-w-3xl border-l border-r border-gray-300 flex flex-col divide-y divide-gray-300">
        <h1 className="text-4xl sm:text-6xl text-gray-300 p-8 leading-tight">
          Hello! My name is <span className="text-gray-900">Scott Nguyen</span>.{" "}
          I am a founder and software engineer.
        </h1>
        <section
          id="current"
          className="grid grid-cols-3 divide-x divide-gray-300"
        >
          <div className="col-span-1 h-full items-center justify-center flex flex-col p-4">
            <p className="text-sm text-gray-300">Location</p>
            <p className="text-lg text-gray-900 font-semibold hidden sm:block">
              San Francisco, California
            </p>
            <p className="text-lg text-gray-900 font-semibold block sm:hidden">
              SF
            </p>
          </div>
          <div className="col-span-1 h-full items-center justify-center flex flex-col p-4">
            <p className="text-sm text-gray-300">Working</p>
            <p className="text-lg text-gray-900 font-semibold">Helicone</p>
          </div>
          <div className="col-span-1 h-full items-center justify-center flex flex-col p-4">
            <p className="text-sm text-gray-300">Playing</p>
            <p className="text-lg text-gray-900 font-semibold">Basketball</p>
          </div>
        </section>
        <section
          id="experience"
          className="flex flex-row divide-x divide-gray-300"
        >
          <div className="flex flex-col space-y-4 p-8 w-full">
            <h2 className="text-3xl font-semibold text-gray-900">Previously</h2>
            <ul className="space-y-4 flex flex-col text-gray-300 text-md font-semibold">
              <li>
                Born and raised in <span className="text-gray-900">Boston</span>
              </li>
              <li>
                Worked at <span className="text-gray-900">Tesla</span>,{" "}
                <span className="text-gray-900">DraftKings</span>, and{" "}
                <span className="text-gray-900">Bain Capital</span>
              </li>
              <li>
                Graduated from{" "}
                <span className="text-gray-900">Northeastern University</span>
              </li>
            </ul>
          </div>
        </section>
        <section id="helicone" className="">
          <div className="border-b border-gray-300">
            <div className="p-8">
              <h2 className="text-xl sm:text-3xl font-semibold text-gray-300 leading-8 sm:leading-10 ">
                Building{" "}
                <span className="text-gray-900">Helicone (YC W23)</span> - open
                source observability platform for LLM's. With only{" "}
                <span className="text-gray-900">one line of code</span>, easily
                monitor your application's performance, health, and user
                behavior.
              </h2>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
