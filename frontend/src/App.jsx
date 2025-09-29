import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [payments, setPayments] = useState([]);
  const [userId, setUserId] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    fetchUsers();
    fetchPayments();
  }, []);

  const fetchUsers = async () => {
    const res = await axios.get("http://localhost:3000/api/auth/users");
    setUsers(res.data);
  };

  const registerUser = async () => {
    await axios.post("http://localhost:3000/api/auth/register", { name, email, password });
    fetchUsers();
  };

  const fetchPayments = async () => {
    const res = await axios.get("http://localhost:3000/api/payments");
    setPayments(res.data);
  };

  const createPayment = async () => {
    await axios.post("http://localhost:3000/api/payments/payment", { userId, amount });
    fetchPayments();
  };

  return (
    <div>
      <h2>Registro de Alumno</h2>
      <input placeholder="Nombre" value={name} onChange={e => setName(e.target.value)} />
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={registerUser}>Registrar</button>

      <h3>Alumnos</h3>
      <ul>{users.map(u => <li key={u.id}>{u.name} ({u.email})</li>)}</ul>

      <h2>Crear Pago</h2>
      <input placeholder="User ID" value={userId} onChange={e => setUserId(e.target.value)} />
      <input placeholder="Monto" value={amount} onChange={e => setAmount(e.target.value)} />
      <button onClick={createPayment}>Pagar</button>

      <h3>Pagos</h3>
      <ul>{payments.map(p => <li key={p.id}>User {p.userId}: ${p.amount}</li>)}</ul>
    </div>
  );
}

export default App;
