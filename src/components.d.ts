/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface CdsCard {
        "card": string;
        "locale": string;
        "showSuggestionActions": boolean;
    }
}
declare global {
    interface HTMLCdsCardElement extends Components.CdsCard, HTMLStencilElement {
    }
    var HTMLCdsCardElement: {
        prototype: HTMLCdsCardElement;
        new (): HTMLCdsCardElement;
    };
    interface HTMLElementTagNameMap {
        "cds-card": HTMLCdsCardElement;
    }
}
declare namespace LocalJSX {
    interface CdsCard {
        "card": string;
        "locale"?: string;
        "showSuggestionActions"?: boolean;
    }
    interface IntrinsicElements {
        "cds-card": CdsCard;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "cds-card": LocalJSX.CdsCard & JSXBase.HTMLAttributes<HTMLCdsCardElement>;
        }
    }
}
