// define global variables
let counter = 0;


// call main function cyclically
setInterval(main, 1000);


// main
function main() {
    showHideReturnTop();
    cycleNickname();
}


/**********************************************************************/
// event listeners

window.addEventListener("DOMContentLoaded", (event) => {
    const hamburger = document.querySelector(".hamburger");
    const hamMenu = document.querySelector(".slide");

    hamburger.addEventListener("click", () => {
        console.log("menu clicked!");
        hamburger.classList.toggle("active");
        hamMenu.classList.toggle("active");
    })
    
    document.querySelectorAll(".nav-links").forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active')
    }))
    
});


/**********************************************************************/
// functions

function showHideReturnTop() {
    // show and hide 'return to top' button
    window.addEventListener ("scroll", () => {
        if(scrollY) {
            console.log(scrollY);
            document.getElementById('return-button').style.opacity = "1";
        } else {
            document.getElementById('return-button').style.opacity = "0";
        }
    })
}

function cycleNickname() {
    // change nickname every T seconds
    let newText = '';
    
    switch(counter) {
        case 0:
            //easter egg case only shown ~1s after load
            newText = 'Look at that tongue!';
            break;
        case 1:
            newText = 'The Father of Relativity';
            break;
        case 2:
            newText = 'The Developer of Quantum Mechanics';
            break;
        case 3:
            newText = 'The Man who changed the World';
            break;
        case 4:
            newText = 'The Brain of the 20th Century';
            break;
        case 5:
            newText = 'The Master of the Universe';
            counter = 0;
            break;
        default:
            counter = 0;
    }

    document.getElementById('nickname').innerHTML = newText;
    counter++;
}