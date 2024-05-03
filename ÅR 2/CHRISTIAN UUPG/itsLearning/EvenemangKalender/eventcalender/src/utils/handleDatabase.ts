'use server'
import {db} from './db'

export async function getData(){
    const data = await db.query('SELECT * FROM events')
    return data.rows
}

export async function saveData(eventName:string, selecteddate:string){
    try {
        console.log(eventName)
    await db.query('INSERT INTO events(selecteddate, eventName) VALUES ($1, $2)', [selecteddate, eventName])
    return 'Saved successfully'
    } catch (error) {
        console.log(error)
        return 'Something went wrong'
    }
}

export async function updateData(id:string, eventName:string, selecteddate:string){
    try {
        await db.query('UPDATE events SET selecteddate = $1, eventName = $2, WHERE id = $3',[selecteddate, eventName, id])
        return 'Updated'
        } catch (error) {
            console.log(error)
            return 'Something went wrong'
        }
}

export async function deleteData(id:string){
    try {
        await db.query('DELETE FROM events WHERE id = $1', [id])
        return 'deleted'
        } catch (error) {
            console.log(error)
            return 'Something went wrong'
        }
}
