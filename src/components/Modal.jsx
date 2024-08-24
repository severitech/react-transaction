import { useState } from "react";
import TransactionList from "../components/transaction/TransactionList";
function Modal() {
  const [isopen, setIsopen] = useState(false);

  return (
    <>
      <button
        className=" bg-indigo-700 text-white rounded-lg px-3 py-2 block mb-2 hover:bg-indigo-500 w-full mt-auto"
        onClick={() => setIsopen(true)}
      >
        View Transaction
      </button>
      {isopen && (
        <div className="bg-slate-800 fixed bg-opacity-30 inset-0 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-slate-600 rounded-lg flex flex-col justify-center items-center gap-5 p-5">
            <TransactionList />
            <button
              className="bg-blue-800 text-white hover:bg-blue-600 rounded-lg m-5 px-5"
              onClick={() => setIsopen(false)}
            >
              Close Modal
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
