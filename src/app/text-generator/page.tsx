'use client'
import React from 'react';
import AiFeatureTabs from '@/components/ai/feature-tab';
import TextGeneratorHero from '@/components/ai/TextGenHero';
import Faq from '@/components/LandingPage/Faq';
import TextGeneratorCTA from '@/components/ai/text-generatorCta';

const TextGeneratorPage = () => {
  return (
    <div className='pt-20'>
       <AiFeatureTabs />
      <TextGeneratorHero />
       <TextGeneratorCTA/>
      <Faq/>
      
    </div>
  );
};

export default TextGeneratorPage;
