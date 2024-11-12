"use client"
import { Link } from "@/i18n/routing"
import Image from "next/image"
import LanguageBlock from "@/components/custom-ui/language-block"
import ThemeSwitcher from "@/components/custom-ui/theme-switcher-block"
import { menus } from "@/lib/contstants"
import { useTranslations } from "next-intl"
import { Menu } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

export default function Navbar() {
    const t = useTranslations("Menus")

    return (
        <div className="fixed top-0 left-0 right-0 flex item-center py-3 bg-none h-[100px] px-4 !z-20">
            <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 w-full flex items-center jusify-between gap-5 px-5 py-3 border rounded-2xl shadow-lg shadow-green/30 bg-background text-primary">
                <div className="flex items-center gap-2">
                    <Link href={"/"} className="flex items-center gap-1 text-xl font-havelock">
                        <Image src={"/logo.svg"} width={40} height={40} alt={""} />
                        <h3>Nexura</h3>
                    </Link>
                </div>

                <div className="flex items-center gap-10 justify-end w-full">
                    <div className="hidden lg:flex items-center gap-5">
                        {menus.map((item) => (
                            <div key={item}>
                                <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-primary text-lg">
                                    {t(`${item}`)}
                                </Link>
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center gap-2 md:gap-3 text-lg">
                        <LanguageBlock />
                        <Separator orientation="vertical" />
                        <ThemeSwitcher />
                        <Separator orientation="vertical" />
                        <VerticalMenu />
                    </div>

                </div>
            </div>
        </div>
    )
}

function VerticalMenu() {
    const t = useTranslations("Menus")

    return (
        <Sheet>
            <SheetTrigger asChild className="cursor-pointer block lg:hidden">
                <Menu />
            </SheetTrigger>
            <SheetContent className="flex flex-col justify-between">
                <div>
                    <SheetHeader>
                        <SheetTitle>
                            <Link href={"/"} className="flex items-center gap-1 text-xl font-havelock">
                                <Image src={"/logo.svg"} width={40} height={40} alt={""} />
                                <h3>Nexura</h3>
                            </Link>
                        </SheetTitle>
                    </SheetHeader>

                    <div className="flex flex-col gap-5 py-10">
                        {menus.map((item) => (
                            <div key={item}>
                                <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-primary text-lg">
                                    {t(`${item}`)}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-primary text-lg w-full">
                    <Link target="_blank" href={"tel:+998939756883"} className="text-2xl pb-5 block">+998 (93) 975 68 83</Link>

                    <div className="cursor-pointer select-none bg-green hover:bg-dark-green px-5 py-3 text-center rounded-xl">
                        Call to us
                    </div>
                </div>

            </SheetContent>
        </Sheet>
    )
}