import Header from "../../Molecule/Header/Header";
import Camara from "../../../public/src/img/camara.png"
import Card from "../../Molecule/CardImg/CardImg"
import "./cam.css";

function Cam() {
    return ( 
        <section className="container-cam">
            <Header imgSrc={Camara} title={"Security Cam"} homeLink={"Home"}  alertaLink={"Alerta"} temperaturaLink={"Temperatura"}/>
            <Card date={"07/07/20024"} color={"#88add9"}/>
            <Card date={"07/07/20024"} color={"#88add9"}/>
            <Card date={"07/07/20024"} color={"#88add9"}/>
            <Card date={"07/07/20024"} color={"#88add9"}/>
            <Card date={"07/07/20024"} color={"#88add9"}/>
            <Card date={"07/07/20024"} color={"#88add9"}/>
            <Card date={"07/07/20024"} color={"#88add9"}/>
            <Card date={"07/07/20024"} color={"#88add9"}/>
            <Card date={"07/07/20024"} color={"#88add9"}/>
            <Card date={"07/07/20024"} color={"#88add9"}/>
        </section>
     );
}

export default Cam;