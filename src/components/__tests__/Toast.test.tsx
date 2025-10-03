import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Toast from '../Toast';

describe('Toast Component', () => {
  it('renders toast with message', () => {
    render(<Toast message="Test message" type="success" onClose={vi.fn()} />);
    expect(screen.getByText(/test message/i)).toBeInTheDocument();
  });

  it('displays success icon for success type', () => {
    render(<Toast message="Success!" type="success" onClose={vi.fn()} />);
    expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(screen.getByRole('alert')).toHaveClass('bg-green-50');
  });

  it('displays error icon for error type', () => {
    render(<Toast message="Error!" type="error" onClose={vi.fn()} />);
    expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(screen.getByRole('alert')).toHaveClass('bg-red-50');
  });

  it('calls onClose when close button is clicked', async () => {
    const handleClose = vi.fn();
    const user = userEvent.setup();

    render(<Toast message="Test" type="info" onClose={handleClose} />);

    const closeButton = screen.getByRole('button', { name: /close/i });
    await user.click(closeButton);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('auto-dismisses after duration', async () => {
    const handleClose = vi.fn();
    vi.useFakeTimers();

    render(<Toast message="Test" type="info" onClose={handleClose} duration={1000} />);

    expect(handleClose).not.toHaveBeenCalled();

    await vi.advanceTimersByTimeAsync(1000);

    expect(handleClose).toHaveBeenCalledTimes(1);

    vi.useRealTimers();
  });

  it('has proper accessibility attributes', () => {
    render(<Toast message="Test" type="success" onClose={vi.fn()} />);

    const alert = screen.getByRole('alert');
    expect(alert).toHaveAttribute('aria-live', 'polite');
  });
});
