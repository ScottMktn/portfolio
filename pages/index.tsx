import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-400">
      <div className="max-w-2xl mx-auto justify-center text-left py-36">
        <div className="sm:border-l-2 border-slate-900 flex flex-col space-y-8 px-4 sm:pl-16">
          <h1 className="text-2xl font-semibold">
            My name is <span>Scott Nguyen</span>
          </h1>
          <p className="text-lg">
            I&apos;m a founder, engineer, and sports fan.
          </p>
          <section id="background" className="flex flex-col space-y-4">
            <h2 className="text-lg font-semibold">Background</h2>
            <ul className="list-disc pl-8 space-y-1">
              <li>Originally from Everett, Massachusetts</li>
              <li>Graduated from Northeastern University</li>
              <li>Previously at DraftKings, Tesla, and Bain Capital</li>
              <li>Currently in San Francisco, California</li>
            </ul>
          </section>
          <section id="current" className="flex flex-col space-y-4">
            <h2 className="text-lg font-semibold">What I&apos;m up to</h2>
            <ul className="list-disc pl-8 space-y-1">
              <li>
                Building{" "}
                <Link
                  href="https://www.helicone.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline text-blue-700"
                >
                  Helicone.ai (YC W23)
                </Link>{" "}
                - open-source monitoring for Large-Language Models
              </li>
              <li>
                Looking to attend meetups and events in the Bay Area - hmu at
                scott@helicone.ai
              </li>
              <li>Watching the Celtics, Patriots, Chelsea, and Sentinels</li>
              <li>
                Currently a 3.0 in tennis, trying to win a USTA 3.5 tournament
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
