import { z } from "zod";

// Create zod validation schema for validation
export const createIssueSchema = z.object({
    title: z.string().min(1, 'Title is Required').max(255),
    description: z.string().min(1, 'Description is Required')
});
