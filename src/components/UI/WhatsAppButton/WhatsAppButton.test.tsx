import { render, screen } from '@testing-library/react';
import WhatsAppButton from './index';

describe('WhatsAppButton', () => {
    it('рендерится с правильным href и картинкой', () => {
        const phoneNumber = '1234567890';
        const message = 'Hello, test message!';

        render(<WhatsAppButton phoneNumber={phoneNumber} message={message} />);

        const link = screen.getByRole('link', { name: /whatsapp/i });
        expect(link).toBeInTheDocument();

        const expectedUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        expect(link).toHaveAttribute('href', expectedUrl);
        expect(link).toHaveAttribute('target', '_blank');
        expect(link).toHaveAttribute('rel', 'noopener noreferrer');

        const img = screen.getByAltText('WhatsApp');
        expect(img).toBeInTheDocument();
    });
});