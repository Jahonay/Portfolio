import './App.css';
import React from 'react';
import {Link} from 'react-router-dom';g

//      Reminder to create hamburger toggle
//      Dont just copy and paste this one

/*function Navbar() {
    const [click, setClick] = useState(false);
   const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.unnerWidth <= 960){
            setButton(false);
        } else{
            setButton(true);
        }
    };
    useEffect(() =>{
        showButton();
    }, []);
    window.addEventListener('resize', showButton); */

function Nav() {
  return ( 
    <div className="header-box">
        <div className="header">
            <div className="header-content-left">
                <Link to='/'><h1>John Mackey</h1></Link>
                
                
            </div>

            <div className="header-content-right">
                <Link to='/AboutPage'>
                    <h1>about me</h1>
                </Link>
                <Link to='ContactPage'>
                    <h1>contact</h1>
                </Link>
            </div>
        </div>
    </div>
  );
}

export default Nav;