import Image from 'next/image'
import React from 'react'

function FeaturePoint({image,title,desc}) {
  return (
    <div>
    <div className=" flex gap-4">
      <Image
        src={image}
        width={24}
        height={24}
        className=" object-contain"
      />
      <h2 className=" font-[500]">{title}</h2>
    </div>
    <p className=" text-slate-500 ">
     {desc}
    </p>
    </div>
  )
}

export default FeaturePoint