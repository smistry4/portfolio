import React from 'react'

const Card = (props) => {
  return (
    <div>
        <div className="text-gray-300 flex flex-col w-72 mx-auto">
            <div className="h-60 overflow-hidden rounded-md">
                <div className="h-full hover:scale-105 duration-500">
                    <img class="w-full h-full rounded-md" src={props.image} alt={props.alternate} />
                </div> 
            </div>
            <div className="py-4 font-dream_avenue text-2xl">
                {props.heading}
            </div>
            <div className="border-t py-2 font-thin">
                {props.text1}
            </div>
            <div className="border-t py-2 font-thin">
                {props.text2}
            </div>
            <div className="border-t py-2 font-thin">
                {props.text3}
            </div>
        </div>
    </div>
  )
}

export default Card