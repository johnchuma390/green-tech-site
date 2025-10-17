import { motion } from 'framer-motion';
import { Leaf, Target, Users, Lightbulb, Globe } from 'lucide-react';
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
      description:
        'To foster innovation in sustainable technology by bringing together students, researchers, industry leaders, and policymakers to explore green solutions across the entire product lifecycle.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation Focus',
      description:
        'We emphasize practical, scalable solutions that address real-world sustainability challenges in ideation, manufacturing, distribution, ethics, and circular economy.',
    },
    {
      icon: Users,
      title: 'Community Driven',
      description:
        'Building a network of passionate individuals committed to creating a sustainable future through technology, collaboration, and knowledge sharing.',
    },
  ];

  return (
    <div className="pt-16">
      {/* HERO (new image from your pool) */}
      <PageHero
        title="About the Conference"
        subtitle="Sustainable by Design – Reshaping Product Life Cycles with Tech"
        bgImage="https://i.postimg.cc/B6shkCJQ/DSC-4690.jpg"
        bgImageMobile="https://i.postimg.cc/B6shkCJQ/DSC-4690.jpg"
        overlayClasses="bg-gradient-to-b from-emerald-900/75 via-green-900/65 to-emerald-900/85 mix-blend-multiply"
      />

      {/* About ESA */}
      <section className="py-20 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 shadow-lg">
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

            {/* Animated visual column with layered color and float */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* soft orbs */}
              <motion.div
                aria-hidden
                animate={{ scale: [1, 1.1, 1], opacity: [0.25, 0.4, 0.25] }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute -top-8 -left-8 w-40 h-40 rounded-full bg-emerald-400/30 blur-2xl"
              />
              <motion.div
                aria-hidden
                animate={{ scale: [1.1, 1, 1.1], opacity: [0.4, 0.25, 0.4] }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute -bottom-8 -right-8 w-44 h-44 rounded-full bg-cyan-400/30 blur-2xl"
              />

              <motion.div
                whileHover={{ scale: 1.02, rotate: 0.2 }}
                className="relative overflow-hidden rounded-2xl shadow-elegant border border-gray-200 bg-white"
              >
                <img
                  src="https://i.postimg.cc/158YQ5Nh/image.png"
                  alt="Engineering students collaborating"
                  className="w-full h-[380px] object-cover"
                  loading="lazy"
                />
                {/* gradient bar */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/40 to-transparent" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values — brighter cards with subtle rise animation */}
      <section className="py-20 bg-secondary relative overflow-hidden">
        {/* background accent grid */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M0 39.5 H40 M39.5 0 V40\" stroke=\"white\" stroke-width=\"1\"/%3E%3C/svg%3E')",
          }}
        />
        <div className="container mx-auto px-4 relative">
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
                initial={{ opacity: 0, y: 30, rotate: -0.2 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="relative rounded-2xl p-8 text-center bg-white border border-gray-200 shadow-lg"
              >
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-400 opacity-20 blur-xl" />
                <div className="relative">
                  <div className="w-16 h-16 rounded-xl grid place-items-center mx-auto mb-6 bg-gradient-to-br from-emerald-500 to-teal-500 shadow-md">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Theme Overview + visualization (third image) */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500 via-sky-500 to-blue-500 shadow-lg">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold">
                  Conference Theme
                </h2>
              </div>

              <div className="space-y-6 text-muted-foreground">
                <p className="text-lg">
                  <strong className="text-foreground">
                    "Sustainable by Design – Reshaping Product Life Cycles with Tech"
                  </strong>{' '}
                  is more than just a theme—it's a call to action. The Green Tech Conference is a
                  pioneering platform where innovation meets sustainability, exploring how technology can
                  accelerate green ambitions while addressing environmental risks from rapid technological advancement.
                </p>

                <p>
                  We take a full lifecycle view—from ideation to waste—covering data-driven design for
                  eco-friendly materials, cleaner manufacturing via renewables, greener distribution,
                  ethics & policy for responsible tech, and circularity so products are built to last.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="rounded-xl p-6 bg-secondary/80 border border-secondary/60">
                    <h3 className="font-subheading font-semibold text-foreground mb-3">
                      Day 1: Ideation, Manufacturing & Distribution
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600 mt-1">•</span>
                        <span>Data-driven design and AI blueprint optimization</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600 mt-1">•</span>
                        <span>Renewable energy integration in manufacturing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600 mt-1">•</span>
                        <span>Clean transport and IoT logistics</span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-xl p-6 bg-secondary/80 border border-secondary/60">
                    <h3 className="font-subheading font-semibold text-foreground mb-3">
                      Day 2: Ethics, Policy & Waste Management
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-600 mt-1">•</span>
                        <span>Data misuse and energy consumption challenges</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-600 mt-1">•</span>
                        <span>Mineral extraction and environmental impact</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-600 mt-1">•</span>
                        <span>Circular economy workshops and awards</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right-side animated visualization image (from pool) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                aria-hidden
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute -top-8 -right-6 w-28 h-28 rounded-3xl bg-gradient-to-br from-emerald-400/30 to-cyan-400/30 blur-xl"
              />
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative overflow-hidden rounded-2xl shadow-elegant border border-gray-200 bg-white"
              >
                <img
                  src="https://i.postimg.cc/gJzvWSQs/DSC-4685.jpg"
                  alt="Conference visualization"
                  className="w-full h-[420px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent" />
              </motion.div>
            </motion.div>
          </div>
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
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -4 }}
                  className="rounded-xl p-6 text-center min-w-[150px] bg-white border border-gray-200 shadow-md"
                >
                  <div className="text-4xl font-heading font-bold bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent mb-2">
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
              Be Part of the Change
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join us in exploring sustainable solutions for tomorrow&apos;s challenges
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

        {/* floating orbs */}
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
