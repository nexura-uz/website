import Link from "next/link";

export default function NotFound() {
    return (
        <div className="w-screen h-screen flex flex-col gap-5 items-center justify-center">
            <h3 className="text-3xl pb-3">404 - Sahifa topilmadi</h3>
            <Link
                href="/"
                className="bg-primary inline-flex h-12 items-center justify-center rounded-xl px-8 text-sm font-medium text-white shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-105"
            >
                Bosh sahifa
            </Link>
        </div>
    )
}