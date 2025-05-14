import Login from '../pages/login/login'
import Home from '../pages/home/home'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from '../context/authContext'
import Frequencia from '../pages/frequencia/frequencia'
import Alunos from '../pages/alunos/alunos'
import Configuracoes from '../pages/configuracoes/configuracoes'
import Notas from '../pages/notas/notas'

export default function AppRoutes(){
    

    const Private = ({children}) => {
    
       
        const { authenticated, loading } = useAuth();
        if(loading){
            return <div className='loading'>Carrregando...</div>
        }
    
    
        if( !authenticated){
             return <Navigate to='/login'/>
        }
        return children
        
        
    }


    return(
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path='/login' element={<Login/>}/>

                    {/*paginas privadas*/}
                     <Route path='/' element={ <Private><Home/></Private>}/>
                     <Route path='/frequencia' element={ <Private><Frequencia/></Private>}/>
                     <Route path='/notas' element={ <Private><Notas/></Private>}/>
                     <Route path='/alunos' element={ <Private><Alunos/></Private>}/>
                     <Route path='/configuracoes' element={ <Private><Configuracoes/></Private>}/>
                </Routes>

            </AuthProvider>

            
        </Router>
    )
}                                                       