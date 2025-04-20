import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const CallToAction = () => {
  return (
    <section className="bg-[#F5F4EE] mx-6 my-24 overflow-hidden relative rounded-[32px]">
      <div className="container mx-auto px-6 py-8 md:py-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <h2 className="text-3xl md:text-5xl text-[#1B4B43] font-medium mb-8 leading-[1.1]">
              Contattaci oggi stesso per scoprire come possiamo aiutarti a raggiungere i tuoi obiettivi ambientali e aziendali
            </h2>
            <Link 
              href="/contatti"
              className="bg-[#004D40] text-white px-6 py-3 rounded-lg hover:bg-[#003D33] transition-colors duration-300 font-semibold"
            >
              Contattaci
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-3/4 aspect-square rounded-2xl bg-[#1B4B43]/5 hidden md:block mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#1B4B43]/10 to-transparent rounded-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction; 