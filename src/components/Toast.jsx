import React from 'react'
import { toast } from 'react-toastify'
const Toast = () => {
    const chiqar = (password)=>{
        if(password == "1234"){
            toast.success("Siz ro'yhatdan o'tingiz")
        } else{
            toast.warn("Bunday foydalanuchi yuq")
        }
    }

  return (
    <div>
        <button onClick={()=>chiqar("123")}>Send Email</button>
    </div>
  )
}

export default Toast