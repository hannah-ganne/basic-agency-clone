import styled from "styled-components";
import { Section } from '../styles/GlobalStyle'

export const ClientSection = styled(Section)`
    margin-top: 10rem;
`

export const MetaBar = styled.div`
    border-top: 1px solid var(--black);
`

export const Span = styled.span`
    margin-right: ${({ marginRight }) => marginRight}
`