import Hero from "@/components/faq/FaqHero";
import FaqGrid from "@/components/faq/FaqGrid";
import ChatbotWidget from "@/components/faq/chatbot";

export default function FaqPage() {
  return (
    <>
      <Hero />
      <FaqGrid />

      <ChatbotWidget />
    </>
  );
}
