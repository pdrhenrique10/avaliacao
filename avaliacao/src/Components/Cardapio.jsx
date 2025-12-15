import Card2 from "./Card2";
import "/src/CSS/Cardapio.css"

function Cardapio () {
    return (
        <div className="main">
            <h1 className="tittle-cardapio">Nosso Cardápio da Semana</h1>
            <div className="cards">
                <Card2 />
                <Card2 />
                <Card2 />
                <Card2 />
            </div>
        </div>
    )
}
export default Cardapio;