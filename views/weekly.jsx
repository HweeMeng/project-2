var React = require("react");

class Weekly extends React.Component {
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
        <body>
            <div>
                <h1>Hi {userName}, below is your expense!:</h1>
            </div>
            <div>
                <ol>
                    {expList}
                </ol>
            </div>
            <div>
                <p>This week's total: {total}</p>
            </div>
        </body>
      </html>
    );
  }
}

module.exports = Weekly;