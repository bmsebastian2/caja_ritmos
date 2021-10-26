import React from 'react'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import Switch from '@mui/material/Switch'

const CustomSwicth = ({title, color, power, setPower}) => {
    
    const handleChange = (e) => {
        if(title==='power'){
         console.log((e.target.checked))
         setPower(e.target.checked)
        }
        // (e.target.checked)?setPower(false):setPower(true)
        // console.log(power)
        // const p = !power
        //  setPower()
        // console.log(e.target.checked)
        //  console.log(power)
        // setPower((power===1)?0:1)
        // e.target.checked(!e.target.checked)

        
    }
    return (
        <FormGroup aria-label="position" row>
            <FormControlLabel
            value="top"
            control={<Switch name = 'power' color= {color} onChange={handleChange} />}
            label={title}
            labelPlacement="top"
            />
        </FormGroup>
    )
}

export default CustomSwicth
