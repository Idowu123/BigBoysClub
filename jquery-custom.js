$( document ).ready(function() {
	var pages = ['car', 'watch', 'residence', 'phone', 'club', 'shoe', 'perfume', 'cloth'];
	var score = {};
	function addScore(id, value){
    score[id] = msg;
	}
	
	// jQuery.fn.extend({
	// 	score: function(action){
	// 		var divId = $(this).closest('div').attr('id');
	// 		if (action === "next")
	// 		for(var que in pages){
	// 			if(pages[que] === divId)
	// 			switch(){
	// 				case: "java"
	// 					nk += 100;
	// 					break;
	// 				case: "php"
	// 					//code
	// 					break;
	// 				case: "ruby"
	// 					//code
	// 					break;
	// 				case: "python"
	// 					//code
	// 					break;
	// 				case: "jquery"
	// 					//code
	// 					break;
	// 				default:
	// 					//code;
	// 			}	
	// 		}		
	// 	}
	// });

	jQuery.fn.extend({
		quizNav: function(action){
			var div = $(this).closest('div');
			div.toggleClass('hide');
			if(action === "next"){
				switch(div.attr('id')){
					case "car":
						$("#watch").toggleClass('hide'); 
						break;
					case "watch":
						$("#residence").toggleClass('hide');
						break;
					case "residence":
						$("#phone").toggleClass('hide');
						break;
					case "phone":
						$("#club").toggleClass('hide');
						break;
					case "club":
						$("#shoe").toggleClass('hide');
						break;
					case "shoe":
						$("#perfume").toggleClass('hide');
						break;
					case "perfume":
						$("#cloth").toggleClass('hide');
						break;
					case "cloth":
						//code
						break;
					default:
						// default code
				}
			}
			else if(action === "previous"){
				switch(div.attr('id')){
					case "car":
						//do nothing
						break;
					case "watch":
						$('#car').removeClass('hide');
						break;
					case "residence":
						$("#watch").toggleClass('hide');
						break;
					case "phone":
						$("#residence").toggleClass('hide');
						break;
					case "club":
						$("#phone").toggleClass('hide');
						break;
					case "shoe":
						$("#club").toggleClass('hide');
						break;
					case "shoe":
						$("#cloth").toggleClass('hide');
						break;
					case "cloth":
						$("#shoe").toggleClass('hide');
						break;
					default:
						// default code
				}
			}
		}
	});

	$('#start').click(function(event){
		event.preventDefault();
		//$(this).closest('div').fadeOut('hide');
		$('#welcome').addClass('hide');
		$('#car').toggleClass('hide');
	});

	$('.page li').click(function(event){
		event.preventDefault();
		$(this).siblings().removeClass('selected');
		$(this).addClass('selected');
	});

	$('.next').click(function(event){
		event.preventDefault();
		$(this).quizNav("next");
		$(this).score("next");
	});

	$('.previous').click(function(event){
		event.preventDefault();
		$(this).quizNav("previous");		
	});

});
