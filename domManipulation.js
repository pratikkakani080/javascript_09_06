// getElementById()
// getElementsByClassName()
// getElementsByTagName()
// querySelector()

// const h1El = document.getElementById('h1')
// const h1El = document.getElementsByClassName('h1Element')
// const h1El = document.getElementsByTagName('h1')
// const h1El = document.querySelector('#h1')
// const h1El = document.querySelector('.h1Element')
const h1El = document.querySelector('h1')
// console.log(h1El);

function handleClick() {
    h1El[0].style.color = 'red'
    h1El[0].innerText = 'text is updated'
}

const para = document.createElement("p");
para.innerText = "This is a paragraph";
document.body.appendChild(para);