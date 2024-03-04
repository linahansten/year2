import React from 'react'
import { getData } from '@/utils/handleDatabase'
import FilterComponent from '@/components/FilterComponent'

export default async function Filter() {
    const data = await getData()
    const sortedData = data.sort((a,b)=> a.id - b.id)
    //console.log(sortedData)
    const filtereData = data.filter((e)=> e.quote == "From Typescript")
    //console.log(filtereData)
  return (
    <div>
        <FilterComponent data={data} />
    </div>
  )
}