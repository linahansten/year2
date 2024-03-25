'use client'
import { addTranscation } from "@/app/actions"

function buy(symbol:string){
const count = prompt(`How many ${symbol}?`)
addTranscation(Number(count), symbol)
}

export default function BuyButton(props: {symbol:string}){
    return(
        <button onClick={()=> buy(props.symbol)}>Buy</button>
    )
}