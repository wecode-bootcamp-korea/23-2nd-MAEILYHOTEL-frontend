import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyles = createGlobalStyle`
  ${reset} 
  
  *{
    box-sizing : border-box;
  } 

  label, input, form {
    cursor: pointer;
  }

   form, label, input, button {
    cursor: pointer;
  }
`;
