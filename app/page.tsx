import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] text-pink-500 text-center">
    
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-center">
      <ol className="list-inside list-decimal text-lg sm:text-xl font-[family-name:var(--font-geist-mono)]">
        <li className="mb-4 text-6xl font-bold">
          Şükriye Öztürk
        </li>
        <li className="mb-2 text-2xl text-pink-500 font-semibold">
          Welcome to my Portfolio.
        </li>
        <li className="text-xl text-pink-500">I am a junior computer science student.</li>
        <li className="text-xl text-pink-500">Also a software developer.</li>
      </ol>
      </main>
      <div className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 justify-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/baby.jpg"
            alt="File icon"
            width={400}
            height={400}
          />
          Also, yes, I love flowers.
        </a>
      </div>
    </div>
  );
}
