import { Link } from 'react-router-dom'
import { /* IconUserFilled, */ IconBrandGoogleFilled } from '@tabler/icons-react'
import Logo from '../assets/Logo Joby.svg' 
import './content.css'
/* IMPORTACION DE COMPONENTES REUTILIZABLES */
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'

function Login() {
  return (
    <div className='login'>
        <div className="logo flex justify-center p-5 py-10">
            <img src={Logo} alt="logo" className='w-40'/>
        </div>
        <div className='bg-white login-content p-14'>
          <div className='pb-10'>  
            <h1 className='text-black uppercase text-4xl text-center pt-2 pb-3 '>Iniciar sesión</h1>
            <Link to="/signup" className='text-sm px-2'>¿No tienes cuenta? registrate aqui</Link>
          </div>
          <form action="" method="post" className='flex-column justify-center'>
            <div className='flex-column pb-10'>
              <Input label="Nombre" variant="login" type="text" />
              <Input label="Contraseña" variant="login" type="text" />
            </div>
            <div className='flex-column items-center'>
              <Button variant="login">Iniciar sesion</Button>
              <Button variant="google">Iniciar sesion con google <IconBrandGoogleFilled /></Button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default Login
