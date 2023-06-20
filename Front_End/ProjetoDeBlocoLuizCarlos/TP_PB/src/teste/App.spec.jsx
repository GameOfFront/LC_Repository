import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router, MemoryRouter,Switch } from 'react-router-dom';
import {App} from '../App.jsx'

test('navegação correta ao clicar nos links', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );

  // Verifique se a página inicial está renderizada
  expect(screen.queryAllByText(/Home/).length).toBeGreaterThan(0);

  // Clique no link "Login"
  fireEvent.click(screen.getAllByText(/Login/)[0]); // Use [0] para obter o primeiro elemento

  // Verifique se a página de login está renderizada
  expect(screen.queryAllByText(/Login/).length).toBeGreaterThan(0);
});