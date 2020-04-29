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
    let all = 0;
    let add = function(){
        all + parseInt(this.props.expense[0].amount);
    };
    add();
    console.log(all);
    // const totalSpend = this.props.expense.forEach(totalSpend => {
    //     console.log('in foreach');
    //     console.log(all);
    //     console.log(totalSpend.amount);
    //     all + parseInt(totalSpend.amount);
    // });
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
                <p>total: {all}</p>
            </div>
        </body>
      </html>
    );
  }
}

module.exports = Monthly;