/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/


var scores, activePlayer,roundScore ,gamePlaying;

var previousdice;
  var globalscores =prompt( "enter the win score ");
gamePlaying=true;

init();



document.querySelector('.btn-roll').addEventListener('click', function(){
	
	//1 random number 
	if(gamePlaying){
var	dice = Math.floor(Math.random()*6) +1 ;
	
		
	
	
	//2 display result
	var diceDom=document.querySelector('.dice');
	
	
	diceDom.style.display = 'block';
    
	diceDom.src = 'dice-'+ dice+ '.png';
	
	if(previousdice ===6 && dice===6){
		
		
		 scores[activePlayer]=0;
		document.querySelector('#score-'+activePlayer).textContent = '0';
		nextPlayer();
		
	} 
	
	//3 update the round score if the rolled number was not a 1
	else if(dice !== 1 ){
		
	       
		roundScore+=dice;
	document.querySelector('#current-'+activePlayer).textContent = roundScore;	
		
		
		}
	
	else{
		
		
		nextPlayer();
	}
	
	previousdice=dice; }
});



document.querySelector('.btn-hold').addEventListener('click', function (){
	
	//aad current score to global score
	if(gamePlaying){
	scores[activePlayer] += roundScore;
	
	//update user interface
	document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];
	//check if player won the game
	
	if(scores[activePlayer] >= globalscores){

		document.querySelector('#name-'+activePlayer).textContent = 'WINNER !!';
		document.querySelector('.dice').style.display = 'none';
       document.querySelector('.player-' +activePlayer +'-panel').classList.add('winner');
		document.querySelector('.player-' +activePlayer +'-panel').classList.remove('active');
		gamePlaying=false;
	}
	else{
		
		
	nextPlayer();
		
	}
	
	
	}
});

function nextPlayer(){
	
	activePlayer ===0 ? activePlayer = 1 : activePlayer = 0;
		
		roundScore = 0;
		document.getElementById('current-0').textContent = '0';
		document.getElementById('current-1').textContent = '0';
		document.querySelector('.player-0-panel').classList.toggle('active');
		
		document.querySelector('.player-1-panel').classList.toggle('active');
		
		//document.querySelector('.player-0-panel').classList.remove('active');
		//document.querySelector('.player-1-panel').classList.add('active');
		
		document.querySelector('.dice').style.display = 'none';
			
}


document.querySelector('.btn-new').addEventListener('click', init);


function init(){
	
	
	scores = [0,0] ;
roundScore = 0;
activePlayer = 0;
	
	document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';

document.getElementById('score-1').textContent = '0';

document.getElementById('current-0').textContent = '0';

document.getElementById('current-1').textContent = '0';
document.querySelector('#name-0').textContent = 'PLAYER 1';
	document.querySelector('#name-1').textContent = 'PLAYER 2';
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');
	
	
}

