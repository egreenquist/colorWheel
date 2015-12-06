// Answer - #1 & #2
$("#red-box").on("click",function(){
	$(this).animate({
		width: "+=40px",
		height: "400px",
		wordSpacing: "+=10px"
	}, 500);
});

// Answer - #4

$("#blue-box").on("click",function(){
	$(this).toggleClass("font-size");
});

