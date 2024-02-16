import { getData, updateData } from '@/utils/handleDatabase';

export default async function Home({searchParams}) {
    const data = await getData()
   //update
   const update = async (formData:FormData)=>{
    'use server'
    const quote = await formData.get('quote') as string
    const author = await formData.get('author') as string
    // const id = await formData.get('id') as string
    const data= await updateData( searchParams.id, author, quote)
    console.log(data)
  }
  console.log(data)
  return (
    <div className="bg-slate-500 h-screen w-full text-slate-50 flex flex-col justify-center items-center">
      {/* UPDATE */}
      <p>Update quote</p>
      <form action={update} className='flex flex-col justify-center items-center gap-4'>
        <input type='hidden' name='id' value='123' /> 
        <input type='text' className='text-slate-900' name='author' placeholder='author'></input>
        <input type='text' className='text-slate-900' name='quote' placeholder='quote'></input>
        <button type='submit' className='p-3 bg-black rounded mb-3'>Update quote</button>
      </form>
      <a className='mt-4 text-slate-900' href="/">Get random quote</a>
      <a className='mt-4 text-slate-900' href="/all-quotes">See all quotes</a>
    </div>
  );
}
