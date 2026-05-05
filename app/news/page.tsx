import NewsBanner from '@/components/news/NewsBanner'
import NewsContent from '@/components/news/NewsContent'
import ThemeBanner from '@/components/news/ThemeBanner'
import React from 'react'

const page = () => {
  return (
    <main>
        <NewsBanner/>
        <ThemeBanner/>
        <NewsContent/>
    </main>
  )
}

export default page