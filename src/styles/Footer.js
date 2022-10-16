import styled from "styled-components";
import { Column } from './GlobalStyle'

export const FooterContainer = styled.footer`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto auto;
    grid-column-gap: 1rem;
    grid-row-gap: 5rem;
    background-color: var(--black);
    padding: 7.5rem 5rem;
`

export const FooterLogo = styled.img`
    width: 4rem;

`

export const FooterCollab = styled.p`
    width: 80%;
    font-size: 2rem;
    color: var(--white);
    margin: 0;

    & a {
        color: var(--white);
        text-decoration: underline;
    }
`

export const InputContainer = styled.div`
    height: fit-content;
`

export const FooterTitle = styled.h6`
    font-size: 1.1rem;
    color: var(--white);
    text-transform: uppercase;
    font-weight: 500;
    margin: 0;

    &::before {
        content: "â—";
        margin-right: 0.5rem;
    }
`

export const EmailInput = styled.input`
    width: 80%;
    background-color: var(--black);
    border: none;
    border-bottom: 1px solid var(--white);
    padding: 1rem 0;


    &::placeholder {
        color: var(--white);
        font-size: 1.1rem;
    }
`

export const FooterRow = styled.div`
    display: flex;
    justify-content: space-between;
`

export const FooterUl = styled.ul`
    padding: 0;
`

export const FooterLi = styled.li`
    margin-top: 0.3rem;
`

export const FooterLink = styled.a`
    color: var(--white);
`

export const FooterColumn = styled.div`
    display: flex;
    flex-direction: column;
    max-height: fit-content;
`

export const FooterBottom = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: var(--black);
    padding: 1.2rem 5rem;
    font-size: 0.7rem;
    color: #5E5E5E;

    & div {

    }

    & a {
        color: #5E5E5E;
    }
`

