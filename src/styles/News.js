import { convertLength } from "@mui/material/styles/cssUtils";
import styled from "styled-components";
import { Section, Row, Column } from './GlobalStyle'

export const NewsSection = styled(Section)`
    padding-top: 8rem;
    height: fit-content;
`

export const SectionTitle = styled(Row)`
    align-items: center;
    & h2 {
        font-size: 2.6rem;
        text-transform: uppercase;
        width: 20%;
    }

    & button {
        margin-top: 0;
    }
`

export const NewsWrapper = styled(Row)`
    padding-top: 1rem;
    border-top: 1px solid var(--black);
    margin-bottom: 4rem;
    height: 100%;
    color: var(--black);

    &:hover h2{
        text-decoration: underline;
    }

    &:hover img {
        transform: scale(1.1);
        transition: all 0.3s ease-in-out;
    }
`

export const NewsDetail = styled(Row)`
    justify-content: space-bweteen;
    width: 100%;
    height: auto;
`

export const ImageContainer = styled.div`
    width: 40%;
    overflow: hidden;
`

export const NewsImage = styled.img`
    width: 100%;
    object-fit: cover;
    transform: scale(1.2)
`

export const NewsText = styled(Column)`
    margin-left: 1.5rem;
    justify-content: space-between;
    position: relative;
`

export const NewsTitle = styled.h2`
    font-size: 2.5rem;
    margin: 0;
    font-weight: 500;
    text-transform: uppercase;
    width: 120%;
    height: 100%;
`

export const NewsData = styled.span`
`