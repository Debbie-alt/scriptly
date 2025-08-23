import AiFeatureTabs from '@/components/ai/feature-tab'
import Proofreader from '@/components/ai/ProofreadHero'
import WhyChoose from '@/components/LandingPage/WhyChooseUs'
import Faq from '@/components/LandingPage/Faq'
import React from 'react'
import ProofreaderShowcase from '@/components/ai/BeforeAndAfter'

const page = () => {
  return (
    <div className='pt-16'>
      <AiFeatureTabs/>
      <Proofreader/>
      {/* <ProofreaderShowcase/> */}
      <Faq/>
    
    </div>
  )
}

export default page