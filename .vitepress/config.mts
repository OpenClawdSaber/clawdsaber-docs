import { defineConfig } from 'vitepress'

const base = process.env.DOCS_BASE ?? '/clawdsaber-docs/'

export default defineConfig({
  lang: 'en-US',
  title: 'ClawdSaber Documentation',
  description: 'User guide, feature walkthrough, and FAQ for the ClawdSaber desktop app.',
  base,
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: 'Quick Start', link: '/getting-started/quickstart' },
      { text: 'Features', link: '/features/chat' },
      { text: 'Settings', link: '/settings/overview' },
      { text: 'FAQ', link: '/settings/faq' }
    ],
    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Home', link: '/' },
          { text: 'Quick Start', link: '/getting-started/quickstart' },
          { text: 'Login & Registration', link: '/getting-started/login' }
        ]
      },
      {
        text: 'Features',
        items: [
          { text: 'Chat', link: '/features/chat' },
          { text: 'Agent Configuration', link: '/features/agent-config' },
          { text: 'Templates & Market', link: '/features/templates-and-market' },
          { text: 'Telegram Integration', link: '/features/telegram' },
          { text: 'Recharge', link: '/features/recharge' }
        ]
      },
      {
        text: 'Settings & Help',
        items: [
          { text: 'Settings', link: '/settings/overview' },
          { text: 'FAQ', link: '/settings/faq' }
        ]
      }
    ],
    search: {
      provider: 'local'
    },
    outline: {
      level: [2, 3],
      label: 'On this page'
    },
    docFooter: {
      prev: 'Previous',
      next: 'Next'
    },
    lastUpdated: {
      text: 'Last updated'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/OpenClawdSaber/clawdsaber-docs' }
    ],
    footer: {
      message: 'ClawdSaber Documentation',
      copyright: 'Copyright 2026 ClawdSaber'
    }
  }
})
