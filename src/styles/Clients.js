import styled from "styled-components";
import { Section } from '../styles/GlobalStyle'

export const ClientSection = styled(Section)`
    background-color: ${props => props.theme.background};
    margin-top: 10rem;
    transition: all 0.5s ease;
`

export const MetaBar = styled.div`
    background-color: ${props => props.theme.secondary};
    border-top: 1px solid var(--black);
    transition: all 0.5s ease;
`

export const Span = styled.span`
    margin-right: ${({ marginRight }) => marginRight};
`

export const SectionTitle = styled.h2`
    font-size: 2.8rem;
    width: 15%;
    text-transform: uppercase;
`