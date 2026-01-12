import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Check } from 'lucide-react'

const packages = [
    {
        name: 'Silver',
        description: 'Perfect pentru petreceri private și evenimente restrânse',
        features: [
            'Exemplu 1',
            'Exemplu 2',
            'Exemplu 3',
            'Exemplu 4',
            'Exemplu 5'
        ],
        isPopular: false
    },
    {
        name: 'Gold',
        description: 'Pachetul ideal pentru nunți și botezuri memorabile',
        features: [
            'Exemplu 1',
            'Exemplu 2',
            'Exemplu 3',
            'Exemplu 4',
            'Exemplu 5'
        ],
        isPopular: true
    },
    {
        name: 'Platinum',
        description: 'Experiența completă pentru evenimente de lux',
        features: [
            'Exemplu 1',
            'Exemplu 2',
            'Exemplu 3',
            'Exemplu 4',
            'Exemplu 5'
        ],
        isPopular: false
    }
]

export default function Packages() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-6xl px-6">
                <div className="mx-auto max-w-2xl space-y-6 text-center">
                    <h1 className="text-center text-4xl font-semibold lg:text-5xl font-heading text-[#E81ADE]">Pachete Personalizate</h1>
                    <p className="text-muted-foreground">
                        Alege pachetul care se potrivește cel mai bine nevoilor tale. Indiferent de dimensiunea evenimentului, avem soluția perfectă pentru o atmosferă de neuitat.
                    </p>
                </div>

                <div className="mt-8 grid gap-6 md:mt-20 md:grid-cols-3">
                    {packages.map((pkg, index) => (
                        <Card key={index} className={`flex flex-col ${pkg.isPopular ? 'relative border-[#E81ADE] shadow-lg' : ''}`}>
                            {pkg.isPopular && (
                                <span className="bg-[#E81ADE] absolute inset-x-0 -top-3 mx-auto flex h-6 w-fit items-center rounded-full px-3 py-1 text-xs font-medium text-primary-foreground">
                                    Cel mai popular
                                </span>
                            )}

                            <CardHeader>
                                <CardTitle className="font-heading text-xl">{pkg.name}</CardTitle>
                                <CardDescription className="text-sm mt-2">{pkg.description}</CardDescription>
                            </CardHeader>

                            <CardContent className="space-y-4 flex-1">
                                <hr className="border" />

                                <ul className="list-outside space-y-3 text-sm">
                                    {pkg.features.map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-2">
                                            <Check className="size-4 text-primary shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>

                            <CardFooter className="mt-auto">
                                <Button
                                    asChild
                                    variant={pkg.isPopular ? "default" : "outline"}
                                    className={`w-full ${pkg.isPopular ? 'bg-[#E81ADE] hover:bg-[#E81ADE]/90' : ''}`}
                                >
                                    <Link href="tel:+40799400900">Află prețul</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                <div className="mt-16 text-center space-y-6">
                    <p className="text-muted-foreground text-lg font-medium">
                        Nu ai regăsit ceea ce căutai în pachetele noastre?
                    </p>
                    <Button asChild size="lg" className="rounded-full bg-[#E81ADE] hover:bg-[#E81ADE]/90 text-white px-8">
                        <Link href="/servicii">Vezi toate serviciile &rarr;</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
