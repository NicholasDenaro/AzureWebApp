/*
 * 
 */

function init()
{
	document.getElementById("b1").disabled=false;
}


function changeText(element)
{
	var body=document.getElementById("hello");
	
	body.innerHTML="Hello World";
	
	element.disabled=true;
}
