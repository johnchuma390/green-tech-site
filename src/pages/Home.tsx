import { motion, useScroll } from 'framer-motion';
import {
  Calendar,
  MapPin,
  Users,
  Award,
  Lightbulb,
  Factory,
  Recycle,
  Scale,
  ArrowRight,
  Sparkles,
  Zap,
  Globe,
  ChevronRight,
  PlayCircle,
} from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const { scrollY } = useScroll();

  useEffect(() => {
    const conferenceDate = new Date('2025-11-13T08:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = conferenceDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  // detect phone to speed up the marquee + tighten strip
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 640px)');
    const set = () => setIsMobile(mq.matches);
    set();
    if (mq.addEventListener) mq.addEventListener('change', set);
    else mq.addListener(set);
    return () =>
      mq.removeEventListener ? mq.removeEventListener('change', set) : mq.removeListener(set);
  }, []);

  // >>> UPDATED FOCUS AREAS (5 items) + images from your pool <<<
  const highlights = [
    {
      icon: Lightbulb,
      title: 'Ideation',
      description:
        'Making Data Driven Decisions: Eco-friendly material selection, pre-production environmental impact prediction, and development of efficient product life-cycle blueprints.',
      color: 'from-amber-500 via-orange-500 to-rose-500',
      image: 'https://i.postimg.cc/g0MDtbtQ/DSC-4680.jpg',
    },
    {
      icon: Factory,
      title: 'Manufacturing',
      description:
        'Cleaner and Leaner Production: Adopting renewable energy alternatives, deeper integration of renewables into main grids, and proper water and raw-material management.',
      color: 'from-blue-500 via-cyan-500 to-teal-400',
      image: 'https://i.postimg.cc/T2QDrJSr/DSC-4889.jpg',
    },
    {
      icon: Globe,
      title: 'Distribution',
      description:
        'Systemized and Greener Distribution: Use of EVs, real-time tracking & coordination, continuous updates on batch dispersal, public demand & inventory levels, and route optimization.',
      color: 'from-sky-500 via-teal-500 to-emerald-400',
      image: 'https://i.postimg.cc/rpwffVc6/image.png',
    },
    {
      icon: Scale,
      title: 'Ethics and Policy',
      description:
        'Responsible advancement: Curbing massive energy consumption in data centres, avoiding data misuse while leveraging green solutions, and addressing unchecked mining practices for EV battery materials.',
      color: 'from-fuchsia-500 via-purple-500 to-pink-500',
      image: 'https://i.postimg.cc/kMxBcFpk/DSC-4716.jpg',
    },
    {
      icon: Recycle,
      title: 'Public Consumption & Waste',
      description:
        'Designing lasting products: Tackling planned obsolescence and product hoarding, integrating used products back into the life cycle, and advocating for decomposable materials.',
      color: 'from-emerald-500 via-teal-500 to-green-400',
      image: 'https://i.postimg.cc/cLqmgcPJ/image.png',
    },
  ];

  const partnerLogos = [
    'https://i.postimg.cc/y8xpcnmY/image.png',
    'https://i.postimg.cc/pTsnfQYx/image.png',
    'https://i.postimg.cc/ht0x4qzq/image.png',
    'https://i.postimg.cc/jj5WsnYW/image.png',
    'https://i.postimg.cc/j2Qq6RrR/image.png',
    'https://i.postimg.cc/52GJCXFz/image.png',
    'https://i.postimg.cc/ZR4MBmjx/image.png',
    'https://i.postimg.cc/L5qBh0dW/image.png',
    'https://i.postimg.cc/dDPd3smb/image.png',
    'https://i.postimg.cc/5t6wsRyW/image.png',
    'https://i.postimg.cc/wTrxhfCy/image.png',
    'https://i.postimg.cc/BbdyvKzM/image.png',
    'https://i.postimg.cc/447XXb7X/image.png',
    'https://i.postimg.cc/2ypMkWM6/image.png',
    'https://i.postimg.cc/gkmtgGWd/image.png',
  ];

  // >>> UPDATED HIGHLIGHTS STRIP IMAGES (6 picks from your pool) <<<
  const galleryImages = [
    'https://i.postimg.cc/15HyjWPN/DSC-4687.jpg',
    'https://i.postimg.cc/B6shkCJQ/DSC-4690.jpg',
    'https://i.postimg.cc/wBkP6rfB/DSC-4789.jpg',
    'https://i.postimg.cc/T2QDrJSr/DSC-4889.jpg',
    'https://i.postimg.cc/kMxBcFpk/DSC-4716.jpg',
    'https://i.postimg.cc/yYysJLbR/IMG-20250220-WA0092.jpg',
  ];

  // For “pop” animation on each tick: use changing keys so numbers re-animate
  const tickerKeys = useMemo(
    () => ({
      days: `d-${timeLeft.days}`,
      hours: `h-${timeLeft.hours}`,
      minutes: `m-${timeLeft.minutes}`,
      seconds: `s-${timeLeft.seconds}`,
    }),
    [timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds]
  );

  return (
    <div className="bg-white overflow-hidden">
      {/* === HERO === */}
      <section
        className="bg-hero-pattern min-h-[90vh] flex items-center justify-center text-center relative overflow-hidden pt-16"
        style={{
          backgroundImage:
            "url('https://i.postimg.cc/FsPp7t3D/IMG-20250220-WA0081.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Green overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-green-950/70 via-emerald-900/60 to-green-950/80" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white mb-6 leading-tight"
            >
              Engineering for a{' '}
              <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-mint-surface to-cyan-tech">
                Sustainable Future
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-6 text-white/90 mb-8 justify-center"
            >
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span className="font-medium">November 13-14, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span className="font-medium">University of Nairobi</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span className="font-medium">500+ Attendees</span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-white/90 mb-10 max-w-2xl leading-relaxed mx-auto"
            >
              Sustainable by Design – Reshaping Product Life Cycles with Tech.
              Join us for two days of innovation, collaboration, and sustainable solutions.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSey4R9Nqru7kAxdWvRaWRuE42I-b4i4LxmKq4hHVgWGlAQdcw/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-amber-400 text-forest-deep hover:bg-amber-300 shadow-xl shadow-amber-500/30 ring-2 ring-white/60 hover:scale-[1.02] transition relative z-20 pointer-events-auto"
              >
                Register as Participant
              </a>

              <a
                href="https://forms.gle/NuVUnCspAAiuWC4V6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-cyan-500 text-white hover:bg-cyan-400 shadow-xl shadow-cyan-500/30 ring-2 ring-white/50 hover:scale-[1.02] transition relative z-20 pointer-events-auto"
              >
                Submit Your Project
              </a>

              <Link
                to="/register"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-emerald-500 text-white hover:bg-emerald-400 shadow-xl shadow-emerald-500/30 ring-2 ring-white/50 hover:scale-[1.02] transition relative z-20 pointer-events-auto"
              >
                Become a Partner
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-tech/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-green-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />
        </div>
      </section>

      {/* === COUNTDOWN (SUPER FLASHY + ANIMATED) === */}
      <section className="relative py-14 bg-gradient-to-b from-white to-emerald-50 overflow-hidden">
        {/* animated rainbow bar */}
        <div className="pointer-events-none absolute -top-1 left-0 right-0 h-[3px]">
          <motion.div
            className="h-full w-[200%] bg-[linear-gradient(90deg,#10b981,#06b6d4,#22d3ee,#a78bfa,#f59e0b,#ef4444,#10b981)]"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
          />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 mb-5"
            >
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span className="text-emerald-700 font-semibold">Event Countdown</span>
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-10">
              The future starts in…
            </h2>

            {/* BIG animated tiles */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
              {([
                ['days', timeLeft.days],
                ['hours', timeLeft.hours],
                ['minutes', timeLeft.minutes],
                ['seconds', timeLeft.seconds],
              ] as [string, number][]).map(([unit, value], idx) => (
                <motion.div
                  key={unit}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="relative"
                >
                  {/* glow behind */}
                  <motion.div
                    animate={{ opacity: [0.25, 0.5, 0.25], scale: [1, 1.06, 1] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-cyan-400 to-fuchsia-400 rounded-3xl blur-xl"
                  />
                  {/* tile */}
                  <div className="relative bg-white/80 backdrop-blur-md border border-emerald-200/50 rounded-3xl px-4 py-6 md:px-6 md:py-8 shadow-xl overflow-hidden">
                    {/* moving stripe highlight */}
                    <motion.div
                      className="absolute -top-1 left-0 h-[2px] w-full"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: 'linear', delay: idx * 0.2 }}
                      style={{
                        background:
                          'linear-gradient(90deg, transparent, rgba(16,185,129,0.8), transparent)',
                      }}
                    />
                    {/* number with POP each tick */}
                    <motion.div
                      key={tickerKeys[unit as keyof typeof tickerKeys]}
                      initial={{ scale: 0.8, rotateX: 25, opacity: 0 }}
                      animate={{ scale: 1, rotateX: 0, opacity: 1 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                      className="text-5xl md:text-6xl font-black leading-none mb-2"
                      style={{
                        background:
                          'linear-gradient(135deg, #10b981 0%, #06b6d4 30%, #22d3ee 60%, #a78bfa 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      {value.toString().padStart(2, '0')}
                    </motion.div>
                    <div className="uppercase tracking-widest text-[10px] md:text-xs font-extrabold text-gray-600">
                      {unit}
                    </div>

                    {/* confetti sparkle loop on seconds */}
                    {unit === 'seconds' && (
                      <motion.div
                        key={`spark-${timeLeft.seconds}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 0.9, ease: 'easeInOut' }}
                        className="pointer-events-none absolute inset-0"
                      >
                        <Sparkles className="absolute top-3 right-3 w-5 h-5 text-amber-400" />
                        <Sparkles className="absolute bottom-3 left-3 w-5 h-5 text-cyan-400" />
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* soft animated background shapes */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -bottom-20 -left-10 w-72 h-72 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(closest-side, rgba(16,185,129,.3), transparent)' }}
          animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -top-16 -right-10 w-80 h-80 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(closest-side, rgba(6,182,212,.3), transparent)' }}
          animate={{ y: [0, 12, 0], x: [0, -8, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
      </section>

      {/* === FOCUS AREAS (alternating; updated content only) === */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-6 py-2 mb-4">
              <Zap className="w-4 h-4 text-emerald-500" />
              <span className="text-emerald-600 font-bold text-sm uppercase tracking-wider">Our Focus Areas</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Full Lifecycle <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">Sustainability</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From ideation to disposal - explore every stage of sustainable development through tech.
            </p>
          </motion.div>

          <div className="space-y-8 max-w-6xl mx-auto">
            {highlights.map((item, index) => {
              const ImageOnRight = index % 2 === 1;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="grid md:grid-cols-5 gap-6 items-center"
                >
                  {/* Image */}
                  <div className={`relative md:col-span-2 ${ImageOnRight ? 'md:order-2' : 'md:order-1'}`}>
                    <div className={`absolute -inset-2 rounded-3xl bg-gradient-to-br ${item.color} blur-xl opacity-25`} />
                    <div className="relative overflow-hidden rounded-3xl shadow-lg">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-64 md:h-72 object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`relative p-6 md:p-8 md:col-span-3 ${ImageOnRight ? 'md:order-1' : 'md:order-2'}`}>
                    <div className={`absolute -inset-2 rounded-3xl bg-gradient-to-br ${item.color} blur-xl opacity-15`} />
                    <div className="relative bg-white border border-gray-200 rounded-3xl p-6 shadow-lg">
                      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${item.color} mb-4 shadow-md`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-black text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === PARTNERS (marquee — FASTER) === */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-6 py-2 mb-4">
              <Globe className="w-4 h-4 text-cyan-500" />
              <span className="text-cyan-600 font-bold text-sm uppercase tracking-wider">
                Trusted By Leaders
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-3">
              Our{' '}
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                Partners
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              Backed by leading organizations championing sustainable technology
            </p>
          </motion.div>

          <div className="relative overflow-hidden py-3 sm:py-4 md:py-6">
            <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 md:w-24 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 md:w-24 bg-gradient-to-l from-white to-transparent z-10" />
            
            <motion.div
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                // FASTER speeds
                duration: isMobile ? 7 : 18,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="flex items-center gap-4 sm:gap-6 md:gap-8"
              style={{ willChange: 'transform' }}
            >
              {[...partnerLogos, ...partnerLogos].map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 bg-white rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 border border-gray-200 shadow-sm sm:shadow w-28 h-16 sm:w-36 sm:h-20 md:w-40 md:h-24 lg:h-28 flex items-center justify-center"
                >
                  <img
                    src={logo}
                    alt={`Partner ${index + 1}`}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* === HIGHLIGHTS STRIP (links to gallery | updated images) === */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl md:text-3xl font-black text-gray-900">Highlights</h3>
            <a 
              href="/gallery" 
              className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold transition-colors"
            >
              See all photos
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {galleryImages.map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer"
              >
                <img 
                  src={src} 
                  alt={`Highlight ${i + 1}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-6">
            <motion.a
              href="/gallery"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all"
            >
              View Full Gallery
              <ArrowRight className="h-5 w-5" />
            </motion.a>
          </div>
        </div>
      </section>

      {/* === FINAL CTA === */}
      <section className="py-20 relative overflow-hidden" style={{
        background: 'radial-gradient(1200px 600px at 50% 10%, rgba(34,197,94,.25), transparent 60%), linear-gradient(180deg, rgba(5,150,105,.85), rgba(6,95,70,.90))'
      }}>
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg width%3D%2240%22 height%3D%2240%22 viewBox%3D%220 0 40 40%22 xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath d%3D%22M0 39.5 H40 M39.5 0 V40%22 stroke%3D%22white%22 stroke-width%3D%221%22/%3E%3C/svg%3E')"
        }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block mb-6"
            >
              <Award className="w-16 h-16 text-emerald-300" />
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight">
              Ready to Shape the <span className="text-cyan-300">Future?</span>
            </h2>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Join 500+ innovators, engineers, and sustainability experts at Africa&apos;s premier green technology conference
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="/register"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-white rounded-xl font-black text-emerald-700 text-lg shadow-2xl"
              >
                <span className="flex items-center gap-2">
                  Register Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </span>
              </motion.a>

              <motion.a
                href="/schedule"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 backdrop-blur-sm border-2 border-white/30 rounded-xl font-black text-white text-lg hover:bg-white/10 transition-all"
              >
                View Schedule
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-20 left-20 w-72 h-72 bg-emerald-400/30 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.2, 0.4] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-400/30 rounded-full blur-3xl"
          />
        </div>
      </section>
    </div>
  );
}
