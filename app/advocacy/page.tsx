import AdvocacyBanner from '@/components/advocacy/AdvocacyBanner'
import AdvocacyContent from '@/components/advocacy/AdvocacyContent'
import ImplementingPartners from '@/components/advocacy/ImplementingPartners'
import React from 'react'

const page = () => {
  return (
    <main>
        <AdvocacyBanner/>
        <AdvocacyContent/>
        <ImplementingPartners/>
    </main>
  )
}

export default page