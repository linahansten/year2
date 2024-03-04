import {db} from './db'

export async function getData(){
    const data = await db.query('SELECT * FROM quotes')
    return data.rows
}
