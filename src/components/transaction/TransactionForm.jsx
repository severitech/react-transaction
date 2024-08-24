import { useState, useRef } from "react";
import { UseGlogbalState } from "../../context/GlobalState";

function TransactionForm() {
  const { addTransactions } = UseGlogbalState();
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState();
  const inputRef = useRef(null);

  const onsubmit = (e) => {
    e.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    const now = new Date();
    const currentDateTime = `${now.getDate()}/${now.getMonth() + 1}`;
    // Verificar que los campos no estén vacíos
    if (description.trim() !== "" && amount !== "") {
      // Añadir la transacción
      addTransactions({
        id: window.crypto.randomUUID(),
        description,
        amount: +amount,
        date: currentDateTime,
      });

      // Limpiar los campos de entrada
      setAmount("");
      setDescription("");
      inputRef.current.focus();
    } else {
      alert("Campos vacíos");
      setAmount("");
    }
  };

  return (
    <form onSubmit={onsubmit}>
      <h2>Description</h2>
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter a Description"
        onChange={(e) => setDescription(e.target.value)}
        className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 h-full w-full"
        value={description}
      />
      <input
        value={amount}
        type="number"
        step="0.01"
        placeholder="0.00"
        onChange={(e) => {
          const value = parseFloat(e.target.value);
          if (value > 0) {
            setAmount(value);
          } else if (e.target.value === "") {
            setAmount("");
          }
        }}
        onKeyDown={(e) => {
          if (e.key === "-" || e.key === "e") {
            e.preventDefault();
          }
        }}
        className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 h-full w-full"
      />
      <div className="flex">
        <button
          
          className="bg-emerald-700 text-white rounded-lg px-3 py-2 block mb-2  hover:bg-emerald-500 w-full"
        >
          +
        </button>
        <button onClick={() => setAmount(amount * -1)}className="bg-red-700 text-white rounded-lg px-3 py-2 block mb-2  hover:bg-red-500 w-full">
          -
        </button>
      </div>
    </form>
  );
}

export default TransactionForm;
