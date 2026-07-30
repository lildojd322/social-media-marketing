import { NextResponse } from "next/server";
import { updateBidState } from '../../../../lib/db'

export async function POST(request) {
    const { searchParams } = new URL(request.url)
    const idString = searchParams.get('id')

    if (!idString) {
        return NextResponse.json({ success: false, error: 'Missing id parameter' }, { status: 400 })
    }

    const id = parseInt(idString, 10)

    try {
        const result = await updateBidState(id)

        if (!result.success) {
            return NextResponse.json({ success: false, error: result.error }, { status: 404 })
        }

        return NextResponse.json({ success: true }, { status: 200 })

    } catch (error) {
        return NextResponse.json({ success: false, error: 'server error' }, { status: 500 })
    }
}