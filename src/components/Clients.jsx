import { ClientSection, MetaBar, Span, SectionTitle } from '../styles/Clients'
import { Row } from '../styles/GlobalStyle'
import Slider from './Slider'

export default function Clients() {

    return (
        <ClientSection>
            <MetaBar />
            <Row marginTop="0.8rem">
                <Span marginRight="27rem">01</Span>
                <Row>
                    <Span>/05</Span>
                    <Span>●</Span>
                </Row>
            </Row>
            <SectionTitle>
                Featured Engagements
            </SectionTitle>
            <Slider />
        </ClientSection>
    )
}