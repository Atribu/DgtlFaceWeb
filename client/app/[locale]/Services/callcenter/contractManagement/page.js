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
    header:"Contract Structuring & Customization",
    text:"Let us answer your calls for the countries you serve with our international call greeting service. Increase your call quality as a company that provides international service with a professional team that provides quality service in 4 languages."
  },
  {
    id:2,
    image:image2,
    header:"Service Level Agreements & Compliance Management",
    text:"Service Level Agreements (SLAs) and compliance management are critical components of effective contract and service management. SLAs define the expectations and commitments between service providers and their clients, while compliance management ensures that these agreements adhere to relevant laws, regulations, and industry standards."
  },
  {
    id:3,
    image:image3,
    header:"Monitoring & Reporting of Contract Processes",
    text:"Monitoring and reporting of contract processes are essential components of effective contract management. These activities involve systematically overseeing the entire lifecycle of a contract, from creation and negotiation to execution and renewal."
  },
  {
    id:4,
    image:image4,
    header:"Risk Management & Contract Assurances",
    text:"Risk management and contract assurances are integral components of the contract lifecycle, designed to identify, assess, and mitigate potential risks associated with contractual agreements."
  }
]
const page = () => {
  return (
    <div className='flex flex-col gap-[80px] lg:gap-[160px] bg-[#080612] overflow-hidden'>
      <SubBanner header="Call Center Contract" header2="Management Services" text="This service involve the effective handling and oversight of contracts related to call center operations. These contracts may include agreements with clients, vendors, service providers, and other stakeholders involved in the call center's activities." buttonLink="/"/>
      <StepSection2 data={stepData}/>
      <VerticalSlider/>
      <QuestionsSection color="#fff"/>
    </div>
  )
}

export default page
