import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'
import Image from 'next/image'
import { IconBrandFacebook, IconBrandInstagram, IconBrandTiktok } from '@tabler/icons-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-border/40 w-full z-50">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <Link href="/" className="shrink-0">
                <Image 
                  src="https://pub-039f9033d8464e8d933b76f3820fd6c0.r2.dev/images/logo.png" 
                  alt="Tomis Events Logo" 
                  width={60} 
                  height={60} 
                  className="w-16 h-auto"
                />
              </Link>
              <p className="text-sm text-zinc-500 leading-relaxed">
                Peste 20 de ani de experiență în crearea momentelor magice în Constanța și împrejurimi.
              </p>
            </div>
            <div className="flex justify-center items-center gap-4 mt-2">
              <Link href="https://facebook.com" target="_blank" className="text-zinc-400 hover:text-blue-600 transition-colors">
                <IconBrandFacebook className="h-10 w-10" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://instagram.com" target="_blank" className="text-zinc-400 hover:text-pink-600 transition-colors">
                <IconBrandInstagram className="h-10 w-10" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://youtube.com" target="_blank" className="text-zinc-400 hover:text-black transition-colors">
                <IconBrandTiktok className="h-10 w-10" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          {/* Navigation Column */}
          <div className='lg:ml-20'>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Navigație</h3>
            <ul className="flex flex-col gap-3 text-sm text-zinc-500">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">Acasă</Link>
              </li>
              <li>
                <Link href="/servicii" className="hover:text-primary transition-colors">Servicii</Link>
              </li>
              <li>
                <Link href="/pachete" className="hover:text-primary transition-colors">Pachete</Link>
              </li>
              <li>
                <Link href="/evenimente" className="hover:text-primary transition-colors">Evenimente</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Servicii Populare</h3>
            <ul className="flex flex-col gap-3 text-sm text-zinc-500">
              <li>
                <Link href="/servicii" className="hover:text-primary transition-colors">Artificii Exterior</Link>
              </li>
              <li>
                <Link href="/servicii" className="hover:text-primary transition-colors">Fum Greu</Link>
              </li>
              <li>
                <Link href="/servicii" className="hover:text-primary transition-colors">Artificii Dansul Mirilor</Link>
              </li>
              <li>
                <Link href="/servicii" className="hover:text-primary transition-colors">Gheață Carbonică</Link>
              </li>
            </ul>
          </div>

           {/* Contact Column */}
           <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Contact</h3>
            <ul className="flex flex-col gap-4 text-sm text-zinc-500">
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-primary" />
                <div className="flex flex-col">
                    <span>Pentru rezervări:</span>
                    <a href="tel:+40799400900" className="font-semibold hover:text-primary transition-colors text-foreground">+40 799 400 900</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 shrink-0 text-primary" />
                <a href="mailto:office@tomisevents.com" className="hover:text-primary transition-colors">office@tomisevents.com</a>
              </li>
              <li className="flex items-start gap-3">
                 <MapPin className="h-5 w-5 shrink-0 text-primary" />
                 <span>Constanța, România</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
             <p>&copy; {currentYear} Tomis Events. Toate drepturile rezervate.</p>
             <div className="flex gap-6">
                <Link href="#" className="hover:text-primary transition-colors">Termeni și Condiții</Link>
                <Link href="#" className="hover:text-primary transition-colors">Politica de Confidențialitate</Link>
             </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer