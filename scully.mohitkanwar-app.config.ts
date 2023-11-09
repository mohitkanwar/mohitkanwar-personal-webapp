import { ScullyConfig } from '@scullyio/scully';
import '@scullyio/scully-plugin-puppeteer';

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'mohitkanwar-app',
  outDir: './dist/static',
  routes: {
    '/tech/:blogId': {
      type: 'contentFolder',
      blogId: {
        folder: './src/assets/md/technology',
      },
    },
  },
};