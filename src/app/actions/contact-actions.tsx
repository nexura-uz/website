"use server"

import { CustomResponse, IResponse } from "@/models";
import { z } from "zod";

const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN;
const telegramChatId = process.env.TELEGRAM_CHAT_ID;

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

export async function contactFormSubmit(prevState: any, formData: FormData): Promise<IResponse> {
    try {
        console.log("prev", prevState);
        console.log("form", formData);

        const result = ContactSchema.safeParse({
            name: formData.get("name"),
            phoneNumber: formData.get("phoneNumber"),
            email: formData.get("email"),
        });

        if (result.success) {
            if (!telegramBotToken || !telegramChatId)
                return CustomResponse("env_error", false)

            const text = `📞 Nexura.uz Request call form:\n\n👤: ${result.data.name}\n📱: ${result.data.phoneNumber}\n📧: ${result.data.email}`;

            const telegramUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;
            const response = await fetch(telegramUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    chat_id: telegramChatId,
                    text,
                }),
            });

            if (!response.ok)
                return CustomResponse("fetch_error", false)

            return CustomResponse("sent", true)
        } else {
            return CustomResponse("type_error", false)
        }
    } catch {
        return CustomResponse("catch_error", false)
    }
}