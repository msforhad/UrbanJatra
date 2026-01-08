import productsData from '../data/products.json'
import CategoriesCart from '../components/shop/CategoriesCart'
import { useState } from 'react'

function Search() {
  const [searchQuery,setSearchQuery]=useState()
  const [filteredProducts,setFilteredProducts]=useState(productsData)


  const handleSearch=()=>{
    let query = searchQuery.toLowerCase();
    const searchProducts = productsData.filter(product=>product.name.toLowerCase().includes(query)||product.description.toLowerCase().includes(query))
       setFilteredProducts(searchProducts)
  }
  return (
    <div className="bg-primary">

      <div className='bg-red-100'>
        <div className="mx-5 md:mx-10 lg:mx-20 2xl:mx-40 py-20">
          <section className="flex flex-col items-center gap-3 ">
            <h2 className="capitalize poppins text-2xl lg:text-3xl 2xl:text-4xl font-semibold">Search Products</h2>
            <p className="roboto text-xs md:text-sm lg:text-base 2xl:text-md text-gray-500 md:px-40 xl:px-70 text-center">
              {" "}
              Browse a diverse range of categories, from chic dresses to
              versatile accessories. Elevate your style today!
            </p>
          </section>
        </div>
      </div>

      <section className="mx-5 md:mx-10 lg:mx-20 2xl:mx-40">
        <div className="w-full my-12 flex items-center justify-center gap-1.5 ">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for products..."
            className="w-full md:w-2/3 p-[5px] md:p-[8px] border-1 rounded color-primary"
          />
          <button
            onClick={handleSearch}
            className="poppins md:w-auto py-[6px] md:py-[9px] px-3 md:px-5 bg-red-500 text-white 
            rounded"
          >
            Search
          </button>
        </div>

        <CategoriesCart products={filteredProducts}></CategoriesCart>
      </section>
    </div>
  );
}

export default Search