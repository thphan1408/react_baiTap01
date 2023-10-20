import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header'
import { Banner } from './components/Banner'
import { Services } from './components/Services'
import { Footer } from './components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className="container">
        <section className="py-5">
          <Banner> </Banner>
        </section>
        <section className="pt-4">
          <Services> </Services>
        </section>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
