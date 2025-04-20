import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Vision from '../components/Vision';
import Services from '../components/Services';
import WorkWithUs from '../components/WorkWithUs';
import CallToAction from '../components/CallToAction';

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Vision />
      <Services />
      <WorkWithUs />
      <CallToAction />
    </Layout>
  );
};

export default Home; 