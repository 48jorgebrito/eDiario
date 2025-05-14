import './login.css'
import { useForm } from 'react-hook-form'
import {  CreateLogin } from '../../services.js/api'
import { useAuth } from '../../context/authContext'
import ImgLogin from '../../assets/images/imgLogin.png'
export default function Login() {

    const {login} = useAuth()
    const {register, handleSubmit, formState: {errors}} = useForm()
    
    const onSubmit = async (data) => {
       try{
        const email = data.email
        const password = data.password
        const response =  await CreateLogin( email, password)
        const token = response.data.token
        const user = response.data.user
        
        login(token, user)
        
        
       
    
    }catch(error){
        alert(error.response.data.message)
        
       }
      
    
    }

    return(
    <div className='login-container'>
        <form onSubmit={handleSubmit(onSubmit)}> 
            <div className='imgLogin'>
                <img src={ImgLogin}/>
            </div>
            <h1 className='logo-name'>eDiário</h1>
            <div className='input-container'>
                
                <input type='text' placeholder='E-mail' name='email' id='login' {...register('email')}/>        

            </div>
            <div className='input-container'>
                
                <input type='password' placeholder='password' name='Password' id='password' {...register('password')}/>        

            </div>
            
            <button type='submit' className='button-login'>Entrar</button>
        </form>
        
    </div>
)
}