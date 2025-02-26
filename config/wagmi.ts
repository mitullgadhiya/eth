'use client'
// config/index.tsx

import { cookieStorage, createStorage, http } from '@wagmi/core'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { mainnet, bsc } from '@reown/appkit/networks'

// Get projectId from https://cloud.reown.com
export const projectId = '11ce127cd437eec40ae569df49b8f4bb'

if (!projectId) {
  throw new Error('Project ID is not defined')
}

export const networks = [mainnet, bsc]

//Set up the Wagmi Adapter (Config)
export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage
  }),
  ssr: true,
  projectId,
  networks
})

export const config = wagmiAdapter.wagmiConfig