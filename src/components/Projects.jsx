import React from 'react'
import Tiles from './Tiles'
import eatai from '../assets/image_eatai.jpg'
import spvs from '../assets/image_spvs.jpg'
import hmda from '../assets/image_hmda.jpg'
import col from '../assets/image_col.jpg'
import yelp from '../assets/image_yelp.jpg'
import ow from '../assets/image_ow.jpg'

const Projects = () => {
  const project = [
    {
      id: 1,
      image: eatai,
      alternate: "Event Attendance Tracking with AI",
      url: "https://github.com/SeniorDesign2024"
    },
    {
      id: 2,
      image: hmda,
      alternate: "Home Mortgage Approval",
      url: "https://github.com/smistry4/HomeMortgageApproval"
    },
    {
      id: 3,
      image: spvs,
      alternate: "Simple Port and Vulnerability Scanner",
      url: "https://github.com/masonhyman-school/spvs"
    },
    {
      id: 4,
      image: col,
      alternate: "Cost of Living Analysis",
      url: "https://github.com/smistry4/CostOfLiving"
    },
    {
      id: 5,
      image: yelp,
      alternate: "Restaurant Finder App",
      url: "https://github.com/smistry4/yelp-app"
    },
    {
      id: 6,
      image: ow,
      alternate: "Origami World",
      url: "https://github.com/smistry4/origami_world"
    }
  ]
  return (
    <div name="projects" className="bg-gradient-to-b from-black to-gray-800">
        <div className="container mx-auto lg:px-20 ">
          <div className="py-2 flex mx-auto justify-center items-center font-dream_avenue text-white text-6xl lg:text-8xl">
              Projects
          </div>
          <div className="flex flex-wrap flex-col lg:flex-row">
            {project.map(({id, image, alternate, url})=> (
              <div key={id} className="basis-1/3">
                <Tiles
                  image={image}
                  alternate={alternate}
                  url={url}>
                </Tiles>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Projects