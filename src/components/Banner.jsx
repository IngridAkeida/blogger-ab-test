import Image from 'next/image'
import banner from "../assets/1-big.png";

export default function Banner() {
  return(
    <div className="flex justify-center items-center h-54 bg-indigo-900 y-95 px-8">
      <Image src={banner} alt="banner" className='object-fill object-center w-auto'/>
    </div>
  )
}



