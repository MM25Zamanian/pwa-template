import {defineConfig} from 'vite';
import Unfonts from 'unplugin-fonts/vite';
import Unicons from 'unplugin-icons/vite';

const DIST_PATH = './dist/';

export default defineConfig(() => {
  return {
    css: {
      postcss: 'postcss.config.js',
    },

    build: {
      target: ['esnext', 'edge100', 'firefox100', 'chrome100', 'safari18'],
      outDir: DIST_PATH,
      reportCompressedSize: true,
      commonjsOptions: {
        transformMixedEsModules: true,
      },
    },

    plugins: [
      Unicons({
        compiler: 'raw',
        autoInstall: true,
      }),
      Unfonts({
        fontsource: {
          families: ['Vazirmatn', 'Roboto'],
        },
      }),
    ],
  };
});
