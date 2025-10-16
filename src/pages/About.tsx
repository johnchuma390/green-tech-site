import { motion } from 'framer-motion';
import { Leaf, Target, Users, Lightbulb, Globe, Award } from 'lucide-react';
import PageHero from '../components/PageHero';
import CTAButton from '../components/CTAButton';

export default function About() {
  const sdgs = [
    { number: 6, name: 'Clean Water and Sanitation' },
    { number: 7, name: 'Affordable and Clean Energy' },
    { number: 8, name: 'Decent Work and Economic Growth' },
    { number: 9, name: 'Industry, Innovation and Infrastructure' },
    { number: 13, name: 'Climate Action' },
    { number: 17, name: 'Partnerships for the Goals' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To foster innovation in sustainable technology by bringing together students, researchers, industry leaders, and policymakers to explore green solutions across the entire product lifecycle.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation Focus',
      description: 'We emphasize practical, scalable solutions that address real-world sustainability challenges in ideation, manufacturing, distribution, ethics, and circular economy.',
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Building a network of passionate individuals committed to creating a sustainable future through technology, collaboration, and knowledge sharing.',
    },
  ];

  return (
    <div className="pt-16">
      <PageHero
        title="About the Conference"
        subtitle="Sustainable by Design – Reshaping Product Life Cycles with Tech"
        bgImage="https://i.postimg.cc/G2w7yyJz/DSC-4843.jpg"
        bgImageMobile="https://i.postimg.cc/G2w7yyJz/DSC-4843.jpg"
        overlayClasses="bg-gradient-to-b from-green-900/75 via-emerald-900/65 to-green-900/85 mix-blend-multiply"
      />

      {/* About ESA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-cta p-3 rounded-xl">
                  <Leaf className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold">
                  About ESA
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  The Engineering Students' Association (ESA) is a professional body within the Faculty of Engineering, University of Nairobi. We unite students from five departments: Civil & Construction Engineering, Electrical & Electronic Engineering, Geospatial & Space Engineering, Mechanical & Manufacturing Engineering, and Environmental & Biosystems Engineering.
                </p>
                <p className="font-semibold text-foreground">Core Objectives:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Enhance academic and professional growth among members</li>
                  <li>Bridge the gap between industry and students</li>
                  <li>Promote collaboration with professional organizations</li>
                  <li>Foster holistic growth through extracurricular and community programs</li>
                </ul>
                <p>
                  ESA organizes various flagship events including seminars & talks, industrial visits, community outreach, the Green Tech Conference, Women in Engineering Students Summit (WIESS), International Engineering Students Conference (IESC), ESA Annual Dinner, tournaments, exchange programs, and The Student Engineer Magazine.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://i.postimg.cc/029nvZjt/DSC-4908.jpg"
                alt="Engineering students collaborating"
                className="rounded-2xl shadow-elegant w-full"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The principles that guide our conference and community
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-2xl p-8 hover-lift text-center"
              >
                <div className="bg-gradient-cta w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Theme Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-6">
              <Globe className="h-8 w-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold">
                Conference Theme
              </h2>
            </div>

            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg">
                <strong className="text-foreground">"Sustainable by Design – Reshaping Product Life Cycles with Tech"</strong> is more than just a theme—it's a call to action. The Green Tech Conference is a pioneering platform where innovation meets sustainability, exploring how technology can accelerate green ambitions while addressing environmental risks from rapid technological advancement.
              </p>
              
              <p>
                This event adopts a product lifecycle approach to sustainability—from ideation to waste—covering data-driven design for eco-friendly materials, cleaner manufacturing using renewable energy, sustainable distribution through low-emission logistics, ethical technology development, and circular economies where products are built to last.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-secondary rounded-xl p-6">
                  <h3 className="font-subheading font-semibold text-foreground mb-3">Day 1: Ideation, Manufacturing & Distribution</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Data-driven design and AI blueprint optimization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Renewable energy integration in manufacturing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Clean transport and IoT logistics</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-secondary rounded-xl p-6">
                  <h3 className="font-subheading font-semibold text-foreground mb-3">Day 2: Ethics, Policy & Waste Management</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Data misuse and energy consumption challenges</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Mineral extraction and environmental impact</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Circular economy workshops and awards</span>
                    </li>
                  </ul>
                </div>
              </div>
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
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Aligned with UN Sustainable Development Goals
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-10">
              Our conference directly supports these global sustainability targets
            </p>

            <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
              {sdgs.map((sdg, index) => (
                <motion.div
                  key={sdg.number}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="glass-card rounded-xl p-6 hover-lift text-center min-w-[150px]"
                >
                  <div className="text-4xl font-heading font-bold gradient-text mb-2">
                    {sdg.number}
                  </div>
                  <p className="text-sm text-muted-foreground">{sdg.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-hero-pattern">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Be Part of the Change
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join us in exploring sustainable solutions for tomorrow's challenges
            </p>
            <CTAButton
              href="https://docs.google.com/forms/d/e/1FAIpQLSey4R9Nqru7kAxdWvRaWRuE42I-b4i4LxmKq4hHVgWGlAQdcw/viewform?usp=header"
              external
              className="bg-white text-forest-deep hover:bg-white/90 relative z-20 pointer-events-auto"
            >
              Register Today
            </CTAButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
