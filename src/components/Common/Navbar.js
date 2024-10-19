import Link from "next/link";
import { Facebook, Instagram, Twitter, Phone, Mail } from 'lucide-react';

export default function NavBar() {
  return (
    <nav className="p-4 bg-white px-20">
      <div className="flex sm:flex-row flex-col justify-between border-b">
        <div className="flex flex-row gap-2 text-black">
        <Facebook />
        <Instagram />
        <Twitter />
        </div>
        <div className="mb-2 flex sm:flex-row flex-col gap-2 text-black">
          <span className="flex flex-row gap-2"> <Phone /> 469-431-3582</span>
          <span className="flex flex-row gap-2"> <Mail /> contact@stormcohs.org</span>
        </div>
      </div>
      <div className="font-medium flex items-center justify-between">
        <Link href="/">
          <img src="https://lirp.cdn-website.com/c61e8e49/dms3rep/multi/opt/Storm+Center+of+Hope+and+Service+Logo+F-01-234w.png" />
        </Link>
      </div>
    </nav>
  );
}