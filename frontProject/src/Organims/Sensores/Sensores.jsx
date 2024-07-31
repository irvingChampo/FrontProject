import Header from "../../Molecule/Header/Header";
import Camara from "../../../public/src/img/humedad.png"
import "./sensores.css";

// eslint-disable-next-line react/prop-types
function Temperature () {
    return ( 
        <section className="container-temperatura">
            <Header imgSrc={Camara} title={"Security Cam"} />
            <div className="container-grafica">
                <h2>grafica</h2>
            </div>
            <div className="container-info">
                <div className="distancia">
                    <h2>Distancia:</h2>
                </div>
                <div className="movimiento">
                    <h2>Movimiento</h2>
                </div>
            </div>
        </section>
     );
}

export default Temperature;