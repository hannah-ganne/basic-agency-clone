import { HeroContainer, HeroText } from "../styles/Hero";
import { Row, Column } from '../styles/GlobalStyle'

export default function Hero() {
    return (
        <HeroContainer>
            <Row>
                <Column>
                    <HeroText>
                        BASIC/DEPT® is a global branding and digital design agency building products, services, and eCommerce experiences that turn cultural values into company value.
                    </HeroText>
                </Column>
            </Row>
        </HeroContainer>
    )
}