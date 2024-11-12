import { Suspense } from "react";
import { ContactForm } from "./form";

export default async function Page() {
    return (
        <>
            <Suspense fallback={""}>
                <ContactForm />
            </Suspense>
        </>
    )
}

