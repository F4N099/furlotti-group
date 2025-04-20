import React from 'react';
import { ArrowRight, Factory, Recycle, Wine, Leaf } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const LogoTicker = () => {
  const logos = [
    { id: 1, name: "PureWaste", icon: <Wine className="w-6 h-6" /> },
    { id: 2, name: "EcoTech", icon: <Factory className="w-6 h-6" /> },
    { id: 3, name: "GreenLife", icon: <Leaf className="w-6 h-6" /> },
    { id: 4, name: "RecycleNow", icon: <Recycle className="w-6 h-6" /> },
  ];

  return (
    <div className="bg-[#7CB342] py-6 overflow-hidden whitespace-nowrap">
      <div className="flex">
        <motion.div
          animate={{
            x: [0, -2000]
          }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop"
          }}
          className="flex flex-nowrap gap-24"
        >
          {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
            <div
              key={`${logo.id}-${index}`}
              className="flex items-center gap-3 text-white/90"
            >
              {logo.icon}
              <span className="text-lg font-medium">{logo.name}</span>
            </div>
          ))}
        </motion.div>
        <motion.div
          animate={{
            x: [0, -2000]
          }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop"
          }}
          className="flex flex-nowrap gap-24"
        >
          {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
            <div
              key={`${logo.id}-${index}-duplicate`}
              className="flex items-center gap-3 text-white/90"
            >
              {logo.icon}
              <span className="text-lg font-medium">{logo.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const RecyclingCards = () => {
  const cards = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?w=800&q=80",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=800&q=80",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1526951521990-5d9217cda72e?w=800&q=80",
    }
  ];

  return (
    <motion.div 
      className="relative h-[400px] mt-24 mb-16 mx-auto max-w-[1200px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          className="absolute left-1/2 top-0 w-[260px] bg-white rounded-[32px] overflow-hidden shadow-lg"
          style={{ 
            originX: 0.5,
            originY: 0.5,
            zIndex: cards.length - index
          }}
          variants={{
            hidden: { 
              rotateZ: 0,
              x: "-50%",
              opacity: 0,
              scale: 0.8
            },
            visible: {
              rotateZ: (index - 1.5) * 8,
              x: `calc(-50% + ${(index - 1.5) * 300}px)`,
              y: Math.abs(index - 1.5) * 30,
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }
            }
          }}
        >
          <div className="aspect-[3/4] bg-gray-100">
            <img 
              src={card.image} 
              alt="Recycling" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

const Hero = () => {
  return (
    <>
      <section 
        className="relative bg-[#1B4B43] min-h-[90vh] flex items-center justify-center text-center"
        data-section="hero"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"></div>
        
        <div className="container relative z-20 max-w-6xl py-40">
          <motion.div 
            className="flex justify-center gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="icon-box">
              <Wine size={20} className="text-white" />
            </div>
            <div className="icon-box">
              <Leaf size={20} className="text-white" />
            </div>
            <div className="icon-box">
              <Recycle size={20} className="text-white" />
            </div>
            <div className="icon-box">
              <Factory size={20} className="text-white" />
            </div>
          </motion.div>

          <motion.h1 
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.span 
              className="text-white block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              FACCIAMO LA
            </motion.span>
            <motion.span 
              className="text-[#7CB342] block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              DIFFERENZA
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-white/90 mb-6 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Da oltre cinquant'anni, siamo al vostro fianco, impegnati a costruire un 
            futuro sostenibile per la nostra e le future generazioni.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link 
              href="/contact" 
              className="btn btn-primary"
            >
              Prenota
              <ArrowRight className="ml-3 h-6 w-6" />
            </Link>
            
            <Link 
              href="/contatti" 
              className="px-6 py-3 rounded-lg border-2 border-white text-white hover:bg-white hover:text-[#004D40] transition-colors font-semibold"
            >
              Contattaci
            </Link>
          </motion.div>

          <RecyclingCards />
        </div>
      </section>
      <LogoTicker />
    </>
  );
};

export default Hero; 