import { render, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './index';

describe('ScrollToTop', () => {
    it('should scroll to the top when pathname changes', () => {
        const scrollToSpy = vi.spyOn(window, 'scrollTo').mockImplementation(() => { });

        render(
            <BrowserRouter>
                <ScrollToTop />
            </BrowserRouter>
        );

        act(() => {
            window.history.pushState({}, '', '/new-path');
            window.dispatchEvent(new PopStateEvent('popstate'));
        });

        expect(scrollToSpy).toHaveBeenCalledWith(0, 0);
        scrollToSpy.mockRestore();
    });
});













