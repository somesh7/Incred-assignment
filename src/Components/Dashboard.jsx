import React from "react";
import {useHistory} from "react-router-dom";

const Dashboard = () => {
    const history = useHistory();
    return ( <>
            <div className="dash_div">
        <h3 className="text1"> Welcome to the Website  </h3>
        <button className="dash_btn " onClick={() => {
            history.push('/home');
        }}> Get Started </button>
        </div> 
    
        </>
    
    );
};
export default Dashboard;