import Link from 'next/link';
import {
  HomeIcon,
  UserCircleIcon,
  CodeBracketSquareIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline';

const navLinks = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'About', href: '/homepage/about', icon: UserCircleIcon }, // About sayfası aktif
  // { name: 'Projects', href: '/homepage/projects', icon: CodeBracketSquareIcon }, // Projects sayfası şimdilik gizli
  // { name: 'Contact', href: '/homepage/contact', icon: EnvelopeIcon }, // Contact sayfası şimdilik gizli
];

export default function SideNav() {
  return (
    <div className="flex h-screen flex-col border-r border-white/10 px-3 py-4 md:px-2">
      <div className="flex grow flex-col space-y-2">
        {navLinks.map((link) => {
          const LinkIcon = link.icon;
          return (
            <Link
              key={link.name}
              href={link.href}
              className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-transparent p-3 text-sm font-medium text-[color:var(--muted-foreground)] hover:bg-white/10 hover:text-[color:var(--foreground)] md:flex-none md:justify-start md:p-2 md:px-3"
            >
              <LinkIcon className="w-6" />
              <p className="hidden md:block">{link.name}</p>
            </Link>
          );
        })}
        {/* Bu boşluk, linklerin yukarıda toplanmasını sağlar */}
        <div className="flex-grow"></div>
      </div>
    </div>
  );
}
