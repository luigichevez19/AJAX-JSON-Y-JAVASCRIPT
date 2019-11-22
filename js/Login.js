var user = ['admin','vendedor','invitado'];
var con = ["admin123","vendedor123","invitadoinvitado123"];
function verificar()
{
	var usuario=document.getElementById("user").value;
	var contra=document.getElementById("contra").value;
	var aprobado = false;
	for(var i=0; i<3;i++)
	{
		if(user[i]==usuario && contra==con[i])
		{
			aprobado = true;
		}
	}
	if(aprobado)
	{
		alert("Bienvenidos");
		localStorage.setItem("usua",usuario);
		window.open('Bienvenida.html?'+usuario);
		this.window.close('Login.html');
	}
	else
	{
		alert("Verifique el usuario o contraseña");
	}

}