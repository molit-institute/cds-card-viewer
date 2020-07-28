import { getAssetPath } from "@stencil/core";

  async function fetchLocaleStringsForComponent(
    componentName: string,
    locale: string
  ): Promise<any> {
    try {
      const response = await fetch(getAssetPath('../i18n/' + componentName + '.i18n.' + locale + '.json')); // Fetch the resource 
      const contentType = response.headers.get("content-type");
      if(contentType && contentType.indexOf("application/json") !== -1){ // Checks if response is json
        const text = await response.text(); // Parse it as text
        const data = JSON.parse(text); // Try to parse it as json
        return data;
      }else{ //Default if response is not json
        return import('../i18n/' + componentName + '.i18n.' + locale + '.json').then(a => {
          return a.default;
        });
      }
    } catch(e) {
      console.error("An error occured while fetching the Local Strings for the Component (" + componentName+ "): " + e)
    } 
    
  }

  export async function getLocaleComponentStrings(
    element: HTMLElement,
    componentLanguage: string
  ): Promise<any> {
    let componentName = element.tagName.toLowerCase();
    let strings;
    try {
      strings = await fetchLocaleStringsForComponent(
        componentName,
        componentLanguage
      );
    } catch (e) {
      console.error("An error occured while fetching the resources: " + e)
    }
    return strings;
  }

  