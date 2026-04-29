import { render, screen } from '@testing-library/react'
import App from './App'

test('renders the GitHub-inspired homepage structure', () => {
  render(<App />)

  expect(
    screen.getByRole('navigation', { name: /primary/i }),
  ).toBeInTheDocument()
  expect(
    screen.getByRole('complementary', { name: /profile summary/i }),
  ).toBeInTheDocument()
  expect(
    screen.getByRole('heading', { name: /independent developer building on the web/i }),
  ).toBeInTheDocument()
  expect(
    screen.getByRole('heading', { name: /overview/i }),
  ).toBeInTheDocument()
  expect(
    screen.getByRole('heading', { name: /pinned projects/i }),
  ).toBeInTheDocument()
  expect(
    screen.getByRole('heading', { name: /public services/i }),
  ).toBeInTheDocument()
  expect(
    screen.getByRole('link', { name: /view github profile/i }),
  ).toBeInTheDocument()

  expect(screen.getAllByTestId('project-card').length).toBeGreaterThan(2)
  expect(screen.getAllByTestId('service-card').length).toBeGreaterThan(1)
})
