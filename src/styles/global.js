import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }

    body {
        font-size: 1.6rem;
    }

    body, button, input {
        font-family: "Roboto Slab", serif;
        font-weight: normal;
    }

    button, input {
        border: none;
        outline: none;

        background: none;
    }

    button {
        transition: .5s filter;
        cursor: pointer;
    }

    button:hover {
        filter: brightness(0.8);
    }
`