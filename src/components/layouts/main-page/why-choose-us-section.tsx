import { Code, Users, Lightbulb, CheckCircle } from "lucide-react"

export default function WhyChooseUsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {strengths.map((strength, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center mb-4">
                <strength.icon className="w-8 h-8 text-[#0ea47a] mr-3" />
                <h3 className="text-xl font-semibold">{strength.title}</h3>
              </div>
              <p className="text-gray-600">{strength.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const strengths = [
  {
    title: "Experienced Team",
    description: "Our skilled developers bring passion and expertise to every project, ensuring frontend excellence.",
    icon: Users,
  },
  {
    title: "Client-Focused",
    description: "We tailor every project to meet your specific needs, ensuring your vision becomes reality.",
    icon: CheckCircle,
  },
  {
    title: "Innovative Solutions",
    description: "We leverage the latest technologies to create scalable, high-performance solutions for your business.",
    icon: Lightbulb,
  },
  {
    title: "Quality and Reliability",
    description: "Our dedication to delivering on time with meticulous attention to detail sets us apart.",
    icon: Code,
  },
]