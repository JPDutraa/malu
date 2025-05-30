import {
  BookOpen,
  Dumbbell,
  ClipboardList,
  Star,
  Headphones,
  Leaf,
  Smartphone,
  BookMarked,
  Home
} from 'lucide-react'

interface Produto {
  titulo: string
  descricao: string
  Icone: React.ElementType
}

const produtos: Produto[] = [
  { titulo: 'eBooks', descricao: 'Material exclusivo para seu desenvolvimento.', Icone: BookOpen },
  { titulo: 'Planos de Exercício', descricao: 'Rotinas personalizadas de práticas integrativas.', Icone: Dumbbell },
  { titulo: 'Plano de Ação Básico', descricao: 'Primeiros passos para o equilíbrio.', Icone: ClipboardList },
  { titulo: 'Programa de Acompanhamento', descricao: 'Habitar o Caos e Criar Propósito.', Icone: Star },
  { titulo: 'Meditações Guiadas', descricao: 'Acesse meditações cuidadosamente guiadas.', Icone: Headphones },
  { titulo: 'Vivências Presenciais', descricao: 'Experiências presenciais únicas.', Icone: Leaf },
  { titulo: 'App (em breve)', descricao: 'Acesso facilitado às práticas.', Icone: Smartphone },
  { titulo: 'Livro (em breve)', descricao: 'Conteúdo aprofundado para sua jornada.', Icone: BookMarked },
  { titulo: 'Centro de Práticas (futuro)', descricao: 'Espaço físico de acolhimento.', Icone: Home },
]

const ProdutosProgramas = () => {
  return (
    <section className="bg-background py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-display text-center text-primary mb-14">Produtos & Programas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {produtos.map((produto, index) => (
            <div key={index} className="bg-secondary rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transform hover:scale-105 hover:shadow-xl transition">
              <produto.Icone className="h-16 w-16 text-white/80 mb-6" />
              <h3 className="text-2xl font-display mb-3 text-textPrimary">{produto.titulo}</h3>
              <p className="text-textSecondary text-base">{produto.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProdutosProgramas
