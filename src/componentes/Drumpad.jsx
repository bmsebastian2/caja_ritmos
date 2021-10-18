import React from 'react'
import Button from '@mui/material/Button';

const Drumpad = ({letra}) => {
    return (
        <Button className='drum-pad' id={letra} variant="outlined" sx={{margin:'1rem', padding:'2rem'}}>
            {letra}
        </Button>
    )
}

export default Drumpad
