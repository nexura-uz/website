import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ReactNode } from "react";
import '@/app/style.css';
import localFont from "next/font/local"
import Navbar from "@/components/layouts/base/navbar";
import clsx from "clsx";
import Footer from "@/components/layouts/base/footer";

type Props = {
    children: ReactNode;
    locale: string;
};

const gilroy = localFont({ src: "./../assets/fonts/Gilroy Regular.woff", variable: "--font-gilroy" })
const havelock = localFont({ src: "./../assets/fonts/Havelock Titling Medium.woff", variable: "--font-havelock" })

export default async function BaseLayout({ children, locale }: Props) {
    const messages = await getMessages();

    return (
        <html className={clsx(
            "min-h-screen flex flex-col justify-between",
            gilroy.variable,
            havelock.variable
        )} translate="no" lang={locale}>
            <body className={"flex h-full flex-col text-black font-gilroy bg-[#f3f4f6]"}>
                <NextIntlClientProvider messages={messages}>
                    <Navbar />
                    <div className="min-h-screen pt-[100px]">
                        {children}
                    </div>
                    <Footer />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
