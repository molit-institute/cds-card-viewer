import { Component, h, Prop, Element, State, Watch } from '@stencil/core';
import { getLocaleComponentStrings } from "../../utils/locale";
import { openInNew } from "../../utils/svg-icons";
import { markdownToHtml } from "../../utils/util";

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
  @Watch('card')
  validateCard() {
    if (this.card == null){ throw new Error('card: required'); }
  }
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
                { this.cardParsed.hasOwnProperty("detail")&& this.cardParsed.detail!=null ? <div innerHTML={markdownToHtml(this.cardParsed.detail, true)}></div> : null } 
                { this.cardParsed.hasOwnProperty("suggestions") && this.cardParsed.suggestions!=null ?
                  ( <div>
                      <h5>{this.strings.suggestions}</h5>
                      <ul class="list-group">
                        {this.cardParsed.suggestions.map(suggestion =>
                          <li class="list-group-item list-group-item-primary grid-1" style={ suggestion.style != null ? suggestion.style : {} }>
                            <div class="item1">
                              <div innerHTML={markdownToHtml(suggestion.label, true)}></div> {/* TODO*/}
                              <hr/>
                              { suggestion.hasOwnProperty("actions") && suggestion.actions!=null && this.showSuggestionActions ? 
                                (<div>
                                    {suggestion.actions.map(action =>
                                      <div class="card-action">
                                        {action.type === "create" ? <span class="badge badge-pill badge-success green">Create</span>
                                        : (action.type === "update" ? <span class="badge badge-pill badge-warning yellow">Update</span> 
                                          : (action.type === "delete" ? <span class="badge badge-pill badge-danger red">Delete</span>
                                            : null)
                                          )  
                                        } {action.description}
                                      </div>                                                                            
                                    )}
                                  </div>) 
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
                              {link.label}&nbsp; 
                              { this.showExternalLinkIcon ?
                                <span innerHTML={openInNew} ></span>
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
