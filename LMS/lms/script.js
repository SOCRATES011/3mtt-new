
// let user = document.getElementById('margarette')
// let response = prompt('what is your name')
// if (response == 'Socrates') {
//     response = 'Great African Inventor'
//  }
//  user.innerText = response

// let people = [5,4,7,'OMOYELE',false,[3,24],17]
// for(let i = 0; i<people.length; i++){
//     console.log(people[i]);
    
// }
// function nextgen(a) {
//     console.log(`Hello ${a}`)
//     console.log('This is Javascript');
// }
// nextgen('Socrates')
// nextgen('Zeenat')
// nextgen('Rodiah')
// const training=(c) => {
//     console.log(`Hello ${c}`)
//     console.log('This is arrow function');
    
// }
// training('               ')
// training('SOCRATES')
// let bottle = document.getElementById('margarette')
// bottle.innerText = 'user'
// bottle.style.color = 'yellow'
// bottle.style.fontSize = '5rem'
// bottle.classList.add('mouse')

// // let photo = document.getElementById('video')
// // photo.src = './assets/logo.png'
// // photo.alt = 'New alt tag'
// // photo.setAttribute('src', './assets/logo.png')
// // photo.setAttribute('alt','New alt tag')

// let body = document.body

// let newPTag = document.createElement('p') 
// newPTag.innerText = 'This is 3mtt software development class'
// newPTag.style.color = 'green'
// newPTag.style.backgroundColor = 'orange'
// newPTag.style.fontSize ='2rem'
// body.appendChild(newPTag)
// body.insertAdjacentElement('afterbegin', newPTag)

let newText = document.getElementsByClassName('a-message')
newText[0].innerText = 'Our updated text'

let imagesArray = ['./assets/sci01.jpg','./assets/sci02.jpg', './assets/sci03.jpg']
let pos = 0
let image = document.getElementById('gallery-image')
image.src = imagesArray[pos]

let ourImageText = document.getElementById('our-image')
// let prevBtn = document.getElementById('prev')
// let nextBtn = document.querySelector('#next')

// function nextImage(){
//     if ( pos == imagesArray.length - 1){
//         pos = 0
//     }
//     else{
//         pos++;
//     }
    
//     image.src = imagesArray[pos]

// }
// function prevImage(){
//     if (pos == 0) {
//        return
//     } else {
//         pos = 0;
//     }
//     image.src = imagesArray[pos]

// }
// prevBtn.addEventListener('click',prevImage)
// nextBtn.addEventListener('click',nextImage)

let allCircles = document.getElementsByClassName('circle')
setInterval ( () => {
    if (pos == imagesArray.length - 1){
        pos = 0;
    }
    else{
        pos++
    }
    image.src = imagesArray[pos]
     for (i = 0; i < allCircles.length; i++){
        allCircles[i].style.backgroundColor = '#fff' 
    }
    allCircles[pos].style.backgroundColor = 'red'
}, 3000)

function changeImage(a) {
    pos = a
    image.src = imagesArray[pos]
    for (i = 0; i < allCircles.length; i++){
        allCircles[i].style.backgroundColor = '#fff' 
    }
    allCircles[a].style.backgroundColor = 'red'
}

setTimeout(() => {ourImageText.style.visibility = 'hidden'},3000) 

let scrollBtn = document.querySelector('#scroll')
window.addEventListener( 'scroll', () => {
    if (window.scrollY > 150){
        scrollBtn.style.display = 'block'
    }
    else{
        scrollBtn.style.display = 'none'
    }
})

scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})


let advert = document.querySelector('.pop-parent')
let closeAdvertBtn = document.querySelector('#close-pop-up')

closeAdvertBtn.addEventListener('click', () => {advert.style.display = 'none'})
// if (window.screen.width < 700){
//     alert('for better user experience, use a bigger screen')
// }
let dropDown = document.querySelector('.drop-down')
let learningOption = document.querySelector('#learning-options')
let iconImage = document.querySelector('.arrow-icon')
dropDown.addEventListener('mouseenter', () => {learningOption.style.display = 'block'; iconImage.classList.add('arrow-icon-up')})
dropDown.addEventListener('mouseleave', () =>{learningOption.style.display = 'none'; iconImage.classList.remove('arrow-icon-up')}) 

let menuIcon = document.getElementById('menu')
let navRight = document.querySelector('.nav-right')
menuIcon.addEventListener('click', () =>{
    if (menuIcon.classList.contains('fa-x')) {
      navRight.classList.remove('nav-right2')
    menuIcon.classList.remove('fa-x')  
    }else{
        navRight.classList.add('nav-right2')
    menuIcon.classList.add('fa-x')
    }
    
})