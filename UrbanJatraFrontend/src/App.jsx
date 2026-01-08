
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './UI/Navbar.jsx'
import Footer from './UI/Footer.jsx'
import Home from './pages/Home.jsx'
import BlogSection from './components/home/BlogSection.jsx'
import Search from './pages/Search.jsx'
import Shop from './pages/Shop.jsx'
import Contact from './pages/Contact.jsx'
import Page from './pages/Page.jsx'
import CategoriesPage from './components/categories/CategoriesPage.jsx'
import ProductsDetails from './components/shop/ProductsDetails.jsx'
import { useSelector } from 'react-redux'
import Error from './pages/Error.jsx'

function App() {

  const mode = useSelector((state)=>state.theme.mode)
  console.log(mode)

  return (
    <div
      className={`${
        mode === "light" ? "light-mode" : "dark-mode"
      }`}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/page" element={<Page />} />
        <Route path="/categories/:categoryName" element={<CategoriesPage />} />
        <Route
          path="/categories/:categoryName/:id"
          element={<ProductsDetails />}
        />
        <Route path="/blog" element={<BlogSection />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App
