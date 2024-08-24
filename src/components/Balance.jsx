import {UseGlogbalState} from '../context/GlobalState'
function Balance() {
  const {transactions} = UseGlogbalState()

  const amounts = transactions.map(transaction =>(transaction.amount))

  const total = amounts.reduce((acumulador, item) => (acumulador+=item),0)

  return (
  
    <div className="flex justify-between">
      <h3>Your Balance</h3>
        <h1 className='text-xl font-bold'>Bs. {total}</h1>
    </div>
  )
}

export default Balance