import { AriaAttributes, DOMAttributes } from "react"
import { Components } from "@ionic/core";

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    content?: string;
  }
}