import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: { name: string; href: string }[];

  /** Background image (desktop/tablet). If not provided, a default placeholder is used. */
  bgImage?: string;
  /** Optional background image for small screens */
  bgImageMobile?: string;
  /** Tailwind gradient/tint classes for overlay */
  overlayClasses?: string;
  /** Extra classes for fine control (e.g., min-h) */
  className?: string;
  /** Background position, defaults to 'center' */
  bgPosition?: 'center' | 'top' | 'bottom' | 'left' | 'right' | string;

  /** Optional decorative blobs toggle */
  showDecor?: boolean;
}

const DEFAULT_BG =
  'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80';

export default function PageHero({
  title,
  subtitle,
  breadcrumbs,
  bgImage = DEFAULT_BG,
  bgImageMobile,
  overlayClasses = 'bg-gradient-to-b from-green-900/80 via-emerald-900/70 to-green-900/90 mix-blend-multiply',
  className = '',
  bgPosition = 'center',
  showDecor = true
}: PageHeroProps) {
  return (
    <section
      className={`relative flex flex-col justify-center items-center text-center min-h-[70vh] md:min-h-[80vh] overflow-hidden ${className}`}
      aria-label="Page hero"
    >
      {/* Background image with mobile/desktop sources */}
      <picture className="absolute inset-0 -z-10">
        {bgImageMobile && (
          <source media="(max-width: 640px)" srcSet={bgImageMobile} />
        )}
        <img
          src={bgImage}
          alt=""
          className="w-full h-full object-cover"
          style={{ objectPosition: bgPosition }}
          loading="eager"
          fetchPriority="high"
        />
      </picture>

      {/* Green overlay/tint */}
      <div className={`absolute inset-0 -z-0 ${overlayClasses}`} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col justify-center items-center text-center">
        {breadcrumbs && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center items-center gap-2 text-sm mb-6"
            aria-label="Breadcrumb"
          >
            <Link to="/" className="text-white/80 hover:text-white transition-colors">
              Home
            </Link>
            {breadcrumbs.map((crumb, index) => (
              <span key={crumb.href} className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-white/60" />
                <Link
                  to={crumb.href}
                  className={`transition-colors ${
                    index === breadcrumbs.length - 1
                      ? 'text-white font-medium'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {crumb.name}
                </Link>
              </span>
            ))}
          </motion.nav>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 leading-tight drop-shadow-lg"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="text-lg md:text-xl text-white/90 max-w-2xl font-body mx-auto drop-shadow"
          >
            {subtitle}
          </motion.p>
        )}
      </div>

      {/* Decorative blurs */}
      {showDecor && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
        </div>
      )}
    </section>
  );
}
