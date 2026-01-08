import Banner from '../components/home/Banner'
import BlogSection from '../components/home/BlogSection'
import Categories from '../components/home/Categories'
import DealsSection from '../components/home/DealsSection'
import HeroSection from '../components/home/HeroSection'
import PromoBanner from '../components/home/PromoBanner'
import TrendingProducts from '../components/home/TrendingProducts'

function Home() {
  return (
    <div className="bg-primary">
    <Banner/>
    <Categories/>
    <HeroSection/>
    <TrendingProducts/>
    <DealsSection/>
    <PromoBanner/>
    <BlogSection/>
    </div>
  )
}

export default Home