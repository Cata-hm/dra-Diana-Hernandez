// src/components/Hero.tsx
// This component renders the hero section of the Metodika application, including a title, subtitle, and call-to-action button
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen flex flex-col justify-center items-center text-center px-6 text-white bg-cover bg-center"
      style={{ backgroundImage: `url('/images/profile2.jpg')` }}
    >
      {/* Overlay oscuro para que el texto se vea mejor */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Contenido con posicion relativa para estar por encima del overlay */}
      <div className="relative z-10 max-w-4xl">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight drop-shadow-md"
          variants={variants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {t('hero.title')}
        </motion.h2>
        <motion.p
          className="text-lg mb-10 max-w-3xl mx-auto drop-shadow-sm"
          variants={variants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          {t('hero.subtitle')}
        </motion.p>
        <motion.a
          href="#contact"
          className="button-metal inline-block max-w-xs text-center"
          variants={variants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
        >
          <span
            className="bg-gradient"
            style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
          >
            {t('hero.button')}
          </span>
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
