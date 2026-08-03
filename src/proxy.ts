import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { redis } from '@/lib/redis'

export const config = {
    matcher: ['/', '/api/:path*']
}

async function handleRateLimit(request: NextRequest) {


    const ip = request.headers.get('x-forwarded-for') ||
        request.headers.get('x-real-ip') ||
        '127.0.0.1'

    const redisKey = `ratelimit:${ip}`
    try {
        const currentRequests = await redis.incr(redisKey)
        if (currentRequests === 1) {
            await redis.expire(redisKey, 60)
        }

        if (currentRequests > 10) {
            return new NextResponse(
                JSON.stringify({ error: 'Too many requests. Please try again later.' }),
                { status: 429, headers: { 'Content-Type': 'application/json' } }
            )
        }
    } catch (error) {
        console.error('Upstash Redis Error:', error)
    }

    return null
}


export async function proxy(request: NextRequest) {

    const { pathname } = request.nextUrl




    if (pathname.startsWith('/api')) {
        const limitResponse = await handleRateLimit(request)
        if (limitResponse) {
            return limitResponse
        }
    }

    if (pathname.startsWith('/admin/dashboard')) {
        const adminCookie = request.cookies.get('admin_session')?.value

        if (!adminCookie || adminCookie !== process.env.ADMIN_SECRET_TOKEN) {
            return NextResponse.redirect(new URL('/admin', request.url))
        }
    }
    if (pathname.startsWith('/admin/VerifitedForm')) {
        const pathname = request.nextUrl.pathname
        const email = request.nextUrl.searchParams.get('email')
        if (!email) {
            return NextResponse.redirect(new URL('/admin', request.url))
        }
        const hasActiveCode = await redis.exists(`auth_code:${email}`)

        if (!hasActiveCode) {
            return NextResponse.redirect(new URL('/admin', request.url))
        }

    }

    return NextResponse.next()
}