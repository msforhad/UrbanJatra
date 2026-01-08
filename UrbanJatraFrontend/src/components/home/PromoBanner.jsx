import { TbTruckDelivery } from "react-icons/tb";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FcCustomerSupport } from "react-icons/fc";




function PromoBanner() {
  return (
    <>
    <section className='mx-5 md:mx-10 lg:mx-20 2xl:mx-40 py-20'>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-15 md:gap-3">
        <div className="flex flex-col items-center gap-2 px-5 md:px-10">
          <p className="text-5xl text-red-400"><TbTruckDelivery /></p>
          <p className="poppins text-md lg:text-xl color-primary">Free Delivery</p>
          <p className="roboto color-secondary text-sm lg:text-base text-center">Offers convenience and the ability to shop from anywhere, anytime.</p>
        </div>

        <div className="flex flex-col items-center gap-2 px-5 md:px-5 ">
          <p className="text-5xl text-red-400"><RiMoneyDollarCircleLine /></p>
          <p className="poppins text-md lg:text-xl color-primary text-center ">100% Money Back Guaranty</p>
          <p className="roboto color-secondary text-sm lg:text-base text-center">E-commerce have a review system where customers can share feedback.</p>
        </div>

        <div className="flex flex-col items-center gap-2 px-5 md:px-5">
          <p className="text-5xl text-red-400"><FcCustomerSupport /></p>
          <p className="poppins text-md lg:text-xl color-primary">Strong Support</p>
          <p className="roboto color-secondary text-sm lg:text-base text-center">Offer customer support services to assist customers with queries and issues.</p>
        </div>
      </div>
    </section>
    </>
  )
}

export default PromoBanner