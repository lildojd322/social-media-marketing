import { NextResponse } from "next/server"
import { fetchBidsFromDB } from '../../../../lib/db'



export async function GET(params) {
    try {
        const bids = await fetchBidsFromDB()
        return NextResponse.json(bids)
    } catch (error) {
        console.error(error)
        return NextResponse.json({ error: "db error" }, { status: 500 })
    }
}