import React, { useEffect, useState } from "react";
//import IProduct from "../interface/product";
import anh16 from "./anh/anh16.png"
import anh15 from "./anh/anh15.png"
import anh13 from "./anh/anh13.png"
import anh12 from "./anh/anh12.png"
import anh10 from "./anh/anh10.png"
import anh9 from "./anh/anh9.png"
import anh8 from "./anh/anh8.png"
import anh7 from "./anh/anh7.jpg"
import anhbaner from"./anh/unsplash_pxoZSTdAzeU.png"
import anh0 from "./anh/Image.png"
import anh6 from "./anh/anh6.png"
import anh5 from "./anh/anh5.png"
import { getAllProduct } from "../service/productService";
import { IProduct } from "../Interface/product";
type Props = {
};

const Productlist = (props: Props) => {
  const [status,setStatus] = useState(true)
    const [load,setLoad] = useState(true)
    const [products,setProduct] = useState([])
    const [page,setPage] =  useState(1)

    useEffect(()=>{
      const fetchData = async () => {
        try {
          const data = await getAllProduct()
          setProduct(data)
        } catch (error) {
          console.log(error);
          
        }
      }
      fetchData()
    },[setProduct])
const handleClick = ()=>{
    setStatus(!status)
}
const buttonClick =()=>{
    setPage(page+1)
}
const buttonClickprev =()=>{
    setPage(page-1)
}
  useEffect(()=>{
    // console.log(`Click ${load}`); 
    fetch(``)
    .then((res)=>res.json()).then((data)=>{
        setProduct(data.products);        
    });    
  },[page])
  return (
    <div className="container mx-auto w-[1440px]">
      <div className="row">
     <div className="container ">   
    <h1 className="text-4xl font-bold mb-[10px]">Featured Products</h1>
   <div className="flex justify-between">
   <div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
    </div>
    <button className="border-2 border-black rounded-lg p-[4px]">View all</button>
   </div>
    <div className="pt-[40px] grid grid-cols-4 gap-4">

      {products.map((product: IProduct, index:number)=> (
              <div className="pt-[40px] w-[320px]">
              <img className="w-[100%]" src={product.image} alt="" />
              <div className="flex justify-between ">
                <h2 className="text-[18px] font-bold">{product.name}</h2>
                <p className="text-[20px] font-bold pl-[110px]">${product.price}</p>
              </div>
              <p>{product.desc}</p>
              <button className="border-2 border-black rounded-lg py-[5px] px-[125px] mt-[10px]">Add to cart</button>
            </div>
      
      ))}




    </div>
    <div className=" pt-[70px] pb-[80px] ">
      <div className="flex bg-black h-[400px]">
       <div className="mt-[40px] ml-[60px] text-white pt-[90px]">
         <p>Tagline</p>
         <h1 className="text-[40px] font-bold">Sales Up to 50%</h1>
       </div>
       <div className="ml-[700px]">
        <img src={anhbaner} alt="" />
       </div>
       </div>
    </div>
    <div className="container mx-auto w-[1400px]">   
    <h1 className="text-4xl font-bold mb-[10px]">Popular Products</h1>
   <div className="flex justify-between">
   <div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
    </div>
    <button className="border-2 border-black rounded-lg p-[4px]">View all</button>
   </div>
    <div className="pt-[40px] grid grid-cols-4 gap-4">
      <div className="pt-[40px]">
        <img className="w-[100%]" src={anh0} alt="" />
        <div className="flex  ">
          <h2 className="text-[18px] font-bold">Drawer Bedside Table</h2>
          <p className="text-[20px] font-bold pl-[110px]">$55</p>
        </div>
        <p>Cactus</p>
        <button className="border-2 border-black rounded-lg py-[5px] px-[125px] mt-[10px]">Add to cart</button>
      </div>
      <div className="pt-[40px]">
        <img className="w-[100%]" src={anh13} alt="" />
        <div className="flex  ">
          <h2 className="text-[18px] font-bold">Jute Pouffe White</h2>
          <p className="text-[20px] font-bold pl-[110px]">$55</p>
        </div>
        <p>Wall art</p>
        <button className="border-2 border-black rounded-lg py-[5px] px-[125px] mt-[10px]">Add to cart</button>
      </div>
      <div className="pt-[40px]">
        <img className="w-[100%]" src={anh6} alt="" />
        <div className="flex  ">
          <h2 className="text-[18px] font-bold">Jute Pouffe White</h2>
          <p className="text-[20px] font-bold pl-[110px]">$55</p>
        </div>
        <p>Bed table</p>
        <button className="border-2 border-black rounded-lg py-[5px] px-[125px] mt-[10px]">Add to cart</button>
      </div>
      <div className="pt-[40px]">
        <img className="w-[100%]" src={anh5} alt="" />
        <div className="flex  ">
          <h2 className="text-[18px] font-bold">Drawer Bedside Table</h2>
          <p className="text-[20px] font-bold pl-[110px]">$55</p>
        </div>
        <p>Cactus</p>
        <button className="border-2 border-black rounded-lg py-[5px] px-[125px] mt-[10px]">Add to cart</button>
      </div>
      <div className="pt-[40px]">
        <img className="w-[100%]" src={anh10} alt="" />
        <div className="flex  ">
          <h2 className="text-[18px] font-bold">Product name</h2>
          <p className="text-[20px] font-bold pl-[110px]">$55</p>
        </div>
        <p>Vase</p>
        <button className="border-2 border-black rounded-lg py-[5px] px-[125px] mt-[10px]">Add to cart</button>
      </div>
      <div className="pt-[40px]">
        <img className="w-[100%]" src={anh9} alt="" />
        <div className="flex  ">
          <h2 className="text-[18px] font-bold">Velvet Dining Chair</h2>
          <p className="text-[20px] font-bold pl-[110px]">$55</p>
        </div>
        <p>Armchair</p>
        <button className="border-2 border-black rounded-lg py-[5px] px-[125px] mt-[10px]">Add to cart</button>
      </div>
      <div className="pt-[40px]">
        <img className="w-[100%]" src={anh8} alt="" />
        <div className="flex  ">
          <h2 className="text-[18px] font-bold">Jute Pouffe Whiter</h2>
          <p className="text-[20px] font-bold pl-[110px]">$55</p>
        </div>
        <p>Ficus</p>
        <button className="border-2 border-black rounded-lg py-[5px] px-[125px] mt-[10px]">Add to cart</button>
      </div>
      <div className="pt-[40px]">
        <img className="w-[100%]" src={anh7} alt="" />
        <div className="flex  ">
          <h2 className="text-[18px] font-bold">Fabric Dining Chair</h2>
          <p className="text-[20px] font-bold pl-[110px]">$55</p>
        </div>
        <p>Wall art</p>
        <button className="border-2 border-black rounded-lg py-[5px] px-[125px] mt-[10px]">Add to cart</button>
      </div>
      </div>
    </div>
    </div>
    </div>
    </div>
  )
};
export default Productlist;

{
  /* <div className="item col-6 col-sm-4 col-md-3">
          <img src="https://img.muji.net/img/item/4550344275726_1260.jpg"/>
          <h3>Sản phẩm số 1</h3>
          <span>1000</span>
      </div> */
}