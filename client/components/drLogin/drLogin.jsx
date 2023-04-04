"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const DRLogin = () => {
  const router = useRouter();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (user==="DavidRionda" && password==="020719sergiomari") {
      window.sessionStorage.setItem("drauth", password);
      router.push("/newCollection");
      alert("ok");
    } else {
      alert("Acceso denegado");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Usuario:
          <input
            type="text"
            value={user}
            onChange={(event) => setUser(event.target.value)}
          />
        </label>
        <label>
          Contraseña:
          <input
            type="text"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default DRLogin;