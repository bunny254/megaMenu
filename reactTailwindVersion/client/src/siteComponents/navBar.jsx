/* eslint-disable jsx-a11y/anchor-is-valid */
import { faCartShopping, faHeart, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const NavBar = () => {
  return (
    <div className="bg-white shadow w-screen h-20 px-8 py-4 flex items-center gap-6">
      <div className="w-2/12">
          <div className="logo">
              <a href="" target="_blank" rel="noopener noreferrer" className='text-2xl font-bold'>My Test</a>
          </div>
      </div>
      
      <div className="w-10/12 flex justify-between">
        {/* nav links - center */}
        <ul className="flex gap-10">
            <li>
                <a href="#" className='hover:text-orange-500'>Home</a>
            </li>
            <li>
                <a href="#" className='hover:text-orange-500'>New</a>
            </li>
            <li className='relative'>
              <a href="#" className='hover:text-orange-500'>Shop</a>

              <div className="absolute top-10 left-[-200px] px-8 py-4 bg-white border rounded-md drop-shadow-md flex flex-col gap-8 ">
                  <div className="flex gap-8">
                    <div className='w-40'>
                      <h4 className='text-purple-500'> Men's Fashion </h4>
                      <ul>
                        <li className='mb-2'>
                            <a href="#" className='hover:text-orange-400'>Product List</a>
                        </li>
                        <li className='mb-2'>
                            <a href="#" className='hover:text-orange-400'>Product List</a>
                        </li>
                        <li className='mb-2'>
                            <a href="#" className='hover:text-orange-400'>Product List</a>
                        </li>
                        <li className='mb-2'>
                            <a href="#" className='hover:text-orange-400'>Product List</a>
                        </li>
                      </ul>
                    </div>

                    <div className='w-40'>
                      <h4 className='text-purple-500'> Women's Fashion </h4>
                      <ul>
                        <li className='mb-2'>
                            <a href="#" className='hover:text-orange-400'>Product List</a>
                        </li>
                        <li className='mb-2'>
                            <a href="#" className='hover:text-orange-400'>Product List</a>
                        </li>
                        <li className='mb-2'>
                            <a href="#" className='hover:text-orange-400'>Product List</a>
                        </li>
                        <li className='mb-2'>
                            <a href="#" className='hover:text-orange-400'>Product List</a>
                        </li>
                      </ul>
                    </div>

                    <div className='w-40'>
                      <h4 className='text-purple-500'> Kid's Fashion </h4>
                      <ul>
                        <li className='mb-2'>
                            <a href="#" className='hover:text-orange-400'>Product List</a>
                        </li>
                        <li className='mb-2'>
                            <a href="#" className='hover:text-orange-400'>Product List</a>
                        </li>
                        <li className='mb-2'>
                            <a href="#" className='hover:text-orange-400'>Product List</a>
                        </li>
                        <li className='mb-2'>
                            <a href="#" className='hover:text-orange-400'>Product List</a>
                        </li>
                      </ul>
                    </div>

                    <div className="w-40">
                        <img src="./shop1.jpg" alt="shop banner"/>
                    </div>
                  </div>

                  <div className="flex gap-8">
                    <div className='w-40'>
                      <h4 className='text-purple-500'> Sneakers </h4>
                      <ul>
                        <li className='mb-2'>
                            <a href="#" className='hover:text-orange-400'>Product List</a>
                        </li>
                        <li className='mb-2'>
                            <a href="#" className='hover:text-orange-400'>Product List</a>
                        </li>
                        <li className='mb-2'>
                            <a href="#" className='hover:text-orange-400'>Product List</a>
                        </li>
                        <li className='mb-2'>
                            <a href="#" className='hover:text-orange-400'>Product List</a>
                        </li>
                      </ul>
                    </div>

                    <div className='w-40'>
                      <h4 className='text-purple-500'> Men's Fashion </h4>
                      <ul>
                        <li className='mb-2'>
                            <a href="#" className='hover:text-orange-400'>Product List</a>
                        </li>
                        <li className='mb-2'>
                            <a href="#" className='hover:text-orange-400'>Product List</a>
                        </li>
                        <li className='mb-2'>
                            <a href="#" className='hover:text-orange-400'>Product List</a>
                        </li>
                        <li className='mb-2'>
                            <a href="#" className='hover:text-orange-400'>Product List</a>
                        </li>
                      </ul>                      
                    </div>
                  </div>
              </div>
            </li>
            <li className="relative">
                <a href="#" className='hover:text-orange-500'>Blog</a>

                <div className="w-60 absolute top-10 px-8 py-4 bg-white border rounded-md drop-shadow-md hidden">
                    <ul>
                      <li className='mb-4'>
                          <a href="#" className='hover:text-orange-400'>Standard Layout</a>
                      </li>
                      <li className='mb-4'>
                          <a href="#" className='hover:text-orange-400'>Grid Layout</a>
                      </li>
                      <li className='mb-4'>
                          <a href="#" className='hover:text-orange-400'>Single Post Layout</a>
                      </li>
                    </ul>

                </div>
            </li>
            <li className="relative">
                <a href="#" className='hover:text-orange-500'>Pages</a>

                <div className="w-40 absolute top-10 px-8 py-4 bg-white border rounded-md drop-shadow-md hidden">
                    <ul>
                      <li className='mb-4'>
                          <a href="#" className='hover:text-orange-400'>Login</a>
                      </li>
                      <li className='mb-4'>
                          <a href="#" className='hover:text-orange-400'>Register</a>
                      </li>
                      <li className='mb-4'>
                          <a href="#" className='hover:text-orange-400'>Faq</a>
                      </li>
                      <li className='mb-4'>
                          <a href="#" className='hover:text-orange-400'>404 Page</a>
                      </li>
                    </ul>

                </div>
            </li>
            <li>
                <a href="#" className='hover:text-orange-500'>Contact</a>
            </li>
        </ul>

        <div className="flex gap-5">
            <a href="#">
                {/* <i className="fas fa-search"></i> */}
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </a>
            <a href="#">
                {/* <i className="far fa-heart"></i> */}
                <FontAwesomeIcon icon={faHeart}/>
            </a>
            <a href="#">
                {/* <i className="fas fa-shopping-cart"></i> */}
                <FontAwesomeIcon icon={faCartShopping}/>
            </a>
        </div>
      </div>
    </div>
  )
}

export default NavBar