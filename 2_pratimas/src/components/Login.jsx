import { useState } from "react";

const Login = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState({});

  const errorChecker = () => {
    let errorObject = {};
    if (!email) errorObject.email = "Laukas privalomas";
    if (!password) errorObject.password = "Laukas privalomas";
    return errorObject;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errorObject = errorChecker();

    setError(errorObject);

    const hasErrors = Object.keys(errorObject).length !== 0;
    setIsLoggedIn(!hasErrors);
  };

  const handleLogOut = () => {
    setEmail("");
    setPassword("");
    setIsLoggedIn(false);
  };

  if (isLoggedIn) {
    return (
      <div>
        <h3>Sveiki {name}, malonu matyti :)</h3>
        <button onClick={handleLogOut}>Log Out</button>
      </div>
    );
  }

  return (
    <form name="login-form" onSubmit={handleSubmit}>
     <div style={{ marginBottom: 16 }}>
        <label htmlFor="name">Vardas</label>
        <input
          type="name"
          id="name"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div style={{ marginBottom: 16 }}>
        <label htmlFor="surname">Pavardė</label>
        <input
          type="surname"
          id="surname"
          name="surname"
          value={surname}
          onChange={(event) => setSurname(event.target.value)}
        />
      </div>
      <div style={{ marginBottom: 16 }}>
        <label htmlFor="email">El. paštas</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          autoComplete="email"
        />
        <p style={{ color: "red" }}>{error.email}</p>
      </div>
      <div style={{ marginBottom: 16 }}>
        <label htmlFor="email">Slaptažodis</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          autoComplete="password"
        />
        <p style={{ color: "red" }}>{error.password}</p>
      </div>
      <div style={{ marginBottom: 16 }}>
        <label htmlFor="age">Metai</label>
        <input
          type="age"
          id="age"
          name="age"
          value={age}
          onChange={(event) => setAge(event.target.value)}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;