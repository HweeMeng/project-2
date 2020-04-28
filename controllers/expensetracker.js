const sha256 = require('js-sha256');

const SALT = "Awesome";

module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

    let indexControllerCallback = (request, response) => {
        response.render('home');
//   var userTableId = request.cookies['userId'];
//   db.tweets.getAll(userTableId, (error, allTweets) => {
//   response.render('tweets/index', { tweeteds: allTweets });
// });
    };

    let registerControllerCallback = (request, response) => {
        response.render('register');
//   var userTableId = request.cookies['userId'];
//   db.tweets.getAll(userTableId, (error, allTweets) => {
//   response.render('tweets/index', { tweeteds: allTweets });
// });
    };

    let registerFormControllerCallback = (request, response) => {
        let enteredUserId = request.body.userId;
        let enteredPassword = sha256(request.body.password);
        console.log('===============entered user name===============');
        console.log(enteredUserId);
        console.log('===============entered parsed password===============');
        console.log(enteredPassword);
        db.expensetracker.register(enteredUserId,enteredPassword,(error, registerUser) => {
            response.cookie('loggedin', true);
            response.redirect('/');
        // response.render('/tweets/register', { registerUser });
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
    registerForm: registerFormControllerCallback
  };

}

    // app.get('/register', expenseControllerCallbacks.register);

    // app.post('/register', expenseControllerCallbacks.registerForm);