const SobreNos = () => {
  const equipe = [
    {
      nome: "Louise Monteiro",
      cargo: "Fundadora da MALU, especialista em terapias integrativas, desenvolvimento pessoal e facilitadora de processos de transformação com mais de 5 anos de experiência.",
      imagem: "/lu.jpg",
    },
    {
      nome: "Mariana Freitas",
      cargo: "Fundadora da MALU, especialista em terapias integrativas, desenvolvimento pessoal e facilitadora de processos de transformação com mais de 5 anos de experiência.",
      imagem: "/ma.jpg",
    },
  ];

  return (
    <section className="bg-background py-24 px-4">
      <div className="max-w-7xl mx-auto text-center space-y-10">
        <h2 className="text-4xl font-display font-semibold text-primary">
          Sobre Nós
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {equipe.map((pessoa, index) => (
            <div key={index} className="bg-primary/80 backdrop-blur-md rounded-3xl shadow-lg p-10 space-y-6 transition hover:shadow-2xl">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg">
                <img src={pessoa.imagem} alt={pessoa.nome} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold text-textPrimary">{pessoa.nome}</h3>
              <p className="text-sm text-textSecondary leading-relaxed">{pessoa.cargo}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SobreNos;
