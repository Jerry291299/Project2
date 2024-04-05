import React, { useEffect } from 'react'

import { IProduct } from '../../Interface/product'
import { toast } from 'react-toastify'
import { DeleteProduct, UpdateProduct, getAllProduct } from '../../service/productService'
import { log } from 'console'

type Props = {
  products: IProduct[],
  setProduct: (data: IProduct[]) => void
}

const Productslist = ({ products, setProduct }: Props) => {

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllProduct();
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [setProduct]);


  const delProduct = async (id: string) => {
    let mess = window.confirm('bạn chắc chưa?')
    if (mess) {
      try {
        await DeleteProduct(id)
        const newproduct = products.filter((product: IProduct) => product.id !== id)
        setProduct(newproduct)
        toast.warning("xóa thành công")
      } catch (error) {
        console.log(error);

      }
    }
  }


  return (
    <>
      <div className="container mx-auto w-[1200px]">
        <div className="row">
          <div className="container ">
            <h1 className="text-4xl font-bold mb-[10px]">Danh sách sản phẩm</h1>
            <div className="pt-[40px] grid grid-cols-4 gap-4">
              {products.map((product: IProduct, index: number) => (
                <div className="pt-[40px] w-[300px]">
                  <img className="w-[100%]" src={product.image} alt="" />
                  <div className="flex justify-between text-[30px]">
                    <h2 className=" font-bold">{product.name}</h2>
                    <p className=" font-bold ">${product.price}</p>
                  </div>
                  <div className='flex justify-between'>
                  <a href={`/dashboard/list/edit/${product.id}`} className="border-2 border-black rounded-lg py-[5px] px-[25px] mt-[10px]">Cập nhật</a>
                  <button onClick={()=>{delProduct(product.id)}} className="border-2 border-black rounded-lg py-[5px] px-[25px] mt-[10px]">Xóa</button>
                  </div>
                </div>
              ))}



            </div>
          </div>

        </div>
      </div>


    </>
  )
}

export default Productslist