console.log('hello!')

registerButton = document.getElementById('register');
intAddButton = document.getElementById('addanother');
intLandingButton = document.getElementById('tolanding');
landingAddButton = document.getElementById('addNewExp');
landingMonthly = document.getElementById('monthlyBtn');
landingWeekly = document.getElementById('weeklyBtn');
landingAddCat = document.getElementById('addNewCat');
lastMonthbtn = document.getElementById('lastMonthlyBtn');

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

const weeklyClicked = function (){
    console.log('clicked!!');
    window.location.replace("/weekly")
}

const addNewCatClicked = function(){
    console.log('clicked!!');
    window.location.replace("/newcat")
}

const lastmonthlyClicked = function(){
    console.log('clicked!!');
    window.location.replace("/lastmonth")
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

if(landingWeekly){
landingWeekly.addEventListener('click',weeklyClicked);
}

if(lastMonthbtn){
lastMonthbtn.addEventListener('click',lastmonthlyClicked);
}