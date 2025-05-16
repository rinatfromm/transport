import { render, screen } from '@testing-library/react';
import TransportServicesSection from './index';
import '@testing-library/jest-dom';

describe('TransportServicesSection', () => {
    it('renders the section with proper text and services list', () => {
        render(<TransportServicesSection />);

        expect(screen.getByText(/Warum Ruppel-Transporte?/i)).toBeInTheDocument();
        expect(screen.getByText(/Kurzfristige Verfügbarkeit/i)).toBeInTheDocument();
        expect(screen.getByText(/Schnelle Angebotsbearbeitung/i)).toBeInTheDocument();
        expect(screen.getByText(/Transparente Preise – Keine versteckten Kosten/i)).toBeInTheDocument();

        expect(screen.getByText(/Ob Umzüge, Möbeltransporte oder größere Einkäufe wie Maschinen – wir erledigen alles aus einer Hand!/i)).toBeInTheDocument();

        expect(screen.getByText(/Seniorenumzüge/i)).toBeInTheDocument();
        expect(screen.getByText(/Studentenumzüge/i)).toBeInTheDocument();

        expect(screen.getByText(/Kontaktieren Sie uns/i)).toBeInTheDocument();
        expect(screen.getByText(/Telefon | E-Mail/i)).toBeInTheDocument();
        expect(screen.getByText(/Rechnung gemäß Kleinunternehmerregelung/i)).toBeInTheDocument();
        expect(screen.getByText(/Wir freuen uns auf Ihre Anfrage!/i)).toBeInTheDocument();
    });
});

