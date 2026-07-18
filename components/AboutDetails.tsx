import { Button } from '@/app/ui/button';

export default function AboutDetails() {
  return (
    <div className="animate-fade-in-up space-y-8">
      {/* Giriş Bölümü */}
      <section>
        <h1 className="mb-4 text-center text-3xl font-bold tracking-tight sm:text-4xl">
          About Me
        </h1>
        <p
          className="text-center text-lg text-[color:var(--muted-foreground)]"
          style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}
        >
          I am Şükriye Öztürk, a Computer Engineering student at Hacettepe
          University with a passion for software development, network systems,
          and cybersecurity. I thrive on learning new technologies and
          contributing to innovative projects.
        </p>
      </section>

        {/* CV İndirme Butonu - Düzeltildi */}
        <section className="flex justify-center">
          <a href="/CV.pdf" download="SukriyeOzturk_CV.pdf">
            <Button>Download CV</Button>
          </a>
        </section>

      {/* Deneyim Bölümü */}
      <section
        className="animate-fade-in-up"
        style={{ animationDelay: '0.4s', animationFillMode: 'backwards' }}
      >
        <h2 className="mb-4 text-2xl font-semibold">Experience</h2>
        <ul className="space-y-4">
          <li>
            <h3 className="font-bold">Part-Time IP Engineer, Nokia</h3>
            <p className="text-sm text-[color:var(--muted-foreground)]">
              Nov 2025 – Present
            </p>
          </li>
          <li>
            <h3 className="font-bold">
              Security Operations Engineering Intern, Jotform
            </h3>
            <p className="text-sm text-[color:var(--muted-foreground)]">
              Aug 2025 – Sep 2025
            </p>
            <p>Implemented an XDP Firewall and gained eBPF experience.</p>
          </li>
          <li>
            <h3 className="font-bold">IP Engineering Intern, Nokia</h3>
            <p className="text-sm text-[color:var(--muted-foreground)]">
              Jul 2025 – Aug 2025
            </p>
            <p>Gained familiarity with 5G, RAN, and Telco Cloud technologies.</p>
          </li>
          <li>
            <h3 className="font-bold">
              System Test Engineer Apprentice, Arksoft Bilişim Teknolojileri
            </h3>
            <p className="text-sm text-[color:var(--muted-foreground)]">
              Mar 2025 – Jun 2025
            </p>
            <p>
              Demonstrated proficiency in system/software testing and Active
              Directory.
            </p>
          </li>
          <li>
            <h3 className="font-bold">Data Engineering Intern, BiSoft</h3>
            <p className="text-sm text-[color:var(--muted-foreground)]">
              Aug 2024 – Sep 2024
            </p>
            <p>Completed a SQL replication project from PostgreSQL to MySQL.</p>
          </li>
        </ul>
      </section>

      {/* Yetenekler Bölümü */}
      <section
        className="animate-fade-in-up"
        style={{ animationDelay: '0.8s', animationFillMode: 'backwards' }}
      >
        <h2 className="mb-4 text-2xl font-semibold">Technical Skills</h2>
        <p>
          <strong className="text-[color:var(--primary)]">Languages:</strong>{' '}
          Python, Java, C, C++, C#, SQL, JavaScript, TypeScript, Rust
        </p>
        <p>
          <strong className="text-[color:var(--primary)]">
            Frameworks/Tools:
          </strong>{' '}
          Git, MySQL, PostgreSQL, Unity, Node.js, React, Django, Spring Boot,
          eBPF, Axum, XDP
        </p>
        <p>
          <strong className="text-[color:var(--primary)]">Expertise:</strong>{' '}
          Network Systems, Cyber Security, Embedded Systems, Web Development
        </p>
      </section>

      {/* Diller Bölümü */}
      <section
        className="animate-fade-in-up"
        style={{ animationDelay: '1.0s', animationFillMode: 'backwards' }}
      >
        <h2 className="mb-4 text-2xl font-semibold">Languages</h2>
        <p>
          <strong className="text-[color:var(--primary)]">Turkish:</strong> Native
        </p>
        <p>
          <strong className="text-[color:var(--primary)]">English:</strong> Advanced
        </p>
        <p>
          <strong className="text-[color:var(--primary)]">French:</strong> Beginner
        </p>
        <p>
          <strong className="text-[color:var(--primary)]">Latin:</strong> Beginner
        </p>
      </section>
    </div>
  );
}