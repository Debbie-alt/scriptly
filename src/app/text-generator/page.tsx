'use client'
import React from 'react';
import AiFeatureTabs from '@/components/ai/feature-tab';
import TextGeneratorHero from '@/components/ai/TextGenHero';
import Faq from '@/components/LandingPage/Faq';
import TextGeneratorCTA from '@/components/ai/text-generatorCta';
import ShowcaseGenerator from '@/components/ai/ShowcaseTextGen';

const TextGeneratorPage = () => {
  return (
    <div className='pt-16'>
       <AiFeatureTabs />
      <TextGeneratorHero />
       <TextGeneratorCTA/>
       <ShowcaseGenerator/>
      <Faq/>
      
    </div>
  );
};

export default TextGeneratorPage;
