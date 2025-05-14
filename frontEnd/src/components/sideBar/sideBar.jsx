import './sideBar.css'
import Logo from '../../assets/images/logo2.png'
import { useAuth } from '../../context/authContext'
import { GoHomeFill } from "react-icons/go"
import { IoMdSettings } from "react-icons/io"
import { FaUser } from "react-icons/fa6"
import { FaListCheck } from "react-icons/fa6"
import { PiListNumbersFill } from "react-icons/pi"
import { useNavigate } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react'

export default function SideBAr(){
    const {logout} = useAuth()
    const navigate = useNavigate()

    const handleClick = (event) => {
        navigate(event.target.value)
        
    }
    const [btnMenu, setBtnMenu] = useState(false)
    const actveMenu = () => {
      setBtnMenu(!btnMenu)
    }

    return(
        <div className='sidebar'>
                    <header>
                        <div className='boxLogo'>
                          <div className='logo'>
                            <img src={Logo}/>
                          </div>
                          <div className='titleLogo'>
                            <h3>Diário</h3>
                            <h3>Elétronico</h3>
                          </div>
                        </div>

                        <div className='menuMobile'>
                          <button onClick={actveMenu}><GiHamburgerMenu /></button>
                        </div>
                    </header>
                      
                    
                      <ul className={`${!btnMenu ? ' ' : 'active'}`}>
                        <button value="/" onClick={handleClick}><GoHomeFill className='itenSideBar'/> Home</button>
                        
                        <button value='/frequencia' onClick={handleClick}><FaListCheck className='itenSideBar'/> Frequência</button>
                        <button value='/notas' onClick={handleClick}><PiListNumbersFill className='itenSideBar'/> Notas e Avaliações</button>
                        <button value='/alunos' onClick={handleClick}><FaUser className='itenSideBar'/> Alunos</button>
                        <button value='/configuracoes' onClick={handleClick}><IoMdSettings className='itenSideBar'/> Configurações</button>
                      </ul>
                  </div>
    )
}