import React from 'react'

const Footer = () => {
  return (
       

  

<footer className="bg-white  shadow-sm dark:bg-gray-900 ">
    <div className="w-full  mx-auto p-4 ">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="#" className="flex items-center mb-3 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <div className='font-bold text-2xl'>
    <span className='text-green-900'>&lt;</span>
    <span>Pass</span>
    <span className='text-green-900'>OP/&gt;</span>
  </div> 
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr className="my-4 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-6" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#" className="hover:underline">PassOP™</a>. All Rights Reserved.</span>
    </div>
</footer>




    
  )
}

export default Footer
