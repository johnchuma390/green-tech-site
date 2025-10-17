import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from './ui/navigation-menu';

/** Organizer logos (provided) */
const LOGO_ONE_URL =
  'https://i.postimg.cc/5y00p9S8/Whats-App-Image-2025-10-17-at-11-07-32-1051034d.jpg';
const LOGO_TWO_URL =
  'https://i.postimg.cc/hj4PP46Q/Whats-App-Image-2025-10-17-at-11-07-33-f5204afa.jpg';

const aboutLinks = [
  { name: 'About ESA & GreenTech', href: '/about' },
  { name: 'Team', href: '/team' },
  { name: 'Schedule', href: '/schedule' },
];

const highlightsLinks = [
  { name: 'Gallery', href: '/gallery' },
  { name: 'Projects', href: '/projects' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false); // ⬅️ hide/show the whole bar on scroll
  const location = useLocation();
  const lastY = useRef(0);

  // Close mobile on route change
  useEffect(() => setIsOpen(false), [location]);

  // Hide on scroll down, show on scroll up (with a small threshold to avoid jitter)
  useEffect(() => {
    const THRESHOLD = 8;
    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY.current;

      // Always show near top
      if (y < 10) {
        setHidden(false);
      } else {
        if (delta > THRESHOLD) setHidden(true);      // scrolling down → hide
        else if (delta < -THRESHOLD) setHidden(false); // scrolling up → show
      }
      lastY.current = y;
    };
    // initialize lastY to current position
    lastY.current = window.scrollY;
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (href: string) => location.pathname === href;
  const isAnyActive = (links: { href: string }[]) => links.some((l) => isActive(l.href));

  const linkBase =
    'px-3 py-2 rounded-lg text-sm font-medium transition-colors focus-ring relative';
  const linkIdle = 'text-foreground hover:bg-secondary';
  const linkActive = 'bg-primary text-primary-foreground';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 will-change-transform transition-transform duration-300 ${
        hidden ? '-translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
      }`}
    >
      {/* persistent white highlight (stays, no blinking) */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-xl border-b border-black/5" />

      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between h-16">
          {/* Logos + Wordmark */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="flex items-center gap-2">
              <div className="rounded bg-white p-1 shadow-sm ring-1 ring-black/5">
                <img
                  src={LOGO_ONE_URL}
                  alt="Organizer 1"
                  className="h-7 md:h-8 w-auto object-contain"
                />
              </div>
              <div className="rounded bg-white p-1 shadow-sm ring-1 ring-black/5">
                <img
                  src={LOGO_TWO_URL}
                  alt="Organizer 2"
                  className="h-7 md:h-8 w-auto object-contain"
                />
              </div>
            </div>
            <span className="font-heading font-bold text-lg hidden sm:block text-foreground">
              Green Tech 2025
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {/* Home */}
            <Link to="/" className={`${linkBase} ${isActive('/') ? linkActive : linkIdle}`}>
              Home
              {isActive('/') && <ActiveUnderline />}
            </Link>

            {/* About (dropdown) */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={`${linkBase} ${
                      isAnyActive(aboutLinks) ? linkActive : linkIdle
                    }`}
                  >
                    About
                    {isAnyActive(aboutLinks) && <ActiveUnderline />}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[220px] gap-1 p-2 bg-background border border-border rounded-lg shadow-card">
                      {aboutLinks.map((link) => (
                        <li key={link.name}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={link.href}
                              className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary focus:bg-secondary ${
                                isActive(link.href) ? 'bg-primary text-primary-foreground' : ''
                              }`}
                            >
                              <div className="text-sm font-medium leading-none">
                                {link.name}
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Partnerships */}
            <Link
              to="/sponsorship"
              className={`${linkBase} ${
                isActive('/sponsorship') ? linkActive : linkIdle
              }`}
            >
              Partnerships
              {isActive('/sponsorship') && <ActiveUnderline />}
            </Link>

            {/* Highlights (dropdown) */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={`${linkBase} ${
                      isAnyActive(highlightsLinks) ? linkActive : linkIdle
                    }`}
                  >
                    Highlights
                    {isAnyActive(highlightsLinks) && <ActiveUnderline />}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[220px] gap-1 p-2 bg-background border border-border rounded-lg shadow-card">
                      {highlightsLinks.map((link) => (
                        <li key={link.name}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={link.href}
                              className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary focus:bg-secondary ${
                                isActive(link.href) ? 'bg-primary text-primary-foreground' : ''
                              }`}
                            >
                              <div className="text-sm font-medium leading-none">
                                {link.name}
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Register */}
            <Link
              to="/register"
              className={`${linkBase} ${
                isActive('/register') ? linkActive : linkIdle
              }`}
            >
              Register
              {isActive('/register') && <ActiveUnderline />}
            </Link>

            {/* Contact */}
            <Link
              to="/contact"
              className={`${linkBase} ${
                isActive('/contact') ? linkActive : linkIdle
              }`}
            >
              Contact
              {isActive('/contact') && <ActiveUnderline />}
            </Link>
          </div>

          {/* Optional CTA */}
          <Button
            asChild
            className="hidden lg:inline-flex bg-gradient-cta hover:opacity-90 text-white"
          >
            <Link to="/register">Register Now</Link>
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-secondary focus-ring text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-border bg-background/95 backdrop-blur-md"
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              {/* Mobile header logos */}
              <div className="flex items-center gap-2 mb-2">
                <div className="rounded bg-white p-1 shadow-sm">
                  <img src={LOGO_ONE_URL} alt="Organizer 1" className="h-8 w-auto object-contain" />
                </div>
                <div className="rounded bg-white p-1 shadow-sm">
                  <img src={LOGO_TWO_URL} alt="Organizer 2" className="h-8 w-auto object-contain" />
                </div>
                <span className="ml-2 font-heading font-semibold">Green Tech 2025</span>
              </div>

              {/* Home */}
              <Link
                to="/"
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors focus-ring ${
                  isActive('/') ? 'bg-primary text-primary-foreground' : 'text-foreground hover:bg-secondary'
                }`}
              >
                Home
              </Link>

              {/* About */}
              <div className="space-y-1">
                <div className="px-4 py-2 text-sm font-semibold text-muted-foreground">About</div>
                {aboutLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors focus-ring ${
                      isActive(link.href)
                        ? 'bg-primary text-primary-foreground'
                        : 'text-foreground hover:bg-secondary'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Partnerships */}
              <Link
                to="/sponsorship"
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors focus-ring ${
                  isActive('/sponsorship')
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-secondary'
                }`}
              >
                Partnerships
              </Link>

              {/* Highlights */}
              <div className="space-y-1">
                <div className="px-4 py-2 text-sm font-semibold text-muted-foreground">Highlights</div>
                {highlightsLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors focus-ring ${
                      isActive(link.href)
                        ? 'bg-primary text-primary-foreground'
                        : 'text-foreground hover:bg-secondary'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Register */}
              <Link
                to="/register"
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors focus-ring ${
                  isActive('/register') ? 'bg-primary text-primary-foreground' : 'text-foreground hover:bg-secondary'
                }`}
              >
                Register
              </Link>

              {/* Contact */}
              <Link
                to="/contact"
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors focus-ring ${
                  isActive('/contact') ? 'bg-primary text-primary-foreground' : 'text-foreground hover:bg-secondary'
                }`}
              >
                Contact
              </Link>

              <Button asChild className="w-full bg-gradient-cta hover:opacity-90 text-white">
                <Link to="/register">Register Now</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

/** Animated underline for the active item */
function ActiveUnderline() {
  return (
    <motion.span
      layoutId="nav-underline"
      className="absolute left-2 right-2 -bottom-[2px] h-[2px] rounded-full bg-emerald-500/70"
      transition={{ type: 'spring', stiffness: 500, damping: 35 }}
    />
  );
}
