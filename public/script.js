console.log('hello!')

registerButton = document.getElementById('register');

const buttonClicked = function(){
    console.log('clicked!!');
    window.location.replace("/register")
}

registerButton.addEventListener('click',buttonClicked);