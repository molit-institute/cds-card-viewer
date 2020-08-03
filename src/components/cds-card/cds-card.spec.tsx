import { newSpecPage } from '@stencil/core/testing';
import { CdsCard } from './cds-card';

describe('cds-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CdsCard],
      html: `<cds-card 
      card='{"summary":"summary","detail":"detail","indicator":"info","source":{"label":"MOLIT Institute","url":"https://molit.eu/","icon":"https://molit.eu/wp-content/uploads/2017/01/favicon.png"},"suggestions":[{"label":"Human-readable suggestion label","uuid":"e1187895-ad57-4ff7-a1f1-ccf954b2fe46","actions":[{"type":"create","description":"action 2","resource":{"resourceType":"MedicationRequest"}}]}],"selectionBehavior":"at-most-one","links":[{"label":"link","url":"https://clinicaltrials.gov/ct2/show/NCT02467582","type":"Clinical Trial","appContext":null}]}'
      show-suggestion-actions="true"></cds-card>`,
    });
    expect(page.root).toEqualHtml(`
      <cds-card 
        card='{"summary":"summary","detail":"detail","indicator":"info","source":{"label":"MOLIT Institute","url":"https://molit.eu/","icon":"https://molit.eu/wp-content/uploads/2017/01/favicon.png"},"suggestions":[{"label":"Human-readable suggestion label","uuid":"e1187895-ad57-4ff7-a1f1-ccf954b2fe46","actions":[{"type":"create","description":"action 2","resource":{"resourceType":"MedicationRequest"}}]}],"selectionBehavior":"at-most-one","links":[{"label":"link","url":"https://clinicaltrials.gov/ct2/show/NCT02467582","type":"Clinical Trial","appContext":null}]}'
        show-suggestion-actions="true"
      >
         <div class="card my-card">
           <div class="card-body">
             <div>
               <h4>
                 summary
               </h4>
               <small>
                 Source:
                 <img height="15" src="https://molit.eu/wp-content/uploads/2017/01/favicon.png">
                 <a href="https://molit.eu/" target="_blank">
                   MOLIT Institute
                 </a>
               </small>
               <br>
               <p>
                 detail
               </p>
               <div>
                 <h5>
                   Suggestions
                 </h5>
                 <ul class="list-group">
                   <li class="grid-1 list-group-item list-group-item-primary">
                     <div class="item1">
                       Human-readable suggestion label
                       <ul>
                         <li>
                           action 2
                         </li>
                       </ul>
                     </div>
                     <button class="bottom-right btn btn-primary" type="button">
                       accept
                     </button>
                   </li>
                 </ul>
               </div>
               <div>
                 <h5>
                   Links
                 </h5>
                 <div>
                   <button class="btn btn-block btn-primary my-btn" type="button">
                     link
                   </button>
                 </div>
               </div>
             </div>
           </div>
         </div>
      </cds-card>
    `);
  });
});
