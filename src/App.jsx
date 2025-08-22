import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Aboutme from './components/Aboutme'
import Historial from './components/Historial'
import Paises from './components/Paises'



function App() {
  return (
    <>
      <Header />
      <div>
        {/* componentes */}
        <Home/>
        <Aboutme/>
        <Historial/>
        <Paises/>
        
      </div>
      <Footer />
    </>
  )
}

export default App
