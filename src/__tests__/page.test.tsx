// src/__tests__/page.test.tsx
import { render, screen } from '@testing-library/react';
import HomePage from '../app/page';

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: () => null
    };
  }
}));

describe('HomePage', () => {
  it('renders main heading', () => {
    render(<HomePage />);
    expect(screen.getByText('HIK Device Management')).toBeInTheDocument();
  });

  it('renders configure device card', () => {
    render(<HomePage />);
    expect(screen.getByText('Configure Device')).toBeInTheDocument();
  });
});
