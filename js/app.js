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


    for(let i = 0; i < size * size; i++) {
        square = document.createElement("div");
        square.setAttribute("data", i);
        square.classList.add(shuffledArray[i]);
        gamearea.appendChild(square);
        
        square.addEventListener("click", handleClick); 
        squares.push(square);
        
    }
}
    
    function handleClick(e) {
        let current = e.target;
        if(current.classList.contains("bomb"))
        gameOver = true;
        else {
            e.target.classList.add("checked");
            let currentId = Number(current.getAttribute("data"));
            
            let isLeft = currentId%size === 0 ? true : false;
            let isTop = currentId < size ? true : false;
            let isBottom = currentId >= ((size * size) - size);
            let isRight = currentId % size === 9 ? true : false;
            

            if(isLeft && isTop) {
                let total = 0;
                console.log("currentId", currentId)
                let pos1 = currentId + 1;
                let pos2 = currentId + size;
                let pos3 = currentId + size + 1;
                if(squares[pos1].classList.contains("bomb"))
                total++;
                if(squares[pos2].classList.contains("bomb"))
                total++;
                if(squares[pos3].classList.contains("bomb"))
                total++;
                current.innerHTML = total;

            }
            else if(isLeft && !isTop && !isBottom) {
                let total = 0;

                console.log("currentId", currentId)
                let pos1 = currentId - size;
                let pos2 = currentId - size + 1;
                let pos3 = currentId + 1;
                let pos4 = currentId + size;
                let pos5 = currentId + size + 1;
                console.log("isLEft")
                console.log("isbottom", isBottom)
                if(squares[pos1].classList.contains("bomb"))
                total++;
                if(squares[pos2].classList.contains("bomb"))
                total++;
                if(squares[pos3].classList.contains("bomb"))
                total++;
                if(squares[pos4].classList.contains("bomb"))
                total++;
                if(squares[pos5].classList.contains("bomb"))
                total++;
                console.log("total", total)
                current.innerHTML = total;

            }
            else if(isLeft && isBottom) {
                let total = 0;

                console.log("currentId", currentId)
                let pos1 = currentId + 1;
                let pos2 = currentId - size;
                let pos3 = currentId - size + 1;
                if(squares[pos1].classList.contains("bomb"))
                total++;
                if(squares[pos2].classList.contains("bomb"))
                total++;
                if(squares[pos3].classList.contains("bomb"))
                total++;
                console.log("total", total)
                current.innerHTML = total;


            }
            else if(isRight && isTop) {
                let total = 0;

                console.log("currentId", currentId)
                let pos1 = currentId - 1;
                let pos2 = currentId + size;
                let pos3 = currentId + size - 1;
                if(squares[pos1].classList.contains("bomb"))
                total++;
                if(squares[pos2].classList.contains("bomb"))
                total++;
                if(squares[pos3].classList.contains("bomb"))
                total++;
                console.log("total", total)
                current.innerHTML = total;


            }
            else if(isRight && !isTop && !isBottom) {
                let total = 0;

                console.log("currentId", currentId)
                let pos1 = currentId - size;
                let pos2 = currentId - size - 1;
                let pos3 = currentId - 1;
                let pos4 = currentId + size;
                let pos5 = currentId + size - 1;
                console.log("isLEft")
                console.log("isbottom", isBottom)
                if(squares[pos1].classList.contains("bomb"))
                total++;
                if(squares[pos2].classList.contains("bomb"))
                total++;
                if(squares[pos3].classList.contains("bomb"))
                total++;
                if(squares[pos4].classList.contains("bomb"))
                total++;
                if(squares[pos5].classList.contains("bomb"))
                total++;
                console.log("total", total)
                current.innerHTML = total;

            }
            else if(isRight && isBottom) {
                let total = 0;

                console.log("currentId", currentId)
                let pos1 = currentId - 1;
                let pos2 = currentId - size;
                let pos3 = currentId - size - 1;
                if(squares[pos1].classList.contains("bomb"))
                total++;
                if(squares[pos2].classList.contains("bomb"))
                total++;
                if(squares[pos3].classList.contains("bomb"))
                total++;
                console.log("total", total)
                current.innerHTML = total;


            }

            else if(isTop && !isLeft && !isRight) {
                let total = 0;

                console.log("currentId", currentId)
                let pos1 = currentId - 1;
                let pos2 = currentId + 1;
                let pos3 = currentId + size;
                let pos4 = currentId + size - 1;
                let pos5 = currentId + size + 1;
                console.log("isLEft")
                console.log("isbottom", isBottom)
                if(squares[pos1].classList.contains("bomb"))
                total++;
                if(squares[pos2].classList.contains("bomb"))
                total++;
                if(squares[pos3].classList.contains("bomb"))
                total++;
                if(squares[pos4].classList.contains("bomb"))
                total++;
                if(squares[pos5].classList.contains("bomb"))
                total++;
                console.log("total", total)
                current.innerHTML = total;

            }

            else if(isBottom && !isLeft && !isRight) {
                console.log("currentId", currentId)
                let pos1 = currentId - 1;
                let pos2 = currentId + 1;
                let pos3 = currentId - size;
                let pos4 = currentId - size - 1;
                let pos5 = currentId - size + 1;
                console.log("isLEft")
                console.log("isbottom", isBottom)
                if(squares[pos1].classList.contains("bomb"))
                total++;
                if(squares[pos2].classList.contains("bomb"))
                total++;
                if(squares[pos3].classList.contains("bomb"))
                total++;
                if(squares[pos4].classList.contains("bomb"))
                total++;
                if(squares[pos5].classList.contains("bomb"))
                total++;
                console.log("total", total)
                current.innerHTML = total;

            }
            else {
                console.log("currentId", currentId)
                let total = 0;
                let pos1 = currentId - 1;
                let pos2 = currentId + 1;
                let pos3 = currentId - size;
                let pos4 = currentId - size - 1;
                let pos5 = currentId - size + 1;
                let pos6 = currentId + size;
                let pos7 = currentId + size - 1;
                let pos8 = currentId + size + 1;
                console.log("isLEft")
                console.log("isbottom", isBottom)
                if(squares[pos1].classList.contains("bomb"))
                total++;
                if(squares[pos2].classList.contains("bomb"))
                total++;
                if(squares[pos3].classList.contains("bomb"))
                total++;
                if(squares[pos4].classList.contains("bomb"))
                total++;
                if(squares[pos5].classList.contains("bomb"))
                total++;
                if(squares[pos6].classList.contains("bomb"))
                total++;
                if(squares[pos7].classList.contains("bomb"))
                total++;
                if(squares[pos8].classList.contains("bomb"))
                total++;
                console.log("total", total)
                current.innerHTML = total;
            }

        }


    } 
 




createBoard();
