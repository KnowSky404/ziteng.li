import { assetPath } from '../assetPath'

const projectSources = [
  {
    id: 'sing-box-vps',
    name: 'sing-box-vps',
    href: 'https://github.com/KnowSky404/sing-box-vps',
    tags: ['Shell', 'sing-box', 'systemd'],
  },
  {
    id: 'subman',
    name: 'SubMan',
    href: 'https://github.com/KnowSky404/SubMan',
    tags: ['SvelteKit', 'TypeScript', 'Cloudflare'],
    image: assetPath('media/subman.png'),
  },
  {
    id: 'gist-ledger',
    name: 'gist-ledger',
    href: 'https://github.com/KnowSky404/gist-ledger',
    tags: ['React', 'TypeScript', 'GitHub Gist'],
    image: assetPath('media/gist-ledger.png'),
  },
  {
    id: 'puretools',
    name: 'PureTools',
    href: 'https://github.com/KnowSky404/PureTools',
    tags: ['Svelte 5', 'TypeScript', 'Local-first'],
    image: assetPath('media/puretools.png'),
  },
  {
    id: 'n2api',
    name: 'N2API',
    href: 'https://github.com/KnowSky404/N2API',
    tags: ['Go', 'SvelteKit', 'PostgreSQL'],
    image: assetPath('media/n2api.png'),
  },
]

const serviceSources = [
  {
    id: 'puretools',
    name: 'PureTools',
    href: 'https://puretools.knowsky.info/',
    domain: 'puretools.knowsky.info',
  },
  {
    id: 'subman',
    name: 'SubMan',
    href: 'https://subman.knowsky.info/',
    domain: 'subman.knowsky.info',
  },
  {
    id: 'gist-ledger',
    name: 'gist-ledger',
    href: 'https://gist-ledger.knowsky.info/',
    domain: 'gist-ledger.knowsky.info',
  },
  {
    id: 'komari',
    name: 'Komari 探针',
    href: 'https://tz.knowsky.info/',
    domain: 'tz.knowsky.info',
  },
  {
    id: 'microbin',
    name: 'MicroBin',
    href: 'https://microbin.knowsky.info/',
    domain: 'microbin.knowsky.info',
  },
  {
    id: 'mail',
    name: '私人临时邮箱',
    href: 'https://mail.knowsky.info/',
    domain: 'mail.knowsky.info',
  },
  {
    id: 'danmu-api',
    name: 'danmu-api',
    href: 'https://danmu-api.knowsky.info/',
    domain: 'danmu-api.knowsky.info',
  },
  {
    id: 'sub2api',
    name: 'sub2api 中转站',
    href: 'https://sub2api.knowsky.info/',
    domain: 'sub2api.knowsky.info',
  },
]

const personalSources = [
  { id: 'life-blog', href: 'https://i.ziteng.li' },
  { id: 'dev-blog', href: 'https://blog.ziteng.li' },
  { id: 'github', href: 'https://github.com/KnowSky404' },
  { id: 'telegram', href: 'https://t.me/celery_pm_bot' },
  { id: 'email', href: 'mailto:pm@ziteng.li' },
]

