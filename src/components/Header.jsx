import { HeaderContainer, Logo, Nav, NavItem, NavLink } from '../styles/Header'
import logoWhite from '../assets/images/logo-white.svg'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export default function Header() {
    return (
        <HeaderContainer>
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