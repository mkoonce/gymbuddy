$(document).ready(function(){
    initializePage();
});

function initializePage() {
	$(".safety").click(sendSafety);
	$(".howto").click(sendHowto);
	$(".beginner").click(sendBeginner);
	$(".intermediate").click(sendIntermediate);
	$(".advanced").click(sendAdvanced);
}

function sendSafety(e){
	e.preventDefault();
	ga('send', 'event', 'workoutsafety', 'click');
}

function sendHowto(e){
	e.preventDefault();
	ga('send', 'event', 'workouthowto', 'click');
}

function sendBeginner(e){
	e.preventDefault();
	ga('send', 'event', 'workoutbeginner', 'click');
}

function sendIntermediate(e){
	e.preventDefault();
	ga('send', 'event', 'workoutintermediate', 'click');
}

function sendAdvanced(e){
	e.preventDefault();
	ga('send', 'event', 'workoutadvanced', 'click');
}