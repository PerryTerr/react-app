import './Body.css'
//import Form from './Form';
//import { FaBeer } from 'react-icons/fa';
//import Lists from './Lists'
import Nokia from './Nokia'

const Header= () =>{
    return(
        
        <>
        
        <header className="Header">
            <div className="logo"> <img src="/image/logo2.jpeg" alt="logo" className="logo" /></div>
            {/* <h1><marquee behavior="scroll" amout="20m/s">WELCOME href PERRY-TERRY'S SPORT ACADEMY</marquee></h1> */}
            <div className="a">
                <ul>

                    <li><a href="/Home"></a></li>
                    <li><a href="/About"></a></li>
                    <li><a href="/Contacts"></a></li>
                    <li><a href="/Services"></a></li>
                    <li><a href="/Gallery"></a></li>
                    </ul>
   
                  </div>
            
            
            <Nokia />
            </header>
        
            </>
    )   
}


export default Header