$('.button').on('click', function(){
	$('#canvas').html('');
	var array1= ["Black Panther","Black Widow","Captain America","Captain Marvel"];
 	$('#canvas').append('<div>'+_.shuffle(array1) + '</div>');
 });