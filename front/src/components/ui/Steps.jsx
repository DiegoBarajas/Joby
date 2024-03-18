import { Link } from 'react-router-dom'
import Button from './Button'
import Input from './Input'

export function Step1() {
  return (
    <div className='p-7 bg-white'>
      <p className='font-normal text-gray-500 text-xs flex w-full justify-end'>1/4</p>
      <div className='p-6 bg-green-300 rounded-2xl mb-7'>
        <p className='text-white text-xl font-extrabold mb-2'>Género</p>
        <Input variantI="check" variantL="check" label="Masculino" type="checkbox" extraL="text-white"/>
        <Input variantI="check" variantL="check" label="Femenino" type="checkbox" extraL="text-white"/>
        <Input variantI="check" variantL="check" label="No binario" type="checkbox" extraL="text-white"/>
        <Input variantI="check" variantL="check" label="Prefiero no decir" type="checkbox" extraL="text-white"/>
      </div>
      <div className='p-6 bg-green-300 rounded-2xl'>
        <p className='text-white text-xl font-extrabold mb-2'>¿Cuentas con alguno de estos tipos de discapacidad?</p>
        <Input variantI="check" variantL="check" label="Física" type="checkbox" extraL="text-white"/>
        <Input variantI="check" variantL="check" label="Sensorial" type="checkbox" extraL="text-white"/>
        <Input variantI="check" variantL="check" label="Intelectual o de desarrollo" type="checkbox" extraL="text-white"/>
        <Input variantI="check" variantL="check" label="Aprendizaje" type="checkbox" extraL="text-white"/>
        <Input variantI="check" variantL="check" label="Psicosocial o mental" type="checkbox" extraL="text-white"/>
        <Input variantI="check" variantL="check" label="Crónica" type="checkbox" extraL="text-white"/>
        <Input variantI="check" variantL="check" label="Otra" type="checkbox" extraL="text-white" extraI="text-black mb-5"/>
        <Input variantI="base" label="¿Qué discapacidad?" type="text" extraL="text-white"/>
      </div>
      <div className='pt-5'>
        <Link to='/step2'><Button variant="btnLink">Siguiente</Button></Link>
        <Link to='/signup'><Button variant="btnLink">Atras</Button></Link>
      </div>
    </div>
  )
}

export function Step2() {
  return (
    <div className='p-7'>
      <p className='font-normal text-gray-500 text-xs flex w-full justify-end'>1/4</p>
      <div className='p-6 bg-green-300 rounded-2xl mb-7'>
        <p className='text-white text-xl font-extrabold mb-2'>Experiencia laboral</p>
        <Input variantI="base" variantL="" label="" type="text" extraL="text-white"/>
      </div>
      <div className='pt-5'>
        <Link to='/step3'><Button variant="btnLink">Siguiente</Button></Link>
        <Link to='/step1'><Button variant="btnLink">Atras</Button></Link>
      </div>
    </div>
  )
}

export function Step3() {
  return (
    <div className='flex-column m-auto step-transition'>
      <h1>STEP 3</h1>   
      <Input label="Foto de perfil" variant="input-base" type="document" />
      <div className='pt-5'>
        <Link to='/step4'><Button variant="btnLink">Siguiente</Button></Link>
        <Link to='/step2'><Button variant="btnLink">Atras</Button></Link>
      </div>
    </div>
  )
}

export function Step4() {
  return (
    <div className='flex-column m-auto step-transition'>
      <h1>STEP 3</h1>   
      <Input label="Descripcion" variant="input-base" />
      <div className='pt-5'>
        <Link to='/home'><Button variant="btnLink">Finalizar</Button></Link>
      </div>
    </div>
  )
}