import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1]

export default defineConfig({
    base: process.env.GITHUB_ACTIONS && repositoryName
        ? `/${repositoryName}/`
        : '/',
    plugins: [
        tailwindcss(),
    ],
    build: {
        rollupOptions: {
            input: {
                main: resolve(process.cwd(), 'index.html'),
                mission: resolve(process.cwd(), 'mission.html'),
                team: resolve(process.cwd(), 'team.html'),
                pending: resolve(process.cwd(), 'pending.html'),
            },
        },
    },
})
