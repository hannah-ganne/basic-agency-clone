import './App.css';
import GlobalStyle from './styles/GlobalStyle'
import Header from './components/Header'
import VideoSection from './components/VideoSection';
import Hero from './components/Hero';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <VideoSection />
      <Hero />
    </>
  )
}

export default App;
