import { FormEvent, useState } from "react";

const Form = () => {
  const [person, setPerson] = useState({
    name: '',
    age: '',
  });
  const handleSubmit =(event: FormEvent) => {
    event.preventDefault();
    console.log(person);
  }

  return (
    <form onSubmit={(handleSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
            Name
        </label>
        <input
          onChange={(event) => 
            setPerson({ ...person, name: event.target.value })
          }
          value = {person.name}
          id="name" 
          type="text" 
          className="form-control" 
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form">
            Age
        </label>
        <input
          value = {person.age}
          onChange={(event) =>
            setPerson({ ...person, age: parseInt(event.target.value)}) 
          } 
          id="age" 
          type="number" 
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" type="submit">Submit</button>
    </form>
  )
}

export default Form
