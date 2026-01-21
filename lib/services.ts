export interface Serviciu {
  title: string;
  href: string;
  descriere: string;
  about?: string;
  img: string;
  images?: string[];
  subCategories: string[];
}

export const SERVICII_INTERIOR: Serviciu[] = [
  {
    title: "Mașină Fum Greu",
    href: "/servicii/masina-fum-greu",
    descriere: "Efect spectaculos de nori joși pentru un dans al mirilor de poveste.",
    about: "Transformă valsul mirilor într-un moment de basm cu ajutorul gheții carbonice. Mașina de fum greu produce un strat dens de nori joși care nu se ridică, oferind senzația că dansați pe cer. Efectul este 100% sigur, nu are miros și nu declanșează senzorii de fum, fiind completat de prezența unui tehnician care asigură densitatea optimă pe toată durata piesei.",
    img: "/images/servicii/fum-greu.webp",
    subCategories: [
      "Gheață carbonică inclusă",
      "Efect pe durata întregului vals",
      "Tehnician dedicat",
    ],
  },
  {
    title: "CO2 Gun",
    href: "/servicii/co2-gun",
    descriere: "Jeturi de gheață carbonică pentru un plus de energie pe ringul de dans.",
    about: "Ideal pentru petrecerile dinamice și momentele de club, CO2 Gun-ul oferă un impact vizual și senzorial imediat. Jeturile de gheață creează coloane albe spectaculoase care se evaporă instantaneu, răcorind atmosfera și ridicând nivelul de adrenalină al invitaților. Este accesoriul preferat al DJ-ilor pentru momentele culminante ale nopții.",
    img: "/images/servicii/tun-co2.webp",
    subCategories: [
      "Jeturi de până la 6 metri",
      "Efect răcoritor instant",
      "Ideal pentru momente de club",
    ],
  },
  {
    title: "Tunuri cu Confetti",
    href: "/servicii/tunuri-confetti",
    descriere: "Explozii de culoare care marchează momentele culminante ale serii.",
    about: "Adaugă o ploaie de culori momentelor tale speciale. Tunurile noastre profesionale cu confetti pot proiecta mii de particule metalizate sau din hârtie la înălțimi considerabile. Fie că alegi alb pur pentru dansul mirilor sau culori vibrante pentru finalul petrecerii, efectul vizual este unul memorabil, oferind cadru perfect pentru fotografii de neuitat.",
    img: "/images/servicii/tunuri-confetti.webp",
    subCategories: [
      "Confetti metalizate sau hârtie",
      "Culori personalizabile",
      "Curățare ușoară",
    ],
  },
  {
    title: "Artificii Ring",
    href: "/servicii/artificii-ring",
    descriere: "Vulcani de scântei reci, siguri pentru interior, pentru un decor luminos.",
    about: "Vulcanii de interior oferă strălucirea artificiilor clasice într-un format complet sigur pentru spații închise. Tehnologia scânteilor reci permite utilizarea lor în apropierea persoanelor fără riscuri. Sunt folosiți de obicei pentru a marca începutul și finalul valsului, creând un decor de o eleganță rară și un impact vizual puternic în fotografii.",
    img: "/images/servicii/artificii-ring.webp",
    images: [
      "/images/servicii/carusel/artificii-ring-1.webp",
      "/images/servicii/carusel/artificii-ring-2.webp",
      "/images/servicii/carusel/artificii-ring-3.webp",
      "/images/servicii/carusel/artificii-ring-4.webp",
    ],
    subCategories: [
      "4 sau 6 vulcani",
      "Sigure pentru interior",
      "Înălțime reglabilă 2-3m",
    ],
  },
  {
    title: "Artificii Ring Rotative",
    href: "/servicii/artificii-ring-rotative",
    descriere: "Show dinamic de scântei rotative ce oferă o perspectivă vizuală unică.",
    about: "Dacă vrei să ieși din tipare, artificiile rotative aduc un dinamism aparte ringului de dans. Dispozitivele speciale rotesc vulcanii de scântei reci la viteze controlate, formând cercuri de foc spectaculoase în jurul vostru. Este un efect modern, controlat wireless, care surprinde plăcut prin fluiditatea și strălucirea sa.",
    img: "/images/placeholder/artificii-ring-rotative.jpg",
    subCategories: [
      "Efect de rotație 360°",
      "Sincronizare wireless",
      "Impact vizual maxim",
    ],
  },
  {
    title: "Artificii Tort",
    href: "/servicii/artificii-tort",
    descriere: "Accentuarea momentului dulce cu un spectacol de lumini fără fum.",
    about: "Momentul tortului merită o prezentare pe măsură. Utilizăm artificii speciale, de scurtă durată, care nu emană fum și nu afectează calitatea tortului. Acestea încadrează desertul într-o aură de lumină, transformând tăierea tortului într-un spectacol vizual ce atrage toate privirile și obiectivele camerelor foto.",
    img: "/images/servicii/artificii-tort.webp",
    subCategories: [
      "Jet scântei 30-60 secunde",
      "Fără fum sau miros",
      "Suport special inclus",
    ],
  },
  {
    title: "Artificii de Mână",
    href: "/servicii/artificii-mana",
    descriere: "Creează un culoar de lumină alături de invitați pentru clipe intime.",
    about: "Cunoscute și sub numele de 'sparklers', aceste artificii sunt ideale pentru momentele de interacțiune cu invitații. Fie că este vorba de ieșirea mirilor sau de un moment dedicat fotografiilor de grup, artificiile de mână creează o atmosferă caldă și intimă. Oferim variante cu ardere lungă pentru a ne asigura că toată lumea se bucură de moment.",
    img: "/images/servicii/artificii-de-mana.webp",
    subCategories: [
      "Pachete de 50/100 bucăți",
      "Ardere lungă (90 secunde)",
      "Protecție pentru mâini",
    ],
  },
  {
    title: "Mașină Baloane cu Fum",
    href: "/servicii/masina-baloane-fum",
    descriere: "Baloane pline cu ceață care oferă un efect vizual inedit și interactiv.",
    about: "Un efect de ultimă generație care combină fragilitatea baloanelor de săpun cu misterul fumului. La spargere, aceste baloane eliberează un mic nor de ceață, creând o scenă interactivă și ludică. Este un serviciu extrem de apreciat atât de copii, cât și de adulți, oferind un farmec aparte ringului de dans.",
    img: "/images/servicii/masina-baloane-fum.webp",
    subCategories: [
      "Efect de ceață la spargere",
      "Luminat LED inclus",
    ],
  },
  {
    title: "Mașină de zăpadă",
    href: "/servicii/masina-zapada",
    descriere: "Atmosferă magică de iarnă cu fulgi artificiali care nu lasă urme.",
    about: "Indiferent de anotimp, putem aduce magia zăpezii la evenimentul tău. Mașina noastră profesională generează fulgi ușori de spumă care plutesc exact ca zăpada naturală. Soluția folosită este non-toxică, nu pătează hainele și nu transformă ringul de dans într-o suprafață alunecoasă, fiind ideală pentru nunțile de iarnă sau petrecerile tematice.",
    img: "/images/servicii/masina-de-zapada.webp",
    subCategories: [
      "Zăpadă non-toxică",
      "Nu lasă urme/nu alunecă",
      "Debit reglabil",
    ],
  },
  {
    title: "Laser Show",
    href: "/servicii/laser",
    descriere: "Spectacol de lumini de înaltă precizie sincronizat perfect pe muzică.",
    about: "Transformă locația într-un spațiu futurist cu un Laser Show profesional. Proiectăm animații grafice și tuneluri de lumină RGB care se sincronizează perfect pe beat-ul muzicii. Este un serviciu premium care adaugă o notă tehnologizată evenimentului, fiind ideal pentru momentele de vârf ale petrecerii sau pentru prezentări corporate de impact.",
    img: "/images/servicii/laser.webp",
    subCategories: [
      "Animații grafice",
      "Full Color RGB",
      "Show personalizat pe muzică",
    ],
  },
  {
    title: "Scenă Lumini",
    href: "/servicii/scena-lumini",
    descriere: "Echipamente profesionale care transformă radical atmosfera locației.",
    about: "Iluminatul este cheia oricărui eveniment reușit. Oferim structuri complete de lumini, dotate cu Moving Heads și proiectoare arhitecturale, controlate în timp real de un tehnician. De la lumini calde pentru cină, până la jocuri dinamice pentru party, scena de lumini asigură energia necesară pentru a ține invitații pe ringul de dans.",
    img: "/images/servicii/scena-lumini.webp",
    subCategories: [
      "Moving Heads",
      "Proiectoare arhitecturale",
      "Controler DMX live",
    ],
  },
  {
    title: "Ecran LED FullHD",
    href: "/servicii/ecran-led-fullhd",
    descriere: "Suport vizual de înaltă claritate pentru proiecția amintirilor voastre.",
    about: "Ecranele LED profesionale oferă o claritate net superioară proiectoarelor clasice, fiind vizibile chiar și în lumină puternică. Sunt soluția ideală pentru proiecția videoclipurilor 'Save the Date', a fotografiilor de familie sau pentru a oferi un background vizual spectaculos trupei sau DJ-ului. Configurația modulară ne permite să adaptăm dimensiunea ecranului în funcție de locație.",
    img: "/images/servicii/ecran-led-fullhd.webp",
    subCategories: [
      "Pitch mic pentru claritate",
      "Configurații modulare",
      "Suport tehnic inclus",
    ],
  },
];

