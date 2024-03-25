// "use client"
// import { useEffect, useState } from 'react';

// export default function Home() {
//   const [assets, setAssets] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch('https://api.coincap.io/v2/assets');
//         const data = await res.json();
//         if (data && data.data) {
//           setAssets(data.data);
//         }
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Crypto Assets</h1>
//       <ul>
//         {assets.map(asset => (
//           <li key={asset.id}>
//             <div>Name: {asset.name}</div>
//             <div>Symbol: {asset.symbol}</div>
//             <div>Price: ${parseFloat(asset.priceUsd).toFixed(2)}</div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
import BuyButton from "@/components/BuyButton"

async function getData(){
  const res = await fetch('https://api.coincap.io/v2/assets')

  if (!res.ok){
    throw new Error('Failed to fetch data')
  }
  return res.json()
}
type crypto ={
  id: string,
  symbol: string,
  name: string,
  priceUsd: string,
  changePercent24Hr: string
}
export default async function Home(){
  const { data } = await getData()


  return (
    <main className="flex min-h-screen flex-col items-between p-24 justify-center">
      <ul>
        {data.map((crypto: crypto) => (
          <li key={crypto.id} className="space-x-12">
            <span>{crypto.symbol}</span>
            <span>{crypto.name}</span>
            <span>{crypto.priceUsd}</span>
            <span>{crypto.changePercent24Hr}</span>
            <BuyButton symbol={crypto.symbol}/>
          </li>
        ))}
      </ul>
    </main>
  )
}

