import { motion } from 'framer-motion';
import {
  Award,
  Users,
  Briefcase,
  Download,
  Check,
  Megaphone,
  Presentation,
  Newspaper,
  Handshake,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

export default function Sponsorship() {
  const benefits = [
    {
      icon: Users,
      title: 'Targeted Audience',
      description:
        'Direct access to students, researchers, and industry stakeholders focused on green tech—build your talent pipeline and network.',
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
      color: 'from-yellow-500/25 to-yellow-500/10 border-yellow-500/40',
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
      color: 'from-cyan-500/25 to-cyan-500/10 border-cyan-500/40',
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
      {/* HERO — unchanged */}
      <PageHero
        title="Partnerships"
        subtitle="Support sustainable innovation and connect with the next generation of green-tech leaders"
        bgImage="https://i.postimg.cc/zvf6Vkbf/DSC-4729.jpg"
        bgImageMobile="https://i.postimg.cc/zvf6Vkbf/DSC-4729.jpg"
        overlayClasses="bg-gradient-to-b from-emerald-900/75 via-emerald-900/55 to-emerald-900/85 mix-blend-multiply"
        className="min-h-[60vh]"
        bgPosition="center"
        breadcrumbs={[{ name: 'Partnerships', href: '/sponsorship' }]}
      />

      {/* WHY PARTNER — image moved here beside Thought Leadership */}
      <section className="py-18 md:py-20 bg-background relative overflow-hidden">
        {/* soft animated orbs */}
        <motion.div
          aria-hidden
          animate={{ scale: [1, 1.12, 1], opacity: [0.16, 0.26, 0.16] }}
          transition={{ duration: 9, repeat: Infinity }}
          className="absolute -top-16 -left-10 w-72 h-72 rounded-full bg-emerald-400/30 blur-3xl"
        />
        <motion.div
          aria-hidden
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.26, 0.18, 0.26] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-cyan-400/25 blur-3xl"
        />

        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Why Partner With Us?
            </h2>
            <p className="text-lg text-muted-foreground">
              Tap into a focused community, elevate your brand, and help shape tomorrow’s sustainable engineers.
            </p>
          </motion.div>

          {/* Layout: on lg+ the image sits in a narrow right column aligned with the 3rd card */}
          <div className="grid lg:grid-cols-[1fr_340px] gap-8 max-w-6xl mx-auto items-start">
            {/* Cards column */}
            <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07 }}
                  whileHover={{ y: -6 }}
                  className="relative rounded-2xl p-6 text-center border border-white/20 bg-white/10 backdrop-blur-md shadow-lg"
                >
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-emerald-400/40 to-cyan-400/40 blur-xl opacity-20" />
                  <div className="relative">
                    <div className="w-14 h-14 rounded-xl grid place-items-center mx-auto mb-4 bg-gradient-to-br from-emerald-500 to-teal-500 shadow-md">
                      <benefit.icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="font-heading font-bold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stylish image beside the 3rd card (Thought Leadership) */}
            <motion.div
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative lg:sticky lg:top-28"
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/25 bg-white/10 backdrop-blur-md shadow-2xl">
                <img
                  src="https://i.postimg.cc/d0rLx20t/image.png"
                  alt="Thought leadership in action"
                  className="w-full h-[340px] object-cover"
                  loading="lazy"
                />
                {/* subtle sheen/tilt */}
                <motion.div
                  aria-hidden
                  initial={{ rotate: 0 }}
                  animate={{ rotate: [0, 1.2, -1.2, 0] }}
                  transition={{ duration: 8, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-tr from-emerald-400/10 via-transparent to-cyan-400/10"
                />
                <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-lg text-xs font-medium bg-emerald-900/70 text-white/90 backdrop-blur">
                  Thought Leadership
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PHASED BENEFITS — image removed per request */}
      <section className="py-16 bg-secondary relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M0 39.5 H40 M39.5 0 V40\" stroke=\"white\" stroke-width=\"1\"/%3E%3C/svg%3E')",
          }}
        />
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {phases.map((phase, idx) => (
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl p-6 bg-background/70 border border-white/20 backdrop-blur-md shadow-lg"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 shadow">
                    <phase.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-lg">{phase.title}</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {phase.items.map((it, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-emerald-600 mt-0.5" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TIERS — content LEFT, large Image RIGHT (unchanged from last) */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[1.25fr_0.95fr] gap-10 items-start max-w-7xl mx-auto">
            {/* LEFT: Heading + Tiers */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-left mb-8"
              >
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3">
                  Sponsorship Tiers (KES)
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  Choose the level that aligns with your goals. All tiers include official partnership recognition.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                {tiers.map((tier, index) => (
                  <motion.div
                    key={tier.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    whileHover={{ y: -6 }}
                    className={`bg-gradient-to-br ${tier.color} border-2 rounded-2xl p-6 relative backdrop-blur-md ${
                      tier.popular ? 'ring-2 ring-yellow-500 shadow-glow' : ''
                    }`}
                  >
                    {tier.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <span className="bg-yellow-500 text-white px-4 py-1 rounded-full text-xs font-bold shadow">
                          MOST POPULAR
                        </span>
                      </div>
                    )}

                    <div className="text-center mb-6">
                      <h3 className="font-heading font-bold text-2xl mb-1">{tier.name}</h3>
                      <div className="text-sm text-muted-foreground mb-2">Contribution</div>
                      <div className="text-xl font-heading font-bold bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
                        {tier.price}
                      </div>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {tier.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <Check className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>

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
                className="mt-10"
              >
                <p className="text-muted-foreground mb-6">
                  Prefer a tailored package? We support financial, in-kind and project partnerships.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/register"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:opacity-90 transition-colors font-medium shadow-md"
                  >
                    <Handshake className="h-4 w-4" />
                    Become a Sponsor
                  </Link>
                  <Button variant="outline" asChild>
                    <a href="/assets/prospectus.pdf" download>
                      <Download className="h-4 w-4 mr-2" />
                      Download Prospectus
                    </a>
                  </Button>
                </div>
              </motion.div>
            </div>

            {/* RIGHT: Bigger image on laptop/desktop */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-2xl">
                <img
                  src="https://i.postimg.cc/g0MDtbtQ/DSC-4680.jpg"
                  alt="Sponsors highlight"
                  className="w-full h-[320px] sm:h-[360px] md:h-[420px] lg:h-[520px] xl:h-[560px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/25 via-transparent to-cyan-900/25" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* UN SDGs */}
      <section className="py-20 bg-secondary relative overflow-hidden">
        <motion.div
          aria-hidden
          animate={{ rotate: [0, 2, -2, 0], opacity: [0.18, 0.28, 0.18] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute -top-10 left-1/3 w-48 h-48 rounded-full bg-emerald-400/30 blur-3xl"
        />
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
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -4 }}
                  className="rounded-xl p-4 text-center bg-white/10 border border-white/20 backdrop-blur-md shadow-md"
                >
                  <div className="text-3xl font-heading font-bold bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent mb-1">
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
      <section
        className="py-20 relative overflow-hidden"
        style={{
          background:
            'radial-gradient(1000px 500px at 20% 10%, rgba(16,185,129,.25), transparent 60%), radial-gradient(800px 500px at 80% 20%, rgba(6,182,212,.22), transparent 60%), linear-gradient(180deg, rgba(6,95,70,.92), rgba(6,78,59,.95))',
        }}
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M0 39.5 H40 M39.5 0 V40\" stroke=\"white\" stroke-width=\"1\"/%3E%3C/svg%3E')",
          }}
        />
        <div className="container mx-auto px-4 text-center relative z-10">
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

        <motion.div
          aria-hidden
          animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.4, 0.25] }}
          transition={{ duration: 9, repeat: Infinity }}
          className="absolute top-24 left-8 w-72 h-72 bg-emerald-400/30 rounded-full blur-3xl"
        />
        <motion.div
          aria-hidden
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.4, 0.25, 0.4] }}
          transition={{ duration: 11, repeat: Infinity }}
          className="absolute bottom-24 right-8 w-72 h-72 bg-cyan-400/30 rounded-full blur-3xl"
        />
      </section>
    </div>
  );
}
