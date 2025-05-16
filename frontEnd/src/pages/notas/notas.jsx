import './notas.css'
import SideBar from '../../components/sideBar/sideBar'
export default function Notas(){
    
    return(
        <div className='notas-container'>
            <SideBar/>
            <div className='contentContainer'>notas</div>
        </div>
    )
}