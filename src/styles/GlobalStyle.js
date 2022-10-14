import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap');

    :root {
        --black: #252422;
        --pink: #f9cdcd;
        --white: #f4f4f4;
        --grid-width: 1440px;
        --grid-gutter: 2rem;
        --grid-padding: 8rem;
        --grid-column-count: 12;
    }

    html {
        box-sizing: border-box;
    }

    body {
        font-family: 'Lato', sans-serif;
        position: relative;
        overflow: scroll;
    }

    *, *::before, *::after {
        box-sizing: inherit;
    }

    a {
        text-decoration: none;
    }

    ul {
        padding: 0;
    }

    li {
        list-style: none;
    }
`
export default GlobalStyle

export const Section = styled.section`
    padding-left: 5rem;
    padding-right: 5rem;
`

export const Row = styled.div`
    display: flex;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0 0 calc((var(--grid-width) + var(--grid-gutter) - var(--grid-padding)*2)/var(--grid-column-count)*6 - var(--grid-gutter));
`