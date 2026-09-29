import Image from "next/image";
import Link from "next/link";

// DB'den gelen veri tipi
type ProjectType = {
  id: string;
  title: string;
  description: string;
  tech: string;
  image_url: string;
  link: string;
};

export default function Project({ projects }: { projects: ProjectType[] }) {
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
                src={project.image_url}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </Link>
            
            <Link href={project.link} target="_blank" rel="noopener noreferrer">
              <h3 className="font-bold text-xl text-neutral-900 mb-3 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
            </Link>
            
            <p className="text-neutral-600 leading-relaxed mb-6 flex-grow">
              {project.description}
            </p>
            
            <div className="mt-auto">
              <span className="text-xs font-semibold px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full border border-neutral-200">
                {project.tech}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
