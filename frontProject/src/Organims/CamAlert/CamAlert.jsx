import Header from "../../Molecule/Header/Header";
import Card from "../../Molecule/CardImg/CardImg"
import Camara from "../../../public/src/img/alerta.png"
import "./camAlert.css";

function CamAlert() {
    return ( 
        <section className="container-camAlert">
            <Header imgSrc={Camara} title={"Security Cam"} homeLink={"Home"} camaraLink={"Camara"}  temperaturaLink={"Temperatura"}/>
            <Card date={"07/07/20024"} color={"#e64c3c"}/>
            <Card date={"07/07/20024"} color={"#e64c3c"}/>
            <Card date={"07/07/20024"} color={"#e64c3c"}/>
            <Card date={"07/07/20024"} color={"#e64c3c"}/>
            <Card date={"07/07/20024"} color={"#e64c3c"}/>
            <Card date={"07/07/20024"} color={"#e64c3c"}/>
            <Card date={"07/07/20024"} color={"#e64c3c"}/>
            <Card date={"07/07/20024"} color={"#e64c3c"}/>
            <Card date={"07/07/20024"} color={"#e64c3c"}/>
            <Card date={"07/07/20024"} color={"#e64c3c"}/>1
        </section>
     );
}

export default CamAlert;