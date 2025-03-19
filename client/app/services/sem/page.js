import React from 'react'
import MainBanner from '../../components/subPageComponents/MainBanner'
import StepSection from '../../components/subPageComponents/StepSection'
import QuestionsSection from '../../components/subPageComponents/QuestionsSection'
import VerticalSlider from '../../components/subPageComponents/VerticalSlider'

const servicesData = [
  {
    id: 1,
    title: "Advertising Management",
    subTitle: " Service",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Creating and Editing Motionography",
    ],
  },
  {
    id: 2,
    title: "Web Traffic Tracking",
    subTitle: "Deign Service",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Creating and Editing Motionography",
    ],
  },
  {
    id: 3,
    title: "Google Webtools",
    subTitle: " Service",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Creating and Editing Motionography",
    ],
  },
  {
    id: 4,
    title: "Yandex Advertising",
    subTitle: " Service",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Creating and Editing Motionography",
    ],
  },

  {
    id: 5,
    title: "Google Ads Advertising",
    subTitle: " Service",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Creating and Editing Motionography",
    ],
  },
];

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-[75px] lg:gap-[150px] overflow-hidden'>
      <MainBanner header="Search Engine Merketing (SEM) Services" text="OIn today's fiercely competitive digital landscape, being found amidst the endless sea of online content is paramount to success. At DGTLFACE, we specialise in propelling your brand to the forefront of search engine results through our comprehensive Search Engine Marketing (SEM) services"/>
      <StepSection header="Every Click Return on " header2="Sales" text="  Harnessing the power of SEM, we strategically position your brand in front of your target audience when they're actively searching for products or services like yours. With a data-driven approach and a keen understanding of search engine algorithms, we craft highly targeted campaigns that deliver tangible results." servicesData={servicesData}/>
      <VerticalSlider/>
      <QuestionsSection/>
    </div>
  )
}

export default page
