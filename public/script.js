console.log('hello!')

registerButton = document.getElementById('register');
intAddButton = document.getElementById('addanother');
intLandingButton = document.getElementById('tolanding');
landingAddButton = document.getElementById('addNewExp');
landingMonthly = document.getElementById('monthlyBtn');
landingAddCat = document.getElementById('addNewCat');

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

const monthlyClicked = function(){
    console.log('clicked!!');
    window.location.replace("/monthly")
}

const addNewCatClicked = function(){
    console.log('clicked!!');
    window.location.replace("/newcat")
}

if(registerButton){
registerButton.addEventListener('click',buttonClicked);
}

if(intAddButton){
intAddButton.addEventListener('click', addClicked);
};

if(intLandingButton){
intLandingButton.addEventListener('click', landingClicked);
}

if(landingAddButton){
landingAddButton.addEventListener('click', addClicked);
};

if(landingMonthly){
landingMonthly.addEventListener('click', monthlyClicked);
};

if(landingAddCat){
landingAddCat.addEventListener('click', addNewCatClicked);
};