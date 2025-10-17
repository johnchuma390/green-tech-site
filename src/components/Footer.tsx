import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

/** Organizer logos (provided) */
const LOGO_ONE_URL =
  'https://i.postimg.cc/5y00p9S8/Whats-App-Image-2025-10-17-at-11-07-32-1051034d.jpg';
const LOGO_TWO_URL =
  'https://i.postimg.cc/hj4PP46Q/Whats-App-Image-2025-10-17-at-11-07-33-f5204afa.jpg';

/** Replace with John’s actual WhatsApp number/link */
const WHATSAPP_URL = 'https://wa.me/2547XXXXXXXX';

const navigation = {
  main: [
    { name: 'About', href: '/about' },
    { name: 'Schedule', href: '/schedule' },
    { name: 'Register', href: '/register' },
    { name: 'Projects', href: '/projects' },
    { name: 'Sponsorship', href: '/sponsorship' },
    { name: 'Team', href: '/team' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
  social: [
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
  ],
};

/** Minimal WhatsApp SVG */
function WhatsAppIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className} fill="currentColor">
      <path d="M19.11 17.37c-.28-.14-1.65-.81-1.9-.9-.26-.1-.45-.14-.64.14-.19.28-.74.9-.9 1.09-.17.19-.33.21-.61.07-.28-.14-1.17-.43-2.23-1.37-.82-.73-1.37-1.63-1.53-1.91-.16-.28-.02-.43.12-.57.12-.12.28-.33.42-.49.14-.16.19-.28.28-.47.09-.19.05-.36-.02-.5-.07-.14-.64-1.55-.88-2.12-.23-.55-.46-.47-.64-.48l-.55-.01c-.19 0-.5.07-.76.36-.26.28-.99.97-.99 2.36 0 1.39 1.02 2.73 1.16 2.92.14.19 2.01 3.05 4.88 4.28 0 0 1.82.78 2.61.97.64.16 1.22.14 1.68.09.51-.06 1.65-.68 1.89-1.34.23-.66.23-1.23.16-1.35-.07-.12-.26-.19-.54-.33zM16.02 3.2c-7.08 0-12.82 5.74-12.82 12.82 0 2.26.6 4.5 1.76 6.46L3.2 28.8l6.5-1.73a12.76 12.76 0 0 0 6.32 1.69c7.08 0 12.82-5.74 12.82-12.82S23.1 3.2 16.02 3.2zm0 23.2c-2.21 0-4.37-.59-6.26-1.7l-.45-.27-3.85 1.03 1.03-3.76-.29-.47a10.55 10.55 0 1 1 9.82 5.18z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-forest-deep text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand / Organized by */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="rounded bg-white p-1 shadow-sm">
                  <img src={LOGO_ONE_URL} alt="Organizer 1" className="h-10 md:h-12 w-auto object-contain" />
                </div>
                <div className="rounded bg-white p-1 shadow-sm">
                  <img src={LOGO_TWO_URL} alt="Organizer 2" className="h-10 md:h-12 w-auto object-contain" />
                </div>
              </div>
              <span className="font-heading font-bold text-lg">Green Tech 2025</span>
            </div>

            <p className="text-white/80 text-sm">
              Organized by committees of the two bodies shown above. Sustainable by Design – Reshaping Product Life Cycles with Tech.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navigation.main.slice(0, 4).map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-white/80 hover:text-white transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="font-heading font-bold mb-4">More</h3>
            <ul className="space-y-2">
              {navigation.main.slice(4).map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-white/80 hover:text-white transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-heading font-bold mb-4">Stay Updated</h3>
            <form className="space-y-2">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-l-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-tech text-sm"
                  aria-label="Email for newsletter"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-gradient-cta rounded-r-lg hover:opacity-90 transition-opacity"
                  aria-label="Subscribe to newsletter"
                >
                  <Mail className="h-4 w-4" />
                </button>
              </div>
              <p className="text-xs text-white/60">Get updates on conference news and announcements.</p>
            </form>
          </div>
        </div>

        {/* Social & Legal */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-4">
            {navigation.social.map((item) => (
              <a key={item.name} href={item.href} className="text-white/80 hover:text-white transition-colors" aria-label={item.name}>
                <item.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-6 text-sm text-white/80">
            {navigation.legal.map((item) => (
              <Link key={item.name} to={item.href} className="hover:text-white transition-colors">
                {item.name}
              </Link>
            ))}
          </div>

          <p className="text-sm text-white/60">© 2025 Engineering Students&apos; Association. All rights reserved.</p>
        </div>

        {/* Compact maker credit — theme-rhyming emerald/teal, centered, fewer words */}
        <div className="mt-6">
          <div className="mx-auto max-w-3xl">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 rounded-lg px-3 py-2 bg-gradient-to-r from-emerald-600/90 to-teal-600/90 text-white shadow-md">
              <span className="text-sm font-semibold tracking-wide">
                Made with <span className="text-pink-200">♥</span> by John Chuma — clean commits, fast builds.
              </span>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/95 text-emerald-700 text-sm font-semibold shadow hover:shadow-md transition"
                aria-label="Build with me on WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4" />
                Build with me
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
