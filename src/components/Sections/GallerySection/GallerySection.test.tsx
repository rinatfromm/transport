import { render, screen } from '@testing-library/react';
import GallerySection from './index';
import { vi } from 'vitest';

beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });
  window.HTMLElement.prototype.scrollIntoView = vi.fn();
});

vi.mock('embla-carousel-react', () => ({
  default: () => [
    vi.fn(),
    {
      on: vi.fn(),
      canScrollPrev: () => false,
      canScrollNext: () => false,
      scrollPrev: vi.fn(),
      scrollNext: vi.fn(),
    },
  ],
}));

describe('GallerySection', () => {
  test('renders without crashing', () => {
    render(<GallerySection />);
    expect(screen.getByTestId('gallery-section')).toBeInTheDocument();
  });
});













