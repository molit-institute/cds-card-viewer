import { Component, h, Prop, Element, State, Watch } from '@stencil/core';
import { getLocaleComponentStrings } from "../../utils/locale";

@Component({
  tag: 'cds-card',
  styleUrl: 'cds-card.css',
  shadow: false,
  scoped: true,
  assetsDirs: [
    '../../i18n'
]
})
export class CdsCard {

  @Prop() card!:string;
  @Prop() showSuggestionActions: boolean = true;

  @Prop() locale: string = "en";
  @Watch('locale')
  async watchLocale(newValue: string){
    console.log(newValue)
    this.strings = await getLocaleComponentStrings(this.element, newValue);
  }

  @Element() element: HTMLElement;

  cardParsed: any;
  @State() strings: any;

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
                          /* <li class="list-group-item list-group-item-primary">
                              <div class="item1">
                                {suggestion.label}
                                { suggestion.hasOwnProperty("actions") && suggestion.actions!=null && this.showSuggestionActions ? 
                                  ( 
                                    <ul>
                                      {suggestion.actions.map(action =>
                                        <li>
                                          {action.description}
                                        </li>
                                      )}
                                    </ul>
                                  ) 
                                : null }
                              </div>
                              <div class="item2"></div>
                              <button type="button" class="btn btn-primary bottom-right" onClick={() => this.acceptActions}>Accept Actions</button>
                          </li> */
                          <li class="list-group-item list-group-item-primary grid-1">
                            <div class="item1">
                              {suggestion.label}
                              { suggestion.hasOwnProperty("actions") && suggestion.actions!=null && this.showSuggestionActions ? 
                                ( 
                                  <ul>
                                    {suggestion.actions.map(action =>
                                      <li>
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
                  ( <div>
                      <h5>{this.strings.links}</h5>
                      {this.cardParsed.links.map(link =>
                        <div>
                          <button type="button" class="btn btn-primary btn-block my-btn" onClick={() => window.open(link.url, '_blank')}>{link.label}</button>
                        </div>
                      )}
                    </div>
                  ) 
                  : null
                }
              </div>
          </div>
        </div>
      ]);  
    }
    
  }

}
