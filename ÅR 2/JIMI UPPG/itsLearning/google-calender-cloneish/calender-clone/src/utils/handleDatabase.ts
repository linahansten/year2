'use server'

import { db } from './db';

export async function getData() {
    const data = await db.query('SELECT * FROM events');
    return data.rows;
}

export async function saveData(eventName: string, selecteddate: string) {
    try {
        console.log(eventName);
        await db.query('INSERT INTO events(selecteddate, eventName) VALUES ($1, $2)', [selecteddate, eventName]);
        return 'Saved successfully';
    } catch (error) {
        console.log(error);
        return 'Something went wrong';
    }
}

export async function updateData(id: string, eventName: string, selecteddate: string) {
    try {
        await db.query('UPDATE events SET selecteddate = $1, eventName = $2 WHERE id = $3', [selecteddate, eventName, id]);
        return 'Updated';
    } catch (error) {
        console.log(error);
        return 'Something went wrong';
    }
}

export async function deleteData(id: string) {
    try {
        await db.query('DELETE FROM events WHERE id = $1', [id]);
        return 'Deleted';
    } catch (error) {
        console.log(error);
        return 'Something went wrong';
    }
}

export async function saveCredentials(username: string, password: string, id:string) {
    try {
        await db.query('INSERT INTO users(username, password) VALUES ($1, $2, $3)', [username, password, id]);
        return 'Credentials saved successfully';
    } catch (error) {
        console.log(error);
        return 'Something went wrong while saving credentials';
    }
}

export async function getUserByUsername(username: string, password:string) {
    try {
        const result = await db.query('SELECT * FROM users WHERE username = $1 password = $2', [username, password]);
        return result.rows[0];
    } catch (error) {
        console.log(error);
        return null;
    }
}
