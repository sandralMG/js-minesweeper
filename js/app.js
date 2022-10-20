const gamearea = document.querySelector(".gamearea");
let bombAmount = 20;
let size = 10;
let squares = [];
let gameOver = false;

function createBoard() {
    
    const bombsArray = Array(bombAmount).fill('bomb');
    const emptyArray = Array(size * size - bombAmount).fill('valid');
    const gameArray = emptyArray.concat(bombsArray);
    const shuffledArray = gameArray.sort(() => Math.random() -0.5)

    console.log("shuffled array", shuffledArray);


    for(let i = 0; i < size * size; i++) {
        square = document.createElement("div");
        square.innerHTML = i;
        square.setAttribute("id", i);
        square.classList.add(shuffledArray[i]);
        gamearea.appendChild(square);
        squares.push(square);
        square.addEventListener("click", function(e) {
            console.log("clicked");
        }); 
        
    }

    

 







    /* square.addEventListener('click', function(e) {
         let currentId = square.id;
         if(isGameOver) return;
         if(square.classList.contains('checked') || square.classList.contains('flagged')) return;
         if((square.classList.contains('bomb'))) {
            gameOver(square);
         } else {
             let total = square.getAttribute('data');
             square.classList.add('checked')
             if(total === 1) square.classList.add('one');
             if(total === 2) square.classList.add('two');
             if(total === 3) square.classList.add('three');
             if(total === 4) square.classList.add('four');
            square.innerHTML = total;
            return
         }
    }) */

}

createBoard();
console.log(squares);