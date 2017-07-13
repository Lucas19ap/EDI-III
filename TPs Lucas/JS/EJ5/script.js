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
	var x=1;
  var str2 = "";
  
  
  for (var i=0; i<str.length  ;i++)
  {
    if (str[i]==str[i+1]) 
    {
     
      x++;
      
    }
    else
    {
    str2+=x+str[i];
    x=1;
    }
  }
  alert(str2);
	}