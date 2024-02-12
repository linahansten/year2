import { getData } from '@/utils/handleDatabase';
import Link from 'next/link';

export default async function Home() {
  const data = await getData();

  return (
    <div className="bg-slate-500 h-screen w-full text-slate-50 flex flex-col justify-center items-center">
      <h1 className="text-xl text-slate-50 m-4">Quotes</h1>
      {/* Display quotes */}
      <div className='flex flex-col'>
        {data.map((quote) => (
          <p key={quote.id}>
            <Link className='mr-4 text-slate-900' href={`/edit-quote?id=${quote.id}`}> edit </Link>
            <strong>{quote.author}:</strong> {quote.quote}
            <Link className='ml-4 text-slate-900' href={`/delete-quote?id=${quote.id}`}> delete </Link>
          </p>
        ))}
      </div>
      <Link className='mt-4 mr-4 text-slate-900' href="/"> Random quotes </Link>
      <Link className='mt-4 mr-4 text-slate-900' href="/create-quote"> create quote </Link>
    </div>
  );
}
