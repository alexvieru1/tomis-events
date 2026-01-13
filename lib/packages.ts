export interface Pachet {
    name: string;
    description: string;
    features: string[];
    isPopular: boolean;
}

export const packages: Pachet[] = [
    {
        name: 'Pachet Silver Indoor',
        description: 'Efectele esențiale pentru un dans al mirilor magic și un moment deosebit la servirea tortului.',
        features: [
            'Artificii ring interior',
            'Fum greu pentru dansul mirilor',
            'Artificii tort'
        ],
        isPopular: false
    },
    {
        name: 'Pachet Dynamic Indoor',
        description: 'Adaugă un plus de mișcare și spectacol vizual cu artificii rotative pe ringul de dans.',
        features: [
            'Artificii rotative ring interior',
            'Fum greu pentru dansul mirilor',
            'Artificii tort',
        ],
        isPopular: false
    },
    {
        name: 'Pachet Magic Bubbles',
        description: 'Un mix deosebit între eleganța fumului greu și veselia baloanelor pline de fum.',
        features: [
            'Artificii ring interior',
            'Fum greu pentru dansul mirilor',
            'Artificii tort',
            'Mașină de baloane cu fum',
        ],
        isPopular: true // Sugestie: acesta este de obicei foarte căutat
    },
    {
        name: 'Pachet Show Complet',
        description: 'O experiență senzorială totală: de la efecte laser moderne până la atmosfera de poveste a zăpezii.',
        features: [
            'Artificii ring interior',
            'Fum greu pentru dansul mirilor',
            'Artificii tort',
            'Laser show',
            'Mașină de zăpadă',
        ],
        isPopular: false
    },
    {
        name: 'Pachet Stage Pro',
        description: 'Soluția ideală pentru evenimente corporate sau nunți de amploare care necesită tehnică de top.',
        features: [
            'Scenă lumini profesională',
            'Ecran LED FullHD',
        ],
        isPopular: false
    },
    {
        name: 'Pachet Outdoor Celebration',
        description: 'Creat special pentru primirea invitaților și momentele festive desfășurate în aer liber pe timpul zilei.',
        features: [
            'Artificii de zi',
            'Două extinctoare colorate',
            'Două fumigene',
            'Decor baloane',
            'Artificii exterior'
        ],
        isPopular: false
    },
    {
        name: 'Spectacol Sky Classic',
        description: 'Un foc de artificii intens, perfect pentru a marca finalul unei seri de neuitat.',
        features: [
            'Artificii de noapte 3-4 minute',
            '4-5 lovituri per secundă'
        ],
        isPopular: false
    },
    {
        name: 'Spectacol Sky Premium',
        description: 'Mai multă intensitate și o durată prelungită pentru un impact vizual garantat.',
        features: [
            'Artificii de noapte 5 minute',
            '7-8 lovituri per secundă'
        ],
        isPopular: false
    },
    {
        name: 'Spectacol Sky Panoramic',
        description: 'Lansări simultane din două puncte pentru o acoperire largă a cerului și un efect spectaculos.',
        features: [
            'Artificii de noapte 5 minute',
            '7-8 lovituri per secundă',
            '2 poziții de lansare'
        ],
        isPopular: true
    },
    {
        name: 'Spectacol Piromuzical Elite',
        description: 'Arta pirotehnică întâlnește muzica. Un show coregrafiat unde exploziile dansează pe ritm.',
        features: [
            'Artificii de noapte 6-7 minute Piromuzical',
            'Sincronizare artificii cu ritmul muzicii',
        ],
        isPopular: false
    },
    {
        name: 'Pachet Tradițional & Gold',
        description: 'Elemente pirotehnice clasice ce creează o atmosferă caldă și strălucitoare.',
        features: [
            'Doi sori rotitori',
            'Cascadă de vulcani',
            'Artificii de tort'
        ],
        isPopular: false
    }
]