"use server"
import {db} from './db'

export async function getData(){
    const data = await db.query('SELECT * FROM projects')
    return data.rows
}

export async function saveData(name:string, notes:string, start:Date){
    try {
        console.log(name)
    await db.query('INSERT INTO projects(notes, name, start) VALUES ($1, $2, $3)', [notes, name, start])
    return 'Saved successfully'
    } catch (error) {
        console.log(error)
        return 'Something went wrong'
    }
}

export async function updateData(id:string, name:string, notes:string, start:Date){
    try {
        await db.query('UPDATE projects SET notes = $1, name = $2, start = $3 WHERE id = $4',[notes, name, start, id])
        return 'Updated'
        } catch (error) {
            console.log(error)
            return 'Something went wrong'
        }
}

export async function deleteData(id:string){
    try {
        await db.query('DELETE FROM projects WHERE id = $1', [id])
        return 'deleted';
    } catch (error) {
        console.log(error);
        return 'Something went wrong';
    }
}


export async function startTimer( id: string, start: Date) {
    try {
        await db.query('UPDATE projects SET start = $1 WHERE id = $2',[start, id]);
        console.log('Timer started');
        return 'Timer started';
    } catch (error) {
        console.error('Error starting timer:', error);
        return 'Error starting timer';
    }
}

export async function stopTimer(id: string, stop: Date, elapsedtime: number) {
    try {
        await db.query('UPDATE projects SET stop = $1, elapsedtime = elapsedtime + $2 WHERE id = $3', [stop, elapsedtime, id]);
        console.log('Timer stopped');
        return 'Timer stopped';
    } catch (error) {
        console.error('Error stopping timer:', error);
        return 'Error stopping timer';
    }
}