const copy = {
  'zh-CN': {
    navigation: [
      { label: '项目', href: '#projects' },
      { label: '服务', href: '#services' },
      { label: '博客', href: '#writing' },
      { label: '联系', href: '#contact' },
    ],
    controls: {
      home: '返回首页',
      skipContent: '跳到主要内容',
      quickNavigation: '页面快捷入口',
      primaryNavigation: '主导航',
      mobileNavigation: '移动端导航',
      openMenu: '打开菜单',
      closeMenu: '关闭菜单',
      light: '使用浅色主题',
      dark: '使用深色主题',
      switchLanguage: 'Switch to English',
    },
    hero: {
      name: '李子腾',
      role: 'AI 时代，被智能体鞭策的伪全栈开发者',
      summary:
        '在浏览器、终端与自托管基础设施之间，持续构建能真正用起来的产品、工具与服务。',
      avatarAlt: '李子腾的 GitHub 头像',
      quickLinks: [
        { label: '浏览项目', href: '#projects' },
        { label: '使用服务', href: '#services' },
        { label: '阅读博客', href: '#writing' },
        { label: '和我聊聊', href: '#contact' },
      ],
    },
    featured: {
      label: '代表服务',
      name: 'PureTools',
      description: '轻量、隐私优先的开发者工具箱，核心处理在浏览器本地完成。',
      action: '打开 PureTools',
      imageAlt: 'PureTools 开发者工具箱首页',
    },
    sections: {
      projects: {
        index: '01',
        title: '正在构建',
        description: '从 VPS 自动化到 AI 网关，一些持续维护并解决真实问题的开源项目。',
        action: '查看仓库',
      },
      services: {
        index: '02',
        title: '在线服务',
        description: '部署在互联网上，可以直接打开使用的工具、面板与 API。',
        action: '打开服务',
      },
      writing: {
        index: '03',
        title: '写作与记录',
        description: '生活放在生活里，开发留给开发。',
      },
    },
    projectDescriptions: {
      'sing-box-vps': '面向 VPS 的 sing-box 一键安装与管理脚本，覆盖常用协议、WARP 与自动化运维。',
      subman: 'Gist-first 的纯前端代理订阅工作台，用一份 Workspace Gist 管理、聚合并发布订阅。',
      'gist-ledger': '以私有 GitHub Gist 为云端数据源的无后端个人账本，兼顾预算、统计与多端同步。',
      puretools: '轻量、隐私优先的纯前端开发者工具箱，让常用处理尽可能留在本地浏览器。',
      n2api: '个人自托管的 AI API 与账号网关，统一 OAuth 账号和 API-key 上游为 OpenAI-compatible API。',
    },
    serviceDetails: {
      puretools: { type: '开发者工具', description: '浏览器内完成常用开发与文本处理。' },
      subman: { type: '订阅管理', description: '管理、聚合并发布代理订阅。' },
      'gist-ledger': { type: '个人账本', description: '以私有 Gist 同步个人财务数据。' },
      komari: { type: '基础设施', description: '查看服务器运行状态与资源指标。' },
      microbin: { type: '文本分享', description: '快速创建临时文本与代码片段。' },
      mail: { type: '邮件工具', description: '按需使用的私人临时邮箱入口。' },
      'danmu-api': { type: '开放 API', description: '为应用提供弹幕数据接口。' },
      sub2api: { type: 'API 网关', description: '个人使用的模型 API 中转入口。' },
    },
    personalDetails: {
      'life-blog': { label: '个人生活博客', description: '日常、见闻与生活记录。' },
      'dev-blog': { label: '个人开发博客', description: '技术笔记、开发过程与复盘。' },
      github: { label: 'GitHub', description: '代码、项目与公开协作。' },
      telegram: { label: 'Telegram', description: '通过 Telegram 与我联系。' },
      email: { label: '邮件', description: '发送邮件到 pm@ziteng.li。' },
    },
    footer: {
      title: '保持联系',
      description: '项目交流、问题反馈，或者只是打个招呼。',
      copyright: '李子腾',
    },
  },
  en: {
    navigation: [
      { label: 'Projects', href: '#projects' },
      { label: 'Services', href: '#services' },
      { label: 'Writing', href: '#writing' },
      { label: 'Contact', href: '#contact' },
    ],
    controls: {
      home: 'Back to home',
      skipContent: 'Skip to main content',
      quickNavigation: 'Page shortcuts',
      primaryNavigation: 'Primary navigation',
      mobileNavigation: 'Mobile navigation',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      light: 'Use light theme',
      dark: 'Use dark theme',
      switchLanguage: '切换到中文',
    },
    hero: {
      name: 'Ziteng Li',
      role: 'A pseudo full-stack developer kept honest by AI agents.',
      summary:
        'Building practical products, tools, and services across the browser, terminal, and self-hosted infrastructure.',
      avatarAlt: "Ziteng Li's GitHub avatar",
      quickLinks: [
        { label: 'Explore projects', href: '#projects' },
        { label: 'Use my services', href: '#services' },
        { label: 'Read my writing', href: '#writing' },
        { label: 'Start a conversation', href: '#contact' },
      ],
    },
    featured: {
      label: 'Featured service',
      name: 'PureTools',
      description: 'A lightweight, privacy-first developer toolbox that keeps core processing in your browser.',
      action: 'Open PureTools',
      imageAlt: 'PureTools developer toolbox homepage',
    },
    sections: {
      projects: {
        index: '01',
        title: 'Building now',
        description: 'Open-source work spanning VPS automation, local-first tools, and self-hosted AI infrastructure.',
        action: 'View repository',
      },
      services: {
        index: '02',
        title: 'Online services',
        description: 'Tools, dashboards, and APIs deployed on the public web and ready to open.',
        action: 'Open service',
      },
      writing: {
        index: '03',
        title: 'Writing and notes',
        description: 'Life stays with life. Development gets its own notebook.',
      },
    },
    projectDescriptions: {
      'sing-box-vps': 'A one-command sing-box installer and manager for VPS deployments, common protocols, WARP, and operations.',
      subman: 'A Gist-first subscription workspace for managing, aggregating, and publishing proxy subscriptions.',
      'gist-ledger': 'A backend-free personal ledger that uses a private GitHub Gist for budgets, reporting, and sync.',
      puretools: 'A lightweight, privacy-first developer toolbox that keeps routine processing in the local browser.',
      n2api: 'A self-hosted AI account and API gateway that exposes OAuth and API-key upstreams through one compatible API.',
    },
    serviceDetails: {
      puretools: { type: 'Developer tools', description: 'Everyday developer and text utilities in the browser.' },
      subman: { type: 'Subscriptions', description: 'Manage, aggregate, and publish proxy subscriptions.' },
      'gist-ledger': { type: 'Personal finance', description: 'Sync private ledger data through GitHub Gist.' },
      komari: { type: 'Infrastructure', description: 'Inspect server availability and resource metrics.' },
      microbin: { type: 'Paste service', description: 'Share temporary text and code snippets.' },
      mail: { type: 'Email utility', description: 'A private temporary mailbox when one is needed.' },
      'danmu-api': { type: 'Public API', description: 'Programmatic access to danmu data.' },
      sub2api: { type: 'API gateway', description: 'A personal model API relay endpoint.' },
    },
    personalDetails: {
      'life-blog': { label: 'Personal blog', description: 'Notes from daily life and everything around it.' },
      'dev-blog': { label: 'Development blog', description: 'Technical notes, build logs, and retrospectives.' },
      github: { label: 'GitHub', description: 'Code, projects, and public collaboration.' },
      telegram: { label: 'Telegram', description: 'Reach me directly on Telegram.' },
      email: { label: 'Email', description: 'Send a message to pm@ziteng.li.' },
    },
    footer: {
      title: 'Stay in touch',
      description: 'Project ideas, bug reports, or simply a hello.',
      copyright: 'Ziteng Li',
    },
  },
}

export const THEME_OPTIONS = ['system', 'light', 'dark']

export function getSiteContent(language) {
  const languageCopy = copy[language] ?? copy['zh-CN']

  return {
    ...languageCopy,
    projects: projectSources.map((project) => ({
      ...project,
      description: languageCopy.projectDescriptions[project.id],
    })),
    services: serviceSources.map((service) => ({
      ...service,
      ...languageCopy.serviceDetails[service.id],
    })),
    personalLinks: personalSources.map((link) => ({
      ...link,
      ...languageCopy.personalDetails[link.id],
    })),
  }
}
