import React from 'react'
import Card from './Card'
import utk from "../assets/Utk_logo.jpg"
import jtv from "../assets/IMG_2980.JPG"
import rm from "../assets/logo_repme.jpg"

const Background = () => {
  return (
    <div name="background" className='bg-gradient-to-b from-black via-black to-gray-800'>
      <div className="lg:container mx-auto lg:px-20 py-4 text-white">
        <div className="flex mx-auto font-dream_avenue lg:text-8xl text-6xl justify-center items-center">
          Background
        </div>
        <div className="flex mx-auto py-4 flex-col lg:flex-row">
          <div className="basis-1/3 py-2">
            <Card 
              image={utk} 
              alternate="university of tennessee" 
              heading="University of Tennessee"
              accent="shadow-amber-600"
              text1="Bachelor of Science in Computer Science"
              text2="GPA: 3.99 / 4.00"
              text3="Summa Cum Laude">
            </Card>
          </div>
          <div className="basis-1/3 py-2">
            <Card 
              image={jtv} 
              alternate="Jewelry Television" 
              heading="Jewelry Television"
              accent="shadow-blue-600"
              text1="Web Development Internship"
              text2="May 2023 - August 2023"
              text3="Skills: Java(J2EE) & Oracle CMS">
            </Card>
          </div>
          <div className="basis-1/3 py-2">
            <Card 
              image={rm} 
              alternate="Rep Me" 
              heading="Rep Me"
              accent="shadow-orange-600"
              text1="Software Development Internship"
              text2="June 2022 - August 2022"
              text3="Skills: HTML, CSS & JavaScript">
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Background