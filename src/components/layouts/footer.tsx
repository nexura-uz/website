import { havelock } from "@/app/fonts"
import { InstagramSvgIcon, TelegramSvgIcon, YoutubeSvgIcon } from "@/components/svg-icons";
import { MapPinIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo_img from "@/app/logo.png";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white border-t border-primary flex flex-col gap-3 py-5 px-3 items-center justify-center">

            <div className="max-w-7xl w-full px-2 grid grid-cols-2 lg:grid-cols-4 pb-3 border-b border-gray-700">
                <div className="col-span-3 mb-5 lg:mb-0">
                    <Link href="/" className={`text-2xl flex items-center mb-3 ${havelock.className}`}>
                        <Image
                            src={logo_img}
                            width={40}
                            height={40}
                            alt="logo"
                            className="rounded-full mr-2"
                        />
                        NEXURA
                    </Link>
                    <p className="text-sm text-gray-300 max-w-md">
                        Biznesingiz uchun barcha turdagi dasturiy yechimlar va ularga xos dizayn.
                    </p>

                    <div className="flex gap-3 pt-2 mt-5 lg:mt-10">
                        <Link href="" target="_blank">
                            <InstagramSvgIcon className="w-8 h-8" />
                        </Link>
                        <Link href="" target="_blank">
                            <TelegramSvgIcon className="w-8 h-8" />
                        </Link>
                        <Link href="" target="_blank">
                            <YoutubeSvgIcon className="w-8 h-8" />
                        </Link>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-3">Kontakt</h3>
                    <div className="flex items-center gap-2 lg:gap-5 mb-5 text-sm">
                        <PhoneIcon className="w-6 h-6 text-primary" />

                        <div>
                            <p className="font-bold">
                                Telefon raqam:
                            </p>
                            <p>
                                +998 (93) 975-68-83
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 lg:gap-5 mb-5 text-sm">
                        <MapPinIcon className="w-6 h-6 text-primary" />

                        <div>
                            <p className="font-bold">
                                Manzil:
                            </p>
                            <p>
                                Marg'ilon shahar, Turkiston
                            </p>
                        </div>
                    </div>


                </div>
            </div>

            <div className={`${havelock.className}`}>
                &copy;NEXURA. 2025{" "}
            </div>
        </footer>
    )
}