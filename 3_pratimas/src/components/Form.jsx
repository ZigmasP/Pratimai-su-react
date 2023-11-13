import { useState } from "react";


function Form() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [age, setAge] = useState('');
  const [data, setDate] = useState('');
  const [comment, setComment] = ('');

  const handleNameChange = (event) => {
    setName(event.target.value);
};

const handleSurnameChange = (event) => {
    setSurname(event.target.value);
};

const handleAgeChange = (event) => {
    setAge(event.target.value);
};

const handleDateChange = (event) => {
    setDate(event.target.value);
};

const handleCommentChange = (event) => {
    setComment(event.target.value);
};

const handleSubmit = (event) => {
    event.preventDefault();
};

return (
    <form onSubmit={handleSubmit}>
       <label>
         Vardas:
         <input type="text" value={name} onChange={handleNameChange} />
       </label>
       <label>
         Pavardė:
         <input type="text" value={surname} onChange={handleSurnameChange} />
       </label>
       <br />
       <label>
         Amžius:
         <input type="number" value={age} onChange={handleAgeChange} />
       </label>
       <br />
       <label>
         Data:
         <input type="date" value={data} onChange={handleDateChange} />
       </label>
       <br />
       <label>
         Komentaras:
         <input type="textarea" value={comment} onChange={handleCommentChange} />
       </label>
       <br />
       <input type="submit" value="Pateikti" />

    </form>
);

}

export default Form;