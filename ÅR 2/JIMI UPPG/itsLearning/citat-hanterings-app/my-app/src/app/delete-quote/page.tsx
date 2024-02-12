import {getData, deleteData} from '@/utils/handleDatabase'



export default async function Home() {
  const data = await getData()
  

  //delete
  const deleteform = async (formData:FormData)=>{
    'use server'
    const id = await formData.get('id') as string
    const data= await deleteData(id)
    console.log(data)
  }
  console.log(data)

  {/*map, loop array/data */}
  return (
    <div className="bg-slate-500 h-screen w-full text-slate-50 flex flex-col justify-center items-center ">
      {/*DELETE */}
      <p>Delete quote</p>
      <form action={deleteform} className='flex flex-col justify-center items-center '>
        <input type='text' className='text-slate-900 mb-3' name='id' placeholder='select id on quote to delete'></input>
        <button className='p-3 bg-black rounded '>delete quote</button>
      </form>
      <a className='mt-4 text-slate-900' href="/">Get random quote</a>
      <a className='mt-4 text-slate-900' href="/all-quotes">See all quotes</a>
    </div>
  );
}