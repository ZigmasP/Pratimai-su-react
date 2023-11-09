import { useState } from "react";

const Input = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");
  const [favourite, setFavourite] = useState("");

  return (
    <div>
      <h3>
        Vardas {name} {" "}
      </h3>
      <h3>
        Pavardė {surname} {" "} 
     </h3>
     
      <div>
        {name} mėgstamiausias augintinis yra {favourite}
      </div>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Vardas..."
        style={{ marginBottom: 16 }}
      />
       <input
        type="text"
        value={surname}
        onChange={(event) => setSurname(event.target.value)}
        placeholder="Pavardė..."
        style={{ marginBottom: 16 }}
      />
      <input
        type="number"
        value={age}
        onChange={(event) => setAge(event.target.value)}
        placeholder="Metai..."
        style={{ marginBottom: 16 }}
      />
     
      <select
        style={{ width: 200 }}
        value={favourite}
        onChange={(event) => setFavourite(event.target.value)}
      >
        <option value="">Nepasirinkta</option>
        <option value="Šuo">Šuo</option>
        <option value="Katė">Katė</option>
        <option value="Šinšila">Šinšila</option>
        <option value="Žiurkėnas">Žiurkėnas</option>
        <option value="Arklys">arklys</option>
      </select>
    </div>
  );
};

export default Input;