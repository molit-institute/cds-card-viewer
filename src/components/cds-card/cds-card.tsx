import { Component, h, Prop, Element, State, Watch, getAssetPath } from '@stencil/core';
import { getLocaleComponentStrings } from "../../utils/locale";

@Component({
  tag: 'cds-card',
  styleUrl: 'cds-card.css',
  shadow: false,
  scoped: true,
  assetsDirs: ['assets']
})
export class CdsCard {

  @Prop({ context: 'publicPath'}) private publicPath: string;
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

  getPath(image: string){
    console.log("window Path: " + window.location.pathname);
    console.log(this.publicPath);
    if (this.publicPath === "/") {
      const url = getAssetPath(`./assets/${image}`);// TODO make it work with getPath --> current src works
      console.log(url);
      return url;
    } if (this.publicPath === "/build/") {
      console.log( this.publicPath + "assets/" + image);
      return this.publicPath + "assets/" + image; 
    }
     else {
      return this.publicPath + "cds-card-viewer/assets/" + image;
    }
    
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
                                <img src={require("../cds-card-viewer/assets/open-in-new.svg")} alt="External Link Icon" class="link-img"/> //this.getPath(`open-in-new.svg`) 
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
