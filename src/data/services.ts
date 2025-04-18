import { mdiShieldCheck, mdiTruck, mdiMessage, mdiTimerSand } from '@mdi/js';
import { Services } from '../types/Services'



export const services: Services[] = [
    {
        id: 'deliveryGuarantee',
        icon: mdiShieldCheck,
        title: 'Liefergarantie',
        description: 'Seit 2008 Ihr zuverlässiger Partner für Umzüge und Transporte'
    },
    {
        id: 'multimodalTransport',
        icon: mdiTruck,
        title: 'Multimodale Transporte',
        description: 'Wir bieten bequeme und schnelle Transporte mit verschiedenen Verkehrsmitteln an'
    },
    {
        id: 'consultation',
        icon: mdiMessage,
        title: 'Beratung',
        description: 'Unsere Experten stehen Ihnen jederzeit für Transportfragen zur Verfügung'
    },
    {
        id: 'timeSaving',
        icon: mdiTimerSand,
        title: 'Zeitersparnis',
        description: 'Unsere Lösungen helfen Ihnen, Zeit bei der Organisation von Transporten zu sparen'
    },
]