import "../CSS/FaleConosco.css";


function FaleConosco() {
  return (
    <section className="contato">

      <h2 className="titulo">Fale Conosco</h2>
      <div className="linha"></div>

      <form className="formulario">
        <input type="text" placeholder="Seu Nome" />
        <input type="email" placeholder="Seu E-mail" />
        <button type="submit">Enviar Mensagem</button>
      </form>

      <footer className="rodape">
        <h4>Restaurante Popular Saudável | Alimentação Inteligente</h4>
        <p>Av. Paulista, 1000 - São Paulo/SP</p>
        <span>© 2024 Todos os direitos reservados.</span>
      </footer>

    </section>
  );
}

export default FaleConosco;
