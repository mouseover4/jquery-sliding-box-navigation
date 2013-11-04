$(function(){
	$(".details").hide();
	$(".details").click(disappear)
	$("#campus").hide();
	//a picture of the college appears when the 'view campus' link is clicked
	$("#educ").click(showImage)
	//when a user clicks on the image, it vanishes using the explode effect
	$("img").click(function () {
	  $(this).hide("explode", 1000);
	  });
	$(".show_hide").toggle(showDetails, hideDetails);
	showStyleSheet("default");
	$(".change_style").click(changeStyle);
});

function changeStyle()
{
	var sheetName = $(this).attr("rel");
	showStyleSheet(sheetName);
	return false;
}
function showStyleSheet(sheetName)
{
	$(".switch_style").prop("disabled", true);
	$("#" + sheetName).prop("disabled", false);
}

function showDetails()
{
	var selector = $(this).attr("href");
	$(selector).slideDown();
}
function hideDetails()
{
	var selector = $(this).attr("href");
	$(selector).slideUp();
} 

function disappear()
{
	$(".details").fadeOut(2000);
}

function showImage()
{
	$("img").fadeIn(1000);
}