import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Upper heading is visible', () => {
    render(<App />);
    expect(screen.getByText('Ходят')).toBeVisible();
});
