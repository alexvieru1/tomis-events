import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Termeni și Condiții - Tomis Events',
  description: 'Termenii și condițiile de utilizare a serviciilor Tomis Events.',
};

export default function TermeniConditii() {
  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-8">
          <Button variant="ghost" asChild className="pl-0 hover:bg-transparent hover:text-primary">
            <Link href="/">← Înapoi la pagina principală</Link>
          </Button>
        </div>

        <h1 className="text-4xl font-heading font-bold text-[#E81ADE] mb-8">
          Termeni și Condiții
        </h1>

        <div className="prose prose-lg max-w-none text-foreground/90">
          <p className="text-muted-foreground mb-8">
            Ultima actualizare: {new Date().toLocaleDateString('ro-RO', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Informații generale</h2>
            <p>
              Acești termeni și condiții reglementează utilizarea site-ului tomisevents.com
              și a serviciilor oferite de Tomis Events. Prin accesarea site-ului sau utilizarea
              serviciilor noastre, acceptați acești termeni în totalitate.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Serviciile noastre</h2>
            <p>Tomis Events oferă servicii de:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Artificii de exterior și interior</li>
              <li>Fum greu și efecte speciale</li>
              <li>Confetti și streamere</li>
              <li>Artificii de zi (daylight smoke)</li>
              <li>Lumini sparkular și alte efecte pirotehnice</li>
              <li>Baloane cu heliu și decorațiuni</li>
            </ul>
            <p className="mt-4">
              Toate serviciile sunt furnizate de personal calificat și autorizat,
              cu respectarea normelor de siguranță în vigoare.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Rezervări și plăți</h2>
            <h3 className="text-xl font-medium mb-3">3.1 Procesul de rezervare</h3>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Rezervările se fac prin formularul de contact sau telefonic</li>
              <li>O rezervare este confirmată doar după achitarea avansului</li>
              <li>Avansul este de minim 30% din valoarea totală a serviciilor</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 mt-6">3.2 Modalități de plată</h3>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Transfer bancar</li>
              <li>Numerar (la livrarea serviciului)</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 mt-6">3.3 Prețuri</h3>
            <p>
              Prețurile afișate pe site sunt orientative. Prețul final va fi comunicat
              în urma discuției detaliate despre cerințele evenimentului dumneavoastră.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Anulări și modificări</h2>
            <h3 className="text-xl font-medium mb-3">4.1 Anulare de către client</h3>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Anulare cu mai mult de 30 de zile înainte: rambursare 100% a avansului</li>
              <li>Anulare între 14-30 de zile: rambursare 50% a avansului</li>
              <li>Anulare cu mai puțin de 14 zile: avansul nu se returnează</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 mt-6">4.2 Modificări</h3>
            <p>
              Modificările la rezervare sunt posibile cu cel puțin 7 zile înainte de eveniment,
              în limita disponibilității.
            </p>

            <h3 className="text-xl font-medium mb-3 mt-6">4.3 Condiții meteo</h3>
            <p>
              În cazul condițiilor meteo nefavorabile (vânt puternic, ploaie), ne rezervăm dreptul
              de a modifica sau anula anumite servicii pentru siguranța participanților.
              În aceste situații, vom oferi alternative sau rambursare.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Responsabilități</h2>
            <h3 className="text-xl font-medium mb-3">5.1 Responsabilitățile noastre</h3>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Furnizarea serviciilor conform specificațiilor agreate</li>
              <li>Utilizarea echipamentelor certificate și sigure</li>
              <li>Respectarea normelor de siguranță și a legislației în vigoare</li>
              <li>Prezența la locație la ora stabilită</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 mt-6">5.2 Responsabilitățile clientului</h3>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Asigurarea accesului la locație</li>
              <li>Informarea invitaților despre momentele cu efecte speciale</li>
              <li>Obținerea eventualelor aprobări necesare de la administratorul locației</li>
              <li>Comunicarea corectă a detaliilor evenimentului</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Limitarea răspunderii</h2>
            <p>
              Tomis Events nu își asumă răspunderea pentru:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Daunele cauzate de nerespectarea instrucțiunilor de siguranță de către participanți</li>
              <li>Întârzierile cauzate de condiții neprevăzute (trafic, condiții meteo extreme)</li>
              <li>Modificările aduse de locație sau organizator fără acordul nostru</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Proprietate intelectuală</h2>
            <p>
              Conținutul site-ului (texte, imagini, logo-uri) este proprietatea Tomis Events
              și este protejat de legile dreptului de autor. Reproducerea fără acord scris este interzisă.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Fotografii și materiale video</h2>
            <p>
              Ne rezervăm dreptul de a folosi fotografii și materiale video de la evenimentele
              la care participăm în scopuri promoționale, cu excepția cazului în care clientul
              solicită explicit altfel în scris.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Legea aplicabilă</h2>
            <p>
              Acești termeni sunt guvernați de legislația română. Orice litigiu va fi soluționat
              de instanțele competente din Constanța, România.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Contact</h2>
            <p>
              Pentru orice întrebări legate de acești termeni, ne puteți contacta la:
            </p>
            <ul className="list-none mt-4 space-y-2">
              <li><strong>Email:</strong> office@tomisevents.com</li>
              <li><strong>Telefon:</strong> +40 799 400 900</li>
              <li><strong>Adresă:</strong> Constanța, România</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
