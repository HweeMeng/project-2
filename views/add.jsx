var React = require('react');

class Add extends React.Component {
  render() {
    var name = this.props.name[0].name;
    var catSelector = this.props.name.map(cats => {
        return <option value={cats.id}> {cats.category}</option>
    })
    console.log('info in jsx');
    return (
      <html>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"/>
      <link rel="stylesheet" type="text/css" href="style.css"/>
        <body>
        <div className='container'>
            <br></br>
            <div className='text-center'>
                <h1>Hello {name}, Please enter your expense details! </h1>
            </div>
            <br></br>
            <br></br>
            <div className='text-center'>
                <h2>Enter your details here for registration:</h2>
                <form action='/add' method="POST">
                    <p>
                        Expense Amount: <input name="amount" />
                    </p>
                    <p>
                        Expense name: <input name="expense"/>
                    </p>
                    <p> Category:
                        <select name = 'selectedCat'>
                            {catSelector}
                        </select>
                    </p>
                    <p>
                        Expense Mode: <input name="mode"/>
                    </p>
                    <input className='btn btn-primary' type="submit" value="Add!!"></input>
                </form>
            </div>
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

module.exports = Add;