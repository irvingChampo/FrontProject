import Header from "../../Molecule/Header/Header";
import Camara from "../../../public/src/img/humedad.png"
import "./temperature.css";

function Temperature() {
    return ( 
        <section className="container">
            <Header imgSrc={Camara} title={"Security Cam"} homeLink={"Home"} camaraLink={"Camara"} alertaLink={"Alerta"} />
        </section>
     );
}

export default Temperature;