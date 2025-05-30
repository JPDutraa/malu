import { useState } from 'react'

const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <header className="bg-primary text-white fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-2">
        <div className="flex items-center gap-3">
          <img src="/malulogo.jpg" alt="Logo MALU" className="h-14 object-contain" />
        </div>

        {/* Menu desktop */}
        <nav className="hidden md:flex gap-8">
        <a href="#inicio" className="hover:text-accent1">Início</a>
        <a href="#produtos" className="hover:text-accent1">Produtos & Programas</a>
        <a href="#sobre" className="hover:text-accent1">Sobre</a>
        <a href="#faq" className="hover:text-accent1">FAQ</a>
        </nav>


        <button className="hidden md:block bg-accent1 text-white px-4 py-2 rounded-lg hover:bg-accent2">
          Agende sua jornada
        </button>

        {/* Botão mobile */}
        <div className="md:hidden">
          <button onClick={() => setMenuAberto(!menuAberto)}>
            <span className="text-3xl">{menuAberto ? '✖' : '☰'}</span>
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {menuAberto && (
        <div className="md:hidden bg-primary text-white px-4 py-6 space-y-4">
            <a href="#inicio" className="block hover:text-accent1" onClick={() => setMenuAberto(false)}>Início</a>
            <a href="#produtos" className="block hover:text-accent1" onClick={() => setMenuAberto(false)}>Produtos & Programas</a>
            <a href="#sobre" className="block hover:text-accent1" onClick={() => setMenuAberto(false)}>Sobre</a>
            <a href="#faq" className="block hover:text-accent1" onClick={() => setMenuAberto(false)}>FAQ</a>
            <button className="mt-4 w-full bg-accent1 text-white px-4 py-2 rounded-lg hover:bg-accent2">
                Agende sua jornada
            </button>
            </div>

      )}
    </header>
  )
}

export default Header
