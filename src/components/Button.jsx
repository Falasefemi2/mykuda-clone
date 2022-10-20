import React from 'react'

const Button = ({buttonText, customClass}) => {
  return (
    <>
    <button className={`bg-[#40196d] font-bold leading-[1] flex items-center p-[15px] cursor-pointer rounded-[10px] h-10 text-[13px] ${customClass} max-w-[135px]`}>
        {buttonText}
    </button>
    </>
  )
}

export default Button