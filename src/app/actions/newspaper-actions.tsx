"use server"

import { CustomResponse, IResponse } from "@/models";
import { z } from "zod";

const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN;
const telegramChatId = process.env.TELEGRAM_CHAT_ID;

// Define the Zod schema
const NewspaperSchema = z.object({
    email: z
        .string()
        .email({ message: "Invalid email address" })
});

export async function newspaperFormSubmit(prevState: any, formData: FormData): Promise<IResponse> {
    try {
        console.log("prev", prevState);
        console.log("form", formData);

        const result = NewspaperSchema.safeParse({
            email: formData.get("email"),
        });

        if (result.success) {
            if (!telegramBotToken || !telegramChatId)
                return CustomResponse("env_error", false)

            const text = `📰 Nexura.uz Newspaper form:\n\n📧: ${result.data.email}`;

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