import products from '../../data/products.json'
import { useParams } from 'react-router-dom'
import Rating from './Rating';
import { addToCart } from '../../redux/features/cartSlice';
import { useDispatch } from 'react-redux';

function ProductsDetails() {

  const dispatch = useDispatch();
  const {id}=useParams()
  const product = products.find((p)=>p.id===parseInt(id));

  if(!product){
    return <div>product not found!</div>
  }

  const handleAddToCart = (product)=>{
      dispatch(addToCart(product))
  }

  
  return (
    <div className="bg-primary">
      <section className="bg-red-200">
        <div className="mx-5 md:mx-10 lg:mx-20 2xl:mx-40">
          <div className="flex flex-col items-center gap-3 py-20 mx-2 md:mx-[10%]">
            <p className="capitalize roboto text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-semibold">
              {product.category}
            </p>
            <p className="roboto text-sm md:text-base lg:text-md text-gray-500 text-center text-wrap ">
              Urban Jatra is more than just fashion — it's a journey through
              style, culture, and modern expression. Inspired by the rhythm of
              city life, we bring you thoughtfully curated clothing and
              accessories that blend comfort with contemporary design. Whether
              you're exploring the streets or heading to a casual hangout, Urban
              Jatra moves with you — bold, vibrant, and authentically yours.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-5 md:text-10 lg:mx-20 2xl:mx-40 py-10">
        <div className="flex flex-col md:flex-row md:justify-center gap-10 ">
          <div className="flex justify-center md:justify-end md:w-3/6">
            <img src={product.image} alt={product.name} className="rounded" />
          </div>

          <div className="flex flex-col gap-2 items-center md:items-start md:justify-center">
            <h1 className="text-lg md:text-xl lg:text-2xl poppins font-semibold mt-4 color-primary">
              {product.name}
            </h1>
            <Rating rating={product.rating} />
            <p className="text-sm md:text-base lg:text-md color-secondary roboto mt-2">
              {product.description}
            </p>
            <p className=" text-base md:text-md lg:text-lg roboto font-semibold text-green-600">
              ${product.price}
            </p>
            {product.oldPrice && (
              <p className="line-through color-secondary roboto text-sm md:text-base lg:text-md">
                ${product.oldPrice}
              </p>
            )}
            <p className="color-primary text-sm md:text-base lg:text-md roboto">
              Color: {product.color}
            </p>
            <button
              onClick={(e) =>{ 
                e.stopPropagation();
                handleAddToCart(product)}}
              className="bg-red-500 hover:bg-red-600 px-3 py-2 rounded text-white poppins font-semibold text-sm md:text-base lg:text-md"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductsDetails