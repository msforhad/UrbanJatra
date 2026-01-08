import { useState } from 'react'
import products from '../../data/products.json'
import CategoriesCart from '../shop/CategoriesCart'

function TrendingProducts() {
  const [visibleProducts,setVisibleProducts]=useState(8)
  const loadMoreProducts=()=>{
    setVisibleProducts(value =>value+4)
  }
  return (
    <>
    <section className="mx-5 md:mx-10 lg:mx-20 2xl:mx-40 my-20">
      <div className="flex flex-col">
        <div className='flex flex-col items-center gap-2'>
          <p className='text-2xl md:text-4xl lg:text-5xl 2xl:text-6xl poppins font-medium color-primary'>Trending Products</p>
          <p className='text-xs md:text-sm lg:text-base 2xl:text-md roboto text-center color-secondary mx-10 md:mx-30 2xl:mx-60'>Discover the Hottest Picks: Elevate Your Style with Our Curated Collection of Trending Women's Fashion Products.</p>
        </div>

        <CategoriesCart products={products.slice(0,visibleProducts)}/>
        <div className='mx-auto my-10'>
          {
            visibleProducts<products.length && (
              <button className='bg-orange-500 px-3 py-1.5 text-sm md:text-base lg:text-md 2xl:text-lg rounded poppins text-white cursor-pointer hover:bg-orange-700' onClick={loadMoreProducts}>Load More</button>
            )
          }
        </div>
      </div>
    </section>
    </>
  )
}

export default TrendingProducts