import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, User, Mic, Award, Users, Coffee } from 'lucide-react';
import PageHero from '../components/PageHero';
import { schedule } from '../data/schedule';
import CTAButton from '../components/CTAButton';
import { Button } from '../components/ui/button';

const typeIcons = {
  keynote: Mic,
  panel: Users,
  workshop: Users,
  networking: Coffee,
  awards: Award,
  exhibition: Award,
};

export default function Schedule() {
  const [activeDay, setActiveDay] = useState<'Day 1' | 'Day 2'>('Day 1');

  const filteredSchedule = schedule.filter((item) => item.day === activeDay);

  return (
    <div className="pt-16">
      <PageHero
        title="Conference Schedule"
        subtitle="Two days packed with insights, innovation, and inspiration"
        bgImage="https://i.postimg.cc/d0r2yS00/DSC-64402220.jpg"
        bgImageMobile="https://i.postimg.cc/d0r2yS00/DSC-64402220.jpg"
        overlayClasses="bg-gradient-to-b from-green-900/75 via-emerald-900/65 to-green-900/85 mix-blend-multiply"
        className="min-h-[60vh]"
        bgPosition="center"
        breadcrumbs={[{ name: 'Schedule', href: '/schedule' }]}
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Day Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-xl bg-secondary p-1">
              <button
                onClick={() => setActiveDay('Day 1')}
                className={`px-8 py-3 rounded-lg font-subheading font-semibold transition-all ${
                  activeDay === 'Day 1'
                    ? 'bg-gradient-cta text-white shadow-glow'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Day 1
                <span className="block text-xs mt-1">June 15, 2025</span>
              </button>
              <button
                onClick={() => setActiveDay('Day 2')}
                className={`px-8 py-3 rounded-lg font-subheading font-semibold transition-all ${
                  activeDay === 'Day 2'
                    ? 'bg-gradient-cta text-white shadow-glow'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Day 2
                <span className="block text-xs mt-1">June 16, 2025</span>
              </button>
            </div>
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {filteredSchedule.map((item, index) => {
                const IconComponent = typeIcons[item.type];
                
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="glass-card rounded-2xl p-6 hover-lift"
                  >
                    <div className="flex gap-6">
                      {/* Time */}
                      <div className="flex-shrink-0">
                        <div className="bg-gradient-cta text-white rounded-xl px-4 py-2 text-center min-w-[100px]">
                          <Clock className="h-4 w-4 mx-auto mb-1" />
                          <div className="text-sm font-semibold whitespace-nowrap">
                            {item.time}
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-start gap-3 mb-2">
                          <div className="bg-secondary p-2 rounded-lg mt-1">
                            <IconComponent className="h-4 w-4 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-heading font-bold mb-1">
                              {item.title}
                            </h3>
                            {item.speaker && (
                              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                                <User className="h-4 w-4" />
                                <span>{item.speaker}</span>
                              </div>
                            )}
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-3">{item.description}</p>

                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            <span>{item.location}</span>
                          </div>
                          <span className="px-3 py-1 rounded-full bg-secondary text-xs font-medium capitalize">
                            {item.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-lg text-muted-foreground mb-6">
              Don't miss out on these amazing sessions!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {/* Open participant form in new tab */}
              <CTAButton
                href="https://docs.google.com/forms/d/e/1FAIpQLSey4R9Nqru7kAxdWvRaWRuE42I-b4i4LxmKq4hHVgWGlAQdcw/viewform?usp=header"
                external
                className="relative z-20 pointer-events-auto"
              >
                Register Now
              </CTAButton>

              {/* Download schedule PDF (placeholder path) */}
              <Button variant="outline" asChild>
                <a href="/assets/schedule.pdf" download className="relative z-20 pointer-events-auto">
                  <Calendar className="h-4 w-4 mr-2" />
                  Download Schedule PDF
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
