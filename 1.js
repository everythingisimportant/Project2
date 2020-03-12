

$(document).ready(function(){
	$("input").focus(function(){
		$(this).css("background-color","#cccccc");
	});

	$("input").blur(function(){
		$(this).css("background-color","#ffffff");
	});

	$("button").click(function(){
		$("button").css("background-color","red");
	});

    $("p").on({
    	mouseenter: function(){
    		$(this).css("background-color", "blue")
    	},
    	mouseleave: function(){
    		$(this).css("background-color", "orange")
    	},
    	click: function(){
    		$(this).css("background-color", "red")
    	}
    });

    $("#2").click(function(){
    	$("div").animate({left: '500px'},2000).animate({fontSize:'3em'},1000);
    });

	$("#3").click(function(){
	    $("div").stop();
	})

});


function total(num1,num2){
    return !!num1+num2;
}