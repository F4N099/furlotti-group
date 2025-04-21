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
      image: "https://videos.openai.com/vg-assets/assets%2Ftask_01jsc1rrx3fk8r49tm4718gcgc%2Fimg_1.webp?st=2025-04-21T10%3A14%3A20Z&se=2025-04-27T11%3A14%3A20Z&sks=b&skt=2025-04-21T10%3A14%3A20Z&ske=2025-04-27T11%3A14%3A20Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=3QNWwUj0nXouel6uAcKyet4dbUQ1YVMDqb0VTZvAWfo%3D&az=oaivgprodscus",
    },
    {
      id: 2,
      image: "https://videos.openai.com/vg-assets/assets%2Ftask_01jsc1tk81fcw9fghpjx6ed4rm%2Fimg_1.webp?st=2025-04-21T10%3A12%3A32Z&se=2025-04-27T11%3A12%3A32Z&sks=b&skt=2025-04-21T10%3A12%3A32Z&ske=2025-04-27T11%3A12%3A32Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=fQopfHcW2j1vBY6yTCTHgAjGDxWdU7OsCQG4vSaaKak%3D&az=oaivgprodscus",
    },
    {
      id: 3,
      image: "https://videos.openai.com/vg-assets/assets%2Ftask_01jsc2sbyced6tv4cc0prnw15t%2Fimg_0.webp?st=2025-04-21T10%3A14%3A29Z&se=2025-04-27T11%3A14%3A29Z&sks=b&skt=2025-04-21T10%3A14%3A29Z&ske=2025-04-27T11%3A14%3A29Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=qNC5H4l5NF2zo0cnRnm96oz4rXqSxXJR7MFADCwRZeA%3D&az=oaivgprodscus",
    },
    {
      id: 4,
      image: "https://videos.openai.com/vg-assets/assets%2Ftask_01jsc21mr9f0m96d4pjd7j163y%2Fimg_1.webp?st=2025-04-21T10%3A14%3A28Z&se=2025-04-27T11%3A14%3A28Z&sks=b&skt=2025-04-21T10%3A14%3A28Z&ske=2025-04-27T11%3A14%3A28Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=ZjO%2FOXgeE8%2BxcBNwXd2edVzLVbz5wuu5J0PCHtb78qE%3D&az=oaivgprodscus",
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