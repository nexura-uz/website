"use server"

import { z } from "zod";


// Define the Zod schema
const ContactSchema = z.object({
    name: z
        .string()
        .min(1, { message: "Name is required and cannot be empty" })
        .trim(),

    phoneNumber: z
        .string()
        .regex(
            /^\+998 \d{2} \d{3} \d{2} \d{2}$/,
            { message: "Phone number must follow the format +998 (99) 999 99 99" }
        ),

    email: z
        .string()
        .email({ message: "Invalid email address" }),
});

export async function contactFormSubmit(prevState: any, formData: FormData) {
    try {
        console.log("prev", prevState);
        console.log("form", formData);

        await new Promise((resolve) => setTimeout(resolve, 2000))

        const result = ContactSchema.safeParse({
            name: formData.get("name"),
            phoneNumber: formData.get("phoneNumber"),
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