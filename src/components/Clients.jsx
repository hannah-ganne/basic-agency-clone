import { ClientSection, MetaBar, Span, SectionTitle } from '../styles/Clients'
import { Row } from '../styles/GlobalStyle'
import Slider from './Slider'
import { useInView } from 'react-intersection-observer'
import { ThemeProvider } from 'styled-components'

export default function Clients() {
    const { ref: clientsRef, inView: isVisible } = useInView({
        threshold: 0.2
    })
    
    const theme = {
        primary: isVisible ? '#252422' : '#f9cdcd',
        secondary: isVisible ? '#f4f4f4' : '#252422',
    }

    return (
        <ThemeProvider theme={theme}>
            <ClientSection ref={clientsRef}>
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
        </ThemeProvider>
    )
}