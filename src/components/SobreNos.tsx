interface Profissional {
  nome: string
  descricao: string
  foto: string
}

const profissionais: Profissional[] = [
  {
    nome: 'Louise Monteiro',
    descricao: 'Fundadora da MALU, especialista em terapias integrativas, desenvolvimento pessoal e facilitadora de processos de transformação com mais de 5 anos de experiência.',
    foto: '/lu.jpg', // Aqui você poderá futuramente colocar a foto real
  },{
    nome: 'Mariana Freitas',
    descricao: 'Fundadora da MALU, especialista em terapias integrativas, desenvolvimento pessoal e facilitadora de processos de transformação com mais de 5 anos de experiência.',
    foto: '/ma.jpg', // Aqui você poderá futuramente colocar a foto real
  },
]

const SobreNos = () => {
  return (
    <section className="bg-background py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-display text-primary mb-12">Sobre Nós</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          {profissionais.map((profissional, index) => (
            <div key={index} className="bg-secondary p-6 rounded-xl shadow-md flex flex-col items-center w-80">
              <img src={profissional.foto} alt={profissional.nome} className="rounded-full w-40 h-40 object-cover mb-4" />
              <h3 className="text-2xl font-display text-textPrimary mb-2">{profissional.nome}</h3>
              <p className="text-textSecondary text-sm">{profissional.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SobreNos
