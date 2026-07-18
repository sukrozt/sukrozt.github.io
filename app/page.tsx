"use client";

import Link from "next/link";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center">
      <main className="flex flex-col items-center gap-6 px-4 md:px-6">
        <div className="space-y-4">
          <h1 className="animate-fade-in-up text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Şükriye Öztürk
          </h1>
          <p
            className="animate-fade-in-up text-lg text-[color:var(--muted-foreground)] md:text-xl"
            style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}
          >
            Network Engineer | Software Engineer | Cyber Security Enthusiast
          </p>
        </div>
      </main>
    </div>
  );
}
