"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";

const FacebookIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const InstagramIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);
const YoutubeIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 7.1C2.5 7.1 2.5 5.5 3.3 4.7C4.3 3.6 5.4 3.6 5.9 3.5C8.2 3.3 12 3.3 12 3.3S15.8 3.3 18.1 3.5C18.6 3.6 19.7 3.6 20.7 4.7C21.5 5.5 21.5 7.1 21.5 7.1S21.7 8.8 21.7 10.5V13.5C21.7 15.2 21.5 16.9 21.5 16.9C21.5 16.9 21.5 18.5 20.7 19.3C19.7 20.4 18.4 20.3 17.8 20.4C15.8 20.6 12 20.7 12 20.7S8.2 20.7 5.9 20.5C5.4 20.4 4.3 20.4 3.3 19.3C2.5 18.5 2.5 16.9 2.5 16.9S2.3 15.2 2.3 13.5V10.5C2.3 8.8 2.5 7.1 2.5 7.1Z"/><polygon points="9.5 15.5 15.5 12 9.5 8.5 9.5 15.5"/></svg>
);

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "About Us", href: "/about",
    children: [
      { label: "Management", href: "/about/management" },
      { label: "Our History", href: "/about/history" },
      { label: "House System", href: "/about/houses" },
      { label: "Achievements", href: "/about/achievements" },
      { label: "Night School", href: "/about/night-school" },
    ],
  },
  {
    label: "Academics", href: "/academics",
    children: [
      { label: "Curriculum", href: "/academics/curriculum" },
      { label: "Faculty", href: "/academics/faculty" },
      { label: "Board Results", href: "/academics/results" },
    ],
  },
  { label: "Admissions", href: "/admissions" },
  {
    label: "Campus Life", href: "/campus-life",
    children: [
      { label: "Action Groups", href: "/campus-life/groups" },
      { label: "School Teams", href: "/campus-life/teams" },
      { label: "Activities", href: "/campus-life/activities" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-navy-light text-white/70 py-2.5 px-8 text-[11px] font-medium tracking-wide flex justify-between items-center z-50 relative border-b border-white/5">
        <div className="flex gap-3 items-center">
          <span className="text-gold tracking-[0.2em] uppercase">VIRTUS ET SCIENTIA</span>
          <span className="opacity-40 hidden sm:inline">•</span>
          <span className="hidden sm:inline">Run, Jump, Shout, but do not Sin</span>
        </div>
        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-6">
            <Link href="#" className="hover:text-gold transition-colors">Students</Link>
            <Link href="#" className="hover:text-gold transition-colors">Parents</Link>
            <Link href="#" className="hover:text-gold transition-colors">Alumni</Link>
            <Link href="https://www.donboscocampuscare.in" target="_blank" className="hover:text-gold transition-colors">Parent Portal</Link>
          </div>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-gold transition-colors"><YoutubeIcon size={14} /></Link>
            <Link href="#" className="hover:text-gold transition-colors"><FacebookIcon size={14} /></Link>
            <Link href="#" className="hover:text-gold transition-colors"><InstagramIcon size={14} /></Link>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-navy/95 backdrop-blur-xl text-white sticky top-0 z-50 border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between py-5">
          <Link href="/" className="flex items-center gap-4 group">
            <Image src="/images/logo.png" alt="DBPC Logo" width={50} height={60} className="w-auto h-auto group-hover:scale-105 transition-transform duration-500" />
            <div>
              <h1 className="font-serif text-xl md:text-2xl font-bold tracking-wider leading-none mb-1 group-hover:text-gold-light transition-colors duration-300">DON BOSCO SCHOOL</h1>
              <p className="text-[9px] md:text-[10px] tracking-[0.25em] text-gold uppercase font-bold">Park Circus, Kolkata</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-7 text-sm font-medium">
            {navItems.map((item) => (
              <div key={item.label} className="relative group"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 py-2 transition ${pathname === item.href || pathname.startsWith(item.href + "/") ? "text-gold border-b-2 border-gold" : "hover:text-gold"}`}
                >
                  {item.label}
                  {item.children && <ChevronDown size={14} className="opacity-60" />}
                </Link>
                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 bg-navy/95 backdrop-blur-md border border-white/10 rounded-lg shadow-2xl py-2 min-w-[200px] z-50">
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href} className="block px-5 py-2.5 text-sm text-white/80 hover:text-gold hover:bg-white/5 transition">
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link href="/admissions" className="hidden lg:flex bg-gold hover:bg-yellow-600 text-navy font-semibold px-5 py-2 rounded text-sm items-center gap-2 transition">
              Enquire Now <ArrowRight size={16} />
            </Link>
            <button className="lg:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden bg-navy border-t border-white/10 px-6 py-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link href={item.href} onClick={() => setMobileOpen(false)} className="block py-2 text-white/80 hover:text-gold transition">
                  {item.label}
                </Link>
                {item.children?.map((child) => (
                  <Link key={child.href} href={child.href} onClick={() => setMobileOpen(false)} className="block py-1.5 pl-4 text-sm text-white/60 hover:text-gold transition">
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
