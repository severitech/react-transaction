import {VictoryPie, VictoryLabel} from 'victory'
import { UseGlogbalState } from '../context/GlobalState'


function ExpenseChat() {

const {transactions}= UseGlogbalState()

const totalIcome = transactions.filter(transaction => transaction.amount >0 ).reduce((acc, transaction)=> (acc += transaction.amount),0);

const totalExpenses = transactions.filter(transaction => transaction.amount <0 ).reduce((acc, transaction)=> (acc += transaction.amount),0) * -1;


  return (
    <VictoryPie
    colorScale={["#e74c3c", "#2ecc71"]}
  data={[
    { x: "Expenses", y: totalExpenses },
    { x: "Incomes", y: totalIcome-totalExpenses }
  ]}
  animate={{
    duration: 200
  }}
  labels={({datum})=> 
    datum.y}
  labelComponent={<VictoryLabel 
    angle={45} style={{
        fill: "white"
    }}/>
  }
/>
  )
}

export default ExpenseChat