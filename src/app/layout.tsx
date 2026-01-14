import type { Metadata } from "next";
import "./globals.css";
import { gilroy, havelock } from "@/app/fonts"
import Image from "next/image";
import logo_img from "@/app/logo.png";
import Link from "next/link";
import { MapPinIcon, PhoneIcon } from "lucide-react";
import { phone_number } from "@/utils/constants";
import { InstagramSvgIcon, YoutubeSvgIcon } from "@/components/svg-icons";


export const metadata: Metadata = {
  title: "Nexura",
  description: "Dasturiy yechimlar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz">
      <body className={`min-h-screen flex flex-col justify-between text-black ${gilroy.className}`}>
        <nav className="sticky shadow-sm shadow-primary/60 w-full z-20 bg-white">
          <div className="py-3 w-full flex items-center justify-between container mx-auto">
            <Link href="/" className={`flex items-center text-xl text-primary px-3  ${havelock.className}`}>
              <Image
                src={logo_img}
                width={32}
                height={32}
                alt="logo"
                className="mr-2"
              />
              NEXURA
            </Link>

            <div className="flex gap-3 items-center justify-end px-3">
              <Link target="_blank" href={`tel:${phone_number}`} className="hover:text-primary flex items-center gap-3 shadow shadow-primary/30 px-3 py-1 rounded-lg">
                <PhoneIcon className="w-6 h-6" />
                <span className={`hidden lg:block text-lg font-bold`}>(93) 975 6883</span>
              </Link>
            </div>
          </div>
        </nav>

        {children}

        <footer className="border-t border-primary flex flex-col gap-3 py-5 px-3 items-center justify-center">
          <div className="container w-full px-2 grid grid-cols-2 lg:grid-cols-4 pb-3 border-b border-gray-200">
            <div className="col-span-3 mb-5 lg:mb-0">
              <Link href="/" className={`text-2xl flex items-center mb-3 text-primary ${havelock.className}`}>
                <Image
                  src={logo_img}
                  width={40}
                  height={40}
                  alt="logo"
                  className="rounded-full mr-2"
                />
                NEXURA
              </Link>
              <p className="text-sm text-gray max-w-md">
                Biznesingiz uchun barcha turdagi dasturiy yechimlar va ularga xos dizayn.
              </p>

              <div className="flex gap-3 pt-2 mt-5 lg:mt-10">
                <Link href="https://www.instagram.com/nexura_uz/" target="_blank">
                  <InstagramSvgIcon className="w-8 h-8" />
                </Link>
                {/* <Link href="" target="_blank">
                  <TelegramSvgIcon className="w-8 h-8" />
                </Link> */}
                <Link href="https://www.youtube.com/@nexura_uz" target="_blank">
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

          <div className={`${havelock.className} text-primary`}>
            &copy;NEXURA. 2025{" "}
          </div>
        </footer>
      </body>
    </html>
  );
}
