import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin } from 'lucide-react';
import PageHero from '../components/PageHero';
import { teamMembers } from '../data/team';
import CTAButton from '../components/CTAButton';

export default function Team() {
  return (
    <div className="pt-16">
      <PageHero
        title="Our Team"
        subtitle="Meet the passionate individuals organizing Green Tech Conference 2025"
        bgImage="https://i.postimg.cc/XYMWDTBD/image.png"
        bgImageMobile="https://i.postimg.cc/XYMWDTBD/image.png"
        overlayClasses="bg-gradient-to-b from-green-900/75 via-emerald-900/65 to-green-900/85 mix-blend-multiply"
        className="min-h-[60vh]"
        bgPosition="center"
        breadcrumbs={[{ name: 'Team', href: '/team' }]}
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Organizing Committee
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A dedicated group of student leaders working to create an unforgettable conference experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="glass-card rounded-2xl overflow-hidden hover-lift group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-64 object-cover transition-transform group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                    <div className="flex gap-3">
                      <a
                        href={`mailto:${member.email}`}
                        className="bg-white/90 hover:bg-white p-2 rounded-lg transition-colors"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail className="h-5 w-5 text-forest-deep" />
                      </a>
                      <a
                        href={`tel:${member.phone}`}
                        className="bg-white/90 hover:bg-white p-2 rounded-lg transition-colors"
                        aria-label={`Call ${member.name}`}
                      >
                        <Phone className="h-5 w-5 text-forest-deep" />
                      </a>
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white/90 hover:bg-white p-2 rounded-lg transition-colors"
                          aria-label={`${member.name}'s LinkedIn profile`}
                        >
                          <Linkedin className="h-5 w-5 text-forest-deep" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-heading font-bold text-xl mb-1">{member.name}</h3>
                  <p className="text-primary font-subheading font-semibold mb-1">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-3">{member.department}</p>
                  
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      <a href={`mailto:${member.email}`} className="hover:text-primary transition-colors">
                        {member.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      <span>{member.phone}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer CTA */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Join Our Volunteer Team
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Want to be part of making this conference a success? We're looking for enthusiastic volunteers to help with various aspects of the event. Gain valuable experience and make lasting connections!
            </p>
            {/* Route to internal registration hub */}
            <CTAButton
              href="/register"
              className="relative z-20 pointer-events-auto"
            >
              Become a Volunteer
            </CTAButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
