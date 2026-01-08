import blogs from '../../data/blogs.json'


function BlogSection() {
  return (
    <>
    <section className='mx-5 md:mx-10 lg:mx-20 2xl:mx-40 py-20'>
      <div className='flex flex-col items-center gap-10'>
        <div className='flex flex-col items-center gap-2 text-center'>
          <p className='text-2xl 2xl:text-4xl poppins font-semibold color-primary'>Latest From Blog</p>
          <p className='text-sm md:text-base lg:text-md 2xl:text-lg color-secondary'>Elevate your wardrobe with our freshest style tips, trends, and inspiration on our blog.</p>
        </div>

        <div className='mt-5 grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-8'>
          {
            blogs.map((blog)=>(
            <div key={blog.id} className='drop-shadow-xl rounded-md bg-secondary hover:scale-105 transition-all duration-300'>
              <div><img className='rounded-t-md' src={blog.imageUrl} alt="" /></div>
              <div className='flex flex-col items-center py-5 gap-1.5 px-2'>
                <p className='text-sm md:text-base lg:text-md 2xl:text-lg font-semibold poppins text-red-500'>{blog.subtitle}</p>
                <p className='text-xs md:text-sm lg:text-base 2xl:text-md roboto color-primary'>{blog.title}</p>
                <p className='text-xs lg:text-sm roboto color-secondary'>{blog.date}</p>
              </div>
            </div>

            ))
          }

        </div>
      </div>
    </section>
    </>
  )
}

export default BlogSection