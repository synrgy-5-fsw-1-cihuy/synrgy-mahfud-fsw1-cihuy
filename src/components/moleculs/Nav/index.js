import React from 'react'
import { useState } from 'react'
import { Banner } from '../../organism'
import { Link, NavLink, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useEffect } from 'react'

const Nav = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    const handleResize = () => {
      if(window.innerWidth > 768){
        setIsOpen(false)
      }
    }
    useEffect(() => {
      window.addEventListener("resize", handleResize)
    }, [])
    
    const { navList } = props
    const { id } = useParams()
    const activeLink = 'flex flex-col text-blue-600 dark:text-white dark:bg-gray-800 px-4 mt-2 bg-gray-50 w-full rounded-lg py-2 font-semibold'
    const normalLink = 'flex flex-col gap-4 px-4 mt-4 hover:bg-gray-100 dark:hover:bg-gray-800 py-2 rounded-lg'
    return (
        <>
            <div className='flex justify-center dark:bg-gray-700'>
                <div className='flex flex-col lg:flex-row w-11/12 justify-between'>
                    <div className='flex justify-between items-center px-4 py-4 lg:py-4 border-b border-black-100 lg:border-b-0'>
                        <div className='lg:px-20'>
                            <Link to="/" className='uppercase font-semibold flex flex-row items-center'>
                                <img src={require(`../../../assets/icons/car-roof-box.png`)} alt="" className="mt-2 w-16 flex" />
                                <p className='font-bold mt-2 text-gray-700 hover:underline hover:text-gray-700 antialiased dark:text-white'>patarebenezer</p>
                            </Link>
                        </div>
                        <div>
                            <button 
                            onClick={() => setIsOpen(!isOpen)} className='focus:outline-none text-gray-800 block lg:hidden'>
                                <svg className='w-7 h-7 dark:text-white' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    {/* Path untuk icon hamburger */}
                                    <path className={!isOpen ? 'block' : 'hidden'} strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />

                                    {/* Path untuk icon X */}
                                    <path className={isOpen ? 'block' : 'hidden'} strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className={`${isOpen ? 'block' : 'hidden'} lg:flex lg:flex-row justify-between lg:py-0`}>
                        <motion.div 
                        className={`${isOpen ? 'w-8/12 bg-white dark:bg-blue-900  float-right h-screen fixed z-50 top-0 bottom-0 right-0' : ''} flex flex-col lg:flex-row`}>
                            <div className='flex flex-row-reverse justify-between items-baseline px-4 py-4'>
                                <button onClick={() => setIsOpen(!isOpen)} className='focus:outline-none text-gray-800 block lg:hidden'>
                                    <svg className='w-7 h-7 mr-5 mt-7 dark:text-white' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        {/* Path untuk icon hamburger */}
                                        <path className={!isOpen ? 'block' : 'hidden'} strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />

                                        {/* Path untuk icon X */}
                                        <path className={isOpen ? 'block' : 'hidden'} strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                                <div className='lg:flex dark:text-white lg:gap-5 lg:py-6 items-center lg:text-gray-500 lg:px-0 xl:px-28 w-full'>
                                    <Link to="/" className={`${isOpen ? 'uppercase dark:text-white hover:underline block' : 'hidden'} font-bold px-4 py-3 lg:py-4 block text-slate-500 hover:text-black `}>
                                        ebenezer
                                    </Link>
                                    {navList.map((item) => (
                                        <NavLink to={item.href} key={item.id} className={isOpen ? ({ isActive }) => isActive ? activeLink : normalLink : 'lg:hover:text-black dark:hover:text-gray-300==================== hover:underline '}>
                                            <motion.p>
                                            {item.name}
                                            </motion.p>
                                        </NavLink>
                                    ))}
                                </div>
                            </div>

                        </motion.div>
                    </div>
                </div>
            </div>
            {id === undefined ? (<Banner />) : ''}

        </>
    )
}

export default Nav