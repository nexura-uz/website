"use client"

import { usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Earth } from "lucide-react";
import Image from "next/image";
import clsx from "clsx";

const languages = [
    {
        key: "uz",
        label: "O'zbek",
        image: "/images/languages/uz.png"
    },
    {
        key: "ru",
        label: "Русский",
        image: "/images/languages/ru.png"
    },
    {
        key: "en",
        label: "English",
        image: "/images/languages/en.png"
    },
]

export default function LanguageBlock() {
    const locale = useLocale();
    const router = useRouter();
    const params = useParams();
    const pathname = usePathname();

    const changeLang = (lang: string) => {
        router.replace(
            // @ts-expect-error -- TypeScript will validate that only known `params`
            // are used in combination with a given `pathname`. Since the two will
            // always match for the current route, we can skip runtime checks.
            { pathname, params },
            { locale: lang }
        );
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="outline-none"><Earth /></DropdownMenuTrigger>
            <DropdownMenuContent>
                {languages.map(item =>
                    <DropdownMenuItem key={item.key} onClick={() => changeLang(item.key)} className={clsx("cursor-pointer select-none", locale === item.key ? "bg-accent" : "")}>
                        <Image width={16} height={16} src={`${item.image}`} alt={item.label} />
                        {item.label}
                    </DropdownMenuItem>
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}