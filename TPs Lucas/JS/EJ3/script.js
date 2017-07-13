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
	  for (var i=1; i<=nro  ;i++)
	  {
		if ((nro % i) === 0)
		{
		  str+=i+' ';
		  
		}
	  }
	  alert(str);
	}