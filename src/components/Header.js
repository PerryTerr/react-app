import './Body.css'
import Form from './Form';
//import { FaBeer } from 'react-icons/fa';
//import Lists from './Lists'


const Header= () =>{
    return(
        
        <>
        
        <header className="Header">
            <div className="logo"> 
            <img src="/image/logo2.jpeg" alt="logo" className="logo" />
            </div>
            <div className="a">
                <ul>
                    <li><a href="/Home"></a></li>
                    <li><a href="/About"></a></li>
                    <li><a href="/Contacts"></a></li>
                    <li><a href="/Services"></a></li>
                    <li><a href="/Gallery"></a></li>
                    </ul>
            </div>
            <Form />
            </header>
            </>
    )   
}


export default Header