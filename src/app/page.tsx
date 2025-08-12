import Image from "next/image";
import Hero from "@/components/LandingPage/Hero";
import WhyChoose from "@/components/LandingPage/WhyChooseUs";
import Cta from "@/components/LandingPage/Cta";
import Faq from "@/components/LandingPage/Faq";

export default function Home() {
  return (
   <>
    <Hero/>
    <WhyChoose/>
    <Cta/>
    <Faq/>
   </>
  );
}
