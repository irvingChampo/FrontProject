import { Link } from 'react-router-dom';
import Hacker from "../../../public/src/img/hacker.png";
import Button from "../../Atom/Button/Button";
import Input from "../../Atom/Input/Input";
import "./register.css";


function Login() {
    return (
        <section className="container">
            <div className="container-login">
            <div className="container-right">
                    <div className="icon"><h1>Security Cam</h1></div>
                    <Input type={"email"} placeholder={"Email"} width={"70%"} height={"10%"}/>
                    <Input type={"email"} placeholder={"Password"} width={"70%"} height={"10%"}/>
                    <Link className='Link' to={"/home"}><Button text={"Sign up"} width={"80%"} height={"100%"} radio={"10px"} margen={"0px"} color={"#4D85C7"}/></Link>
                </div>
                <div className="container-left-SignUp">
                    <img className="logo" src={Hacker}/>
                    <Link className='Link' to={"/login"}><Button text={"Login"} width={"100%"} height={"100%"} radio={"25px"} margen={"10px"} /></Link>
                </div>
            </div>
        </section>
     );
}

export default Login;