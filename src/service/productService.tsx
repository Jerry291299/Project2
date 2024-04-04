import { error } from "console";
import { axiosservice } from "../Components/config/axiosconf";
import { IProductLite } from "../Interface/product";

export const getAllProduct = async () => {
  try {
    const { data } = await axiosservice.get('products')
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export const getProductByID = async(id:string) =>{
  try {
    const {data} = await axiosservice.get(`/products/${id}`)
    return data
  } catch (error){
    console.log(error);
    
  }
}

export const addProduct = async(product:IProductLite)=>{
  try {
    const {data} = await axiosservice.post(`/products`, product);
    return data
  } catch (error){
    console.log(error);
    
  }
}

export const UpdateProduct = async(pid:string, product:IProductLite)=>{
  try{
    const {data} = await axiosservice.put(`/products/${pid}`,product)
    return data
  } catch (error) {
   console.log(error);
   
  }
}

export const DeleteProduct = async(pid:string)=> {
  try{
    const{data} = await axiosservice.delete(`/products/${pid}`)
    return data
  } catch (error){
    console.log(error);
    
  }
}