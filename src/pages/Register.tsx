import { UserPlus, Briefcase, Users, Award, Camera } from 'lucide-react';
import PageHero from '../components/PageHero';
import RegistrationCard from '../components/RegistrationCard';
import { motion } from 'framer-motion';

export default function Register() {
  const registrationTypes = [
    {
      title: 'Participants',
      description: 'Attend sessions, workshops, and networking events',
      benefits: [
        'Access to all keynotes and panel discussions',
        'Workshop participation',
        'Networking opportunities',
        'Conference materials and certificate',
      ],
      icon: UserPlus,
      ctaText: 'Register as Participant',
      ctaHref:
        'https://docs.google.com/forms/d/e/1FAIpQLSey4R9Nqru7kAxdWvRaWRuE42I-b4i4LxmKq4hHVgWGlAQdcw/viewform?usp=header',
      color: 'green' as const,
    },
    {
      title: 'Projects & Exhibitors',
      description: 'Showcase your innovative green tech solutions',
      benefits: [
        'Exhibition booth space',
        'Project presentation slot',
        'Visibility to industry leaders',
        'Award consideration',
      ],
      icon: Award,
      ctaText: 'Submit Your Project',
      ctaHref: 'https://forms.gle/NuVUnCspAAiuWC4V6',
      color: 'cyan' as const,
    },
    {
      title: 'Volunteers',
      description: 'Help make this conference a success',
      benefits: [
        'Free conference access',
        'Hands-on event experience',
        'Certificate of participation',
        'Networking with organizers',
      ],
      icon: Users,
      ctaText: 'Join as Volunteer',
      ctaHref: '/register',
      color: 'green' as const,
    },
    {
      title: 'Partners & Sponsors',
      description: 'Support sustainable innovation and gain visibility',
      benefits: [
        'Brand visibility across event',
        'Speaking opportunities',
        'Networking with decision-makers',
        'Multiple sponsorship tiers available',
      ],
      icon: Briefcase,
      ctaText: 'Become a Partner',
      ctaHref: '/register',
      color: 'gold' as const,
    },
    {
      title: 'Media & Guests',
      description: 'Cover the event or attend as a special guest',
      benefits: [
        'Press credentials and access',
        'Interview opportunities',
        'Media kit and resources',
        'Priority seating at events',
      ],
      icon: Camera,
      ctaText: 'Media Registration',
      ctaHref: '/register',
      color: 'cyan' as const,
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
              We welcome everyone passionate about green technology. Select the registration type that best fits your role.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {registrationTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <RegistrationCard {...type} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 md:p-12"
            >
              <h3 className="text-2xl font-heading font-bold mb-6">Important Information</h3>
              
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Registration Deadline</h4>
                  <p>Early bird registration closes on May 15, 2025. Standard registration available until June 10, 2025.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">What's Included</h4>
                  <p>All registrations include access to conference sessions, exhibition area, meals, and networking events. Conference materials and certificates provided to all participants.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Group Discounts</h4>
                  <p>Special rates available for groups of 5 or more. Contact us for details on group registration benefits.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Questions?</h4>
                  <p>Need help choosing the right registration type? Visit our <a href="/contact" className="text-primary hover:underline">Contact page</a> or email us at registration@greentechconf.org</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
