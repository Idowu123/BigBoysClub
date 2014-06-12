$( document ).ready(function() {
	var pages = ['car', 'watches', 'residence', 'phone', 'club', 'shoe', 'perfume', 'cloth'];

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
		$('#welcome').fadeOut('slow');
		$('#car').toggleClass('hide');
	});

	$('.next').click(function(event){
		event.preventDefault();
		$(this).quizNav("next");		
	});

	$('.previous').click(function(event){
		event.preventDefault();
		$(this).quizNav("previous");		
	});  
});
