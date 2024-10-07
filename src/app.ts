import { html, render } from "lit/html.js";
import { gecutButton } from "@gecut/components";

render(
  html`
    <main class="w-full h-full flex flex-col gap-4 items-center justify-center">
      ${gecutButton({
        type: "filled",
        label: "کیر تو احسان موسوی",
      })}
    </main>
  `,
  document.body
);
