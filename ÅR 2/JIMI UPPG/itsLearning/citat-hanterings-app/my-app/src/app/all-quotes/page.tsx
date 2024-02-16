import { getData, deleteData } from '@/utils/handleDatabase';
import Link from 'next/link';
import { revalidateTag } from 'next/cache';

export default async function Home() {
  const data = await getData();

  //delete
  const deleteform = async (formData:FormData)=>{
    'use server'
    const id = await formData.get('id') as string
    const data= await deleteData(id)
    console.log(data)
    revalidateTag('kale-anka')
  }
  console.log(data)

  return (
    <div className="bg-slate-500 h-screen w-full text-slate-50 flex flex-col justify-center items-center">
      <h1 className="text-xl text-slate-50 m-4">Quotes</h1>
      {/* Display quotes */}
      <div className='flex flex-col'>
        {data.map((quote) => (
          <div key={quote.id}>
            <div className='flex'> 
            <form action={deleteform} className=''>
              <button className='ml-4 text-slate-900'>
                <svg name='id'xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
              </svg>
            </button>
              <input type="hidden" name='id' value={quote.id} />
            </form>
            <Link className='mr-4 text-slate-900' href={`/edit-quote?id=${quote.id}`}> edit </Link>
            <div>
              <strong >{quote.author}:</strong> 
              <p className='max-md:w-50'>"{quote.quote}"</p>
            </div>
            </div>
          </div>
        ))}
      </div>
      <Link className='mt-4 mr-4 text-slate-900' href="/"> Random quotes </Link>
      <Link className='mt-4 mr-4 text-slate-900' href="/create-quote"> create quote </Link>
    </div>
  );
}
