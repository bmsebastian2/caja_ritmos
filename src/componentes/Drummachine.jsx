import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/ListItem";    
import CustomSwicth from "./CustomSwicth";
import Drumpad from "./Drumpad";
import {listaMusica} from '../listSonidos'



const Drummachine = ({power, setPower}) => {

    const arr = Object.values(listaMusica)

    const [descripMusic, setDescripMusic] = useState('')

    
  return (
    <div id="display1">
      
      <Grid container spacing={2} id='gridStructure' sx={{ minHeight:'50vh',border:'1px solid black'}}>
        
        
            <Grid item xs={12} md={8} sx={{ display:'flex' }}>
                <Item>
                    <div className="" >

                            {
                              arr.map( e => < Drumpad 
                              letra = {e.name} 
                              setMusic={setDescripMusic} 
                              descr={e.tecla}/>)
                            }                          

                    </div>
                </Item>
            </Grid>
            
            
            
            <Grid item xs={12} md={4} sx={{ border:'1px solid black', display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center' }}>
                
                <div className="" style={{margin:'1rem'}}>
                    <CustomSwicth title='Power' color='warning' power={power} setPower={setPower}/>
                </div>

                <div className="" id="display" style={{margin:'1rem'} }>{(descripMusic)?descripMusic:'.'}</div>
                
                <div className="" style={{margin:'1rem'}}>3</div>
                
                <div className="" style={{margin:'1rem'}}>
                    <CustomSwicth title='Bank' color='primary'/>
                </div>
                
            </Grid>
         
      </Grid>


    </div>
  );
};

export default Drummachine;
