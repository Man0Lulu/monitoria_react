import Monitor from '../components/Monitor'
import Paragrafo from '../components/Paragrafo'
import Fundo from '../components/Fundo'
import Nome from '../components/Nome'
export default function Home() {
  return ( 
      <>
       {/* 
components
*/}
      <Monitor></Monitor>
      <Paragrafo></Paragrafo>
      <Fundo></Fundo>
      {/* 
props
*/}
      <Nome nome ="Davi"></Nome>
      </>
      )
}
