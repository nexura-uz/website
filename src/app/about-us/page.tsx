import { Metadata } from "next";
import { GlobeIcon, PhoneIcon, InstagramIcon, ShoppingBagIcon, SendIcon, YoutubeIcon } from "lucide-react"

const nexura_links = [
    {
        icon: "nexura",
        social: "Website",
        link: "https://nexura.uz",
    },
    {
        icon: "phone",
        social: "Telefon raqam",
        link: "tel:+998939756883",
    },
    {
        icon: "instagram",
        social: "Instagram",
        link: "https://instagram.com/nexura_uz",
    },
];

const techvision_links = [
    {
        icon: "shop",
        social: "Website",
        link: "https://tech-vision.uz",
    },
    {
        icon: "instagram",
        social: "Instagram",
        link: "https://instagram.com/techvision_uz",
    },
    {
        icon: "telegram",
        social: "Telegram",
        link: "https://t.me/techvision_uz",
    },
    {
        icon: "youtube",
        social: "Youtube",
        link: "https://youtube.com/@techvision_uz",
    },
];

const getIcon = (iconName: string) => {
    switch (iconName) {
        case "nexura":
            return <GlobeIcon className="w-6 h-6" />
        case "phone":
            return <PhoneIcon className="w-6 h-6" />
        case "instagram":
            return <InstagramIcon className="w-6 h-6" />
        case "shop":
            return <ShoppingBagIcon className="w-6 h-6" />
        case "telegram":
            return <SendIcon className="w-6 h-6" />
        case "youtube":
            return <YoutubeIcon className="w-6 h-6" />
        default:
            return <GlobeIcon className="w-6 h-6" />
    }
}

const LinkCard = ({ icon, social, link }: { icon: string; social: string; link: string }) => (
    <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md hover:border-gray-200 transition-all duration-200 group"
    >
        <div className="flex-shrink-0 p-3 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg group-hover:from-blue-100 group-hover:to-indigo-100 transition-colors">
            {getIcon(icon)}
        </div>
        <div className="flex-1">
            <h3 className="font-semibold group-hover:text-primary transition-colors">{social}</h3>
            <p className="text-sm text-gray-500 truncate">{link.replace(/^https?:\/\//, "").replace(/^tel:/, "")}</p>
        </div>
    </a>
)

const CompanySection = ({
    title,
    links,
    logoUrl,
    description,
}: {
    title: string
    links: typeof nexura_links
    logoUrl: string
    description: string
}) => (
    <div className="w-full bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-8 text-center border-b border-gray-50">
            <img src={logoUrl || "/placeholder.svg"} alt={`${title} logo`} className="w-12 h-12 object-contain rounded-xl mx-auto mb-4" loading="lazy" />
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <p className="text-gray-500 text-sm max-w-md mx-auto">{description}</p>
        </div>
        <div className="p-6 space-y-3">
            {links.map((linkItem, index) => (
                <LinkCard key={index} {...linkItem} />
            ))}
        </div>
    </div>
)

export const metadata: Metadata = {
    title: "Nexura - Biz haqimizda",
    description: "Biz haqimizda",
};

export default function Page() {
    return (
        <section className="py-10 lg:py-16 bg-background text-primary min-h-screen">
            <div className="container mx-auto px-3">
                <div className='flex flex-col lg:flex-row gap-5'>
                    <CompanySection
                        title="NEXURA"
                        links={nexura_links}
                        logoUrl="/nexura.png"
                        description="Biznesingiz uchun barcha turdagi dasturiy yechimlar va ularga xos dizayn."
                    />

                    <CompanySection
                        title="TECH VISION"
                        links={techvision_links}
                        logoUrl="/techvision.png"
                        description="Barcha turdagi kompyuter, noutbuk, printer va boshqa texnikalarni qulay narxlarda sotib oling."
                    />
                </div>
            </div>
        </section>
    )
}
