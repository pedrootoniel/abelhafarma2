import {createGlobalStyle} from "styled-components";
import {themeList} from "../contexts/ThemeContext/themeList";

export const GlobalStyles = createGlobalStyle`
:root{
  //AppColors
  --ds-blood: #0f7a3e; //Identity Color
  --ds-dark-1: #191919; //bg-topBar, bg-navBarOnScroll , txt-h2
  --ds-dark-2: rgba(25, 25, 25, 0.95); //bg-navBar
  --ds-dark-3: #444444; //txt-body
  --ds-dark-4: #0c0c0c; //bg-footer
  --ds-light-0: rgba(240, 233, 233, 0.95); //a.nav-link
  --ds-light-1: #aaaaaa; //txt-p
  --ds-light-2: #f4f4f4; //txt-hBack
  --ds-light-3: #bababa; //txt-pricingPlan
  --ds-light-4: #0f7a3e; //txt-contactHead
  --ds-light-5: #f2f2f2; //bg-sponsor
  --ds-light-6: #f9f9f9; //bg-pricingPlan
  --ds-light-7: rgba(240, 233, 233, 0.95); //bg-header rgba
}

body {
  color: ${({theme: {theme}}) =>
    theme === themeList.light ? "var(--ds-dark-3)" : "var(--ds-light-1)"};
    font-family: Latinotype;
}
`;
