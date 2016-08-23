$( document ).ready(function() { //пишем так, чтобы сначала загрузился весь документ, а потом выполнялись следующие js команды
    
	var rpgDetails = "/RPG/details.html";	
	
	function selectCurrentAvatar(currentAvatar){
		if (currentAvatar.hasClass("active")) {
			currentAvatar.removeClass("active");
		} else {	
			$(".avatar").removeClass ("active");		
			currentAvatar.addClass("active");
		}
	}
	
	function setNextButtonUrl (imagePath){
		
		var elementA = $("#nextButton"); //именно и только кнопка Next
		var nextButtonUrl = rpgDetails + "?" + "avatarImage=" + imagePath;
		elementA.attr("href", nextButtonUrl); //в атрибуте элемента А задаем новое значение атрибута
	}
	
	$( ".avatar img" ).click(function() {
		var currentAvatar = $(this).parent();
		selectCurrentAvatar(currentAvatar);
		
		var imagePath = $(this).attr("src");
		setNextButtonUrl (imagePath);
	});
});

	
	
	
	
	