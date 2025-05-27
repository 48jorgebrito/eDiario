import Login from '../pages/login/login'
import Home from '../pages/professor/home/home'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from '../context/authContext'
import Frequencia from '../pages/professor/frequencia/frequencia'
import Alunos from '../pages/professor/alunos/alunos'
import Configuracoes from '../pages/professor/configuracoes/configuracoes'
import Notas from '../pages/professor/notas/notas'
import HomeAdmin from '../pages/admin/home/homeAdmin'
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
                    <Route path='/admin' element={<HomeAdmin/>}/>

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