'use client'

import Image from "next/image";
import Header from '../../../components/header'
import Team from '../../../components/team'
import Resource from '../../../components/resource'
import Hero from '../../../components/hero'
import Expertise from '../../../components/expertise'
import WhyChooseUs from '../../../components/whychooseus'
import Testimonials from '../../../components/testimonials'
import CTA from '../../../components/cta'


export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <Expertise />      
      <WhyChooseUs />
      {/* <Testimonials /> */}
      <Team />
      
      {/* <Resource /> */}
      {/* <CTA /> */}
    </div>
  );
} 