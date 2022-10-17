import styled from "styled-components";

export const HeaderContainer = styled.header`
    background-color: ${props => props.theme.background};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3rem 5rem;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    & a {
        color: ${props => props.theme.text};
    }
    ${({scrollDown}) => scrollDown && `
        transform: translateY(-100%);
        transition: all 0.5s ease;
    `}
    ${({ scrollUp }) => scrollUp && `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 5;
        transition: all 0.5s ease;
    `}
    ${({scrollDone}) => scrollDone && `
        background-color: transparent;
        & a {
            color: var(--white);
        }
    `}
`

export const Logo = styled.img`
    width: 10rem;
`

export const Nav = styled.nav`
    display: flex;

    & ul {
        display: flex;
    }
`

export const NavItem = styled.li`
    color: var(--black);
    font-size: 0.9rem;
    margin-right: 3rem;
`

export const NavLink = styled.a`
    text-transform: uppercase;
    color: var(--white);
`