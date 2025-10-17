import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

/** Organizer logos (provided) */
const LOGO_ONE_URL =
  'https://i.postimg.cc/5y00p9S8/Whats-App-Image-2025-10-17-at-11-07-32-1051034d.jpg';
const LOGO_TWO_URL =
  'https://i.postimg.cc/hj4PP46Q/Whats-App-Image-2025-10-17-at-11-07-33-f5204afa.jpg';

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

export default function Footer() {
  return (
    <footer className="bg-forest-deep text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand / Organized by */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              {/* Two organizer logos side-by-side (proportional, visible on dark) */}
              <div className="flex items-center gap-2">
                <div className="rounded bg-white p-1 shadow-sm">
                  <img
                    src={LOGO_ONE_URL}
                    alt="Organizer 1"
                    className="h-10 md:h-12 w-auto object-contain"
                  />
                </div>
                <div className="rounded bg-white p-1 shadow-sm">
                  <img
                    src={LOGO_TWO_URL}
                    alt="Organizer 2"
                    className="h-10 md:h-12 w-auto object-contain"
                  />
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
                  <Link
                    to={item.href}
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
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
                  <Link
                    to={item.href}
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
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
              <p className="text-xs text-white/60">
                Get updates on conference news and announcements.
              </p>
            </form>
          </div>
        </div>

        {/* Social & Legal */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-4">
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white/80 hover:text-white transition-colors"
                aria-label={item.name}
              >
                <item.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-6 text-sm text-white/80">
            {navigation.legal.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <p className="text-sm text-white/60">
            © 2025 Engineering Students' Association. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
