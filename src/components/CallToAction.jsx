import React from 'react';
import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <section className="container mx-auto px-6 my-40 md:my-52">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <h2 className="text-[80px] md:text-[110px] leading-[0.9] font-medium mb-6 text-[#1B4B43]">
            FACCIAMO LA DIFFERENZA INSIEME
          </h2>
          <p className="text-lg text-[#1B4B43]/80 mb-8">
            Contattaci oggi stesso per scoprire come possiamo aiutarti a raggiungere i tuoi obiettivi ambientali e aziendali.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full space-y-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[#1B4B43] mb-2">
              Nome e Cognome
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1B4B43] focus:ring-2 focus:ring-[#1B4B43]/20 outline-none transition-all"
              placeholder="Inserisci il tuo nome completo"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-[#1B4B43] mb-2">
              Telefono
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1B4B43] focus:ring-2 focus:ring-[#1B4B43]/20 outline-none transition-all"
              placeholder="Inserisci il tuo numero di telefono"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#1B4B43] mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1B4B43] focus:ring-2 focus:ring-[#1B4B43]/20 outline-none transition-all"
              placeholder="Inserisci la tua email"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-[#1B4B43] mb-2">
              Messaggio
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1B4B43] focus:ring-2 focus:ring-[#1B4B43]/20 outline-none transition-all resize-none"
              placeholder="Scrivi il tuo messaggio..."
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-[#1B4B43] text-white px-6 py-4 rounded-lg hover:bg-[#143D37] transition-colors duration-300 font-semibold text-lg"
          >
            Invia
          </button>
          <p className="text-xs text-gray-500 mt-4">
            Ai sensi e per gli effetti degli artt. 6, 7, 12, 13 del Reg. UE 2016/679 - GDPR cliccando su "invia", dichiaro di aver preso visione dell'Informativa sul trattamento dei dati personali.
          </p>
        </motion.form>
      </div>
    </section>
  );
};

export default CallToAction; 