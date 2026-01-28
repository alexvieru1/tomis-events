import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Politica de Confidențialitate - Tomis Events',
  description: 'Politica de confidențialitate și protecția datelor personale pentru Tomis Events.',
};

export default function PoliticaConfidentialitate() {
  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-8">
          <Button variant="ghost" asChild className="pl-0 hover:bg-transparent hover:text-primary">
            <Link href="/">← Înapoi la pagina principală</Link>
          </Button>
        </div>

        <h1 className="text-4xl font-heading font-bold text-[#E81ADE] mb-8">
          Politica de Confidențialitate
        </h1>

        <div className="prose prose-lg max-w-none text-foreground/90">
          <p className="text-muted-foreground mb-8">
            Ultima actualizare: {new Date().toLocaleDateString('ro-RO', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introducere</h2>
            <p>
              Tomis Events (&quot;noi&quot;, &quot;noastră&quot;) respectă confidențialitatea vizitatorilor site-ului nostru.
              Această politică de confidențialitate explică modul în care colectăm, folosim și protejăm datele dumneavoastră personale
              în conformitate cu Regulamentul General privind Protecția Datelor (GDPR).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Datele pe care le colectăm</h2>
            <p>Putem colecta următoarele tipuri de date personale:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><strong>Date de contact:</strong> nume, adresă de email, număr de telefon</li>
              <li><strong>Date despre eveniment:</strong> data evenimentului, tipul evenimentului, detalii specifice</li>
              <li><strong>Date tehnice:</strong> adresa IP, tipul browserului, date despre dispozitiv (colectate automat prin cookie-uri)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Cum folosim datele dumneavoastră</h2>
            <p>Folosim datele personale în următoarele scopuri:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Pentru a răspunde solicitărilor și cererilor de ofertă</li>
              <li>Pentru a furniza serviciile contractate</li>
              <li>Pentru a vă contacta în legătură cu rezervările</li>
              <li>Pentru a îmbunătăți serviciile și site-ul nostru</li>
              <li>Pentru a respecta obligațiile legale</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Temeiul legal al prelucrării</h2>
            <p>Prelucrăm datele dumneavoastră pe baza următoarelor temeiuri legale:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><strong>Consimțământ:</strong> când ne trimiteți o cerere de ofertă sau ne contactați</li>
              <li><strong>Executarea contractului:</strong> pentru furnizarea serviciilor contractate</li>
              <li><strong>Interes legitim:</strong> pentru îmbunătățirea serviciilor noastre</li>
              <li><strong>Obligație legală:</strong> pentru conformarea cu legislația aplicabilă</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Stocarea și securitatea datelor</h2>
            <p>
              Datele dumneavoastră sunt stocate în siguranță și păstrate doar pe perioada necesară îndeplinirii
              scopurilor pentru care au fost colectate. Implementăm măsuri tehnice și organizatorice adecvate
              pentru a proteja datele împotriva accesului neautorizat, pierderii sau distrugerii.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Drepturile dumneavoastră</h2>
            <p>În conformitate cu GDPR, aveți următoarele drepturi:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><strong>Dreptul de acces:</strong> să solicitați o copie a datelor pe care le deținem despre dumneavoastră</li>
              <li><strong>Dreptul la rectificare:</strong> să cereți corectarea datelor inexacte</li>
              <li><strong>Dreptul la ștergere:</strong> să cereți ștergerea datelor dumneavoastră</li>
              <li><strong>Dreptul la restricționarea prelucrării:</strong> să limitați modul în care folosim datele</li>
              <li><strong>Dreptul la portabilitatea datelor:</strong> să primiți datele într-un format structurat</li>
              <li><strong>Dreptul de opoziție:</strong> să vă opuneți prelucrării datelor în anumite situații</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Cookie-uri</h2>
            <p>
              Site-ul nostru folosește cookie-uri pentru a îmbunătăți experiența utilizatorilor.
              Pentru mai multe informații, vă rugăm să consultați{' '}
              <Link href="/politica-cookies" className="text-[#E81ADE] hover:underline">
                Politica de Cookie-uri
              </Link>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Contact</h2>
            <p>
              Pentru orice întrebări sau solicitări legate de datele dumneavoastră personale,
              ne puteți contacta la:
            </p>
            <ul className="list-none mt-4 space-y-2">
              <li><strong>Email:</strong> office@tomisevents.com</li>
              <li><strong>Telefon:</strong> +40 799 400 900</li>
              <li><strong>Adresă:</strong> Constanța, România</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Modificări ale politicii</h2>
            <p>
              Ne rezervăm dreptul de a actualiza această politică de confidențialitate.
              Orice modificări vor fi publicate pe această pagină cu data actualizării.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
