"use client"
import { contactFormSubmit } from "@/app/actions/contact-actions"
import { Loader2 } from "lucide-react"
import { useActionState } from "react"
import { useFormStatus } from "react-dom"
import { Input } from "@/components/ui/input"
import PhoneNumberInput from "@/components/ui/phone-number-input"
import { motion } from "framer-motion"
import clsx from "clsx"

const initialState = {
    message: "",
    success: false
}


export function ContactForm() {
    const [state, formAction] = useActionState(contactFormSubmit, initialState)

    return (
        <form action={formAction} className="flex flex-col gap-4">
            <PhoneNumberInput />
            <Input name="name" type="text" placeholder="Full name" className="bg-background text-primary" required />
            <Input name="email" type="email" placeholder="Email" className="bg-background text-primary" required />
            <SubmitButton />
            {state?.message ? (
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={clsx("mt-4", state?.success ? "text-green-600" : "text-red-600")}
                >
                    {state?.message}
                </motion.p>
            ) : ""
            }
        </form >
    )
}

function SubmitButton() {
    const { pending } = useFormStatus()

    return (
        <motion.button
            aria-disabled={pending}
            disabled={pending}
            type="submit"
            whileHover={{ scale: 1.05, backgroundColor: '#0c8d68' }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green hover:bg-dark-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green"
        >
            {pending && <Loader2 className="animate-spin" />}
            Submit
        </motion.button>
    )
}