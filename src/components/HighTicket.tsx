import React from 'react'

const HighTicket: React.FC = () => {
  return (
    <section className="bg-primary py-24 px-4 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-display mb-8">Habitar o Caos e Criar Propósito</h2>
        <p className="text-lg mb-10 leading-relaxed">
          Um programa profundo de 3 meses para quem busca verdadeira transformação interior, alinhando propósito de vida, práticas integrativas e autoconhecimento, com acompanhamento próximo e personalizado.
        </p>
        <button className="bg-accent1 text-white text-lg font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-accent2 transition">
          Agende sua jornada
        </button>
      </div>
    </section>
  )
}

export default HighTicket
