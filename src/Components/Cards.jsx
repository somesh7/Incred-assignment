import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import {useHistory} from "react-router-dom";

const Cards = (props) => {
    const [price, setPrice] = useState()
    const [num,setNum] = useState(0);
    const history = useHistory();

    const incNum = () => {
        if(num < 5){
            setNum(num + 1)
        }
            else {
            alert('you can only order 5 plates in each menu');
        }
        
    }
    const decNum = () => {
        if(num > 0) {
        setNum(num - 1)
        } 
        else {
             setNum(0);
             alert('Negative Quantity not possible');
    }
}
    return (
        <>
        <div className="cards">
            <div className="card">
                <img
                src={props.imgsrc}
                alt=""
                className="card_img"
                />
                <div className="card_info">
                <h2 className="card_title"> {props.name} </h2>
                <span className="ruppee"> {props.rs}</span>
                <div className="quantity">
                <button className="btn_quan" onClick={incNum}> <AddIcon /> </button>
                <h1 className="count_div">  {num}</h1>
                
                <button className="btn_quan" onClick={decNum}>  <RemoveIcon /> </button>
                
                
                
                </div>
                <button className="card_btn" onClick={() => {
                    history.push('/cart');
                }} > Order Now</button>
                </div>
            </div>
        </div>

        </>
    )
}
export default Cards;