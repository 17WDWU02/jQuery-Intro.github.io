$(document).ready(function(){

	$('#Click').click(function(){
		event.preventDefault();
		alert("You have clicked on the button.");
	});

	$('#DoubleClick').dblclick(function(){
		alert("You have double clicked on the button.");
	});

	$('#MouseEnter').mouseenter(function(){
		alert("You have entered this button.")
	});

	$('#MouseLeave').mouseleave(function(){
		alert("You have left this button.")
	});

	$('#Hover').hover(function(){
		$('#HoverExample').toggle();
	});

	$('#DefaultExample').click(function(){
		event.preventDefault();
	});

	$('#Show').click(function(){
		$('#HideShowExample').show();
	});

	$('#Hide').click(function(){
		$('#HideShowExample').hide();
	});

	$('#ShowSpeed').click(function(){
		$('#HideShowSpeedExample').show(2000);
	});

	$('#HideSpeed').click(function(){
		$('#HideShowSpeedExample').hide(2000);
	});

	$('#ToggleButton').click(function(){
		$('#ToggleExample').toggle();
	});

	$('#FadeIn').click(function(){
		$('#FadeExample').fadeIn();
	});

	$('#FadeOut').click(function(){
		$('#FadeExample').fadeOut();
	})


});