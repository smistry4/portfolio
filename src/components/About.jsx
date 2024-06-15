import React from 'react'
import profile from '../assets/ProfPic.jpg'
import sym from '../assets/sym.PNG'
import {MdOutlineKeyboardArrowRight} from "react-icons/md"
import { Link } from 'react-scroll'

const About = () => {
  return (
    <div className="flex pt-20 flex-col md:h-screen lg:flex-row text-white bg-black">
      <div className="flex flex-row lg:w-6/12">
        <div className="w-6/12 container m-4 px-4 pt-4 z-10">
          <img
            src={profile}
            alt="Shivam Mistry"
            className="rounded-full translate-x-20"
          />
        </div>
        <div className="w-6/12 container m-4 px-4">
          <img src={sym} alt="Logo" className="rounded-full -translate-x-10" />
        </div>
      </div>
      <div className="flex flex-col lg:w-6/12 pt-4">
        <div className="container mx-auto text-center lg:text-left lg:w-6/12 lg:ml-4 px-4 font-dream_avenue text-8xl">
          SHIVAM MISTRY
        </div>
        <div className="container mx-auto text-center lg:text-left lg:w-6/12 lg:ml-4 px-4 pt-4 font-medium">
          COMPUTER SCIENCE STUDENT
        </div>
        <div className="container mx-auto text-center lg:text-left lg:w-6/12 lg:ml-4 px-4 pt-8 font-thin text-sm">
          I find the idea of transforming concepts into tangible digital
          solutions fascinating. My passion lies in the realm of application and
          software development, and overseeing the entire end-to-end
          implementation truly excites me.
        </div>
        <div className='flex mx-auto lg:ml-8 lg:flex-row'>
          <Link to='projects' smooth duration={500} 
            className="group text-white px-6 py-3 my-8 mr-3 flex items-center rounded-md cursor-pointer bg-amber-600 hover:bg-amber-700 focus:ring-amber-800">
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={20} className="ml-1"/>
              </span>
          </Link>
          <button className="button cursor-pointer ">
            <a className="button duration-500 flex items-center px-6 py-3 rounded-md outline outline-1 outline-amber-600 hover:outline-none hover:bg-amber-600" href="/Resume_Shivam_Mistry.pdf" download>
              Resume
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default About