import React from 'react'

const Skills = () => {
  const skill = [
    {
        id: 1,
        name: 'C/C++',
        competency: 'w-11/12'
    },
    {
        id: 2,
        name: 'NodeJS/ExpressJS',
        competency: 'w-10/12'
    },
    {
        id: 3,
        name: 'Java',
        competency: 'w-9/12'
    },
    {
        id: 4,
        name: 'Python',
        competency: 'w-9/12'
    },
    {
        id: 5,
        name: 'React',
        competency: 'w-9/12'
    },
    {
        id: 6,
        name: 'C#/.NET',
        competency: 'w-8/12'
    },
    {
        id: 7,
        name: 'TailwindCSS',
        competency: 'w-8/12'
    },
    {
        id: 8,
        name: 'SQL',
        competency: 'w-6/12'
    },
    {
        id: 9,
        name: 'MongoDB',
        competency: 'w-6/12'
    },
    {
        id: 10,
        name: 'Apache Spark',
        competency: 'w-3/12'
    }
  ]
  return (
    <div name='skills' className="bg-gradient-to-b from-gray-800 via-gray-900 to-black">
        <div className="flex flex-col mx-auto lg:flex-row container py-8">
            <div className="flex flex-col w-full mx-auto justify-center items-center text-white">
                {skill.map(({id, name, competency}) => (
                    <div key={id} className="flex w-8/12 mx-auto h-8 my-2 bg-gray-200 overflow-hidden rounded-md dark:bg-gray-700 shadow-md shadow-black">
                        <div className={`flex flex-col justify-center overflow-hidden rounded-md bg-amber-600 text-sm text-white text-center whitespace-nowrap transition duration-500 dark:bg-amber-600 ${competency}`}>{name}</div>
                    </div>  
                ))}
            </div>
        </div>
    </div>
  )
}

export default Skills
