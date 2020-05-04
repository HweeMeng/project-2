var React = require("react");

class Monthly extends React.Component {
  render() {
    console.log('info are passed into jsx');
    const userName = this.props.expense[0].name;
    const expList = this.props.expense.map(expensesx => {
        return <li>
                    <p>Amount: {expensesx.amount}
                    <br></br>
                        Spending: {expensesx.spending}
                    <br></br>
                        Category ID: {expensesx.category_id}
                    </p>
                </li>
    });

    const total = this.props.expense.reduce((totalSum, currentValue) =>{
        console.log(currentValue.amount)
        return totalSum + parseInt(currentValue.amount)
    },0)
    return (
      <html>
        <head />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"/>
        <link rel="stylesheet" type="text/css" href="style.css"/>
        <body>
            <div className = "container text-center">
                <div>
                    <h1>Hi {userName}, below is your expenses for this month!:</h1>
                </div>
                <div>
                    <ol>
                        {expList}
                    </ol>
                </div>
                <div>
                    <p>This month's total: {total}</p>
                </div>
                <button type='button' className='btn btn-primary' id="tolanding">Back to landing page.</button>
            </div>
        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
        <script src="script.js"></script>
        </body>
      </html>
    );
  }
}

module.exports = Monthly;