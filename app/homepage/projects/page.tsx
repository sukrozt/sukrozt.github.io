import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    name: "Smart Home System",
    image: "/projects/smart home.png",
    link: "https://github.com/sukrozt/bbm104/tree/main/assignments/as2",
    description:
      "A Smart Home System which has adjustable components and with an energy consume calculator. Used all OOP elements.",
    language: "Java",
  },
  {
    id: 2,
    name: "GRC Software",
    image: "/projects/GRC cyber.png",
    link: "https://github.com/sukrozt/GRC-Software",
    description:
      "A GRC Software which applies all cyber security protocols suitable with the companies. Still in development with NoSQL DBMS, Python.",
    language: "Python",
  },
  {
    id: 3,
    name: "Pizza Delivery System",
    image: "/projects/pizza.png",
    link: "https://github.com/sukrozt/Global-AI-Hub-Bootcamp",
    description:
      "A mini pizza delivery system that has ingredients of a pizza. There is an UI for the purchases.",
    language: "Python",
  },
  {
    id: 4,
    name: "Flappy Game",
    image: "/projects/bird.png",
    link: "https://github.com/sukrozt/flappy",
    description:
      "A mini 2D Unity game which is the endless fly of characters in a map with columns.",
    language: "C#, Platform: Unity",
  },
];

export default function Page() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <h1 className="animate-fade-in-up mb-8 text-center text-3xl font-bold tracking-tight sm:text-4xl">
        My Projects
      </h1>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="animate-fade-in-up flex flex-col overflow-hidden rounded-lg border border-white/10 bg-white/5 p-4"
            style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'backwards' }}
          >
            <Link href={project.link} target="_blank" rel="noopener noreferrer" className="group">
              <div className="overflow-hidden rounded-md">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={400}
                  height={250}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h2 className="mt-4 text-xl font-semibold text-[color:var(--foreground)]">{project.name}</h2>
            </Link>
            <p className="mt-2 flex-grow text-[color:var(--muted-foreground)]">{project.description}</p>
            <p className="mt-4 text-sm font-medium text-[color:var(--primary)]">Language: {project.language}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
