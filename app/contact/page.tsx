import React from 'react'
import { Metadata } from "next";
// Removed explicit import for Button
import { Mail, MapPin, Phone, Calendar, User, MessageSquare, Clock } from "lucide-react";
import Link from 'next/link';
import { ContactForm } from '@/components/contact-form'; // Import ContactForm

export const metadata: Metadata = {
  title: "Contact Tomis Events | Planifică Evenimentul Tău",
  description: "Contactează echipa Tomis Events pentru oferte personalizate. Telefon: +40 799 400 900. Email: office@tomisevents.com. Suntem aici pentru a-ți răspunde la orice întrebare.",
  keywords: ['contact tomis events', 'rezervari evenimente', 'telefon organizator', 'email evenimente', 'locatie constanta'],
  alternates: {
    canonical: 'https://tomisevents.com/contact',
  },
};

const ContactParams = [
    {
        icon: Phone,
        label: "Telefon",
        value: "+40 799 400 900",
        href: "tel:+40799400900"
    },
    {
        icon: Mail,
        label: "Email",
        value: "office@tomisevents.com",
        href: "mailto:office@tomisevents.com"
    },
    {
        icon: MapPin,
        label: "Locație",
        value: "Constanța, România",
        href: "https://maps.google.com/?q=Constanta,Romania"
    },
    {
        icon: Clock,
        label: "Program",
        value: "Luni - Duminică: 09:00 - 21:00",
        href: null
    }
];

const Contact = () => {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold text-[#E81ADE] mb-6">
            Hai să Discutăm
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Ești gata să transformi evenimentul tău într-o amintire de neuitat? 
            Completează formularul sau contactează-ne direct.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info Card */}
          <div className="space-y-8">
            <div className="bg-muted/30 p-8 rounded-2xl border border-border h-full">
                <h3 className="text-2xl font-semibold mb-8">Informații de Contact</h3>
                <div className="space-y-8">
                    {ContactParams.map((item, index) => (
                        <div key={index} className="flex items-start gap-4 group">
                            <div className="mt-1 bg-white p-3 rounded-xl shadow-sm border border-gray-100 group-hover:border-[#E81ADE]/30 transition-colors">
                                <item.icon className="size-6 text-[#E81ADE]" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-muted-foreground mb-1">{item.label}</p>
                                {item.href ? (
                                    <Link 
                                        href={item.href} 
                                        className="text-lg font-semibold hover:text-[#E81ADE] transition-colors"
                                    >
                                        {item.value}
                                    </Link>
                                ) : (
                                    <p className="text-lg font-semibold">{item.value}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Optional: Add Social Media Links here if needed, or rely on Footer */}
                <div className="mt-12 pt-8 border-t border-border/50">
                    <p className="text-sm text-muted-foreground mb-4">Ne găsești și pe rețelele sociale:</p>
                    <div className="flex gap-4">
                        {/* Example Social Buttons */}
                        <Link href="https://facebook.com" target="_blank" className="p-3 bg-white border border-gray-100 rounded-xl hover:border-[#E81ADE]/30 hover:text-[#E81ADE] transition-colors shadow-sm">
                            <span className="font-bold">Facebook</span>
                        </Link>
                        <Link href="https://instagram.com" target="_blank" className="p-3 bg-white border border-gray-100 rounded-xl hover:border-[#E81ADE]/30 hover:text-[#E81ADE] transition-colors shadow-sm">
                            <span className="font-bold">Instagram</span>
                        </Link>
                         <Link href="https://tiktok.com" target="_blank" className="p-3 bg-white border border-gray-100 rounded-xl hover:border-[#E81ADE]/30 hover:text-[#E81ADE] transition-colors shadow-sm">
                            <span className="font-bold">TikTok</span>
                        </Link>
                    </div>
                </div>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </main>
  )
}

export default Contact