'use client'
import React, { useEffect, useState } from 'react'
import Container from './shared/container'
import ProductTable from './product-table'
import Link from 'next/link'
import { collection, getDoc, onSnapshot, query } from 'firebase/firestore'
import { db } from '@/lib/firebase/config'

const Products = () => {
  const [ items, setProducts] = useState([])

  useEffect(() => {
    const collectionRef =  collection(db, 'products')
    const q = query(collectionRef)

    const unsubscribe = onSnapshot(q, (querySnapshot)=>{
      setProducts(querySnapshot.docs.map(doc=>({...doc.data(), id: doc.id })))
    })
  
    return unsubscribe
  }, [])
  

  return (
    <div className='my-10'>
        <Container>
            <div className="flex justify-between items-center">
              <div className='flex flex-col gap-8'>
                <h1 className='text-5xl font-bold'>Products</h1>
                <p className='text-neutral-400'>Current products available</p>
              </div>
              <button className='btn btn-outline btn-accent'>
                  <Link href='/items/create'>
                    Add Product
                  </Link>
                </button>
            </div>
            <ProductTable items={items}/>
        </Container>
    </div>
  )
}

export default Products