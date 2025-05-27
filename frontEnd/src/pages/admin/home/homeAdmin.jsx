import './homeAdmin.css'
import { useForm } from 'react-hook-form'


export default function HomeAdmin(){

    const {register, handleSubmit, formState: {errors}} = useForm()
    
    const onSubmit = (data) => {
            console.log(data)
    }
    
    return(
        <div>
            <h1>cadastrar escola</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input type="text"  {...register('escola')}/>

                </div>
                <button type='submit'>cadastrar</button>
            </form>
            
        </div>
    )
}