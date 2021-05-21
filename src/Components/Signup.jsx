import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { auth, providerFacebook, socialMediaAuth, providerGoogle } from "../firebase";

 
const Signup = () => {
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const history = useHistory();

    const submitData = async (e) => {
        e.preventDefault();
        console.log(email,password)
        try{
     const result = await auth.createUserWithEmailAndPassword(email, password)
     history.push('/dashboard');
        if(email && password) {
            const newUser = { id: new Date().getTime().toString(), email, password };

            setEmail("");
            setPassword("");
        }
    } catch(err) {
         
            alert("Please fill every field correctly and password must be atleast 6 characters long")
        
    }
}   
const handleOnClick = async (provider) => {
    const res = await socialMediaAuth(provider)
    history.push('/dashboard');
     console.log(res)
 }

    return (
          <>
          <div className="form_div">
           <form  action="" className="jerry" onSubmit={submitData}>
        <div className="second">
        <h1 className="data1"> REGISTER </h1>
        <hr className="line_div" />
        </div>
        
        
        
        <input  className="summer"
        
        name="email"
        id="email"
        autocomplete="off"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="E-Mail"

         type="text"
         >
            
        </input>

       
        <input 
        autoComplete="off"
        name="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
         className="summer" type="Password"
           > 
           
            
        </input>

        <div className="tommy">
        <button className="stylee1"> Submit</button>
        </div>
       
        <NavLink to='/login' className="stylee2" role="button"> Existing User? Click here to Login! </NavLink>

        </form>
       <h1 className="data2"> OR</h1>
       <div className="social_div">
       <h1 className="data4"> Sign in with </h1>
       <hr className="line_div2" />
       <button onClick={() => handleOnClick(providerFacebook)} className="social_btn"> Facebook </button>
       <button onClick={() => handleOnClick(providerGoogle)} className="social_btn1"> Google </button>
    
       </div>
       </div>

          </>
    );
};
export default Signup;