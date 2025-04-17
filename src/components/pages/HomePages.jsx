import React from 'react'
import HomeCarousel from '../HomeCarousel'
import HomeSectionCaroysel from '../HomeSectionCard/HomeSectionCaroysel'
import { mens_kurta } from './mens_kurta'



const HomePages = () => {
  return (
    <div>
      <HomeCarousel />
      <div className=' flex flex-col  justify-center px-5 lg:px-5'> 
     <HomeSectionCaroysel data={mens_kurta} sectionNane={"Fans"}/>
     <HomeSectionCaroysel data={mens_kurta} sectionNane={"Fans & AC"} />
     <HomeSectionCaroysel data={mens_kurta} sectionNane={"Fans"} />
     <HomeSectionCaroysel data={mens_kurta} sectionNane={"Fans"} />
     
     
     </div>
    </div>
  )
}

export default HomePages
