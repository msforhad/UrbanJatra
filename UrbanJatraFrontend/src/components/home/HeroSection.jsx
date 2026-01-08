import { Link } from 'react-router'
import card1 from '../../assets/card-1.png'
import card2 from '../../assets/card-2.png'
import card3 from '../../assets/card-3.png'

const cards =[
  {
    id:1,
    image:card1,
    trend:'2024 Trend',
    title:'Womens Shirt'
  },
    {
    id:2,
    image:card2,
    trend:'2025 Trend',
    title:'Womens Dresses'
  },
    {
    id:3,
    image:card3,
    trend:'2023 Trend',
    title:'Womens Casuals'
  },
]

function HeroSection() {
  return (
    <section className='mx-5 md:mx-10 lg:mx-20 2xl:mx-40'>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 xl:gap-5 '>
        {
          cards.map((card)=>(
            <div key={card.id} className='relative'>
              <div>
                <img className='rounded drop-shadow-md' src={card.image} alt="" />
              </div>
              <div className='absolute top-0 w-full h-full flex flex-col justify-center items-center'>
                <p className='roboto text-xs md:text-sm lg:text-base 2xl:text-md text-red-500'>{card.trend}</p>
                <p className='poppins text-base md:text-md lg:text-xl 2xl:text-2xl font-semibold'>{card.title}</p>
                <Link className='poppins text-xs md:text-sm lg:text-base 2xl:text-md underline' to="/">Discover Me</Link>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default HeroSection