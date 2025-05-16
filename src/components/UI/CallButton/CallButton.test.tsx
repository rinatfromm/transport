import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import CallButton from './index';
import * as reactResponsive from 'react-responsive';
import styles from './CallButton.module.css';

vi.useFakeTimers();

describe('CallButton', () => {
  const phoneNumber = '1234567890';

  beforeEach(() => {
    vi.clearAllTimers();
  });

  it('renders with correct phone number href', () => {
    vi.spyOn(reactResponsive, 'useMediaQuery').mockReturnValue(true); // мобильный
    render(<CallButton phoneNumber={phoneNumber} />);
    const button = screen.getByRole('link', { name: /call/i });
    expect(button).toHaveAttribute('href', `tel:${phoneNumber}`);
  });

  it('does not display on desktop', () => {
    vi.spyOn(reactResponsive, 'useMediaQuery').mockReturnValue(false); // десктоп
    render(<CallButton phoneNumber={phoneNumber} />);
    const button = screen.queryByRole('link', { name: /call/i });
    expect(button).toBeNull();
  });

  it('toggles shake class on interval', async () => {
    vi.spyOn(reactResponsive, 'useMediaQuery').mockReturnValue(true);
    render(<CallButton phoneNumber={phoneNumber} />);
    const button = screen.getByRole('link', { name: /call/i });


    expect(button.className).not.toContain(styles.shake);


    await act(async () => {
      vi.advanceTimersByTime(3000);
    });
    expect(button.className).toContain(styles.shake);


    await act(async () => {
      vi.advanceTimersByTime(1000);
    });
    expect(button.className).not.toContain(styles.shake);
  });
});