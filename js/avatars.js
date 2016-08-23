$( document ).ready(function() { //����� ���, ����� ������� ���������� ���� ��������, � ����� ����������� ��������� js �������
    
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
		
		var elementA = $("#nextButton"); //������ � ������ ������ Next
		var nextButtonUrl = rpgDetails + "?" + "avatarImage=" + imagePath;
		elementA.attr("href", nextButtonUrl); //� �������� �������� � ������ ����� �������� ��������
	}
	
	$( ".avatar img" ).click(function() {
		var currentAvatar = $(this).parent();
		selectCurrentAvatar(currentAvatar);
		
		var imagePath = $(this).attr("src");
		setNextButtonUrl (imagePath);
	});
});

	
	
	
	
	