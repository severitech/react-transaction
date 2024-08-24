import { UseGlogbalState } from "../../context/GlobalState";

export function TransactionItem({ transaction }) {
  const { deleteTransaction } = UseGlogbalState();
  return (
    <li className=" bg-zinc-600 text-white px-2 py-1 rounded-lg mb-2 w-full flex flex-row justify-between items-center">
      <p className="text-sm break-words">{transaction.description}</p>
      <div>
        <span className="px-1 break-words">{transaction.date} </span>
        <span className="px-1 break-words">Bs. {transaction.amount} </span>

        <button
          onClick={() => {
            deleteTransaction(transaction.id);
          }}
          className="px-2 bg-red-800 rounded-3xl hover:bg-red-600"
        >
          X
        </button>
      </div>
    </li>
  );
}

export default TransactionItem;
