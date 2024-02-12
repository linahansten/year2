import {getData, saveData} from '@/utils/handleDatabase'
import { revalidateTag} from 'next/cache'


export default async function Home() {
  const data = await getData()
  
  //create
  const create = async (formData:FormData)=>{
    'use server'
    const quote = await formData.get('quote') as string
    const author = await formData.get('author') as string
    const data= await saveData(quote, author)
    console.log(data)
    revalidateTag("quote")
  }
 
  console.log(data)

  {/*map, loop array/data */}
  return (
    <div className="bg-slate-500 h-screen w-full text-slate-50 flex flex-col justify-center items-center ">
      {/* loopa ut från databas */}
      <form className=' flex flex-col justify-center items-center  gap-4 max-w-56' action={create}>
        <p>Make quote</p>
        <input type='text' className='text-slate-900' name='author' placeholder='author'></input>
        <input type='text' className='text-slate-900' name='quote' placeholder='quote'></input>
        <button className='p-3 bg-black rounded mb-3'>Save quote</button>
      </form>
      <a className='mt-4 text-slate-900' href="/">get random quote</a>
          <a className='mt-4 text-slate-900' href="/all-quotes">See all quotes</a>
    </div>
  );
}