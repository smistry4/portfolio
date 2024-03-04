import React from 'react'
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

const Contact = () => {
  return (
    <div name="contact" className='bg-gradient-to-b from-gray-800 to-black'>
      <div className="container flex flex-col mx-auto px-20 py-6">
        <div className="py-2 px-8 flex mx-auto justify-center items-center font-dream_avenue text-white text-6xl lg:text-8xl">
          Get In Touch!
        </div>
        <div className="py-2 px-8 lg:px-20 flex mx-auto justify-center items-center font-thin lg:text-xl text-white">
          Thank you for visiting my website! Whether you have a question, a
          project idea, or just want to say hello, I'd love to hear from you.
          Feel free to reach out to me or connect with me through social media.
        </div>
        <a href="mailto:sjmistry44@gmail.com" className="flex mx-auto text-white cursor-pointer font-medium rounded-lg text-sm px-5 py-2.5 mt-8 mb-4 bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-amber-800">
            Email
        </a>
        <div className="flex flex-row mx-auto">
            <a href='https://www.linkedin.com/in/mysterys' className='px-2'>
                <FaLinkedin style={{color: 'white', fontSize: '25px'}}/>
            </a>  
            <a href='https://www.github.com/smistry4' className='px-2'>
                <FaGithubSquare style={{color: 'white', fontSize: '25px'}}/>
            </a>
        </div>
        <div className="flex flex-row mx-auto my-2 text-white">
            Made with ❤️ in Knoxville!
        </div>
      </div>
    </div>
  );
}

export default Contact