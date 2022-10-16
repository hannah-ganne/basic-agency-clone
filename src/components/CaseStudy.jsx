import { Section, Row } from '../styles/GlobalStyle'
import { Link, MediaContainer, CaseImage, CaseTitle, CaseDetail } from '../styles/CaseStudy'
import patagonia from '../assets/images/Patagonia-Case-Study-Thumbnail.jpeg'
import wilson from '../assets/images/WIlson-Case-Study-Thumbnail.jpeg'
import google from '../assets/videos/Google-Store-Web-Design-Case-Study-Thumbnail-02.mp4'

export default function CaseStudy() {
    return (
        <Section>
            <Row>
                <Link href="#">
                    <MediaContainer>
                        <CaseImage src={patagonia} />
                    </MediaContainer>
                    <CaseTitle>
                        Patagonia
                    </CaseTitle>
                    <CaseDetail>
                        An eCommerce experience driven by Patagonia's brand mission
                    </CaseDetail>
                </Link>
                <Link href="#">
                    <MediaContainer>
                        <CaseImage src={wilson} />
                    </MediaContainer>
                    <CaseTitle>
                        Wilson
                    </CaseTitle>
                    <CaseDetail>
                        A century-old sports brand finding its place in culture
                    </CaseDetail>
                </Link>
                <Link href="#">
                    <MediaContainer>
                        <CaseImage as="video" src={google} muted={true} autoPlay={true} playsInline={true} loop={true} />
                    </MediaContainer>
                    <CaseTitle>
                        Google Store
                    </CaseTitle>
                    <CaseDetail>
                        An eCommerce experience helping Google bring its hardware to people across the globe
                    </CaseDetail>
                </Link>
            </Row>
        </Section>
    )
}