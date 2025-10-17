import { UserPlus, Briefcase, Users, Award } from 'lucide-react';
import PageHero from '../components/PageHero';
import { motion } from 'framer-motion';

type RegType = {
  key: string;
  title: string;
  description: string;
  benefits: string[];
  icon: React.ComponentType<{ className?: string }>;
  ctaText: string;
  ctaHref: string;
  // visual
  image: string;
  gradient: string; // tailwind gradient (from-... via-... to-...)
};

export default function Register() {
  // ✅ Redesigned dataset (images from your pool, alternating visuals)
  const registrationTypes: RegType[] = [
    {
      key: 'participants',
      title: 'Participants',
      description: 'Attend sessions, workshops, and networking events.',
      benefits: [
        'Access to all keynotes and panel discussions',
        'Workshop participation',
        'Networking opportunities',
        'Conference materials',
      ],
      icon: UserPlus,
      ctaText: 'Register as Participant',
      ctaHref:
        'https://docs.google.com/forms/d/e/1FAIpQLSey4R9Nqru7kAxdWvRaWRuE42I-b4i4LxmKq4hHVgWGlAQdcw/viewform?usp=header',
      image: 'https://i.postimg.cc/HLW32LX4/image.png',
      gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
    },
    {
      key: 'projects',
      title: 'Projects',
      description: 'Showcase your innovative project to peers and leaders.',
      benefits: [
        'Project presentation slot',
        'Visibility to industry leaders',
        'Award consideration',
      ],
      icon: Award,
      ctaText: 'Submit Your Project',
      ctaHref: 'https://forms.gle/NuVUnCspAAiuWC4V6', // (unchanged - current link)
      image: 'https://i.postimg.cc/FRHXqhbX/Tech-Week-374.jpg',
      gradient: 'from-amber-500 via-orange-500 to-rose-500',
    },
    {
      key: 'exhibitors',
      title: 'Exhibitors',
      description: 'Engage attendees with a hands-on showcase at your booth.',
      benefits: [
        'Exhibition booth space',
        'Visibility to industry leaders',
        'Networking opportunity',
      ],
      icon: Briefcase,
      ctaText: 'Apply as Exhibitor',
      ctaHref: 'https://forms.gle/DUUSHtkpmatsTist8', // ✅ new exhibitors link
      image: 'https://i.postimg.cc/wBkP6rfB/DSC-4789.jpg',
      gradient: 'from-blue-500 via-sky-500 to-cyan-400',
    },
    {
      key: 'volunteers',
      title: 'Volunteers',
      description: 'Help make this conference a success behind the scenes.',
      benefits: [
        'Free conference access',
        'Hands-on event experience',
        'Networking with organizers',
      ],
      icon: Users,
      ctaText: 'Join as Volunteer',
      ctaHref: '/register', // update later if you have a form
      image: 'https://i.postimg.cc/hj1bJqNq/Tech-Week-545.jpg',
      gradient: 'from-lime-500 via-green-500 to-emerald-500',
    },
    {
      key: 'partners',
      title: 'Partners & Sponsors',
      description: 'Support sustainable innovation and gain high-visibility reach.',
      benefits: [
        'Brand visibility across event',
        'Speaking opportunities',
        'Networking with decision-makers',
        'Multiple sponsorship tiers available',
      ],
      icon: Briefcase,
      ctaText: 'Become a Partner',
      ctaHref: '/register', // route to your sponsorship page or contact
      image: 'https://i.postimg.cc/T2QDrJSr/DSC-4889.jpg',
      gradient: 'from-yellow-500 via-amber-500 to-orange-500',
    },
  ];

  return (
    <div className="pt-16">
      <PageHero
        title="Registration Hub"
        subtitle="Choose your path and join us in shaping the future of sustainable technology"
        bgImage="https://i.postimg.cc/3RDxRPr6/DSC-63951987.jpg"
        bgImageMobile="https://i.postimg.cc/3RDxRPr6/DSC-63951987.jpg"
        overlayClasses="bg-gradient-to-b from-green-900/75 via-emerald-900/65 to-green-900/85 mix-blend-multiply"
        className="min-h-[60vh]"
        bgPosition="center"
        breadcrumbs={[{ name: 'Register', href: '/register' }]}
      />

      {/* Registration Types – Alternating Split Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              How Would You Like to Participate?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Select the registration type that best fits your role — then secure your spot.
            </p>
            <p className="text-sm text-muted-foreground mt-3">
              <span className="font-semibold">Note:</span> Participants and Volunteers <span className="underline decoration-wavy">do not</span> receive certificates.
            </p>
          </motion.div>

          <div className="space-y-10 max-w-6xl mx-auto">
            {registrationTypes.map((type, idx) => {
              const ImageRight = idx % 2 === 1; // alternate image side
              const Icon = type.icon;
              return (
                <motion.div
                  key={type.key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="grid md:grid-cols-12 gap-6 items-center"
                >
                  {/* Image */}
                  <div className={`relative md:col-span-5 ${ImageRight ? 'md:order-2' : 'md:order-1'}`}>
                    <div className={`absolute -inset-2 rounded-3xl bg-gradient-to-br ${type.gradient} blur-xl opacity-25`} />
                    <div className="relative overflow-hidden rounded-3xl shadow-lg">
                      <img
                        src={type.image}
                        alt={type.title}
                        className="w-full h-64 md:h-80 object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`relative md:col-span-7 ${ImageRight ? 'md:order-1' : 'md:order-2'}`}>
                    <div className={`absolute -inset-2 rounded-3xl bg-gradient-to-br ${type.gradient} blur-xl opacity-10`} />
                    <div className="relative bg-card border border-border rounded-3xl p-6 md:p-8 shadow-sm">
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${type.gradient}`}>
                          <Icon className="w-6 h-6 text-white" />
                        </span>
                        <h3 className="text-2xl font-heading font-bold">{type.title}</h3>
                      </div>
                      <p className="text-muted-foreground mb-4">{type.description}</p>

                      <ul className="space-y-2 mb-6">
                        {type.benefits.map((b, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <span className={`mt-1 inline-block w-2 h-2 rounded-full bg-gradient-to-br ${type.gradient}`} />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>

                      <a
                        href={type.ctaHref}
                        target={type.ctaHref.startsWith('http') ? '_blank' : undefined}
                        rel={type.ctaHref.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-medium hover:opacity-95 transition-shadow shadow-md"
                      >
                        {type.ctaText}
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* (Removed) Important Information section */}
    </div>
  );
}