export const SERVICII_EXTERIOR: Serviciu[] = [
  {
    title: "Artificii de Exterior",
    href: "/servicii/artificii-exterior",
    descriere: "Spectacol pirotehnic grandios pe cer, personalizat pentru eveniment.",
    about: "Transformă finalul evenimentului tău într-un moment cu adevărat magic cu un spectacol profesionist de artificii de exterior. Echipa noastră de pirotehniști autorizați creează show-uri personalizate, sincronizate perfect cu muzica aleasă de tine. Ne ocupăm de obținerea tuturor avizelor și autorizațiilor necesare, oferind o experiență vizuală sigură și de neuitat pe cerul nopții.",
    img: "/images/servicii/artificii-exterior.webp",
    images: [
      "/images/servicii/carusel/artificii-exterior-1.webp",
      "/images/servicii/carusel/artificii-exterior-2.webp",
      "/images/servicii/carusel/artificii-exterior-3.webp",
      "/images/servicii/carusel/artificii-exterior-4.webp",
      "/images/servicii/carusel/artificii-exterior-5.webp",
      "/images/servicii/carusel/artificii-exterior-6.webp",
      "/images/servicii/carusel/artificii-exterior-7.webp",
      "/images/servicii/carusel/artificii-exterior-8.webp",
      "/images/servicii/carusel/artificii-exterior-9.webp",
    ],
    subCategories: [
      "Pachete 3-10 minute",
      "Sincronizare pe muzică",
      "Autorizații incluse",
    ],
  },
  {
    title: "Scris Pirotehnic",
    href: "/servicii/scris-pirotehnic",
    descriere: "Numele voastre sau mesaje speciale luminate prin flăcări controlate.",
    about: "Personalizează noaptea cu un mesaj arzător. Scrisul pirotehnic permite afișarea inițialelor, a numelor sau a unor simboluri precum inima, folosind elemente care se aprind simultan. Este un moment de mare impact emoțional, ideal pentru cereri în căsătorie sau ca fundal pentru ședința foto de noapte a mirilor.",
    img: "/images/placeholder/scris-pirotehnic.jpg",
    subCategories: [
      "Inițiale sau nume complet",
      "Inimă aprinsă inclusă",
      "Durată aprox. 60 sec",
    ],
  },
  {
    title: "Sori Rotitori",
    href: "/servicii/sori-rotitori",
    descriere: "Efecte pirotehnice dinamice la sol sub formă de sori de foc strălucitori.",
    about: "Sorii rotitori sunt elemente de pirotehnie la sol care creează o dinamică circulară spectaculoasă. Aceștia se rotesc cu viteză, aruncând scântei aurii sau argintii într-un design hipnotic. Sunt ideali pentru a flanca un culoar de primire sau pentru a completa un foc de artificii principal cu efecte de joasă înălțime.",
    img: "/images/placeholder/sori-rotitori.jpg",
    subCategories: [
      "Efecte statice și rotative",
      "Înălțime 2-4 metri",
      "Design circular spectaculos",
    ],
  },
  {
    title: "Inimi Pirotehnice",
    href: "/servicii/inimi-pirotehnice",
    descriere: "Simbol romantic uriaș, aprins în noapte pentru un final memorabil.",
    about: "Nimic nu spune 'dragoste' mai clar decât o inimă uriașă luminată de flăcări roșii intense în miezul nopții. Inimile pirotehnice sunt structuri metalice pregătite cu fitil special, care ard uniform timp de aproximativ un minut. Este momentul preferat al mirilor pentru o ultimă fotografie spectaculoasă înainte de finalul petrecerii.",
    img: "/images/servicii/inimi-pirotehnice.webp",
    subCategories: [
      "Inimă dublă sau simplă",
      "Culoare roșie intensă",
      "Moment foto ideal",
    ],
  },
  {
    title: "Torțe cu Artificii Reci",
    href: "/servicii/torte-artificii-reci",
    descriere: "Culoar de primire triumfal sau delimitare de spațiu cu flăcări sigure.",
    about: "Creează o intrare demnă de covorul roșu. Torțele cu scântei reci pot fi așezate de-a lungul aleii de intrare în locație, oferind un aspect premium și primitor încă din primele momente. Fiind sigure și fără flacără deschisă periculoasă, acestea oferă strălucire fără a reprezenta un risc pentru invitați sau vestimentație.",
    img: "/images/servicii/torte-artificii-reci.webp",
    subCategories: [
      "Culoar de primire",
      "Flacără rece (sigură)",
      "Aspect premium",
    ],
  },
  {
    title: "Artificii de Zi",
    href: "/servicii/artificii-zi",
    descriere: "Show intens de fum colorat și sunet, creat pentru evenimente de zi.",
    about: "Cine spune că artificiile sunt doar pentru noapte? Spectacolul de zi se bazează pe coloane de fum colorat (daylight smoke) și efecte sonore ritmate. Este o alegere excelentă pentru nunțile în aer liber, evenimente sportive sau petreceri de tip garden party, oferind un impact vizual vibrant sub lumina soarelui.",
    img: "/images/servicii/artificii-zi.webp",
    subCategories: [
      "Fum colorat dens",
      "Efecte sonore (bombe)",
      "Culori vibrante",
    ],
  },
  {
    title: "Extinctoare și Fumigene",
    href: "/servicii/extinctoare-fumigene",
    descriere: "Efecte de fum dens colorat, ideale pentru ședințe foto spectaculoase.",
    about: "Pentru amintiri pline de culoare, fumigenele de mână sau tip 'extinctor' oferă un nor dens și cromatic în fundal. Sunt extrem de populare pentru ședințele foto 'Trash the Dress' sau pentru momentele de grup cu prietenii. Culorile sunt intense și persistă suficient pentru a surprinde cadrul perfect.",
    img: "/images/placeholder/extinctoare-fumigene.jpg",
    subCategories: [
      "Timp ardere 60-90 sec",
      "Activare prin tragere",
      "Gamă variată de culori",
    ],
  },
  {
    title: "Cascadă de Vulcani",
    href: "/servicii/cascada-vulcani",
    descriere: "Un perete impresionant de scântei care curg uniform pe verticală.",
    about: "Cascada pirotehnică este unul dintre cele mai elegante efecte de exterior. Scânteile pornesc de la înălțime și curg spre sol, imitând o cascadă de apă luminoasă. Acest efect este ideal pentru a marca un moment de dans în aer liber sau pentru a crea un fundal spectaculos în spatele prezidiului amplasat în grădină.",
    img: "/images/servicii/cascada-vulcani.webp",
    subCategories: [
      "Lățime variabilă (3-10m)",
      "Efect de perete de foc",
      "Durată extinsă",
    ],
  },
];