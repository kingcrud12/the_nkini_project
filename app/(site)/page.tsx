import { getInfo } from "../../sanity/sanity.query";
import type { InfoType } from "../../types";
import AnimatedTitle from "./components/animated/AnimatedTitle";

export const revalidate = 60;
export default async function Home() {
  const info: InfoType[] = await getInfo();

  return (
    <main className="cursor-pointer max-w-7xl mx-auto lg:px-16 px-6 mt-[200px]">
      <div>
        <section className="flex xl:flex-row flex-col xl:items-center items-start xl:justify-center justify-between gap-x-12 lg:mt-32 mt-20 mb-16">
          {info &&
            info.map((data) => (
              <div key={data._id} className="lg:max-w-2xl max-w-2xl">
                <h1 className="hover:text-purple-400 text-3xl font-bold tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full">
                  <AnimatedTitle />
                </h1>
                <p className="hover:text-white font-bold text-black leading-relaxed">
                  {data.shortBio}
                </p>
                <ul className="flex font-bold items-center gap-x-6 my-10">
                  {Object.entries(data.socialLinks)
                    .sort()
                    .map(([key, value], id) => (
                      <li key={id}>
                        <a
                          href={value}
                          rel="noreferer noopener"
                          className="flex items-center gap-x-3 mb-5 hover:text-purple-400 duration-300"
                        >
                          {key[0].toUpperCase() + key.toLowerCase().slice(1)}
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
        </section>
      </div>
    </main>
  );
}
