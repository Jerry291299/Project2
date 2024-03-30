import React from "react";
import Banner from "../Components/banner";
import Productlist from "../Components/ProductsList";

type Props = {
    
}
const Home = (props:Props)=>{
    return (
       <>
       <Banner/>
       <Productlist/>
       </>
    )
}
export default Home