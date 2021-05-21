import React from 'react'
import CardData from './CardData';
import Cards from "./Cards";

const Home = () => {

    return ( 
        <div className="menu_div">
        {
            CardData.map((val) => {
                return (
                    <Cards 
            imgsrc={val.imgsrc}
            name={val.name} 
            rs={val.rs}
            />

                );
            })
        }          
        </div>
    )
};
export default Home;
