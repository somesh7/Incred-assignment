import React from "react";
import { NavLink} from "react-router-dom";
import {auth} from "../firebase";
import {useHistory} from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


const Navbar = ({user}) => {
    const history = useHistory();
    return (
    
        <div className="container">
         <NavLink to="/"></NavLink>
      
        <div className="navbar_style">
       
    
   {user?
   <>
   <NavLink to="/home" exact activeClassName="active_navbar"> Home </NavLink>
   <NavLink to="/cart" exact activeClassName="active_navbar"> <ShoppingCartIcon /> </NavLink>

       <button className="style1" onClick={() => {
           auth.signOut();
           history.push('/login');
       }}> Logout </button>
       
       </>
       : 
       <>
         <NavLink to="/" exact activeClassName="active_navbar"> Signup </NavLink>
         <NavLink to='/login' exact activeClassName="active_navbar"> Login </NavLink>
         </>
   }     

        </div>
        </div>
        
    )
};
export default Navbar;