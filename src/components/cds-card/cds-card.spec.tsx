import { newSpecPage } from '@stencil/core/testing';
import { CdsCard } from './cds-card';

describe('cds-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CdsCard],
      html: `<cds-card></cds-card>`,
    });
    expect(page.root).toEqualHtml(`
      <cds-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cds-card>
    `);
  });
});
