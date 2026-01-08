import { Link } from 'react-router'
import image1 from '../../assets/category-1.jpg'
import image2 from '../../assets/category-2.jpg'
import image3 from '../../assets/category-3.jpg'
import image4 from '../../assets/category-4.jpg'
import { useEffect } from 'react'
function Categories() {

  const categories = [
    {name:"Accessories",path:"accessories",image:image1},
    {name:"Dress Collection",path:"dress",image:image2},
    {name:"Jewellery",path:"jewellery",image:image3},
    {name:"Cosmetics",path:"cosmetics",image:image4},
  ]


  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
    <>
      <section className="">
        <div className="mx-5 md:mx-10 lg:mx-20 2xl:mx-40 py-20">
          <div className="flex flex-wrap justify-center gap-10 md:gap-15 lg:gap-20">
            {categories.map((category) => (
              <Link
                className="justify-items-center"
                key={category.name}
                to={`/categories/${category.path}`}
              >
                <img
                  className="rounded-full w-35 md:w-40 2xl:w-45 p-1.5 bg-secondary drop-shadow-md"
                  src={category.image}
                />
                <p className="text-sm md:text-base lg:text-md 2xl:text-xl poppins color-primary mt-2 font-semibold">{category.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Categories