import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import PageHero from '../components/PageHero';

type GItem = { id: string; url: string };

// ✅ All images (original + new), interleaved for variety
const galleryImages: GItem[] = [
  // —— a few of the new shots up front ——
  { id: '1', url: 'https://i.postimg.cc/15HyjWPN/DSC-4687.jpg' },
  { id: '2', url: 'https://i.postimg.cc/X7BL00GC/DSC-28401303.jpg' }, // original
  { id: '3', url: 'https://i.postimg.cc/B6shkCJQ/DSC-4690.jpg' },
  { id: '4', url: 'https://i.postimg.cc/g0MDtbtQ/DSC-4680.jpg' },
  { id: '5', url: 'https://i.postimg.cc/CKLyfYfX/image.png' },
  { id: '6', url: 'https://i.postimg.cc/wBkP6rfB/DSC-4789.jpg' },
  { id: '7', url: 'https://i.postimg.cc/T2QDrJSr/DSC-4889.jpg' },
  { id: '8', url: 'https://i.postimg.cc/GpZpn822/DSC-23841168.jpg' }, // original
  { id: '9', url: 'https://i.postimg.cc/K4SSKMnt/IMG-20250220-WA0082.jpg' },
  { id: '10', url: 'https://i.postimg.cc/yYysJLbR/IMG-20250220-WA0092.jpg' },
  { id: '11', url: 'https://i.postimg.cc/CLL6NJKz/DSC-4670.jpg' },
  { id: '12', url: 'https://i.postimg.cc/G2w7yyJz/DSC-4843.jpg' }, // original
  { id: '13', url: 'https://i.postimg.cc/gJzvWSQs/DSC-4685.jpg' },
  { id: '14', url: 'https://i.postimg.cc/fbTc4q6y/DSC-4692-2.jpg' },
  { id: '15', url: 'https://i.postimg.cc/kMxBcFpk/DSC-4716.jpg' },
  { id: '16', url: 'https://i.postimg.cc/zvf6Vkbf/DSC-4729.jpg' },
  { id: '17', url: 'https://i.postimg.cc/L6821tKg/image.png' },
  { id: '18', url: 'https://i.postimg.cc/KYbDY80x/image.png' }, // original
  { id: '19', url: 'https://i.postimg.cc/sXx4WHcK/image.png' },
  { id: '20', url: 'https://i.postimg.cc/ncG26mCg/image.png' },
  { id: '21', url: 'https://i.postimg.cc/d0rLx20t/image.png' },
  { id: '22', url: 'https://i.postimg.cc/XYMWDTBD/image.png' },
  { id: '23', url: 'https://i.postimg.cc/bNwLfJb4/image.png' },
  { id: '24', url: 'https://i.postimg.cc/ncNmSckb/image.png' },
  { id: '25', url: 'https://i.postimg.cc/MHCG5X8F/image.png' },
  { id: '26', url: 'https://i.postimg.cc/DwFG3ptW/image.png' },
  { id: '27', url: 'https://i.postimg.cc/zvrzH6wj/image.png' },
  { id: '28', url: 'https://i.postimg.cc/KjvWW5mY/image.png' },
  { id: '29', url: 'https://i.postimg.cc/cLqmgcPJ/image.png' },
  { id: '30', url: 'https://i.postimg.cc/sD57Stk9/image.png' },
  { id: '31', url: 'https://i.postimg.cc/L5DRF4qD/image.png' },
  { id: '32', url: 'https://i.postimg.cc/158YQ5Nh/image.png' },
  { id: '33', url: 'https://i.postimg.cc/rpwffVc6/image.png' },
  { id: '34', url: 'https://i.postimg.cc/Wb4tpx2D/image.png' },
  { id: '35', url: 'https://i.postimg.cc/D0SVHQK6/image.png' },
  { id: '36', url: 'https://i.postimg.cc/2yWY3dXh/image.png' },
  { id: '37', url: 'https://i.postimg.cc/FsPp7t3D/IMG-20250220-WA0081.jpg' },

  // —— interleave the rest of your originals ——
  { id: '38', url: 'https://i.postimg.cc/HLW32LX4/image.png' }, // original
  { id: '39', url: 'https://i.postimg.cc/FKnbVV9h/image.png' },   // original
  { id: '40', url: 'https://i.postimg.cc/rFprq4jq/image.png' },   // original
  { id: '41', url: 'https://i.postimg.cc/3J6d7cWx/image.png' },   // original
  { id: '42', url: 'https://i.postimg.cc/NFKBzQ6V/image.png' },   // original
  { id: '43', url: 'https://i.postimg.cc/hPycqzy0/DSC-62731949.jpg' }, // original
  { id: '44', url: 'https://i.postimg.cc/WzzYm3Gp/Tech-Week-150.jpg' }, // original
  { id: '45', url: 'https://i.postimg.cc/wMRcTs5M/Tech-Week-176.jpg' }, // original
  { id: '46', url: 'https://i.postimg.cc/Pxp2NcTD/Tech-Week-270.jpg' }, // original
  { id: '47', url: 'https://i.postimg.cc/BQZp7w29/DSC-23781166.jpg' }, // original
  { id: '48', url: 'https://i.postimg.cc/XYYKphg0/Tech-Week-279.jpg' }, // original
  { id: '49', url: 'https://i.postimg.cc/Hn3cmYRx/Tech-Week-312.jpg' }, // original
  { id: '50', url: 'https://i.postimg.cc/gkTjHTWR/Tech-Week-314.jpg' }, // original
  { id: '51', url: 'https://i.postimg.cc/SKpyZ0t2/Tech-Week-324.jpg' }, // original
  { id: '52', url: 'https://i.postimg.cc/FRHXqhbX/Tech-Week-374.jpg' }, // original
  { id: '53', url: 'https://i.postimg.cc/c1KL4c32/Tech-Week-397.jpg' }, // original
  { id: '54', url: 'https://i.postimg.cc/fbrQ668t/Tech-Week-404.jpg' }, // original
  { id: '55', url: 'https://i.postimg.cc/D03HhFLq/Tech-Week-518.jpg' }, // original
  { id: '56', url: 'https://i.postimg.cc/SxRZwj36/Tech-Week-543.jpg' }, // original
  { id: '57', url: 'https://i.postimg.cc/hj1bJqNq/Tech-Week-545.jpg' }, // original
  { id: '58', url: 'https://i.postimg.cc/6pC76fDD/Tech-Week-553.jpg' }, // original
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // ——— Touch swipe support in lightbox ———
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const minSwipeDistance = 40;

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const goToPrevious = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(
      selectedIndex === 0 ? galleryImages.length - 1 : selectedIndex - 1,
    );
  };
  const goToNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(
      selectedIndex === galleryImages.length - 1 ? 0 : selectedIndex + 1,
    );
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchEndX.current = null;
    touchStartX.current = e.targetTouches[0].clientX;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };
  const onTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const distance = touchStartX.current - touchEndX.current;
    if (Math.abs(distance) < minSwipeDistance) return;
    if (distance > 0) goToNext(); // swipe left → next
    else goToPrevious(); // swipe right → prev
  };

  return (
    <div className="pt-16">
      <PageHero
        title="Gallery"
        subtitle="Visual stories from our green tech community"
        bgImage="https://i.postimg.cc/zvrzH6wj/image.png"
        bgImageMobile="https://i.postimg.cc/zvrzH6wj/image.png"
        overlayClasses="bg-gradient-to-b from-green-900/75 via-emerald-900/65 to-green-900/85 mix-blend-multiply"
        className="min-h-[60vh]"
        bgPosition="center"
        breadcrumbs={[{ name: 'Gallery', href: '/gallery' }]}
      />

      {/* Masonry Columns (no overlap) */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4 [column-fill:_balance]">
            {galleryImages.map((image, index) => (
              <motion.button
                key={image.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                onClick={() => openLightbox(index)}
                className="mb-3 md:mb-4 w-full overflow-hidden rounded-xl group focus-ring break-inside-avoid"
                aria-label="Open image"
              >
                <img
                  src={image.url}
                  alt=""
                  loading="lazy"
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-white/80 transition-colors p-2 rounded-lg bg-white/10 backdrop-blur-sm focus-ring"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-white/80 transition-colors p-3 rounded-lg bg-white/10 backdrop-blur-sm focus-ring"
              aria-label="Previous"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>

            {/* Next */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-white/80 transition-colors p-3 rounded-lg bg-white/10 backdrop-blur-sm focus-ring"
              aria-label="Next"
            >
              <ChevronRight className="h-8 w-8" />
            </button>

            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="max-w-6xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[selectedIndex].url}
                alt=""
                className="w-full h-auto rounded-lg shadow-elegant"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
