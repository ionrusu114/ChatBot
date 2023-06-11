import {NextRequest, NextResponse} from "next/server";
import {rateLimiter} from "@/lib/rate-limiter";

export async function middleware(req: NextRequest){
    const ip = req.ip ?? '127.0.0.1'

    try {
        const { success } = await rateLimiter.limit(ip)

        if(!success) return new NextResponse('Pentru o securitate mai buna, nu puteti transmite mesaje mai rapid de odata la 10s !')
        return NextResponse.next()
    }catch (error){
        return new NextResponse('Ne scuzati, ceva este in neregula cu procesarea mesajului dumneavoastra!\n Incercati mai tirziu!')
    }
}

export const config = {
    matcher: '/api/message/:path*',
}