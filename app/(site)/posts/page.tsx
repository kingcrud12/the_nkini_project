import Image from "next/image";
import Link from "next/link";
import { getPost } from "@/sanity/sanity.query";
import type { PostType } from "@/types/index";

export default async function Post() {
  const posts: PostType[] = await getPost();

  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6">
      <section className="max-w-2xl mb-16">
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight">
          Featured posts I&apos;ve built over the years
        </h1>
        <p className="text-base text-zinc-400 leading-relaxed">
          I&apos;ve worked on tons of little posts over the years but these are
          the ones that I&apos;m most proud of. Many of them are open-source, so
          if you see something that piques your interest, check out the code and
          contribute if you have ideas for how it can be improved.
        </p>
      </section>

      <section className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-12">
        {posts.map((post) => (
          <Link
            href={`/posts/${post.slug}`}
            key={post._id}
            className="flex items-center gap-x-4 bg-[#1d1d20] border border-transparent hover:border-zinc-700 p-4 rounded-lg ease-in-out"
          >
            <Image
              src={post.logo}
              width={60}
              height={60}
              alt={post.name}
              className="bg-zinc-800 rounded-md p-2"
            />
            <div>
              <h2 className="text-white font-semibold mb-1">{post.name}</h2>
              <div className="text-sm text-white">{post.tagline}</div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
