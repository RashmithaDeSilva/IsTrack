import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { createIssueSchema } from "@/app/validations/validationSchemas";


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