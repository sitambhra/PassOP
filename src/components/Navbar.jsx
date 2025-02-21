import  { useState } from 'react'


const Navbar = () => {
  const[isMenuOpen, setIsMenuOpen]=useState(false);

const toggleMenu=()=>{
  setIsMenuOpen(!isMenuOpen)
}
  return (
    <nav className=" bg-slate-800 shadow-xl px-44 py-3.5 text-white  p-4 flex gap-12 justify-between items-center">
  <div className='font-bold text-2xl'>
    <span className='text-green-900'>&lt;</span>
    <span>Pass</span>
    <span className='text-green-900'>OP/&gt;</span>
  </div>
  <button className='lg:hidden text-white' onClick={toggleMenu}>
  <span className="text-2xl">&#9776;</span> 

  </button>
  <ul className={ ` flex gap-4  ${isMenuOpen ? 'flex-col absolute px-2 top-11 -right-0.5 bg-slate-800 ':'hidden'} lg:flex lg:flex-row` }>
    <li className='hover:underline  '><a href="#">Home</a></li>
    <li className='hover:underline '><a href="#">About</a></li>
    <li className=' hover:underline '><a href="#">Contact Us</a></li>
  </ul>
    </nav>
  )
}

export default Navbar
