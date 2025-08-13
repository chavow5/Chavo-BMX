import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Aboutme from './components/Aboutme'




function App() {
  return (
    <>
      <Header />
      <div>
        {/* componentes */}
        <Home/>
        <Aboutme/>
        
        
      </div>
      <Footer />
    </>
  )
}

export default App
