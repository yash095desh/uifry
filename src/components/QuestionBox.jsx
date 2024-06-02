import React from 'react'

function QuestionBox({colour=false}) {
  return (
    <div className={`flex flex-col gap-2 p-6 rounded-md ${colour?'bg-[#FF5555] text-white':''}`}>
              <h1 className=" font-[500] text-2xl">The Best Financial Accounting App Ever!</h1>
              <p className={`${colour?'':'text-slate-500'}`}>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
    </div>
  )
}

export default QuestionBox