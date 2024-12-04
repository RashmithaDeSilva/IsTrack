import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/prisma/client";


// Create zod validation schema for validation
const createIssueSchema = z.object({
    title: z.string().min(1, 'Title is Required').max(255),
    description: z.string().min(1, 'Description is Required')
});

export async function POST(request: NextRequest) {
    // Get request
    const body = await request.json();

    // Validat request body using zode validation schema that created for this
    // safeParse desent return error parse will return error
    const validation = createIssueSchema.safeParse(body);

    // If validation error return response
    if (!validation.success)
        return NextResponse.json(validation.error.format(), { status: 400 });

    // Create new issue in database using prisma client
    const newIssue = await prisma.issue.create({
        data: {
            title: body.title,
            description: body.description
        }
    });

    // Return success response
    return NextResponse.json(newIssue, { status: 201 });
}