import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

//read all posts
export async function GET() {
    const posts = await prisma.BlogEntry.findMany({
        where: {
            isPublished:true
        },
        orderBy: [
            {
                createdAt: 'desc',
            }
        ]
    })
    if (!posts) {
        return NextResponse.json({ message: 'No Posts Found', code: 404 })
    }
    else {
        return NextResponse.json(posts)
    }
}

//create new post
export async function POST(request) {
    try {
        const json = await request.json()
        const blogentry = await prisma.BlogEntry.create({
            data: json
        })
        return new NextResponse(JSON.stringify(blogentry), {
            status: 201, headers: {
                "Content-Type": "application/json"
            }
        })

    }
    catch (err) {
        console.log(err.message)
        return new NextResponse(err.message, { statuscode: 500 })
    }
}