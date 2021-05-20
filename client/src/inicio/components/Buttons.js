import React from 'react';
import { Button} from '@material-ui/core';
import displayInfo from './Inputs'

function Buttons() {
	return (
		<>
        
        <Button variant="contained" color="primary" href="#contained-buttons" onClick={displayInfo}  > Enviar  </Button > 
        <Button variant="contained" color="secondary"> Eliminar</Button>
		</>
	)
}

export default Buttons;