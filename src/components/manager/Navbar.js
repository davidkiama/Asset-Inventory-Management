import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false); // Code to set click to false to allow toggling when icon is clicked
  
  const [button, setButton] = useState(true); 

  const handleClick = () => setClick(!click); //Code to set the icon from false (as specified above) to true so 
                                      // .....that it toggles from fas fa-times to fas fa-bars as specified down on thi page.
  const closeMobileMenu = () => setClick(false); // To define the function we have called below.

//Function to display and remove the button depending on screen size////comp to mobile///part of our media query.
    const showButton = () => {
      if (window.innerWidth <= 960){
        setButton(false);
      } else {
        setButton(true);
      }
    };
//Syntax to invoke/call this above showButton function
    window.addEventListener('resize', showButton);

// Syntax to make the any button on navbar to disappear as screens becomes smaller
    useEffect(() => {
      showButton();
    }, []);




  return (
    <div>
    <nav className='navbar'>
        <div className='navbar-container'>
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                                        {/* closeMobileMenu code added here so that on mobile, when 
                                                .........someone clicks the logo, it closes the menu. */}
                Wendesk <i className='fab fa-typo3' /> 
                                                  {/* To display the logo */}
            </Link> 

            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />   
                                                { /* To mean when you click, it toggles from fa-times to fa-bars */}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                                             {/* To make the menu be active but when you click it again, it disappears */}
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}> 
                                      {/* You have to define closeMobileMenu at the top for it to work. */}
                  Home
                </Link>
              </li>
              
              
{/* Profile icon div.....going to profile/SERVICES */}

              <li className='nav-item'>
                <Link to='/Asset' className='nav-links' onClick={closeMobileMenu}> 
                                      {/* You have to define closeMobileMenu at the top for it to work. */}
                  Assets
                </Link>
              </li>

              <li className='nav-item'>
                <Link to='/Assetrequest' className='nav-links' onClick={closeMobileMenu}> 
                                      {/* You have to define closeMobileMenu at the top for it to work. */}
                  Assetrequest
                </Link>
              </li>


             

              <li className='nav-item'>
                <Link to='/AssetList' className='nav-links' onClick={closeMobileMenu}> 
                                      {/* You have to define closeMobileMenu at the top for it to work. */}
                  AssetList
                </Link>
              </li>

{/* Request Asset icon div....going to asset/PRODUCTS */}
              


              


              

{/* Request sign-up icon div....going to asign-up */}
<li className='nav-item'>
                <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}> 
                                      {/* You have to define closeMobileMenu at the top for it to work. */}
                  Logout
                </Link>
              </li>

            </ul>

            {button && <Button buttonStyle='btn--outline'>Log-Out</Button>}
        </div>
    </nav>
    </div>
  );
}

export default Navbar;
