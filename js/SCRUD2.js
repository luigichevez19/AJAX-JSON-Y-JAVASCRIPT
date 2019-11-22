window.onload = localStorage.getItem("nombre_variable");
var inve=localStorage.getItem("nombre_variable");
var dato=null;
if(window.addEventListener){
	window.addEventListener("load",mostrar, false);
}
else{
	window.attachEvent("onload", mostrar);
}

function mostrar() 
{
var usua=localStorage.getItem("usua");
 document.getElementById('usuario').textContent=usua;
   
  $.getJSON("js/Datos.json", function(datos)
  {
    if(dato==null)
    {
    	var n=1;
    $("#todo").remove();
          for (var i=0;i < 10; i++)
          {
               
            var codigo= datos['productos'][i]['codigo'];
          	var nombre= datos['productos'][i]['nombre'];
          	var canti = inve.split(",")[n];
          	n+=2;
            $("#Dato").append('<tr id="todo"> <td>'+codigo+'</td> <td>'+nombre+'</td><td>'+canti+'</td>></tr>');
          }
      }
      else if(dato>0 || dato != "")
      {
        var n=1;
          for (var i=0;i < 10; i++)
          {  
            var codigo= datos['productos'][i]['codigo'];
            var nombre= datos['productos'][i]['nombre'];
            var canti = inve.split(",")[n];
            n+=2;
            if(codigo == dato || nombre == dato)
            {
              for(var ii=0; ii < 10;ii++)
              {
                  $("#todo").remove();
              }
            
              $("#Dato").append('<tr id="todo"> <td>'+codigo+'</td> <td>'+nombre+'</td><td>'+canti+'</td>></tr>');
            }
          }
      }
         
 });

} 
var saber=0;
function cambio()
{
   if(dato>0 || dato != "" &&saber>0)
   {
    saber =0;
    dato=null;
     mostrar();
   }
}
function buscar()
{
  saber++;
 dato = document.getElementById("filtro").value;
  mostrar();
} 
function n()
{
	localStorage.setItem("nombre_variable2",inve);
}
