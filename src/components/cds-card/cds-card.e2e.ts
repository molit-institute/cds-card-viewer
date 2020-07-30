import { newE2EPage } from '@stencil/core/testing';

describe('cds-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cds-card card=\'{\"summary\":\"summary\",\"detail\":\"detail\",\"indicator\":\"info\",\"source\":{\"label\":\"MOLIT Institute\",\"url\":\"https:\/\/molit.eu\/\",\"icon\":\"https:\/\/molit.eu\/wp-content\/uploads\/2017\/01\/favicon.png\"},\"suggestions\":[{\"label\":\"Human-readable suggestion label\",\"uuid\":\"e1187895-ad57-4ff7-a1f1-ccf954b2fe46\",\"actions\":[{\"type\":\"create\",\"description\":\"action 2\",\"resource\":{\"resourceType\":\"MedicationRequest\"}}]}],\"selectionBehavior\":\"at-most-one\",\"links\":[{\"label\":\"link\",\"url\":\"https:\/\/clinicaltrials.gov\/ct2\/show\/NCT02467582\",\"type\":\"Clinical Trial\",\"appContext\":null}]}\' show-suggestion-actions="true"></cds-card>');
    const element = await page.find('cds-card');
    expect(element).toHaveClass('hydrated');
  });
});
