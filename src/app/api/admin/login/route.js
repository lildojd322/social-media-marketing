import { NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function POST(request) {
    const body = await request.json()
    const { email, password } = body


    if (email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD) {
        return NextResponse.json({ success: false, error: 'I dati non corrispondono.' }, { status: 400 })
    }

    const cookiesStore = await cookies()

    cookiesStore.set('admin_session', process.env.ADMIN_SECRET_TOKEN, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 2,
        path: '/'
    })

    return NextResponse.json({ success: true })
}