import { render, screen } from '@testing-library/react'
import App from './App'

test('renders the core homepage sections for the personal site', () => {
  render(<App />)

  expect(
    screen.getByRole('heading', { name: /independent developer/i }),
  ).toBeInTheDocument()
  expect(
    screen.getByRole('heading', { name: /selected projects/i }),
  ).toBeInTheDocument()
  expect(
    screen.getByRole('heading', { name: /online services/i }),
  ).toBeInTheDocument()

  expect(screen.getAllByTestId('project-card').length).toBeGreaterThan(2)
  expect(screen.getAllByTestId('service-card').length).toBeGreaterThan(1)
})
