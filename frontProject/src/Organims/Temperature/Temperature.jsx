import Header from "../../Molecule/Header/Header";
import Camara from "../../../public/src/img/humedad.png"
import Grafica from "../../../public/src/img/grafico.png";
import "./temperature.css";

// eslint-disable-next-line react/prop-types
function Temperature () {
    return ( 
        <section className="container-temperatura">
            <Header imgSrc={Camara} title={"Security Cam"} homeLink={"Home"} camaraLink={"Camara"} alertaLink={"Alerta"} />
            <div className="container-grafica">
                <img className="img-grafica" src={Grafica}/>
            </div>
            <div className="container-info">
                <h1 className="title">Temperatura:</h1>
                <h3>00°C</h3>
            </div>
        </section>
     );
}

export default Temperature;