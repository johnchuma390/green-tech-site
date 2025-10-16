import { motion } from 'framer-motion';
import { Award, Users, Briefcase, Download, Check, Megaphone, Presentation, Microphone, PanelsTopLeft, Newspaper, Ribbon, Handshake } from 'lucide-react';
import PageHero from '../components/PageHero';
import CTAButton from '../components/CTAButton';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

export default function Sponsorship() {
  /** High-level value props (matches proposal language) */
  const benefits = [
    {
      icon: Users,
      title: 'Targeted Audience',
      description:
        "Direct access to students, researchers, and industry stakeholders focused on green tech—build your talent pipeline and network.",
    },
    {
      icon: Briefcase,
      title: 'Brand Visibility',
      description:
        'Presence across web, socials, venue signage, and conference literature (programs, notebooks, awards, posters, banners).',
    },
    {
      icon: Award,
      title: 'Thought Leadership',
      description:
        'Talk time, workshop opportunities, panel appearances, and tier-based VIP remarks to position your org as a sustainability leader.',
    },
  ];

  /** Tier ranges in KES (from proposal) + tier-scaled perks */
  const tiers = [
    {
      name: 'Bronze',
      price: 'KES 75,000 – 249,999',
      color: 'from-amber-600/20 to-amber-600/5 border-amber-600/30',
      benefits: [
        'Logo on website + social media acknowledgement',
        'Logo on conference literature (program, pamphlets)',
        'Mention in pre-event media releases',
        'Exhibition table (shared zone)',
        '2 conference passes',
      ],
    },
    {
      name: 'Silver',
      price: 'KES 250,000 – 449,999',
      color: 'from-gray-400/20 to-gray-400/5 border-gray-400/30',
      benefits: [
        'All Bronze benefits',
        'Dedicated exhibition booth (standard)',
        'Company profile feature on website',
        'Verbal recognition during sessions',
        '4 conference passes',
      ],
    },
    {
      name: 'Gold',
      price: 'KES 450,000 – 599,999',
      color: 'from-gold-accent/20 to-gold-accent/5 border-gold-accent/30',
      popular: true,
      benefits: [
        'All Silver benefits',
        'Premium logo placement on venue signage',
        'Panel appearance for company representative',
        'Workshop facilitation slot (subject to agenda fit)',
        '8 conference passes',
      ],
    },
    {
      name: 'Platinum',
      price: 'KES 600,000 – 750,000',
      color: 'from-cyan-tech/20 to-cyan-tech/5 border-cyan-tech/30',
      benefits: [
        'All Gold benefits',
        'Title sponsor recognition',
        'VIP address at opening ceremony',
        'Logo on select participant merchandise',
        'Post-event brand prominence in videos & journal',
        'Attendee contact list (opt-in, subject to permission)',
        '12 conference passes',
      ],
    },
  ];

  /** Pre/During/Post benefits pulled from proposal */
  const phases = [
    {
      icon: Megaphone,
      title: 'Pre-Conference Benefits',
      items: [
        'Brand publicity in media releases (video & photo)',
        'Official logo on social media & website',
        'Partnership acknowledgement in campaign content',
      ],
    },
    {
      icon: Presentation,
      title: 'During the Conference',
      items: [
        'Logo on all literature (program, notebooks, awards, pamphlets)',
        'Name, logo & tier on web + socials + venue signage',
        'Special verbal mention & acknowledgements',
        'Talk time (minutes scale by tier)',
        'Exhibition space / booth',
        'Option to conduct a workshop',
        'Company banners on site',
        'Panel discussion seat for a representative',
        'VIP address at opening (tier-based)',
        'Logo on event posters & selected merchandise',
      ],
    },
    {
      icon: Newspaper,
      title: 'Post-Conference Benefits',
      items: [
        'Brand prominence in post-event videos',
        'Feature/advertising in The Student Engineer Journal',
        'Attendee list (opt-in; name/organization/email)',
        'Follow-on engagement: talks, visits, workshops',
      ],
    },
  ];

  /** SDGs kept for a nice visual anchor */
  const sdgs = [
    { number: 6, name: 'Clean Water & Sanitation' },
    { number: 7, name: 'Affordable & Clean Energy' },
    { number: 8, name: 'Decent Work & Economic Growth' },
    { number: 9, name: 'Industry, Innovation & Infrastructure' },
    { number: 13, name: 'Climate Action' },
    { number: 17, name: 'Partnerships for the Goals' },
  ];

  return (
    <div className="pt-16">
      <PageHero
        title="Partnerships"
        subtitle="Support sustainable innovation and connect with the next generation of green-tech leaders"
        bgImage="https://i.postimg.cc/X7BL00GC/DSC-28401303.jpg"
        bgImageMobile="https://i.postimg.cc/X7BL00GC/DSC-28401303.jpg"
        overlayClasses="bg-gradient-to-b from-green-900/75 via-emerald-900/65 to-green-900/85 mix-blend-multiply"
        className="min-h-[60vh]"
        bgPosition="center"
        breadcrumbs={[{ name: 'Partnerships', href: '/sponsorship' }]}
      />

      {/* Why Partner */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Why Partner With Us?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Tap into a focused community, elevate your brand, and help shape tomorrow’s sustainable engineers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-2xl p-8 hover-lift text-center"
              >
                <div className="bg-gradient-cta w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Phased Benefits */}
      <section className="py-14 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {phases.map((phase, idx) => (
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="rounded-2xl p-6 bg-background/70 border border-border hover-lift"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gradient-cta p-3 rounded-xl">
                    <phase.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-lg">{phase.title}</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {phase.items.map((it, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary mt-0.5" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Sponsorship Tiers (KES)
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose the level that aligns with your goals. All tiers include official partnership recognition.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {tiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-gradient-to-br ${tier.color} border-2 rounded-2xl p-6 hover-lift ${
                  tier.popular ? 'ring-2 ring-gold-accent shadow-glow' : ''
                } relative`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-gold-accent text-white px-4 py-1 rounded-full text-xs font-bold">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="font-heading font-bold text-2xl mb-1">{tier.name}</h3>
                  <div className="text-sm text-muted-foreground mb-2">Contribution</div>
                  <div className="text-xl font-heading font-bold gradient-text">{tier.price}</div>
                </div>

                <ul className="space-y-3 mb-6">
                  {tier.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* Micro-footnote to cue customizations */}
                <p className="text-xs text-muted-foreground text-center">
                  Minutes for talks & visibility scale by tier.
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground mb-6">
              Prefer a tailored package? We support financial, in-kind and project partnerships.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {/* Become a Sponsor → internal /register */}
              <Link
                to="/register"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-cta text-white hover:opacity-90 hover-glow transition-colors font-medium shadow-md"
              >
                <Handshake className="h-4 w-4" />
                Become a Sponsor
              </Link>
              {/* Download Prospectus (placeholder path) */}
              <Button variant="outline" asChild>
                <a href="/assets/prospectus.pdf" download>
                  <Download className="h-4 w-4 mr-2" />
                  Download Prospectus
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* UN SDGs */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-center">
              Supporting UN Sustainable Development Goals
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-10">
              Your partnership directly contributes to these global sustainability targets.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {sdgs.map((sdg, index) => (
                <motion.div
                  key={sdg.number}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="glass-card rounded-xl p-4 hover-lift text-center"
                >
                  <div className="text-3xl font-heading font-bold gradient-text mb-1">
                    {sdg.number}
                  </div>
                  <p className="text-xs text-muted-foreground">{sdg.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-hero-pattern">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Ready to Make an Impact?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Partner with us to support the next generation of sustainable innovators.
            </p>
            <Link
              to="/register"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white text-forest-deep hover:bg-white/90 transition-colors font-medium shadow-md"
            >
              Become a Partner Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
