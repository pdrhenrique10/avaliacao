import "/src/CSS/Card2.css"

function Card2 () {
    return (
    <div className="card2">
    <h1 className="logo2">Prato Saudável</h1>
      <div className="card2-content">
        <h3 className="tittle-card2">Frango com Batata Doce</h3>
        <p className="paragraph-card2">350 kcal / Sem Glúten</p>
        <span className="price">R$24,90</span>
        <button className="button-add">Adicionar</button>
      </div>
    </div>
    )
}
export default Card2;