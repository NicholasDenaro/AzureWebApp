/*
 * 
 */

var mouseDown=false;
var lastX=null;
var lastY=null;

function init()
{
	document.getElementById("b1").disabled=false;
	clearCanvas(document.getElementById("c1"));
}

function save()
{
	var canvas=document.getElementById("c1");
	
	var d=canvas.toDataURL("image/png");
	//var w=window.open("about:blank","image from canvas");
	//w.document.write("<img src='"+d+"' alt='from canvas' />");
	var link=document.getElementById("link1");
	link.href=d;
	link.click();
}

function changeText(element)
{
	var body=document.getElementById("hello");
	
	body.innerHTML="Hello World";
	
	element.disabled=true;
}

function mousePos(element,event)
{
	var x=0;
	var y=0;
	
	var rect=element.getBoundingClientRect(), root=document.documentElement;
	x=event.pageX-rect.left-root.scrollLeft;
	y=event.pageY-rect.top-root.scrollTop;
	
	var pos={'x':x,'y':y};
	return(pos);
}

function draw(canvas,event)
{
	if(!mouseDown)
		return;
	var ctx=canvas.getContext("2d");
	ctx.fillStyle="#000000";
	var pos=mousePos(canvas,event);
	//ctx.fillRect(parseInt(pos.x),parseInt(pos.y),2,2);
	if(lastX!==null)
	{
		ctx.beginPath();
		ctx.moveTo(lastX,lastY);
		ctx.lineTo(pos.x,pos.y);
		ctx.stroke();
	}
	lastX=pos.x;
	lastY=pos.y;
}

function onMouseDown(element,event)
{
	mouseDown=true;
	var ctx=element.getContext("2d");
	ctx.fillStyle="#000000";
	var pos=mousePos(element,event);
	ctx.fillRect(pos.x-0.625,pos.y-0.625,1.5,1.25);
	ctx.stroke();
	lastX=pos.x;
	lastY=pos.y;
}

function onMouseUp(element,event)
{
	mouseDown=false;
	lastX=null;
}

function onMouseOut(element,event)
{
	lastX=null;
}

function clearCanvas(canvas)
{
	var ctx=canvas.getContext("2d");
	ctx.fillStyle="#FFFFFF";
	ctx.fillRect(0,0,canvas.width,canvas.height);
}