import { Link, NavLink } from 'react-router'
import { IoIosSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineModeNight } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { cartBtn, menuBtn, toggleMode } from '../redux/features/theme';
import { CiMenuBurger } from "react-icons/ci";
import { CiMenuFries } from "react-icons/ci";
import { ImCross } from "react-icons/im";
import { MdDeleteForever } from "react-icons/md";
import { removeFromCart, updateQuantity } from '../redux/features/cartSlice';






function Navbar() {
  const products = useSelector((state)=>state.cart.products)

  const {totalPrice,tax,grandTotal } = useSelector((store) => store.cart);

  const dispatch = useDispatch();

  const mode = useSelector((state)=>state.theme.mode)

  const menu = useSelector((state)=>state.theme.menu)

  const cart = useSelector((state)=>state.theme.cart)

  const handleQuantity=(type,id)=>{
    const payload = {type,id}
    dispatch(updateQuantity(payload))
  }

  const handleRemove=(e,id)=>{
    e.preventDefault();
    dispatch(removeFromCart({id}));
  }


  return (
    <>
      <nav className=" sticky top-0 z-30 bg-secondary">
        <div className="mx-5 md:mx-10 lg:mx-20 2xl:mx-40 flex justify-between items-center py-2 md:py-5">
          {/* navbar first section */}
          <div className="hidden md:block poppins md:text-lg lg:text-xl font-semibold color-primary">
            <ul className="flex gap-10">
              {["Home", "Shop", "page", "Contact"].map((nav, index) => (
                <li key={index}>
                  <NavLink
                    to={nav === "Home" ? "/" : `/${nav}`}
                    className={({ isActive }) =>
                      `${
                        isActive ? "text-orange-500" : ""
                      } hover:text-orange-500 transition duration-300 ease-in-out`
                    }
                  >
                    {nav}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* navbar middle section */}
          <div>
            <p className="stencil cursor-pointer  text-lg md:text-xl xl:text-2xl color-primary">
              <Link to="/">
                UrbanJatra<span className="text-orange-500">.</span>
              </Link>
            </p>
          </div>

          {/* navbar end section */}
          <div>
            <div className="flex justify-end gap-3  lg:gap-8 items-center">
              <Link
                to="/search"
                className="cursor-pointer color-primary text-lg md:text-xl xl:text-2xl"
              >
                <IoIosSearch />
              </Link>

              <Link
                onClick={() => dispatch(cartBtn())}
                className="cursor-pointer color-primary text-lg md:text-xl xl:text-2xl"
              >
                <FaShoppingCart className="inline-block" />
                {products.length ? (
                  <sup className="bg-red-500 rounded-full  text-white flex-row px-0.5 justify-center items-center text-xs xl:text-base">
                    {products.length}
                  </sup>
                ) : (
                  ""
                )}
              </Link>

              <Link
                to="/"
                className="cursor-pointer color-primary text-lg md:text-xl xl:text-2xl"
              >
                <CgProfile />
              </Link>

              <div className=" color-primary bg-primary rounded-full p-1">
                <Link>
                  {mode === "light" ? (
                    <MdOutlineLightMode
                      className={`text-lg md:text-xl xl:text-2xl bg-secondary rounded-full p-1 cursor-pointer `}
                      onClick={() => dispatch(toggleMode())}
                    />
                  ) : (
                    <MdOutlineModeNight
                      className="text-lg md:text-xl xl:text-2xl bg-secondary rounded-full p-1 cursor-pointer"
                      onClick={() => dispatch(toggleMode())}
                    />
                  )}
                </Link>
              </div>

              <div className={`z-30  md:hidden color-primary cursor-pointer`}>
                <Link>
                  {menu === "open-menu" ? (
                    <CiMenuBurger
                      onClick={() => dispatch(menuBtn())}
                      className="text-xl"
                    />
                  ) : (
                    <CiMenuFries
                      onClick={() => dispatch(menuBtn())}
                      className="text-xl"
                    />
                  )}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* menu bar */}

        <div
          className={`absolute bg-primary w-2/3 top-0  h-screen  ${
            menu === "open-menu" ? "menu-off" : "menu-on"
          }`}
        >
          <ul className="flex flex-col items-center  mt-70 gap-5 poppins color-primary md:text-lg lg:text-xl">
            <li className="stencil cursor-pointer  text-lg md:text-xl xl:text-2xl color-primary border-b w-full text-center">
              <Link>
                UrbanJatra<span className="text-orange-500">.</span>
              </Link>
            </li>

            {["Home", "Shop", "Page", "Contact"].map((nav, index) => (
              <li key={index} className="w-full flex font-semibold">
                <NavLink
                  to={nav === "Home" ? "/" : `/${nav}`}
                  onClick={() => dispatch(menuBtn())}
                  className={({ isActive }) =>
                    `${
                      isActive ? "bg-orange-500 text-white" : ""
                    } w-full text-center py-2`
                  }
                >
                  {nav}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* cart section */}

        <div
          className={`z-40 flex flex-col justify-between absolute bg-secondary w-2/3 md:w-2/5 top-0  h-screen  ${
            cart === "open-cart" ? "cart-off" : "cart-on"
          }`}
        >
          <div className="h-10/12">
            <div className="flex justify-between bg-gray-400 items-center px-3 py-3">
              <p className="flex gap-2 items-center ">
                <FaShoppingCart />
                <span className="text-xs lg:text-sm xl:text-base font-semibold poppins">
                  Cart ({products.length})
                </span>
              </p>

              <p className='cursor-pointer'>
                <ImCross
                  className="text-sm lg:text-base"
                  onClick={() => dispatch(cartBtn())}
                />
              </p>
            </div>

            <div className="flex flex-col items-start p-2 h-11/12 overflow-y-auto">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="flex border-b-1 border-primary gap-2  items-center justify-between w-full py-2"
                >
                  <img
                    className="h-10 lg:h-15 2xl:h-20"
                    src={product.image}
                    alt=""
                  />

                  <div className="flex flex-col items-start w-full poppins gap-1">
                    <p className=" font-semibold color-primary text-xs md:text-sm lg:text-base 2xl:text-md">
                      {product.description}
                    </p>

                    <div className="flex gap-5 items-center pt-1">
                      <p className="text-red-500 text-xs md:text-sm lg:text-base 2xl:text-md">
                        ${product.price}
                      </p>

                      <div className="flex border border-secondary justify-center items-center">
                        <button
                          onClick={() =>
                            handleQuantity("increment", product.id)
                          }
                          className="px-1.5 border-r border-secondary text-sm lg:text-base 2xl:text-md font-semibold bg-primary cursor-pointer color-primary"
                        >
                          +
                        </button>
                        <p className="px-2 text-xs md:text-sm lg:text-base 2xl:text-md font-semibold color-primary">
                          {product.quantity}
                        </p>
                        <button
                          onClick={() =>
                            handleQuantity("decrement", product.id)
                          }
                          className="px-1.5 border-l border-secondary text-sm lg:text-base 2xl:text-md font-semibold bg-primary cursor-pointer color-primary "
                        >
                          -
                        </button>
                      </div>
                    </div>
                  </div>

                  <p
                    onClick={(e) => handleRemove(e,product.id)}
                    className="text-2xl md:text-3xl lg:text-4xl 2xl:text-4xl cursor-pointer flex flex-col items-end text-red-500"
                  >
                    <MdDeleteForever />
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center items-center border-t-1 border-primary mb-1.5 mx-1.5 ">
            <p className="color-primary pt-1.5 text-sm poppins color-primary flex justify-evenly w-full">
              <span>Total Price($)</span>
              <span>{totalPrice.toFixed(2)}</span>
            </p>

            <p className="color-primary text-sm poppins color-primary flex justify-evenly w-full">
              <span>Total Tax($)</span>
              <span>+{tax.toFixed(2)}</span>
            </p>

            <p className="color-primary py-2 text-sm font-semibold poppins color-primary flex justify-evenly w-full">
              <span>Sub Total($)</span>
              <span>{grandTotal.toFixed(2)}</span>
            </p>

            <button className=" bg-orange-500 text-white font-semibold poppins text-xs w-full py-1.5">
              View Cart
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar