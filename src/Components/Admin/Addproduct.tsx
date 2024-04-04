import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IProduct } from '../../Interface/product';
import { addProduct, getAllProduct } from '../../service/productService';

type Props = {}

const Addproduct = (props: Props) => {
  const [name, setName] = useState<string>('')
  const [image, setImage] = useState<string>('')
  const [price, setPrice] = useState<number>(0)
  const [message, setMessage] = useState<string>('')
  const [desc, setDesc] = useState<string>('')
  const [Products, setProducts] = useState<IProduct[]>([])

  useEffect(() => {
    (async () => {
      const product: IProduct[] = await getAllProduct();
      setProducts(product);
    })();
  },[])

  const handleSubmit = async (e:any)=>{
    try {
      e.preventDefault()
      const product = await addProduct({name,image,price,desc})
      const newproducts = [...Products,product]
      setProducts(newproducts)
      toast.success("successful")
      setName('')
      setImage('')
      setPrice(0)
      setDesc('')

      }catch (error){
        console.log(error);
        
      }
    } 
  





  return (
    <>
      <div className="container mx-auto my-4 px-4 lg:px-20">
        <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
          <div className="flex">
            <h1 className="font-bold uppercase text-5xl">
              Thêm mới <br /> Product
            </h1>
          </div>
          <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
            <input
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Tên sản phẩm*"
              onChange={(e:any) =>{setName(e.target.value)}} 
              value={name}
            />
            <input
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="number"
              placeholder="Giá sản phẩm*"
              onChange={(e:any) =>{setPrice(e.target.value)}} 
              value={price}

            />
            <input
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Ảnh*"
              onChange={(e:any) =>{setImage(e.target.value)}} 
              value={image}

            />
          </div>
          <div className="my-4">
            <textarea
              placeholder="Mô tả*"
              className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              defaultValue={""}
              onChange={(e:any) =>{setDesc(e.target.value)}} 
              value={desc}

            />
          </div>
          <div className="my-2 w-1/2 lg:w-1/4">
            <button
              className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                focus:outline-none focus:shadow-outline"
                type='submit'
            >
              Submit
            </button>
          </div>
          </form>
          <ToastContainer/>
        </div>
      </div>




    </>
  )
  }

export default Addproduct