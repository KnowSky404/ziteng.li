import { fireEvent, render, screen } from '@testing-library/react'
import App from './App'

beforeEach(() => {
  window.localStorage.clear()
  document.documentElement.removeAttribute('data-theme')
  document.documentElement.lang = 'en'
})

test('renders the Chinese personal homepage with all supplied projects and services', () => {
  render(<App />)

  expect(
    screen.getByRole('navigation', { name: '主导航' }),
  ).toBeInTheDocument()
  expect(
    screen.getByRole('heading', { level: 1, name: '李子腾' }),
  ).toBeInTheDocument()
  expect(
    screen.getByText('AI 时代，被智能体鞭策的伪全栈开发者'),
  ).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: '正在构建' })).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: '在线服务' })).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: '写作与记录' })).toBeInTheDocument()

  expect(screen.getAllByTestId('project-card')).toHaveLength(5)
  expect(screen.getAllByTestId('service-card')).toHaveLength(8)

  expect(
    screen.getByRole('link', { name: /sing-box-vps/i }),
  ).toHaveAttribute('href', 'https://github.com/KnowSky404/sing-box-vps')
  expect(screen.getByRole('link', { name: /komari 探针/i })).toHaveAttribute(
    'href',
    'https://tz.knowsky.info/',
  )
  expect(screen.getByRole('link', { name: /个人生活博客/i })).toHaveAttribute(
    'href',
    'https://i.ziteng.li',
  )
  expect(screen.getByRole('link', { name: /pm@ziteng.li/i })).toHaveAttribute(
    'href',
    'mailto:pm@ziteng.li',
  )
})

test('switches theme and persists the explicit preference', () => {
  render(<App />)

  fireEvent.click(screen.getByRole('button', { name: '使用深色主题' }))

  expect(document.documentElement).toHaveAttribute('data-theme', 'dark')
  expect(window.localStorage.getItem('ziteng.li.theme')).toBe('dark')
})

test('switches the complete page copy to English and updates document language', () => {
  render(<App />)

  fireEvent.click(screen.getByRole('button', { name: 'Switch to English' }))

  expect(
    screen.getByRole('heading', { level: 1, name: 'Ziteng Li' }),
  ).toBeInTheDocument()
  expect(
    screen.getByRole('navigation', { name: 'Primary navigation' }),
  ).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: 'Building now' })).toBeInTheDocument()
  expect(document.documentElement).toHaveAttribute('lang', 'en')
  expect(window.localStorage.getItem('ziteng.li.language')).toBe('en')
})

test('opens and closes the mobile navigation disclosure', () => {
  render(<App />)

  const menuButton = screen.getByRole('button', { name: '打开菜单' })

  expect(menuButton).toHaveAttribute('aria-expanded', 'false')
  fireEvent.click(menuButton)

  expect(
    screen.getByRole('navigation', { name: '移动端导航' }),
  ).toBeInTheDocument()
  expect(
    screen.getByRole('button', { name: '关闭菜单' }),
  ).toHaveAttribute('aria-expanded', 'true')
})
