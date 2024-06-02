import React from 'react'
import Image from 'next/image'
import RightIcon from './Icons/RightIcon'
import Play from './Icons/Play'

function HeroSection() {
  return (
    <div className='flex max-w-4xl lg:max-w-7xl'>
      {/* Text Section */}

      <div className=' flex flex-1 flex-col gap-4 py-10 relative'>
        {/* gardeint img */}

        <Image src={'/gradient1.svg'} height={480} width={345} className=' -top-10 absolute -z-10 left-[30%]'/>
        <Image src={'/Star.svg'} height={48} width={48} className=' -rotate-45 absolute -top-4 -left-28 '/>
        <Image src={'/Star.svg'} height={48} width={48} className=' -rotate-45 absolute top-[50%] left-[20%] '/>


        <h1 className=' font-bold text-6xl ' >Make The Best <br /> Financial Decisions</h1>
        <p className=' text-lg font-[500] text-slate-400 '>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
        </p>
        <div className='flex gap-4 font-[500]'>
          <button className='px-8 py-6 text-white bg-black rounded-md flex items-center gap-2 '>Get Started <RightIcon/> </button>
          <button className=' flex items-center gap-2'> <Play/> Watch Video</button>
        </div>
        <div>
          <Image src={'/heroImg2.svg'} width={570} height={360}/>
        </div>
      </div>

      {/* Image Section */}
      <div className='flex-1 relative hidden lg:block  ' >
        <Image src={'/HeroImg.svg'} fill className=' object-contain' />
      </div>
     </div>
  )
}

export default HeroSection