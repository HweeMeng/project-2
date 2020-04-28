/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */

var sha256 = require('js-sha256');

module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let getAll = (userTableId, callback) => {

    let query = 'SELECT * FROM tweets INNER JOIN users ON (tweets.users_id = users.id) WHERE tweets.users_id = $1';
    let values = [userTableId];
    dbPoolInstance.query(query, values, (error, queryResult) => {
        console.log('*******');
        console.log(queryResult.rows.length);
      if( error ){

        // invoke callback function with results after query has executed
        callback(error, null);

      }else{

        // invoke callback function with results after query has executed

        if( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows);
          console.log('console logging request.rows');
          console.log(queryResult.rows);

        }else{
          callback(null, null);

        }
      }
    });
  };

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

  return {
    getAll: getAll,
    register: register,
  };
};