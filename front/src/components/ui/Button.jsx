import React from 'react'
import './ui.css'

const Button = ({children, variant}) => {

    const base = 'px-3 py-2 flex justify-center text-center border rounded-lg border-black font-bold btn'
    const variantStyles = {
        btnS: 'text-sm',
        btnM: 'text-xl',
        btnR: 'text-sm hidden lg:flex'
    }

    const style = `${base} ${variantStyles[variant]}`

  return (
    <div>
      <button className={style}>
        {children}
      </button>
    </div>
  )
}

export default Button
