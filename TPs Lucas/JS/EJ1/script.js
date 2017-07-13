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


	function ej(str)
	{
	    var str2 = "";
  var l= str.length;
  
  for (var i=0; i<str.length;i++)
  {
    str2+=str[l-1]
    l--;
  }
  alert(str2);
	}
