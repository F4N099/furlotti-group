import React from 'react';
import { motion } from 'framer-motion';

const Vision = () => {
  return (
    <section className="bg-white py-32">
      <div className="container mx-auto">
        <motion.div 
          className="max-w-[1000px] mx-auto space-y-4 text-[#333333] text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.8, staggerChildren: 0.2 } }
          }}
        >
          <motion.h2 
            className="text-6xl font-medium leading-[1]"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            IL FURLOTTI GROUP <span className="inline-block w-16 h-12 bg-gray-200 align-middle mx-4 rounded-lg" /> GUARDA AL FUTURO CON
          </motion.h2>
          
          <motion.h2 
            className="text-6xl font-medium leading-[1]"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            UNA VISIONE CHIARA E AMBIZIOSA: <span className="inline-block w-24 h-12 bg-gray-200 align-middle ml-4 rounded-lg" />
          </motion.h2>
          
          <motion.h2 
            className="text-6xl font-medium leading-[1]"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            TRASFORMARE LA GESTIONE DEI RIFIUTI
          </motion.h2>
          
          <motion.h2 
            className="text-6xl font-medium leading-[1]"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            ATTRAVERSO UNA STRUTTURA <span className="inline-block w-16 h-12 bg-gray-200 align-middle mx-4 rounded-lg" /> ORGANIZZATIVA
          </motion.h2>
          
          <motion.h2 
            className="text-6xl font-medium leading-[1]"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            INTEGRATA E UNA <span className="inline-flex gap-2 align-middle mx-4">
              <span className="inline-block w-12 h-12 bg-gray-200 rounded-lg" />
              <span className="inline-block w-12 h-12 bg-gray-200 rounded-lg" />
              <span className="inline-block w-12 h-12 bg-gray-200 rounded-lg" />
              <span className="inline-block w-12 h-12 bg-gray-200 rounded-lg" />
            </span> COLLABORAZIONE
          </motion.h2>
          
          <motion.h2 
            className="text-6xl font-medium leading-[1]"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            SINERGICA TRA LE NOSTRE UNITÀ OPERATIVE.
          </motion.h2>

          <motion.div 
            className="pt-20 text-center"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <img 
              src="https://onlinepngtools.com/images/examples-onlinepngtools/george-walker-bush-signature.png" 
              alt="Pietro Bignetti" 
              className="h-24 mx-auto mb-6 brightness-0"
            />
            <h3 className="text-3xl font-medium text-[#666666]">Pietro Bignetti</h3>
            <p className="text-gray-400 italic">Amministratore Delegato</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Vision; 