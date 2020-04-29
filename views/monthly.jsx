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
    console.log(expList);
    // const userTweets = this.props.tweeteds.map(tweets => {
    //     return <li>{tweets.tweet}</li>
    // })
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
        </body>
      </html>
    );
  }
}

module.exports = Monthly;