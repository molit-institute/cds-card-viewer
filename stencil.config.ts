import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'cds-card-viewer',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme',
      footer: '*Built with love! by MOLIT Institut gGmbH ❤❤*',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    }
  ]
};
