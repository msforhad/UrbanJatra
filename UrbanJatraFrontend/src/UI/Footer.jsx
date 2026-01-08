
import { Link } from 'react-router'
import instagram1 from "../assets/instagram-1.jpg"
import instagram2 from "../assets/instagram-2.jpg"
import instagram3 from "../assets/instagram-3.jpg"
import instagram4 from "../assets/instagram-4.jpg"
import instagram5 from "../assets/instagram-5.jpg"
import instagram6 from "../assets/instagram-6.jpg"
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";




function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="mx-5 md:mx-10 lg:mx-20 2xl:mx-40 pt-10">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {/* contact info section */}
          <div className="flex flex-col justify-start gap-2">
            <p className="poppins color-primary text-base lg:text-md font-semibold">
              CONTACT INFO
            </p>
            <p className="roboto text-xs lg:text-base color-secondary flex gap-1.5 items-center">
              <CiLocationOn />
              Sylhet,Tilagor
            </p>
            <p className="roboto text-xs lg:text-base color-secondary flex gap-1.5 items-center">
              <MdOutlineEmail />
              sylhet@gmail.com
            </p>
            <p className="roboto text-xs lg:text-base color-secondary flex gap-1.5 items-center">
              <FiPhone />
              (+880)179234869
            </p>
          </div>

          {/* company section */}
          <div className="flex flex-col justify-start gap-2">
            <p className="poppins color-primary text-base lg:text-md font-semibold">
              COMPANY
            </p>
            <Link
              className="roboto text-xs lg:text-base color-secondary hover:text-orange-500 transition duration-300 ease-in-out"
              to="/"
            >
              Home
            </Link>
            <Link
              className="roboto text-xs lg:text-base color-secondary hover:text-orange-500 transition duration-300 ease-in-out"
              to="/about"
            >
              About Us
            </Link>
            <Link
              className="roboto text-xs lg:text-base color-secondary hover:text-orange-500 transition duration-300 ease-in-out"
              to="/"
            >
              Work With Us
            </Link>
            <Link
              className="roboto text-xs lg:text-base color-secondary hover:text-orange-500 transition duration-300 ease-in-out"
              to="/blog"
            >
              Our Blogs
            </Link>
            <Link
              className="roboto text-xs lg:text-base color-secondary hover:text-orange-500 transition duration-300 ease-in-out"
              to="/condition"
            >
              Trems & Condition
            </Link>
          </div>

          {/* useful link section */}
          <div className="flex flex-col justify-start gap-2">
            <p className="poppins color-primary text-base lg:text-md font-semibold">
              USEFUL LINK
            </p>
            <Link
              className="roboto text-xs lg:text-base color-secondary hover:text-orange-500 transition duration-300 ease-in-out"
              to="/help"
            >
              Help
            </Link>
            <Link
              className="roboto text-xs lg:text-base color-secondary hover:text-orange-500 transition duration-300 ease-in-out"
              to="/"
            >
              Track your order
            </Link>
            <Link
              className="roboto text-xs lg:text-base color-secondary hover:text-orange-500 transition duration-300 ease-in-out"
              to="/men"
            >
              Men
            </Link>
            <Link
              className="roboto text-xs lg:text-base color-secondary hover:text-orange-500 transition duration-300 ease-in-out"
              to="/women"
            >
              Women
            </Link>
            <Link
              className="roboto text-xs lg:text-base color-secondary hover:text-orange-500 transition duration-300 ease-in-out"
              to="/dresses"
            >
              Dresses
            </Link>
          </div>

          {/* INSTAGRAM section */}
          <div className="flex flex-col justify-start gap-2">
            <p className="poppins color-primary text-base lg:text-md font-semibold">
              INSTAGRAM
            </p>

            <div className="grid grid-cols-3 justify-start gap-2">
              <div className="flex flex-col gap-2">
                <img src={instagram1} alt="" />
                <img src={instagram2} alt="" />
              </div>

              <div className="flex flex-col gap-2">
                <img src={instagram3} alt="" />
                <img src={instagram4} alt="" />
              </div>

              <div className="flex flex-col gap-2">
                <img src={instagram5} alt="" />
                <img src={instagram6} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright section */}
      <div className="border-gray-100 border-t-1 py-2 flex justify-center">
        <p className="roboto text-xs color-secondary lg:text-sm">
          Copyright © 2025 by UrbanJatra.. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer