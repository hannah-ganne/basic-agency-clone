import styled from 'styled-components'
import { Section } from './GlobalStyle'

export const VideoContainer = styled(Section)`
    top: 0;
    left: 0;
    padding: 0;
    cursor: none;
`

export const Video = styled.video`
    width: 100%;
`

const common = `
    z-index: 100;
    pointer-events: none;
    position: absolute;
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
`

export const CursorDot = styled.div.attrs(props => ({
    style: {
        top: props.top,
        left: props.left,
    },
}))`
    width: 7rem;
    height: 7rem;
    background-color: var(--white);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    font-size: 0.9rem;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    transform: scale(${props => props.smaller});
    opacity: ${props => props.visible};
    ${common}
`

export const CursorLogo = styled.img.attrs(props => ({
    style: {
        top: props.top,
        left: props.left,
    },
}))`
    width: 7rem;
    opacity: ${props => props.visible};
    ${common}

`

export const CursorYear = styled.span.attrs(props => ({
    style: {
        top: props.top,
        left: props.left,
    },
}))`
    font-weight: 700;
    opacity: ${props => props.visible};
    ${common}
`