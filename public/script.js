console.log('hello!')

registerButton = document.getElementById('register');tolanding
intAddButton = document,getElementById('addanother');
intLandingButton = document.getElementById('tolanding');


const buttonClicked = function(){
    console.log('clicked!!');
    window.location.replace("/register")
}

const addClicked = function(){
    console.log('clicked!!');
    window.location.replace("/add")
}

const landingClicked = function(){
    console.log('clicked!!');
    window.location.replace("/landing")
}

registerButton.addEventListener('click',buttonClicked);
intAddButton.addEventListener('click', addClicked);
intLandingButton.addEventListener('click', landingClicked)