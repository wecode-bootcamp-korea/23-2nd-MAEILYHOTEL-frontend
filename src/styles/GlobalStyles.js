import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyles = createGlobalStyle`
  ${reset} 
  
  *{
    box-sizing : border-box;
  } 

   form, label, input, button {
    cursor: pointer;
  }
`;
