import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --color-white: #FFFFFF;
        --color-gray: #F8F9FA;
        --color-gray-30: #868E96;
        --color-gray-70: #343B41;
        --color-gray-90: #212529;
        --color-black: #121214;
        --color-brand1: #ff577f;
        --color-red2: #59323f;
        
    }
    body{
        background: var(--color-black);
        width: 100vw;
        font-family: "Inter", sans serif;
    }
`