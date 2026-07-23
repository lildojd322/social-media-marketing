import { NextResponse } from 'next/server'
import { redis } from '@/lib/redis'


export async function POST(request) {
    try {

        const body = await request.json()


        if (!body.callback_query) {
            return NextResponse.json({ ok: true })
        }


        const callbackQuery = body.callback_query
        const callbackData = callbackQuery.data
        const message = callbackQuery.message
        const chatId = message.chat.id
        const messageId = message.message_id

        if (callbackData.startsWith('done:')) {
            const appNumber = callbackData.split(':')[1]
            const currentActive = await redis.decr('global:applications:active')

            if (currentActive < 0) {
                await redis.set('global:applications:active', 0)
            }

            let oldText = message.text || ""

            const safeOldText = oldText.replace(/</g, '&lt;').replace(/>/g, '&gt;');

            const updatedText = `<b>✅ ЗАЯВКА №${appNumber} ОБРАБОТАНА</b>\n\n` +
                `<s>${safeOldText}</s>`;

            const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN

            await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/editMessageText`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    chat_id: chatId,
                    message_id: messageId,
                    text: updatedText,
                    parse_mode: "HTML",
                    reply_markup: { inline_keyboard: [] }
                })
            })
            await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/answerCallbackQuery`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    callback_query_id: callbackQuery.id,
                    text: "Заявка заархивирована!"
                })
            })
        }
        return NextResponse.json({ ok: true })
    } catch (error) {
        console.error('Webhook error:', error)
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}