import { Link } from 'react-router-dom';
import Sensor from "../../../public/src/img/ultrasonico.png";
import Button from "../../Atom/Button/Button";
import Input from "../../Atom/Input/Input";
import "./login.css";


function Login() {
    return (
        <section className="container">
            <div className="container-login">
                <div className="container-left">
                    <img className="logo" src={Sensor}/>
                    <Link className='Link' to={"/register"}><Button text={"Sign up"} width={"100%"} height={"100%"} radio={"25px"} margen={"10px"} /></Link>
                </div>
                <div className="container-right">
                    <div className="icon"><h1 className='textura'>Security Cam</h1></div>
                    <Input type={"email"} placeholder={"Email"} width={"70%"} height={"10%"}/>
                    <Input type={"email"} placeholder={"Password"} width={"70%"} height={"10%"}/>
                    <Link className='Link' to={"/sensores"}><Button text={"Login"} width={"80%"} height={"100%"} radio={"10px"} margen={"10px"} color={"#4D85C7"}/></Link>
                </div>
            </div>
        </section>
     );
}

export default Login;