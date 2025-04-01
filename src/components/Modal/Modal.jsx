import React from 'react'

const Modal = ({text,setM,color}) => {
  return (
    <div className={`absolute inset-0 ${color?color:"bg-gray-400/20 backdrop-blur-[3px]"} text-black z-10 flex items-center justify-center`}>
     <h1 className='absolute w-sm h-[400px] p-5 rounded-3xl bg-white'>{text}</h1>
     <button className='absolute top-2 right-10  cursor-pointer' onClick={()=>setM(false)}> X </button>
    </div>
  )
}

export default Modal