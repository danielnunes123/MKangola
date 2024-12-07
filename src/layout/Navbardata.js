import { Home, Bolt, MessageCircle, ShoppingCart, Info } from "lucide-react"


export const Navbardata = [

  {
  nome:'Home',
  link:'/home',
  icon:<Home  id='icons'/>
   },

  {
  nome:'Items',
  link:'/items',
  icon:<Bolt id='icons'/>
  },
 {
 nome:'Conversa',
 link:'/conversa',
 icon:<MessageCircle  id='icons'/>
   },
   {
   nome:'Carrinho',
   link:'/carrinho',
   icon:<ShoppingCart  id='icons'/>
     },
     {
     nome:'Sobre',
     link:'/sobre',
     icon:<Info  id='icons'/>
       }
]