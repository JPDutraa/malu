import { Smile, RefreshCw, Target, Leaf } from 'lucide-react'

interface Diferencial {
  titulo: string
  descricao: string
  Icone: React.ElementType
}

const diferenciais: Diferencial[] = [
  { titulo: 'Acolhimento', descricao: 'Atendimento humanizado, respeitando a individualidade de cada jornada.', Icone: Smile },
  { titulo: 'Transformação', descricao: 'Programas pensados para gerar mudanças reais e sustentáveis.', Icone: RefreshCw },
  { titulo: 'Personalização', descricao: 'Métodos adaptados conforme as necessidades e propósitos de cada pessoa.', Icone: Target },
  { titulo: 'Práticas Integrativas', descricao: 'Integração de técnicas comprovadas de bem-estar físico, emocional e mental.', Icone: Leaf },
]

const Diferenciais = () => {
  return (
    <section className="bg-background py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-display text-primary mb-12">Nossa Filosofia</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {diferenciais.map((item, index) => (
            <div key={index} className="bg-secondary p-6 rounded-xl shadow-md hover:shadow-lg transition flex flex-col items-center">
              <item.Icone className="h-16 w-16 text-white mb-6" />
              <h3 className="text-xl font-display text-textPrimary mb-2">{item.titulo}</h3>
              <p className="text-textSecondary text-sm">{item.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Diferenciais
