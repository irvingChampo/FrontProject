import "./card.css";
import Img from "../../../public/src/img/img.png";

// eslint-disable-next-line react/prop-types
const CardImg = ({date, color}) => {
    return ( 
        <section className="card">
            <img className="imgCard" src={Img}/>
            <div className="dateCard" style={{backgroundColor: color}}>
                <h3 className="marginDate">Fecha:</h3><p>{date}</p>
            </div>
        </section>
     );
}

export default CardImg;