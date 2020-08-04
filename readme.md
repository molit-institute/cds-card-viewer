# CDS Card Viewer
UI-Component for displaying CDS cards following the CDS Hooks specification at [https://cds-hooks.hl7.org/1.0/#card-attributes]

## Install

- Run `npm install @molit/cds-card-viewer --save`

## Usage

### Angular, React, Vue

- Add the following to your 
    - Angular: `main.ts`
    - React: `index.js`
    - Vue: `main.js`

```js
import { applyPolyfills, defineCustomElements } from '@molit/cds-card-viewer/loader';

applyPolyfills().then(() => { 
    // Surrounding defineCustomElemnts() with applyPolyfills() is only needed if older browsers are targeted
    defineCustomElements();
});
```
- <i> Only in Angular:</i> In your `app.module.ts` add the following 

```js
import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
```
- Then you can use the element anywhere in your template, JSX, html etc

### HTML/JavaScript

#### Script tag

- Add the script tag `<script src="https://unpkg.com/@molit/cds-card-viewer/dist/cds-card-viewer.js"></script>` to the head of your `index.html`
- Then you can use the element anywhere in your template, JSX, html etc

#### Node Modules
- Run `npm install @molit/cds-card-viewer --save`
- Add the script tag `<script src="/node_modules/@molit/cds-card-viewer/dist/cds-card-viewer.js"></script>` to the head of your `index.html`
- Then you can use the element anywhere in your template, JSX, html etc

Need more information? Check out the [StencilJS Framework Integration Guide](https://stenciljs.com/docs/overview).

## Components

| Name                                  | Description                   | Example                               |
| ------------------------------------- | ------------------------------| ------------------------------------- |
| [cds-card](src/components/cds-card)   | Displays the given CDS card.  | `<cds-card card='{...}'></cds-card>`  |

----------------------------------------------

<footer> <i>Built with love! by MOLIT Institut gGmbH ❤❤</i> </footer>
