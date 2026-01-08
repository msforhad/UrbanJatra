import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import products from '../../data/products.json'
import CategoriesCart from '../shop/CategoriesCart';

function CategoriesPage() {
  const {categoryName}=useParams();
  const [filterProducts,setFilterProducts]=useState([]);
  useEffect(()=>{
    const filtered = products.filter((product)=>product.category=== categoryName.toLowerCase());
    setFilterProducts(filtered)
  },[categoryName])
  
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
    <>
      <section className='bg-gray-200'>
        <div className='container mx-auto'>
          <div className='flex flex-col items-center gap-3 py-20 mx-2 md:mx-[30%]'>
            <p className='capitalize roboto-600 text-2xl'>{categoryName}</p>
            <p className='roboto-400 text-md text-gray-500 text-center text-wrap '>Browse a diverse range of categories, from chic dresses to versatile accessories.Elevate your style today!</p>
          </div>
        </div>
      </section>
    <CategoriesCart products={filterProducts}></CategoriesCart>
    </>
  )
}

export default CategoriesPage