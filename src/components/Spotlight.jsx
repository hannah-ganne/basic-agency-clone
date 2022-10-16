import { SpotlightSection, Quote, Span, SpotlightButton, Video } from '../styles/Spotlight'
import { Column, Row } from '../styles/GlobalStyle'
import culture from '../assets/videos/Culture-Loop_v1.mp4'
import { useInView } from 'react-intersection-observer'
import { ThemeProvider } from 'styled-components'

export default function Spotlight() {
    const { ref: spotlightRef, inView: isVisible } = useInView({
        threshold: 0.6
    })

    const theme = {
        primary: isVisible ? '#f9cdcd' : '#252422',
        secondary: isVisible ? '#252422' : '#f4f4f4',
    }


    return (
        <ThemeProvider theme={theme}>
            <SpotlightSection ref={spotlightRef}>
                <Row>
                    <Column>
                        <Quote>
                            BASIC/DEPT<span>®</span> HELPS BRANDS <span className="dot">● CONNECT</span> W/ CULTURE
                        </Quote>
                        <Span>Adweek <strong>(Agency Spotlight)</strong></Span>
                        <SpotlightButton>About Us</SpotlightButton>
                    </Column>
                    <Video src={culture} playsInline={true} muted={true} autoPlay={true} loop={true} />
                </Row>
            </SpotlightSection>
        </ThemeProvider>
    )
}