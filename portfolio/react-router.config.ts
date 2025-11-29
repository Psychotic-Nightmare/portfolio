import type { Config } from '@react-router/dev/config';

export default {
	appDirectory: './src/app',
	ssr: false,
	prerender: false,
	// Match the Vite base (`/portfolio/`) so dev and build both work cleanly
	basename: '/portfolio/',
} satisfies Config;
