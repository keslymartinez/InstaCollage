
function Login () {
	var usuario = document.getElementById('user').value;
	var clave = document.getElementById('password').value;
if (  usuario === '' || clave === '') {
	}else 
		alert('debes ingresar un usuario y contraseña');
	}

var valida = function (){
	var clave = document.getElementById('password').value;
		if ((clave === 123456) || (clave.length <6)) {
			alert('ingrese una clave diferente');
		} else{

		window.location.href='';
		}
	
	};

document.getElementById('boton').addEventListener('click', valida);
		

