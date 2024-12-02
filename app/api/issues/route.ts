import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/prisma/client";


// Create zod validation schema for validation
const createIssueSchema = z.object({
    title: z.string().min(1).max(255),
    discription: z.string()
});

export async function POST(request: NextRequest) {
    // Get request
    const body = await request.json();

    // Validat request body using zode validation schema that created for this
    // safeParse desent return error parse will return error
    const validation = createIssueSchema.safeParse(body);

    // If validation error return response
    if (!validation.success)
        return NextResponse.json(validation.error.errors, { status: 400 });

    // Create new issue in database using prisma client
    const newIssue = await prisma.issue.create({
        data: {
            title: body.title,
            discription: body.discription
        }
    });

    // Return success response
    return NextResponse.json(newIssue, { status: 201 });
}