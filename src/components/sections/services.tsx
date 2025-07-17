const services = [
    {
        title: "Veb-sayt ishlab chiqish",
        description: "Foydalanuvchi tajribasi uchun optimallashtirilgan maxsus saytlar.",
        icon: ({ className }: { className?: string }) => (
            <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        title: "Mobil ilovalar ishlab chiqish",
        description: "iOS va Android qurilmalari uchun krossplatformali ilovalar.",
        icon: ({ className }: { className?: string }) => (
            <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        title: "UI/UX dizayni",
        description: "Foydalanuvchi tajribasini oshiruvchi dizayn.",
        icon: ({ className }: { className?: string }) => (
            <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
        ),
    },
    {
        title: "Elektron tijorat yechimlari",
        description: "Xavfsiz to'lov tizimlari bilan kengaytiriladigan onlayn do'konlar.",
        icon: ({ className }: { className?: string }) => (
            <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
    },
    {
        title: "Online yechimlar",
        description: "Masshtablanuvchi va xavfsiz ilovalar uchun ishonchli bulut (cloud) infratuzilmasi.",
        icon: ({ className }: { className?: string }) => (
            <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
        ),
    },
    {
        title: "Raqamli marketing",
        description: "Sizning onlayn ishtirokingizni va yetib borishingizni kuchaytiradigan strategik yechimlar.",
        icon: ({ className }: { className?: string }) => (
            <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
            </svg>
        ),
    },
]

export default function ServicesSection() {
    return (
        <section className="py-10 bg-gray-900 text-primary border-t border-primary">
            <div className="max-w-7xl mx-auto px-3 lg:px-0">
                <h2 className="text-3xl font-bold text-center mb-12">Xizmatlar</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {services.map((service, index) => (
                        <div key={index} className="bg-gray-800 p-6 rounded-xl transition-all duration-300 hover:shadow-md hover:shadow-primary/60 cursor-pointer">
                            <div className="w-16 h-16 mb-4">
                                <service.icon className="w-full h-full text-primary" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                            <p className="text-sm text-gray-300">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
