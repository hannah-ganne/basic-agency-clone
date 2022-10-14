import styled from "styled-components";

export const Link = styled.a`
    width: 32%;
    color: var(--black);
`

export const MediaContainer = styled.div`
    width: 100%;
    overflow: hidden;
`

export const CaseImage = styled.img`
    width: 100%;
    object-fit: cover;
    transform: scale(1.2);

    &:hover {
        transform: scale(1.1);
        transition: all 0.3s ease-in;
    }
`

export const CaseVideo = styled.video`
    width: 100%;
`

export const CaseTitle = styled.h5`
    font-size: 1.3rem;
    text-transform: uppercase;
    margin: 1rem 0;
`

export const CaseDetail = styled.p`
    width: 45%;
    font-size: 0.8rem;
    margin: 0;
    text-transform: uppercase;
`