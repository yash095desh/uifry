import Image from "next/image";

function Footer() {
  return (
    <div className=" flex flex-col gap-6 max-w-5xl m-auto justify-between px-6 font-[500] text-[16px]">
        <div className="flex flex-col lg:flex-row gap-6 mb-10">
          <div className=" flex flex-row lg:flex-col  gap-4 items-center">
            <Image src={'logo.svg'} width={117} height={35} className=" object-contain"/>
            <div>Help@Frybix.Com</div>
            <div>+1 234 456 678 89</div>
          </div>
          <div className=" flex justify-evenly w-full gap-4 ">
            <div className=" flex flex-col">
              <h1 className=" text-xl lg:text-3xl">Links</h1>
              <p>Home</p>
              <p>About Us</p>
              <p>Bookings</p>
              <p>Blog</p>
            </div>
            <div className=" flex flex-col gap-4">
              <h1 className="text-xl lg:text-3xl">Legal</h1>
              <p>Terms Of Use</p>
              <p>Private Policy</p>
              <p>Cookie Policy</p>
            </div>
            <div className=" flex flex-col gap-4">
              <h1 className="text-xl lg:text-3xl">Product</h1>
              <p>Take Tour</p>
              <p>Live Chat</p>
              <p>Reviews</p>
            </div>
            <div className=" flex flex-col gap-4">
              <h1 className="text-xl lg:text-3xl">NewsLetter</h1>
              <p>Stay Up To Date</p>
              <form action="">
                <input type="text" placeholder="Your Email" className=" outline-none rounded-md px-6 py-4" />
                <button className=" bg-black text-white px-6 py-4">Subscribe</button>
              </form>
              
            </div>
          </div>
        </div>
      <div className="mb-10">
      <div className=" flex relative w-full h-4 ">
        <Image src={'/Border.svg'} fill className=" object-contain" />
        </div>
        <p className=" text-center">Copyright 2022 uifry.com all rights reserved</p>
      </div>
      </div>
  )
}

export default Footer