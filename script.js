//Setting the variables to the html
const button = document.querySelector('button');
const pop_up_wrapper = document.querySelector('.pop-up-wrapper');
const closePop_up = document.querySelector('.close-pop-up');

//Add eventListerner to the button
button.addEventListener('click', e =>{
    pop_up_wrapper.style.display = 'block';
})

//add eventListener to the close Div
closePop_up.addEventListener('click', () =>{
    pop_up_wrapper.style.display = 'none';
})

//adding close to the wrapper
    pop_up_wrapper.addEventListener('click', () =>{
    pop_up_wrapper.style.display = 'none';
})