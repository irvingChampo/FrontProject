import { Link } from 'react-router-dom';
import "./header.css";


// eslint-disable-next-line react/prop-types
const Header = ({ imgSrc, title, homeLink, camaraLink, alertaLink, temperaturaLink }) => {
    return (
      <>
        <section className="header">
          <div className='container-logo'>
            <img className='imagen' src={imgSrc} alt="Header Image" />
            <h1 className='title'>{title}</h1>
          </div>
          <div className='container-link'>
            <ul>
                <Link to={"/home"}><li>{homeLink}</li></Link>
                <Link to={"/camara"}><li>{camaraLink}</li></Link>
                <Link to={"/alerta"}><li>{alertaLink}</li></Link>
                <Link to={"/temperatura"}><li>{temperaturaLink}</li></Link>
            </ul>
          </div>
        </section>
        </>
     );
}

export default Header;