import { NextResponse } from 'next/server'
import { redis } from '@/lib/redis'
export async function POST(request) {
    const ip = request.headers.get('x-forwarded-for') || '127.0.0.1'


    const redisKey = `ratelimit:${ip}`
    let currentRequests = 0

    try {
        currentRequests = await redis.incr(redisKey)
        if (currentRequests === 1) {
            await redis.expire(redisKey, 3600)
        }
    } catch (error) {
        console.error('Upstash Redis Error:', error)
    }

    if (currentRequests > 10) {
        return new NextResponse(
            JSON.stringify({ error: "È possibile inviare solo una richiesta all'ora. Per favore, riprova più tardi." }),
            { status: 429, headers: { 'Content-Type': 'application/json' } }
        )
    }





    try {


        const { name, email, message, honey_pot_field } = await request.json()


        if (honey_pot_field && honey_pot_field.trim() !== '') {
            return NextResponse.json({ success: true })
        }

        let bidNumber = 0
        bidNumber = await redis.incr('global:applications:total_count')
        const activeCount = await redis.incr('global:applications:active')


        const BOT_TOKEN = `${process.env.TELEGRAM_BOT_TOKEN}`
        const CHAT_ID = `${process.env.TELEGRAM_GROUP_ID}`


        const telegramMessage = `
<b>🔔 Новая заявка №${bidNumber}!</b>
⚠️<i>Необработанных заявок в очереди: ${activeCount}</i>
---------------------

👤 Имя: <b> ${name}</b>

---------------------

📪 Email: <b>${email}</b>

---------------------

📃 Сообщение: <b> ${message}</b>
`;

        const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`


        const replyMarkup = {
            inline_keyboard: [
                [
                    {
                        text: "✅ Просмотрено",
                        callback_data: `done:${appNumber}`
                    }
                ]
            ]
        }




        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: telegramMessage,
                parse_mode: "HTML",
                reply_markup: replyMarkup
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