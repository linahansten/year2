'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function FilterComponent({ data }: { data: any[] }) {

  const [ascendingOrder, setAscendingOrder] = useState(true);
  const [searchWord, setSearchWord] = useState("");
  const [names, setNames] = useState(data)
  const router = useRouter()

  function handleSort() {
    const sortedData = [...names].sort((a: any, b: any) => {
      const nameA = a.quote.toLowerCase();
      const nameB = b.quote.toLowerCase();
      if (nameA < nameB) {
        return ascendingOrder ? -1 : 1;
      }
      if (nameA > nameB) {
        return ascendingOrder ? 1 : -1;
      }
      return 0;
    });
  
    console.log(sortedData);
    setNames(sortedData);
    setAscendingOrder(!ascendingOrder);
  }
  


  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = event.target.value;
    setSearchWord(inputValue);

    const filteredNames = data.filter((item) => item.name.toLowerCase().includes(inputValue.toLowerCase()));
    setNames(filteredNames);
  }
  return (
    <div className='min-h-screen bg-olive flex flex-col justify-center items-center gap-3 text-oliveText '>

      <input type="text"
        name="searchWord"
        placeholder="Search"
        className="bg-graywhite border-2 border-solid py-1 px-2"
        value={searchWord}
        onChange={handleSearchChange} />
      <button onClick={handleSort} className='bg-graywhite py-1 px-2 rounded'>Alphabetical flip</button>

      <div className=' bg-graywhite flex flex-col justify-center items-center w-1/5 gap-3 rounded p-3'>
        {names.map((data) => (
          <div key={data.id}>
            <div >

              <h1 className='text-xl'>{data.quote}</h1>
            </div>
          </div>


        ))}
      </div>

    </div >
  )
}