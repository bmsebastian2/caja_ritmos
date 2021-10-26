import React, { useEffect, useState } from 'react'
import Drummachine from './Drummachine'
import {reproduce, listaMusica} from '../listSonidos'


const Contenedor = () => {

    
    const [power, setPower] = useState(false)
    
    useEffect(() => {
    
        window.addEventListener('keydown', (e) => {           
            if(power === true){        
            if( ['q','w','e','a','s','d','z','x','c'].some( (elem) => elem === e.key)){
                const button = document.getElementById('b' + e.key.toUpperCase())
                button.click()
                button.style.background='yellow'                
                setTimeout( ()=>button.style.background='none',200)
                
            }
        }
        })
       
                 
    }, [])
  

    return (
        <main id="drum-machine">

            <Drummachine power={power} setPower={setPower}/>


        </main>
    )
}

export default Contenedor
