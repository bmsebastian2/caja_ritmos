import Button from '@mui/material/Button';
import {reproduce} from '../listSonidos'
import { useRef } from 'react';

const Drumpad = ({letra, setMusic,descr}) => {    

    const componentRef = useRef()
    
    return (
        <div className='drum-pad'  id={letra} style={{display:'inline'}}>
           
            <Button
                id = {'b'+letra}
                variant="outlined" 
                sx={{margin:'1rem', padding:'2rem'} } 
                onClick={()=>{reproduce(letra.toLowerCase()); setMusic(descr)}}
                ref={node => componentRef.current = node}
                >
                {letra}

            </Button>
       
        </div>
        
    )
}

export default Drumpad
