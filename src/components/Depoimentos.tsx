const Depoimentos = () => {
  const depoimentos = [
    {
      nome: "Ana S.",
      texto: "O programa transformou minha forma de enxergar a vida. Recomendo a todos que buscam equilíbrio e propósito."
    },
    {
      nome: "Carlos M.",
      texto: "Nunca me senti tão acolhido e guiado em minha jornada pessoal. Excelente acompanhamento."
    },
    {
      nome: "Juliana P.",
      texto: "As práticas integrativas fizeram total diferença na minha rotina. Um divisor de águas na minha saúde mental."
    },
  ];

  return (
    <section className="bg-background py-24 px-4">
      <div className="max-w-6xl mx-auto text-center space-y-10">
        <h2 className="text-4xl font-display font-semibold text-primary">
          Depoimentos
        </h2>

        <div className="flex justify-center items-center gap-2 text-xl text-textSecondary">
          <span>Avaliação média:</span>
          <span className="text-3xl text-accent1">⭐ 5.0</span>
          <span className="text-lg">/5.0</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {depoimentos.map((dep, index) => (
            <div 
              key={index}
              className="bg-primary/80 backdrop-blur-md rounded-2xl shadow-lg p-8 space-y-6 transition hover:shadow-2xl"
            >
              <p className="italic text-textSecondary text-lg leading-relaxed font-serif">"{dep.texto}"</p>
              <div className="text-primary font-semibold text-lg">{dep.nome}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Depoimentos
