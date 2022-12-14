import styled, { keyframes } from "styled-components";

const slideUp = keyframes`
    0% {
        transform: translateY(0);
    }

    90% {
        transform: translateY(-100%);
        opacity: 1;
    }

    100% {
        opacity: 0;
        display: none;
        visibility: hidden;
        /* z-index: -100; */
    }
`

const hide = keyframes`
    0% {
        bottom: -100%;
    }

    100% {
        bottom: 0;
    }
`

export const LoaderContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 16;
    animation-name: ${slideUp};
    animation-duration: 0.7s;
    animation-delay: 1s;
    animation-timing-function: ease-out;
    animation-iteration-count: 1;
    animation-fill-mode: both;
`

export const TitleContainer = styled.div`
    position: fixed;
    bottom: -100%;
    width: 100%;
    height: 100%;
    background-color: #eee;
    overflow: hidden;
    animation-name: ${hide};
    animation-duration: 0.7s;
    animation-delay: 0.5s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: 1;
    animation-fill-mode: both;
`

export const LoaderTitle = styled.img`
    background-color: transparent;
    width: 35%;
`