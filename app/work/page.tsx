import BrandedFacts from '@/components/work/BrandedFacts'
import WorkBanner from '@/components/work/WorkBanner'
import WorkContent from '@/components/work/WorkContent'
import React from 'react'

const page = () => {
  return (
    <main>
        <WorkBanner/>
        <WorkContent/>
        <BrandedFacts/>
    </main>
  )
}

export default page