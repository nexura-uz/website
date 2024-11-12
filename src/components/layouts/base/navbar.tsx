"use client"
import { Link } from "@/i18n/routing"
import Image from "next/image"
import ChangeLanguageBlock from "@/components/custom-ui/change-language-block"

export default function Navbar() {
    return (
        <div className="fixed top-0 left-0 right-0 flex item-center py-3 bg-none h-[100px] px-4 !z-20">
            <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 w-full flex items-center jusify-between gap-5 px-5 py-3 border rounded-2xl shadow-lg shadow-green/30 bg-white">
                <div className="flex items-center gap-2">
                    <Link href={"/"} className="flex items-center gap-1 text-light-black text-xl font-havelock">
                        <Image src={"/logo.svg"} width={40} height={40} alt={""} />
                        <h3>Nexura</h3>
                    </Link>
                </div>

                <div className="flex items-center justify-end w-full">
                    <ChangeLanguageBlock />
                </div>
            </div>
        </div>
    )
}