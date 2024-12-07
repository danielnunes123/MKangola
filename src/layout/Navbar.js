import React from 'react'
import search from '../images/Frame.png'
import logo from '../images/Rosa_Minimalista_Personal_Trainer_Logo-removebg-preview_1__1_-removebg-preview.png'
import { Navbardata } from './Navbardata'
import { NavLink } from 'react-router-dom'
import { User } from 'lucide-react'

export default function Navbar() {
  return (
    <div id='navbar' className='bg-white w-[100%] p-[20px]'>
        <div id='gg'>
            <img className='h-[40px]'  src={logo}/>
            <div id='hh' className='p-[8px] flex gap-2'>
                <img className='h-[20px]' src={search}/>
                <input placeholder='Pesquisar' type='text'/></div>
            </div>
            <div id='kk'>
      {Navbardata.map((val, key) =>{
        return(

 <NavLink id='pp' className='flex gap-1 text-[#0000005C] font-semibold' activeClassName='active' key={key} to={val.link}>{val.icon}{val.nome}</NavLink>
 
        )
      })}
       <button><User className='w-[15px]'/> Comecar</button>
               </div>

    </div>
  )
}
