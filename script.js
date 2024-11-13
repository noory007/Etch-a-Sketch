let color = "black";
let click = false;

document.addEventListener("DOMContentLoaded", function () {
        createBoard(16);
        document.querySelector("body").addEventListener("click", function(e){
            if(e.target.tagName != "BUTTON"){
                click = !click;
                let draw = document.querySelector("#draw");
                if(click){
                    draw.innerHTML = "Now You Can Draw";
                }
                else{
                    draw.innerHTML = "You're Not Allowed To Draw"
                }
            }
    })


let btn_popup = document.querySelector("#popup");
    btn_popup.addEventListener("click", function(){
        let size = getSize();
        createBoard(size);
    })

})




function createBoard(size) {
        let boardcontainer = document.querySelector("#boardcontainer");
        boardcontainer.innerHTML = "";
    
        boardcontainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        boardcontainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
        let numDivs = size * size;
    
        for (let i = 0; i < numDivs; i++) {
            let div = document.createElement("div");
            div.addEventListener("mouseover", colorDiv);
            boardcontainer.insertAdjacentElement("beforeend", div);
        }
    }

    function resetBoard() {
        let divs = document.querySelectorAll("#boardcontainer div");
        divs.forEach((div) => div.style.backgroundColor = "white");
    }





function getSize(){
    let input = prompt("what will be the size of the board?");
    let message = document.querySelector("#message");
    
    if(input == ""){
        message.innerHTML = "Please provide a number";
       
    }
    else if (input < 0 || input > 100){
        message.innerHTML = "Provide a number between 1 and 100";
       
    }
    else{
        message.innerHTML = "Now you play!";
        return input;
       
    }
}

function colorDiv(){
    if(click){
        if(color == "random"){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
        }
        else{
        this.style.backgroundColor = 'black'
        }
    }

}

function setColor(colorChoice){
     color = colorChoice;
}

