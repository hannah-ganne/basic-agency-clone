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
    z-index: 5;
    ${({ scrollDown }) => scrollDown ? `
            transform: translateY(-100%);
            transition: all 0.3s ease-in;
    ` : `
    background-color: var(--white);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    transition: all 0.3s ease-in;
    `}
    ${({ scrollDone }) => scrollDone && `
    background-color: transparent;
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