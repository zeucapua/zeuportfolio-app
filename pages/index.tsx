import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
const Home: NextPage = () => {
  return (
    <>
      <div className="flex flex-col gap-0 w-full min-w-screen h-full min-h-screen justify-center lg:justify-start lg:content-center bg-black">
        <p className="text-center text-[8rem] lg:text-[32rem] -mt-16 lg:mt-0 font-saotorpes text-white">ZEU</p>
        <div className="flex flex-row justify-center text-center text-xl -mt-8 lg:text-[5rem] lg:-mt-[8rem] font-comiccat text-white tracking-wide">
          <p className="text-[#44ADEE] transition-all hover:-rotate-12 duration-150">CODER</p>
          <p>*</p>
          <p className="text-[#E9498C] transition-all hover:rotate-12 duration-150">EDUCATOR</p>
          <p>*</p>
          <p className="text-[#FFF133] transition-all hover:-rotate-12 duration-150">ARTIST</p>
        </div>
        <p className="text-white text-center font-comiccat mt-10 hidden sm:block">( HOVER )</p>
      </div>
    </>
  )
}

export default Home
