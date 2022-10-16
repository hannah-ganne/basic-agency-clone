import {  FooterLi, FooterLink } from '../styles/Footer'


export default function ListItem({ title }) {
    return (
        <FooterLi>
            <FooterLink href="#">
                {title}
            </FooterLink>
        </FooterLi>
    )
}