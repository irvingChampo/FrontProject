import Header from "../../Molecule/Header/Header";
import Hacker from "../../../public/src/img/hacker.png";
import { Link } from 'react-router-dom';
import Camara from "../../../public/src/img/camara.png"
import Alerta from "../../../public/src/img/alerta.png"
import Humedad from "../../../public/src/img/humedad.png"
import "./home.css";

function Home() {
    return ( 
        <section className="container-home">
            <Header imgSrc={Hacker} title={"Security Cam"} />
            <div className="container-widget">
                <Link className="Link-widget" to={"/camara"}><button className="button-widget"><img className="img-widget" src={Camara}/></button></Link>
                <Link className="Link-widget" to={"/alerta"}><button className="button-widget"><img className="img-widget" src={Alerta}/></button></Link>
                <Link className="Link-widget" to={"/temperatura"}><button className="button-widget"><img className="img-widget" src={Humedad}/></button></Link>
            </div>
        </section>
     );
}

export default Home;