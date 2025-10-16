import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';
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
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false); // close mobile on route change
  }, [location]);

  const isActive = (href: string) => location.pathname === href;
  const isAnyActive = (links: { href: string }[]) => links.some(l => isActive(l.href));

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-card' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-gradient-cta p-2 rounded-lg transition-transform group-hover:scale-110">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <span className="font-heading font-bold text-lg hidden sm:block">
              Green Tech 2025
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {/* Home */}
            <Link
              to="/"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors focus-ring ${
                isActive('/') ? 'bg-primary text-primary-foreground' : 'text-foreground hover:bg-secondary'
              }`}
            >
              Home
            </Link>

            {/* About (dropdown) */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors focus-ring ${
                      isAnyActive(aboutLinks) ? 'bg-primary text-primary-foreground' : 'text-foreground hover:bg-secondary'
                    }`}
                  >
                    About
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[220px] gap-1 p-2 bg-background border border-border rounded-lg shadow-card">
                      {aboutLinks.map(link => (
                        <li key={link.name}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={link.href}
                              className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary focus:bg-secondary ${
                                isActive(link.href) ? 'bg-primary text-primary-foreground' : ''
                              }`}
                            >
                              <div className="text-sm font-medium leading-none">{link.name}</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Partnerships (single link to /sponsorship) */}
            <Link
              to="/sponsorship"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors focus-ring ${
                isActive('/sponsorship') ? 'bg-primary text-primary-foreground' : 'text-foreground hover:bg-secondary'
              }`}
            >
              Partnerships
            </Link>

            {/* Highlights (dropdown) */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors focus-ring ${
                        isAnyActive(highlightsLinks) ? 'bg-primary text-primary-foreground' : 'text-foreground hover:bg-secondary'
                      }`}
                    >
                      Highlights
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[220px] gap-1 p-2 bg-background border border-border rounded-lg shadow-card">
                        {highlightsLinks.map(link => (
                          <li key={link.name}>
                            <NavigationMenuLink asChild>
                              <Link
                                to={link.href}
                                className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary focus:bg-secondary ${
                                  isActive(link.href) ? 'bg-primary text-primary-foreground' : ''
                                }`}
                              >
                                <div className="text-sm font-medium leading-none">{link.name}</div>
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
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors focus-ring ${
                isActive('/register') ? 'bg-primary text-primary-foreground' : 'text-foreground hover:bg-secondary'
              }`}
            >
              Register
            </Link>

            {/* Contact */}
            <Link
              to="/contact"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors focus-ring ${
                isActive('/contact') ? 'bg-primary text-primary-foreground' : 'text-foreground hover:bg-secondary'
              }`}
            >
              Contact
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
            className="lg:hidden p-2 rounded-lg hover:bg-secondary focus-ring"
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
                {aboutLinks.map(link => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors focus-ring ${
                      isActive(link.href) ? 'bg-primary text-primary-foreground' : 'text-foreground hover:bg-secondary'
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
                  isActive('/sponsorship') ? 'bg-primary text-primary-foreground' : 'text-foreground hover:bg-secondary'
                }`}
              >
                Partnerships
              </Link>

              {/* Highlights */}
              <div className="space-y-1">
                <div className="px-4 py-2 text-sm font-semibold text-muted-foreground">Highlights</div>
                {highlightsLinks.map(link => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors focus-ring ${
                      isActive(link.href) ? 'bg-primary text-primary-foreground' : 'text-foreground hover:bg-secondary'
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
