import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3rem 5rem;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    ${({scrollDown}) => scrollDown && `
        transform: translateY(-100%);
        transition: all 0.3s ease-in;
    `}
    ${({ scrollUp }) => scrollUp && `
        background-color: var(--white);
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 5;
        transition: all 0.3s ease-in;
        & a {
            color: var(--black);
        }
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