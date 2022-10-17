import styled from "styled-components";
import { Section, Button } from "./GlobalStyle"

export const SpotlightSection = styled(Section)`
    background-color: ${props => props.theme.background};
    padding-top: 8rem;
    transition: all 0.5s ease;
`

export const Quote = styled.q`
    color: ${props => props.theme.text};
    font-size: 5.6rem;
    font-weight: 700;
    line-height: 4.9rem;
    margin: 0;
    quotes: none;
    margin-right: 4rem;
    transition: all 0.5s ease;

    & span {
        font-size: 3rem;
        vertical-align: top;
        margin: 0;
    }

    & span.dot {
        display: inline-block;
        font-size: 5.6rem;
    }
`

export const Span = styled.span`
    color: ${props => props.theme.text};
    text-transform: uppercase;
    font-size: 1.15rem;
    margin-top: 1rem;
    transition: all 0.3s ease-in-out;
`

export const SpotlightButton = styled(Button)`
    color: ${props => props.theme.text};
    border: 1px solid ${props => props.theme.text};
    background: linear-gradient(to top, ${props => props.theme.text} 50%, ${props => props.theme.background} 50%);
    background-size: 100% 200%;
    background-position: top;
    transition: all .3s ease-out;
    &:hover {
        border-color: ${props => props.theme.text};
        color: ${props => props.theme.background};
    }
`

export const Video = styled.video`
    width: 50%;
`