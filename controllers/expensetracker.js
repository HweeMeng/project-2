const sha256 = require('js-sha256');

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


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: indexControllerCallback,
  };

}