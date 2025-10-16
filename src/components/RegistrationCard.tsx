import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import CTAButton from './CTAButton';

interface RegistrationCardProps {
  title: string;
  description: string;
  benefits: string[];
  icon: LucideIcon;
  ctaText: string;
  ctaHref: string;
  color: 'green' | 'cyan' | 'gold';
}

const colorClasses = {
  green: 'from-green-primary/20 to-green-primary/5 border-green-primary/30',
  cyan: 'from-cyan-tech/20 to-cyan-tech/5 border-cyan-tech/30',
  gold: 'from-gold-accent/20 to-gold-accent/5 border-gold-accent/30',
};

const iconClasses = {
  green: 'bg-green-primary',
  cyan: 'bg-cyan-tech',
  gold: 'bg-gold-accent',
};

export default function RegistrationCard({
  title,
  description,
  benefits,
  icon: Icon,
  ctaText,
  ctaHref,
  color,
}: RegistrationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className={`bg-gradient-to-br ${colorClasses[color]} border-2 rounded-2xl p-6 hover-lift hover-glow`}
    >
      <div className={`${iconClasses[color]} w-14 h-14 rounded-xl flex items-center justify-center mb-4`}>
        <Icon className="h-7 w-7 text-white" />
      </div>

      <h3 className="font-heading font-bold text-2xl mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>

      <div className="mb-6">
        <h4 className="font-subheading font-semibold text-sm mb-2">What you'll get:</h4>
        <ul className="space-y-1">
          {benefits.map((benefit, index) => (
            <li key={index} className="text-sm flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      <CTAButton
        href={ctaHref}
        external
        className="w-full"
      >
        {ctaText}
      </CTAButton>
    </motion.div>
  );
}
