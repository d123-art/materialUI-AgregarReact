import React, { useState } from 'react';
import Buttons from './Buttons'
import {TextField,Container  } from '@material-ui/core';
import { Button} from '@material-ui/core';
import Axios from 'axios'

function Inputs() {

	const [nombre, setNombre] = useState("");
	const [apellido, setApellido] = useState("");
	const [edad, setEdad] = useState(0); //no es unma cadena va a ser un numero por lo tanto colocamos 0, desde alli empieza.               
	const [telefono, setTelefono] = useState(0);

	const [ ListUser, setListUser] = useState([]); //almacenamos los datos 

	const addUser = () => {
		Axios.post("http://localhost:4000/agregar",{
			nombre:nombre, 
			apellido:apellido,
			edad:edad,
			telefono:telefono,
		 }).then(()=>{
			 console.log("succes")
		 } )

	};

	// en esta funcion vamos a hacer una solicitud 
	const getUser = () =>{
		Axios.get("http://localhost:4000/usuarios").then((response)=>{
			setListUser(response.data) // insertamos/convertimos  los datos en nuestra lista que recibimos del backend utilizamos la propiedad data que contiene la matriz de los usuarios
		});
	}
  
	//probar si recibe los datos
	const displayInfo = () => {
		console.log( nombre + apellido + edad + telefono );
	}

	return (
		//el onChange lo que hace es tomar el dato de entrada y establece el estado igual a ese dato de entrada.
		<> 
        <Container fixed>
		<TextField id="standard-basic" label="Nombre" 
		  onChange={(event)=>{setNombre(event.target.value);
		}}/><br></br>  

		<TextField id="standard-basic" label="Apellido"
          onChange={(event)=>{setApellido(event.target.value);
          }}/><br></br>

		<TextField id="standard-basic" label="Edad"
          onChange={(event)=>{setEdad(event.target.value);
          }}/><br></br>

		<TextField id="standard-basic" label="Telefono"
          onChange={(event)=>{setTelefono(event.target.value);
          }}/><br></br> <br></br> 
		
        <Button variant="contained" color="primary" href="#contained-buttons" onClick={addUser}  > Enviar  </Button > 
		<Button variant="contained" color="secondary" href="#contained-buttons" onClick={getUser}  > Ver usuarios  </Button > 

		  {ListUser.map((val,key)=>{
			  return <div> {val.nombre} </div>
		  })}

		</Container>
		</>
	); 
}
//mapeamos todos los elementos de la lista de usuarios y devolvemos un div que contenga dicha informacion


export default Inputs;
