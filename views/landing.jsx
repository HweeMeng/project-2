var React = require('react');

class Landing extends React.Component {
  render() {
    var name = this.props.name[0].user_id;
    console.log('info in jsx');
    console.log(name);
    return (
      <html>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"/>
      <link rel="stylesheet" type="text/css" href="style.css"/>
        <body>
        <div className='container'>
            <br></br>
            <div className='text-center'>
                <h1>Hello {name} welcome to Expense Tracker </h1>
                <p>What would you like to do today?</p>
            </div>
            <br></br>
            <br></br>
            <div className='text-center'>
                <h2>Add a new expense</h2>
                <button type='button' className='btn btn-primary' id="addNewExp">Add new!</button>
            </div>
            <div className='text-center'>
                <h2>Add a expense category</h2>
                <button type='button' className='btn btn-primary' id="addNewCat">Add new!</button>
            </div>
            <div className='text-center'>
                <h2>See my expenses!</h2>
                <button type='button' className='btn btn-primary' id="monthlyBtn">Monthly!</button>
                <button type='button' className='btn btn-primary' id="weeklyBtn">Weekly!</button>
            </div>
            <br></br>
            <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
            <script src="script.js"></script>
        </div>
        </body>
      </html>
    );
  }
}

module.exports = Landing;