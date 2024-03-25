// import {getData, saveData} from '@/utils/handleDatabase'
// import { revalidateTag} from 'next/cache'


// export default async function Home() {
//   const data = await getData()
  
//   //create
//   const create = async (formData:FormData)=>{
//     'use server'
//     const project = formData.get('projectName') as string
//     const notes = formData.get('notes') as string
//     const start = new Date()
//     const data = await saveData(project, notes, start)
//     console.log(data)
//     revalidateTag("project")
//   }
 
//   console.log(data)

//   {/*map, loop array/data */}
//   return (
//     <div className="bg-slate-500 h-screen w-full text-slate-50 flex flex-col justify-center items-center ">
//       {/* loopa ut från databas */}
//       <form className=' flex flex-col justify-center items-center  gap-4 max-w-56' action={create}>
//         <p>Make Project</p>
//         <input type='text' className='text-slate-900' name='projectName' placeholder='Project Name'></input>
//         <input type='text' className='text-slate-900' name='notes' placeholder='notes'></input>
//         <button className='p-3 bg-black rounded mb-3'>Save Project</button>
//       </form>
//       <a className='mt-4 text-slate-900' href="/recent-project">See recent projets</a>
//           <a className='mt-4 text-slate-900' href="/old-prjects">See all Projects</a>
//     </div>
//   );
// }
