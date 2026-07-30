import mysql from 'mysql2/promise'
import { cache } from 'react'
import { success } from 'zod'


const dbConfig = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: {
        rejectUnauthorized: false
    }
}

if (!global.mysqlPool || global.mysqlPool._closed) {
    global.mysqlPool = mysql.createPool(dbConfig)
}

const pool = global.mysqlPool


export const fetchBidsFromDB = cache(async () => {
    const [rows] = await pool.execute(
        `select * from requests`
    )
    const activeCount = rows.filter(bid => !bid.is_archived).length

    return {
        bids: rows,
        activeCount: activeCount
    }
    return rows
})

export const forwardBidToDB = async (email, name, message) => {
    try {
        const [result] = await pool.execute(
            `INSERT INTO requests (email, name, message) VALUES (?, ?, ?)`,
            [email, name, message]
        )

        return {
            success: true,
            insertId: result.insertId
        }
    } catch (error) {
        console.error(error)
        return {
            success: false,
            error: 'error'
        }
    }
}

export const updateBidState = async (id) => {
    try {
        const [rows] = await pool.execute(
            `UPDATE requests SET is_archived = true WHERE id = ?`, [id]
        )

        return {
            success: true,
        }
    } catch (error) {
        console.error(error)
        return {
            success: false,
            error: 'error'
        }
    }



}