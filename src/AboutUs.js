import Header from './components/Header'
import Footer from './components/Footer'
import {Container} from 'react-bootstrap'
import AboutUsScreen from './screens/AboutUsScreen'

const AboutUs = () => {
  return (
    <>
    <Header></Header>
    <main className='py-3'>
    <Container>
      <AboutUsScreen/>
    </Container>

    </main>

    <Footer></Footer>
    </>
  )
}

export default AboutUs