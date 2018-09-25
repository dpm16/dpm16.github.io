window.addEventListener("DOMContentLoaded", function(event) {
	resize();
	document.getElementById("displayArea").style.display = "block";
    setTimeout(function () {
		document.getElementById("loading").style.display = "none";
		document.getElementById("screen-content").style.display = "flex";
    },4000);

});

function getPos(e){
	width=document.documentElement.clientWidth;
	height=document.documentElement.clientHeight;
	x=e.clientX;
	y=e.clientY;
	relx=x/width;
	rely=y/height;
	cursor="Your Mouse Position Is : " + x + " and " + y ;
	relative="Your Relative Mouse Position Is : " + relx + " and " + rely ;
	size="Your Viewport Is : " + width + " and " + height;
	aspect="Your Viewport Aspect Is : " + width/height;
	document.getElementById("showpos").innerHTML=cursor;
	document.getElementById("showport").innerHTML=size;
	document.getElementById("showrelpos").innerHTML=relative;
	document.getElementById("showaspect").innerHTML=aspect;

	layer1(relx,rely);
	layer2(relx,rely);
	layer3(relx,rely);

}

function layer1(x,y){
	transformx = (0.5 - x) * 60;
	transformy = (0.5 - y) * 60;
	transform = "translate("+transformx+"px" +","+transformy+"px"+")";
    // Code for Chrome, Safari, Opera
    document.getElementById("layer1").style.WebkitTransform = transform; 
    // Code for IE9
    document.getElementById("layer1").style.msTransform = transform; 
    // Standard syntax
    document.getElementById("layer1").style.transform = transform;

   	// Code for Chrome, Safari, Opera
    document.getElementById("screen").style.WebkitTransform = transform; 
    // Code for IE9
    document.getElementById("screen").style.msTransform = transform; 
    // Standard syntax
    document.getElementById("screen").style.transform = transform; 

    // Code for Chrome, Safari, Opera
    document.getElementById("desk").style.WebkitTransform = transform; 
    // Code for IE9
    document.getElementById("desk").style.msTransform = transform; 
    // Standard syntax
    document.getElementById("desk").style.transform = transform; 
}

function layer2(x,y){
	transformx = (0.5 - x) * 15;
	transformy = (0.5 - y) * 15;
	transform = "translate("+transformx+"px" +","+transformy+"px"+")";
    // Code for Chrome, Safari, Opera
    document.getElementById("wall").style.WebkitTransform = transform; 
    // Code for IE9
    document.getElementById("wall").style.msTransform = transform; 
    // Standard syntax
    document.getElementById("wall").style.transform = transform; 
}

function layer3(x,y){
	transformx = (x-0.5) * 40;
	transformy = (y-0.5) * 40;
	transform = "translate("+transformx+"px" +","+transformy+"px"+")";
    // Code for Chrome, Safari, Opera
    document.getElementById("reflection").style.WebkitTransform = transform; 
    // Code for IE9
    document.getElementById("reflection").style.msTransform = transform; 
    // Standard syntax
    document.getElementById("reflection").style.transform = transform; 
}

function stopTracking(){
	document.getElementById("displayArea").innerHTML="";
}

function resize(){
	width=document.documentElement.clientWidth;
	height=document.documentElement.clientHeight;
	aspect=width/height;
	var avail_height=window.screen.availHeight
	var first_resize = true;

	if (height >= width) {
		var mobile = document.createElement('link');
		var body = document.getElementById('displayArea');
	    document.getElementById("screen").style.height = avail_height;

		mobile.id = 'mobile';
		mobile.rel = 'stylesheet';
		mobile.type = 'text/css';
		mobile.href = 'mobile.css';
		document.head.appendChild(mobile);
		first_resize = false;
	}
	if (height < width){
		if (first_resize){}
		else{
			var mobile = document.getElementById('mobile');
			mobile.parentNode.removeChild(mobile);
		}

		first_resize = false;
	}


    var ooawidth="49.8vw";
    var ooaheight="28.2vw";
    var ooaleft="26vw";

    if (aspect > 1.5){
    	var left=(width/2)-275;
    	left = left - ((height-740)/2.7)+2;

		var divwidth = (height/2) - 100;
		var divheight = (height/4) -100;
	    document.getElementById("screen").style.width = "76vh";
	    document.getElementById("screen").style.height = "43vh";
	    document.getElementById("screen").style.left = left;
	    document.getElementById("screen").style.top = "28vh";
    }

    else{
		var ooatop = (height - 310)/2;
		ooatop = ooatop - (width - 1060)/7;
	    document.getElementById("screen").style.width = ooawidth;
	    document.getElementById("screen").style.height = ooaheight;
	    document.getElementById("screen").style.left = ooaleft;
	    document.getElementById("screen").style.top = ooatop;
    }

    document.getElementById("screen").style.display = "flex";

}