"use server"

import { z } from "zod";


// Define the Zod schema
const NewspaperSchema = z.object({
    email: z
        .string()
        .email({ message: "Invalid email address" })
});

export async function newspaperFormSubmit(prevState: any, formData: FormData) {
    try {
        console.log("prev", prevState);
        console.log("form", formData);

        await new Promise((resolve) => setTimeout(resolve, 2000))

        const result = NewspaperSchema.safeParse({
            email: formData.get("email"),
        });

        if (result.success) {
            console.log("Validation succeeded:", result.data);
            return { message: "saved", success: true }
        } else {
            return { message: "type_error", success: false }
        }
    } catch {
        return { message: "catch_error", success: false }
    }
}