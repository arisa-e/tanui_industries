import ProductForm from '@/components/product-form'
import React from 'react'

const page = () => {
  return (
    <>
    <section className='flex flex-col gap-8 h-screen items-center justify-center mx-auto max-w-4xl my-20 px-10'>
        <h3 className='text-4xl font-bold capitalize '>Create product</h3>
        <ProductForm type='Create'/>
    </section>
    </>
  )
}

export default page