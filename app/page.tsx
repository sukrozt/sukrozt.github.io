"use client";

import Link from "next/link";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center relative overflow-hidden bg-[var(--background)]">
      {/* Subtle elegant glowing orb for light mode */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-blue-100 via-indigo-50 to-purple-50 blur-[120px] pointer-events-none rounded-full"></div>

      <main className="z-10 w-full max-w-7xl px-6 md:px-12 mt-[-5vh]">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-16 md:gap-24 lg:gap-32 border-b border-neutral-300 pb-8">
          <div 
            className="animate-fade-in-up flex flex-col py-2 ml-4 md:ml-12 lg:ml-24"
            style={{ animationDelay: '0.1s', animationFillMode: 'backwards' }}
          >
            <h1 className="text-left text-5xl font-extrabold tracking-tighter sm:text-7xl md:text-8xl lg:text-9xl text-neutral-900 leading-none">
              Şükriye
            </h1>
            <h2 className="text-left text-5xl font-extrabold tracking-tighter sm:text-7xl md:text-8xl lg:text-9xl text-neutral-900 leading-none mt-6 md:mt-8">
              Öztürk
            </h2>
          </div>
          
          <div 
            className="animate-fade-in-up flex flex-col items-start md:items-end gap-1 sm:gap-2 text-base sm:text-lg md:text-xl font-medium text-neutral-500 mt-8 md:mt-0 max-w-md lg:max-w-lg"
            style={{ animationDelay: '0.3s', animationFillMode: 'backwards' }}
          >
            <p className="text-left md:text-right leading-relaxed">
              I am a new computer engineering graduate with experience in network systems and
              high proficiency in software development. I am also highly passionate about
              cybersecurity and embedded systems.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
