import React from 'react';
import { motion } from 'framer-motion';
import { Award, Lightbulb, Shield, HeadphonesIcon } from 'lucide-react';

const WorkWithUs = () => {
  const solutions = [
    {
      id: 1,
      Icon: Award,
      title: 'Esperienza',
      description: 'Con un team di esperti dedicati, superiamo le sfide più difficili con strategie su misura.',
    },
    {
      id: 2,
      Icon: Lightbulb,
      title: 'Innovazione',
      description: 'Innoviamo continuamente per adattarci rapidamente alle nuove richieste del settore.',
    },
    {
      id: 3,
      Icon: Shield,
      title: 'Affidabilità',
      description: 'Puntualità, affidabilità e professionalità – è il nostro impegno quotidiano verso di te.',
    },
    {
      id: 4,
      Icon: HeadphonesIcon,
      title: 'Supporto',
      description: 'Siamo qui per te, pronti a offrire assistenza dedicata e una collaborazione senza intoppi.',
    },
  ];

  return (
    <section className="bg-[#1B4B43] text-white py-32 md:py-40">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left Column - Title and Description */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-[80px] leading-[0.9] md:text-[110px] font-medium mb-6">
                PERCHÉ<br />COLLABORARE<br />CON NOI
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Poniamo le tue esigenze al centro della nostra attenzione,
                impegnandoci a fornire risultati che parlano da soli.
              </p>
              <button className="bg-white text-[#1B4B43] px-6 py-3 rounded-lg 
                hover:opacity-90 transition-colors duration-300 font-semibold">
                Lavora con noi
              </button>
            </motion.div>
          </div>

          {/* Right Column - Cards */}
          <div className="space-y-6">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                className="bg-white/80 hover:bg-white rounded-2xl p-6 text-[#1B4B43] transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <solution.Icon className="w-8 h-8 text-[#1B4B43] flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl md:text-3xl font-medium mb-1">{solution.title}</h3>
                    <p className="text-base text-gray-600">{solution.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkWithUs; 