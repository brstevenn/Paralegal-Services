import React, { useState } from "react";
import useQueryParams from "./hooks/useQueryParams";
import formCase from "./formCase/formCase";
import NavBar from "./NavBar";
import "./styles/Form.css";

function Form() {
  const [values, setValues] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    description: "",
  });
  const [validations, setValidations] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    description: "",
  });

  const validateAll = () => {
    const [name, email] = values;
    const validations = {
      name: "",
      lastname: "",
      email: "",
      phone: "",
      service: "",
      description: "",
    };
    let isValid = true;

    if (!name) {
      validations.name = "Name is required";
    }

    if ((name && name.length < 3) || name.length > 50) {
      validations.name = "Name must contain between 3 and 50 characters";
      isValid = false;
    }

    if (email && !/\S+@\S+\.\S+/.test(email)) {
      validations.email = "Email format must be as example@mail.com";
      isValid = false;
    }

    if (!isValid) {
      setValidations(validations);
    }

    return isValid;
  };

  const validateOne = (e) => {
    const { name } = e.target;
    const value = values[name];
    let message = "";

    if (!value) {
      const nameUper = name[0].toUpperCase() + name.substring(1);
      message = `${nameUper} is required`;
    }

    if (value && name === "name" && (value.length < 3 || value.length > 50)) {
      message = "Name must contain between 3 and 50 characters";
    }

    if (value && name === "email" && !/\S+@\S+\.\S+/.test(value)) {
      message = "Email format must be as example@mail.com";
    }

    setValidations({ ...validations, [name]: message });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validateAll();

    if (!isValid) {
      return false;
    }

    console.log(values);

    alert(JSON.stringify(values));
  };

  const { name, lastname, email, description } = values;

  const {
    name: nameVal,
    lastname: lasnameVal,
    email: emailVal,
    description: descriptionVal,
  } = validations;

  const queries = useQueryParams();
  const querieKey = [],
    querieValue = [];

  if (queries !== undefined && queries.length <= 1) {
    querieKey.push(queries.map((n) => n.key));
    querieValue.push(queries.map((n) => n.value));
  }

  const dataCase = formCase(querieKey.toString(), querieValue.toString());

  const { data, value } = dataCase;

  return (
    <div>
      <NavBar />
      <div className="formContainer">
        <form action="" className="formContain" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="" className="labelContain">
              Name:
              <input
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                onBlur={validateOne}
              />
            </label>
            <div className="advert">{nameVal}</div>
          </div>
          <div>
            <label htmlFor="" className="labelContain">
              Lastname:
              <input
                type="text"
                name="lastname"
                value={lastname}
                onChange={handleChange}
                onBlur={validateOne}
              />
            </label>
            <div className="advert">{lasnameVal}</div>
          </div>
          <div>
            <label htmlFor="" className="labelContain">
              Email:
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                onBlur={validateOne}
              />
            </label>
            <div className="advert">{emailVal}</div>
          </div>
          <label htmlFor="" className="labelContain">
            Phone: <input type="text" />
          </label>
          <label htmlFor="" className="labelContain">
            {data}: <p className="valueText">{value}</p>
          </label>
          <div>
            <label htmlFor="" className=".labelContainDescription">
              <p className="descriptionTitle">Description:</p>
              <textarea
                className="descriptionText"
                name="description"
                id=""
                cols="30"
                rows="10"
                value={description}
                onChange={handleChange}
                onBlur={validateOne}
              ></textarea>
            </label>
            <div className="advert">{descriptionVal}</div>
          </div>
          <button className="formButton" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
