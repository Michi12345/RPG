$( document ).ready(function() {
    
	//����� ������
	var first; //�������� ��������� � ���������
	
	first = 4; //����� ������ �������� ���������, ���� ������� ���������; ������ �����-�� ���������, ������� ����� ���������
	
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



	var first; //�������� ��������� � ���������
	
	first = 2; //����� ������ �������� ���������, ���� ������� ���������; ������ �����-�� ���������, ������� ����� ���������
	
	var lie = first + 10;// Say(first);
	alert (lie);
	
	var second = first * 3;
	
	//Say(second);
	var lie = second + 10;
	alert (lie);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	