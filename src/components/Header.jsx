import { HeaderContainer, Logo, Nav, NavItem, NavLink } from '../styles/Header'
import logo from '../assets/images/logo.svg'
import logoWhite from '../assets/images/logo-white.svg'
import logoPink from '../assets/images/logo-pink.svg'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useEffect, useState } from 'react'

export default function Header({ isVisible }) {
    const [currentScroll, setCurrentScroll] = useState(0)
    const [lastScroll, setLastScroll] = useState(0)
    const scrollUp = currentScroll < lastScroll
    const scrollDown = currentScroll > lastScroll
    const scrollDone = currentScroll <= 700

    useEffect(() => {       
        window.addEventListener("scroll", () => {
            setCurrentScroll(window.pageYOffset)
            setLastScroll(currentScroll)
        })

        return (() => {
            window.addEventListener("scroll", () => {
                setCurrentScroll(window.pageYOffset)
                setLastScroll(currentScroll)
            })
        })
    })

    return (
        <HeaderContainer scrollUp={scrollUp} scrollDown={scrollDown} scrollDone={scrollDone}>
                <Logo src={scrollDone? logoWhite : isVisible ? logoPink : logo} alt="logo of basic agency" />
                <Nav>
                    <NavItem>
                        <NavLink href="#">Work</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">News</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Thinking</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Careers</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Contact</NavLink>
                    </NavItem>
                </Nav>
            <MoreHorizIcon
                sx={scrollDone ? { color: '#f4f4f4' } :
                    isVisible ? { color: '#f9cdcd' } :
                        { color: '#252422' }} 
            />
            </HeaderContainer>
    )
}