import "/src/CSS/Loc.css"
function Loc () {
    return (
        <div className="main-loc">
            <h1 className="tittle-loc">Onde Estamos</h1>
            <p className="p-loc">Nosso ponto de retirada e cozinha central está localizado em:</p>
            <h3 className="h3-loc">Rua dos Sabores, 123 / Bairro Saúde / Cidade/UF</h3>
            <iframe
  src="https://www.google.com/maps?q=Rua%20dos%20Sabores,%20123&output=embed"
  loading="lazy"
  style={{
    width: "45%", 
    aspectRatio: "1 / 1",    
    height: "180px",       
    margin: "20px auto",
    border: "5px solid #2e7d32",
    borderRadius: "10px"
  }}
/>

            </div>
    )
}

export default Loc;