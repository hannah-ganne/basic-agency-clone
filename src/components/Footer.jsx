import { FooterContainer, FooterLogo, FooterCollab, InputContainer, FooterTitle, EmailInput, FooterUl, FooterColumn, FooterRow, FooterBottom, FooterLi, FooterLink } from '../styles/Footer'
import logoWhite from '../assets/images/logo-simple-white.svg'
import ListItem from './ListItem'

export default function footer() {
    return (
    <>
        <FooterContainer>
            <FooterColumn>
                <FooterLogo src={logoWhite} />
            </FooterColumn>
            <FooterColumn>
                <FooterCollab>
                    We collaborate with ambitious brands and people. Let's build. <a href="mailto:biz@basicagency.com">biz@basicagency.com</a>
                </FooterCollab>
            </FooterColumn>
            <FooterColumn>
                <InputContainer>
                    <FooterTitle>
                        Stay in the know
                    </FooterTitle>
                    <EmailInput type="email" placeholder="Email Address"/>
                </InputContainer>
            </FooterColumn>
            <FooterRow>
                <FooterColumn>
                    <FooterTitle>
                        Social
                    </FooterTitle>
                    <FooterUl>
                        <ListItem title="Instagram" />
                        <ListItem title="Twitter" />
                        <ListItem title="LinkedIn" />
                        <ListItem title="Facebook" />
                    </FooterUl>
                </FooterColumn>
                <FooterColumn>
                    <FooterTitle>
                        Initiatives
                    </FooterTitle>
                    <FooterUl>
                        <ListItem title="Crafted" />
                        <ListItem title="Culture Manual" />
                        <ListItem title="Applied" />
                        <ListItem title="Brandbeats" />
                        <ListItem title="Moves" />
                        <ListItem title="B®/Good" />
                    </FooterUl>
                </FooterColumn>
                <FooterColumn>
                    <FooterTitle>
                        Offices
                    </FooterTitle>
                    <FooterUl>
                        <ListItem title="San Diego - CA" />
                        <ListItem title="New York - NY" />
                        <ListItem title="Bay Area - CA" />
                        <ListItem title="St.Louis - MO" />
                        <ListItem title="Amsterdam - NL" />
                        <ListItem title="London - EN" />
                        <ListItem title="Berlin - GE" />
                        <ListItem title="Argentina - AR" />
                    </FooterUl>
                </FooterColumn>
            </FooterRow>
        </FooterContainer>
        <FooterBottom>
                <FooterColumn>BASIC/DEPT®, INC 10 - 22©</FooterColumn>
                <FooterColumn>CLONE PROJECT BY <a href="https://github.com/hannah-ganne">HANNAH GANNE</a></FooterColumn>
                <FooterColumn>
                    <FooterLink>
                        TERMS, PRIVACY POLICY
                    </FooterLink>
                </FooterColumn>
        </FooterBottom>
    </>
    )
}