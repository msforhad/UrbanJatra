import React from 'react'

function ShopPageFiltering({filters,filterState,setFilterState,clearFilter}) {
  return (
    <>
    <div className=''>
      <p className='roboto mb-10 font-semibold text-base lg:text-md color-primary'>Filter</p>
      <div className='flex flex-col justify-center gap-1'>
        <p className='roboto border-b-1 border-gray-400 md:w-30 xl:w-40 text-base lg:text-md color-primary'>Category</p>
        {
          filters.categories.map((category)=>(
            <label className=' flex items-center gap-1 roboto text-xs lg:text-sm capitalize color-primary' key={category}>
              <input 
              type="radio"
              id='category'
              name='category'
              value={category}
              checked={filterState.category===category}
              onChange={(e)=>setFilterState({...filterState,category:e.target.value})}
               />
               <span>{category}</span>
            </label>
          ))
        }
      </div>

      <div className='flex flex-col justify-center gap-1 mt-4'>
        <p className='roboto border-b-1 border-gray-400 md:w-30 xl:w-40 text-base lg:text-md color-primary'>Color</p>
        {
          filters.color.map((color)=>(
            <label className=' flex items-center gap-1 roboto text-xs lg:text-sm capitalize color-primary' key={color}>
              <input 
              type="radio"
              id='color'
              name='color'
              value={color}
              checked={filterState.color===color}
              onChange={(e)=>setFilterState({...filterState,color:e.target.value})}
               />
               <span>{color}</span>
            </label>
          ))
        }
      </div>

      <div className='flex flex-col justify-center gap-1 mt-3'>
        <p className='roboto border-b-1 border-gray-400 md:w-30 xl:w-40 text-sm lg:text-base color-primary'>Price Range</p>
        {
          filters.priceRange.map((range)=>(
            <label className=' flex items-center gap-1 roboto capitalize text-xs lg:text-sm color-primary' key={range.label}>
              <input 
              type="radio"
              id='range'
              name='range'
              value={`${range.min}-${range.max}`}
              checked={filterState.priceRange===`${range.min}-${range.max}`}
              onChange={(e)=>setFilterState({...filterState,priceRange:e.target.value})}
               />
               <span>{range.label}</span>
            </label>
          ))
        }
      </div>

      <button onClick={clearFilter} className='bg-red-500 px-2 py-1.5 cursor-pointer rounded poppins text-xs lg:text-sm text-white mt-5 mb-10 md:mb-0'>Clear All Filters</button>
    </div>
    </>
  )
}

export default ShopPageFiltering