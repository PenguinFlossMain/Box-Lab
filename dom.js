document.addEventListener('DOMContentLoaded', function(){
//define the button and container
let container = document.createElement('container')
let boxButton = document.createElement('button')
let buttonText = document.createTextNode('Add Box')
//append accordingly
document.body.appendChild(boxButton)
document.body.appendChild(container)
boxButton.appendChild(buttonText)
//add some classes
container.className = 'container'
boxButton.className = 'button'
//now click thing
boxButton.addEventListener('click', function(){
    let blackBox = document.createElement('div');
    blackBox.className = 'blackBox'
    container.appendChild(blackBox)

    // assign ID to new square as number of squares at time of button click
    let squares = document.getElementsByClassName('blackBox');
    blackBox.id = squares.length - 1;

    blackBox.addEventListener('mouseover', showID);
    blackBox.addEventListener('mouseout', unshowID);
    blackBox.addEventListener('click', changeColor);
    blackBox.addEventListener('dblclick', onDoubleClick);
})
//display text content of square when mouseover
function showID(e) {
    e.target.textContent = e.target.id;
}

//remove text content when mouse out
function unshowID(e) {
    e.target.textContent = '';
}

// single click -change of the color of the 'square' div to a random color
function changeColor(e) {
        let red = Math.floor(Math.random(.2,1) * 255);
        let blue = Math.floor(Math.random(.2,1) * 255);
        let green = Math.floor(Math.random(.2,1) * 255);
        e.target.style.backgroundColor = `rgb(${red},${green},${blue})`;
}

// double click - remove the previous square or next square depending on whether the ID value of the square div is odd or even
function onDoubleClick(e) {
    if (parseInt(e.target.id) % 2 === 0) {
        if (e.target.nextSibling === null) {
            alert('There is no square after this one.');
        }   else {
        e.target.nextSibling.outerHTML = '';
        }
    } else if (parseInt(e.target.id) % 2 === 1) {
        if (e.target.previousSibling === null) {
            alert('There is no square before this one.');
        }   else {
        e.target.previousSibling.outerHTML = '';
        }
    } 
}

})