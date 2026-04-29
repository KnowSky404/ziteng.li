import { fireEvent, render, screen } from '@testing-library/react'
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

test('renders header utility controls for theme and language', () => {
  render(<App />)

  expect(
    screen.getByRole('group', { name: /theme preference/i }),
  ).toBeInTheDocument()
  expect(
    screen.getByRole('button', { name: /language: english/i }),
  ).toBeInTheDocument()
})

test('switches to dark theme when the dark control is pressed', () => {
  render(<App />)

  fireEvent.click(screen.getByRole('button', { name: /use dark theme/i }))

  expect(document.documentElement).toHaveAttribute('data-theme', 'dark')
})
