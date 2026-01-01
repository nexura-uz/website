import { phone_number, portfolios, services } from "@/utils/constants";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <section className="flex items-center justify-center w-full min-h-[40vw] px-3 lg:px-0 py-10">
        <div>
          <h1 className="text-5xl font-bold text-center">Kelajak ilovalarini bugun yaratish</h1>
          <div className="w-24 h-1 mx-auto bg-primary my-4"></div>

          <p className="text-lg text-gray max-w-2xl mx-auto text-center">
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
              className="cursor-pointer hidden lg:inline-flex h-12 items-center justify-center rounded-xl border border-transparent px-8 text-sm font-medium text-black shadow-sm transition-all duration-200 bg-white hover:bg-primary hover:text-white"
            >
              Bizning loyihalar
            </Link>
            <a
              href={"https://mirahmadov.uz"}
              className="cursor-pointer hidden lg:inline-flex h-12 items-center justify-center rounded-xl border border-transparent px-8 text-sm font-medium text-black shadow-sm transition-all duration-200 bg-white hover:bg-primary hover:text-white"
            >
              NexuraWebOS
            </a>
          </div>
        </div>
      </section>

      <section className="py-10 text-primary border-t border-primary">
        <div className="container mx-auto px-3 lg:px-0">
          <h2 className="text-3xl font-bold text-center mb-12">Xizmatlar</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <div key={index} className="bg-light-gray p-6 rounded-xl transition-all duration-300 hover:shadow-md hover:shadow-primary/60 cursor-pointer">
                <div className="w-16 h-16 mb-4">
                  <service.icon className="w-full h-full text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-gray">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background text-primary">
        <div className="container mx-auto px-3">
          <h2 className="text-3xl font-bold text-center mb-12">Loyihalar</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {portfolios.map((project, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl hover:shadow-md hover:shadow-primary/60 transition-all duration-300 ease-in-out cursor-pointer group"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                {/* image size 800x500 */}
                <Link href={project.link} target='_blank'
                  className="absolute inset-0 bg-gray-800/80 hover:bg-light-gray/80 flex flex-col justify-center items-center p-6 transition-all duration-300 ease-in-out"
                >
                  <h3 className="text-primary text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-white group-hover:text-gray text-center">{project.description}</p>
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/portfolio" className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-xl">
              Barcha loyihalarni ko'rish
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
