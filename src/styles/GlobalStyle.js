import styled, { createGlobalStyle, keyframes } from "styled-components";
import noiseBackground from '../assets/images/300-30-10-monochrome.png'

const GlobalStyle = createGlobalStyle`

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
        font-family: 'Open Sans', sans-serif;
        position: relative;
        overflow: scroll;
        background-color: var(--white);
        overflow-x: hidden;
        margin: 0;
    }

    *, *::before, *::after {
        box-sizing: inherit;
    }

    ::selection {
        color: var(--white);
        background: var(--black);
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
    width: 100vw;
    padding-left: 5rem;
    padding-right: 5rem;
    overflow: hidden;
`

export const Row = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-top: ${({ marginTop }) => marginTop}
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0 0 calc((var(--grid-width) + var(--grid-gutter) - var(--grid-padding)*2)/var(--grid-column-count)*6 - var(--grid-gutter));
`

export const Button = styled.button`
    width: fit-content;
    height: 2rem;
    border: 1px solid var(--black);
    border-radius: 10rem;
    text-transform: uppercase;
    font-size: 0.7rem;
    font-weight: 700;
    padding: 0 1.5rem;
    cursor: pointer;
    background: linear-gradient(to top, var(--black) 50%, var(--white) 50%);
    background-size: 100% 200%;
    background-position: top;
    transition: all .3s ease-out;
    margin-top: 2.5rem;

    &:hover {
        background-position: bottom;
        border-color: var(--white);
        color: var(--white)
    }
`
const noiseAnimation = keyframes`
    0% { transform: translate(0,0) }
    10% { transform: translate(-5%,-5%) }
    20% { transform: translate(-10%,5%) }
    30% { transform: translate(5%,-10%) }
    40% { transform: translate(-5%,15%) }
    50% { transform: translate(-10%,5%) }
    60% { transform: translate(15%,0) }
    70% { transform: translate(0,10%) }
    80% { transform: translate(-15%,0) }
    90% { transform: translate(10%,5%) }
    100% { transform: translate(5%,0) }
`

export const Noise = styled.div`
width: 100%;
height: 100%;
position: fixed;
left: 0;
top: 0;
pointer-events: none;
z-index: 10;

&::after {
    content: "";
    width: calc(100% + 20rem);
    height: calc(100% + 20rem);
    background-image: url(${noiseBackground});
    background-position: 50%;
    position: absolute;
    left: -10rem;
    top: -10rem;
    animation: ${noiseAnimation} .2s infinite;
    opacity: 1;
}
`