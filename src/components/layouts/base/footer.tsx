import Link from 'next/link'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Instagram, Linkedin, Twitter, Facebook } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Information */}
          <div className="space-y-4">
            <div className='flex items-center gap-2'>
              <Image src={"/logo.svg"} width={40} height={40} alt={""} />
              <h2 className="text-2xl font-bold text-white font-havelock">Nexura</h2>
            </div>
            <p className="text-sm">Empowering Digital Experiences</p>
            <address className="text-sm not-italic">
              123 Tech Street, Digital City, 12345
            </address>
            <p className="text-sm">Email: info@nexura.com</p>
            <p className="text-sm">Phone: (123) 456-7890</p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About Us', 'Services', 'Portfolio', 'Blog', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-[#0ea47a] transition-colors">
                <Instagram className="w-6 h-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-[#0ea47a] transition-colors">
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="hover:text-[#0ea47a] transition-colors">
                <Twitter className="w-6 h-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-[#0ea47a] transition-colors">
                <Facebook className="w-6 h-6" />
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
            <form className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <Button type="submit" className="w-full bg-[#0ea47a] hover:bg-[#0c8d68] text-white">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Legal Links */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Nexura. All rights reserved.</p>
          <div className="mt-4 sm:mt-0">
            <Link href="/privacy-policy" className="text-sm hover:text-white transition-colors mr-4">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-sm hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}