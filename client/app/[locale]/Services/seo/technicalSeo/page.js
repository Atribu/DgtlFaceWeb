import QuestionsSection from '@/app/[locale]/components/subPageComponents/QuestionsSection'
import StepSection2 from '@/app/[locale]/components/subPageComponents/StepSection2'
import SubBanner from '@/app/[locale]/components/subPageComponents/SubBanner'
import VerticalSlider from '@/app/[locale]/components/subPageComponents/VerticalSlider'
import React from 'react'
import image1 from "./images/image1.png"
import image2 from "./images/image2.png"
import image3 from "./images/image3.png"
import image4 from "./images/image4.png"

const stepData=[
  {
    id:1,
    image:image1,
    header:"URL Structure Optimisation",
    text:"Our goal is to implement structured data markup to provide search engines with additional context about the content on the website, increasing visibility in search results. Setting up canonical tags and optimizing URL structure to prevent duplicate content issues and improve search engine rankings."
  },
  {
    id:2,
    image:image2,
    header:"Page Scanning & Indexing Control",
    text:"We aim to improve the website structure, internal links and navigation to improve user experience and facilitate easy access to important content. Optimizing the technical aspects of the website leads to higher search engine rankings, increased visibility and organic traffic, and DGTLFACE is ready to do this for you."
  },
  {
    id:3,
    image:image3,
    header:"Mobile Compatibility Controls",
    text:"Identifying and fixing issues that hinder mobile usability can improve your site's search engine ranking. Our expert team evaluates your website's performance across various mobile devices, ensuring seamless navigation, fast loading times, and optimized layouts on all screen sizes."
  },
  
  {
    id:4,
    image:image4,
    header:"Site Map & Robots.txt Optimizations",
    text:"Effectively scanning and indexing your website by search engines is crucial for the success of your digital presence. Two essential files are used to optimize this process: the Site Map and Robots.txt. These files outline the structure of your website to search engines, directing them to the pages to be scanned while limiting access to content that shouldn't be crawled. We perform these optimizations with professional approaches, ensuring technical excellence in your project."
  }
]
const page = () => {
  return (
    <div className='flex flex-col gap-[80px] lg:gap-[160px] bg-[#080612] overflow-hidden'>
      <SubBanner header="Technical SEO" header2="Services" text="Technical website optimization services involve optimizing the technical aspects of a website to enhance its performance, user experience, and search engine visibility." buttonLink="/"/>
      <StepSection2 data={stepData}/>
      <VerticalSlider/>
      <QuestionsSection color="#fff"/>
    </div>
  )
}

export default page
