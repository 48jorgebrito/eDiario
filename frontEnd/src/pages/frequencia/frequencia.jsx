import './frequencia.css'
import SideBar from '../../components/sideBar/sideBar'
import { FaCheckCircle } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { useState } from 'react';


export default function Frequencia(){
    
    const [select, setSelect] = useState("")

    

    return(
        <div className='frequencia-container '>
            
            <SideBar/>
            
            <div className='contentContainer contentFrequencia'>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th >Presença</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Thadylla Mendes de Azeveddo</td>
                            <td className='presenca'>
                                
                                <label className={`presente ${select === 'presenca'? 'presenteChecked': ''}`} htmlFor='present' ><FaCheckCircle /></label >
                                <input 
                                    type="radio" 
                                    name='frequencia' 
                                    value='presenca' 
                                    id='present'
                                    checked={select === 'presenca'}
                                    onChange={(e) => setSelect(e.target.value)}
                                    
                                />
                                
                                <label  className={`falta ${select === 'falta'? 'faltaChecked': ''}`} htmlFor='fault'><IoMdCloseCircle /></label >
                                <input 
                                    type="radio" 
                                    name='frequencia' 
                                    value='falta' 
                                    id='fault'
                                    checked={select === 'falta'}
                                    onChange={(e) => setSelect(e.target.value)}
                                />
                            </td>
                            
                        </tr>
                        <tr>
                            <td>Yanna Gabriele Veloso Brito</td>
                            <td className='presenca'>
                                
                                <label className={`presente ${select === 'presenca' ? 'presenteChecked': ''}`} htmlFor='present' ><FaCheckCircle /></label >
                                <input 
                                    type="radio" 
                                    name='frequencia' 
                                    value='presenca' 
                                    id='present'
                                    checked={select === 'presenca'}
                                    onChange={(e) => setSelect(e.target.value)}
                                    
                                />
                                
                                <label  className={`falta ${select === 'falta'? 'faltaChecked': ''}`} htmlFor='fault'><IoMdCloseCircle /></label >
                                <input 
                                    type="radio" 
                                    name='frequencia' 
                                    value='falta' 
                                    id='fault'
                                    checked={select === 'falta'}
                                    onChange={(e) => setSelect(e.target.value)}
                                />
                            </td>
                            
                        </tr>
                    </tbody>
                </table>
            </div>
            
        </div>
    )
} 