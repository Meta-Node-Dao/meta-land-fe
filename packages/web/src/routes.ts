export const layoutGroupedRoutes = {
  'empty/index': ['/ipfs/raw/*'],
  'auth/index': ['/auth/login', '/auth/callback/*', '/auth/register/*', '/auth/association'],
  // 'fullpage/index': ['/builder'],
  'profile/index': ['/profile/*']
  // default: ['*']
} as const

// 复制/auth/login配置到invite、launch路由
export const morePath = {
  '/auth/login': [
    {
      name: 'invite',
      path: '/invite'
    },
    {
      name: 'launch',
      path: '/launch'
    }
  ]
} as const
