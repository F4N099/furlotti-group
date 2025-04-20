import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Services = () => {
  const services = [
    {
      id: 1,
      image: 'https://videos.openai.com/vg-assets/assets%2Ftask_01js81b9zbevqth8jadtkj82v1%2Fimg_0.webp?st=2025-04-20T19%3A34%3A25Z&se=2025-04-26T20%3A34%3A25Z&sks=b&skt=2025-04-20T19%3A34%3A25Z&ske=2025-04-26T20%3A34%3A25Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=%2Bx1qII8ImurcAoEMVvSTn33P5wvfg2tg1v9Xc72b2Qc%3D&az=oaivgprodscus',
      logo: 'https://www.furlottigroup.it/wp-content/uploads/2024/06/furlotti_vetro_horizontal_3col.svg',
      description: 'Scopri l\'innovazione nel recupero del vetro con Furlotti Vetro. Convertiamo il vetro in risorse preziose con soluzioni su misura per le esigenze della tua industria.',
    },
    {
      id: 2,
      logo: 'https://www.furlottigroup.it/wp-content/uploads/2024/06/furlotti_ambiente_horizontal_3col.svg',
      image: 'https://videos.openai.com/vg-assets/assets%2Ftask_01js80y9tqepfbpj7jk1sgt95r%2Fimg_0.webp?st=2025-04-20T19%3A34%3A25Z&se=2025-04-26T20%3A34%3A25Z&sks=b&skt=2025-04-20T19%3A34%3A25Z&ske=2025-04-26T20%3A34%3A25Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=0iNorZbE4qpgt9%2Fm268chBu3Y%2FU27XayJzHyIfsbWdQ%3D&az=oaivgprodscus',
      description: 'La scelta sicura per la gestione integrata dei rifiuti urbani e speciali. Con Furlotti Ambiente, la tua comunità o azienda può contare su efficienza e affidabilità.',
    },
    {
      id: 3,
      logo: 'https://www.furlottigroup.it/wp-content/uploads/2024/06/mori_recycling_horizontal_3col.svg',
      image: 'https://videos.openai.com/vg-assets/assets%2Ftask_01js812tz2fzss6qgsent4fbx9%2Fimg_0.webp?st=2025-04-20T19%3A34%3A25Z&se=2025-04-26T20%3A34%3A25Z&sks=b&skt=2025-04-20T19%3A34%3A25Z&ske=2025-04-26T20%3A34%3A25Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=HcWzk8Ya4DiWHJyLW3htvofilPI1YRWOB442gNPeQhk%3D&az=oaivgprodscus',
      description: 'Parte integrante del nostro gruppo, Mori Recycling si dedica al recupero di carta, cartone e plastiche, generando valore aggiunto per te e per l\'ambiente.',
    },
    {
      id: 4,
      logo: 'https://www.furlottigroup.it/wp-content/uploads/2024/06/furlotti_omnia_horizontal_3col.svg',
      image: 'https://videos.openai.com/vg-assets/assets%2Ftask_01js819j1bfnybtkst29877cf2%2Fimg_0.webp?st=2025-04-20T19%3A34%3A25Z&se=2025-04-26T20%3A34%3A25Z&sks=b&skt=2025-04-20T19%3A34%3A25Z&ske=2025-04-26T20%3A34%3A25Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=4H0lX1%2BOkDo%2FAO4U1x5ILH3qlXh0fFxQC77K8so0cOU%3D&az=oaivgprodscus',
      description: 'Furlotti Omnia integra personalizzazione ed efficienza nel recupero industriale, massimizzando la gestione dei rifiuti e il valore dei materiali misti.',
    },
  ];

  return (
    <section className="bg-[#F5F4EE] py-24">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-7xl md:text-8xl font-medium text-[#333333] mb-4">
            Le nostre unità
          </h2>
          <p className="text-lg text-gray-600">
            Offriamo soluzioni integrate e sostenibili per la gestione dei rifiuti,
            supportando le aziende nel loro percorso verso una maggiore efficienza ambientale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const ref = useRef(null);
            const { scrollYProgress } = useScroll({
              target: ref,
              offset: ["start end", "end start"]
            });
            const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

            return (
              <motion.div
                key={service.id}
                className="bg-white rounded-3xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="p-6 md:p-8">
                  <div 
                    ref={ref}
                    className="aspect-[16/9] overflow-hidden relative rounded-2xl mb-6"
                  >
                    <motion.div
                      className="absolute inset-0 h-[140%] -top-[20%]"
                      style={{ y }}
                    >
                      <img 
                        src={service.image} 
                        alt="Unit image"
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-[#9AB68F] opacity-20"></div>
                  </div>
                  <img 
                    src={service.logo}
                    alt="Company logo"
                    className="h-14 md:h-16 mb-6 w-auto"
                  />
                  <p className="text-lg text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <button 
                    className="bg-[#004D40] text-white px-6 py-2.5 text-base rounded-lg 
                      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#004D40] hover:bg-[#003D33] transition-colors font-semibold"
                  >
                    Scopri di più
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services; 