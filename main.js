let container = document.querySelector("#container");
console.log("container has been defined");

let sideLengthButton = document.querySelector("#sideLengthButton");
console.log("sideLengthButton has been defined");

let clearButton = document.querySelector("#clearButton");
console.log("clearButton has been defined");

let sideLength = 16;
let alpha = 0.1;

function drawSquares() {

    container.innerHTML="";
    for (let i=0; i<(sideLength**2); i++) {

        let isClicked = false;
        let square = document.createElement("div");
        square.classList.add("square");

        square.style.width = `${100/sideLength}%`;
        square.style.height = `${100/sideLength}%`;

        container.appendChild(square);
        console.log(`Square no. ${i} has been created`);

        square.addEventListener('click', () => {

            let red = document.querySelector("#red").value;
            let green = document.querySelector("#green").value;
            let blue = document.querySelector("#blue").value;
            
            alpha += 0.1;
            if (alpha > 1) {

                alpha = 0.1;

            }

            square.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${alpha })`;

            isClicked = true;


        });

        square.addEventListener("mouseenter", () => {
            if (!isClicked) {

                let red = document.querySelector("#red").value;       
                let green = document.querySelector("#green").value;
                let blue = document.querySelector("#blue").value;

                square.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, 0.5)`;
            }
        });

        square.addEventListener("mouseleave", () => {
            if (!isClicked) {
                
                square.style.backgroundColor = `#ffffff`;
            
            }
        });

        square.addEventListener("wheel", () => {

            if (isClicked) {

                square.style.backgroundColor = `#ffffff`

            }

        });

    }

}
drawSquares();

sideLengthButton.addEventListener("click", () => {

    sideLength = +prompt("How many squares should be on each side of the grid?");
    while (isNaN(sideLength) || sideLength < 1 || sideLength > 100) {

        sideLength = +prompt("Please enter a number that is between 1 and 100");

    }
    console.log(`The side length is ${sideLength}`);

    drawSquares();

});

clearButton.addEventListener("click", drawSquares);