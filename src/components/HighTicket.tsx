const HighTicket = () => {
  return (
    <section
      className="relative bg-fixed bg-center bg-cover text-white py-32 px-4"
      style={{ backgroundImage: "url('/parallax.jpg')" }}
    >
      <div className="max-w-4xl mx-auto text-center space-y-8 bg-primary/80 backdrop-blur-md rounded-3xl p-12 shadow-lg">
        <h2 className="text-4xl md:text-5xl font-display font-semibold">
          Habitar o Caos e Criar Propósito
        </h2>
        <p className="text-lg text-white/80">
          Um programa profundo de 3 meses para quem busca verdadeira transformação interior, alinhando propósito de vida, práticas integrativas e autoconhecimento, com acompanhamento próximo e personalizado.
        </p>

        <button className="bg-accent1 text-white px-8 py-4 text-lg rounded-lg shadow-lg hover:bg-accent2 transition">
          Agende sua jornada
        </button>
      </div>
    </section>
  )
}

export default HighTicket
