import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

// Get By ID
export async function GET(request, { params }) {

    const id = Number(params.id)
    const post = await prisma.BlogEntry.findUnique({
        where: {
            id
        }
    })

    if (!post) {
        return NextResponse.json({ message: `No Post Found with ID ${id}`, code: 404 })
    } else {
        return NextResponse.json(post)
    }
}

// Update
export async function PATCH(request, { params }) {
    try {
        const id = Number(params.id)
        const post = await request.json()
        const updatedPost = await prisma.BlogEntry.update({
            where: {
                id
            },
            data: post
        })

        if (!updatedPost) {
            console.log('updated post null')
            return NextResponse.json({ message: `No Post Found with ID ${id}`, code: 404 })
        } else {
            return NextResponse.json(post)
        }
    }
    catch (err) {
        console.log(err.message)
        return new NextResponse(err.message, { statuscode: 500 })
    }
}

// Delete
export async function DELETE(request, { params }) {
    try {
        const id = Number(params.id)
        if (!id) {
            return NextResponse.json({ message: `No User Found with ID ${id}`, code: 404 })
        } else {
            await prisma.BlogEntry.delete({
                where: {
                    id
                }
            })
            return new NextResponse(null, { status: 204 })

        }
    }
    catch (err) {
        return new NextResponse(err.message, { statuscode: 500 })
    }
}
