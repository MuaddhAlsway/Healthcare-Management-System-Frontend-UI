import { assets } from '../assets/assets'

function Footer() {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">

       
        {/* left section */}
        <div>
            <img className='mb-5 w-40' src={assets.logo} alt="" />
            [ ] <p  className='w-full md:w-2/3 text-gray-600 loading-6'>Lorem ipsum dolor sit amet
                 consectetur adipisicing elit. Iure, provident! Lorem ipsum dolor sit, amet 
                 consectetur adipisicing elit. Blanditiis, modi!</p>

        </div>
        {/* Center section */}
        <div>
            <p className='text-xl font-medium mb-5'>Company</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>Home</li>
                <li>About</li>
                <li>Contact us</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        {/* Right Section */}
        <div >
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+91-82490-01710</li>
            <li>abhijitnanda8249@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        {/* Copyright Text */}
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024@ Prescripto - All Rights Reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer