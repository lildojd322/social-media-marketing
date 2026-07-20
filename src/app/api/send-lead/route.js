import { NextResponse } from 'next/server'

export async function POST(request) {
    try {
        const { name, email, message } = await request.json()


        const BOT_TOKEN = `${process.env.TELEGRAM_BOT_TOKEN}`
        const CHAT_ID = `${process.env.TELEGRAM_GROUP_ID}`


        const telegramMessage = `
<b>🔔 Новая заявка!</b>
<b>Имя:</b> ${name}
<b>Email:</b> ${email}
<b>Сообщение:</b> ${message}
`;

        const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`

        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: telegramMessage,
                parse_mode: "HTML",
            })
        })



        if (!response.ok) {
            throw new Error("Errore durante l'invio all'API di Telegram");
        }

        return NextResponse.json({ success: true });

    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}