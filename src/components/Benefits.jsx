import Image from 'next/image'
import benefity1 from "../assets/2-big.png";
import benefity2 from "../assets/3-big.png";
import benefity3 from "../assets/4-big.png";



export default function Benefity(){

  return(
    <div className="bg-white py-4 px-8 bg-opacity-50">
      <h3 className="text-2xl font-semibold mb-4 text-left">Benefits to become a member</h3>
        <div className="flex justify-around items-center mx-4">
  
  <div className='flex flex-col justify-center items-center text-center'>
    <div className="bg-gray-500 w-52 h-52 rounded-full">
      <Image src={benefity1} alt="" className='object-cover object-center h-52 w-52 rounded-full shadow-2xl'/>
    </div>
    <div className="">bla</div>
  </div>
  <div className='flex flex-col justify-center items-center text-center'>
    <div className="bg-gray-500 w-52 h-52 rounded-full">
      <Image src={benefity2} alt="" className='object-cover object-center h-52 w-52 rounded-full shadow-2xl '/>
    </div>
    <div className="">bla</div>
  </div>
  <div className='flex flex-col justify-center items-center text-center'>
    <div className="bg-gray-500 w-52 h-52 rounded-full">
      <Image src={benefity3} alt="" className='object-cover object-center h-52 w-52 hover:h-52 hover:w-54  rounded-full shadow-2xl'/>
    </div>
    <div className="">bla</div>
</div>
</div>
</div>

  )
}




