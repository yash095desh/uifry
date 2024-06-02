import QuestionBox from "@/components/QuestionBox";
import Image from "next/image";

function QuestionSection() {
  return (
    <div className=" m-auto max-w-5xl mb-10  relative px-6">
    <Image src={'/Star.svg'} width={64} height={64} className=" object-contain top-[10%] right-[40%] absolute" />
    <div className=" pb-10">
      <h3 className=" uppercase text-lg text-[#FF5555] font-[500] tracking-widest ">
        faq
      </h3>
      <h1 className=" font-bold text-5xl">
        Frequently Asked <br /> Questions
      </h1>
    </div>

    <div className=" flex flex-col gap-2 ">
      <div className=" flex gap-2">
       <QuestionBox colour={true}/>
       <QuestionBox />
      </div>
      <div className=" flex gap-2">
       <QuestionBox />
       <QuestionBox colour={true}/>
      </div>
      <div className=" flex gap-2">
       <QuestionBox colour={true}/>
       <QuestionBox />
      </div>
    </div>
  </div>
  )
}

export default QuestionSection