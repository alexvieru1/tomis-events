'use client'

import { useState, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Mail, Phone, Calendar as CalendarIcon, User, MessageSquare } from "lucide-react"
import { sendContactEmail } from '@/app/actions'
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { ro } from "date-fns/locale"
import Link from "next/link"

export function ContactForm() {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
    const [date, setDate] = useState<Date>()
    const formRef = useRef<HTMLFormElement>(null);

    async function handleSubmit(formData: FormData) {
        setLoading(true);
        setMessage(null);

        // Ensure date is included if selected (managed by state, not input)
        if (date) {
            formData.set('data', format(date, 'yyyy-MM-dd'));
        }

        const result = await sendContactEmail(formData);

        if (result.error) {
            setMessage({ type: 'error', text: result.error });
        } else {
            setMessage({ type: 'success', text: 'Mesajul a fost trimis cu succes! Te vom contacta în curând.' });
            formRef.current?.reset();
            setDate(undefined);
        }
        setLoading(false);
    }

    return (
        <div className="bg-white p-8 rounded-2xl border border-border shadow-sm">
            <h3 className="text-2xl font-semibold mb-6">Trimite-ne un mesaj</h3>
            
            {message && (
                <div className={`p-4 mb-6 rounded-lg text-sm ${message.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                    {message.text}
                </div>
            )}

            <form ref={formRef} action={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="nume" className="text-sm font-medium">Nume *</label>
                        <div className="relative">
                            <User className="absolute left-3 top-3 h-4 w-4 text-zinc-400" />
                            <input 
                                required
                                id="nume"
                                name="nume"
                                type="text" 
                                placeholder="Numele tău"
                                className="flex h-10 w-full rounded-md border border-input bg-background pl-10 pr-3 py-2 text-sm ring-offset-background placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="telefon" className="text-sm font-medium">Telefon *</label>
                        <div className="relative">
                            <Phone className="absolute left-3 top-3 h-4 w-4 text-zinc-400" />
                            <input 
                                required
                                id="telefon"
                                name="telefon"
                                type="tel" 
                                placeholder="07xx xxx xxx"
                                className="flex h-10 w-full rounded-md border border-input bg-background pl-10 pr-3 py-2 text-sm ring-offset-background placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            />
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email *</label>
                    <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-zinc-400" />
                        <input 
                            required
                            id="email"
                            name="email"
                            type="email" 
                            placeholder="exemplu@email.com"
                            className="flex h-10 w-full rounded-md border border-input bg-background pl-10 pr-3 py-2 text-sm ring-offset-background placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                    </div>
                </div>

                <div className="space-y-2 flex flex-col">
                    <label className="text-sm font-medium">Data Evenimentului (Opțional)</label>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant={"outline"}
                                className={cn(
                                    "w-full pl-3 text-left font-normal flex h-10 rounded-md border border-input bg-background py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                                    !date && "text-muted-foreground"
                                )}
                            >
                                {date ? (
                                    format(date, "PPP", { locale: ro })
                                ) : (
                                    <span>Alege o dată</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                                initialFocus
                                locale={ro}
                            />
                        </PopoverContent>
                    </Popover>
                    <input type="hidden" name="data" value={date ? format(date, 'yyyy-MM-dd') : ''} />
                </div>

                <div className="space-y-2">
                    <label htmlFor="mesaj" className="text-sm font-medium">Detaliile Evenimentului *</label>
                    <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-zinc-400" />
                        <textarea 
                            required
                            id="mesaj"
                            name="mesaj"
                            rows={5}
                            placeholder="Povestește-ne despre evenimentul tău..."
                            className="flex w-full rounded-md border border-input bg-background pl-10 pr-3 py-2 text-sm ring-offset-background placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-y"
                        />
                    </div>
                </div>

                <div className="flex items-start gap-3">
                    <input
                        required
                        type="checkbox"
                        id="gdpr"
                        name="gdpr"
                        className="mt-1 h-4 w-4 rounded border-gray-300 text-[#E81ADE] focus:ring-[#E81ADE]"
                    />
                    <label htmlFor="gdpr" className="text-sm text-muted-foreground">
                        Am citit și sunt de acord cu{' '}
                        <Link href="/politica-confidentialitate" className="text-[#E81ADE] hover:underline" target="_blank">
                            Politica de Confidențialitate
                        </Link>
                        {' '}și{' '}
                        <Link href="/termeni-conditii" className="text-[#E81ADE] hover:underline" target="_blank">
                            Termenii și Condițiile
                        </Link>
                        . *
                    </label>
                </div>

                <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#E81ADE] hover:bg-[#E81ADE]/90 text-white rounded-full text-lg h-12"
                    disabled={loading}
                >
                    {loading ? 'Se trimite...' : 'Trimite Solicitarea'}
                </Button>
            </form>
        </div>
    )
}