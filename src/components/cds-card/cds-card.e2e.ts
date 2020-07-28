import { newE2EPage } from '@stencil/core/testing';

describe('cds-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cds-card></cds-card>');

    const element = await page.find('cds-card');
    expect(element).toHaveClass('hydrated');
  });
});
