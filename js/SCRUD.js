
if(window.addEventListener){
	window.addEventListener("load",mostrar, false);
}
else{
	window.attachEvent("onload", mostrar);
}
window.onload = localStorage.getItem("nombre_variable2");
var inve2=localStorage.getItem("nombre_variable2");
var inve = new Array(10);
var dar = new Array(10);
var cuenta= 0;
function inven(dato,dato2,dato3,dato4,i)
{
			inve[i]= new Array(2);
			inve[i][0]=dato;
			inve[i][1]=dato2;
			dar[i]= new Array(2);
			dar[i][0]=dato3;
			dar[i][1]=dato4;
				
}
function veriinve(n,n2,n3)
{	
	var num =inve[n-1][1];
	num = parseInt(num);
	n2 = parseInt(n2);
	if(num >= n2)
	{
		inve[n-1][1]= num -n2;
		var nombre = dar[n-1][1];
		var precio = dar[n-1][0];
		cuenta+= precio *parseInt(n2);	
		factura(precio,n2,nombre,n,n3);
		alert("Exito en la compra");
	}
	else if(n2>num)
	{
		alert("Lo sentimos no tenemos la cantidad de producto que deseea para este, el codigo del producto es:"+n);
	}
}
function leerDatoNew()
{

	var dato = {};
	var canti = document.getElementById("datos").value;
	var indices=[];
	for(var i=0; i < canti.length;i++)
	{
		if(canti[i] == ",")indices.push(i);
	}
	var n1=0,n2=1;
	if(indices.length > 1)
	{
		for (var n=0;n<(indices.length+1)/2;n++)
		{
		
			dato["Producto"]= document.getElementById("datos").value.split(",")[n1];
			dato["Cantidad"]=document.getElementById("datos").value.split(",")[n2];
			veriinve(dato["Producto"],dato["Cantidad"],(indices.length+1)/2);
			n1+=2;
			n2+=2;
		}
		document.getElementById("datos").value ="";
	}
	else
	{
				
		dato["Producto"]= document.getElementById("datos").value.split(",")[n1];
		dato["Cantidad"]=document.getElementById("datos").value.split(",")[n2];
		veriinve(dato["Producto"],dato["Cantidad"]);
		document.getElementById("datos").value="";
	}
	return dato;
}

function mostrar() 
{
var usua=localStorage.getItem("usua");
 document.getElementById('usuario').textContent=usua;
  $.getJSON("js/Datos.json", function(datos)
  {
  	var ii=1;
          for (var i=0;i < 10; i++)
          {
               
            var codigo= datos['productos'][i]['codigo'];
          	var nombre= datos['productos'][i]['nombre'];
            var precio= datos['productos'][i]['precio'];
            var inventario = parseInt(datos['productos'][i]['cantidad']);
            if(inve2!=null)
            {
            	
            	inventario= inve2.split(",")[ii];
            	ii+=2;	
            }
           
            inven(codigo,inventario,precio,nombre,i);
            $("#base").append('<tr> <td>'+codigo+'</td> <td>'+nombre+'</td> <td>$'+precio+'</td></tr>');
          }
         
 });

}
var nnn=0;
function factura(precio,canti,nombre,codigo,to)
{
	 var espacio= document.getElementById('factura');
          var producto = document.createElement('h3');
          espacio.appendChild(producto);
          var total = parseInt(canti)*precio;
          var texto = document.createTextNode(""+nombre+" x "+canti+": "+total.toFixed(2)+"");
           producto.appendChild(texto);
           nnn++;
	if(nnn==to)
	{
		var tol = document.createElement('h2');
		espacio.appendChild(tol);
		tol.id='tol';
		var texto = document.createTextNode("Su cuenta es: $"+cuenta);
         tol.appendChild(texto);
	}
}


function cl()
{
	    localStorage.setItem("nombre_variable",inve);
}
