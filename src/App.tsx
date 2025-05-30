import ProdutosProgramas from './components/ProdutosProgramas'
import HighTicket from './components/HighTicket'
import Depoimentos from './components/Depoimentos'
import Diferenciais from './components/Diferenciais'
import SobreNos from './components/SobreNos'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Header from './components/Header'

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0">
          <img
            src="https://source.unsplash.com/featured/?nature,meditation"
            alt="Equilíbrio e bem-estar"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center py-32 px-4">
          <h1 className="text-5xl font-display mb-6 text-primary drop-shadow-lg">
            Transformação real através práticas integrativas e programas de propósito
          </h1>
          <p className="text-xl text-textSecondary mb-10 drop-shadow-md">
            Desperte seu equilíbrio interior e construa o seu caminho de bem-estar.
          </p>
          <div className="flex gap-6 flex-wrap justify-center">
            <button className="bg-accent1 text-white px-8 py-4 text-lg rounded-lg shadow-lg hover:bg-accent2 hover:scale-105 transition transform duration-300">
              Conheça os Programas
            </button>
            <button className="border-2 border-accent1 text-accent1 px-8 py-4 text-lg rounded-lg shadow hover:bg-accent1 hover:text-white hover:scale-105 transition transform duration-300">
              Entre em Contato
            </button>
          </div>
        </div>
      </section>

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
