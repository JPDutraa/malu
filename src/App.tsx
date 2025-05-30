import ProdutosProgramas from './components/ProdutosProgramas'
import HighTicket from './components/HighTicket'
import Depoimentos from './components/Depoimentos'
import Diferenciais from './components/Diferenciais'
import SobreNos from './components/SobreNos'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

<Hero />


<section id="produtos">
  <ProdutosProgramas />
</section>

<section id="high-ticket">
  <HighTicket />
</section>

<section id="depoimentos">
  <Depoimentos />
</section>

<section id="filosofia">
  <Diferenciais />
</section>

<section id="sobre">
  <SobreNos />
</section>

<section id="faq">
  <FAQ />
</section>
      <Footer />
    </div>
  )
}

export default App
