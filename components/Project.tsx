import Image from "next/image";
import Link from "next/link";

export default function Project() {
  const projects = [
    {
      id: 1,
      name: "Smart Home System",
      image: "/projects/smart home.png",
      link: "https://github.com/sukrozt/bbm104/tree/main/assignments/as2",
      description: "A Smart Home System which has adjustable components and with an energy consume calculator. Used all OOP elements.",
      language: "Java",
    },
    {
      id: 2,
      name: "Evde Ne Var",
      image: "/projects/smart home.png",
      link: "https://github.com/sukrozt/evdenevar",
      description: "A web application that allows users to manage their home inventory. Users can add, edit, and delete items, as well as categorize them for easy organization.",
      language: "Python, Dart",
    },
    {
      id: 3,
      name: "Pizza Delivery System",
      image: "/projects/pizza.png",
      link: "https://github.com/sukrozt/Global-AI-Hub-Bootcamp",
      description: "A mini pizza delivery system that has ingredients of a pizza. There is an UI for the purchases.",
      language: "Python",
    },
    {
      id: 4,
      name: "Flappy Game",
      image: "/projects/bird.png",
      link: "https://github.com/sukrozt/flappy",
      description: "A mini 2D Unity game which is the endless fly of characters in a map with columns.",
      language: "C#, Unity",
    },
  ];

  return (
    <div className="animate-fade-in-up space-y-12">
      {/* Başlık ve Açıklama */}
      <section className="flex flex-col items-center">
        <h1 className="mb-6 text-center text-4xl font-extrabold tracking-tight sm:text-5xl text-transparent bg-clip-text bg-gradient-to-b from-neutral-900 to-neutral-600">
          Projects
        </h1>
      </section>

      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-200 to-transparent my-8"></div>

      {/* Projeler Grid Yapısı */}
      <div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8" 
      >
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className="animate-fade-in-up group relative rounded-xl border border-neutral-200 bg-white p-4 sm:p-6 shadow-sm transition-all hover:shadow-md hover:border-neutral-300 flex flex-col h-full"
            style={{ animationDelay: `${0.2 + (index * 0.1)}s`, animationFillMode: 'backwards' }}
          >
            <Link href={project.link} target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-lg mb-4">
              <Image
                src={project.image}
                alt={project.name}
                width={500}
                height={300}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </Link>
            
            <Link href={project.link} target="_blank" rel="noopener noreferrer">
              <h3 className="font-bold text-xl text-neutral-900 mb-3 group-hover:text-blue-600 transition-colors">
                {project.name}
              </h3>
            </Link>
            
            <p className="text-neutral-600 leading-relaxed mb-6 flex-grow">
              {project.description}
            </p>
            
            <div className="mt-auto">
              <span className="text-xs font-semibold px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full border border-neutral-200">
                {project.language}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
