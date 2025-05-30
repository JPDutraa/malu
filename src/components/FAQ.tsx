import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface Pergunta {
  pergunta: string
  resposta: string
}

const perguntas: Pergunta[] = [
  { pergunta: 'Como funciona o programa?', resposta: 'O programa é estruturado em sessões semanais, com práticas integrativas personalizadas e acompanhamento contínuo durante os 3 meses.' },
  { pergunta: 'Quais são as formas de pagamento?', resposta: 'Aceitamos cartões de crédito, boleto bancário, PIX e parcelamentos facilitados.' },
  { pergunta: 'Preciso ter experiência prévia?', resposta: 'Não. O programa é adaptado para iniciantes ou para quem já está em alguma jornada de desenvolvimento pessoal.' },
  { pergunta: 'Quem pode participar?', resposta: 'Qualquer pessoa maior de 18 anos interessada em transformação pessoal e desenvolvimento integral.' },
]

const FAQ = () => {
  const [aberta, setAberta] = useState<number | null>(null)

  const toggle = (index: number) => {
    setAberta(aberta === index ? null : index)
  }

  return (
    <section className="bg-background py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-display text-primary mb-12">Perguntas Frequentes</h2>
        <div className="space-y-4 text-left">
          {perguntas.map((item, index) => (
            <div key={index} className="border border-neutral rounded-xl shadow transition">
              <button
                className="w-full flex justify-between items-center p-6 text-lg font-display text-textPrimary"
                onClick={() => toggle(index)}
              >
                {item.pergunta}
                {aberta === index ? <ChevronUp className="text-accent1" /> : <ChevronDown className="text-accent1" />}
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${aberta === index ? 'max-h-96 opacity-100 p-6 pt-0' : 'max-h-0 opacity-0 p-0'}`}
              >
                <p className="text-textSecondary">{item.resposta}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
