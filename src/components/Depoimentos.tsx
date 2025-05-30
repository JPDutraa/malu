interface Depoimento {
  nome: string
  mensagem: string
}

const depoimentos: Depoimento[] = [
  { nome: 'Ana S.', mensagem: 'O programa transformou minha forma de enxergar a vida. Recomendo a todos que buscam equilíbrio e propósito.' },
  { nome: 'Carlos M.', mensagem: 'Nunca me senti tão acolhido e guiado em minha jornada pessoal. Excelente acompanhamento.' },
  { nome: 'Juliana P.', mensagem: 'As práticas integrativas fizeram total diferença na minha rotina. Um divisor de águas na minha saúde mental.' },
]

const Depoimentos = () => {
  return (
    <section className="bg-background py-20 px-4 animate-fade-in">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-display text-primary mb-12">Depoimentos</h2>
        <p className="text-lg text-textSecondary mb-16">Avaliação média: ⭐ 5.0/5.0</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {depoimentos.map((depoimento, index) => (
            <div key={index} className="bg-secondary p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <p className="text-textSecondary italic mb-4">"{depoimento.mensagem}"</p>
              <div className="font-display text-textPrimary font-semibold">{depoimento.nome}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Depoimentos
