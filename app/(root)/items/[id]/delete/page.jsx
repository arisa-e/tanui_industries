'use client'
import { deleteProduct } from '@/app/api/deleteData';
import getSingleData from '@/app/api/getData';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';

const Page = () => {
  const [product, setProduct] = useState(null);
  const { id } =useParams()
  const router = useRouter()

  // gets data of a single object using its id 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const productData = await getSingleData(id);
        setProduct(productData);
      } catch (error) {
        console.error('Error getting data:', error);
      }
    };

    fetchData();
  }, [id]); 

  const handleDelete = async(id)=>{
    try{
      const deleted = await deleteProduct(id)
      if(deleted){
        console.log(`items with Id ${id} has been deleted successfully`)
      }else{
        console.log(`Item with ID ${id} not found.`);
      }
    }catch (error) {
      console.error('Error deleting item:', error);
    }
    router.push('/')
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body gap-4">
          <h2 className="card-title text-3xl">Product Details</h2>
          {product?(
            <div className='flex flex-col gap-4'>
              <p className='capitalize'>{product.name}</p>
              <p>Quantint: {product.quantity}</p>
              <p>Price: {product.price}</p>
              <div className="card-actions justify-between">
                <button className='btn btn-outline text-lg'>
                  <Link href='/'>Cancel</Link>
                </button>
                <button className="btn btn-error md:text-lg" onClick={()=>document.getElementById('my_modal_1').showModal()}>Delete</button>
                <dialog id="my_modal_1" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg">Alet!</h3>
                    <p className="py-4">Are you sure you want to delete this product</p>
                    <p className="text-neutral-400">Once deleted can not be retrived</p>

                    <div className="modal-action gap-10">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-outline btn-primary md:text-lg" >Close</button>
                        
                      </form>
                      <button className="btn btn-error md:text-lg" onClick={()=>handleDelete(id)} >Yes</button>
                    </div>
                  </div>
                </dialog>
              </div>
            </div>

          ):(
            <p>Loading ...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
