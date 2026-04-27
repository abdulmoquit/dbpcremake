import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image src="/images/logo.png" alt="DBPC" width={40} height={50} className="w-auto h-auto opacity-80" />
            <div>
              <h3 className="font-serif text-lg font-bold">DON BOSCO SCHOOL</h3>
              <p className="text-[10px] tracking-widest text-white/60 uppercase">Park Circus, Kolkata</p>
            </div>
          </div>
          <p className="text-white/60 text-sm leading-relaxed">
            An English-medium Christian minority institution managed by the Salesians of Don Bosco, inspiring young minds since 1958.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-gold mb-4 text-sm tracking-wider uppercase">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link href="/about/history" className="hover:text-gold transition">Our History</Link></li>
            <li><Link href="/academics/curriculum" className="hover:text-gold transition">Curriculum</Link></li>
            <li><Link href="/admissions" className="hover:text-gold transition">Admissions</Link></li>
            <li><Link href="/campus-life/groups" className="hover:text-gold transition">Campus Life</Link></li>
            <li><Link href="/gallery" className="hover:text-gold transition">Gallery</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-gold mb-4 text-sm tracking-wider uppercase">Academics</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link href="/academics/curriculum" className="hover:text-gold transition">ICSE (Nursery–X)</Link></li>
            <li><Link href="/academics/curriculum" className="hover:text-gold transition">ISC Science (XI–XII)</Link></li>
            <li><Link href="/academics/curriculum" className="hover:text-gold transition">ISC Commerce (XI–XII)</Link></li>
            <li><Link href="/academics/results" className="hover:text-gold transition">Board Results</Link></li>
            <li><Link href="/academics/faculty" className="hover:text-gold transition">Faculty</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-gold mb-4 text-sm tracking-wider uppercase">Contact Us</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2"><Phone size={14} className="mt-1 text-gold shrink-0" /> <span>+91 33 2287-9202<br/>+91 33 2287-0414</span></li>
            <li className="flex items-start gap-2"><Mail size={14} className="mt-1 text-gold shrink-0" /> <a href="mailto:dbkolkata@gmail.com" className="hover:text-gold transition">dbkolkata@gmail.com</a></li>
            <li className="flex items-start gap-2"><MapPin size={14} className="mt-1 text-gold shrink-0" /> 23, Darga Road, Park Circus, Kolkata 700017</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/40">
        © Copyright {new Date().getFullYear()} Don Bosco School, Park Circus, Kolkata. All rights reserved.
      </div>
    </footer>
  );
}
