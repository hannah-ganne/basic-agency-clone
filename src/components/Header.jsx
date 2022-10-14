import { HeaderContainer, Logo, Nav, NavItem, NavLink } from '../styles/Header'
import logoWhite from '../assets/images/logo-white.svg'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useEffect, useState } from 'react'

export default function Header() {
    const [currentScroll, setCurrentScroll] = useState(0)
    const [lastScroll, setLastScroll] = useState(0)


    useEffect(() => {
        const body = document.body
        const scrollUp = "scroll-up"
        const scrollDown = "scroll-down"
        
        window.addEventListener("scroll", () => {
            setCurrentScroll(window.pageYOffset)

            // if (currentScroll <= 83) {
            //     body.classList.remove(scrollUp);

            //     return;
            // }

            // if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
            //   // down
            //     body.classList.remove(scrollUp);
            //     body.classList.add(scrollDown);

            // } else if (currentScroll < lastScroll && body.classList.contains(scrollDown)) {
            //   // up
            //     body.classList.remove(scrollDown);
            //     body.classList.add(scrollUp);
            // }

            setLastScroll(currentScroll)
        });
    })

    return (
        <HeaderContainer scrollDown={currentScroll > lastScroll ? true: false} scrollDone={currentScroll <= 700 ? true : false}>
            <Logo src={logoWhite} alt="logo of basic agency" />
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
            <MoreHorizIcon sx={{ color: '#f4f4f4'}} />
        </HeaderContainer>
    )
}