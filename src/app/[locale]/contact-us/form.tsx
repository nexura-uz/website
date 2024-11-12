"use client"
import { contactFormSubmit } from "@/app/actions/contact-actions"
import { Button } from "@/components/ui/button"
import { Loader2, Terminal } from "lucide-react"
import { useActionState } from "react"
import { useFormStatus } from "react-dom"
import { AlertCircle } from "lucide-react"

import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"
import { Input } from "@/components/ui/input"
import PhoneNumberInput from "@/components/ui/phone-number-input"

const initialState = {
    message: "",
    success: false
}


export function ContactForm() {
    const [state, formAction] = useActionState(contactFormSubmit, initialState)

    return (
        <form action={formAction} className="flex flex-col gap-2 p-4 lg:p-8">
            <Input name="name" type="text" placeholder="Full name" className="bg-background text-primary" required />
            <PhoneNumberInput />
            <Input name="email" type="email" placeholder="Email" className="bg-background text-primary" required />
            <SubmitButton />
            {state?.message ? (
                state?.success ?
                    <Alert>
                        <Terminal className="h-4 w-4" />
                        <AlertTitle>Heads up!</AlertTitle>
                        <AlertDescription>
                            {state?.message}
                        </AlertDescription>
                    </Alert>
                    :
                    <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>Error</AlertTitle>
                        <AlertDescription>
                            {state?.message}
                        </AlertDescription>
                    </Alert>
            ) : ""
            }
        </form>
    )
}

function SubmitButton() {
    const { pending } = useFormStatus()

    return (
        <Button type="submit" aria-disabled={pending} disabled={pending} className="w-full bg-[#0ea47a] hover:bg-dark-green text-white">
            {pending && <Loader2 className="animate-spin" />}
            Submit
        </Button>
    )
}