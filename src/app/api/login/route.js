import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request) {

    const json = await request.json()
    const username = json.username
    const password = json.password
    const user = await prisma.membership.findFirst({
        where: {
            AND: [
                { username: username },
                { password: password }
              ],
        }
    })
    if (!user) {
        return NextResponse.json({ message: `Invalid Username And Password`, code: 404 })
    } else {
        return NextResponse.json({ message: `Ok`, code: 200, userdata: user })
    }
}