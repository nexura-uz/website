import Image from "next/image";
import logo_img from "@/app/logo.png";
import Link from "next/link";
import { havelock } from "@/app/fonts"
import { ImagesIcon, PhoneIcon } from "lucide-react";
import { phone_number } from "@/utils/constants";

export default function Navbar() {
    return (
        <nav className="sticky top-0 lg:top-2 z-50 py-2 lg:rounded-t-xl rounded-b-xl shadow-sm shadow-primary/60 flex items-center justify-between max-w-7xl w-full mx-auto z-20 bg-gray-900">
            <Link href="/" className={`flex items-center text-xl px-3 ${havelock.className}`}>
                <Image
                    src={logo_img}
                    width={32}
                    height={32}
                    alt="logo"
                    className="rounded-full mr-2"
                />
                NEXURA
            </Link>

            <div className="flex gap-3 items-center justify-end px-3">
                <Link href="/portfolio" className="hover:text-primary">
                    <ImagesIcon className="w-6 h-6" />
                </Link>
                <a href={`tel:${phone_number}`} className="hover:text-primary">
                    <PhoneIcon className="w-6 h-6" />
                </a>
            </div>
        </nav>
    )
}