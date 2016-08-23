$( document ).ready(function() {
    
	//здесь писать
	var first; //создание коробочки с названием
	
	first = 4; //слева всегда название коробочки, куда положим результат; справа какое-то выражение, которое нужно посчитать
	
	Say(first);
	
	var second = first * 3;
	
	Say(second);
	
	
	var answer = Add(first, second);
});

function Say(MyLittlePONY){//var message;
	alert (MyLittlePONY + 10);
}




function Add(one, two){//var message;
	return one + two;
}














/* ************************************ */



	var first; //создание коробочки с названием
	
	first = 2; //слева всегда название коробочки, куда положим результат; справа какое-то выражение, которое нужно посчитать
	
	var lie = first + 10;// Say(first);
	alert (lie);
	
	var second = first * 3;
	
	//Say(second);
	var lie = second + 10;
	alert (lie);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	