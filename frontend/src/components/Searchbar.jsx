import React from 'react'
import { FiSearch } from "react-icons/fi";
import { IoAddCircleSharp } from "react-icons/io5";
const Searchbar = ({ onOpen }) => {
  // console.log(setIsOpen)
  return (
    <div>
        <div className='flex gap-3 items-center'>
            <FiSearch className='absolute text-3xl text-white ml-1' />
            <input type="text" placeholder='Search Contact '
            className=' pl-9  px-2 py-2 rounded-xl flex-grow bg-transparent border border-white text-white'
            />
            <IoAddCircleSharp
             onClick={() => onOpen()}
             className='text-5xl cursor-pointer text-white' />
        </div>
    </div>
  )
}

export default Searchbar