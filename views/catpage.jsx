var React = require('react');

class Catpage extends React.Component {
  render() {
    var name = this.props.category[0].name;
    var existingCats = this.props.category.map(cats => {
        console.log(cats.category);
        return <p>{cats.id}.{cats.category}</p>
    })
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
                <h1>Hello {name}, Please enter a new Category: </h1>
            </div>
            <br></br>
            <br></br>
            <div className='text-center'>
                <h2>Enter a new category:</h2>
                <form action='/newcat' method="POST">
                    <p>New Category: <input name="newCategory"/>
                    </p>
                    <input className='btn btn-primary' type="submit" value="Add!!"></input>
                </form>
            </div>
            <div className='text-center'>
                <h3>Your Exisiting Categories</h3>
                    {existingCats}
                <button type='button' className='btn btn-primary' id="tolanding">Back to landing page.</button>
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

module.exports = Catpage;