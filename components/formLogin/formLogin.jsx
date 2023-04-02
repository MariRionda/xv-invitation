"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { encryptName, Match } from "../authentication/authentication";
const data = require("../../public/utils/data.json");

const FormLogin = () => {
  const router = useRouter();

  const [code, setCode] = useState("");

  const name = "Moriah Zieme";
  const encryptedName = encryptName(name);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (Match(data.guests, code)) {
      window.sessionStorage.setItem("authenticated", true);
      router.push("/invitation");
      alert("ok");
    } else {
      alert("Código incorrecto");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Código:
          <input
            type="text"
            value={code}
            onChange={(event) => setCode(event.target.value)}
          />
        </label>
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default FormLogin;
