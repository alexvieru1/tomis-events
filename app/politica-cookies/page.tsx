import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Politica de Cookies - Tomis Events',
  description: 'Informații despre cookie-urile folosite pe site-ul Tomis Events.',
};

export default function PoliticaCookies() {
  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-8">
          <Button variant="ghost" asChild className="pl-0 hover:bg-transparent hover:text-primary">
            <Link href="/">← Înapoi la pagina principală</Link>
          </Button>
        </div>

        <h1 className="text-4xl font-heading font-bold text-[#E81ADE] mb-8">
          Politica de Cookies
        </h1>

        <div className="prose prose-lg max-w-none text-foreground/90">
          <p className="text-muted-foreground mb-8">
            Ultima actualizare: {new Date().toLocaleDateString('ro-RO', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Ce sunt cookie-urile?</h2>
            <p>
              Cookie-urile sunt fișiere text de mici dimensiuni care sunt stocate pe dispozitivul
              dumneavoastră (computer, telefon, tabletă) atunci când vizitați un site web.
              Acestea permit site-ului să vă recunoască și să rețină informații despre preferințele
              dumneavoastră.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Tipuri de cookie-uri</h2>

            <h3 className="text-xl font-medium mb-3">2.1 Cookie-uri strict necesare</h3>
            <p>
              Aceste cookie-uri sunt esențiale pentru funcționarea site-ului și nu pot fi dezactivate.
              De obicei sunt setate doar ca răspuns la acțiunile dumneavoastră, cum ar fi setarea
              preferințelor de confidențialitate sau completarea formularelor.
            </p>
            <div className="bg-muted/50 p-4 rounded-lg mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 font-semibold">Cookie</th>
                    <th className="text-left py-2 font-semibold">Scop</th>
                    <th className="text-left py-2 font-semibold">Durată</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2">cookie-consent</td>
                    <td className="py-2">Reține preferința pentru cookie-uri</td>
                    <td className="py-2">1 an</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-medium mb-3 mt-6">2.2 Cookie-uri de performanță</h3>
            <p>
              Aceste cookie-uri ne permit să numărăm vizitele și sursele de trafic pentru a măsura
              și îmbunătăți performanța site-ului. În prezent, nu folosim cookie-uri de acest tip.
            </p>

            <h3 className="text-xl font-medium mb-3 mt-6">2.3 Cookie-uri de marketing</h3>
            <p>
              Aceste cookie-uri pot fi setate prin site-ul nostru de partenerii noștri de publicitate.
              În prezent, nu folosim cookie-uri de marketing.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Cookie-uri folosite pe acest site</h2>
            <p>
              În prezent, site-ul tomisevents.com folosește doar cookie-uri strict necesare:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>
                <strong>cookie-consent:</strong> Acest cookie reține preferința dumneavoastră
                privind acceptarea sau refuzul cookie-urilor. Este stocat în localStorage
                și nu expiră automat.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Cum să gestionați cookie-urile</h2>
            <p>
              Puteți controla și/sau șterge cookie-urile după cum doriți. Puteți șterge toate
              cookie-urile care sunt deja pe dispozitivul dumneavoastră și puteți seta majoritatea
              browserelor să le blocheze.
            </p>

            <h3 className="text-xl font-medium mb-3 mt-6">4.1 Setări browser</h3>
            <p>Majoritatea browserelor vă permit să:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Vedeți ce cookie-uri aveți și să le ștergeți individual</li>
              <li>Blocați cookie-urile de la terțe părți</li>
              <li>Blocați cookie-urile de la anumite site-uri</li>
              <li>Blocați toate cookie-urile</li>
              <li>Ștergeți toate cookie-urile când închideți browserul</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 mt-6">4.2 Link-uri utile pentru setări browser</h3>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-[#E81ADE] hover:underline">
                  Google Chrome
                </a>
              </li>
              <li>
                <a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-[#E81ADE] hover:underline">
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-[#E81ADE] hover:underline">
                  Safari
                </a>
              </li>
              <li>
                <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-[#E81ADE] hover:underline">
                  Microsoft Edge
                </a>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Modificări ale politicii</h2>
            <p>
              Această politică de cookie-uri poate fi actualizată periodic. Vă recomandăm să
              verificați această pagină în mod regulat pentru a fi la curent cu orice modificări.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Contact</h2>
            <p>
              Dacă aveți întrebări despre utilizarea cookie-urilor pe site-ul nostru,
              ne puteți contacta la:
            </p>
            <ul className="list-none mt-4 space-y-2">
              <li><strong>Email:</strong> office@tomisevents.com</li>
              <li><strong>Telefon:</strong> +40 799 400 900</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Mai multe informații</h2>
            <p>
              Pentru mai multe informații despre cookie-uri și modul în care acestea funcționează,
              puteți vizita{' '}
              <a href="https://www.allaboutcookies.org/" target="_blank" rel="noopener noreferrer" className="text-[#E81ADE] hover:underline">
                www.allaboutcookies.org
              </a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
