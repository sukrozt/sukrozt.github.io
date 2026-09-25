import Image from "next/image";
import Link from "next/link";

const contacts = [
  {
    id: 1,
    name: "LinkedIn",
    image: "/linkedin.png",
    link: "https://www.linkedin.com/in/sukriyeozturk/",
    alt: "LinkedIn Account",
  },
  {
    id: 2,
    name: "GitHub",
    image: "/github.png",
    link: "https://github.com/sukrozt",
    alt: "GitHub Account",
  },
  {
    id: 3,
    name: "E-Mail",
    image: "/mail.png",
    link: "mailto:sukriyeo13@gmail.com",
    alt: "E-Mail Address",
  },
];


export default function Contact() {
  return (
    <div className="flex flex-col items-end justify-start gap-5 pt-8 pr-6 md:pr-12">
      {contacts.map((contact) => (
      <div key={contact.id} className="flex flex-col items-center">
        <Link 
          href={contact.link} 
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-35 hover:opacity-100 grayscale hover:grayscale-0 hover:scale-110 hover:drop-shadow-lg transition-all duration-300 inline-block"
        >
          <Image
            src={contact.image}
            alt={contact.name}  
            width={36}
            height={36}
          />  
        </Link>
      </div>
      ))}
    </div>
  );
}