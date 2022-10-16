import GlobalStyle, { Noise } from './styles/GlobalStyle'
import Loader from './components/full-screen-loader/components/Loader'
import Header from './components/Header'
import Main from './components/Main'
import VideoSection from './components/VideoSection';
import Hero from './components/Hero';
import CaseStudy from './components/CaseStudy'
import Clients from './components/Clients'
import Spotlight from './components/Spotlight'
import News from './components/News'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <GlobalStyle />
      <Loader />
      <Header />
      <Main>
        <VideoSection />
        <Hero />
        <CaseStudy />
        <Clients />
        <Spotlight />
        <News />
      </Main>
      <Footer />
      <Noise />
    </>
  )
}

export default App;
