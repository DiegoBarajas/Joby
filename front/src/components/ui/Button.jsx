import React from 'react'
import './ui.css'

const Button = ({children, variant, onClick, extra}) => {

    const base = 'btn'
    const variantStyles = {
        btnS: 'text-sm',
        btnM: 'text-xl',
        btnR: 'text-sm hidden lg:flex',
        btnLg: 'text-2xl',
        btnFull: 'w-full',
        btnLink: 'w-full font-extrabold text-white bg-slate-400',
        login: 'uppercase w-full text-white login-btn bg-violet-400',
        google: 'flex text-sm justify-center items-center gap-3 w-full text-white bg-green-300'
    }

    const style = `${base} ${variantStyles[variant]} ${extra}`

  return (
    <div>
      <button className={style} onClick={onClick}>
        {children}
      </button>
    </div>
  )
}

export default Button
