import React from "react";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/ListItem";    
import CustomSwicth from "./CustomSwicth";

import Drumpad from "./Drumpad";


const Drummachine = () => {

    const letras = ['Q','W','E','A','S','D','Z','X','C']
    
  return (
    <div id="display">
      
      <Grid container spacing={2} id='gridStructure' sx={{ minHeight:'50vh',border:'1px solid black'}}>
        
        
            <Grid item xs={12} md={8} sx={{ display:'flex' }}>
                <Item>
                    <div className="">

                            {letras.map(element =><Drumpad letra = {element}/>)}

                    </div>
                </Item>
            </Grid>
            
            
            
            <Grid item xs={12} md={4} sx={{ border:'1px solid black', display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center' }}>
                <div className="" style={{margin:'1rem'}}>
                    <CustomSwicth title='Power'/>
                </div>
                <div className="" style={{margin:'1rem'}}>2</div>
                <div className="" style={{margin:'1rem'}}>3</div>
                <div className="" style={{margin:'1rem'}}>
                    <CustomSwicth title='Bank'/>
                </div>
                
            </Grid>
         
      </Grid>


    </div>
  );
};

export default Drummachine;
