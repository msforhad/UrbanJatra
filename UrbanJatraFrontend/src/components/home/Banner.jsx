import bannerImg from '../../assets/header.png'

function Banner() {
  return (
    <>
    <section className='bg-red-200 '>
      <div className='mx-5 md:mx-10 lg:mx-20 2xl:mx-40'>
        <div className='flex justify-between gap-10 pt-20 relative'>

          <div className='flex flex-col gap-2 md:gap-4 justify-center md:items-start items-center absolute md:relative bottom-1'>
            <p className='text-xs md:text-md lg:text-lg 2xl:text-xl md:text-red-500 text-white roboto'>Up To 20% Discount on</p>
            <p className='text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold poppins text-white md:text-black'>Girl's Fashion</p>
            <p className='text-xs md:text-sm lg:text-base 2xl:text-md text-white md:text-gray-500 roboto md:text-justify text-center px-15  md:px-0 md:mx-0'>Discover the latest trends and express your unique style with our Women's Fashion website. Explore a curated collection of clothing, accessories, and footwear that caters to every taste and occasion.
            </p>
            <button src="/shope" className='bg-orange-500 text-white px-3 py-1 rounded poppins text-sm md:text-md lg:text-lg  cursor-pointer'>Explore Now</button>
          </div>


          <div className=' '> 
            <img src={bannerImg} alt="" />
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Banner