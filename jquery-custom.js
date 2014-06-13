$(document).ready(function() {
	var pages = ['car', 'watch', 'residence', 'phone', 'club', 'shoe', 'perfume', 'cloth'];
	var score = {};
	function addScore(id, value){
    score[id] = value;
	}

	//initialize all to zero
	for (var i=0; i<pages.length; i++){
		addScore(pages[i], 0);
	}
	
	jQuery.fn.extend({
		//this function is called when "next" or "previous" in clicked
		setScore: function(action){
			var div = $(this).closest('div');
			var choice = div.find('.selected').attr('class').split(' ')[1]; //gets the class of the selected li.
			var divId = $(this).closest('div').attr('id'); //get the id of the particular question e.g car
			if (action === "next"){  //if the action is next
				switch(choice){
					case "java":
						addScore(divId, 100);
						break;
					case "php":
						addScore(divId, 70);
						break;
					case "ruby":
						addScore(divId, 50);
						break;
					case "python":
						addScore(divId, 20);
						break;
					case "jquery":
						addScore(divId, -20);
						break;
					default:
						//code;
				}	
			}
			else if (action === "previous"){  //if the action is previous
				switch(choice){
					case "java":
						addScore(divId, -100);
						break;
					case "php":
						addScore(divId, -70);
						break;
					case "ruby":
						addScore(divId, -50);
						break;
					case "python":
						addScore(divId, -20);
						break;
					case "jquery":
						addScore(divId, +20);
						break;
					default:
						//code;
				}	
			}		
		}
	});

	//Computing the total score
	jQuery.fn.extend({
		totalScore: function(action){
			var totalScore = 0;
			for (var i=0; i<pages.length; i++){
				totalScore += score[pages[i]];
			}
			return totalScore;
		}
	});

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
						$("#result").toggleClass('hide');
						$('#finalscore').append("<span>" + totalScore() + "<span>");
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
		$('#welcome').addClass('hide');
		$('#car').toggleClass('hide');
		$('html').addClass('car');
	});

	$('.page .options li').click(function(event){
		event.preventDefault();
		$(this).siblings().removeClass('selected');
		$(this).addClass('selected');
	});

	$('.next').click(function(event){
		event.preventDefault();
		$(this).quizNav("next");
		$(this).setScore("next");
	});

	$('.previous').click(function(event){
		event.preventDefault();
		$(this).quizNav("previous");		
		$(this).setScore("previous");
	});

});
