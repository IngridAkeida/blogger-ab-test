import Image from 'next/image'
import banner from "../assets/1-big.png";

export default function Banner() {
  return(
    <div className="flex justify-center items-center h-54 bg-indigo-900 py-95 px-8">
      <Image src={banner} alt="banner" className='sm:block hidden object-fill object-center w-auto'/>
      <div className='sm:hidden flex flex-col items-center justify-center h-96 bg-gradient-to-r to-yellow-300 from-fuchsia-500  px-8 font-bold shadow-2xl'>
      <h3 className='font-serif text-4xl '>Receive emails with tutorials, news, and tips to advance your career as a FrontEnd Developer</h3>
      <h3 className='font-mono text-xl text-fuchsia-500 bg-fuchsia-50 p-2 mt-2 italic'>Limited time registration!</h3>
      </div>
    </div>
  )
}



