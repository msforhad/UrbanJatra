
import { Link } from 'react-router'
import { FaCartPlus } from "react-icons/fa";
import Rating from './Rating';
import { useParams } from 'react-router-dom'
import {useDispatch} from "react-redux"
import { addToCart } from '../../redux/features/cartSlice';


 function CategoriesCart({products}) {
  const {categoryName}= useParams()

  const dispatch = useDispatch();

  const handleAddToCart = (product)=>{
    dispatch(addToCart(product))
  }


  return (
    <div className='py-10'>
      <div className='grid grid-cols-1 md:grid-cols-4 2xl:grid-cols-5 items-center gap-15 md:gap-5'>
      {
        products.map((product,index)=>(
          <div key={index} className='flex flex-col items-center gap-4'>
            <div className='relative '>
              <Link to={`/categories/${categoryName}/${product.id}`}>
                <img className='max-h-96 md:h-52 object-cover w-full rounded hover:scale-105 transition-all duration-300 ease-in drop-shadow-md' src={product.image} alt="" />
              </Link>
              <button 
              className='absolute top-3 right-3 text-md rounded bg-red-500 p-1 text-white hover:bg-red-600'
              onClick={(e)=>{
                e.stopPropagation();
                handleAddToCart(product)
              }}
              >
                <FaCartPlus />
              </button>

            </div>
            <div className='flex flex-col items-center md:py-5'>
              <p className='roboto text-lg md:text-2xl font-semibold color-primary'>{product.name}</p>
              <p className='roboto text-xs lg:text-base color-secondary'>${product.price}&nbsp;&nbsp;{product.oldPrice? <s>{product?.oldPrice}</s>:null}</p>
              <Rating rating = {product.rating}></Rating>
            </div>
          </div>
        ))
      }
      </div>
      
    </div>
  )
}

export default CategoriesCart