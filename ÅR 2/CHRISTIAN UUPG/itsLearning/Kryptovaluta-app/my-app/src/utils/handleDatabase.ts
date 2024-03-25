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

export async function startTimer(id: any, start:Date) {
    try {
        const startTime = new Date();
        await db.query('INSERT INTO projects (id, start) VALUES ($1, $2)', [start ,id]);
        return 'Timer started';
    } catch (error) {
        console.error('Error starting timer:', error);
        return 'Something went wrong';
    }
}

export async function stopTimer(id: any) {
    try {
        const stopTime = new Date();
        await db.query('UPDATE projects SET stop = $1 WHERE id = $2 AND stop IS NULL', [stop, id]);
        return 'Timer stopped';
    } catch (error) {
        console.error('Error stopping timer:', error);
        return 'Something went wrong';
    }
}