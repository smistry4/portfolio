import React from 'react'

const Tiles = (props) => {
  return (
    <div>
        <div className="flex bg-gradient-to-b from-gray-500 to-gray-800 shadow-md shadow-black rounded-md mx-auto my-2 w-72 h-60 relative group">
            <div className="relative overflow-hidden">
                <img className="object-scale-down h-full rounded-md w-auto" src={props.image} alt={props.alternate} />
                <div className="absolute w-full h-full rounded-md bg-black/60 flex flex-col items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="py-2 text-white">
                    {props.alternate}
                  </div>
                  <a href={props.url} class="text-white cursor-pointer font-medium rounded-lg text-sm px-5 py-2.5 bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-amber-800">
                    Learn More
                  </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tiles