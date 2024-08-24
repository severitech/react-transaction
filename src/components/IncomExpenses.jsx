import { UseGlogbalState } from "../context/GlobalState";

function IncomExpenses() {
  const {transactions} = UseGlogbalState()

  const amount = transactions.map(transaction => transaction.amount)
  
const icome = amount.filter(item => item >0).reduce((acc,item) => (acc += item ),0)
const expenses = amount.filter(item => item <0).reduce((acc,item) => (acc += item ),0) * -1

    return (
    <>
      <div className="flex justify-between my-2">
        <h4>Icome</h4>
        <p>{icome}</p>
      </div>
      <div className="flex justify-between my-2">
        <h4>Expenses</h4>
        <p>{expenses}</p>
      </div>
    </>
  );
}

export default IncomExpenses;
