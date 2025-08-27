import Image from "next/image";
import Hero from "@/components/LandingPage/Hero";
import WhyChoose from "@/components/LandingPage/WhyChooseUs";
import Cta from "@/components/LandingPage/Cta";
import Faq from "@/components/LandingPage/Faq";
import TestimonialCarousel from "@/components/LandingPage/Testimonial";
import ToolsCarousel from "@/components/LandingPage/Tools2";
import SignUpCta from "@/components/LandingPage/Cta2";



export default function Home() {
  return (
   <>
    <Hero/>
    <WhyChoose/>
    <Cta/>
   

   <TestimonialCarousel/>
  <ToolsCarousel/>
     <Faq/>
    {/* <SignUpCta/> */}
   
   </>
  );
}
