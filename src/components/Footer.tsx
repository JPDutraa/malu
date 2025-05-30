const Footer = () => {
  return (
    <footer className="bg-neutral text-textSecondary py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="font-display text-lg mb-4 text-textPrimary">MALU</h3>
          <p>HÁBITO & PROPÓSITO</p>
          <p>Bem-estar, desenvolvimento pessoal e práticas integrativas.</p>
        </div>

        <div>
          <h3 className="font-display text-lg mb-4 text-textPrimary">Contato</h3>
          <p>Email: contato@malu.com.br</p>
          <p>Telefone: (00) 00000-0000</p>
          <p>Endereço: Rua Exemplo, 123 - Cidade</p>
        </div>

        <div>
          <h3 className="font-display text-lg mb-4 text-textPrimary">Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-accent1">Política de Privacidade</a></li>
            <li><a href="#" className="hover:text-accent1">Termos de Uso</a></li>
            <li><a href="#" className="hover:text-accent1">Instagram</a></li>
            <li><a href="#" className="hover:text-accent1">WhatsApp</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center text-sm">
        © {new Date().getFullYear()} MALU - Todos os direitos reservados.
      </div>
    </footer>
  )
}

export default Footer
