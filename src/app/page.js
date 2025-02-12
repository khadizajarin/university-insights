import Image from "next/image";
import HeroSection from "./HeroSection";
import Benefits from "./Benefits";
import TopCountries from "./TopCountries";
import AdmissionProcess from "./AdmissionProcess";
import ContactForm from "./ContactForm";

export default function Home() {
  return (
   <div>
    <HeroSection></HeroSection>
    <Benefits></Benefits>
    <TopCountries></TopCountries>
    <AdmissionProcess></AdmissionProcess>
    <ContactForm></ContactForm>
   </div>
  );
}
