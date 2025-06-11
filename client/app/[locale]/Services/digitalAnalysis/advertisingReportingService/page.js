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
    header:"Ad Spend Optimization",
    text:"If you want to manage your advertising budget more effectively, our daily ad spending reporting services are perfect for you. With detailed reports provided, you can easily see which ads are generating the highest conversions and adjust your budget accordingly. Meet our strategies that will help you make the most of every penny of your advertising spending."
  },
  {
    id:2,
    image:image2,
    header:"Increasing Conversion Rates Efforts",
    text:"Daily reporting allows you to track the performance of your ad campaigns in real-time. These reports help increase your conversion rates by showing which ads are attracting more customers or which platforms are yielding better results. Discover where to focus to maximise your return on investment."
  },
  {
    id:3,
    image:image3,
    header:"Target Audience Analysis & Segmentation",
    text:"Daily ad spending reports provide an opportunity to deeply analyse your target audience's behaviours. With this information, you can segment your ads based on specific demographics, interests, or behavioural factors. This ensures that your ad messages reach the right audience, thus increasing the efficiency of your advertising budget."
  },
  {
    id:4,
    image:image4,
    header:"Keep Up with Trends: Current Data Analysis",
    text:"Take advantage of our daily reporting services to keep up with the latest market trends and shape your advertising strategies accordingly. With current data analysis, you can quickly adapt to changes in consumer behaviour and instantly optimise your campaigns. Stay ahead of your competitors by keeping your advertising campaigns up to date."
  }
]
const page = () => {
  return (
    <div className='flex flex-col gap-[80px] lg:gap-[160px] bg-[#080612] overflow-hidden'>
      <SubBanner header="Advertising Reporting" header2="Services" text="Digital Sales and Marketing Analysis Services is a premier provider of data-driven solutions for businesses that want to optimize their sales and marketing strategies. We helps clients understand their customers, markets, competitors, and campaigns, and provides them with actionable insights to increase their sales and marketing." buttonLink="/"/>
      <StepSection2 data={stepData}/>
      <VerticalSlider/>
      <QuestionsSection color="#fff"/>
    </div>
  )
}

export default page
