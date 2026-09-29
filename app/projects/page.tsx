import Project from '@/components/Project';
import { fetchProjects } from '@/app/lib/data';

export default async function Page() {
  const projectsData = await fetchProjects();

  return (
    <div className="container mx-auto max-w-5xl p-4 py-8 md:p-8">
      <Project projects={projectsData as unknown as Parameters<typeof Project>[0]['projects']} />
    </div>
  );
}
