import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { redis } from "@/lib/redis"


export async function POST(request) {

    try {
        const body = await request.json()
        const { email, code } = body


        if (!email || !code) {
            return NextResponse.json({ success: false, error: 'Dati mancanti.' }, { status: 400 })
        }


        const rawSavedCode = await redis.get(`auth_code:${email}`)
        const savedCode = rawSavedCode ? String(rawSavedCode) : null

        if (!savedCode || savedCode !== code.trim()) {
            return NextResponse.json({ success: false, error: 'Codice errato o scaduto.' }, { status: 400 })
        }

        await redis.del(`auth_code:${email}`)


        const cookiesStore = await cookies()

        cookiesStore.set('admin_session', process.env.ADMIN_SECRET_TOKEN, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 2,
            path: '/'
        })


        return NextResponse.json({ success: true })

    } catch (error) {
        return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 })
    }


}