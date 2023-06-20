import './App.css'
import { NavBar } from './components/NavBar'
import { Home } from './components/Home/home'
import { Services } from './components/Services/services'
import { About } from './components/About/about'
import { Contact } from './components/Contact/contact'
import { Footer } from './components/Footer/footer'



// eslint-disable-next-line react-refresh/only-export-components
export const LC = () => {

  return (
    <>
      <NavBar/>
      <Home/>
      <Services/>
      <About/>
      <Contact/>
      <Footer/>
      
    </>
  )
}