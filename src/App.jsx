import './App.css'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Section1 from './components/Section1'
import Testimonial from './components/Testimonial'
import About from './components/about'

function App() {
 

  return (
    <>
      <Banner />
      <div className='yeaman'>
      <Section1 />
      <About />
      </div>
      <Testimonial/>
      <Footer /> 
      
    </>
  )
}

export default App
