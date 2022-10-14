import { ClientSection, MetaBar, Span } from '../styles/Clients'
import { Row } from '../styles/GlobalStyle'

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
        </ClientSection>
    )
}