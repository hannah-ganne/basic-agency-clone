import { LoaderContainer, TitleContainer, LoaderTitle } from '../styles/Loader'
import logo from '../assets/logo.svg'
import { Noise } from '../../../styles/GlobalStyle'

export default function Loader() {
    return (
        <LoaderContainer>
            <Noise />
            <TitleContainer />
            <LoaderTitle src={logo} />
        </LoaderContainer>
    )
}