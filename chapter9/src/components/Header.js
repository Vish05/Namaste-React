import { useState } from "react";
import { Link } from 'react-router-dom';
import useOnline from '../Utils/useOnline';



const Title = () => (
    <a href="/">
      <img
    className='logo'
    alt="logo"
    src="http://lh3.googleusercontent.com/1hrS2w6NmSE1-Skwx-NYMLz52kqPJ4pkBofv9x_8s3xTu0aXPVh90WJflY8G4wzl_scYFjKdVWcaAKur58eaEQQzBks"
    />
    </a>
    );

    const Header = () => {
      const [isLoggedIn, setIsLoggedIn] = useState(false);

      const isOnline = useOnline();

        return (
           <div className='header'>
             <Title/>
             <div className='nav-items'>
              <ul>
              <li><Link to="/">Home</Link></li>
                 <li><Link to="/about">About</Link ></li>
                  <li><Link to="/contact">Contact</Link> </li>
                  <li><Link to="">cart</Link></li>
                  <li><Link to="/instamart">Instamart</Link></li>
              </ul>
             </div>
             <h1>{isOnline? "online" : "offline"}</h1>
               {isLoggedIn ?
               ( <button onClick={() => setIsLoggedIn(false)}>Logout</button>
               ) : (
               <button onClick={() => setIsLoggedIn(true)}>Login</button>
               )}
           </div>
        );
     };


    export default Header;