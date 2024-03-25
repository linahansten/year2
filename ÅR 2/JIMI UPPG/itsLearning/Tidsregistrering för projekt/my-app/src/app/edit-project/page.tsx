// import { getData } from '@/utils/handleDatabase';
// import Link from 'next/link';

// export default async function Home() {
//   const data = await getData();

//   console.log(data)

//   return (
//     <div className="bg-slate-500 h-screen w-full text-slate-50 flex flex-col justify-center items-center">
//       {/* Display projects */}
//       <div className='flex flex-col'>
//         {data.map((name) => (
//           <div key={name.id}>
//             <div className='flex'> 
//             {/* <Link className='mr-4 text-slate-900' href={`/edit-quote?id=${quote.id}`}> edit </Link> */}
//             <div className='bg-white text-slate-500 border-2 rounded-sm border-solid border-slate-50 p-10'>
//               <strong className=' font-mono'>Project: {name.notes}</strong> 
//               <p className=' font-mono max-md:w-50'>Notes: {name.name}</p>
//             </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <Link className='mt-4 mr-4 text-slate-900' href="/"> All projects </Link>
//       <Link className='mt-4 mr-4 text-slate-900' href="/"> create new Project </Link>
//     </div>
//   );
// }
