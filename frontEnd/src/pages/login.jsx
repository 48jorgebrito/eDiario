import './login.css'
import { useForm } from 'react-hook-form'
import { Api, CreateLogin } from '../services.js/api'


export default function Login() {

    const {register, handleSubmit, formState: {errors}} = useForm()
    
    const onSubmit = async (data) => {
       try{
        const email = data.email
        const password = data.password
        const response =  await CreateLogin( email, password)
        const token = response.data.token
        console.log(token)
       }catch(error){
        alert(error.response.data.message)
        console.log(error.response.data.message)
       }
      
    
    }

    return(
    <div className='login-container'>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor='email'>E-mail</label>
                <input type='text' placeholder='e-mail' name='email' id='login' {...register('email')}/>        

            </div>
            <div>
                <label htmlFor='password'>Senha</label>
                <input type='text' placeholder='password' name='password' id='password' {...register('password')}/>        

            </div>
            
            <button type='submit'>Entrar</button>
        </form>
    </div>
)
}