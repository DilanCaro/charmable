$(document).ready(function(){

    // Declaring constants
   // const slideshowContainer = document.getElementById("slideshowContainer");

    //const slides = document.getElementsByClassName("slideshowElement");

    //const dots = document.getElementsByClassName("dot");

    //const previousSlideArrow = document.getElementById("previousPicture");

    //const nextSlideArrow = document.getElementById("nextPicture");

    //function newSlide() {}
    
    var i =0;
	var images =[];
	var time =1000;


	//image list 
	images[0] ='https://images.unsplash.com/photo-1630149244807-d1de727f89e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80';
	images[1] ='https://images.unsplash.com/photo-1630058756535-f19afd893b13?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80';
	images[2] ='https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80';

	//change Image
	function changeImg(){
		document.slide.src =images[i];

		if ( i < images.length -1 ){
			i++
		}
		else {
			i=0;
		}
		setTimeout("changeImg()", time)
	}
	window.onload =changeImg;
   
});
