import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root{
        --dark: #252627;
        --yellow: #e2d922;
        --blue: #3478E5;
    }

    * {
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    html {
        font-size: 62.5%;
    }

    body {
        background: var(--dark)
    }
    
`;
