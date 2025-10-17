import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, MapPin, User, Mic, Award, Users, Coffee } from 'lucide-react';
import PageHero from '../components/PageHero';
import CTAButton from '../components/CTAButton';
import { Button } from '../components/ui/button';

type SessionType = 'keynote' | 'panel' | 'workshop' | 'networking' | 'awards' | 'exhibition';
type ScheduleItem = {
  id: string;
  day: 'Day 1' | 'Day 2';
  time: string;
  title: string;
  speaker?: string;
  location: string;
  type: SessionType;
  description?: string;
};

const typeIcons: Record<SessionType, any> = {
  keynote: Mic,
  panel: Users,
  workshop: Users,
  networking: Coffee,
  awards: Award,
  exhibition: Award,
};

// Inline schedule (corrected dates/content)
const schedule: ScheduleItem[] = [
  // Day 1 — November 13, 2025
  { id: 'd1-0800', day: 'Day 1', time: '8:00 – 9:00', title: 'Morning Registration', location: 'Guests Lounge', type: 'networking', description: 'Check-in, badges, and welcome refreshments.' },
  { id: 'd1-0900', day: 'Day 1', time: '9:00 – 9:30', title: 'Opening Ceremony', speaker: 'Sandra Barasa, Conference Chair', location: 'Manu Chandaria Auditorium', type: 'keynote', description: 'Conference kickoff and overview.' },
  { id: 'd1-0930', day: 'Day 1', time: '9:30 – 11:00', title: 'Sustainable Ideation & Design Thinking', location: 'Manu Chandaria Auditorium', type: 'keynote', description: 'Principles and frameworks for eco-centric innovation.' },
  { id: 'd1-1100', day: 'Day 1', time: '11:00 – 11:30', title: 'Project Presentation — Session 1', location: 'Manu Chandaria Auditorium', type: 'exhibition', description: 'Selected teams present early-stage concepts.' },
  { id: 'd1-1130', day: 'Day 1', time: '11:30 – 13:00', title: 'Green Manufacturing Processes', location: 'Manu Chandaria Auditorium', type: 'panel', description: 'Panel discussion on clean production at scale.' },
  { id: 'd1-1300', day: 'Day 1', time: '13:00 – 14:00', title: 'Lunch Break', location: 'Guests Lounge', type: 'networking', description: 'Buffet lunch and informal networking.' },
  { id: 'd1-1400', day: 'Day 1', time: '14:00 – 15:00', title: 'Supply Chain Sustainability & Smart Distribution', location: 'Manu Chandaria Auditorium', type: 'keynote', description: 'Tactics for greener logistics and real-time coordination.' },
  { id: 'd1-1500', day: 'Day 1', time: '15:00 – 15:30', title: 'Project Exhibitions — Session 2', location: 'Manu Chandaria Auditorium', type: 'exhibition', description: 'Hands-on demos and product showcases.' },
  { id: 'd1-1530', day: 'Day 1', time: '15:30 – 16:15', title: 'Tech for Good Workshop', location: 'Manu Chandaria Auditorium', type: 'workshop', description: 'Interactive, facilitator-led session.' },
  { id: 'd1-1615', day: 'Day 1', time: '16:15 – 17:00', title: 'Networking', location: 'Rooftop Balcony', type: 'networking', description: 'Meet-and-greet with speakers, partners, and attendees.' },

  // Day 2 — November 14, 2025
  { id: 'd2-0830', day: 'Day 2', time: '8:30 – 9:00', title: 'Morning Registration', location: 'Guests Lounge', type: 'networking', description: 'Check-in for Day 2 attendees.' },
  { id: 'd2-0900', day: 'Day 2', time: '9:00 – 10:30', title: 'Ethics in Green Technology', location: 'Manu Chandaria Auditorium', type: 'keynote', description: 'Responsible innovation, data governance, and equity.' },
  { id: 'd2-1030', day: 'Day 2', time: '10:30 – 11:00', title: 'Project Presentation — Session 3', location: 'Manu Chandaria Auditorium', type: 'exhibition', description: 'Final round of project presentations.' },
  { id: 'd2-1130', day: 'Day 2', time: '11:30 – 13:00', title: 'Circular Economy & Waste Management', location: 'Manu Chandaria Auditorium', type: 'keynote', description: 'Best practices in reuse, recovery, and reverse logistics.' },
  { id: 'd2-1300', day: 'Day 2', time: '13:00 – 14:00', title: 'Lunch Break', location: 'Guests Lounge', type: 'networking', description: 'Relax and connect before the afternoon program.' },
  { id: 'd2-1400', day: 'Day 2', time: '14:00 – 14:40', title: 'Tech for Good Workshop', location: 'Manu Chandaria Auditorium', type: 'workshop', description: 'Practical tools for impactful, sustainable builds.' },
  { id: 'd2-1440', day: 'Day 2', time: '14:40 – 15:30', title: 'Project Awards Ceremony', location: 'Manu Chandaria Auditorium', type: 'awards', description: 'Recognition for excellence and impact.' },
  { id: 'd2-1530', day: 'Day 2', time: '15:30 – 16:00', title: 'Closing Ceremony', speaker: 'Cherryl Osewe', location: 'Manu Chandaria Auditorium', type: 'keynote', description: 'Final remarks and conference wrap-up.' },
];

export default function Schedule() {
  const [activeDay, setActiveDay] = useState<'Day 1' | 'Day 2'>('Day 1');

  const filteredSchedule = schedule.filter((item) => item.day === activeDay);

  return (
    <div className="pt-16">
      <PageHero
        title="Conference Schedule"
        subtitle="Two days packed with insights, innovation, and inspiration"
        bgImage="https://i.postimg.cc/15HyjWPN/DSC-4687.jpg"
        bgImageMobile="https://i.postimg.cc/15HyjWPN/DSC-4687.jpg"
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
                <span className="block text-xs mt-1">Nov 13, 2025</span>
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
                <span className="block text-xs mt-1">Nov 14, 2025</span>
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

                        {item.description && (
                          <p className="text-muted-foreground mb-3">{item.description}</p>
                        )}

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

          {/* --- Visualization (shows one, depending on active day) --- */}
          <div className="max-w-5xl mx-auto mt-10">
            <AnimatePresence mode="wait">
              {activeDay === 'Day 1' ? (
                <motion.div
                  key="viz-day1"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden rounded-2xl shadow-card"
                >
                  <img
                    src="https://i.postimg.cc/wBkP6rfB/DSC-4789.jpg"
                    alt="Day 1 visual"
                    className="w-full h-64 md:h-72 object-cover"
                    loading="lazy"
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="viz-day2"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden rounded-2xl shadow-card"
                >
                  <img
                    src="https://i.postimg.cc/T2QDrJSr/DSC-4889.jpg"
                    alt="Day 2 visual"
                    className="w-full h-64 md:h-72 object-cover"
                    loading="lazy"
                  />
                </motion.div>
              )}
            </AnimatePresence>
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
              <CTAButton
                href="https://docs.google.com/forms/d/e/1FAIpQLSey4R9Nqru7kAxdWvRaWRuE42I-b4i4LxmKq4hHVgWGlAQdcw/viewform?usp=header"
                external
                className="relative z-20 pointer-events-auto"
              >
                Register Now
              </CTAButton>

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
