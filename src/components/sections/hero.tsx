import { phone_number } from "@/utils/constants";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="flex items-center justify-center w-full min-h-[50vw] px-3 lg:px-0 py-10">
            <div>
                <h1 className="text-5xl font-bold text-center">Kelajak ilovalarini bugun yaratish</h1>
                <div className="w-24 h-1 mx-auto bg-primary my-4"></div>

                <p className="text-lg text-gray-400 max-w-2xl mx-auto text-center">
                    Biznesingiz uchun barcha turdagi dasturiy yechimlar va ularga xos dizayn.
                </p>

                <div className="flex flex-row gap-4 justify-center items-center pt-8">
                    <Link
                        href={`tel:${phone_number}`}
                        target="_blank"
                        className="bg-primary inline-flex h-12 items-center justify-center rounded-xl px-8 text-sm font-medium text-white shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-105"

                    >
                        Bog&apos;lanish
                    </Link>
                    <Link
                        href={"/portfolio"}
                        className="cursor-pointer inline-flex h-12 items-center justify-center rounded-xl border border-gray-600 bg-transparent px-8 text-sm font-medium text-gray-300 shadow-sm transition-all duration-200 hover:bg-gray-800 hover:text-white hover:border-gray-500"
                    >
                        Bizning loyihalar
                    </Link>
                </div>
            </div>
        </section>
    )
}