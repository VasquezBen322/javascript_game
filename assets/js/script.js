//player object
let player = {
	character : $("#player"),
	playerPos : 0
};

// ai object
const ai = {
	character : $("#ai"),
	aiPos : 0
};

console.log(ai)

let playerPosition = 0;
let aiPosition = 0;

// move the player function
player.character.click(function(){
	console.log(this);
	$(this).animate({
		'left' : (playerPosition+=35)+'px'
	});
	console.log('this is the current value of player position: ' + playerPosition);
	player.playerPos = playerPosition
	console.log(player.playerPos);
	result()
});


const result = () => {
	if(player.playerPos >= 1000){
		// $('#winModal').modal('show');
		alert('you win');
		return true
	}
	if(ai.aiPos >= 1000){
		// $('#loseModal').modal('show');
		alert('you lose');
		return true
	}
};

aiMove = (speed) => {
	if(ai.aiPos < 1000){
		ai.character.animate({
			'left' : (aiPosition+=speed) + 'px'
		});
	}else{
		return true	
	}
	ai.aiPos = aiPosition
	result()

	if(ai.aiPos>= 1000 || player.playerPos>=1000){
		alert('end')
		return true
	}else{
		setTimeout(()=> aiMove(speed),500)	
	}
}

$('#start').click(function(){
	aiMove(15);
});

$(".btn").click(function(){
	if($(this).attr("id") == "btn1"){
		aiMove(20);
	}
	if($(this).attr("id") == "btn2"){
		aiMove(30);
	}
	if($(this).attr("id") == "btn3"){
		aiMove(50);
	}
});



// $('.tryYes').click(function(){
	// player.character.css('left',0);
	// ai.character.css('left',0);
	// playerPosition = 0;
	// aiPosition = 0;

// 	aiMove()
// 	$('#winModal').modal('hide');
// 	$('#loseModal').modal('hide');
// });

// $('.tryNo').click(function(){
// 	player.character.css('left',0);
// 	ai.character.css('left',0);
// 	playerPosition = 0;
// 	aiPosition = 0;
// 	$('#winModal').modal('hide');
// 	$('#loseModal').modal('hide');
// });

