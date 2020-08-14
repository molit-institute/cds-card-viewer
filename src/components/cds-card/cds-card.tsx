import { Component, h, Prop, Element, State, Watch } from '@stencil/core';
import { getLocaleComponentStrings } from "../../utils/locale";

@Component({
  tag: 'cds-card',
  styleUrl: 'cds-card.css',
  shadow: false,
  scoped: true
})
export class CdsCard {

  /**
   * CDS card to be displayed. </br>
   * Needs to be a JSON object
   */
  @Prop() card!:string;
  /**
   * If `true`, the component will show the proposed actions. 
   */
  @Prop() showSuggestionActions: boolean = true;
  /**
   * Language property of the component. </br>
   * Currently suported: [de, en]
   */
  @Prop() locale: string = "en";
  @Watch('locale')
  async watchLocale(newValue: string){
    console.log(newValue)
    this.strings = await getLocaleComponentStrings(this.element, newValue);
  }
  /**
   * If `true`, the component will end each link with an external-link icon.
   */
  @Prop() showExternalLinkIcon: boolean = true;

  @Element() element: HTMLElement;

  @State() strings: any;

  cardParsed: any;

  

  /* Validators */
  @Watch('card')
  validateCard() {
    if (this.card == null){ throw new Error('card: required'); }
  }

  /* methods */
  parseCard(){
    try {
      this.cardParsed = JSON.parse(this.card);
    } catch (e) {
      console.error("The specified string for card is not valid JSON")//TODO
    }
  }

  acceptActions(){
    //TODO
  }

  /* Lifecycle Methods */
  
  async componentWillLoad(): Promise<void> {
    try {
      this.validateCard();
      this.parseCard();
      this.strings = await getLocaleComponentStrings(this.element, this.locale);
      } catch (e) {
        console.error(e);
      }
    
  };

  render() {
    if(this.cardParsed){
      return ([
        <div class="card my-card">
          <div class="card-body">
              <div>
                {this.cardParsed.hasOwnProperty("summary") && this.cardParsed.summary!=null ?  
                  <h4>{this.cardParsed.summary}</h4>
                : null }
                <small>
                  {this.cardParsed.hasOwnProperty("source") && this.cardParsed.source!=null ? 
                    <div>
                      {this.strings.source}: {this.cardParsed.source.hasOwnProperty("icon") && this.cardParsed.source.icon!=null ? <img height="15" src={this.cardParsed.source.icon}></img> : null} 
                      {this.cardParsed.source.hasOwnProperty("url") && this.cardParsed.source.url!=null ? <a href={this.cardParsed.source.url} target="_blank">{ this.cardParsed.source.label }</a>:  this.cardParsed.source.label}
                    </div>                  
                  : null}
                </small>
                <br/>
                { this.cardParsed.hasOwnProperty("detail")&& this.cardParsed.detail!=null ? <p>{this.cardParsed.detail}</p> : null } 
                { this.cardParsed.hasOwnProperty("suggestions") && this.cardParsed.suggestions!=null ?
                  ( <div>
                      <h5>{this.strings.suggestions}</h5>
                      <ul class="list-group">
                        {this.cardParsed.suggestions.map(suggestion =>
                          <li class="list-group-item list-group-item-primary grid-1">
                            <div class="item1">
                              {suggestion.label}
                              { suggestion.hasOwnProperty("actions") && suggestion.actions!=null && this.showSuggestionActions ? 
                                ( 
                                  <ul class="card-action-ul">
                                    {suggestion.actions.map(action =>
                                      <li class="card-action-li">
                                        {action.description}
                                      </li>
                                    )}
                                  </ul>
                                ) 
                              : null }
                            </div>
                            <button type="button" class="btn btn-primary bottom-right" onClick={() => this.acceptActions}>{this.strings.acceptActions}</button>
                          </li>                          
                        )}
                      </ul>
                    </div>
                  ) 
                  : null
                }
                { this.cardParsed.hasOwnProperty("links") && this.cardParsed.links!=null ?
                   <div>
                      <br/>
                      <h5>{this.strings.links}</h5>
                      <ul class="card-link-ul">
                      {this.cardParsed.links.map(link =>
                          <li class="card-link-li"> 
                            <a href={link.url} target="_blank">
                              {link.label} 
                              { this.showExternalLinkIcon ?
                                <svg width="24" height="24" viewBox="0 0 24 24" class="link-img">
                                  <path fill="currentColor" d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                                </svg>
                              : null }
                            </a>
                          </li>
                      )}
                      </ul>
                    </div>
                   
                  : null
                }
              </div>
          </div>
        </div>
      ]);  
    }
    
  }

}
