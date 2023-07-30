import adapter from '@sveltejs/adapter-auto';
import path from 'path';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			'@coreEntities': path.resolve('./src/lib/core/layout/entities'),
			'@coreFeatures': path.resolve('./src/lib/core/layout/features'),
			'@coreProcesses': path.resolve('./src/lib/core/layout/processes'),
			'@coreShared': path.resolve('./src/lib/core/layout/shared'),
			'@coreWidgets': path.resolve('./src/lib/core/layout/widgets'),
		}
	}
};

export default config;
