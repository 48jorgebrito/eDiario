import './frequencia.css'
import SideBar from '../../../components/sideBar/sideBar'
import { FaCheckCircle } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { useState } from 'react';


export default function Frequencia(){
    
    const [select, setSelect] = useState("")

    const alunos = [
        {id: '1', nome: 'ramiro'},
        {id: '2', nome: 'yanna'},
        {id: '3', nome: 'miguel'},
        {id: '4', nome: 'thadylla'},
        {id: '5', nome: 'conceicao'},
        {id: '6', nome: 'ramia'},
    ]

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

                        {
                            alunos.map((aluno)=>(
                            <tr key={aluno.id}>
                                <td>{aluno.nome}</td>
                                <td className='presenca'>
                                    
                                    <input 
                                        type="radio" 
                                        name={aluno.nome} 
                                        value='presenca' 
                                        id={aluno.id}
                                        
                                        
                                    />
                                    <label className={`presente`} htmlFor={aluno.id} ><FaCheckCircle /></label >
                                    
                                    <input 
                                        type="radio" 
                                        name={aluno.nome} 
                                        value='falta' 
                                        id={aluno.id + 1}
                                    
                                    />
                                    <label  className={`falta`} htmlFor={aluno.id + 1}><IoMdCloseCircle /></label >
                                </td>
                                
                            </tr>

                            ))
                        }
                       
                    </tbody>
                </table>
            </div>
            
        </div>
    )
} 