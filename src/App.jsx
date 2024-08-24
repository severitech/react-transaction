import { GlobalProvider } from "./context/GlobalState";
import Balance from "./components/Balance";
import TransactionForm from "./components/transaction/TransactionForm";
import IncomExpenses from "./components/IncomExpenses";
import ExpenseChat from "./components/ExpensesChat";
import Modal from "./components/Modal";

function App() {
  return (
    <GlobalProvider>
      <div className="bg-zinc-800 text-white h-screen flex justify-center items-center">
        <div className="container mx-auto w-full md:w-3/6">
          <div className="bg-zinc-700 p-10 rounded-lg flex flex-col md:flex-row gap-2">
            <section className="w-full md:w-1/2">
              <h1 className="font-bold text-4xl">Expense Tracker</h1>
              <Balance />
              <IncomExpenses />
              <TransactionForm />
              <Modal />
            </section>
            <section className="w-full md:w-1/2">
              <ExpenseChat />
            </section>
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
