const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('.btn');
const clear = document.querySelector('.btn-clear');
const equal = document.querySelector('.btn-equal');

// Show on Screen
function display() {
    buttons.forEach(function(button) {
        button.addEventListener('click', (e) => {
            let value = e.target.dataset.num;
            screen.value += value;
        })
    })
}
display();

// Show result
function result() {
    equal.addEventListener('click', function(e) {
        if (screen.value === '') {
            screen.value = "";
        } else {
            screen.value = eval(screen.value);
        }
    })
}
result();

// Clear
function remove() {
    clear.addEventListener('click', function(e) {
        screen.value = "";
    })
}
remove();


// (function() {

//     let screen = document.querySelector('.screen');
//     let buttons = document.querySelectorAll('.btn');
//     let clear = document.querySelector('.btn-clear');
//     let equal = document.querySelector('.btn-equal');

//     buttons.forEach(function(button) {
//         button.addEventListener('click', function(e) {
//             let value = e.target.dataset.num;
//             screen.value += value;
//         })
//     })

//     equal.addEventListener('click', function(e) {
//         if (screen.value === '') {
//             screen.value = "";
//         } else {
//             screen.value = eval(screen.value);
//         }
//     })



// })();