import Image from 'next/image'
import benefity1 from "../assets/2-big.png";
import benefity2 from "../assets/3-big.png";
import benefity3 from "../assets/4-big.png";

//small

import benefity1Sm from "../assets/2.png";
import benefity2Sm from "../assets/3.png";
import benefity3Sm from "../assets/4.png";

export default function Benefity(){

  return(
    <div className="bg-white py-4 px-8 bg-opacity-50">
      <h3 className="text-2xl font-semibold mb-4 text-left">Benefits to become a member</h3>
      <div className='flex flex-col md:flex-row justify-around items-center mx-4 gap-4'>
        <div className='flex flex-row md:flex-col justify-center items-center text-center'>
          <Image src={benefity1} alt="benefity 1" className='sm:block hidden object-cover object-center h-52 w-52 rounded-full shadow-2xl m-2'/>
          <Image src={benefity1Sm} alt="benefity 1" className='block sm:hidden object-cover object-center h-52 w-52 rounded-full shadow-2xl m-2'/>
          <div className='w-52'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
        </div>
        <div className='flex flex-row md:flex-col justify-center items-center text-center'>
          <Image src={benefity2} alt="benefity 2" className='sm:block hidden object-cover object-center h-52 w-52 rounded-full shadow-2xl m-2'/>
          <Image src={benefity2Sm} alt="benefity 2" className='block sm:hidden object-cover object-center h-52 w-52 rounded-full shadow-2xl m-2'/>
          <div className='w-52'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
        </div>
        <div className='flex flex-row md:flex-col justify-center items-center text-center'>
          <Image src={benefity3} alt="benefity 3" className='sm:block hidden object-cover object-center h-52 w-52 rounded-full shadow-2xl m-2'/>
          <Image src={benefity3Sm} alt="benefity 3" className='block sm:hidden object-cover object-center h-52 w-52 rounded-full shadow-2xl m-2'/>
          <div className='w-52'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
      </div>
    </div>
  </div>

  )
}




