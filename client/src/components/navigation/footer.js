import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#00103F] text-white mt-12">
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row">
        <div className="basis-2/6">
          <img src="./images/logo-mini.png" alt="" srcSet="" className="w-10" />
          <h3 className="font-medium mt-4 mb-3">Call Us</h3>
          <div className="text-sm">
            <h4 className="mb-3">01684277944</h4>
            <h4 className="mb-3">imtiazemon625@gmail.com</h4>
            <h4 className="mb-3">9am-5pm Monday to Wednesday</h4>
            <h4 className="mb-3">Dhaka Bangladesh</h4>
            <h4 className="mb-3">Bashundhara Residential Area</h4>
          </div>
        </div>

        <div className="basis-1/6">
          <div className="p-4">
            <h3 className="mt-4 mb-3 font-medium">Links</h3>
            <ul className="list-none mt-4">
              <li>
                <a href="#">
                  <i className="fa-solid fa-chevron-right text-xs mr-3"></i>
                  Start Here
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-solid fa-chevron-right text-xs mr-3"></i>
                  Blogs
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-solid fa-chevron-right text-xs mr-3"></i>
                  About Us
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-solid fa-chevron-right text-xs mr-3"></i>
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-solid fa-chevron-right text-xs mr-3"></i>
                  Career
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-solid fa-chevron-right text-xs mr-3"></i>
                  Courses
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-solid fa-chevron-right text-xs mr-3"></i>
                  Demo Account
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="basis-1/6">
          <div className="p-4">
            <h3 className="mt-4 mb-3 font-medium">Information</h3>
            <ul className="list-none mt-4">
              <li>
                <a href="#">
                  <i className="fa-solid fa-chevron-right text-xs mr-3"></i>
                  Start Here
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-solid fa-chevron-right text-xs mr-3"></i>
                  Blogs
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-solid fa-chevron-right text-xs mr-3"></i>
                  About Us
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-solid fa-chevron-right text-xs mr-3"></i>
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-solid fa-chevron-right text-xs mr-3"></i>
                  Career
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-solid fa-chevron-right text-xs mr-3"></i>
                  Courses
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-solid fa-chevron-right text-xs mr-3"></i>
                  Demo Account
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="basis-2/6">
          <div className="p-4">
            <h3 className="mt-4 mb-3 font-medium">Sign Up For Our Newsletter</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              ex inventore culpa sunt? Neque sint aperiam dolore saepe
              voluptates ratione ex earum in impedit, atque suscipit, laborum
              excepturi nemo numquam?
            </p>
            <p className="mt-4 relative">
              <input type="email" placeholder="Your Email"
                className="w-full p-3 pl-5 bg-white text-gray-700 placeholder:text-gray-700 rounded-full" />
              <span className="absolute top-1 right-2 bg-red-600 px-4 p-2 rounded-full uppercase">
                Subscribe
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">&copy; 2022 All Rights Reserved</div>
      <div>
        <a href="#top" id="scroll-to-top"
          className="hidden bottom-1 shadow right-1 w-14 h-14 rounded-[50%] bg-red-600 trnasition hover:opacity-80 border group z-50">
          <i className="fa-solid fa-arrow-up pt-5 pl-5 text-white transition group-hover:-translate-y-2"></i>
        </a>
      </div>
    </div>
  </footer>
    );
};

export default Footer;