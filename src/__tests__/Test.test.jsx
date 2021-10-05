import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Test from '../Test';

describe('Test', () => {
  it('greets a name', () => {
    const name = 'World';

    render(<Test name={name} />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      `Hello, ${name}!`,
    );
  });
});
