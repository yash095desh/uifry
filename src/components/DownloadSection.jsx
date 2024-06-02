import Image from 'next/image'
import React from 'react'

function DownloadSection() {
  return (
    <div className=" flex justify-center py-20 px-6 relative max-w-7xl m-auto">
    <Image src={'gradient2.svg'} width={495} height={360} className=" absolute object-contain -z-10 -top-10  -left-10"/>
    <Image src={'Star.svg'} width={64} height={64} className=" absolute object-contain  top-0 right-5"/>
    <Image src={'/DownloadImg.svg'} width={1090} height={508} className=" object-contain"/>
  </div>
  )
}

export default DownloadSection