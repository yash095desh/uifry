import Image from "next/image";

function ReviewSection() {
  return (
    <div className=" flex flex-col gap-6 items-center mb-10">

    <div className="text-center" >
    <h3 className=" uppercase font-[500] tracking-widest">Testimonial</h3>
     <h1 className=" text-5xl font-bold">What Our Users <br /> Say About Us?</h1>
    </div>

    <div className="flex flex-col lg:flex-row justify-center items-center">
     <div className="flex-1 relative">
       <Image src={'/Star.svg'} width={48} height={48} className=" object-contain absolute -left-10 -rotate-45 bottom-10"/>
       <Image src={'/ReviewImg.svg'} width={660} height={650} className=" object-contain"/>
     </div>
     <div className="flex flex-1 flex-col gap-6 max-w-md">
       <h1 className=" text-2xl font-[500] ">The Best Financial Accounting App Ever!</h1>
       <p className=" text-slate-500">“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”</p>
       <Image src={'/Customers.svg'} height={40} width={195} className=" object-contain"/>
       <span className=" font-[500] text-lg">Nick Jones</span>
     </div>
    </div>
   </div>
  )
}

export default ReviewSection