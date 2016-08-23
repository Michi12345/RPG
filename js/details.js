$( document ).ready(function() { //пишем так, чтобы сначала загрузился весь документ, а потом выполнялись следующие js команды
		
	function getUrlParameter(name) {
		var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
		return results[1] || 0;
	}
	
	var imgSrc = getUrlParameter("avatarImage");
	$ ("#yourAvatar").attr("src", imgSrc);	
	

});