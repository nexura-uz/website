"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Instagram, Linkedin, Twitter, Facebook, Loader2 } from 'lucide-react'
import Image from 'next/image'
import { Link } from "@/i18n/routing"
import { useTranslations } from "next-intl"
import { menus } from "@/lib/contstants"
import { useActionState } from "react"
import { newspaperFormSubmit } from "@/app/actions/newspaper-actions"
import { useFormStatus } from "react-dom"
import { motion } from "framer-motion"
import clsx from "clsx"

const initialState = {
  message: "",
  success: false
}

export default function Footer() {
  const [state, formAction] = useActionState(newspaperFormSubmit, initialState)
  const t = useTranslations("Menus")

  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-green/30">
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
              {menus.map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-white transition-colors">
                    {t(`${item}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <Link href="#" target="_blank" className="hover:text-green transition-colors">
                <Instagram className="w-6 h-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" target="_blank" className="hover:text-green transition-colors">
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" target="_blank" className="hover:text-green transition-colors">
                <Twitter className="w-6 h-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" target="_blank" className="hover:text-green transition-colors">
                <Facebook className="w-6 h-6" />
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
            <form className="space-y-2" action={formAction}>
              <Input
                name="email"
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                required
              />
              <SubmitButton />
              {state?.message ? (
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={clsx("mt-4", state?.success ? "text-green-600" : "text-red-600")}
                >
                  {state?.message}
                </motion.p>
              ) : ""
              }
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


function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" aria-disabled={pending} disabled={pending} className="w-full bg-green hover:bg-dark-green text-white">
      {pending && <Loader2 className="animate-spin" />}
      Subscribe
    </Button>
  )
}