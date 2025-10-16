import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(true);
  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when scrolled more than 100px
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="fixed bottom-6 right-6 z-40"
        >
          {isExpanded ? (
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="glass-card rounded-2xl p-4 shadow-glow max-w-sm"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="bg-gradient-cta p-2 rounded-lg">
                    <Calendar className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-sm">Register Now</h3>
                    <p className="text-xs text-muted-foreground">Secure your spot today!</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors p-1"
                  aria-label="Minimize"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <Button
                asChild
                className="w-full bg-gradient-cta hover:opacity-90 text-white"
                size="sm"
              >
                <Link to="/register">Choose Your Path</Link>
              </Button>
            </motion.div>
          ) : (
            <motion.button
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              onClick={() => setIsExpanded(true)}
              className="bg-gradient-cta hover:opacity-90 text-white rounded-full p-4 shadow-glow hover-lift"
              aria-label="Register Now"
            >
              <Calendar className="h-6 w-6" />
            </motion.button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
