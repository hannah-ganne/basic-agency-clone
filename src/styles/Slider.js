import styled from "styled-components"
import { CursorDot } from "./VideoSection"


export const SliderWrap = styled.div`
    margin-top: 8rem;
    width: 100%;
    padding-bottom: 50px;
    cursor: none;
`

export const Slider = styled.div`

    height: 100%;
    width: 100%;
    overflow: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`

export const SliderInner = styled.div`
    display: flex;
    justify-content: space-around;
    width: fit-content;
    height: 100%;
    display: flex;
`

export const SliderItem = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 22rem;
    height: 98%;
    top: 1%;
    margin-right: 10rem;
`

export const ClientLogo = styled.img`
    height: 2.5rem;
`

export const ClientTitle = styled.h5`
    text-transform: uppercase;
    font-size: 1.4rem;
    margin-top: 1.25rem;
    padding-top: 6.25rem;
    margin-bottom: 0;

    &::before {
        content: "";
        width: 1.5rem;
        height: 0.15rem;
        background-color: var(--black);
        position: absolute;
        left: 0;
        top: 4rem;
    }
`

export const ClientDetail = styled.p`
    line-height: 1.5rem;
`

export const ProgressBar = styled.div`
    position: relative;
    width: 100%;
    border-top: 2px solid #b2b2b2;
    margin-top: 10px;
`

export const ProgressBarInner = styled.div`
    border-radius: 10px;
    position: absolute;
    top: -2px;
    left: ${props => props.percentage};
    width: 200px;
    height: 2px;
    background-color: ${props => props.theme.primary};
`

export const SliderCursor = styled(CursorDot)`
    background-color: var(--pink);
    z-index: 100;
    pointer-events: none;
    position: absolute;
    top: ${props => props.top};
    left: ${props => props.left};
    transform: ${props => props.transform ? 'translate(-50%, -50%) scale(0.75)' : 'translate(-50%, -50%) scale(1)'};
    opacity: ${props => props.opacity ? 1 : 0};
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;

    &::before{
        content:'';
        border-top: 10px solid transparent;
        border-right: 10px solid var(--pink);
        border-bottom: 10px solid transparent;
        border-left: 10px solid transparent;
        margin-right: 5rem;
        opacity: ${props => props.transform ? 1 : 0};
    } 

    &::after{
        content: '';
        border-top: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-left: 10px solid var(--pink);
        margin-left: 5rem;
        opacity: ${props => props.transform ? 1 : 0};
    }


`