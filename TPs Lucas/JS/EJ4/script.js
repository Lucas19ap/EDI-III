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
	  var str = "";
	  
	  
		var min=nro%60;
		nro=(nro-min)/60;
		str=nro+":"+min;
		
		alert(str);

	}