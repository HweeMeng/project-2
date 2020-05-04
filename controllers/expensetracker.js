const sha256 = require('js-sha256');

const SALT = "Awesome";



module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

    let indexControllerCallback = (request, response) => {
        if (request.cookies['userId']){
            response.redirect('/landing');
        }else{
        response.render('home');
        }
    };

    let registerControllerCallback = (request, response) => {
        response.render('register');
    };

    let registerFormControllerCallback = (request, response) => {
        let enteredUserId = request.body.userId;
        let enteredPassword = sha256(request.body.password);
        var userId;
        console.log('===============entered user name===============');
        console.log(enteredUserId);
        console.log('===============entered parsed password===============');
        console.log(enteredPassword);
        db.expensetracker.register(enteredUserId,enteredPassword,(error, registerUser) => {
            response.cookie('userId', registerUser[0]);
            response.cookie('loggedin', true);
            response.redirect('/regcat');
        });
    };

    let loginControllerCallback = (request, response) => {
        let enteredUserId = request.body.userId;
        let enteredPassword = sha256(request.body.password);
        console.log('===============entered user name===============');
        console.log(enteredUserId);
        console.log('===============entered parsed password===============');
        console.log(enteredPassword);
        db.expensetracker.login(enteredUserId,enteredPassword,(error, userLogin) => {
                console.log('********see here!!! ********')
                console.log(userLogin);
                if (userLogin[0] === enteredPassword) {

                response.cookie('userId', userLogin[1]);
                response.cookie('loggedin', true);
                response.redirect('/landing');

                }else{
                    response.send('please enter correct password')
                }
        });
    };

    let landingControllerCallback = (request, response) => {
        var isLogged = request.cookies['loggedin'];
        var usersId = request.cookies['userId'];
        db.expensetracker.landing(usersId,(error, user) => {
            //user[0] is user's name
            if(isLogged === 'true'){
                console.log('********see here!!! ********')
                console.log(user);
                response.render('landing',{name: user});
            }else{
                response.redirect('/');
            }
        });
    };

    let addPageControllerCallback = (request, response) => {
        var isLogged = request.cookies['loggedin'];
        var usersId = request.cookies['userId'];
        db.expensetracker.addPage(usersId,(error, user) => {
            //user[0] is user's name
            if(isLogged === 'true'){
                console.log('********see here!!! ********')
                console.log(user);
                response.render('add',{name: user});
            }else{
                response.redirect('/');
            }
        });
    };

    let addControllerCallback = (request, response) => {
        var isLogged = request.cookies['loggedin'];
        var usersId = request.cookies['userId'];
        var amount = request.body.amount;
        var date = new Date();
        var month = parseInt(date.getMonth()) + 1;
        var day = new Date();
        var dayNum = parseInt(day.getDate());
        var expenseText = request.body.expense;
        var expenseCat = request.body.selectedCat;
        var expenseMode = request.body.mode;
        db.expensetracker.add(usersId,amount,expenseText,expenseCat,month,dayNum,(error, add) => {
            if(isLogged === 'true'){
                console.log('********see here!!! ********')
                console.log(add);
                response.render('int', {name: add});
            }else{
                response.redirect('/');
            }
      });
    };

    let monthlyControllerCallback = (request, response) => {
        var date = new Date();
        var month = parseInt(date.getMonth()) + 1;
        var isLogged = request.cookies['loggedin'];
        var usersId = request.cookies['userId'];
        db.expensetracker.monthly(usersId,month,(error, expense) => {
            //user[0] is user's name
            if(isLogged === 'true'){
                console.log('********see here!!! ********')
                console.log(expense);
                response.render('monthly',{expense: expense});
            }else{
                response.redirect('/');
            }
        });
    };

    let newCatPageControllerCallback = (request, response) => {
        var isLogged = request.cookies['loggedin'];
        var usersId = request.cookies['userId'];
        db.expensetracker.catPage(usersId,(error, categories) => {
            //user[0] is user's name
            if(isLogged === 'true'){
                    console.log('********see here!!! ********')
                    console.log(categories);
                    response.render('catpage',{category: categories});
            }else{
                    response.redirect('/');
            }
        });
    };

    let newCatControllerCallback = (request, response) => {
        var isLogged = request.cookies['loggedin'];
        var usersId = request.cookies['userId'];
        var newCatWord = request.body.newCategory;
        db.expensetracker.cat(usersId, newCatWord, (error, categories) => {
            //user[0] is user's name
            if(isLogged === 'true'){
                    console.log('********see here!!! ********')
                    console.log(categories);
                    response.render('landing',{name: categories});
            }else{
                    response.redirect('/');
            }
        });
    };

    let weeklyControllerCallback = (request, response) => {
        var date = new Date();
        var startDate = date.getDate() - date.getDay();
        var endDate = startDate + 6;
        console.log('*******contorller dates**********')
        console.log(startDate);
        console.log(endDate);
        var isLogged = request.cookies['loggedin'];
        var usersId = request.cookies['userId'];
        db.expensetracker.weekly(usersId,startDate,endDate,(error, expense) => {
            //user[0] is user's name
            if(isLogged === 'true'){
                console.log('********see here!!! ********')
                console.log(expense);
                response.render('weekly',{expense: expense});
            }else{
                response.redirect('/');
            }
        });
    };

    let regCatPageControllerCallback = (request, response) => {
        var isLogged = request.cookies['loggedin'];
        var usersId = request.cookies['userId'];
        db.expensetracker.regCatPage(usersId,(error, categories) => {
            //user[0] is user's name
            if(isLogged === 'true'){
                    console.log('********see here!!! ********')
                    console.log(categories);
                    response.render('blankcats',{category: categories});
            }else{
                    response.redirect('/');
            }
        });
    };

    let lastMonthlyControllerCallback = (request, response) => {
        var date = new Date();
        var lastmonth = parseInt(date.getMonth());
        var isLogged = request.cookies['loggedin'];
        var usersId = request.cookies['userId'];
        db.expensetracker.lastmonth(usersId,lastmonth,(error, expense) => {
            //user[0] is user's name
            if(isLogged === 'true'){
                console.log('********see here!!! ********')
                console.log(expense);
                response.render('lastmonthly',{expense: expense});
            }else{
                response.redirect('/');
            }
        });
    };
  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: indexControllerCallback,
    register: registerControllerCallback,
    registerForm: registerFormControllerCallback,
    login: loginControllerCallback,
    landing: landingControllerCallback,
    addPage: addPageControllerCallback,
    add: addControllerCallback,
    monthly: monthlyControllerCallback,
    newCatPage: newCatPageControllerCallback,
    newCat: newCatControllerCallback,
    weekly: weeklyControllerCallback,
    regcatPage: regCatPageControllerCallback,
    lastmonth:lastMonthlyControllerCallback
  };

}