import React from 'react'
import anuncio from '../images/a37254b158b720da1c299218e8250bfb.png'
import { Slide } from './Slide'

export default function Home() {
  return (
    <div className='bg-none w-[100%] h-[max-content]'> 
     <div className='bg-[#7ED95617] w-[100%] h-[max-content] flex justify-between p-´20px+'>
      <div className='w-[45%] bg-none p-[20px] pl-[50px]'>
        <h1 id='hht' className='text-[#7ED956] font-bold'>Transforme os seus itens em negócio ainda hoje</h1>
        <p className='text-[#0000009E]'>Somos uma empresa que impulsiona as pessoas a viverem os seus sonhos. 
Para isso, criamos a<span className='text-[#7ED956] font-semibold'> MKangola </span>para que todos possam transformar os seus items 
em negócios, através de vendas online dos seus produtos digitais para milhões
de pessoas ao redor do mundo.</p>
<br/>
<button className='bg-[#7ED956] p-[13px] pl-[30px] pr-[30px] rounded-[10px] text-white'>Criar produto</button>
      </div>
      <div className='w-[45%] bg-none p-[20px] flex items-center justify-center'>
        <img className='rounded-[50px] w-[100%]' draggable='false' src={anuncio}/>
      </div>
     </div>
    <div className='bg-white w-[100%] h-[100vh] p-[50px]'>
      <div>
      <h1 id='gtg' className='text-[#000000] font-medium'>O que você está precisando?</h1>
      <br/>
      <div className='flex'>
      {Slide.map((val, key) =>{
        return(
<div key={key}>
  {val.img}
  {val.titulo}</div>
        )
      })}
      </div>
      </div>
    </div>
    </div>
  )
}
