import { screen } from '@testing-library/react';

describe('index', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="app"></div>';
    jest.requireActual('..');
  });

  it('greets the world', () => {
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      `Hello, World!`,
    );
  });
});
