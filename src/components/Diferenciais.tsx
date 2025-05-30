import { CheckCircle, RefreshCcw, Target, Leaf } from "lucide-react";

const Diferenciais = () => {
  const pilares = [
    { titulo: "Acolhimento", texto: "Atendimento humanizado, respeitando a individualidade de cada jornada.", icone: <CheckCircle className="w-12 h-12 text-white/80" /> },
    { titulo: "Transformação", texto: "Programas pensados para gerar mudanças reais e sustentáveis.", icone: <RefreshCcw className="w-12 h-12 text-white/80" /> },
    { titulo: "Personalização", texto: "Métodos adaptados conforme as necessidades e propósitos de cada pessoa.", icone: <Target className="w-12 h-12 text-white/80" /> },
    { titulo: "Práticas Integrativas", texto: "Integração de técnicas comprovadas de bem-estar físico, emocional e mental.", icone: <Leaf className="w-12 h-12 text-white/80" /> },
  ];

  return (
    <section className="bg-background py-24 px-4">
      <div className="max-w-7xl mx-auto text-center space-y-12">
        <h2 className="text-4xl font-display font-semibold text-primary">
          Nossa Filosofia
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {pilares.map((item, index) => (
            <div
              key={index}
              className="bg-primary/80 backdrop-blur-md p-8 rounded-3xl shadow-lg space-y-6 transition hover:shadow-2xl flex flex-col justify-between"
            >
              <div className="flex justify-center">{item.icone}</div>
              <h3 className="text-xl font-semibold text-textPrimary">{item.titulo}</h3>
              <p className="text-sm text-textSecondary leading-relaxed">{item.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Diferenciais;
