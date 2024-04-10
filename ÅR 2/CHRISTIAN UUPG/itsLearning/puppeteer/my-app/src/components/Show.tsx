import React from 'react'

export default function DisplayerComponent(headings: any,) {
  console.log(headings)
  return (
    <div className='flex flex-col'>
      {headings.headings.map((heading: any, index: any) => (
        <div key={index} className='flex justify-center items-center'>
          {heading}
        </div>
      ))}
      {headings.text.map((text: any, index: any) => (
        <div key={index} className='flex flex-col justify-center items-center'>
          {text}
        </div>
      ))}


    </div>
  )
}