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
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 1;
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
`

export const CursorDot = styled.div`
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
    ${common}
`

export const CursorLogo = styled.img`
    width: 7rem;
    ${common}

`

export const CursorYear = styled.span`
    font-weight: 700;
    ${common}
`