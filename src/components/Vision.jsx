import React from 'react';
import { motion } from 'framer-motion';

const Vision = () => {
  return (
    <section className="bg-white py-24 md:py-52">
      <div className="container mx-auto">
        <motion.div 
          className="max-w-[1000px] mx-auto space-y-4 text-[#333333] text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.1 } }
          }}
        >
          <motion.h2 
            className="text-7xl font-medium leading-[1]"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            IL FURLOTTI GROUP <span className="inline-block w-20 h-14 rounded-lg overflow-hidden align-middle mx-2">
              <img 
                src="https://videos.openai.com/vg-assets/assets%2Ftask_01jsc457s1e5ps4czm3krrqmwh%2Fimg_0.webp?st=2025-04-21T10%3A57%3A50Z&se=2025-04-27T11%3A57%3A50Z&sks=b&skt=2025-04-21T10%3A57%3A50Z&ske=2025-04-27T11%3A57%3A50Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=4RQt8f1LhRyFbOiqqRocHi4A%2F%2BD4SPBy%2FkaOybec8Ac%3D&az=oaivgprodscus"
                alt="Furlotti Group Logo"
                className="w-full h-full object-cover"
              />
            </span> GUARDA AL FUTURO CON
          </motion.h2>
          
          <motion.h2 
            className="text-7xl font-medium leading-[1]"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            UNA VISIONE CHIARA E AMBIZIOSA: <span className="inline-block w-28 h-14 rounded-lg overflow-hidden mx-2">
              <img 
                src="https://videos.openai.com/vg-assets/assets%2Ftask_01jsc3cjrxeyn96rmsfbpv73pp%2Fimg_1.webp?st=2025-04-21T10%3A13%3A29Z&se=2025-04-27T11%3A13%3A29Z&sks=b&skt=2025-04-21T10%3A13%3A29Z&ske=2025-04-27T11%3A13%3A29Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=3L5ipZ9aiNvqE2J719zYl1Tz1yyvByfLoNkC6tOMGYA%3D&az=oaivgprodscus"
                alt="Visione"
                className="w-full h-full object-cover"
              />
            </span>
          </motion.h2>
          
          <motion.h2 
            className="text-7xl font-medium leading-[1]"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            TRASFORMARE LA GESTIONE DEI RIFIUTI
          </motion.h2>
          
          <motion.h2 
            className="text-7xl font-medium leading-[1] whitespace-nowrap"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            ATTRAVERSO UNA STRUTTURA<span className="inline-block w-20 h-14 rounded-lg overflow-hidden mx-4">
              <img 
                src="https://videos.openai.com/vg-assets/assets%2Ftask_01jsc3nkzrfmqt4v7emhq659mz%2Fimg_0.webp?st=2025-04-21T10%3A12%3A34Z&se=2025-04-27T11%3A12%3A34Z&sks=b&skt=2025-04-21T10%3A12%3A34Z&ske=2025-04-27T11%3A12%3A34Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=V8cE8ooCxM3SWDm3Dsv%2BflutrPiiC8G0sfrxt2hkI3g%3D&az=oaivgprodscus"
                alt="Struttura"
                className="w-full h-full object-cover"
              />
            </span>ORGANIZZATIVA
          </motion.h2>
          
          <motion.h2 
            className="text-7xl font-medium leading-[1]"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            INTEGRATA E UNA <span className="inline-flex gap-2 align-middle mx-2">
              <span className="inline-block w-14 h-14 rounded-lg overflow-hidden">
                <img 
                  src="https://videos.openai.com/vg-assets/assets%2Ftask_01jsc1rrx3fk8r49tm4718gcgc%2Fimg_1.webp?st=2025-04-21T10%3A14%3A20Z&se=2025-04-27T11%3A14%3A20Z&sks=b&skt=2025-04-21T10%3A14%3A20Z&ske=2025-04-27T11%3A14%3A20Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=3QNWwUj0nXouel6uAcKyet4dbUQ1YVMDqb0VTZvAWfo%3D&az=oaivgprodscus"
                  alt="Immagine 1"
                  className="w-full h-full object-cover"
                />
              </span>
              <span className="inline-block w-14 h-14 rounded-lg overflow-hidden">
                <img 
                  src="https://videos.openai.com/vg-assets/assets%2Ftask_01jsc1tk81fcw9fghpjx6ed4rm%2Fimg_1.webp?st=2025-04-21T10%3A12%3A32Z&se=2025-04-27T11%3A12%3A32Z&sks=b&skt=2025-04-21T10%3A12%3A32Z&ske=2025-04-27T11%3A12%3A32Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=fQopfHcW2j1vBY6yTCTHgAjGDxWdU7OsCQG4vSaaKak%3D&az=oaivgprodscus"
                  alt="Immagine 2"
                  className="w-full h-full object-cover"
                />
              </span>
              <span className="inline-block w-14 h-14 rounded-lg overflow-hidden">
                <img 
                  src="https://videos.openai.com/vg-assets/assets%2Ftask_01jsc2sbyced6tv4cc0prnw15t%2Fimg_0.webp?st=2025-04-21T10%3A14%3A29Z&se=2025-04-27T11%3A14%3A29Z&sks=b&skt=2025-04-21T10%3A14%3A29Z&ske=2025-04-27T11%3A14%3A29Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=qNC5H4l5NF2zo0cnRnm96oz4rXqSxXJR7MFADCwRZeA%3D&az=oaivgprodscus"
                  alt="Immagine 3"
                  className="w-full h-full object-cover"
                />
              </span>
              <span className="inline-block w-14 h-14 rounded-lg overflow-hidden">
                <img 
                  src="https://videos.openai.com/vg-assets/assets%2Ftask_01jsc21mr9f0m96d4pjd7j163y%2Fimg_1.webp?st=2025-04-21T10%3A14%3A28Z&se=2025-04-27T11%3A14%3A28Z&sks=b&skt=2025-04-21T10%3A14%3A28Z&ske=2025-04-27T11%3A14%3A28Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=ZjO%2FOXgeE8%2BxcBNwXd2edVzLVbz5wuu5J0PCHtb78qE%3D&az=oaivgprodscus"
                  alt="Immagine 4"
                  className="w-full h-full object-cover"
                />
              </span>
            </span> COLLABORAZIONE
          </motion.h2>
          
          <motion.h2 
            className="text-7xl font-medium leading-[1]"
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
              className="h-32 mx-auto mb-6 brightness-0"
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