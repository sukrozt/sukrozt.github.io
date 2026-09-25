import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";


export default function Page() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen gap-6 text-orange-950 text-xl">
      <h1 className="text-2xl font-bold mb-4">Leave your message:</h1>
      <ContactForm />
      <div className="flex items-end gap-2">
      <h1 className="mb-2 text-2xl text-orange-950 font-bold">
      Mail me:
        </h1>
        <Link href="mailto:sukriyeo13@gmail.com" className="mb-2 text-2xl text-orange-950 font-semibold  hover:text-orange-800">
        sukriyeo13@gmail.com
        </Link>
      </div>
    </div>
  );
}
