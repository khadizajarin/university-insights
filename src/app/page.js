import Image from "next/image";
import HeroSection from "./HeroSection";
import Benefits from "./Benefits";
import TopCountries from "./TopCountries";
import AdmissionProcess from "./AdmissionProcess";
import ContactForm from "./ContactForm";
import {Merriweather_Sans  } from 'next/font/google';
 
const merriweather_Sans = Merriweather_Sans({
  subsets: ['cyrillic-ext'],
  weight: ['300', '400', '700', '800']
});


export default function Home() {
  return (
   <div className={merriweather_Sans.className}>
    <HeroSection></HeroSection>
    <Benefits></Benefits>
    <TopCountries></TopCountries>
    <AdmissionProcess></AdmissionProcess>
    <ContactForm></ContactForm>
   </div>
  );
}
