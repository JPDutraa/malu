const Hero = () => {
  return (
    <section className="relative bg-background py-24 px-4 overflow-hidden">

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Bloco de Texto */}
        <div className="space-y-8 text-textPrimary">
          <h1 className="text-4xl md:text-5xl font-display leading-snug font-semibold">
            Transformação real através práticas integrativas e programas de propósito.
          </h1>
          <p className="text-base md:text-lg text-textSecondary">
            Desperte seu equilíbrio interior e construa o seu caminho de bem-estar com acompanhamento profissional e personalizado.
          </p>

          <div className="flex flex-col md:flex-row gap-4">
            <button className="bg-accent1 text-white px-8 py-4 text-lg rounded-lg shadow-lg hover:bg-accent2 transition">
              Conheça os Programas
            </button>
            <button className="border-2 border-accent1 text-accent1 px-8 py-4 text-lg rounded-lg shadow hover:bg-accent1 hover:text-white transition">
              Agende sua Jornada
            </button>
          </div>
        </div>

        {/* Imagem flutuante */}
        <div className="relative flex justify-center md:justify-end">
          <div className="rounded-2xl overflow-hidden shadow-xl w-[320px] h-[400px] md:w-[400px] md:h-[500px] z-10">
            <img 
              src="/hero.jpg" 
              alt="Malu Hero" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Layer verde (atrás do bloco esquerdo) */}
      <div className="absolute top-16 left-0 w-full md:w-[65%] h-[90%] bg-primary rounded-r-[80px] shadow-xl -z-10 transition-all duration-700 ease-in-out"></div>
    </section>
  )
}

export default Hero
