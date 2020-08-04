import { newSpecPage } from '@stencil/core/testing';
import { CdsCard } from './cds-card';

describe('cds-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CdsCard],
      html: `<cds-card card='{"summary":"No Studies can be suggested.","detail":"No subtype found for patient","indicator":"critical","source":null,"suggestions":null,"selectionBehavior":null,"links":null}'></cds-card>`,
    });
    expect(page.root).toEqualHtml(`
     <cds-card card="{&quot;summary&quot;:&quot;No Studies can be suggested.&quot;,&quot;detail&quot;:&quot;No subtype found for patient&quot;,&quot;indicator&quot;:&quot;critical&quot;,&quot;source&quot;:null,&quot;suggestions&quot;:null,&quot;selectionBehavior&quot;:null,&quot;links&quot;:null}">       
       <div class="card my-card">
         <div class="card-body">
           <div>
             <h4>
               No Studies can be suggested.
             </h4>
             <small></small>
             <br>
             <p>
               No subtype found for patient
             </p>
           </div>
         </div>
       </div>
     </cds-card>
    `);
  });
});
