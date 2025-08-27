import FAQ from '@/components/resources/faq'
import GuidesSection from '@/components/resources/Guides'
import ResourcesHero from '@/components/resources/Hero'
import WritingTips from '@/components/resources/Tips'
import React from 'react'

const Resourcespage = () => {
  return (
    <>
    <ResourcesHero/>
    <GuidesSection/>
    <WritingTips/>
  <FAQ/>
    </>
  )
}

export default Resourcespage