import { Button } from '@/app/ui/button';

export default function Experience() {
  return (
    <div className="animate-fade-in-up space-y-12">
      {/* Intro Section */}
      <section className="flex flex-col items-center">
        <h1 className="mb-6 text-center text-4xl font-extrabold tracking-tight sm:text-5xl text-transparent bg-clip-text bg-gradient-to-b from-neutral-900 to-neutral-600">
          Experiences
        </h1>
      </section>

      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-200 to-transparent my-8"></div>

      {/* Experience Section */}
      <section
        className="animate-fade-in-up"
        style={{ animationDelay: '0.3s', animationFillMode: 'backwards' }}
      >
        <div className="space-y-6">
          <div className="group relative rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-neutral-300">
            <h3 className="font-bold text-lg text-neutral-900">Part-Time IP Engineer, Nokia</h3>
            <p className="text-sm font-medium text-neutral-500 mb-2">Nov 2025 – Present</p>
          </div>
          
          <div className="group relative rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-neutral-300">
            <h3 className="font-bold text-lg text-neutral-900">Security Operations Engineering Intern, Jotform</h3>
            <p className="text-sm font-medium text-neutral-500 mb-2">Aug 2025 – Sep 2025</p>
            <p className="text-neutral-600 leading-relaxed">Implemented an XDP Firewall and gained eBPF experience.</p>
          </div>

          <div className="group relative rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-neutral-300">
            <h3 className="font-bold text-lg text-neutral-900">IP Engineering Intern, Nokia</h3>
            <p className="text-sm font-medium text-neutral-500 mb-2">Jul 2025 – Aug 2025</p>
            <p className="text-neutral-600 leading-relaxed">Gained familiarity with 5G, RAN, and Telco Cloud technologies.</p>
          </div>

          <div className="group relative rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-neutral-300">
            <h3 className="font-bold text-lg text-neutral-900">System Test Engineer Apprentice, Arksoft Bilişim Teknolojileri</h3>
            <p className="text-sm font-medium text-neutral-500 mb-2">Mar 2025 – Jun 2025</p>
            <p className="text-neutral-600 leading-relaxed">Demonstrated proficiency in system/software testing and Active Directory.</p>
          </div>

          <div className="group relative rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-neutral-300">
            <h3 className="font-bold text-lg text-neutral-900">Data Engineering Intern, BiSoft</h3>
            <p className="text-sm font-medium text-neutral-500 mb-2">Aug 2024 – Sep 2024</p>
            <p className="text-neutral-600 leading-relaxed">Completed a SQL replication project from PostgreSQL to MySQL.</p>
          </div>
        </div>
      </section>

      {/* Grid for Skills and Languages */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Technical Skills */}
        <section
          className="animate-fade-in-up rounded-xl border border-neutral-200 bg-white shadow-sm p-6"
          style={{ animationDelay: '0.4s', animationFillMode: 'backwards' }}
        >
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-neutral-900">Technical Skills</h2>
          <div className="space-y-4 text-neutral-600">
            <p>
              <strong className="text-neutral-900 font-semibold">Languages:</strong>{' '}
              Python, Java, C, C++, C#, SQL, JavaScript, TypeScript, Rust
            </p>
            <div className="h-[1px] w-full bg-neutral-100"></div>
            <p>
              <strong className="text-neutral-900 font-semibold">Frameworks/Tools:</strong>{' '}
              Git, MySQL, PostgreSQL, Unity, Node.js, React, Django, Spring Boot,
              eBPF, Axum, XDP
            </p>
            <div className="h-[1px] w-full bg-neutral-100"></div>
            <p>
              <strong className="text-neutral-900 font-semibold">Expertise:</strong>{' '}
              Network Systems, Cyber Security, Embedded Systems, Web Development
            </p>
          </div>
        </section>

        {/* Languages */}
        <section
          className="animate-fade-in-up rounded-xl border border-neutral-200 bg-white shadow-sm p-6"
          style={{ animationDelay: '0.5s', animationFillMode: 'backwards' }}
        >
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-neutral-900">Languages</h2>
          <div className="space-y-4 text-neutral-600">
            <div className="flex justify-between items-center">
              <strong className="text-neutral-900 font-semibold">Turkish:</strong> 
              <span className="text-sm px-3 py-1 bg-neutral-100 text-neutral-800 rounded-full border border-neutral-200">Native</span>
            </div>
            <div className="h-[1px] w-full bg-neutral-100"></div>
            <div className="flex justify-between items-center">
              <strong className="text-neutral-900 font-semibold">English:</strong> 
              <span className="text-sm px-3 py-1 bg-neutral-100 text-neutral-800 rounded-full border border-neutral-200">Advanced</span>
            </div>
            <div className="h-[1px] w-full bg-neutral-100"></div>
            <div className="flex justify-between items-center">
              <strong className="text-neutral-900 font-semibold">French:</strong> 
              <span className="text-sm px-3 py-1 bg-neutral-100 text-neutral-800 rounded-full border border-neutral-200">Beginner</span>
            </div>
            <div className="h-[1px] w-full bg-neutral-100"></div>
            <div className="flex justify-between items-center">
              <strong className="text-neutral-900 font-semibold">Latin:</strong> 
              <span className="text-sm px-3 py-1 bg-neutral-100 text-neutral-800 rounded-full border border-neutral-200">Beginner</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}