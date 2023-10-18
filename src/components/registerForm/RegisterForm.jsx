"use client";
import { useState } from "react";
import FormInput from "../formInput/FormInput";
import styles from "./registerForm.module.css";
import axios from "axios";

const RegisterForm = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [error, setError] = useState("");
  const [values, setValues] = useState({
    organization: "",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "organization",
      type: "text",
      label: "Nazwa Twojej firmy (widoczna dla klientów)",
      errorMessage: "Nazwa firmy musi zawierać od 3 do 24 znaków.",
      pattern: `^[a-zA-Z0-9AaĄąBbCcĆćDdEeĘęFfGgHhIiJjKkLlŁłMmNnŃńOoÓóPpRrSsŚśTtUuWwYyZzŹźŻż !@#$%&*]{3,24}$`,
      required: true,
    },
    {
      id: 2,
      name: "name",
      type: "text",
      label: "Twoje imię i nazwisko",
      errorMessage:
        "Imie i nazwisko musi zawierać co najmniej 3 litery oraz nie może zawierać znaków specjalnych.",
      pattern:
        "^[A-Za-zAaĄąBbCcĆćDdEeĘęFfGgHhIiJjKkLlŁłMmNnŃńOoÓóPpRrSsŚśTtUuWwYyZzŹźŻż ]{3,50}$",
      required: true,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      label: "Adres email",
      errorMessage: "Podaj poprawny adres email",
      required: true,
    },
    {
      id: 4,
      name: "password",
      type: "password",
      label: "Hasło",
      errorMessage:
        "Hasło musi składać się z 8 - 20 znaków (bez polskich liter) oraz zawierać przynajmniej jedną cyfrę, jedną wielką literę i jeden znak specjalny.",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      label: "Potwierdź hasło",
      errorMessage: "Hasła muszą być takie same.",
      pattern: values.password,
      required: true,
    },
  ];

  const registerUser = async (e) => {
    e.preventDefault();

    const user = {
      ...values,
      role: "admin",
    };

    await axios
      .post("https://api.easyselection.pl/api/users/signup", user)
      .then((response) => {
        setIsConfirmed(true);
      })
      .catch((error) => {
        setError(error.response.data.message);
      });
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <form className={styles.container} onSubmit={registerUser}>
      {isConfirmed ? (
        <p className={styles.confirm}>
          Konto zostało poprawnie utworzone.<br></br> Link aktywacyjny został
          wysłany na podany adres email - <b>{values.email}</b>
          <br></br> Postępuj zgodnie z instrukcją aby aktywować swoje konto.
        </p>
      ) : (
        <>
          <h2 className={styles.title}>
            Wypełnij formularz i załóż darmowe konto.
          </h2>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
              background={"#e9e9e9"}
            />
          ))}
          {error && <p className={styles.error}>{error}</p>}
          <p className={styles.terms}>
            Zakładając konto, wyrażasz zgodę na warunki korzystania z usług
            serwisu Maslado
          </p>
          <button className={styles.submitButton} type="submit">
            Zarejestruj się
          </button>
        </>
      )}
    </form>
  );
};

export default RegisterForm;
