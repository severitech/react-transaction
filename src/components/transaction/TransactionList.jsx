import { UseGlogbalState } from "../../context/GlobalState";
import TransactionItem from "./TransactionItem";
function TransactionList() {
  const { transactions } = UseGlogbalState();
  return (
    <>
      <h3 className="text-slate-300 text-xl font-bold w-full mb-4">History</h3>
      <div className="w-full p-4 max-h-[60vh] overflow-y-auto">
        <ul className="space-y-2">
          {transactions.map((transaction) => (
            <TransactionItem transaction={transaction} key={transaction.id} />
          ))}
        </ul>
      </div>
    </>
  );
}
export default TransactionList;
