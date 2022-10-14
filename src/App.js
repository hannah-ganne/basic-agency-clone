import './App.css';
import GlobalStyle, { Noise } from './styles/GlobalStyle'
import Loader from './components/full-screen-loader/components/Loader'
import Header from './components/Header'
import VideoSection from './components/VideoSection';
import Hero from './components/Hero';
import CaseStudy from './components/CaseStudy'

function App() {
  return (
    <>
      <GlobalStyle />
      {/* <Loader /> */}
      <Header />
      <VideoSection />
      <Hero />
      <CaseStudy />
    </>
  )
}

export default App;
