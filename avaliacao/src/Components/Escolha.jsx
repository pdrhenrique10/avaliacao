import "/src/CSS/Card.css"
import Card from "./Card";
import "/src/CSS/Escolha.css"

function Escolha () {
    return (
            <section className="section-main">
             <h1 className="tittle-screen">Por que escolher a Restaurante Popular Saudável? </h1>
             <div className="cards">
            <Card />
            <Card />
            <Card />   
             </div>
            </section>
 )
}

export default Escolha;