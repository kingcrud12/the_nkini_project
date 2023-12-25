export default function Footer() {
  return (
    <footer className="fixed border-zinc-800 z-30 md:mt-60 mt-80">
      <div className="max-w-7xl mx-auto flex lg:flex-row flex-col items-center lg:justify-between justify-center gap-y-4 md:px-16 px-6 py-16 text-white">
        <small className="text-black duration-200 font-mono">
          All rights reserved &copy; {new Date().getFullYear()}
        </small>

        <small className="hover:text-purple-400 text-black duration-200">
          <a
            href="https://github.com/kingcrud12/the-nkini-blog.git"
            target="_blank"
            rel="noreferrer noopener"
          >
            Prepared by <span className="text-green-400">Yann Dipita</span>
          </a>
        </small>
      </div>
    </footer>
  );
}
