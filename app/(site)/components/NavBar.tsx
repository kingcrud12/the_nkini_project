import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/the_nkini_logo.png";

export default function Navbar() {
  return (
    <header className="py-6 md:px-16 px-6 border-zinc-800 z-30 md:mb-28 mb-20">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/">
          <Image src={Logo} width={30} height={30} alt="logo" />
        </Link>
        <nav>
          <ul className="flex items-center gap-x-8">
            <li>
              <Link
                href="/about"
                className="hover:text-purple-400 duration-300"
              >
                A propos
              </Link>
            </li>
            <li>
              <Link
                href="/posts"
                className="hover:text-purple-400 duration-300"
              >
                Nos Artistes
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
