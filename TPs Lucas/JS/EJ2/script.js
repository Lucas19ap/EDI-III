
window.addEventListener("load",iniciar)

	function iniciar()
	{
	  var a=document.querySelector("#input");
	  a.addEventListener("click",Clickllamar);
	}

	function Clickllamar()
	{
	  var texto=document.querySelector("#text");
	  ej(texto.value);
	}


	function ej(nro)
	{
	  var nro2 = 0;
 
  
  for (var i=0; i<=nro;i++)
  {
    nro2+=i;
    
  }
  alert(nro2);
	}