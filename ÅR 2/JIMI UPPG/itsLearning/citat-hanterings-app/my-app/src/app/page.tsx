import { getData } from '@/utils/handleDatabase';


export default async function Home() {
  function getRandomQuote(data) {
    const randomIndex = Math.floor(Math.random() * data.length);
    return data[randomIndex];
  }
  const data = await getData();
  const randomQuote = getRandomQuote(data);

  return (
    <div className="bg-slate-500 h-screen w-full text-slate-50 flex flex-col justify-center items-center ">
      <h1 className="text-xl text-slate-50 m-4">Quotes</h1>
      {/* Display random quote */}
      <div className='flex flex-col'>
        <p key={randomQuote.id}>
          <strong>{randomQuote.author}:</strong> {randomQuote.quote}
        </p>
      </div>
      <a className='mt-4 text-slate-900' href="/all-quotes">See all quotes</a>
      <a className='mt-4 text-slate-900' href="/create-quote">create quote</a>
    </div>
  );
}
