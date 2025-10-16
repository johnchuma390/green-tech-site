import { Button } from './ui/button';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface CTAButtonProps {
  /** Full URL (https://...), internal path (/register), or env key (VITE_...) */
  href: string;
  children: React.ReactNode;
  variant?: 'default' | 'secondary' | 'outline';
  icon?: 'arrow' | 'external';
  className?: string;
  /** Only applies to external links: open in new tab */
  external?: boolean;
}

function resolveHref(raw: string): { kind: 'external' | 'internal' | 'missing'; url: string } {
  const isExternal = /^(https?:|mailto:|tel:)/i.test(raw);
  if (isExternal) return { kind: 'external', url: raw };

  const isInternal = raw.startsWith('/');
  if (isInternal) return { kind: 'internal', url: raw };

  // Treat as ENV key
  const env = import.meta.env as Record<string, string | undefined>;
  const val = env[raw] ?? '';
  if (!val) return { kind: 'missing', url: '' };

  return /^(https?:|mailto:|tel:)/i.test(val)
    ? { kind: 'external', url: val }
    : val.startsWith('/')
      ? { kind: 'internal', url: val }
      : { kind: 'external', url: val }; // fallback assume external
}

export default function CTAButton({
  href,
  children,
  variant = 'default',
  icon = 'arrow',
  className = '',
  external = false
}: CTAButtonProps) {
  const { kind, url } = resolveHref(href);
  const IconComponent = icon === 'arrow' ? ArrowRight : ExternalLink;

  const buttonContent = (
    <span className="flex items-center gap-2">
      {children}
      <IconComponent className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
    </span>
  );

  if (kind === 'missing') {
    return (
      <Button
        variant={variant}
        disabled
        className={`group relative ${className}`}
        title="Registration link coming soon"
      >
        {buttonContent}
      </Button>
    );
  }

  const baseClasses = `group ${
    variant === 'default' ? 'bg-gradient-cta hover:opacity-90 hover-glow text-white' : ''
  } ${className}`;

  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <Button asChild variant={variant} className={baseClasses}>
        {kind === 'internal' ? (
          <Link to={url} aria-label={typeof children === 'string' ? children : 'Open link'}>
            {buttonContent}
          </Link>
        ) : (
          <a
            href={url}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
            aria-label={`${typeof children === 'string' ? children : 'Open link'}${
              external ? ' (opens in new tab)' : ''
            }`}
          >
            {buttonContent}
          </a>
        )}
      </Button>
    </motion.div>
  );
}
