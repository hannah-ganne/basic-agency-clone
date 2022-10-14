import { HeroContainer, HeroText, HeroLogo } from "../styles/Hero";
import { Row, Column, Button } from '../styles/GlobalStyle'
import logoSimple from '../assets/images/logo-simple.svg'

export default function Hero() {
    return (
        <HeroContainer>
            <Row>
                <Column>
                    <HeroText>
                        BASIC/DEPT® is a global branding and digital design agency building products, services, and eCommerce experiences that turn cultural values into company value.
                    </HeroText>
                    <Button>See the work</Button>
                </Column>
                <Column>
                    <HeroLogo src={logoSimple} />
                </Column>
            </Row>
        </HeroContainer>
    )
}