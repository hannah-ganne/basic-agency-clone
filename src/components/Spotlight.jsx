import { SpotlightSection, Quote, Span, SpotlightButton, Video } from '../styles/Spotlight'
import { Column, Row } from '../styles/GlobalStyle'
import culture from '../assets/videos/Culture-Loop_v1.mp4'
// import { useInView } from 'react-intersection-observer'
import { forwardRef } from 'react'

const Spotlight = forwardRef((props, ref) => {
    return (
            <SpotlightSection ref={ref}>
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
    )
})

export default Spotlight