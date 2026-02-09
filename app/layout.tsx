import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import { WebsiteNavbar } from "@/components/navbar";
import Footer from "@/components/footer";
import { CookieConsent } from "@/components/cookie-consent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://tomisevents.com'),
  title: {
    default: 'Tomis Events - Organizare Evenimente Constanța',
    template: '%s | Tomis Events'
  },
  description: 'Transformăm evenimentele obișnuite în amintiri extraordinare. Peste 20 de ani de experiență în crearea momentelor magice în Constanța și împrejurimi. Servicii premium: fum greu, artificii, cabină foto.',
  keywords: ['evenimente constanta', 'organizare nunti', 'fum greu', 'artificii', 'nunta perfecta', 'tomis events'],
  authors: [{ name: 'Tomis Events' }],
  creator: 'Tomis Events',
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    url: 'https://tomisevents.com',
    siteName: 'Tomis Events',
    title: 'Tomis Events - Organizare Evenimente Constanța',
    description: 'Servicii complete pentru evenimente memorabile în Constanța. Fum greu, artificii, foto-video și multe altele.',
    images: [
      {
        url: '/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Tomis Events - Organizare Evenimente Constanța',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tomis Events - Organizare Evenimente Constanța',
    description: 'Transformăm evenimentele obișnuite în amintiri extraordinare.',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased`}
      >
        <WebsiteNavbar />
        <div className="pt-24">{children}</div>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
