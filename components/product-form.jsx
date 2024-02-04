'use client'
import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import addData from '@/app/api/addData';
import { collection, onSnapshot, doc } from 'firebase/firestore';
import { db } from '@/lib/firebase/config';
import updateData from '@/app/api/updateData';

const initialValue = {
  name: '',
  quantity: '',
  price: '',
};

const ProductForm = ({ type }) => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState(initialValue);
  const [data, setData] = useState({});
  const router = useRouter();
  const { id } = useParams();

  // this only works when the update button is click and the form has an id 
  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const collectionRef = collection(db, 'products');
        const itemDocRef = doc(collectionRef, id);
  
        const unsubscribe = onSnapshot(itemDocRef, (docSnapshot) => {
          if (docSnapshot.exists()) {
            const fetchedData = { ...docSnapshot.data(), id: docSnapshot.id };
            setData(fetchedData);
            setForm(fetchedData);
          } else {
            // Handle the case where the document does not exist
            setData(null);
            setForm({ ...initialValue });
          }
        });
  
        return unsubscribe;
      }
    };
  
    fetchData();
  }, [id]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    // store all the data from the form 
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.name !== '' && form.quantity !== '' && form.price !== '') {
      const updatedData = { ...data, ...form };
      // when the button type is create 
      if (type === 'Create') {
        setLoading(true);
        addData(form);
      }
      // when the button type is update
      if (type === 'Update') {
        setLoading(true);
        try{
          await updateData(id, updatedData)
          console.log('Update operation completed successfully')
        }catch(error){
          console.log('Error updating data:', error)
        }
      }
    }
    setLoading(false);
    router.push('/');
  };
  

  return (
    <div className="">
      <form className="w-full flex flex-col gap-8" onSubmit={handleSubmit}>
        <input
           type="text"
           name="name"
           value={form.name || ""}
           onChange={handleChange}
           placeholder="Name"
           className="input input-bordered w-full"
         />
         <div className="flex md:flex-row flex-col w-full gap-6">
           <input
             type="number"
             name="quantity"
             value={form.quantity || ""}
             onChange={handleChange}
             placeholder="quantity"
             className="input input-bordered w-full "
           />
           <input
             type="number"
             name="price"
             value={form.price || ""}
             onChange={handleChange}
             placeholder="price"
             className="input input-bordered w-full"
           />
         </div>
         <button className="btn btn-primary" type="submit" disabled={loading}>
           {loading ? 'Submitting ...' : `${type} Product`}
         </button>
      </form>
    </div>
  );
};

export default ProductForm;
