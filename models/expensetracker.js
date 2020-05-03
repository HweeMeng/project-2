/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */

var sha256 = require('js-sha256');

module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

    let register = (enteredUserId, enteredPassword,callback) => {
        let query = 'INSERT INTO users (user_id, password) VALUES ($1,$2) RETURNING *';
        const values = [enteredUserId, enteredPassword];
        dbPoolInstance.query(query, values, (error, queryResult) => {
            if( error ){

                // invoke callback function with results after query has executed
                callback(error, null);

                }else{

                    if(queryResult.rows.length > 0){
                        callback(null, [queryResult.rows[0].id]);

                    }else{
                  // response.redirect('/')
                    callback(null, null);
                    }
                }
        });
    };

    let login = (enteredUserId, enteredPassword,callback) => {
        let query = 'SELECT * FROM users WHERE user_id = $1';
        const values = [enteredUserId];
        dbPoolInstance.query(query, values, (error, queryResult) => {
            if( error ){

                // invoke callback function with results after query has executed
                callback(error, null);

                }else{

                    if(queryResult.rows.length > 0){
                        callback(null, [queryResult.rows[0].password,queryResult.rows[0].id]);

                    }else{
                  // response.redirect('/')
                    callback(null, null);
                    console.log('You have entered the wrong user name!');
                    }
                }
        });
    };

    let landing = (usersId, callback) => {
        let query = 'SELECT user_id FROM users WHERE id = $1';
        const values = [usersId];
        dbPoolInstance.query(query, values, (error, queryResult) => {
            if( error ){

                // invoke callback function with results after query has executed
                callback(error, null);

                }else{

                    if(queryResult.rows.length > 0){
                        callback(null, [queryResult.rows[0]]);

                    }else{
                  // response.redirect('/')
                    callback(null, null);
                    console.log('You have entered the wrong user name!');
                    }
                }
        });
    };

    let addPage = (usersId, callback) => {
        let query = 'SELECT category.id, category.category, users.user_id AS name FROM category INNER JOIN users ON (users.id = category.users_id) WHERE users.id =$1';
        const values = [usersId];
        dbPoolInstance.query(query, values, (error, queryResult) => {
            if( error ){

                // invoke callback function with results after query has executed
                callback(error, null);

                }else{

                    if(queryResult.rows.length > 0){
                        callback(null, queryResult.rows);

                    }else{
                  // response.redirect('/')
                    callback(null, null);
                    console.log('You have entered the wrong user name!');
                    }
                }
        });
    };

    let add = ( usersId, amount, expenseText, callback) => {
        let query = 'INSERT INTO expenses (users_id, amount, spending) VALUES ($1,$2,$3) RETURNING *';
        const values = [usersId, amount, expenseText];
        dbPoolInstance.query(query, values, (error, queryResult) => {
            if( error ){

                // invoke callback function with results after query has executed
                callback(error, null);

                }else{

                    if(queryResult.rows.length > 0){
                        callback(null, [queryResult.rows[0].amount, queryResult.rows[0].spending]);

                    }else{
                  // response.redirect('/')
                    callback(null, null);
                    }
                }
        });
    };

    let monthly = (usersId, callback) => {
        let query = 'SELECT expenses.id, expenses.amount, expenses.spending, expenses.category_id, users.user_id AS name FROM expenses INNER JOIN users ON (users.id = expenses.users_id) WHERE users.id = $1';
        const values = [usersId];
        dbPoolInstance.query(query, values, (error, queryResult) => {
            if( error ){

                // invoke callback function with results after query has executed
                callback(error, null);

                }else{

                    if(queryResult.rows.length > 0){
                        callback(null, queryResult.rows);

                    }else{
                  // response.redirect('/')
                    callback(null, null);
                    console.log('You have entered the wrong user name!');
                    }
                }
        });
    };

    let catPage = (usersId, callback) => {
        let query = 'SELECT category.id, category.category, users.user_id AS name FROM category INNER JOIN users ON (users.id = category.users_id) WHERE users.id =$1';
        const values = [usersId];
        dbPoolInstance.query(query, values, (error, queryResult) => {
            if( error ){

                // invoke callback function with results after query has executed
                callback(error, null);

                }else{

                    if(queryResult.rows.length > 0){
                        callback(null, queryResult.rows);

                    }else{
                  // response.redirect('/')
                    callback(null, null);
                    console.log('You have entered the wrong user name!');
                    }
                }
        });
    };

  return {
    register: register,
    login: login,
    landing: landing,
    addPage: addPage,
    add: add,
    monthly: monthly,
    catPage: catPage
  };
};