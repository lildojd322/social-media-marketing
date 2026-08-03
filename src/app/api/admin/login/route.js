import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import crypto from 'crypto'
import { createTransport } from 'nodemailer'
import { redis } from "@/lib/redis"


export async function POST(request) {
    const body = await request.json()
    const { email, password } = body


    if (email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD) {
        return NextResponse.json({ success: false, error: 'I dati non corrispondono.' }, { status: 400 })
    }


    const emailCode = crypto.randomInt(100000, 999999).toString()


    try {
        await redis.set(`auth_code:${email}`, emailCode, { ex: 300 })


       

        const transport = createTransport({
            host: process.env.EMAIL_SERVER_HOST,
            port: Number(process.env.EMAIL_SERVER_PORT),
            secure: true,
            auth: {
                user: process.env.EMAIL_SERVER_USER,
                pass: process.env.EMAIL_SERVER_PASSWORD,
            }
        })

        await transport.sendMail({
            from: process.env.EMAIL_FROM,
            to: process.env.EMAIL_FROM,
            subject: 'email confirmation',
            html: `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>Conferma e-mail</title>
    </head>
    <body style="margin: 0; padding: 40px 20px; background-color: #f4eae1; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #1a1a1a; -webkit-font-smoothing: antialiased;">
        
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 500px; background-color: #f4eae1;">
            <tr>
                <td style="padding-bottom: 20px; font-size: 11px; letter-spacing: 1.5px; color: #7a736d; text-transform: uppercase; font-weight: bold;">
                    // ECOSISTEMA DIGITALE
                </td>
            </tr>
            <tr>
                <td style="padding-bottom: 30px; font-size: 26px; line-height: 1.2; font-weight: 700; color: #1a1a1a; letter-spacing: -0.5px;">
                    L'ecosistema digitale che fa crescere il tuo brand
                </td>
            </tr>
            <tr>
                <td style="padding: 30px; border: 1px solid #dcd1c4; border-radius: 12px; background-color: #fcf6f0; text-align: center;">
                    <p style="margin: 0 0 20px 0; font-size: 15px; line-height: 1.5; color: #4a4a4a;">
                        Codice di conferma per accedere al pannello di controllo:
                    </p>
                    
                    <div style="font-size: 38px; font-weight: 800; letter-spacing: 8px; color: #123c24; margin: 15px 0; font-family: monospace;">
                        ${emailCode}
                    </div>
                    
                    <p style="margin: 20px 0 0 0; font-size: 12px; color: #8a837d;">
                        Il codice è valido per 5 minuti. Non condividerlo сon nessuno.
                    </p>
                </td>
            </tr>
            <tr>
                <td style="padding-top: 40px; text-align: center; font-size: 11px; color: #9a938d; border-top: 1px solid #dcd1c4; margin-top: 30px;">
                    © ${new Date().getFullYear()} Admin Dashboard. Tutti i diritti riservati.
                </td>
            </tr>
        </table>

    </body>
    </html>
    `

        })
        return NextResponse.json({
            success: true,
            step: 'VERIFICATION_REQUIRED',
            email: email
        })


    } catch (error) {
        return NextResponse.json({ success: false, error: 'error' }, { status: 500 })
    }


}