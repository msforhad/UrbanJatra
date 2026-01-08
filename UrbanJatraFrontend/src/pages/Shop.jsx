import { useEffect, useState } from 'react'
import CategoriesCart from '../components/shop/CategoriesCart'
import ShopPageFiltering from '../components/shop/ShopPageFiltering'
import productsData from '../data/products.json'

const filters = {
  categories :['all','accessories','dress','jewellery','cosmetics'],
  color:['all','black','red','gold','blue','silver','beige','green'],
  priceRange:[
    {label:'Under $50',min:0,max:50},
    {label:'$50-$100',min:50,max:100},
    {label:'$100-$200',min:100,max:200},
    {label:'$200 and above',min:200,max:Infinity},
  ]
}




function Shop() {

  const [products,setProducts]=useState(productsData)
  const [filterState,setFilterState]=useState({
    category:'all',
    color:'all',
    priceRange:''
  })

  const applyFilters=()=>{
    let filteredProducts = productsData;
    if(filterState.category && filterState.category!=='all'){
      filteredProducts = filteredProducts.filter(product=>product.category===filterState.category)
    }
    if(filterState.color && filterState.color!=='all'){
      filteredProducts = filteredProducts.filter(product=>product.color===filterState.color)
    }
    if(filterState.priceRange){
      const [minPrice,maxPrice]=filterState.priceRange.split('-').map(Number);
      filteredProducts = filteredProducts.filter(product=>product.price>=minPrice&&product.price<=maxPrice)
    }


    setProducts(filteredProducts);
  }
  useEffect(()=>{
    applyFilters()
  },[filterState])

  const clearFilter=()=>{
    setFilterState({
      category:'all',
      color:'all',
      priceRange:''
    })
  }


  return (
    <div className="bg-primary">
      <section className="bg-purple-100 py-20 ">
        <div className="">
          <h2 className="text-center text-2xl lg:text-4xl font-semibold poppins">
            Shop Page
          </h2>
          <p className="text-center text-sm lg:text-base roboto text-gray-500 px-20 lg:px-60 pt-3">
            {" "}
            Discover the Hottest Picks: Elevate Your Style with Our Curated
            Collection of Trending Women's Fashion Products.
          </p>
        </div>
      </section>

      <section className="mx-5 md:mx-10 lg:mx-20 2xl:mx-40 py-10">
        <div className="grid grid-cols-1 md:grid-cols-[10%85%] justify-between">
          <div>
            <ShopPageFiltering
              filters={filters}
              filterState={filterState}
              setFilterState={setFilterState}
              clearFilter={clearFilter}
            />
          </div>

          <div>
            <p className="roboto text-base lg:text-md 2xl:text-lg color-primary font-semibold">
              Showing 9 to 14 of {products.length} products
            </p>
            <CategoriesCart products={products} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Shop