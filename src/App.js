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
import { useInView } from 'react-intersection-observer'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './styles/Theme'
import { useState, useEffect } from 'react'

function App() {
  const { ref: spotlightRef, inView: isVisible } = useInView({
    threshold: 0.2
  })
  
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    if (isVisible) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [isVisible])
  
  return (
    <>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Loader />
        <Header isVisible={isVisible} />
        <Main>
          <VideoSection />
          <Hero />
          <CaseStudy />
          <Clients />
          <Spotlight ref={spotlightRef} />
          <News />
        </Main>
        <Footer /> 
      </ThemeProvider>
      <Noise />
    </>
  )
}

export default App;
