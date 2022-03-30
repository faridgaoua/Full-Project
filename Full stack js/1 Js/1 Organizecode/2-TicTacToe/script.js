/*var divs= document.querySelector('#board')
var winmess= document.querySelector('.winning-message')
let res = [];
let win = /XXX......|...XXX...|......XXX|X..X..X..|.X..X..X.|..X..X..X|..X.X.X..|X...X...X/;
let lose = /OOO......|...OOO...|......OOO|O..O..O..|.O..O..O.|..O..O..O|..O.O.O..|O...O...O/;

divs.addEventListener('click', (e) => {
 player(e);
 computer(e);
 winner();
})
function player(e) {
	 if (e.target.classList.contains('cell')) {
	 e.target.innerText="X";
};
}
function computer(e) {
	
divs.children.item(Math.floor(Math.random() * 9)).innerHTML="O"

}
function winner() {
        res=[];
	for (let i = 0; i < divs.children.length; i++) {
	 divs.children.item(i).innerText=== "" ? res += "V" : res += divs.children.item(i).innerText
}
	if (win.test(res)){
		winmess.style.display = "inline-block"
		winmess.innerHTML = "You Win"
	} else if (lose.test(res)) {
		winmess.style.display = "inline-block"
		winmess.innerHTML = "You Lose"
	} 
	 if (res.includes("V")===false) { 
	        winmess.style.display = "inline-block"
		winmess.innerHTML = "Draw"}
}
*/

const gameBoard= (()=>{
	var divs= document.querySelector('#board')
	arrBoard=['o','x','o','x','o','x','o','x','o'];
	const fillBoard = () =>{
		for (const [index,div] of arrBoard.entries()) {
			divs.children.item(index).innerText= div;
	};
	  }; 
	  return {fillBoard};
})();
gameBoard.fillBoard();