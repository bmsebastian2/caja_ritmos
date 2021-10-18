import React from 'react'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import Switch from '@mui/material/Switch'

const CustomSwicth = ({title}) => {
    return (
        <FormGroup aria-label="position" row>
            <FormControlLabel
            value="top"
            control={<Switch color="primary" />}
            label={title}
            labelPlacement="top"
            />
        </FormGroup>
    )
}

export default CustomSwicth
