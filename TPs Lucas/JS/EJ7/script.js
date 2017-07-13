window.addEventListener("load",iniciar)

	function iniciar()
	{
	  var a=document.querySelector("#input");
	  a.addEventListener("click",Clickllamar);
	}

	function Clickllamar()
	{
	  var n=document.querySelector("#nombre");
	  var a=document.querySelector("#apellido");
	  ej(n.value,a.value);
	}


	function ej(str,str2)
	{
  var str3 = str+' '+str2
  alert(str3);
  }
  
	