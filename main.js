let container = document.querySelector("#container");
console.log("container has been created");

for (let i=0; i<256; i++) {

    let square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
    console.log(`Square no. ${i} has been created`);

}