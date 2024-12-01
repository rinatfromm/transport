import { mdiShieldCheck, mdiTruck, mdiMessage, mdiTimerSand } from '@mdi/js';
import { Services } from '../types/services'



export const services: Services[] = [
    {
        id: 'deliveryGuarantee',
        icon: mdiShieldCheck,
        title: 'Liefergarantie',
        description: '8 Jahre zuverlässiger Betrieb.'
    },
    {
        id: 'multimodalTransport',
        icon: mdiTruck,
        title: 'Multimodale Transporte',
        description: 'Wir bieten bequeme und schnelle Transporte mit verschiedenen Verkehrsmitteln an.'
    },
    {
        id: 'consultation',
        icon: mdiMessage,
        title: 'Beratung',
        description: 'Unsere Experten stehen Ihnen jederzeit für Transportfragen zur Verfügung.'
    },
    {
        id: 'timeSaving',
        icon: mdiTimerSand,
        title: 'Zeitersparnis',
        description: 'Unsere Lösungen helfen Ihnen, Zeit bei der Organisation von Transporten zu sparen.'
    },
]